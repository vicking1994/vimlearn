# Ch25. Vimscript 基本数据类型

在接下来的几章里，你将学习 Vimscript——Vim 内置的编程语言。

学习一门新语言时，可以从三个最基本的要素入手：

- 基本元素（Primitives）
- 组合方式（Means of Combination）
- 抽象方式（Means of Abstraction）

本章将介绍 Vim 的基本数据类型（也就是“基本元素”）。

## 数据类型

Vim 一共有 10 种数据类型：

- Number
- Float
- String
- List
- Dictionary
- Special
- Funcref
- Job
- Channel
- Blob

本章会覆盖前 6 种数据类型。第 27 章会讲到 Funcref。关于 Vim 数据类型的更多信息，可参考 `:h variables`。

## 用 Ex 模式跟着练

严格来说 Vim 没有内建的 REPL，但它有一种模式可以“像 REPL 一样用”——Ex 模式。你可以用 `Q` 或 `gQ` 进入 Ex 模式。Ex 模式可以理解为“加长版命令行模式”（就像不停地输入命令行模式命令）。要退出 Ex 模式，输入 `:visual`。

在本章以及后续 Vimscript 章节里，你可以用 `:echo` 或 `:echom` 跟着敲代码，它们分别类似 JS 的 `console.log` 或 Python 的 `print`。`:echo` 会打印你给出的表达式求值结果；`:echom` 除了打印以外，还会把结果记录到 message 历史里。

```viml
:echom "hello echo message"
```

用下面命令查看 message 历史：

```
:messages
```

清空 message 历史：

```
:messages clear
```

## Number（整数）

Vim 有 4 种整数表示：十进制、十六进制、二进制、八进制。顺带一提，“Number 数据类型”在很多语境下指的就是整数（integer）。在本指南里，“number”和“integer”会互换使用。

### 十进制

十进制你很熟悉。Vim 支持正负十进制：1、-1、10 等。在 Vimscript 编程中，你大多数时候都会使用十进制。

### 十六进制

十六进制以 `0x` 或 `0X` 开头。记忆法：He**x**adecimal。

### 二进制

二进制以 `0b` 或 `0B` 开头。记忆法：**B**inary。

### 八进制

八进制以 `0`、`0o` 或 `0O` 开头。记忆法：**O**ctal。

### 打印数字

当你 `echo` 十六进制/二进制/八进制时，Vim 会自动把它们转换成十进制再显示。

```viml
:echo 42
" returns 42

:echo 052
" returns 42

:echo 0b101010
" returns 42

:echo 0x2A
" returns 42
```

### 真值与假值（Truthy / Falsy）

在 Vim 里，0 是假值（falsy），非 0 都是真值（truthy）。

下面这段不会输出任何内容：

```viml
:if 0
:  echo "Nope"
:endif
```

而这段会输出：

```viml
:if 1
:  echo "Yes"
:endif
```

除了 0 以外的任何值都是真值，包括负数。比如 100 是真值，-1 也是真值。

### 数字运算

整数可以用于算术表达式：

```viml
:echo 3 + 1
" returns 4

: echo 5 - 3
" returns 2

:echo 2 * 2
" returns 4

:echo 4 / 2
" returns 2
```

当除法有余数时，Vim 会直接丢弃余数（整数除法）。

```viml
:echo 5 / 2
" returns 2 instead of 2.5
```

如果想得到更精确的结果，需要使用浮点数（float）。

## Float（浮点数）

浮点数是带小数的数字。Vim 有两种浮点数写法：小数点表示法（如 31.4）以及科学计数法（如 3.14e01）。和整数一样，可以带正负号：

```viml
:echo +123.4
" returns 123.4

:echo -1.234e2
" returns -123.4

:echo 0.25
" returns 0.25

:echo 2.5e-1
" returns 0.25
```

注意：float 必须同时包含小数点和小数点后的数字。`25e-2`（没有点）和 `1234.`（有点但没有尾随数字）都是非法 float。

### 浮点运算

当算术表达式同时包含整数与浮点数时，Vim 会把结果强制转换为浮点数。

```viml
:echo 5 / 2.0
" returns 2.5
```

float 与 float 的运算结果仍然是 float：

```
:echo 1.0 + 1.0
" returns 2.0
```

## String（字符串）

字符串是用双引号（`""`）或单引号（`''`）包起来的字符序列。"Hello"、"123"、'123.4' 都是字符串。

### 字符串拼接

在 Vim 里拼接字符串使用 `.` 运算符：

```viml
:echo "Hello" . " world"
" returns "Hello world"
```

### 字符串参与算术

当你用算术运算符（`+ - * /`）对“数字”和“字符串”做运算时，Vim 会把字符串强制转换为数字：

```viml
:echo "12 donuts" + 3
" returns 15
```

当 Vim 看到 "12 donuts" 时，会把字符串开头的 12 提取出来并转换成数字 12，然后执行加法得到 15。注意：这种“字符串转数字”的规则要求数字必须是字符串的**第一个字符**。

下面这段不会按你想的那样工作，因为 12 不是第一个字符：

```viml
:echo "donuts 12" + 3
" returns 3
```

这段也不行，因为字符串的第一个字符是空格：

```viml
:echo " 12 donuts" + 3
" returns 3
```

这种强制转换在两个字符串之间也同样生效：

```
:echo "12 donuts" + "6 pastries"
" returns 18
```

并且对所有算术运算符都成立，不仅是 `+`：

```viml
:echo "12 donuts" * "5 boxes"
" returns 60

:echo "12 donuts" - 5
" returns 7

:echo "12 donuts" / "3 people"
" returns 4
```

一个把字符串“强制当数字”的小技巧是：给它加 0 或乘 1：

```viml
:echo "12" + 0
" returns 12

:echo "12" * 1
" returns 12
```

当字符串里是浮点数形式时，Vim 仍把它当整数处理，而不是 float：

```
:echo "12.0 donuts" + 12
" returns 24, not 24.0
```

### 数字与字符串拼接

你可以用点运算符（`.`）把整数强制转换为字符串并拼接：

```viml
:echo 12 . "donuts"
" returns "12donuts"
```

但这只对 Number（整数）有效，不适用于 float。下面会报错：

```
:echo 12.0 . "donuts"
" throws an error
```

### 字符串作为条件

回忆一下：0 是 falsy、非 0 是 truthy。把字符串放进条件判断时也是如此——Vim 会尝试把字符串转换成数字再判断。

下面的 if 里，Vim 会把 "12donuts" 转成 12（真值）：

```viml
:if "12donuts"
:  echo "Yum"
:endif
" returns "Yum"
```

而这段是 falsy：

```viml
:if "donuts12"
:  echo "Nope"
:endif
" returns nothing
```

因为 "donuts12" 第一个字符不是数字，会被转换成 0。

### 双引号与单引号

双引号与单引号行为不同：单引号会“字面量显示”，而双引号支持特殊转义字符。

看换行与双引号的例子：

```viml
:echo "hello\nworld"
" returns
" hello
" world

:echo "hello \"world\""
" returns "hello "world""
```

对比单引号：

```
:echo 'hello\nworld'
" returns 'hello\nworld'

:echo 'hello \"world\"'
" returns 'hello \"world\"'
```

特殊字符是指某些字符串字符在转义后会产生特殊行为。比如 `\n` 表示换行，`\"` 表示字面量 `"`。更多特殊字符见 `:h expr-quote`。

### 字符串常用函数

看几个内建字符串函数。

用 `strlen()` 获取字符串长度：

```
:echo strlen("choco")
" returns 5
```

用 `str2nr()` 把字符串转成整数：

```
:echo str2nr("12donuts")
" returns 12

:echo str2nr("donuts12")
" returns 0
```

和前面的规则类似：如果数字不是第一个字符，Vim 就“抓不到”。

好消息是 Vim 还有把字符串转成 float 的方法：`str2float()`：

```
:echo str2float("12.5donuts")
" returns 12.5
```

用 `substitute()` 在字符串里替换模式：

```
:echo substitute("sweet", "e", "o", "g")
" returns "swoot"
```

最后一个参数 `"g"` 是全局标志（global）：有它会替换所有匹配项；没有它只替换第一个匹配。

```
:echo substitute("sweet", "e", "o", "")
" returns "swoet"
```

`substitute()` 可以和 `getline()` 组合使用。回忆：`getline()` 会获取指定行号的文本。假设第 5 行是 "chocolate donut"：

```
:echo substitute(getline(5), "chocolate", "glazed", "g")
" returns glazed donut
```

更多字符串函数见 `:h string-functions`。

## List（列表）

Vimscript 的 list 类似 JavaScript 的 Array 或 Python 的 List：它是一个**有序**序列。你可以混合不同数据类型：

```
[1,2,3]
['a', 'b', 'c']
[1,'a', 3.14]
[1,2,[3,4]]
```

### 子列表与索引

Vim 的 list 从 0 开始索引。用 `[n]` 访问第 n 项：

```
:echo ["a", "sweet", "dessert"][0]
" returns "a"

:echo ["a", "sweet", "dessert"][2]
" returns "dessert"
```

索引超出范围会报错：

```
:echo ["a", "sweet", "dessert"][999]
" returns an error
```

当索引为负时，会从尾部开始计数；过小同样会报错：

```
:echo ["a", "sweet", "dessert"][-1]
" returns "dessert"

:echo ["a", "sweet", "dessert"][-3]
" returns "a"

:echo ["a", "sweet", "dessert"][-999]
" returns an error
```

用 `[n:m]` 做切片（slice），包含起止端点：

```
:echo ["chocolate", "glazed", "plain", "strawberry", "lemon", "sugar", "cream"][2:4]
" returns ["plain", "strawberry", "lemon"]
```

省略 `m`（`[n:]`）表示从 n 到末尾；省略 `n`（`[:m]`）表示从开头到 m：

```
:echo ["chocolate", "glazed", "plain", "strawberry", "lemon", "sugar", "cream"][2:]
" returns ['plain', 'strawberry', 'lemon', 'sugar', 'cream']

:echo ["chocolate", "glazed", "plain", "strawberry", "lemon", "sugar", "cream"][:4]
" returns ['chocolate', 'glazed', 'plain', 'strawberry', 'lemon']
```

切片时上界可以超过最大索引：

```viml
:echo ["chocolate", "glazed", "plain", "strawberry", "lemon", "sugar", "cream"][2:999]
" returns ['plain', 'strawberry', 'lemon', 'sugar', 'cream']
```

### 字符串也能切片

字符串可以像 list 一样切片：

```viml
:echo "choco"[0]
" returns "c"

:echo "choco"[1:3]
" returns "hoc"

:echo "choco"[:3]
" returns choc

:echo "choco"[1:]
" returns hoco
```

### 列表运算

可以用 `+` 连接 list，并用 `+=` 直接修改：

```viml
:let sweetList = ["chocolate", "strawberry"]
:let sweetList += ["sugar"]
:echo sweetList
" returns ["chocolate", "strawberry", "sugar"]
```

### 列表常用函数

用 `len()` 获取 list 长度：

```
:echo len(["chocolate", "strawberry"])
" returns 2
```

用 `insert()` 在 list 头部插入元素：

```
:let sweetList = ["chocolate", "strawberry"]
:call insert(sweetList, "glazed")

:echo sweetList
" returns ["glazed", "chocolate", "strawberry"]
```

也可以传入插入位置索引，比如插入到第二个元素之前（index 1）：

```
:let sweeterList = ["glazed", "chocolate", "strawberry"]
:call insert(sweeterList, "cream", 1)

:echo sweeterList
" returns ['glazed', 'cream', 'chocolate', 'strawberry']
```

用 `remove()` 删除指定索引元素：

```
:let sweeterList = ["glazed", "chocolate", "strawberry"]
:call remove(sweeterList, 1)

:echo sweeterList
" returns ['glazed', 'strawberry']
```

对 list 还可以使用 `map()` 和 `filter()`。例如过滤掉包含 "choco" 的元素：

```
:let sweeterList = ["glazed", "chocolate", "strawberry"]
:call filter(sweeterList, 'v:val !~ "choco"')
:echo sweeterList
" returns ["glazed", "strawberry"]

:let sweetestList = ["chocolate", "glazed", "sugar"]
:call map(sweetestList, 'v:val . " donut"')
:echo sweetestList
" returns ['chocolate donut', 'glazed donut', 'sugar donut']
```

`v:val` 是 Vim 的特殊变量，在 `map()` / `filter()` 迭代 list 或 dict 时可用，代表当前迭代到的元素值。

更多见 `:h list-functions`。

### 列表解构（unpacking）

你可以把 list 解构并赋值给多个变量：

```
:let favoriteFlavor = ["chocolate", "glazed", "plain"]
:let [flavor1, flavor2, flavor3] = favoriteFlavor

:echo flavor1
" returns "chocolate"

:echo flavor2
" returns "glazed"
```

要把“剩余元素”收集到一个变量里，用 `;`：

```
:let favoriteFruits = ["apple", "banana", "lemon", "blueberry", "raspberry"]
:let [fruit1, fruit2; restFruits] = favoriteFruits

:echo fruit1
" returns "apple"

:echo restFruits
" returns ['lemon', 'blueberry', 'raspberry']
```

### 修改列表

可以直接修改某一项：

```
:let favoriteFlavor = ["chocolate", "glazed", "plain"]
:let favoriteFlavor[0] = "sugar"
:echo favoriteFlavor
" returns ['sugar', 'glazed', 'plain']
```

也可以一次修改多个项：

```
:let favoriteFlavor = ["chocolate", "glazed", "plain"]
:let favoriteFlavor[2:] = ["strawberry", "chocolate"]
:echo favoriteFlavor
" returns ['chocolate', 'glazed', 'strawberry', 'chocolate']
```

## Dictionary（字典）

Vimscript 的 dictionary 是一种关联的、无序的集合；一个非空字典至少包含一个键值对。

```
{"breakfast": "waffles", "lunch": "pancakes"}
{"meal": ["breakfast", "second breakfast", "third breakfast"]}
{"dinner": 1, "dessert": 2}
```

Vim 的字典 key 使用字符串。如果你用数字作为 key，Vim 会自动把它转换成字符串：

```
:let breakfastNo = {1: "7am", 2: "9am", "11ses": "11am"}

:echo breakfastNo
" returns {'1': '7am', '2': '9am', '11ses': '11am'}
```

如果你懒得给每个 key 都加引号，可以用 `#{}` 语法：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}

:echo mealPlans
" returns {'lunch': 'pancakes', 'breakfast': 'waffles', 'dinner': 'donuts'}
```

使用 `#{}` 的要求是 key 只能包含：

- ASCII 字符
- 数字
- 下划线（`_`）
- 连字符（`-`）

和 list 一样，value 可以是任意数据类型：

```
:let mealPlan = {"breakfast": ["pancake", "waffle", "hash brown"], "lunch": WhatsForLunch(), "dinner": {"appetizer": "gruel", "entree": "more gruel"}}
```

### 访问字典

访问字典值可以用方括号（`['key']`）或点语法（`.key`）：

```
:let meal = {"breakfast": "gruel omelettes", "lunch": "gruel sandwiches", "dinner": "more gruel"}

:let breakfast = meal['breakfast']
:let lunch = meal.lunch

:echo breakfast
" returns "gruel omelettes"

:echo lunch
" returns "gruel sandwiches"
```

### 修改字典

你可以修改或新增字典内容：

```
:let meal = {"breakfast": "gruel omelettes", "lunch": "gruel sandwiches"}

:let meal.breakfast = "breakfast tacos"
:let meal["lunch"] = "tacos al pastor"
:let meal["dinner"] = "quesadillas"

:echo meal
" returns {'lunch': 'tacos al pastor', 'breakfast': 'breakfast tacos', 'dinner': 'quesadillas'}
```

### 字典常用函数

用 `len()` 获取字典长度：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}

:echo len(mealPlans)
" returns 3
```

用 `has_key()` 判断是否包含某个 key：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}

:echo has_key(mealPlans, "breakfast")
" returns 1

:echo has_key(mealPlans, "dessert")
" returns 0
```

用 `empty()` 判断字典是否为空（`empty()` 也适用于 list/string/number/float 等）：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}
:let noMealPlan = {}

:echo empty(noMealPlan)
" returns 1

:echo empty(mealPlans)
" returns 0
```

用 `remove()` 删除指定 key，并返回被删除的值：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}

:echo "removing breakfast: " . remove(mealPlans, "breakfast")
" returns "removing breakfast: 'waffles'""

:echo mealPlans
" returns {'lunch': 'pancakes', 'dinner': 'donuts'}
```

用 `items()` 把字典转换为“列表的列表”：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}

:echo items(mealPlans)
" returns [['lunch', 'pancakes'], ['breakfast', 'waffles'], ['dinner', 'donuts']]
```

`filter()` 和 `map()` 对字典同样可用：

```
:let breakfastNo = {1: "7am", 2: "9am", "11ses": "11am"}
:call filter(breakfastNo, 'v:key > 1')

:echo breakfastNo
" returns {'2': '9am', '11ses': '11am'}
```

由于字典是 key-value，对应的特殊变量是 `v:key`（类似 `v:val`）。迭代字典时，`v:key` 保存当前迭代到的 key。

比如对 `mealPlans` 做 map，用 `v:key`：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}
:call map(mealPlans, 'v:key . " and milk"')

:echo mealPlans
" returns {'lunch': 'lunch and milk', 'breakfast': 'breakfast and milk', 'dinner': 'dinner and milk'}
```

也可以用 `v:val`：

```
:let mealPlans = #{breakfast: "waffles", lunch: "pancakes", dinner: "donuts"}
:call map(mealPlans, 'v:val . " and milk"')

:echo mealPlans
" returns {'lunch': 'pancakes and milk', 'breakfast': 'waffles and milk', 'dinner': 'donuts and milk'}
```

更多见 `:h dict-functions`。

## 特殊基本值（Special primitives）

Vim 有一些特殊的基本值：

- `v:false`
- `v:true`
- `v:none`
- `v:null`

顺带一提，`v:` 是 Vim 的内建变量（之后的章节会更详细地讲）。

从实际经验来说，你不会频繁用到这些特殊值：需要真假值时用 0 与非 0 就够了；需要空字符串就用 `""`。不过了解它们仍然有意义，这里快速过一遍。

### True

相当于 `true`，等价于一个非 0 的数值。在 `json_encode()` 编码时会被解释为 `true`：

```
:echo json_encode({"test": v:true})
" returns {"test": true}
```

### False

相当于 `false`，等价于 0。在 `json_encode()` 编码时会被解释为 `false`：

```
:echo json_encode({"test": v:false})
" returns {"test": false}
```

### None

等价于空字符串。在 `json_encode()` 编码时会被解释为 `null`：

```
:echo json_encode({"test": v:none})
" returns {"test": null}
```

### Null

与 `v:none` 类似：

```
:echo json_encode({"test": v:null})
" returns {"test": null}
```

## 聪明地学习数据类型

本章你学习了 Vimscript 的基础数据类型：number、float、string、list、dictionary 和 special。掌握这些是写 Vimscript 的第一步。

下一章我们会学习如何把它们组合起来，用等式、条件分支与循环写出更完整的程序。

## Link

- Prev [Ch24. Vim Runtime](./ch24_vim_runtime.md)
- Next [Ch26. Vimscript 条件与循环](./ch26_vimscript_conditionals_and_loops.md)

