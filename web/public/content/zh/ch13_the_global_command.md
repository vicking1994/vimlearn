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
    

    <title>第13章：全局命令</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch13_the_global_command/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch13_the_global_command/">
<meta property="og:title" content="第13章：全局命令">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch13_the_global_command/">
<meta name="twitter:title" content="第13章：全局命令">
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
        <h1>第13章：全局命令</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#全局命令概述" id="markdown-toc-全局命令概述">全局命令概述</a></li>
  <li><a href="#逆向匹配" id="markdown-toc-逆向匹配">逆向匹配</a></li>
  <li><a href="#模式串" id="markdown-toc-模式串">模式串</a></li>
  <li><a href="#传递范围参数" id="markdown-toc-传递范围参数">传递范围参数</a></li>
  <li><a href="#普通模式命令" id="markdown-toc-普通模式命令">普通模式命令</a></li>
  <li><a href="#执行宏" id="markdown-toc-执行宏">执行宏</a></li>
  <li><a href="#递归全局命令" id="markdown-toc-递归全局命令">递归全局命令</a></li>
  <li><a href="#更改定界符" id="markdown-toc-更改定界符">更改定界符</a></li>
  <li><a href="#默认命令" id="markdown-toc-默认命令">默认命令</a></li>
  <li><a href="#反转整个缓冲区" id="markdown-toc-反转整个缓冲区">反转整个缓冲区</a></li>
  <li><a href="#汇总所有待办事项" id="markdown-toc-汇总所有待办事项">汇总所有待办事项</a></li>
  <li><a href="#黑洞删除" id="markdown-toc-黑洞删除">黑洞删除</a></li>
  <li><a href="#将多条空行减少为一条空行" id="markdown-toc-将多条空行减少为一条空行">将多条空行减少为一条空行</a></li>
  <li><a href="#高级排序" id="markdown-toc-高级排序">高级排序</a></li>
  <li><a href="#聪明地学习全局命令" id="markdown-toc-聪明地学习全局命令">聪明地学习全局命令</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>到目前为止，您已经了解了如何使用点命令(<code class="language-plaintext highlighter-rouge">.</code>)重复上一次更改，如何使用宏(<code class="language-plaintext highlighter-rouge">q</code>)重复动作以及将文本存储在寄存器中(<code class="language-plaintext highlighter-rouge">"</code>)。</p>

<p>在本章中，您将学习如何在全局命令中重复命令行命令。</p>

<h2 id="全局命令概述">全局命令概述</h2>

<p>Vim的全局命令用于同时在多行上运行命令行命令。</p>

<p>顺便说一句，您之前可能已经听说过 “Ex命令” 一词。在本书中，我将它们称为命令行命令，但Ex命令和命令行命令是相同的。它们是以冒号（<code class="language-plaintext highlighter-rouge">:</code>）开头的命令。在上一章中，您了解了替代命令。这是一个Ex命令的示例。它们之所以称为Ex，是因为它们最初来自Ex文本编辑器。在本书中，我将继续将它们称为命令行命令。有关Ex命令的完整列表，请查看<code class="language-plaintext highlighter-rouge">:h ex-cmd-index</code>。</p>

<p>全局命令具有以下语法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/pattern/command
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">pattern</code>匹配包含该模式串的所有行，类似于替代命令中的模式串。<code class="language-plaintext highlighter-rouge">command</code>可以是任何命令行命令。全局命令通过对与<code class="language-plaintext highlighter-rouge">pattern</code>匹配的每一行执行<code class="language-plaintext highlighter-rouge">command</code>来工作。</p>

<p>如果您具有以下表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>要删除所有包含”console”的行，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/console/d
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;

const two = 2;

const three = 3;
</code></pre></div></div>

<p>全局命令在与”console”模式串匹配的所有行上执行删除命令(<code class="language-plaintext highlighter-rouge">d</code>)。</p>

<p>运行<code class="language-plaintext highlighter-rouge">g</code>命令时，Vim对文件进行两次扫描。在第一次运行时，它将扫描每行并标记与<code class="language-plaintext highlighter-rouge">/console/</code>模式传教匹配的行。一旦所有匹配的行都被标记，它将进行第二次运行，并在标记的行上执行d命令。</p>

<p>如果要删除所有包含”const”的行，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/const/d
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>console.log("one: ", one);

console.log("two: ", two);

console.log("three: ", three);
</code></pre></div></div>

<h2 id="逆向匹配">逆向匹配</h2>

<p>要在不匹配的行上运行全局命令，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g!/{pattern}/{command}
</code></pre></div></div>

<p>或者</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:v/{pattern}/{command}
</code></pre></div></div>

<p>如果运行<code class="language-plaintext highlighter-rouge">:v/console/d</code>，它将删除 <strong>不</strong> 包含”console”的所有行。</p>

<h2 id="模式串">模式串</h2>

<p>全局命令使用与替代命令相同的模式串系统，因此本节将作为更新。随意跳到下一部分或继续阅读！</p>

<p>如果您具有以下表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>要删除包含”one”或”two”的行，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/one\|two/d
</code></pre></div></div>

<p>要删除包含任何一位数字的行，请运行以下任一命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/[0-9]/d
</code></pre></div></div>

<p>或者</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/\d/d
</code></pre></div></div>

<p>如果您有表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const oneMillion = 1000000;
const oneThousand = 1000;
const one = 1;
</code></pre></div></div>

<p>要匹配包含三到六个零的行，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/0\{3,6\}/d
</code></pre></div></div>

<h2 id="传递范围参数">传递范围参数</h2>

<p>您可以在<code class="language-plaintext highlighter-rouge">g</code>命令之前传递一个范围。您可以通过以下几种方法来做到这一点：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">:1,5g/console/d</code>  删除第1行和第5行之间匹配字符串”console”的行。</li>
  <li><code class="language-plaintext highlighter-rouge">:,5g/console/d</code> 如果逗号前没有地址，则从当前行开始。它在当前行和第5行之间寻找字符串”console”并将该行删除。</li>
  <li><code class="language-plaintext highlighter-rouge">:3,g/console/d</code> 如果逗号后没有地址，则在当前行结束。它在第3行和当前行之间寻找字符串”console”并将该行删除。</li>
  <li><code class="language-plaintext highlighter-rouge">:3g/console/d</code> 如果只传递一个地址而不带逗号，则仅在第3行执行命令。在第3行查找，如果包含字符串”console”，则将其删除。</li>
</ul>

<p>除了数字，您还可以将这些符号用作范围：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">.</code> 表示当前行。范围<code class="language-plaintext highlighter-rouge">.,3</code>表示当前行和第3行之间。</li>
  <li><code class="language-plaintext highlighter-rouge">$</code> 表示文件的最后一行。 <code class="language-plaintext highlighter-rouge">3,$</code>范围表示在第3行和最后一行之间。</li>
  <li><code class="language-plaintext highlighter-rouge">+n</code> 表示当前行之后的n行。您可以将其与<code class="language-plaintext highlighter-rouge">.</code>结合使用，也可以不结合使用。  <code class="language-plaintext highlighter-rouge">3,+1</code>或<code class="language-plaintext highlighter-rouge">3,.+1</code>表示在第3行和当前行之后的行之间。</li>
</ul>

<p>如果您不给它任何范围，默认情况下它将影响整个文件。这实际上不是常态。如果您不传递任何范围，Vim的大多数命令行命令仅在当前行上运行(两个值得注意的例外是：这里介绍的全局命令(<code class="language-plaintext highlighter-rouge">:g</code>)和save(<code class="language-plaintext highlighter-rouge">:w</code>)命令)。</p>

<h2 id="普通模式命令">普通模式命令</h2>

<p>您可以将全局命令和<code class="language-plaintext highlighter-rouge">:normal</code>命令行命令一起运行。</p>

<p>如果您有以下文字：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1
console.log("one: ", one)

const two = 2
console.log("two: ", two)

const three = 3
console.log("three: ", three)

</code></pre></div></div>
<p>要添加”;”运行到每一行的末尾：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/./normal A;
</code></pre></div></div>

<p>让我们分解一下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:g</code> 是全局命令。</li>
  <li><code class="language-plaintext highlighter-rouge">/./</code> 是“非空行”的模式。它匹配至少包含1个字符的行。因此将与包含“const”和“console”的行匹配。它不匹配空行。</li>
  <li><code class="language-plaintext highlighter-rouge">normal A;</code> 运行<code class="language-plaintext highlighter-rouge">:normal</code>命令行命令。 <code class="language-plaintext highlighter-rouge">A;</code> 是普通模式命令，用于在该行的末尾插入”;”。</li>
</ul>

<h2 id="执行宏">执行宏</h2>

<p>您也可以使用全局命令执行宏。宏只是普通模式下的操作，因此可以使用<code class="language-plaintext highlighter-rouge">:normal</code>来执行宏。如果您有以下表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1
console.log("one: ", one);

const two = 2
console.log("two: ", two);

const three = 3
console.log("three: ", three);
</code></pre></div></div>

<p>请注意，带有”const”的行没有分号。让我们创建一个宏，以在寄存器”a”的这些行的末尾添加逗号：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>qa0A;&lt;esc&gt;q
</code></pre></div></div>

<p>如果您需要复习，请查看有关宏的章节。现在运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/const/normal @a
</code></pre></div></div>

<p>现在，所有带有”const”的行的末尾将带有”;”。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>如果您一步一步按照示例做，您将会在第一行末尾看到两个分号。为避免这种情况，使用全局命令时，给一个范围参数，从第2行到最后一行, <code class="language-plaintext highlighter-rouge">:2,$g/const/normal @a</code>。</p>

<h2 id="递归全局命令">递归全局命令</h2>

<p>全局命令本身是命令行命令的一种，因此您可以从技术上在全局命令中运行全局命令。</p>

<p>给定表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>如果您运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/console/g/two/d
</code></pre></div></div>

<p>首先，<code class="language-plaintext highlighter-rouge">g</code>将查找包含模式”console”的行，并找到3个匹配项。然后，第二个”g”将从那三个匹配项中查找包含模式”two”的行。最后，它将删除该匹配项。</p>

<p>您也可以将<code class="language-plaintext highlighter-rouge">g</code>与<code class="language-plaintext highlighter-rouge">v</code>结合使用以找到正负模式。例如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/console/v/two/d
</code></pre></div></div>

<p>与前面的命令不同，它将查找 <strong>不</strong> 包含”two”的行。</p>

<h2 id="更改定界符">更改定界符</h2>

<p>您可以像替代命令一样更改全局命令的定界符。规则是相同的：您可以使用任何单字节字符，但字母，数字，<code class="language-plaintext highlighter-rouge">"</code>, <code class="language-plaintext highlighter-rouge">|</code>, 和 <code class="language-plaintext highlighter-rouge">\</code>除外。</p>

<p>要删除包含”console”的行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g@console@d
</code></pre></div></div>

<p>如果在全局命令中使用替代命令，则可以有两个不同的定界符：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>g@one@s+const+let+g
</code></pre></div></div>

<p>此处，全局命令将查找包含”one”的所有行。 替换命令将从这些匹配项中将字符串”const”替换为”let”。</p>

<h2 id="默认命令">默认命令</h2>

<p>如果在全局命令中未指定任何命令行命令，会发生什么？</p>

<p>全局命令将使用打印(<code class="language-plaintext highlighter-rouge">:p</code>)命令来打印当前行的文本。如果您运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/console
</code></pre></div></div>

<p>它将在屏幕底部打印所有包含”console”的行。</p>

<p>顺便说一下，这是一个有趣的事实。因为全局命令使用的默认命令是<code class="language-plaintext highlighter-rouge">p</code>，所以这使<code class="language-plaintext highlighter-rouge">g</code>语法为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/re/p
</code></pre></div></div>
<ul>
  <li><code class="language-plaintext highlighter-rouge">g</code> = 全局命令</li>
  <li><code class="language-plaintext highlighter-rouge">re</code> = 正则表达式模式</li>
  <li><code class="language-plaintext highlighter-rouge">p</code> = 打印命令</li>
</ul>

<p>这三个元素连起来拼写为 <strong>“grep”</strong>，与命令行中的<code class="language-plaintext highlighter-rouge">grep</code> 相同。但这 <strong>不</strong> 是巧合。 <code class="language-plaintext highlighter-rouge">g/re/p</code>命令最初来自Ed编辑器（一个行文本编辑器）。 <code class="language-plaintext highlighter-rouge">grep</code>命令的名称来自Ed。</p>

<p>您的计算机可能仍具有Ed编辑器。从终端运行<code class="language-plaintext highlighter-rouge">ed</code>（提示：要退出，请键入<code class="language-plaintext highlighter-rouge">q</code>）。</p>

<h2 id="反转整个缓冲区">反转整个缓冲区</h2>

<p>要翻转整个文件，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/^/m 0 
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">^</code>表示行的开始。使用<code class="language-plaintext highlighter-rouge">^</code>匹配所有行，包括空行。</p>

<p>如果只需要反转几行，请将其传递一个范围。要将第5行到第10行之间的行反转，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:5,10g/^/m 0
</code></pre></div></div>

<p>要了解有关move命令的更多信息，请查看<code class="language-plaintext highlighter-rouge">:h :move</code>。</p>

<h2 id="汇总所有待办事项">汇总所有待办事项</h2>

<p>当我编码时，有时我会想到一个随机的绝妙主意。不想失去专注，我通常将它们写在我正在编辑的文件中，例如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);
// TODO: 喂小狗

const two = 2;
// TODO：自动喂小狗
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
// TODO：创建一家销售自动小狗喂食器的初创公司
</code></pre></div></div>

<p>跟踪所有已创建的TODO可能很困难。 Vim有一个<code class="language-plaintext highlighter-rouge">:t</code>（copy）方法来将所有匹配项复制到一个地址。要了解有关复制方法的更多信息，请查看<code class="language-plaintext highlighter-rouge">:h :copy</code>。</p>

<p>要将所有TODO复制到文件末尾以便于自省，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/TODO/t $
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);
// TODO：喂小狗

const two = 2;
// TODO：自动喂小狗
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
// TODO：创建一家销售自动小狗喂食器的初创公司

// TODO：喂小狗
// TODO：自动喂小狗
// TODO：创建一家销售自动小狗喂食器的初创公司
</code></pre></div></div>

<p>现在，我可以查看我创建的所有TODO，另外找个时间来完成它们，或将它们委托给其他人，然后继续执行下一个任务。</p>

<p>如果不想复制，而是将所有的 TODO 移动到末尾，可以使用移动命令 <code class="language-plaintext highlighter-rouge">m</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/TODO/m $
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);

// TODO：喂小狗
// TODO：自动喂小狗
// TODO：创建一家销售自动小狗喂食器的初创公司
</code></pre></div></div>

<h2 id="黑洞删除">黑洞删除</h2>

<p>回想一下寄存器那一章，已删除的文本存储在编号寄存器中（允许它们足够大）。每当运行<code class="language-plaintext highlighter-rouge">:g/console/d</code>时，Vim都会将删除的行存储在编号寄存器中。如果删除多行，所有编号的寄存器将很快被填满。为了避免这种情况，您可以使用黑洞寄存器（<code class="language-plaintext highlighter-rouge">"_</code>） <strong>不</strong> 将删除的行存储到寄存器中。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/console/d _
</code></pre></div></div>

<p>通过在<code class="language-plaintext highlighter-rouge">d</code>之后传递<code class="language-plaintext highlighter-rouge">_</code>，Vim不会将删除的行保存到任何寄存器中。</p>

<h2 id="将多条空行减少为一条空行">将多条空行减少为一条空行</h2>

<p>如果您的文件带有多个空行，如下所示：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>您可以快速将多个空行减少为一条空行。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/^$/,/./-1j
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);

const two = 2;
console.log("two: ", two);

const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>一般情况下全局命令遵循下列格式：<code class="language-plaintext highlighter-rouge">:g/pattern/command</code>。但是，您也可以使用下面的格式：<code class="language-plaintext highlighter-rouge">:g/pattern1/,/pattern2/command</code>。用这种格式，Vim将会使<code class="language-plaintext highlighter-rouge">command</code>作用在<code class="language-plaintext highlighter-rouge">pattern1</code>和<code class="language-plaintext highlighter-rouge">pattern2</code>上。</p>

<p>记住上面说的格式，让我们根据<code class="language-plaintext highlighter-rouge">:g/pattern1/,/pattern2/command</code>这个格式分解一下命令<code class="language-plaintext highlighter-rouge">:g/^$/,/./-1j</code>：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">/pattern1/</code> 就是 <code class="language-plaintext highlighter-rouge">/^$/</code> 。它表示一个空行（一个没有任何字符的行）。</li>
  <li><code class="language-plaintext highlighter-rouge">/pattern2/</code> 就是 <code class="language-plaintext highlighter-rouge">/./</code>（用-1作为行修正）。<code class="language-plaintext highlighter-rouge">/./</code>表示一个非空行（一个含有至少1个字符的行）。这里的 <code class="language-plaintext highlighter-rouge">-1</code> 意思是向上偏移1行。</li>
  <li><code class="language-plaintext highlighter-rouge">command</code> 就是 <code class="language-plaintext highlighter-rouge">j</code>，一个联接命令(<code class="language-plaintext highlighter-rouge">:j</code>)。在这个示例中，该全局命令联接所有给定的行。</li>
</ul>

<p>顺便说一句，如果您想要将多个空行全部删去，运行下面的命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/^$/,/./j
</code></pre></div></div>

<p>或者：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/^$/-j
</code></pre></div></div>

<p>您的文本将会减少为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = 1;
console.log("one: ", one);
const two = 2;
console.log("two: ", two);
const three = 3;
console.log("three: ", three);
</code></pre></div></div>

<p>（译者补充：<code class="language-plaintext highlighter-rouge">j</code>连接命令的格式是：<code class="language-plaintext highlighter-rouge">:[range]j</code>。比如：<code class="language-plaintext highlighter-rouge">:1,5j</code>将连接第1至5行。在前面的命令中<code class="language-plaintext highlighter-rouge">:g/pattern1/,/pattern2/-1j</code>，<code class="language-plaintext highlighter-rouge">/pattern1/</code>和<code class="language-plaintext highlighter-rouge">/pattern2</code>都是<code class="language-plaintext highlighter-rouge">j</code>命令的范围参数，表示连接空行至非空行上方一行，这样就会保留1个空行。在早前的英文版本中有关于<code class="language-plaintext highlighter-rouge">j</code>命令的介绍，不知为何在后面的更新中，原作者删除了关于<code class="language-plaintext highlighter-rouge">j</code>命令的介绍）</p>

<h2 id="高级排序">高级排序</h2>

<p>Vim有一个<code class="language-plaintext highlighter-rouge">:sort</code>命令来对一个范围内的行进行排序。例如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>d
b
a
e
c
</code></pre></div></div>

<p>您可以通过运行<code class="language-plaintext highlighter-rouge">:sort</code>对它们进行排序。如果给它一个范围，它将只对该范围内的行进行排序。例如，<code class="language-plaintext highlighter-rouge">:3,5sort</code>仅在第三和第五行之间排序。</p>

<p>如果您具有以下表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const arrayB = [
  "i",
  "g",
  "h",
  "b",
  "f",
  "d",
  "e",
  "c",
  "a",
]

const arrayA = [
  "h",
  "b",
  "f",
  "d",
  "e",
  "a",
  "c",
]
</code></pre></div></div>

<p>如果需要排序数组中的元素，而不是数组本身，可以运行以下命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:g/\[/+1,/\]/-1sort
</code></pre></div></div>

<p>结果：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const arrayB = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
]

const arrayA = [
  "a"
  "b",
  "c",
  "d",
  "e",
  "f",
  "h",
]
</code></pre></div></div>

<p>这很棒！但是命令看起来很复杂。让我们分解一下。该命令依然遵循 <code class="language-plaintext highlighter-rouge">:g/pattern1/,/pattern2/command</code>这个格式。</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">:g</code> 是全局命令</li>
  <li><code class="language-plaintext highlighter-rouge">/\[/+1</code> 是第一个模式串，它匹配左方括号”[“。<code class="language-plaintext highlighter-rouge">+1</code>表示匹配行的下面1行。</li>
  <li><code class="language-plaintext highlighter-rouge">/\]/-1</code> 是第二个模式串，它匹配右方括号”]”。<code class="language-plaintext highlighter-rouge">-1</code>表示匹配行的上面1行。</li>
  <li><code class="language-plaintext highlighter-rouge">/\[/+1,/\]/-1</code> 表示在”[“和”]”之间的行。</li>
  <li><code class="language-plaintext highlighter-rouge">sort</code> 是命令行命令：排序。</li>
</ul>

<h2 id="聪明地学习全局命令">聪明地学习全局命令</h2>

<p>全局命令针对所有匹配的行执行命令行命令。有了它，您只需要运行一次命令，Vim就会为您完成其余的工作。要精通全局命令，需要做两件事：良好的命令行命令词汇表和正则表达式知识。随着您花费更多的时间使用Vim，您自然会学到更多的命令行命令。正则表达式知识需要更多的实际操作。但是一旦您适应了使用正则表达式，您将领先于很多其他人。</p>

<p>这里的一些例子很复杂。不要被吓到。真正花时间了解它们。认真阅读每个模式串，不要放弃。</p>

<p>每当需要在多个位置应用命令时，请暂停并查看是否可以使用<code class="language-plaintext highlighter-rouge">g</code>命令。寻找最适合工作的命令，并编写一个模式串以同时定位多个目标。</p>

<p>既然您已经知道全局命令的功能强大，那么让我们学习如何使用外部命令来增加工具库。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch12_search_and_substitute/">Ch 12 - 搜索和替换</a></li>
  <li>下一部分 <a href="../ch14_external_commands/">Ch 14 - 外部命令</a></li>
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
