# Ch27. Vimscript 变量作用域

在深入学习 Vimscript 函数之前，我们先了解 Vim 变量的不同来源与作用域（scope）。

## 可变与不可变变量

在 Vim 中，你可以用 `let` 给变量赋值：

```
let pancake = "pancake"
```

之后你可以随时使用该变量：

```
echo pancake
" returns "pancake"
```

`let` 是**可变的**：也就是说你以后可以随时改变它的值。

```
let pancake = "pancake"
let pancake = "not waffles"

echo pancake
" returns "not waffles"
```

注意：当你想修改一个已经设置过的变量值时，依然需要写 `let`。

```
let beverage = "milk"

beverage = "orange juice"
" throws an error
```

你可以用 `const` 定义**不可变**变量（immutable）。不可变变量一旦赋值，就不能再用不同的值重新赋值：

```
const waffle = "waffle"
const waffle = "pancake"
" throws an error
```

## 变量来源

变量主要来自三类来源：环境变量、选项变量、寄存器变量。

### 环境变量

Vim 可以访问终端的环境变量。例如你的终端里有 `SHELL` 环境变量，你可以在 Vim 里这样访问：

```
echo $SHELL
" returns $SHELL value. In my case, it returns /bin/bash
```

### 选项变量

你可以用 `&` 访问 Vim 的选项（也就是你平常用 `set` 修改的那些设置）。

例如查看 Vim 当前使用的背景（light/dark）：

```
echo &background
" returns either "light" or "dark"
```

当然你也可以用 `set background?` 查看 `'background'` 的值。

### 寄存器变量

你可以用 `@` 访问 Vim 的寄存器（第 8 章讲过）。

假设寄存器 a 里已经保存了 "chocolate"，你可以用 `@a` 访问它，也可以用 `let` 修改它：

```
echo @a
" returns chocolate

let @a .= " donut"

echo @a
" returns "chocolate donut"
```

此时你从寄存器 `a` 粘贴（`"ap`）得到的就是 "chocolate donut"。运算符 `.=` 表示把两个字符串拼接起来。`let @a .= " donut"` 等价于 `let @a = @a . " donut"`。

## 变量作用域

Vim 有 9 种变量作用域，可以从变量名前缀看出来：

```
g:           Global variable
{nothing}    Global variable
b:           Buffer-local variable
w:           Window-local variable
t:           Tab-local variable
s:           Sourced Vimscript variable
l:           Function local variable
a:           Function formal parameter variable
v:           Built-in Vim variable
```

### 全局变量（Global）

当你声明一个“普通变量”：

```
let pancake = "pancake"
```

这里的 `pancake` 实际上就是一个全局变量。定义为全局变量后，你可以在任何地方访问它。

给变量名前加 `g:` 同样会创建全局变量：

```
let g:waffle = "waffle"
```

此时 `pancake` 与 `g:waffle` 都是全局作用域。它们都可以带或不带 `g:` 来访问：

```
echo pancake
" returns "pancake"

echo g:pancake
" returns "pancake"

echo waffle
" returns "waffle"

echo g:waffle
" returns "waffle"
```

### 缓冲区变量（Buffer）

以 `b:` 开头的是缓冲区变量：它只在当前 buffer（第 2 章）里可用。若你打开了多个 buffer，每个 buffer 都有自己独立的一组 `b:` 变量。

在 buffer 1：

```
const b:donut = "chocolate donut"
```

在 buffer 2：

```
const b:donut = "blueberry donut"
```

如果你在 buffer 1 执行 `echo b:donut`，会得到 "chocolate donut"；在 buffer 2 执行则得到 "blueberry donut"。

顺带一提，Vim 有一个特殊的缓冲区变量 `b:changedtick`，用于跟踪当前 buffer 的修改次数：

1. 执行 `echo b:changedtick`，记下返回的数字。
2. 在 Vim 里做一些修改。
3. 再次执行 `echo b:changedtick`，比较数字变化。

### 窗口变量（Window）

以 `w:` 开头的是窗口变量，只在当前 window 里存在。

在 window 1：

```
const w:donut = "chocolate donut"
```

在 window 2：

```
const w:donut = "raspberry donut"
```

在各自窗口里执行 `echo w:donut` 会得到不同的值。

### 标签页变量（Tab）

以 `t:` 开头的是标签页变量，只在当前 tab 里存在。

在 tab 1：

```
const t:donut = "chocolate donut"
```

在 tab 2：

```
const t:donut = "blackberry donut"
```

在各自 tab 里执行 `echo t:donut` 会得到不同值。

### 脚本变量（Script）

以 `s:` 开头的是脚本变量：只能在定义它的脚本文件内部访问。

假设你有一个文件 `dozen.vim`，内容如下：

```
let s:dozen = 12

function Consume()
  let s:dozen -= 1
  echo s:dozen " is left"
endfunction
```

用 `:source dozen.vim` 加载后，调用 `Consume` 函数：

```
:call Consume()
" returns "11 is left"

:call Consume()
" returns "10 is left"

:echo s:dozen
" Undefined variable error
```

你会发现：调用 `Consume` 会按预期递减 `s:dozen`；但你在脚本外直接 `echo s:dozen` 会报错，因为超出了作用域——`s:dozen` 只能在 `dozen.vim` 内部访问。

每次你 `:source dozen.vim`，都会把 `s:dozen` 重置回 12。如果用户在中途递减时又执行了 `:source dozen.vim`，计数器会意外回到 12。可以通过重构避免这种“重复 source 导致重置”的问题：

```
if !exists("s:dozen")
  let s:dozen = 12
endif

function Consume()
  let s:dozen -= 1
  echo s:dozen
endfunction
```

这样当你在递减过程中再次 source 文件时，Vim 会先检查 `!exists("s:dozen")`，如果 `s:dozen` 已经存在，就不会再重置成 12。

### 函数局部变量与函数形参变量

函数局部变量（`l:`）与函数形参变量（`a:`）会在下一章里讲。

### Vim 内建变量

以 `v:` 开头的是 Vim 的特殊内建变量。你不能自己定义这些变量。你已经见过其中一些：

- `v:version` 告诉你当前 Vim 的版本。
- `v:key` 在迭代字典时包含当前 key。
- `v:val` 在 `map()` / `filter()` 等操作中包含当前元素值。
- `v:true`、`v:false`、`v:null`、`v:none` 是特殊数据类型。

还有更多内建变量。完整列表见 `:h vim-variable` 或 `:h v:`。

## 聪明地使用变量作用域

能够快速访问环境变量/选项变量/寄存器变量，会让你在定制编辑器与终端环境时更灵活。你也学习了 Vim 的 9 种作用域变量，它们各自有不同的约束。善用这些作用域可以帮助你把程序解耦得更清晰。

你已经走到这里了：数据类型、组合方式、变量作用域都学过了。只剩下最后一个关键点：函数。

## Link

- Prev [Ch26. Vimscript 条件与循环](./ch26_vimscript_conditionals_and_loops.md)
- Next [Ch28. Vimscript 函数](./ch28_vimscript_functions.md)

