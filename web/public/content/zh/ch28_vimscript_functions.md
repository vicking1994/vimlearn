# Ch28. Vimscript 函数

函数（function）是一种抽象手段（means of abstraction），也是学习一门新语言的第三个关键要素。

在前几章里，你已经见过 Vimscript 的内建函数（`len()`、`filter()`、`map()` 等）以及自定义函数的用法。本章会更深入地理解“函数是如何工作的”。

## 函数语法规则

一个 Vimscript 函数的核心语法如下：

```
function {FunctionName}()
  {do-something}
endfunction
```

函数定义必须以**大写字母**开头。它以 `function` 关键字开始，以 `endfunction` 结束。下面是一个合法函数：

```
function! Tasty()
  echo "Tasty"
endfunction
```

下面这个不合法，因为函数名不以大写字母开头：

```
function tasty()
  echo "Tasty"
endfunction
```

如果你用脚本作用域前缀（`s:`）定义函数，则可以使用小写：`function s:tasty()` 是合法的。Vim 要求函数名大写，主要是为了避免与 Vim 的内建函数（全部小写）混淆。

函数名不能以数字开头：`1Tasty()` 不合法，但 `Tasty1()` 合法。函数名也不能包含 `_` 以外的非字母数字字符：`Tasty-food()`、`Tasty&food()`、`Tasty.food()` 都不合法，但 `Tasty_food()` 合法。

如果你定义了两个同名函数，Vim 会报错提示函数已存在。要覆盖同名函数，在 `function` 后加 `!`：

```
function! Tasty()
  echo "Tasty"
endfunction
```

## 列出可用函数

要查看 Vim 中所有内建与自定义函数，可以运行 `:function`。要查看 `Tasty` 的内容，运行 `:function Tasty`。

也可以按模式搜索函数：`:function /pattern`，类似 Vim 的 `/pattern` 搜索。比如 `:function /map` 会找出所有函数名里包含 "map" 的函数（若你装了插件，也会列出插件定义的函数）。

如果你想知道某个函数来自哪里，可以用 `:verbose` 搭配 `:function`。比如查看所有名字里包含 "map" 的函数来自哪些文件：

```
:verbose function /map
```

我运行它时会看到很多结果。其中一条会告诉我 `fzf#vim#maps` 这个 autoload 函数（回顾见第 23 章）定义在 `~/.vim/plugged/fzf.vim/autoload/fzf/vim.vim` 的第 1263 行。这对调试非常有用：

```
function fzf#vim#maps(mode, ...)
        Last set from ~/.vim/plugged/fzf.vim/autoload/fzf/vim.vim line 1263
```

## 删除函数

删除一个已存在的函数使用 `:delfunction {Function_name}`。例如删除 `Tasty`：`:delfunction Tasty`。

## 函数返回值

函数若要返回值，需要显式写 `return`。否则 Vim 会隐式返回 0。

```
function! Tasty()
  echo "Tasty"
endfunction
```

空的 `return` 也等价于返回 0：

```
function! Tasty()
  echo "Tasty"
  return
endfunction
```

若执行 `:echo Tasty()`，Vim 会先显示 "Tasty"，然后返回 0（隐式返回值）。要让它返回字符串 "Tasty"，可以这样写：

```
function! Tasty()
  return "Tasty"
endfunction
```

现在 `:echo Tasty()` 会返回 "Tasty"。

函数可以嵌进表达式里，表达式会使用函数返回值。例如 `:echo Tasty() . " Food!"` 会输出 "Tasty Food!"。

## 形参（Formal Arguments）

要给 `Tasty` 传入形参 `food`，可以这样写：

```
function! Tasty(food)
  return "Tasty " . a:food
endfunction

echo Tasty("pastry")
" returns "Tasty pastry"
```

`a:` 是上一章提到的变量作用域之一，表示函数形参变量。Vim 在函数内通过 `a:` 来访问形参的值。不加 `a:` 会报错：

```
function! Tasty(food)
  return "Tasty " . food
endfunction

echo Tasty("pasta")
" returns "undefined variable name" error
```

## 函数局部变量（Function Local Variable）

上一章还没讲到的另一种变量是函数局部变量（`l:`）。

在函数里定义变量：

```
function! Yummy()
  let location = "tummy"
  return "Yummy in my " . location
endfunction

echo Yummy()
" returns "Yummy in my tummy"
```

这里的 `location` 等价于 `l:location`。函数内部定义的变量只在该函数内可见。用户看到 `location` 时，可能误以为它是全局变量。我更倾向于显式写 `l:`，明确它是函数局部变量。

另一个推荐用 `l:` 的理由是：Vim 有些特殊变量有“看起来像普通变量”的别名。例如 `v:count` 的别名是 `count`。在 Vim 中访问 `count` 等价于访问 `v:count`，很容易不小心踩到。

```
function! Calories()
  let count = "count"
  return "I do not " . count . " my calories"
endfunction

echo Calories()
" throws an error
```

上述会报错，因为 `let count = "count"` 等价于想重定义只读的 `v:count`。修复方式是使用 `l:count`：

```
function! Calories()
  let l:count = "count"
  return "I do not " . l:count . " my calories"
endfunction

echo Calories()
" returns "I do not count my calories"
```

## 调用函数

Vim 有一个 `:call` 命令用于调用函数：

```
function! Tasty(food)
  return "Tasty " . a:food
endfunction

call Tasty("gravy")
```

`:call` 不会输出返回值。如果你想看到返回值，别写 `echo call Tasty("gravy")` ——这会报错，因为 `call`（这里指 `:call` 命令）与 `echo` 都是命令行模式命令，不能用一个命令行命令去“调用”另一个命令行命令。

你要用的是 `call()` 函数：

```
echo call("Tasty", ["gravy"])
" returns "Tasty gravy"
```

这里其实出现了两种 `call`：命令 `:call` 和函数 `call()`。`call()` 的第一个参数是函数名（字符串），第二个参数是形参列表（list）。

更多见 `:h call()` 和 `:h :call`。

## 默认参数

你可以用 `=` 为形参设置默认值。如果只传一个参数给 `Breakfast`，则 `beverage` 会使用默认值 "Milk"：

```
function! Breakfast(meal, beverage = "Milk")
  return "I had " . a:meal . " and " . a:beverage . " for breakfast"
endfunction

echo Breakfast("Hash Browns")
" returns I had hash browns and milk for breakfast

echo Breakfast("Cereal", "Orange Juice")
" returns I had Cereal and Orange Juice for breakfast
```

## 可变参数（Variable Arguments）

你可以用省略号 `...` 接受可变参数。当你不知道用户会传多少个参数时非常有用。

例如自助餐（你永远不知道客人会吃多少）：

```
function! Buffet(...)
  return a:1
endfunction
```

`a:1` 表示可变参数里的第 1 个参数（最多到 20：`a:1`、`a:2` 等）。如果你运行 `echo Buffet("Noodles")` 会输出 "Noodles"。如果运行 `echo Buffet("Noodles", "Sushi")` 仍只会输出 "Noodles"。

若要输出前两个参数可以这样写：

```
function! Buffet(...)
  return a:1 . " " . a:2
endfunction

echo Buffet("Noodles", "Sushi")
" returns "Noodles Sushi"
```

但问题来了：如果用户只传一个参数，`a:2` 不存在就会报错。怎样让它更灵活？

Vim 提供了 `a:0`：表示 `...` 实际传入的参数个数。

```
function! Buffet(...)
  return a:0
endfunction

echo Buffet("Noodles")
" returns 1

echo Buffet("Noodles", "Sushi")
" returns 2

echo Buffet("Noodles", "Sushi", "Ice cream", "Tofu", "Mochi")
" returns 5
```

有了 `a:0`，你就能按参数数量迭代：

```
function! Buffet(...)
  let l:food_counter = 1
  let l:foods = ""
  while l:food_counter <= a:0
    let l:foods .= a:{l:food_counter} . " "
    let l:food_counter += 1
  endwhile
  return l:foods
endfunction
```

`a:{l:food_counter}` 是一种“花括号插值”：用 `food_counter` 的值去访问 `a:1`、`a:2`、`a:3` ……

```
echo Buffet("Noodles")
" returns "Noodles"

echo Buffet("Noodles", "Sushi", "Ice cream", "Tofu", "Mochi")
" returns "Noodles Sushi Ice cream Tofu Mochi"
```

可变参数还有一个特殊变量 `a:000`：它会把所有可变参数作为一个 list 返回：

```
function! Buffet(...)
  return a:000
endfunction

echo Buffet("Noodles")
" returns ["Noodles"]

echo Buffet("Noodles", "Sushi", "Ice cream", "Tofu", "Mochi")
" returns ["Noodles", "Sushi", "Ice cream", "Tofu", "Mochi"]
```

用 `for` 循环重写会更清晰：

```
function! Buffet(...)
  let l:foods = ""
  for food_item in a:000
    let l:foods .= food_item . " "
  endfor
  return l:foods
endfunction

echo Buffet("Noodles", "Sushi", "Ice cream", "Tofu", "Mochi")
" returns Noodles Sushi Ice cream Tofu Mochi
```

## range（范围函数）

在函数定义末尾加 `range`，即可定义一个“范围函数”。范围函数有两个特殊变量：`a:firstline` 与 `a:lastline`。

```
function! Breakfast() range
  echo a:firstline
  echo a:lastline
endfunction
```

当你在第 100 行运行 `call Breakfast()`，它会输出 firstline=100、lastline=100。若你用任意可视模式（`v`、`V`、`Ctrl-V`）选中 101 到 105 行再运行 `call Breakfast()`，则 firstline=101、lastline=105。它们表示函数被调用时的最小/最大范围。

你也可以在 `:call` 前直接传范围：`:11,20call Breakfast()` 会让 firstline=11、lastline=20。

你可能会问：“那我直接用 `line('.')` 不也能拿到行号吗？”关键区别在于：不带 `range` 的函数，当你写 `:11,20call Breakfast()` 时会执行多次（每行执行一次）；带 `range` 的函数只会执行一次。

## dict（字典方法）

你可以在定义函数时加 `dict`，让它作为字典的“方法”使用。

例如 `SecondBreakfast` 返回字典里的 `breakfast`：

```
function! SecondBreakfast() dict
  return self.breakfast
endfunction
```

把它放进字典：

```
let meals = {"breakfast": "pancakes", "second_breakfast": function("SecondBreakfast"), "lunch": "pasta"}

echo meals.second_breakfast()
" returns "pancakes"
```

有了 `dict`，`self` 指向保存该函数的字典（这里是 `meals`）。因此 `self.breakfast` 等价于 `meals.breakfast`。

另一种把函数“挂”到字典上的方式是使用命名空间：

```
function! meals.second_lunch()
  return self.lunch
endfunction

echo meals.second_lunch()
" returns "pasta"
```

这种方式不需要写 `dict` 关键字。

## Funcref（函数引用）

funcref 是对函数的引用，是 Vimscript 的数据类型之一（前面章节已提到）。

上面的 `function("SecondBreakfast")` 就是一个 funcref。Vim 内建函数 `function()` 接受函数名（字符串）并返回对应 funcref。

```
function! Breakfast(item)
  return "I am having " . a:item . " for breakfast"
endfunction

let Breakfastify = Breakfast
" returns error

let Breakfastify = function("Breakfast")

echo Breakfastify("oatmeal")
" returns "I am having oatmeal for breakfast"

echo Breakfastify("pancake")
" returns "I am having pancake for breakfast"
```

在 Vim 里，如果你要把函数赋值给变量，不能直接 `let MyVar = MyFunc`，必须用 `function()`：`let MyVar = function("MyFunc")`。

funcref 也可以和 `map()` / `filter()` 配合使用。注意：`map()` / `filter()` 会把“索引”作为第一个参数，把当前元素作为第二个参数传入：

```
function! Breakfast(index, item)
  return "I am having " . a:item . " for breakfast"
endfunction

let breakfast_items = ["pancakes", "hash browns", "waffles"]
let first_meals = map(breakfast_items, function("Breakfast"))

for meal in first_meals
  echo meal
endfor
```

## Lambda（匿名函数）

在 map/filter 场景下，更好的方式往往是用 lambda（匿名函数）：

```
let Plus = {x,y -> x + y}
echo Plus(1,2)
" returns 3

let Tasty = { -> 'tasty'}
echo Tasty()
" returns "tasty"
```

lambda 里也可以调用普通函数：

```
function! Lunch(item)
  return "I am having " . a:item . " for lunch"
endfunction

let lunch_items = ["sushi", "ramen", "sashimi"]

let day_meals = map(lunch_items, {index, item -> Lunch(item)})

for meal in day_meals
  echo meal
endfor
```

如果你不想在 lambda 里调用函数，也可以直接写成：

```
let day_meals = map(lunch_items, {index, item -> "I am having " . item . " for lunch"})
```

## 方法链（Method Chaining）

你可以用 `->` 把多个 Vimscript 函数或 lambda 串联起来。注意：`->` 后必须紧跟方法名，中间**不能有空格**。

```
Source->Method1()->Method2()->...->MethodN()
```

例如把 float 转成整数：

```
echo 3.14->float2nr()
" returns 3
```

更复杂的例子：把一个列表里每个单词首字母大写，然后排序，再用逗号拼接成字符串：

```
function! Capitalizer(word)
  return substitute(a:word, "\^\.", "\\u&", "g")
endfunction

function! CapitalizeList(word_list)
  return map(a:word_list, {index, word -> Capitalizer(word)})
endfunction

let dinner_items = ["bruschetta", "antipasto", "calzone"]

echo dinner_items->CapitalizeList()->sort()->join(", ")
" returns "Antipasto, Bruschetta, Calzone"
```

用方法链写出来，读起来更直观：看一眼 `dinner_items->CapitalizeList()->sort()->join(", ")` 就能理解在做什么。

## closure（闭包）

在函数里定义的变量只存在于函数边界内，这叫词法作用域（lexical scope）。

```
function! Lunch()
  let appetizer = "shrimp"

  function! SecondLunch()
    return appetizer
  endfunction

  return funcref("SecondLunch")
endfunction
```

这里 `appetizer` 定义在 `Lunch` 里，而 `Lunch` 返回 `SecondLunch` 的 funcref。注意：`SecondLunch` 使用了 `appetizer`，但在 Vimscript 中它并不能访问到这个变量。若你执行 `echo Lunch()()`，会得到“未定义变量”的错误。

解决办法是给内部函数加 `closure` 关键字：

```
function! Lunch()
  let appetizer = "shrimp"

  function! SecondLunch() closure
    return appetizer
  endfunction

  return funcref("SecondLunch")
endfunction
```

现在执行 `echo Lunch()()` 会返回 "shrimp"。

## 聪明地学习 Vimscript 函数

本章你学习了 Vim 函数的“解剖结构”。你学会了用 `range`、`dict`、`closure` 等关键字改变函数行为；也学会了用 lambda，并用 `->` 把多个函数串联起来。函数是构建复杂抽象的重要工具。

下一章我们会把这些知识串起来，写一个真正的 Vim 插件。

## Link

- Prev [Ch27. Vimscript 变量作用域](./ch27_vimscript_variable_scopes.md)
- Next [Ch29. 写一个插件：Titlecase Operator](./ch29_plugin_example_writing-a-titlecase-plugin.md)

