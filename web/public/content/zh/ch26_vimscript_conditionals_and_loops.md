# Ch26. Vimscript 条件与循环

在了解了基本数据类型之后，下一步就是学习如何把它们组合起来写出最基本的程序。一个基础程序通常由**条件分支**与**循环**构成。

本章将学习如何使用 Vimscript 的数据类型来编写条件与循环。

## 关系运算符

Vimscript 的关系运算符与多数编程语言类似：

```
a == b		equal to
a != b		not equal to
a >  b		greater than
a >= b		greater than or equal to
a <  b		less than
a <= b		less than or equal to
```

例如：

```
:echo 5 == 5
:echo 5 != 5
:echo 10 > 5
:echo 10 >= 5
:echo 10 < 5
:echo 5 <= 5
```

回忆一下：在算术表达式里，字符串会被强制转换为数字。在相等判断里，Vim 也会把字符串强制转换为数字。"5foo" 会被转换为 5（真值）：

```
:echo 5 == "5foo"
" returns true
```

同样回忆：如果字符串以非数字字符开头，比如 "foo5"，它会被转换为 0（假值）：

```
echo 5 == "foo5"
" returns false
```

### 字符串匹配运算符

Vim 还有一组用于字符串比较的关系运算符：

```
a =~ b
a !~ b
```

例子：

```
let str = "hearty breakfast"

echo str =~ "hearty"
" returns true

echo str =~ "dinner"
" returns false

echo str !~ "dinner"
" returns true
```

`=~` 会对给定字符串做正则匹配。上例中 `str =~ "hearty"` 为真，是因为 `str` **包含** "hearty" 这个模式。你当然也可以用 `==` / `!=`，但它们会把表达式与整个字符串做完整比较，而 `=~` / `!~` 更灵活：

```
echo str == "hearty"
" returns false

echo str == "hearty breakfast"
" returns true
```

再试试这个（注意大写的 "H"）：

```
echo str =~ "Hearty"
" true
```

即使 "Hearty" 大写，它仍然返回 true。原因是我当前的 Vim 设置忽略大小写（`set ignorecase`），因此比较时也会忽略大小写。如果关闭忽略大小写（`set noignorecase`），比较就会返回 false：

```
set noignorecase
echo str =~ "Hearty"
" returns false because case matters

set ignorecase
echo str =~ "Hearty"
" returns true because case doesn't matter
```

如果你在为别人写插件，这就有点棘手：用户到底是 `ignorecase` 还是 `noignorecase`？你肯定不希望强迫用户修改该选项。怎么办？

幸运的是，Vim 提供了可以**总是匹配/总是忽略**大小写的运算符：要总是区分大小写，在末尾加 `#`：

```
set ignorecase
echo str =~# "hearty"
" returns true

echo str =~# "HearTY"
" returns false

set noignorecase
echo str =~# "hearty"
" true

echo str =~# "HearTY"
" false

echo str !~# "HearTY"
" true
```

要总是忽略大小写，在末尾加 `?`：

```
set ignorecase
echo str =~? "hearty"
" true

echo str =~? "HearTY"
" true

set noignorecase
echo str =~? "hearty"
" true

echo str =~? "HearTY"
" true

echo str !~? "HearTY"
" false
```

我更倾向于使用 `#` 强制区分大小写，这样更稳妥。

## if

看完了相等/比较表达式，我们来接触最基本的条件语句：`if`。

最基本语法是：

```
if {clause}
  {some expression}
endif
```

你也可以用 `elseif` / `else` 扩展分支：

```
if {predicate1}
  {expression1}
elseif {predicate2}
  {expression2}
elseif {predicate3}
  {expression3}
else
  {expression4}
endif
```

例如插件 [vim-signify](https://github.com/mhinz/vim-signify) 会根据你的 Vim 版本/特性选择不同的安装方式。下面是它们 README 里的示例：

```
if has('nvim') || has('patch-8.0.902')
  Plug 'mhinz/vim-signify'
else
  Plug 'mhinz/vim-signify', { 'branch': 'legacy' }
endif
```

## 三元表达式

Vim 支持三元表达式，用于写一行的条件选择：

```
{predicate} ? expressiontrue : expressionfalse
```

例如：

```
echo 1 ? "I am true" : "I am false"
```

因为 1 是真值，所以输出 "I am true"。再举个实际一点的例子：如果晚上使用 Vim，就把背景设为 dark，否则设为 light，可在 vimrc 里写：

```
let &background = strftime("%H") < 18 ? "light" : "dark"
```

`&background` 对应 Vim 的 `'background'` 选项。`strftime("%H")` 返回当前小时数：若还没到晚上 6 点，用浅色背景，否则用深色背景。

## or

逻辑或（`||`）与多数语言一致：

```
{Falsy expression}  || {Falsy expression}   false
{Falsy expression}  || {Truthy expression}  true
{Truthy expression} || {Falsy expression}   true
{Truthy expression} || {Truthy expression}  true
```

Vim 会求值并返回 1（真值）或 0（假值）：

```
echo 5 || 0
" returns 1

echo 5 || 5
" returns 1

echo 0 || 0
" returns 0

echo "foo5" || "foo5"
" returns 0

echo "5foo" || "foo5"
" returns 1
```

当当前表达式为真值时，后面的表达式不会再被求值：

```
let one_dozen = 12

echo one_dozen || two_dozen
" returns 1

echo two_dozen || one_dozen
" returns error
```

注意：`two_dozen` 并未定义。`one_dozen || two_dozen` 不会报错，因为先求值 `one_dozen` 得到真值后，Vim 不会再去求值 `two_dozen`。

## and

逻辑与（`&&`）与逻辑或相对：

```
{Falsy Expression}  && {Falsy Expression}   false
{Falsy expression}  && {Truthy expression}  false
{Truthy Expression} && {Falsy Expression}   false
{Truthy expression} && {Truthy expression}  true
```

例如：

```
echo 0 && 0
" returns 0

echo 0 && 10
" returns 0
```

`&&` 会一直求值，直到遇到第一个假值为止。例如 `true && true` 会求值两边并返回 true；而 `true && false && true` 会在遇到第一个 false 时停止，不会再求值第三个 true。

```
let one_dozen = 12
echo one_dozen && 10
" returns 1

echo one_dozen && v:false
" returns 0

echo one_dozen && two_dozen
" returns error

echo exists("one_dozen") && one_dozen == 12
" returns 1
```

## for

`for` 循环常与 list 一起使用：

```
let breakfasts = ["pancakes", "waffles", "eggs"]

for breakfast in breakfasts
  echo breakfast
endfor
```

也支持嵌套 list：

```
let meals = [["breakfast", "pancakes"], ["lunch", "fish"], ["dinner", "pasta"]]

for [meal_type, food] in meals
  echo "I am having " . food . " for " . meal_type
endfor
```

字典也能用 `for`，通常通过 `keys()` 来迭代 key：

```
let beverages = #{breakfast: "milk", lunch: "orange juice", dinner: "water"}
for beverage_type in keys(beverages)
  echo "I am drinking " . beverages[beverage_type] . " for " . beverage_type
endfor
```

## while

另一个常见循环是 `while`：

```
let counter = 1
while counter < 5
  echo "Counter is: " . counter
  let counter += 1
endwhile
```

例如输出从当前行到最后一行的内容：

```
let current_line = line(".")
let last_line = line("$")

while current_line <= last_line
  echo getline(current_line)
  let current_line += 1
endwhile
```

## 错误处理

很多时候程序不会按预期执行，可能会抛出错误。此时需要合适的错误处理机制。

### break

在 `while` 或 `for` 循环里使用 `break` 会终止循环。

例如：从文件开头输出到当前行，但当遇到包含 "donut" 的行就停止：

```
let line = 0
let last_line = line("$")
let total_word = ""

while line <= last_line
  let line += 1
  let line_text = getline(line)
  if line_text =~# "donut"
    break
  endif
  echo line_text
  let total_word .= line_text . " "
endwhile

echo total_word
```

若文件内容是：

```
one
two
three
donut
four
five
```

则上面的循环只会得到 "one two three"，因为匹配到 "donut" 后就 break 了。

### continue

`continue` 与 `break` 类似，但不会跳出循环，而是跳过当前这次迭代，继续下一次迭代。

用同样的文本，把 `break` 改成 `continue`：

```
let line = 0
let last_line = line("$")
let total_word = ""

while line <= last_line
  let line += 1
  let line_text = getline(line)
  if line_text =~# "donut"
    continue
  endif
  echo line_text
  let total_word .= line_text . " "
endwhile

echo total_word
```

这次结果是 `one two three four five`：它跳过了包含 "donut" 的那一行，但循环仍继续执行。

### try / catch / finally

Vim 提供了 `try`、`catch` 与 `finally` 来处理错误。你可以用 `throw` 主动抛错来模拟：

```
try
  echo "Try"
  throw "Nope"
endtry
```

执行后 Vim 会报错 `"Exception not caught: Nope"`。

加入 `catch`：

```
try
  echo "Try"
  throw "Nope"
catch
  echo "Caught it"
endtry
```

此时不会再报错，你会看到输出 "Try" 和 "Caught it"。

去掉 `catch`，加入 `finally`：

```
try
  echo "Try"
  throw "Nope"
  echo "You won't see me"
finally
  echo "Finally"
endtry
```

运行后会看到错误信息以及 "Finally"。

把它们组合起来：

```
try
  echo "Try"
  throw "Nope"
catch
  echo "Caught it"
finally
  echo "Finally"
endtry
```

此时 Vim 会输出 "Caught it" 与 "Finally"，且不会显示错误，因为错误被捕获了。

错误也可能来自调用不存在的函数，例如下面的 `Nope()`：

```
try
  echo "Try"
  call Nope()
catch
  echo "Caught it"
finally
  echo "Finally"
endtry
```

`catch` 与 `finally` 的区别是：`finally` 无论是否发生错误都会执行，而 `catch` 只在发生错误时执行。

你也可以用 `:catch` 捕获特定错误。根据 `:h :catch`：

```
catch /^Vim:Interrupt$/.             " catch interrupts (CTRL-C)
catch /^Vim\\%((\\a\\+)\\)\\=:E/.    " catch all Vim errors
catch /^Vim\\%((\\a\\+)\\)\\=:/.     " catch errors and interrupts
catch /^Vim(write):/.                " catch all errors in :write
catch /^Vim\\%((\\a\\+)\\)\\=:E123:/ " catch error E123
catch /my-exception/.                " catch user exception
catch /.*/                           " catch everything
catch.                               " same as /.*/
```

在 `try` 块内，“中断”（例如 Ctrl-C）也被视为可捕获的错误：

```
try
  catch /^Vim:Interrupt$/
  sleep 100
endtry
```

实际应用：如果你在 vimrc 里使用了某个主题（比如 [gruvbox](https://github.com/morhetz/gruvbox)），后来不小心把主题目录删了，但 vimrc 里仍有 `colorscheme gruvbox`，那么 `source` vimrc 时会报错。你可以这样兜底：

```
try
  colorscheme gruvbox
catch
  colorscheme default
endtry
```

这样即使没有 `gruvbox` 目录，Vim 也会回退到 `colorscheme default`。

## 聪明地学习条件与循环

上一章你学了 Vim 的基础数据类型，本章你学习了如何把它们组合起来，通过条件与循环编写基础程序。这些都是编程的基本构件。

下一章我们会学习变量的作用域。

## Link

- Prev [Ch25. Vimscript 基本数据类型](./ch25_vimscript_basic_data_types.md)
- Next [Ch27. Vimscript 变量作用域](./ch27_vimscript_variable_scopes.md)

