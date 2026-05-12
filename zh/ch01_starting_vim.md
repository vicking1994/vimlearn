# 第 1 章：开始使用 Vim

在本章中，你将学习如何从终端以不同方式启动 Vim。撰写本指南时我使用的是 Vim 8.2。若你使用 Neovim 或较旧版本的 Vim，大体上也没问题，但要注意某些命令可能不可用。

## 安装

我不会逐步说明如何在某台具体机器上安装 Vim。好消息是，大多数基于 Unix 的计算机通常已经预装了 Vim。若没有，多数发行版也会提供安装 Vim 的说明。

若要了解更多关于 Vim 安装过程的信息，可访问官方下载网站或官方 GitHub 仓库：
- [Vim 官网](https://www.vim.org/download.php)
- [Vim GitHub](https://github.com/vim/vim)

## `vim` 命令

安装好 Vim 后，在终端中运行：

```bash
vim
```

你会看到启动画面。这里就是你要编辑新文件的地方。与大多数文本编辑器和 IDE 不同，Vim 是**模态**编辑器。若要输入 "hello"，需要先按 `i` 进入插入模式。输入 `ihello<Esc>` 即可插入文本 "hello"。

## 退出 Vim

退出 Vim 有多种方式。最常见的是输入：

```
:quit
```

可简写为 `:q`。该命令属于命令行模式（Vim 的另一种模式）。在普通模式下键入 `:`，光标会移到屏幕底部，在那里可以输入一些命令。命令行模式将在第 15 章再讲。若你处于插入模式，键入 `:` 会在屏幕上直接打出字符 ":"。此时需要先回到普通模式。按 `<Esc>` 可回到普通模式。顺便一提，在命令行模式下按 `<Esc>` 也可以回到普通模式。你会发现，按 `<Esc>` 可以从多种 Vim 模式「逃回」普通模式。

## 保存文件

要保存修改，输入：

```
:write
```

也可简写为 `:w`。若是新文件，需要先命名才能保存。我们把它命名为 `file.txt`。执行：

```
:w file.txt
```

若要保存并退出，可以把 `:w` 和 `:q` 合在一起：

```
:wq
```

若要不保存任何修改就退出，在 `:q` 后加上 `!` 以强制退出：

```
:q!
```

还有其他退出 Vim 的方式，但上述几种是你日常会最常用的。

## 帮助

通篇指南里，我会让你查阅各种 Vim 帮助页。输入 `:help {某条命令}`（简写 `:h`）即可打开帮助。可以把主题或命令名作为 `:h` 的参数。例如，要了解退出 Vim 的不同方式，可输入：

```
:h write-quit
```

我怎么知道要搜 "write-quit"？其实我并不知道。我只是输入 `:h`，再输入 "quit"，然后按 `<Tab>`。Vim 会列出相关的关键字供你选择。若你想查某件事（「我希望 Vim 能这样……」），就输入 `:h`，试着输入一些关键字，再按 `<Tab>`。

## 打开文件

要从终端用 Vim 打开文件（`hello1.txt`），运行：

```bash
vim hello1.txt
```

也可以一次打开多个文件：

```bash
vim hello1.txt hello2.txt hello3.txt
```

Vim 会在不同的缓冲区中打开 `hello1.txt`、`hello2.txt` 和 `hello3.txt`。缓冲区将在下一章讲解。

## 参数

你可以给终端里的 `vim` 命令传入不同的标志和选项。

要查看当前 Vim 版本，运行：

```bash
vim --version
```

这会显示当前 Vim 版本以及所有可用功能；每项功能前面会标有 `+` 或 `-`。本指南中的某些内容需要特定功能可用。例如，在后面的章节里你会用 `:history` 命令探索 Vim 的命令行历史。你的 Vim 安装需要带有 `+cmdline_history` 功能，该命令才能工作。若 Vim 来自常见的下载来源，你的安装很可能已具备所需功能，尤其是预装或主流渠道获得的版本。

许多在终端里能做的事，在 Vim 内部也能做。要在 **Vim 内部** 查看版本，可以运行：

```
:version
```

若要打开文件 `hello.txt` 并立即执行一条 Vim 命令，可以给 `vim` 命令传入 `+{cmd}` 选项。

在 Vim 中，可以用 `:s` 命令（`:substitute` 的缩写）替换字符串。若要打开 `hello.txt` 并把文中所有的 "pancake" 换成 "bagel"，运行：

```bash
vim +%s/pancake/bagel/g hello.txt
```

这些 Vim 命令可以叠加：

```bash
vim +%s/pancake/bagel/g +%s/bagel/egg/g +%s/egg/donut/g hello.txt
```

Vim 会：
1. 把所有 "pancake" 替换为 "bagel"
2. 再把 "bagel" 替换为 "egg"
3. 再把 "egg" 替换为 "donut"

替换命令将在后面的章节学习。

你也可以使用 `-c` 选项并在其后写上 Vim 命令，而不使用 `+` 写法：

```bash
vim -c %s/pancake/bagel/g hello.txt
vim -c %s/pancake/bagel/g -c %s/bagel/egg/g -c %s/egg/donut/g hello.txt
```

## 打开多个窗口

可以用 `-o` 和 `-O` 选项分别以水平分割和垂直分割的方式启动 Vim。

要用 2 个水平窗口打开 Vim，运行：

```bash
vim -o2
```

要用 5 个水平窗口打开 Vim，运行：

```bash
vim -o5
```

要用 5 个水平窗口打开 Vim，并在前两个窗口中分别装入 `hello1.txt` 和 `hello2.txt`，运行：

```bash
vim -o5 hello1.txt hello2.txt
```

要用 2 个垂直窗口、5 个垂直窗口，以及用 `hello1.txt` 和 `hello2.txt` 填充 5 个垂直窗口中的前两个，分别运行：

```bash
vim -O2
vim -O5
vim -O5 hello1.txt hello2.txt
```

## 挂起

若在编辑过程中需要挂起 Vim，可以按 `Ctrl-z`。也可以执行 `:stop` 或 `:suspend` 命令。要回到被挂起的 Vim，在终端中运行 `fg`。

## 更聪明地启动 Vim

`vim` 命令可以像其他终端命令一样接受许多选项。有两种方式可以把命令行模式的 Vim 命令作为参数传入：`+{cmd}` 和 `-c cmd`。随着你在本指南中学到更多命令，不妨想想能否在启动 Vim 时就执行它们。此外，作为终端命令，`vim` 还可以与许多其他终端命令组合使用。例如，可以把 `ls` 的输出重定向到 Vim 中编辑：`ls -l | vim -`。

要进一步了解终端里的 `vim` 命令，可查看 `man vim`。要进一步了解 Vim 编辑器，请继续阅读本指南并使用 `:help` 命令。

## 链接
- 上一章 [第 0 章：请先读这一章](./ch00_read_this_first.md)
- 下一章 [第 2 章：缓冲区、窗口与标签页](./ch02_buffers_windows_tabs.md)
