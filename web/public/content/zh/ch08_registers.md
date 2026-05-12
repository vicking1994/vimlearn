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
    

    <title>第8章：寄存器</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch08_registers/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch08_registers/">
<meta property="og:title" content="第8章：寄存器">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch08_registers/">
<meta name="twitter:title" content="第8章：寄存器">
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
        <h1>第8章：寄存器</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#寄存器的10种类型" id="markdown-toc-寄存器的10种类型">寄存器的10种类型</a></li>
  <li><a href="#寄存器命令" id="markdown-toc-寄存器命令">寄存器命令</a></li>
  <li><a href="#在输入模式中使用寄存器" id="markdown-toc-在输入模式中使用寄存器">在输入模式中使用寄存器</a></li>
  <li><a href="#匿名寄存器" id="markdown-toc-匿名寄存器">匿名寄存器(<code class="language-plaintext highlighter-rouge">""</code>)</a></li>
  <li><a href="#编号寄存器0-9" id="markdown-toc-编号寄存器0-9">编号寄存器(<code class="language-plaintext highlighter-rouge">"0-9</code>)</a>    <ul>
      <li><a href="#复制寄存器-0" id="markdown-toc-复制寄存器-0">复制寄存器 (<code class="language-plaintext highlighter-rouge">"0</code>)</a></li>
      <li><a href="#编号寄存器-1-9" id="markdown-toc-编号寄存器-1-9">编号寄存器 (<code class="language-plaintext highlighter-rouge">"1-9</code>)</a></li>
    </ul>
  </li>
  <li><a href="#小删除寄存器-" id="markdown-toc-小删除寄存器-">小删除寄存器(<code class="language-plaintext highlighter-rouge">"-</code>)</a></li>
  <li><a href="#命名寄存器-a-z" id="markdown-toc-命名寄存器-a-z">命名寄存器 (<code class="language-plaintext highlighter-rouge">"a-z</code>)</a></li>
  <li><a href="#只读寄存器--" id="markdown-toc-只读寄存器--">只读寄存器(<code class="language-plaintext highlighter-rouge">":</code>, <code class="language-plaintext highlighter-rouge">".</code>, <code class="language-plaintext highlighter-rouge">"%</code>)</a></li>
  <li><a href="#buffer交替文件寄存器-" id="markdown-toc-buffer交替文件寄存器-">Buffer交替文件寄存器 (<code class="language-plaintext highlighter-rouge">"#</code>)</a></li>
  <li><a href="#表达式寄存器-" id="markdown-toc-表达式寄存器-">表达式寄存器 (<code class="language-plaintext highlighter-rouge">"=</code>)</a></li>
  <li><a href="#选取和拖放寄存器--" id="markdown-toc-选取和拖放寄存器--">选取和拖放寄存器 (<code class="language-plaintext highlighter-rouge">"*</code>, <code class="language-plaintext highlighter-rouge">"+</code>)</a></li>
  <li><a href="#黑洞寄存器-_" id="markdown-toc-黑洞寄存器-_">黑洞寄存器 (<code class="language-plaintext highlighter-rouge">"_</code>)</a></li>
  <li><a href="#搜索模式寄存器-" id="markdown-toc-搜索模式寄存器-">搜索模式寄存器 (<code class="language-plaintext highlighter-rouge">"/</code>)</a></li>
  <li><a href="#查看所有的寄存器" id="markdown-toc-查看所有的寄存器">查看所有的寄存器</a></li>
  <li><a href="#执行寄存器" id="markdown-toc-执行寄存器">执行寄存器</a></li>
  <li><a href="#清除寄存器" id="markdown-toc-清除寄存器">清除寄存器</a></li>
  <li><a href="#获取寄存器中的内容" id="markdown-toc-获取寄存器中的内容">获取寄存器中的内容</a></li>
  <li><a href="#聪明地学习寄存器" id="markdown-toc-聪明地学习寄存器">聪明地学习寄存器</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>学习Vim中的寄存器就像第一次学习线性代数一样，除非你学习了他们，否则你会觉得自己根本不需要它们。</p>

<p>你可能已经在复制或删除文本并用<code class="language-plaintext highlighter-rouge">p</code>或<code class="language-plaintext highlighter-rouge">P</code>粘贴它们到别处的时候使用过Vim的寄存器了。但是，你知道Vim总共有10种不同类型的寄存器吗？如果正确地使用Vim寄存器，将帮助您从重复的输入中解放出来。</p>

<p>在这一章节中，我会介绍Vim的所有寄存器类型，以及如何有效地使用它们。</p>

<h2 id="寄存器的10种类型">寄存器的10种类型</h2>

<p>下面是Vim所拥有的10种寄存器类型：</p>

<ol>
  <li>匿名寄存器（<code class="language-plaintext highlighter-rouge">""</code>）.</li>
  <li>编号寄存器(<code class="language-plaintext highlighter-rouge">"0-9</code>).</li>
  <li>小删除寄存器 (<code class="language-plaintext highlighter-rouge">"-</code>).</li>
  <li>命名寄存器 (<code class="language-plaintext highlighter-rouge">"a-z</code>).</li>
  <li>只读寄存器 (<code class="language-plaintext highlighter-rouge">":</code>, <code class="language-plaintext highlighter-rouge">".</code>, and <code class="language-plaintext highlighter-rouge">"%</code>).</li>
  <li>Buffer交替文件寄存器 (<code class="language-plaintext highlighter-rouge">"#</code>).</li>
  <li>表达式寄存器 (<code class="language-plaintext highlighter-rouge">"=</code>).</li>
  <li>选取和拖放寄存器(<code class="language-plaintext highlighter-rouge">"*</code> and <code class="language-plaintext highlighter-rouge">"+</code>).</li>
  <li>黑洞寄存器 (<code class="language-plaintext highlighter-rouge">"_</code>).</li>
  <li>搜索模式寄存器 (<code class="language-plaintext highlighter-rouge">"/</code>).</li>
</ol>

<h2 id="寄存器命令">寄存器命令</h2>

<p>要使用寄存器，您必须先使用命令将内容存储到寄存器，以下是一些存值到寄存器中的操作：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>y    复制
c    删除文本并进入输入模式
d    删除文本
</code></pre></div></div>

<p>其实还有更多的寄存器写入操作（比如<code class="language-plaintext highlighter-rouge">s</code>或<code class="language-plaintext highlighter-rouge">x</code>），但是上面列出的是最常用的一些。根据经验看来，如果一个操作删除了文本，那么很有可能这个操作将移除的文本存入寄存器中了。</p>

<p>想要从寄存器中取出（粘贴）文本，你可以用以下的命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>p    在光标位置之后粘贴文本
P    在光标位置之前粘贴文本
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">p</code>和<code class="language-plaintext highlighter-rouge">P</code>都可以接受计数和一个寄存器标志作为参数。比如，想要把最近复制的文本粘贴10次的话可以用<code class="language-plaintext highlighter-rouge">10p</code>。想粘贴寄存器”a”中的文本，可以用<code class="language-plaintext highlighter-rouge">"ap</code>。想将寄存器“a”中的文本粘贴10次的话，可以使用<code class="language-plaintext highlighter-rouge">10"ap</code>。注意，从技术层面讲，命令<code class="language-plaintext highlighter-rouge">p</code>实际上表示的是”put”(放置)，而不是”paste”(粘贴)，使用粘贴只是因为它更符合传统习惯。</p>

<p>从某个特定寄存器中读取文本的通用语法是<code class="language-plaintext highlighter-rouge">"x</code>，其中<code class="language-plaintext highlighter-rouge">x</code>是这个寄存器的标志。</p>

<h2 id="在输入模式中使用寄存器">在输入模式中使用寄存器</h2>

<p>在这一章节中你学到的东西在输入模式中也同样适用。想要获取寄存器”a”中的文本，通常可以使用<code class="language-plaintext highlighter-rouge">"ap</code>来进行。不过当你在输入模式下时，你需要运行<code class="language-plaintext highlighter-rouge">Ctrl-r a</code>。在输入模式下使用寄存器的语法是：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-r x
</code></pre></div></div>

<p>其中<code class="language-plaintext highlighter-rouge">x</code>是寄存器标志。既然你现在已经知道如何存储和访问寄存器了，让我们学点更深入的吧。</p>

<h2 id="匿名寄存器">匿名寄存器(<code class="language-plaintext highlighter-rouge">""</code>)</h2>

<p>想从匿名寄存器中获取文本，可以使用<code class="language-plaintext highlighter-rouge">""p</code>。 匿名寄存器默认存储着你最近一次复制，修改或删除的文本。如果再进行另一次复制，修改或删除，Vim会自动替换匿名寄存器中的文本。匿名寄存器和电脑上粘贴板的功能很接近。</p>

<p>默认情况下，<code class="language-plaintext highlighter-rouge">p</code>(或者<code class="language-plaintext highlighter-rouge">P</code>)是和匿名寄存器相关联的（从现在起我将使用<code class="language-plaintext highlighter-rouge">p</code>而不是<code class="language-plaintext highlighter-rouge">""p</code>来指代匿名寄存器）。</p>

<h2 id="编号寄存器0-9">编号寄存器(<code class="language-plaintext highlighter-rouge">"0-9</code>)</h2>

<p>编号寄存器会自动以升序来进行填充。一共有两种不同的编号寄存器：复制寄存器(<code class="language-plaintext highlighter-rouge">0</code>)和其他编号寄存器(<code class="language-plaintext highlighter-rouge">1-9</code>)。让我们先来讨论复制寄存器。</p>

<h3 id="复制寄存器-0">复制寄存器 (<code class="language-plaintext highlighter-rouge">"0</code>)</h3>

<p>如果你使用<code class="language-plaintext highlighter-rouge">yy</code>来复制一整行文本，事实上Vim会将文本存放两个寄存器中：</p>

<ol>
  <li>匿名寄存器 (<code class="language-plaintext highlighter-rouge">p</code>).</li>
  <li>复制寄存器 (<code class="language-plaintext highlighter-rouge">"0p</code>).</li>
</ol>

<p>在你又复制其他不同的文本后，Vim会自动替换匿名寄存器和复制寄存器(<code class="language-plaintext highlighter-rouge">0</code>)中的内容。其他的任何操作都不会被存放在<code class="language-plaintext highlighter-rouge">0</code>号寄存器中。这可以为你提供方便，因为除非你再进行另一次复制，否则你已经复制的内容会一直在寄存器中，无论你进行多少次修改和删除。</p>

<p>比如，如果你：</p>

<ol>
  <li>复制一整行 (<code class="language-plaintext highlighter-rouge">yy</code>)</li>
  <li>删除一整行(<code class="language-plaintext highlighter-rouge">dd</code>)</li>
  <li>再删除另一行 (<code class="language-plaintext highlighter-rouge">dd</code>)</li>
</ol>

<p>复制寄存器中的文本仍然是第一步中复制的文本。</p>

<p>如果你:</p>

<ol>
  <li>复制一整行 (<code class="language-plaintext highlighter-rouge">yy</code>)</li>
  <li>删除一整行 (<code class="language-plaintext highlighter-rouge">dd</code>)</li>
  <li>复制另一行 (<code class="language-plaintext highlighter-rouge">yy</code>)</li>
</ol>

<p>复制寄存器中的内容则是第三步中复制的内容。</p>

<p>还有一个小技巧，在输入模式下，你可以使用<code class="language-plaintext highlighter-rouge">Ctrl-r 0</code>快速地粘贴你刚才复制的内容。</p>

<h3 id="编号寄存器-1-9">编号寄存器 (<code class="language-plaintext highlighter-rouge">"1-9</code>)</h3>

<p>当你修改或者删除至少一整行的文本时，这部分文本会按时间顺序被存储在1-9号编号寄存器中。（编号越小时间距离越近）</p>

<p>比如，你有以下这些文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>line three
line two
line one
</code></pre></div></div>

<p>当你的光标在文本“line three”上时,使用<code class="language-plaintext highlighter-rouge">dd</code>来一行一行地删除这些文本。在所有文本都已经删除后，1号寄存器中的内容应该是”line one”（时间上最近的文本）， 2号寄存器则包含”line two”(时间上第二近的文本)，3号寄存器中则包含”line three”（最早删除的文本）。普通模式下可以使用<code class="language-plaintext highlighter-rouge">"1p</code>来获取1号寄存器中的内容。</p>

<p>编号寄存器的编号在使用点命令时会自动增加。比如，如果你的1号编号寄存器（<code class="language-plaintext highlighter-rouge">"1</code>）中的内容为”line one”， 2号寄存器（<code class="language-plaintext highlighter-rouge">"2</code>）为”line two”, 三号寄存器（<code class="language-plaintext highlighter-rouge">"3</code>）”line three”,你可以使用以下的技巧来连续地粘贴他们：</p>

<ul>
  <li>使用<code class="language-plaintext highlighter-rouge">"1p</code>来粘贴1号寄存器中的内容。</li>
  <li>使用<code class="language-plaintext highlighter-rouge">.</code> (点命令)来粘贴2号寄存器（<code class="language-plaintext highlighter-rouge">"2</code>）中的内容。</li>
  <li>使用<code class="language-plaintext highlighter-rouge">.</code> (点命令)来粘贴3号寄存器（<code class="language-plaintext highlighter-rouge">"3</code>）中的内容。</li>
</ul>

<p>在连续地使用点命令时，Vim会自动的增加编号寄存器的编号。这个技巧对于所有的编号寄存器都适用。如果你从5号寄存器开始(<code class="language-plaintext highlighter-rouge">"5P</code>), 点命令<code class="language-plaintext highlighter-rouge">.</code>会执行<code class="language-plaintext highlighter-rouge">"6P</code>,再次使用<code class="language-plaintext highlighter-rouge">.</code>则会执行<code class="language-plaintext highlighter-rouge">"7P</code>,等等。</p>

<p>小型的删除比如单词删除（<code class="language-plaintext highlighter-rouge">dw</code>)或者单词修改(<code class="language-plaintext highlighter-rouge">cw</code>)不会被存储在编号寄存器中，它们被存储在小删除寄存器(<code class="language-plaintext highlighter-rouge">"-</code>)中，我将在接下来的一小节讨论小删除寄存器。</p>

<h2 id="小删除寄存器-">小删除寄存器(<code class="language-plaintext highlighter-rouge">"-</code>)</h2>

<p>不足一行的修改或者删除都不会被存储在0-9号编号寄存器中，而是会被存储在小删除寄存器 (<code class="language-plaintext highlighter-rouge">"-</code>)中。</p>

<p>比如:</p>

<ol>
  <li>删除一个单词 (<code class="language-plaintext highlighter-rouge">diw</code>)</li>
  <li>删除一行文本 (<code class="language-plaintext highlighter-rouge">dd</code>)</li>
  <li>删除一行文本 (<code class="language-plaintext highlighter-rouge">dd</code>)</li>
</ol>

<p><code class="language-plaintext highlighter-rouge">"-p</code> 会给你第一步中删除的单词。</p>

<p>另一个例子:</p>

<ol>
  <li>删除一个单词(<code class="language-plaintext highlighter-rouge">diw</code>)</li>
  <li>删除一行文本 (<code class="language-plaintext highlighter-rouge">dd</code>)</li>
  <li>删除一个单词 (<code class="language-plaintext highlighter-rouge">diw</code>)</li>
</ol>

<p><code class="language-plaintext highlighter-rouge">"-p</code> 会给出第三步中删除的单词。类似地, <code class="language-plaintext highlighter-rouge">"1p</code> 会给出第二步中删除的一整行文本。不幸的是我们没有办法获取第一步中删除的单词，因为小删除寄存器只能存储一个文本。然而，如果你想保存第一步中删除的文本，你可以使用命名寄存器来完成。</p>

<h2 id="命名寄存器-a-z">命名寄存器 (<code class="language-plaintext highlighter-rouge">"a-z</code>)</h2>

<p>命名寄存器是Vim中用法最丰富的寄存器。a-z命名寄存器可以存储复制的，修改的和被删除的文本。不像之前介绍的3种寄存器一样，它们会自动将文本存储到寄存器中，你需要显式地告诉Vim你要使用命名寄存器，你拥有完整的控制权。</p>

<p>为了复制一个单词到寄存器”a”中，你可以使用命令<code class="language-plaintext highlighter-rouge">"ayiw</code>。</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">"a</code>告诉Vim下一个动作（删除/修改/复制）会被存储在寄存器”a”中</li>
  <li><code class="language-plaintext highlighter-rouge">yiw</code>复制这个单词</li>
</ul>

<p>为了从寄存器”a”中获取文本，可以使用命令<code class="language-plaintext highlighter-rouge">"ap</code>。你可以使用以26个字母命名的寄存器来存储26个不同的文本。</p>

<p>有时你可能会想要往已有内容的命名寄存器中继续添加内容，这种情况下，你可以追加文本而不是全部重来。你可以使用大写版本的命名寄存器来进行文本的追加。比如，假设你的”a”寄存器中已经存有文本”Hello”，如果你想继续添加”world”到寄存器”a”中，你可以先找到文本”world”然后使用<code class="language-plaintext highlighter-rouge">"Aiw</code>来进行复制,即可完成追加。</p>

<h2 id="只读寄存器--">只读寄存器(<code class="language-plaintext highlighter-rouge">":</code>, <code class="language-plaintext highlighter-rouge">".</code>, <code class="language-plaintext highlighter-rouge">"%</code>)</h2>

<p>Vim有三个只读寄存器：<code class="language-plaintext highlighter-rouge">.</code>,<code class="language-plaintext highlighter-rouge">:</code>和<code class="language-plaintext highlighter-rouge">%</code>，它们的用法非常简单：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>.    存储上一个输入的文本
:    存储上一次执行的命令
%    存储当前文件的文件名
</code></pre></div></div>

<p>如果你写入”Hello Vim”,之后再运行<code class="language-plaintext highlighter-rouge">".p</code>就会打印出文本”Hello Vim”。如果你想要获得当前文件的文件名，可以运行命令<code class="language-plaintext highlighter-rouge">"%p</code>。如果你运行命令<code class="language-plaintext highlighter-rouge">:s/foo/bar/g</code>，再运行<code class="language-plaintext highlighter-rouge">":p</code>的话则会打印出文本”s/foo/bar/g”。</p>

<h2 id="buffer交替文件寄存器-">Buffer交替文件寄存器 (<code class="language-plaintext highlighter-rouge">"#</code>)</h2>

<p>在Vim中，<code class="language-plaintext highlighter-rouge">#</code>通常代表交替文件。交替文件指的是你上一个打开的文件，想要插入交替文件的名字的话，可以使用命令<code class="language-plaintext highlighter-rouge">"#p</code>。</p>

<h2 id="表达式寄存器-">表达式寄存器 (<code class="language-plaintext highlighter-rouge">"=</code>)</h2>

<p>Vim有一个表达式寄存器，<code class="language-plaintext highlighter-rouge">"=</code>,用于计算表达式的结果。</p>

<p>你可以使用以下命令计算数学表达式<code class="language-plaintext highlighter-rouge">1+1</code>的值：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>"=1+1&lt;Enter&gt;p
</code></pre></div></div>

<p>在这里，你在告诉Vim你正在使用表达式寄存器<code class="language-plaintext highlighter-rouge">"=</code>，你的表达式是（<code class="language-plaintext highlighter-rouge">1+1</code>），你还需要输入<code class="language-plaintext highlighter-rouge">p</code>来得到结果。正如之前所提到的，你也可以在输入模式中访问寄存器。想要在输入模式中计算数学表达式的值，你可以使用：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-r =1+1
</code></pre></div></div>

<p>你可以使用<code class="language-plaintext highlighter-rouge">@</code>来从任何寄存器中获取表达式并用表达式寄存器计算其值。如果你希望从寄存器”a”中获取文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>"=@a
</code></pre></div></div>

<p>之后输入<code class="language-plaintext highlighter-rouge">&lt;enter&gt;</code>，再输入<code class="language-plaintext highlighter-rouge">p</code>。类似地，想在输入模式中得到寄存器”a”中的值可以使用：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-r =@a
</code></pre></div></div>

<p>表达式是Vim中非常宏大的一个话题，所以我只会在这里介绍一些基础知识，我将会在之后的VimScript章节中进一步讲解更多关于表达式的细节。</p>

<h2 id="选取和拖放寄存器--">选取和拖放寄存器 (<code class="language-plaintext highlighter-rouge">"*</code>, <code class="language-plaintext highlighter-rouge">"+</code>)</h2>

<p>你难道不觉得有些时候你需要从某些外部的程序中复制一些文本并粘贴到Vim中吗，或者反过来操作？有了Vim的选取和拖放寄存器你就能办到。Vim有两个选取寄存器：<code class="language-plaintext highlighter-rouge">quotestar</code> (<code class="language-plaintext highlighter-rouge">"*</code>) 和 <code class="language-plaintext highlighter-rouge">quoteplus</code> (<code class="language-plaintext highlighter-rouge">"+</code>)。你可以用它们来访问从外部程序中复制的文本。</p>

<p>如果你在运行一个外部程序（比如Chrome浏览器），然后你使用<code class="language-plaintext highlighter-rouge">Ctrl-c</code>(或者<code class="language-plaintext highlighter-rouge">Cmd-c</code>,取决于你的操作系统)复制了一部分文本，通常你是没有办法在Vim里使用<code class="language-plaintext highlighter-rouge">p</code>来粘贴这部分文本的。但是，Vim的两个寄存器<code class="language-plaintext highlighter-rouge">"+</code>和<code class="language-plaintext highlighter-rouge">"*</code>都是和你系统的粘贴板相连接的，所以你可以使用<code class="language-plaintext highlighter-rouge">"+p</code>和<code class="language-plaintext highlighter-rouge">"*p</code>来粘贴这些文本。反过来，如果你使用<code class="language-plaintext highlighter-rouge">"+yiw</code>或者<code class="language-plaintext highlighter-rouge">"*yiw</code>在Vim中复制了一些文本，你可以使用<code class="language-plaintext highlighter-rouge">Ctrl-v</code>（或者<code class="language-plaintext highlighter-rouge">Cmd-v</code>）。值得注意的是这个方法只在你的Vim开启了<code class="language-plaintext highlighter-rouge">+clipboard</code>选项时才有用，可以在命令行中运行<code class="language-plaintext highlighter-rouge">vim --version</code>查看这一选项。如果你看见<code class="language-plaintext highlighter-rouge">-clipboard</code>的话，则需要安装一下支持Vim粘贴板的配置。</p>

<p>你也许会想如果<code class="language-plaintext highlighter-rouge">"*</code>和<code class="language-plaintext highlighter-rouge">"+</code>能办到的事完全相同，那为什么Vim需要两个不同的寄存器呢？一些机器使用的是X11窗口系统，这一系统有3个类型的选项：首选，次选和粘贴板。如果你的机器使用的是X11的话,Vim使用的是<code class="language-plaintext highlighter-rouge">quotestar</code> (<code class="language-plaintext highlighter-rouge">"*</code>)寄存器作为X11的首选选项，并使用 <code class="language-plaintext highlighter-rouge">quoteplus</code> (<code class="language-plaintext highlighter-rouge">"+</code>)作为粘贴板选项。这只在你的Vim配置里开启了<code class="language-plaintext highlighter-rouge">xterm_clipboard</code> 选项时才有效（<code class="language-plaintext highlighter-rouge">vim --version</code>中的<code class="language-plaintext highlighter-rouge">+xterm_clipboard</code>）。如果你的的Vim配置中没有 <code class="language-plaintext highlighter-rouge">xterm_clipboard</code>也不是什么大问题。这只是意味着<code class="language-plaintext highlighter-rouge">quotestar</code> 和<code class="language-plaintext highlighter-rouge">quoteplus</code>两个寄存器是可以互相替代的。</p>

<p>我发觉使用<code class="language-plaintext highlighter-rouge">=*p</code>或者<code class="language-plaintext highlighter-rouge">=+p</code>的话比较麻烦，为了使Vim仅使用<code class="language-plaintext highlighter-rouge">p</code>就能粘贴从外部程序复制的文本，你可以在你的<code class="language-plaintext highlighter-rouge">vimrc</code>配置文件中加入下面一行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set clipboard=unnamed
</code></pre></div></div>

<p>现在当我从外部程序中复制文本时，我可以使用匿名寄存器<code class="language-plaintext highlighter-rouge">p</code>来进行粘贴。我也可以在Vim中复制文本后在外部程序中使用<code class="language-plaintext highlighter-rouge">Ctrl-v</code>来粘贴。如果你的Vim开启了 <code class="language-plaintext highlighter-rouge">+xterm_clipboard</code>设置，你或许会想同时也使用<code class="language-plaintext highlighter-rouge">unnamed</code>和<code class="language-plaintext highlighter-rouge">unnamedplus</code>的粘贴板选项。</p>

<h2 id="黑洞寄存器-_">黑洞寄存器 (<code class="language-plaintext highlighter-rouge">"_</code>)</h2>

<p>你每次删除或修改文本的时候，这部分文本都会自动保存在Vim的寄存器中。有些时候你并不希望把什么东西都往寄存器里存，这该怎么办到呢？</p>

<p>你可以使用黑洞寄存器（<code class="language-plaintext highlighter-rouge">"_</code>）。想要删除一行并且不将其存储在任何寄存器中时，可以使用<code class="language-plaintext highlighter-rouge">"_dd</code>命令.</p>

<p>它是和 <code class="language-plaintext highlighter-rouge">/dev/null</code> 类似的寄存器。</p>

<h2 id="搜索模式寄存器-">搜索模式寄存器 (<code class="language-plaintext highlighter-rouge">"/</code>)</h2>

<p>为了粘贴你的上一个搜索询问（<code class="language-plaintext highlighter-rouge">/</code> 或 <code class="language-plaintext highlighter-rouge">?</code>），你可以使用搜索模式寄存器(<code class="language-plaintext highlighter-rouge">"/</code>)。使用命令 <code class="language-plaintext highlighter-rouge">"/p</code>就能粘贴上一个搜索的条目。</p>

<h2 id="查看所有的寄存器">查看所有的寄存器</h2>

<p>你可以使用<code class="language-plaintext highlighter-rouge">:register</code>命令来查看你的所有寄存器。如果你只想查看”a”,”1”和”-“寄存器的内容的话则可以使用命令<code class="language-plaintext highlighter-rouge">:register a 1 -</code>。</p>

<p>有一个Vim的插件叫做 <a href="https://github.com/junegunn/vim-peekaboo">vim-peekaboo</a> ,可以让你查看到寄存器的内容，在普通模式下输入<code class="language-plaintext highlighter-rouge">"</code>或<code class="language-plaintext highlighter-rouge">@</code> 即可，或者在输入模式中输入<code class="language-plaintext highlighter-rouge">Ctrl-r</code>。我发现这个插件相当的有用，因为大多数时候我是记不住我的寄存器中的内容的。值得一试！</p>

<h2 id="执行寄存器">执行寄存器</h2>

<p>命名寄存器不只可以用来存放文本，你还可以借助<code class="language-plaintext highlighter-rouge">@</code>来执行宏命令。我会在下一章节中介绍宏命令。</p>

<p>注意，因为宏命令时存储在Vim寄存器中的，使用宏时可能会覆盖存储的内容。如果你将文本”Hello Vim”存放在寄存器”a”中，并且之后你在同一个寄存器里记录了一个宏命令 (<code class="language-plaintext highlighter-rouge">qa{macro-commands}q</code>),那么这个宏命令将会覆盖之前存储的文本”Hello Vim”（你可以使用<code class="language-plaintext highlighter-rouge">@a</code>来执行寄存器中存储的宏命令）。</p>

<h2 id="清除寄存器">清除寄存器</h2>

<p>从技术上来说，我们没有必要来清除任何寄存器，因为你下一个使用来存储文本的寄存器会自动覆盖该寄存器中之前的内容。然而，你可以通过记录一个空的宏命令来快速地清除任何命名寄存器。比如，如果你运行<code class="language-plaintext highlighter-rouge">qaq</code>，Vim就会在寄存器”a”中记录一个空的宏命令。</p>

<p>还有一种方法就是运行命令<code class="language-plaintext highlighter-rouge">:call setreg('a','hello register a')</code>,其中’a’代表的就是寄存器”a”。而”hello register a”就是你想存储的内容。</p>

<p>还有一种清除寄存器的方法就是使用表达式<code class="language-plaintext highlighter-rouge">:let @a = ''</code>来将寄存器”a 的值设为空的字符串。</p>

<h2 id="获取寄存器中的内容">获取寄存器中的内容</h2>

<p>你可以使用<code class="language-plaintext highlighter-rouge">:put</code>命令来粘贴任何寄存器的内容。比如，如果你运行命令<code class="language-plaintext highlighter-rouge">:put a</code>,Vim就会打印出寄存器”a”的内容，这和<code class="language-plaintext highlighter-rouge">"ap</code>非常像，唯一的区别在于在普通模式下命令<code class="language-plaintext highlighter-rouge">p</code>在当前光标位置之后打印寄存器的内容，而<code class="language-plaintext highlighter-rouge">:put</code>新起一行来打印寄存器的内容。</p>

<p>因为<code class="language-plaintext highlighter-rouge">:put</code>是一个命令行命令，您可以传一个地址给它。<code class="language-plaintext highlighter-rouge">:+10put a</code>将会在当前光标下数10行，然后插入新行，内容为寄存器a中的内容。</p>

<p>一个很酷的技巧是将黑洞寄存器(<code class="language-plaintext highlighter-rouge">"_</code>)传给<code class="language-plaintext highlighter-rouge">:put</code>命令。因为黑洞寄存器不保存任何值，<code class="language-plaintext highlighter-rouge">:put _</code>命令将插入一个新的空白行。您可将这个与全局命令联合起来，插入多个空行。比如，要在所有以文本”end”结尾的行下插入空行，使用<code class="language-plaintext highlighter-rouge">:g/end/put _</code>。在后面您将了解关于全局命令的知识。</p>

<h2 id="聪明地学习寄存器">聪明地学习寄存器</h2>

<p>恭喜你成功地坚持到了最后！这一章有非常多的内容需要消化。如果你感觉被新的知识淹没，你要知道你并不孤单，当我最初开始学习Vim寄存器时也有这种感觉。</p>

<p>我并不认为你必须现在就记得所有的知识点。为了提高我们的生产效率，你可以从使用以下三类寄存器开始：</p>

<ol>
  <li>匿名寄存器(<code class="language-plaintext highlighter-rouge">""</code>).</li>
  <li>命名寄存器 (<code class="language-plaintext highlighter-rouge">"a-z</code>).</li>
  <li>编号寄存器 (<code class="language-plaintext highlighter-rouge">"0-9</code>).</li>
</ol>

<p>既然匿名寄存器是默认和<code class="language-plaintext highlighter-rouge">p</code>或<code class="language-plaintext highlighter-rouge">P</code>，你只需要学习两个寄存器：命名寄存器和编号寄存器。之后如果你需要用到其他的寄存器时你再逐渐地学习其他寄存器的用法，不用急，慢慢来。</p>

<p>普通人的短期记忆都是有极限的，大概每次只能记住5-7个信息。这就是为什么在我的日常编辑中，我只用3到7个命名寄存器的原因，我没有办法记住整整26个寄存器的内容。我通常从寄存器”a”开始用，之后用寄存器”b”,以字母表升序的顺序来使用。尝试一下各种方法，看看哪种最适合你。</p>

<p>Vim寄存器非常强大，合理使用的话能够避免你输入数不清的重复文本。但是现在，是时候学习一下宏命令了。</p>

<h2 id="链接">链接</h2>

<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch07_the_dot_command/">Ch 7 - 点命令</a></li>
  <li>下一部分 <a href="../ch09_macros/">Ch 9 - 宏</a></li>
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
