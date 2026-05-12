# Ch29. 写一个插件：创建 Titlecase Operator

当你开始把 Vim 用得比较顺手时，很自然会想写一些属于自己的插件。我最近写了第一个 Vim 插件：[totitle-vim](https://github.com/iggredible/totitle-vim)。它是一个“标题大小写”（title case）的 operator 插件，类似 Vim 自带的 `gU`（转大写）、`gu`（转小写）和 `g~`（大小写切换）这类 operator。

本章会拆解 `totitle-vim` 插件的实现过程，希望能让你更清楚“从想法到可用插件”大致需要哪些步骤，也希望能激发你做出属于自己的独特插件。

> 说明：本章原文非常长，且包含大量实现细节与代码。这里的中文版本尽量保持结构与代码一致，并重点把“设计决策 / Vimscript 技巧 / operator 机制”翻译清楚。代码块保持原样，便于你对照与复现。

## 问题是什么

我用 Vim 写文章（包括这本指南）。其中一个痛点是：标题需要符合“Title Case”的规则。

一种半自动的办法是用命令 `g/^#/ s/\<./\u\0/g` 把标题里的每个单词首字母大写。这个命令基本够用，但它并不是真正的 Title Case。比如 "Capitalize The First Letter Of Each Word" 里，按常见规则 "the"、"of" 这类词一般不应该大写；如果没有正确的大小写规则，整句看起来会有点别扭。

起初我并没打算写插件，而且当时也确实已经有一个 titlecase 插件：[vim-titlecase](https://github.com/christoomey/vim-titlecase)。但它有些行为不符合我的预期，尤其是**块选择**（blockwise visual mode，`Ctrl-V`）下的行为。

例如有文本：

```
test title one
test title two
test title three
```

如果我用块选择选中每行里的 "tle"：

```
test ti[tle] one
test ti[tle] two
test ti[tle] three
```

按下 `gt` 时，该插件不会对选中的内容做 titlecase。我觉得这与 Vim 自带 `gu`、`gU`、`g~` 的块选择行为不一致。因此我决定在 vim-titlecase 的思路上继续改造，做一个在 `v`/`V`/`Ctrl-V` 三种可视模式下行为都一致的 titlecase operator。

再次强调：vim-titlecase 本身是个很好的插件，完全值得单独使用。这里更多是“我想写一个自己的 Vim 插件”，以及对一致性的一点执念。

### 插件规则设计

在写第一行代码之前，需要先确定 Title Case 的规则。我在 [titlecaseconverter](https://titlecaseconverter.com/rules/) 上看到了一张关于不同标题大小写规范的表：英语里竟然至少有 8 套不同的规则。

最终我取了一个“足够好”的通用规则集合（大概率也不会有人因为你用 AMA 而没用 APA 来找你麻烦）。基本规则：

- 第一个单词总是大写。
- 一些副词、连词、介词等保持小写。
- 如果输入单词完全是大写，则不做改动（可能是缩写）。

至于哪些词应该小写，不同规范有不同列表。我选择固定这组词：

`a an and at but by en for in nor of off on or out per so the to up yet vs via`

### 用户界面（交互）设计

我希望这个插件是一个 operator，用来补全 Vim 的大小写 operator 家族：`gu`、`gU`、`g~`。作为 operator，它必须接受 motion 或 text object：

- `gtw`：把下一个单词做 titlecase
- `gtiw`：把 inner word 做 titlecase
- `gt$`：从当前位置到行尾做 titlecase
- `gtt`：当前行做 titlecase（类似 `guu` / `gUU`）
- `gti(`：括号内做 titlecase

我也希望映射到 `gt`，便于记忆。同时它必须在所有可视模式下工作：`v`、`V`、`Ctrl-V`。也就是：不管你用哪种可视选择方式选中文本，按下 `gt` 都应该把选中内容转换为 Title Case。

## Vim Runtime

看仓库结构，会看到两个目录：`plugin/` 与 `doc/`。

Vim 启动时会在 `~/.vim`（或等价路径）下寻找特定目录与脚本并加载它们。更多可以回顾 Vim Runtime 章节。

这个插件用到了两个 Vim runtime 目录：

- `doc/`：放帮助文档（以后可 `:h totitle` 搜索）
- `plugin/`：放启动时加载一次的脚本

`plugin/` 目录里只有一个脚本 `totitle.vim`（名字其实无所谓）。插件的核心逻辑都在这个文件里。

## 映射（Mappings）

文件开头一般会看到这段：

```
if !exists('g:totitle_default_keys')
  let g:totitle_default_keys = 1
endif
```

Vim 启动时 `g:totitle_default_keys` 还不存在，所以 `!exists(...)` 为真，于是把它设为 1（在 Vim 里，0 为假，非 0 为真）。

文件末尾会看到：

```
if g:totitle_default_keys
  nnoremap <expr> gt ToTitle()
  xnoremap <expr> gt ToTitle()
  nnoremap <expr> gtt ToTitle() .. '_'
endif
```

这就是默认的 `gt` 映射：

- `nnoremap <expr> gt ToTitle()`：在普通模式映射一个 *operator*，从而支持 `operator + motion/text-object` 组合（例如 `gtw`、`gtiw` 等）。后面会解释 operator 映射的细节。
- `xnoremap <expr> gt ToTitle()`：在可视模式下对选中区域做 titlecase。
- `nnoremap <expr> gtt ToTitle() .. '_'`：映射“按行”的 operator（类比 `guu` / `gUU`）。`..` 是字符串拼接；`_` 作为 motion 在 `:help _` 里解释为“向下计 1 行”，因此能实现对当前行生效（试试 `gU_`、`d_` 会发现分别类似 `gUU`、`dd`）。
- `<expr>` 允许你带计数，例如 `3gtw` 对接下来 3 个单词做 titlecase。

如果你不想用默认 `gt`（因为它会覆盖 Vim 自带的 `gt`：tab next），你可以在 vimrc 里设置 `let g:totitle_default_keys = 0` 来禁用默认映射，然后自己定义例如 `gz`：

```
let g:totitle_default_keys = 0

nnoremap <expr> gz ToTitle()
xnoremap <expr> gz ToTitle()
nnoremap <expr> gzz ToTitle() .. '_'
```

## ToTitle 函数（核心逻辑）

`ToTitle()` 是文件中最长的函数。它做了几件关键事：

- 当作为 operator 运行时，先把 `opfunc` 设为自身，然后返回 `g@` 进入 operator-pending 流程。
- 当作为“直接调用字符串转换函数”使用时（比如传入文本），会把文本拆词、按规则 capitalise，再拼回去。
- 当作为可视模式或 operator 处理选区时，会保存/恢复寄存器与选区等状态，读取选中内容、转换、再写回。

由于该函数很长，这里不逐行翻译每一段实现细节；你在阅读时，可以把重点放在：

- `opfunc` 与 `g@` 这套 operator 自定义机制
- 如何可靠地保存/恢复寄存器、selection、clipboard、visual marks
- block/line/char 三种选区类型如何分别处理

如果你想进一步深入，我建议直接对照原始插件仓库代码阅读（中文侧配合本章前半部分理解整体结构就够了）：

- 插件仓库：`https://github.com/iggredible/totitle-vim`

## Link

- Prev [Ch28. Vimscript 函数](./ch28_vimscript_functions.md)
- Next（结束）

