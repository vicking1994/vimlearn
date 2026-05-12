<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Robots meta tag -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    
    <!-- 站长验证 -->
    
    <meta name="yandex-verification" content="041829f692c5d8e7" />
    
    
    <meta name="360-site-verification" content="805590d6c72e8df2234d4300cbdd4c33" />
    

    <title>第9章：宏命令</title>
    <meta name="description" content="专注于编程技术、开源项目与生活感悟的独立博客">
    
    <!-- 性能优化 -->
    <!-- DNS 预解析 -->
<link rel="dns-prefetch" href="https://cdn.bootcdn.net">
<link rel="dns-prefetch" href="https://at.alicdn.com">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">

<!-- 预连接 -->
<link rel="preconnect" href="https://cdn.bootcdn.net" crossorigin>
<link rel="preconnect" href="https://at.alicdn.com" crossorigin>

<!-- 预加载关键资源 -->
<link rel="preload" as="style" href="/css/main.css">

    
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    
    <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/7.0.0/css/all.css">
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_8v3czwksspqlg14i.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch09_macros/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch09_macros/">
<meta property="og:title" content="第9章：宏命令">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch09_macros/">
<meta name="twitter:title" content="第9章：宏命令">
<meta name="twitter:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta name="twitter:image" content="https://wsdjeg.net/images/og-default.png">

<meta name="twitter:site" content="@EricWongDEV">
<meta name="twitter:creator" content="@EricWongDEV">

    
    <!-- 结构化数据 -->
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  
  "@type": "WebSite",
  "name": "Eric's Blog",
  "url": "https://wsdjeg.net",
  "description": "专注于编程技术、开源项目与生活感悟的独立博客",
  "author": {
    "@type": "Person",
    "name": "Eric Wong",
    "url": "https://wsdjeg.net/about/"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://wsdjeg.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
  
}
</script>

    
    <script type="text/javascript" src="/js/hostname.js"></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T0XD4SK3Y2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T0XD4SK3Y2');
</script>

</head>

  <body>

    <header id="top">
    <div class="wrapper">
        <a href="/" class="brand">Eric's Blog</a>
        <small>时光荏苒，岁月如梭</small>
        <button id="headerMenu" class="menu"><i class="fa fa-bars"></i></button>
        <nav id="headerNav">
            <ul>
                <li>
                    
                    <a href="/">
                    
                        <i class="fa fa-home"></i>首页
                    </a>
                </li>

                
                    
                    <li>
                        
                        <a href="/archive/">
                        
                            <i class="fa-solid fa-box-archive"></i>归档
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/category/">
                        
                            <i class="fa-solid fa-table-list"></i>分类
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/tag/">
                        
                            <i class="fa-solid fa-tag"></i>标签
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/git/">
                        
                            <i class="fa-solid fa-play"></i>开源
                        </a>
                    </li>
                    
                
                    
                
                    
                    <li>
                        
                        <a href="/thoughts/">
                        
                            <i class="fa-solid fa-mug-saucer"></i>想法
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/wiki/">
                        
                            <i class="fa-brands fa-wikipedia-w"></i>维基
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/gallery/">
                        
                            <i class="fa-solid fa-image"></i>相册
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/links/">
                        
                            <i class="fa-solid fa-link"></i>友链
                        </a>
                    </li>
                    
                
                    
                    <li>
                        
                        <a href="/about/">
                        
                            <i class="fa-solid fa-address-card"></i>关于
                        </a>
                    </li>
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
                    
                
            </ul>
        </nav>
    </div>
</header>

    <div class="page clearfix" post>
    <div class="left">
        <h1>第9章：宏命令</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#基本宏命令" id="markdown-toc-基本宏命令">基本宏命令</a></li>
  <li><a href="#安全保护" id="markdown-toc-安全保护">安全保护</a></li>
  <li><a href="#命令行执行宏" id="markdown-toc-命令行执行宏">命令行执行宏</a></li>
  <li><a href="#在多个文件中执行宏命令" id="markdown-toc-在多个文件中执行宏命令">在多个文件中执行宏命令</a></li>
  <li><a href="#递归执行宏命令" id="markdown-toc-递归执行宏命令">递归执行宏命令</a></li>
  <li><a href="#增添一个已知宏" id="markdown-toc-增添一个已知宏">增添一个已知宏</a></li>
  <li><a href="#修改一个已知宏" id="markdown-toc-修改一个已知宏">修改一个已知宏</a></li>
  <li><a href="#拷贝宏" id="markdown-toc-拷贝宏">拷贝宏</a></li>
  <li><a href="#串行宏和并行宏" id="markdown-toc-串行宏和并行宏">串行宏和并行宏</a></li>
  <li><a href="#聪明地学习宏命令" id="markdown-toc-聪明地学习宏命令">聪明地学习宏命令</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在编辑文件的时候，你会发现有时候你在反复地做一些相同的动作。如果你仅做一次，并在需要的时候调用这些动作岂不是会更好吗。通过 Vim 的宏命令，你可以将一些动作记录到 Vim 寄存器。</p>

<p>在本章中，你将会学习到如何通过宏命令自动完成一些普通的任务（另外，看你的文件在自动编辑是一件很酷的事情）。</p>

<h2 id="基本宏命令">基本宏命令</h2>

<p>宏命令的基本语法如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qa                     开始记录动作到寄存器 a
q (while recording)    停止记录
</code></pre></div></div>

<p>你可以使用小写字母 （a-z）去存储宏命令。并通过如下的命令去调用：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>@a    Execute macro from register a
@@    Execute the last executed macros
</code></pre></div></div>

<p>假设你有如下的文本，你打算将每一行中的所有字母都变为大写。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello
vim
macros
are
awesome
</code></pre></div></div>

<p>将你的光标移动到 “hello” 栏的行首，并执行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qa0gU$jq
</code></pre></div></div>

<p>上面命令的分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">qa</code> 开始记录一个宏定义并存储在 a 寄存器。</li>
  <li><code class="language-plaintext highlighter-rouge">0</code> 移动到行首。</li>
  <li><code class="language-plaintext highlighter-rouge">gU$</code> 将从光标到行尾的字母变为大写。</li>
  <li><code class="language-plaintext highlighter-rouge">j</code> 移动到下一行。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止记录。</li>
</ul>

<p>调用 <code class="language-plaintext highlighter-rouge">@a</code> 去执行该宏命令。就像其他的宏命令一样，你也可以为该命令加一个计数。例如，你可以通过 <code class="language-plaintext highlighter-rouge">3@a</code> 去执行 <code class="language-plaintext highlighter-rouge">a</code> 命令3次。你也可以执行 <code class="language-plaintext highlighter-rouge">3@@</code> 去执行上一次执行过的宏命令3次。</p>

<h2 id="安全保护">安全保护</h2>

<p>在执行遇到错误的时候，宏命令会自动停止。假如你有如下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>a. chocolate donut
b. mochi donut
c. powdered sugar donut
d. plain donut
</code></pre></div></div>

<p>你想将每一行的第一个词变为大写，你可以使用如下的宏命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qa0W~jq
</code></pre></div></div>

<p>上面命令的分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">qa</code> 开始记录一个宏定义并存储在 a 寄存器。</li>
  <li><code class="language-plaintext highlighter-rouge">0</code> 移动到行首。</li>
  <li><code class="language-plaintext highlighter-rouge">W</code> 移动到下一个单词。</li>
  <li><code class="language-plaintext highlighter-rouge">~</code> 将光标选中的单词变为大写。</li>
  <li><code class="language-plaintext highlighter-rouge">j</code> 移动到下一行。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止记录。</li>
</ul>

<p>我喜欢对宏命令进行超过所需次数的调用，所以我通常使用 <code class="language-plaintext highlighter-rouge">99@a</code> 命令去执行该宏命令99次。使用该命令，Vim并不会真正执行这个宏99次，当 Vim 到达最后一行执行<code class="language-plaintext highlighter-rouge">j</code>时，它会发现无法再向下了，然后会抛出一个错误，并终止宏命令的执行。</p>

<p>实际上，遇到错误自动停止运行是一个很好的特性。否则，Vim 会继续执行该命令99次，尽管它已经执行到最后一行了。</p>

<h2 id="命令行执行宏">命令行执行宏</h2>

<p>在正常模式执行 <code class="language-plaintext highlighter-rouge">@a</code> 并不是宏命令调用的唯一方式。你也可以在命令行执行 <code class="language-plaintext highlighter-rouge">：normal @a</code> 。<code class="language-plaintext highlighter-rouge">：normal</code> 会将任何用户添加的参数作为命令去执行。例如添加 <code class="language-plaintext highlighter-rouge">@a</code>，和在 normal mode 执行 <code class="language-plaintext highlighter-rouge">@a</code> 的效果是一样的。</p>

<p><code class="language-plaintext highlighter-rouge">:normal</code> 命令也支持范围参数。你可以在选择的范围内去执行宏命令。如果你只想在第二行和第三行执行宏命令，你可以执行 <code class="language-plaintext highlighter-rouge">：2,3 normal @a</code>。</p>

<h2 id="在多个文件中执行宏命令">在多个文件中执行宏命令</h2>

<p>假如你有多个 <code class="language-plaintext highlighter-rouge">.txt</code> 文件，每一个文件包含不同的内容。并且你只想将包含有 “donut” 单词的行的第一个单词变为大写。假设，您的寄存器a中存储的内容是<code class="language-plaintext highlighter-rouge">0W~j</code>(就是前面例子中用到的宏命令),那么，您该如何快速完成这个操作呢？</p>

<p>第一个文件:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## savory.txt
a. cheddar jalapeno donut
b. mac n cheese donut
c. fried dumpling
</code></pre></div></div>

<p>第二个文件:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## sweet.txt
a. chocolate donut
b. chocolate pancake
c. powdered sugar donut
</code></pre></div></div>

<p>第三个文件:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## plain.txt
a. wheat bread
b. plain donut
</code></pre></div></div>

<p>你可以这么做:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:args *.txt</code> 查找当前目录下的所有 <code class="language-plaintext highlighter-rouge">.txt</code> 文件。</li>
  <li><code class="language-plaintext highlighter-rouge">:argdo g/donut/normal @a</code> 在 <code class="language-plaintext highlighter-rouge">:args</code> 中包含的每一个文件里执行一个全局命令 <code class="language-plaintext highlighter-rouge">g/donut/normal @a</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">:argdo update</code> 在 <code class="language-plaintext highlighter-rouge">:args</code> 中包含的每一个文件里执行 <code class="language-plaintext highlighter-rouge">update</code> 命令,保存修改后的内容。</li>
</ul>

<p>也许你对全局命令 <code class="language-plaintext highlighter-rouge">:g/donut/normal @a</code> 不是很了解，该命令会执行 <code class="language-plaintext highlighter-rouge">/donut/</code>搜索命令，然后在所有匹配的行中执行<code class="language-plaintext highlighter-rouge">normal @a</code> 命令。我会在后面的章节中介绍全局命令。</p>

<h2 id="递归执行宏命令">递归执行宏命令</h2>

<p>你可以递归地执行宏命令，通过在记录宏命令时调用相同的宏寄存器来实现。假如你有如下文本，你希望改变第一个单词的大小写：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>a. chocolate donut
b. mochi donut
c. powdered sugar donut
d. plain donut
</code></pre></div></div>

<p>如下命令会递归地执行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qaqqa0W~j@aq
</code></pre></div></div>

<p>上面命令的分解如下：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">qaq</code> 记录一个空白的宏命令到 “a” 。把宏命令记录在一个空白的命令中是必须的，因为你不会想将该命令包含有任何其他的东西。</li>
  <li><code class="language-plaintext highlighter-rouge">qa</code> 开始录入宏命令到寄存器 “a”。</li>
  <li><code class="language-plaintext highlighter-rouge">0</code> 移动到行首。</li>
  <li><code class="language-plaintext highlighter-rouge">W</code> 移动到下一个单词。</li>
  <li><code class="language-plaintext highlighter-rouge">~</code> 改变光标选中的单词的大小写。</li>
  <li><code class="language-plaintext highlighter-rouge">j</code> 移动到下一行。</li>
  <li><code class="language-plaintext highlighter-rouge">@a</code> 执行宏命令 “a”。当你记录该宏命令时，<code class="language-plaintext highlighter-rouge">@a</code> 应该是空白的，因为你刚刚调用了 <code class="language-plaintext highlighter-rouge">qaq</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止记录。</li>
</ul>

<p>现在，让我们调用 <code class="language-plaintext highlighter-rouge">@a</code> 来查看 Vim 如何递归的调用该宏命令。</p>

<p>宏命令是如何知道何时停止呢？当宏执行到最后一行并尝试 <code class="language-plaintext highlighter-rouge">j</code> 命令时，发现已经没有下一行了，就会停止执行。</p>

<h2 id="增添一个已知宏">增添一个已知宏</h2>

<p>如果你想在一个已经录制好的宏定义中添加更多的操作，与其重新录入它，不如选择修改它。在寄存器一章中，你学习了如何使用一个已知寄存器的大写字母来想该寄存器中添加内容。同样的，为了在寄存器”a”中添加更多的操作，你也可以使用大写字母”A”。</p>

<p>假设寄存器a中已经存储了这个宏命令:<code class="language-plaintext highlighter-rouge">qa0W~q</code>(该宏命令将某行的第二个词组的头一个字母执行改变大小写操作)，假设你想在这个基础上添加一些操作命令序列，使得每一行末尾添加一个句点，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qAA.&lt;esc&gt;q
</code></pre></div></div>

<p>分解如下:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">qA</code> 开始在寄存器 “A” 中记录宏命令。</li>
  <li><code class="language-plaintext highlighter-rouge">A.&lt;esc&gt;</code> 在行的末尾加上一个句点(这里的<code class="language-plaintext highlighter-rouge">A</code>是进入插入模式，不要和宏A搞混淆)，然后退出插入模式。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止记录宏命令。</li>
</ul>

<p>现在，当你执行<code class="language-plaintext highlighter-rouge">@a</code>时，它不仅将第二个词组的首字母转变大小写，同时还在行尾添加一个句点。</p>

<h2 id="修改一个已知宏">修改一个已知宏</h2>

<p>如果想在一个宏的中间添加新的操作该怎么办呢？</p>

<p>假设您在寄存器a中已经存有一个宏命令<code class="language-plaintext highlighter-rouge">0W~A.&lt;Esc&gt;</code>，即改变首字母大小写，并在行尾添加句号。如果您想在改变首字母大小写和行尾添加句号之间，在单词”dount”前面加入”deep fried”。（因为唯一比甜甜圈好的东西就是炸甜甜圈）。</p>

<p>我会重新使用上一节使用过的文本:</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>a. chocolate donut
b. mochi donut
c. powdered sugar donut
d. plain donut
</code></pre></div></div>

<p>首先，让我们通过 <code class="language-plaintext highlighter-rouge">:put a</code> 调用一个已经录制好的宏命令（假设你上一节中保存在寄存器a中的宏命令还在）：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>0W~A.^[
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">^[</code> 是什么意思呢？不记得了吗，你之前执行过 <code class="language-plaintext highlighter-rouge">0W~A.&lt;esc&gt;</code>。 <code class="language-plaintext highlighter-rouge">^[</code> 是 Vim 的 <strong>内部指令</strong>，表示 <code class="language-plaintext highlighter-rouge">&lt;esc&gt;</code>。通过这些指定的特殊键值组合，Vim 知道这些是内部代码的一些替代。一些常见的内部指令具有类似的替代，例如 <code class="language-plaintext highlighter-rouge">&lt;esc&gt;</code>，<code class="language-plaintext highlighter-rouge">&lt;backspace&gt;</code>，<code class="language-plaintext highlighter-rouge">&lt;enter&gt;</code>。还有一些其他的键值组合，但这不是本章的内容。</p>

<p>回到宏命令，在改变大小写之后的键后面（<code class="language-plaintext highlighter-rouge">~</code>），让我们添加（<code class="language-plaintext highlighter-rouge">$</code>）来移动光标到行末，回退一个单词（<code class="language-plaintext highlighter-rouge">b</code>），进入插入模式（<code class="language-plaintext highlighter-rouge">i</code>），输入”deep fried “ （别忽略”fried “后面的这个空格），之后退出插入模式（<code class="language-plaintext highlighter-rouge">&lt;esc&gt;</code>）。</p>

<p>完整的命令如下:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>0W~$bideep fried &lt;esc&gt;A.^[
</code></pre></div></div>

<p>这里有一个问题，Vim 不能理解 <code class="language-plaintext highlighter-rouge">&lt;esc&gt;</code>。您不能依葫芦画瓢输入”<Esc>"，所以你需要将`<Esc>`写成内部代码的形式。在插入模式，在按下`Ctrl-v`后按下`<esc>`，Vim 会打印 `^[`。 `Ctrl-v` 是一个插入模式的操作符，可以逐字地插入一个非数字字符。你的宏命令应该如下:</esc></Esc></Esc></p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>0W~$bideep fried ^[A.^[
</code></pre></div></div>

<p>为了在寄存器“a”中添加修改后的指令，你可以通过在一个已知命名寄存器中添加一个新条目的方式来实现。在一行的行首，执行 <code class="language-plaintext highlighter-rouge">"ay$</code>，使用寄存器 “a”来存储复制的文本。</p>

<p>现在，但你执行 <code class="language-plaintext highlighter-rouge">@a</code> 时，你的宏命令会自动改变第一个单词的大小写，在”donut”前面添加”deep fried “，之后在行末添加“.”。</p>

<p>另一个修改宏命令的方式是通过命令行表达式。执行 <code class="language-plaintext highlighter-rouge">:let @a="</code>，之后执行 <code class="language-plaintext highlighter-rouge">Ctrl-r a</code>，这会将寄存器“a”的命令逐字打印出来。最后，别忘记在闭合的引号（<code class="language-plaintext highlighter-rouge">"</code>）。如果你希望在编辑命令行表达式时插入内部码来使用特定的字符，你可以使用 <code class="language-plaintext highlighter-rouge">Ctrl-v</code>。</p>

<h2 id="拷贝宏">拷贝宏</h2>

<p>你可以很轻松的将一个寄存器的内容拷贝到另一个寄存器。例如，你可以使用 <code class="language-plaintext highlighter-rouge">:let @z = @a</code> 将寄存器”a” 中的命令拷贝到寄存器”z”。 <code class="language-plaintext highlighter-rouge">@a</code> 表示寄存器“a”中存储的内容，你现在执行 <code class="language-plaintext highlighter-rouge">@z</code>，将会执行和 <code class="language-plaintext highlighter-rouge">@a</code> 一样的指令。</p>

<p>我发现对常用的宏命令创建冗余是很有用的。在我的工作流程中，我通常在前7个字母（a-g）上创建宏命令，并且我经常不加思索地把它们替换了。因此，如果我将很有用的宏命令移动到了字母表的末尾，就不用担心我在无意间把他们替换了。</p>

<h2 id="串行宏和并行宏">串行宏和并行宏</h2>

<p>Vim 可以连续和同时运行宏命令，假设你有如下的文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>import { FUNC1 } from "library1";
import { FUNC2 } from "library2";
import { FUNC3 } from "library3";
import { FUNC4 } from "library4";
import { FUNC5 } from "library5";
</code></pre></div></div>

<p>假如你希望把所有的 “FUNC” 字符变为小写，那么宏命令为如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qa0f{gui{jq
</code></pre></div></div>

<p>分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">qa</code> 开始记录宏命令到 “a” 寄存器。</li>
  <li><code class="language-plaintext highlighter-rouge">0</code>移动到第一行。</li>
  <li><code class="language-plaintext highlighter-rouge">f{</code> 查找第一个 “{” 字符。</li>
  <li><code class="language-plaintext highlighter-rouge">gui{</code> 把括号内的文本（<code class="language-plaintext highlighter-rouge">i{</code>）变为小写（<code class="language-plaintext highlighter-rouge">gu</code>）。</li>
  <li><code class="language-plaintext highlighter-rouge">j</code> 移动到下一行。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止记录宏命令。</li>
</ul>

<p>现在，执行 <code class="language-plaintext highlighter-rouge">99@a</code> 在剩余的行修改。然而，假如在你的文本里有如下 import 语句会怎么样呢？</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>import { FUNC1 } from "library1";
import { FUNC2 } from "library2";
import { FUNC3 } from "library3";
import foo from "bar";
import { FUNC4 } from "library4";
import { FUNC5 } from "library5";
</code></pre></div></div>

<p>执行 <code class="language-plaintext highlighter-rouge">99@a</code>，会只在前三行执行。而最后两行不会被执行，因为在执行第四行（包含“foo”）时<code class="language-plaintext highlighter-rouge">f{</code>命令会遇到错误而停止，当宏串行执行时就会发生这样的情况。当然，你仍然可以移动到包含（“FUNC4”）的一行，并重新调用该命令。但是假如你希望仅调用一次命令就完成所有操作呢？</p>

<p>你可以并行地执行宏命令。</p>

<p>如本章前面所说，可以使用 <code class="language-plaintext highlighter-rouge">:normal</code> 去执行宏命令，（例如： <code class="language-plaintext highlighter-rouge">:3,5 normal @a</code> 会在 3-5行执行 a 寄存器中的宏命令）。如果执行 <code class="language-plaintext highlighter-rouge">:1,$ normal @a</code>，会在所有除了包含有 “foo” 的行执行，而且它不会出错。</p>

<p>尽管本质上来说，Vim 并不是在并行地执行宏命令，但表面上看，它是并行运行的。 Vim 会独立地在从第一行开始（<code class="language-plaintext highlighter-rouge">1,$</code>）每一行执行 <code class="language-plaintext highlighter-rouge">@a</code> 。由于 Vim 独立地在每一行执行命令，每一行都不会知道有一行（包含“foo”）会遇到执行错误。</p>

<h2 id="聪明地学习宏命令">聪明地学习宏命令</h2>

<p>你在编辑器里做的很多事都是重复的。为了更好地编辑文件，请乐于发现这些重复性的行为。执行宏命令或者点命令，而不是做相同的动作两次。几乎所有你在 Vim 所作的事情都可以变为宏命令。</p>

<p>刚开始的时候，我发现宏命令时很棘手的，但是请不要放弃。有了足够的练习，你可以找到这种文本自动编辑的快乐。</p>

<p>使用某种助记符去帮助你记住宏命令是很有帮助的。如果你有一个创建函数（function）的宏命令，你可以使用 “f” 寄存器去录制它(<code class="language-plaintext highlighter-rouge">qf</code>)。如果你有一个宏命令去操作数字，那么使用寄存器 “n” 去记住它是很好的(<code class="language-plaintext highlighter-rouge">qn</code>)。用你想执行的操作时想起的第一个字符给你的宏命令命名。另外，我发现 “q” 是一个很好的宏命令默认寄存器，因为执行 <code class="language-plaintext highlighter-rouge">qq</code> 去调用宏命令是很快速而简单的。最后，我喜欢按照字母表的顺序去添加我的宏命令，例如从 <code class="language-plaintext highlighter-rouge">qa</code> 到 <code class="language-plaintext highlighter-rouge">qb</code> 再到 <code class="language-plaintext highlighter-rouge">qc</code>。</p>

<p>去寻找最适合你的方法吧。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch08_registers/">Ch 8 - 寄存器</a></li>
  <li>下一部分 <a href="../ch10_undo/">Ch 10 - 撤消</a></li>
</ul>

    </div>
    <button class="anchor"><i class="fa fa-anchor"></i></button>
    <div class="right">
        <div class="wrap">

            <!-- Content -->
            <div class="side content">
                <div>
                    目录
                </div>
                <ul id="content-side" class="content-ul">
                </ul>
            </div>
            <!-- 其他div框放到这里 -->
            <!-- <div class="side">bbbb</div> -->
        </div>
    </div>
</div>
<script src="/js/pageContent.js " charset="utf-8"></script>

    <!-- https://fontawesome.com/icons/ -->

<footer class="site-footer">
  <div class="wrapper">
    <p class="description">
        
    </p>
    <p class="contact">
       
      <a href="https://github.com/wsdjeg" title="GitHub"
        ><i class="fa-brands fa-github" aria-hidden="true"></i
      ></a>
       
      
      <a href="mailto:wsdjeg@outlook.com" title="email"
        ><i class="fa-solid fa-envelope" aria-hidden="true"></i
      ></a>
      
         
      <a href="https://twitter.com/EricWongDEV" title="Twitter"
        ><i class="fa-brands fa-twitter" aria-hidden="true"></i
      ></a>
              
      <a href="https://wsdjeg.net/feed.xml" title="Feed"
        ><i class="fa-solid fa-rss" aria-hidden="true"></i>
      </a>
    </p>
  </div>
</footer>

    <div class="back-to-top">
    <a href="#top" data-scroll>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </a>
</div>

    <script src=" /js/main.js " charset="utf-8"></script>
    <script src=" /js/smooth-scroll.min.js " charset="utf-8"></script>
    <script type="text/javascript">
      smoothScroll.init({
              speed: 500, // Integer. How fast to complete the scroll in milliseconds
              easing: 'easeInOutCubic', // Easing pattern to use
              offset: 20, // Integer. How far to offset the scrolling anchor location in pixels
            });
    </script>
    <!-- <script src=" /js/scroll.min.js " charset="utf-8"></script> -->
    <script type="text/javascript" src="/js/lightbox.js"></script>
    <link rel="stylesheet" href="/css/lightbox.css">
  </body>

</html>
