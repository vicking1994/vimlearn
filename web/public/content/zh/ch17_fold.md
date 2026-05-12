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
    

    <title>第17章：折叠</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch17_fold/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch17_fold/">
<meta property="og:title" content="第17章：折叠">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch17_fold/">
<meta name="twitter:title" content="第17章：折叠">
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
        <h1>第17章：折叠</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#第17章-折叠" id="markdown-toc-第17章-折叠">第17章 折叠</a>    <ul>
      <li><a href="#手动折叠" id="markdown-toc-手动折叠">手动折叠</a></li>
      <li><a href="#不同的折叠方法" id="markdown-toc-不同的折叠方法">不同的折叠方法</a></li>
      <li><a href="#缩进折叠" id="markdown-toc-缩进折叠">缩进折叠</a></li>
      <li><a href="#表达式折叠" id="markdown-toc-表达式折叠">表达式折叠</a></li>
      <li><a href="#语法折叠" id="markdown-toc-语法折叠">语法折叠</a></li>
      <li><a href="#差异折叠" id="markdown-toc-差异折叠">差异折叠</a></li>
      <li><a href="#标志折叠" id="markdown-toc-标志折叠">标志折叠</a></li>
      <li><a href="#持久化折叠" id="markdown-toc-持久化折叠">持久化折叠</a></li>
      <li><a href="#聪明地学习折叠" id="markdown-toc-聪明地学习折叠">聪明地学习折叠</a></li>
      <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
    </ul>
  </li>
</ul>

<!-- prettier-ignore-end -->

<h1 id="第17章-折叠">第17章 折叠</h1>

<p>在阅读文件时，经常会有一些不相关的文本会妨碍您理解。使用 Vim 折叠可以隐藏这些不必要的信息。</p>

<p>本章中，您将学习如何使用不同的折叠方法。</p>

<h2 id="手动折叠">手动折叠</h2>

<p>想象您正在折叠一张纸来覆盖一些文本，实际的文本不会消失，它仍在那儿。Vim 折叠的工作方式与此相同，它<em>折叠</em>一段文本，在显示时会隐藏起来，但实际上并不会真的删除它。</p>

<p>折叠操作符是<code class="language-plaintext highlighter-rouge">z</code>。（折叠纸张时，它看起来也像字母 “z”）。</p>

<p>假设有如下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Fold me
Hold me
</code></pre></div></div>

<p>把光标放在第一行，输入 <code class="language-plaintext highlighter-rouge">zfj</code>。Vim 将这两行折叠成一行，同时会看到类似消息：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>+-- 2 lines: Fold me -----
</code></pre></div></div>

<p>上面的命令分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">zf</code> 是折叠操作符。</li>
  <li><code class="language-plaintext highlighter-rouge">j</code> 是用于折叠操作符的动作。</li>
</ul>

<p>您可以使用 <code class="language-plaintext highlighter-rouge">zo</code> 打开/展开已折叠文本，使用 <code class="language-plaintext highlighter-rouge">zc</code> 关闭/收缩文本。</p>

<p>折叠是一个操作符，所以它遵循语法规则（<code class="language-plaintext highlighter-rouge">动词+名词</code>）。您可以在折叠运算符后，加上一个动作(motion)或文本对象。例如，使用 <code class="language-plaintext highlighter-rouge">zfip</code> 可以折叠内部段落；使用 <code class="language-plaintext highlighter-rouge">zfG</code> 可以折叠至文件末尾；使用 <code class="language-plaintext highlighter-rouge">zfa{</code> 可以折叠 <code class="language-plaintext highlighter-rouge">{</code> 和 <code class="language-plaintext highlighter-rouge">}</code> 之间的文本。</p>

<p>您可以在可视模式下进行折叠。高亮您想要折叠的区域后 (<code class="language-plaintext highlighter-rouge">v</code>, <code class="language-plaintext highlighter-rouge">V</code>, 或 <code class="language-plaintext highlighter-rouge">Ctrl-v</code>)，再输入 <code class="language-plaintext highlighter-rouge">zf</code> 即可。</p>

<p>您也可以在命令行模式下，使用 <code class="language-plaintext highlighter-rouge">:fold</code> 命令执行一次折叠。若要折叠当前行及紧随其后的第二行，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:,+1fold
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">,+1</code> 是要折叠的范围。如果不传递范围参数，默认当前行。<code class="language-plaintext highlighter-rouge">+1</code> 是代表下一行的范围指示器。运行 <code class="language-plaintext highlighter-rouge">:5,10fold</code> 可以折叠第5至10行。运行 <code class="language-plaintext highlighter-rouge">:,$fold</code> 可以折叠当前行至文件末尾。</p>

<p>还有许多其他折叠和展开的命令。我发现他们实在太多，以至于在刚起步时很难记住。最有用的一些命令是：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">zR</code> 展开所有折叠。</li>
  <li><code class="language-plaintext highlighter-rouge">zM</code> 收缩所有折叠。</li>
  <li><code class="language-plaintext highlighter-rouge">za</code> 切换折叠状态。</li>
</ul>

<p><code class="language-plaintext highlighter-rouge">zR</code> 和 <code class="language-plaintext highlighter-rouge">zM</code> 可用于任意行上，但 <code class="language-plaintext highlighter-rouge">za</code> 仅能用于已折叠/未折叠的行上。输入 <code class="language-plaintext highlighter-rouge">:h fold-commands</code> 可查阅更多有关折叠的指令。</p>

<h2 id="不同的折叠方法">不同的折叠方法</h2>

<p>以上部分涵盖了 Vim 手动折叠的内容。实际上，Vim 有六种不同的折叠方法：</p>
<ol>
  <li>手动折叠</li>
  <li>缩进折叠</li>
  <li>表达式折叠</li>
  <li>语法折叠</li>
  <li>差异折叠</li>
  <li>标志折叠</li>
</ol>

<p>运行 <code class="language-plaintext highlighter-rouge">:set foldmethod?</code> 可查看您当前正在使用哪一种折叠方式。默认情况下，Vim 使用手动方式。</p>

<p>在本章的剩余部分，您将学习其他五种折叠方法。让我们从缩进折叠开始。</p>

<h2 id="缩进折叠">缩进折叠</h2>

<p>要使用缩进折叠，需要将 <code class="language-plaintext highlighter-rouge">'foldmethod'</code> 选项更改为缩进：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmethod=indent
</code></pre></div></div>

<p>假设有如下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
  Two
  Two again
</code></pre></div></div>

<p>运行 <code class="language-plaintext highlighter-rouge">:set foldmethod=indent</code> 后将看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
+-- 2 lines: Two -----
</code></pre></div></div>

<p>使用缩进折叠后，Vim 将会查看每行的开头有多少空格，并将它与 <code class="language-plaintext highlighter-rouge">'shiftwidth'</code> 选项进行比较，以此来决定该行可折叠性。<code class="language-plaintext highlighter-rouge">'shiftwidth'</code> 返回每次缩进所需的空格数。如果运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set shiftwidth?
</code></pre></div></div>

<p>Vim 的默认 <code class="language-plaintext highlighter-rouge">'shiftwidth'</code> 值为2。对于上面的文本而言，”Two” 和 “Two again” 的开头都有两个空格。当 Vim 看到了空格数 <em>且</em> <code class="language-plaintext highlighter-rouge">'shiftwidth'</code>值都为2时，Vim 认为该行的缩进折叠级别为1。</p>

<p>假设这次文本开头只有一个空格：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
 Two
 Two again
</code></pre></div></div>

<p>运行 <code class="language-plaintext highlighter-rouge">:set foldmethod=indent</code> 后，Vim 不再折叠已缩进的行了，因为这些行没有足够的空格。1个空格不会被视作一个缩进。然而，当您改变 <code class="language-plaintext highlighter-rouge">'shiftwidth' </code> 的值为1后：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set shiftwidth=1
</code></pre></div></div>

<p>文本现在可以折叠了！现在一个空格将被视为一个缩进。</p>

<p>现在，我们将 <code class="language-plaintext highlighter-rouge">'shiftwidth' </code> 以及文本开头的空格数都重新恢复为2后，另外添加一些内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
  Two
  Two again
    Three
    Three again
</code></pre></div></div>

<p>运行折叠命令 (<code class="language-plaintext highlighter-rouge">zM</code>) 后可以看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
+-- 4 lines: Two -----
</code></pre></div></div>

<p>展开已折叠的行 (<code class="language-plaintext highlighter-rouge">zR</code>)，接着移动光标至 “Three”，然后切换文本的折叠状态 (<code class="language-plaintext highlighter-rouge">za</code>)：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
  Two
  Two again
+-- 2 lines: Three -----
</code></pre></div></div>

<p>这是啥？叠中叠？</p>

<p>是的，您可以嵌套折叠。文本 “Two” 和 “Two again” 的折叠级别都为1，文本 “Three” 和 “Three again” 的折叠级别都为2。如果在一段可折叠文本中，具有另一段折叠级别更高的可折叠文本，则可以具有多个折叠层。</p>

<h2 id="表达式折叠">表达式折叠</h2>

<p>表达式折叠允许您定义要匹配折叠的表达式。定义折叠表达式后，Vim 会计算每行的 <code class="language-plaintext highlighter-rouge">'foldexpr'</code> 值。这是必须配置的变量，它要返回适当的值。如果返回 0，则不折叠行。如果它返回 1，则该行的折叠级别为 1。如果它返回 2，则该线的折叠级别为 2。除了整数外还有其他的值，但我不打算介绍它们。如果你好奇，可以查阅<code class="language-plaintext highlighter-rouge">:h fold-expr</code>。</p>

<p>首先，更改折叠方法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmethod=expr
</code></pre></div></div>

<p>假设您有一份早餐食品列表，并且想要折叠所有以 “p” 开头的早餐项：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>donut
pancake
pop-tarts
protein bar
salmon
scrambled eggs
</code></pre></div></div>

<p>其次，更改 <code class="language-plaintext highlighter-rouge">foldexpr</code> 为捕获以 “p” 开头的表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldexpr=getline(v:lnum)[0]==\\"p\\"
</code></pre></div></div>

<p>这表达式看起来有点吓人。我们来分解下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:set foldexpr</code> 设置 <code class="language-plaintext highlighter-rouge">'foldexpr'</code> 为自定义表达式。</li>
  <li><code class="language-plaintext highlighter-rouge">getline()</code> 是 Vim 脚本的一个函数，它返回指定行的内容。如运行 <code class="language-plaintext highlighter-rouge">:echo getline(5)</code> 可以获取第5行的内容。</li>
  <li><code class="language-plaintext highlighter-rouge">v:lnum</code> 是 Vim <code class="language-plaintext highlighter-rouge">'foldexpr'</code> 表达式的特殊变量。Vim 在扫描每一行时，都会将行号存储至 <code class="language-plaintext highlighter-rouge">v:lnum</code> 变量。在第5行，<code class="language-plaintext highlighter-rouge">v:lnum</code> 值为5。在第10行，<code class="language-plaintext highlighter-rouge">v:lnum</code>值为10。</li>
  <li><code class="language-plaintext highlighter-rouge">[0]</code> 处于 <code class="language-plaintext highlighter-rouge">getline(v:lnum)[0]</code> 语境时，代表每一行的第一个字符。Vim 在扫描某一行时，<code class="language-plaintext highlighter-rouge">getline(v:lnum)</code> 返回该行的内容，而 <code class="language-plaintext highlighter-rouge">getline(v:lnum)[0]</code> 则返回这一行的第一个字符。例如，我们早餐食品列表的第一行是 “donut”，则 <code class="language-plaintext highlighter-rouge">getline(v:lnum)[0]</code> 返回 “d”；列表的第二行是 “pancake”，则 <code class="language-plaintext highlighter-rouge">getline(v:lnum)[0]</code> 返回 “p”。</li>
  <li><code class="language-plaintext highlighter-rouge">==\\"p\\"</code> 是等式表达式的后半部分，它检查刚才表达式的计算结果是否等于 “p”。如果是，则返回1，否则返回0。在 Vim 的世界里，1代表真，0代表假。所以，那些以 “p” 开头的行，表达式都会返回1。回想一下本节的开始，如果 <code class="language-plaintext highlighter-rouge">'foldexpr'</code> 的值为1，则折叠级别为1。</li>
</ul>

<p>在运行这个表达式后，您将看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>donut
+-- 3 lines: pancake -----
salmon
scrambled eggs
</code></pre></div></div>

<h2 id="语法折叠">语法折叠</h2>

<p>语法折叠是由Vim的语法高亮决定的。如果您使用了语法高亮插件，比如<a href="https://github.com/sheerun/vim-polyglot">vim-polyglot</a>，那么装上插件就可以直接使用语法折叠。仅仅需要将<code class="language-plaintext highlighter-rouge">foldmethod</code>选项改为 <code class="language-plaintext highlighter-rouge">syntax</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmethod=syntax
</code></pre></div></div>

<p>假设您正在编辑一个JavaScript文件，而且您已经装好了 vim-polyglot 插件。如果您有以下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const nums = [
  one,
  two,
  three,
  four
]
</code></pre></div></div>

<p>上述文本将会使用语法折叠折起来。当您为某个特定语言（位于 <code class="language-plaintext highlighter-rouge">syntax/</code> 目录中的语言即是典型例子）定义了语法高亮，您可以添加一个 <code class="language-plaintext highlighter-rouge">fold</code> 属性，使它支持折叠。下面是 vim-polyglot 中JavaScript语法文件中的一个片段。注意最后的 <code class="language-plaintext highlighter-rouge">fold</code> 关键字。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>syntax region  jsBracket                      matchgroup=jsBrackets            start=/\[/ end=/\]/ contains=@jsExpression,jsSpreadExpression extend fold
</code></pre></div></div>

<p>本书不会详细介绍 <code class="language-plaintext highlighter-rouge">syntax</code> 功能。如果您感兴趣，可以查阅 <code class="language-plaintext highlighter-rouge">:h syntax.txt</code>。</p>

<h2 id="差异折叠">差异折叠</h2>

<p>Vim 可以对多个文件进行差异比较。</p>

<p>如果您有 <code class="language-plaintext highlighter-rouge">file1.txt</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
</code></pre></div></div>

<p>以及 <code class="language-plaintext highlighter-rouge">file2.txt</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
emacs is ok
</code></pre></div></div>

<p>运行 <code class="language-plaintext highlighter-rouge">vimdiff file1.txt file2.txt</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>+-- 3 lines: vim is awesome -----
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
vim is awesome
[vim is awesome] / [emacs is ok]
</code></pre></div></div>

<p>Vim 会自动折叠一些相同的行。运行 <code class="language-plaintext highlighter-rouge">vimdiff</code> 命令时，Vim 会自动使用 <code class="language-plaintext highlighter-rouge">foldmethod=diff</code>。此时如果运行 <code class="language-plaintext highlighter-rouge">:set foldmethod?</code>，它将返回 <code class="language-plaintext highlighter-rouge">diff</code>。</p>

<h2 id="标志折叠">标志折叠</h2>

<p>要使用标志折叠，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmethod=marker
</code></pre></div></div>

<p>假设有如下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Hello

}
</code></pre></div></div>

<p>输入 <code class="language-plaintext highlighter-rouge">zM</code> 后会看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello

+-- 4 lines: -----
</code></pre></div></div>

<p>Vim 将 <code class="language-plaintext highlighter-rouge">}</code> 视为折叠指示器，并折叠其中的内容。使用标志折叠时，Vim 会寻找由 <code class="language-plaintext highlighter-rouge">'foldmarker'</code> 选项定义的特殊标志，并标记折叠区域。要查看 Vim 使用的标志，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmarker?
</code></pre></div></div>

<p>默认情况下，Vim 把 <code class="language-plaintext highlighter-rouge">}</code> 作为指示器。如果您想将指示器更改为其他诸如 “coffee1” 和 “coffee2” 的字符串，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set foldmarker=coffee1,coffee2
</code></pre></div></div>

<p>假设有如下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello

coffee1
world
vim
coffee2
</code></pre></div></div>

<p>现在，Vim 将使用 <code class="language-plaintext highlighter-rouge">coffee1</code> 和 <code class="language-plaintext highlighter-rouge">coffee2</code> 作为新折叠标志。注意，指示器必须是文本字符串，不能是正则表达式。</p>

<h2 id="持久化折叠">持久化折叠</h2>

<p>当关闭 Vim 会话后，您将失去所有的折叠信息。假设您有 <code class="language-plaintext highlighter-rouge">count.txt</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
three
four
five
</code></pre></div></div>

<p>手动从第三行开始往下折叠 (<code class="language-plaintext highlighter-rouge">:3,$fold</code>)：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
+-- 3 lines: three ---
</code></pre></div></div>

<p>当您退出 Vim 再重新打开 <code class="language-plaintext highlighter-rouge">count.txt</code> 后，这些折叠都不见了！</p>

<p>要在折叠后保留它们，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mkview
</code></pre></div></div>

<p>当打开 <code class="language-plaintext highlighter-rouge">count.txt</code> 后，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:loadview
</code></pre></div></div>

<p>您的折叠信息都被保留下来了。然而，您需要手动运行 <code class="language-plaintext highlighter-rouge">mkview</code> 和 <code class="language-plaintext highlighter-rouge">loadview</code>。我知道，终有一日，我会忘记运行 <code class="language-plaintext highlighter-rouge">mkview</code> 就关闭文件了，接着便会丢失所有折叠信息。能不能自动实现这个呢？</p>

<p>当然能！要在关闭 <code class="language-plaintext highlighter-rouge">.txt</code> 文件时自动运行 <code class="language-plaintext highlighter-rouge">mkview</code>，以及在打开 <code class="language-plaintext highlighter-rouge">.txt</code> 文件后自动运行 <code class="language-plaintext highlighter-rouge">loadview</code>，将下列内容添加至您的 vimrc：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufWinLeave *.txt mkview
autocmd BufWinEnter *.txt silent loadview
</code></pre></div></div>

<p>在上一章您已经见过 <code class="language-plaintext highlighter-rouge">autocmd</code> 了，它用于在事件触发时执行一条命令。这里的两个事件是：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">BufWinLeave</code> 从窗口中删除缓冲时。</li>
  <li><code class="language-plaintext highlighter-rouge">BufWinEnter</code> 在窗口中加载缓冲时。</li>
</ul>

<p>现在，即使您在 <code class="language-plaintext highlighter-rouge">.txt</code> 文件内折叠内容后直接退出 Vim，下次再打开该文件时，您的折叠信息都能自动恢复。</p>

<p>默认情况下，当运行 <code class="language-plaintext highlighter-rouge">mkview</code> 时，Vim将折叠信息保存在<code class="language-plaintext highlighter-rouge">~/.vim/view</code> (Unix 系统)。您可以查阅 <code class="language-plaintext highlighter-rouge">:h 'viewdir'</code> 来了解更多信息。</p>

<h2 id="聪明地学习折叠">聪明地学习折叠</h2>

<p>当我刚开始使用 Vim 时， 我会跳过学习 Vim 折叠，因为我觉得它不太实用。然而，随着我码龄的增长，我越发觉得折叠功能大有用处。得当地使用折叠功能，文本结构可以更加清晰，犹如一本书籍的目录。</p>

<p>当您学习折叠时，请从手动折叠开始，因为它可以随学随用。然后逐渐学习不同的技巧来使用缩进和标志折叠。最后，学习如何使用语法和表达式折叠。您甚至可以使用后两个来编写您自己的 Vim 插件。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch16_tags/">Ch 16 - 标签</a></li>
  <li>下一部分 <a href="../ch18_git/">Ch 18 - Git</a></li>
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
