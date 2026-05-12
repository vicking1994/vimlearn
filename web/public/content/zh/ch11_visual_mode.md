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
    

    <title>第11章：可视模式</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch11_visual_mode/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch11_visual_mode/">
<meta property="og:title" content="第11章：可视模式">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch11_visual_mode/">
<meta name="twitter:title" content="第11章：可视模式">
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
        <h1>第11章：可视模式</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#三种可视模式" id="markdown-toc-三种可视模式">三种可视模式</a></li>
  <li><a href="#可视模式导航" id="markdown-toc-可视模式导航">可视模式导航</a></li>
  <li><a href="#可视模式语法" id="markdown-toc-可视模式语法">可视模式语法</a></li>
  <li><a href="#可视模式和ex命令" id="markdown-toc-可视模式和ex命令">可视模式和Ex命令</a></li>
  <li><a href="#跨多行编辑" id="markdown-toc-跨多行编辑">跨多行编辑</a></li>
  <li><a href="#递增数字" id="markdown-toc-递增数字">递增数字</a></li>
  <li><a href="#选择最后一个可视模式区域" id="markdown-toc-选择最后一个可视模式区域">选择最后一个可视模式区域</a></li>
  <li><a href="#从插入模式进入可视模式" id="markdown-toc-从插入模式进入可视模式">从插入模式进入可视模式</a></li>
  <li><a href="#选择模式" id="markdown-toc-选择模式">选择模式</a></li>
  <li><a href="#以聪明的方式学习可视模式" id="markdown-toc-以聪明的方式学习可视模式">以聪明的方式学习可视模式</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>高亮显示文本块并对其进行更改，是很多文本编辑器中的常见功能。 Vim也可以使用可视模式实现这一功能。在本章中，您将学习如何使用可视模式来有效地处理文本块。</p>

<h2 id="三种可视模式">三种可视模式</h2>

<p>Vim有三种可视模式，分别是：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>v         逐字符可视模式
V         逐行可视模式
Ctrl-v    逐块可视模式
</code></pre></div></div>

<p>如果您有下列文字：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
three
</code></pre></div></div>

<p>逐字符可视模式用于选择单个字符。在第一行的第一个字符上按<code class="language-plaintext highlighter-rouge">v</code>。然后使用<code class="language-plaintext highlighter-rouge">j</code>跳转至下一行。它高亮显示从”one”到光标位置的所有文本。现在，如果您按<code class="language-plaintext highlighter-rouge">gU</code>，Vim将高亮显示的字符转为大写。</p>

<p>逐行可视模式适用于整行。按<code class="language-plaintext highlighter-rouge">V</code>并观看Vim选择光标的所在行。就像逐字符可视模式一样，如果您运行<code class="language-plaintext highlighter-rouge">gU</code>，Vim将高亮显示的字符转为大写。</p>

<p>逐块可视模式适用于行和列。与其他两种模式相比，它为您提供了更大的移动自由度。按<code class="language-plaintext highlighter-rouge">Ctrl-V</code>，Vim像逐字符可视模式一样高亮显示光标下的字符，但向下移动时，除非光标已经在行尾，否则不会高亮显示光标上方的整行，它跳转至下一行时高亮显示尽可能少的字符。尝试用<code class="language-plaintext highlighter-rouge">h/j/k/l</code>移动，并观察光标的移动。</p>

<p>在Vim窗口的左下方，您会看到显示<code class="language-plaintext highlighter-rouge">-- VISUAL --</code>，<code class="language-plaintext highlighter-rouge">-- VISUAL LINE --</code>或<code class="language-plaintext highlighter-rouge">-- VISUAL BLOCK --</code>以提示您所处的可视模式。</p>

<p>当您处于可视模式时，可以通过按<code class="language-plaintext highlighter-rouge">v</code>，<code class="language-plaintext highlighter-rouge">V</code>或<code class="language-plaintext highlighter-rouge">Ctrl-V</code>键切换到另一种可视模式。例如，如果您处于逐行可视模式，并且想要切换为逐块可视模式，请运行<code class="language-plaintext highlighter-rouge">Ctrl-V</code>。试试吧！</p>

<p>有三种退出可视模式的方法：<code class="language-plaintext highlighter-rouge">esc</code>，<code class="language-plaintext highlighter-rouge">Ctrl-C</code>和与当前可视模式相同的键。后者的意思是，如果您当前处于逐行可视模式(<code class="language-plaintext highlighter-rouge">V</code>)，则可以通过再次按<code class="language-plaintext highlighter-rouge">V</code>退出它。如果您处于字符可视模式，则可以通过按<code class="language-plaintext highlighter-rouge">v</code>退出它。如果您处于逐块可视模式，请按<code class="language-plaintext highlighter-rouge">Ctrl-V</code>。</p>

<p>实际上，还有另一种进入可视模式的方式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>gv    转到上一个可视模式
</code></pre></div></div>

<p>它将在与上次相同的高亮显示的文本块上启动相同的可视模式。</p>

<h2 id="可视模式导航">可视模式导航</h2>

<p>在可视模式下，您可以使用Vim动作(motion)扩展高亮显示的文本块。</p>

<p>让我们使用之前使用的相同文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
three
</code></pre></div></div>

<p>这次让我们从”two”行开始。按<code class="language-plaintext highlighter-rouge">v</code>进入字符可视模式(这里的方括号<code class="language-plaintext highlighter-rouge">[]</code>表示高亮显示的字符)：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
[t]wo
three
</code></pre></div></div>

<p>按<code class="language-plaintext highlighter-rouge">j</code>，Vim将高亮显示从”two”行到”three”行的第一个字符的所有文本。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
[two
t]hree
</code></pre></div></div>

<p>假设您刚刚意识到还需要高亮显示”one”行，因此按<code class="language-plaintext highlighter-rouge">k</code>。令您沮丧的是，它现在排除了”three”高亮。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
[t]wo
three
</code></pre></div></div>

<p>有没有一种方法可以自由地扩展视觉选择范围，以向您想要的任何方向发展？</p>

<p>答案是肯定的。让我们先恢复光标到高亮显示”two”和”three”行的位置。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
[two
t]hree    &lt;-- 光标
</code></pre></div></div>

<p>高亮区域跟随光标移动。如果要将其向上扩展到行”one”，则需要将光标移动到”two”，现在您的光标在”three”行上。这时可以用<code class="language-plaintext highlighter-rouge">o</code>或<code class="language-plaintext highlighter-rouge">O</code>切换光标位置。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
[two     &lt;-- 光标
t]hree
</code></pre></div></div>

<p>现在，当您按<code class="language-plaintext highlighter-rouge">k</code>时，它不再缩小选择，而是向上扩展。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[one
two
t]hree
</code></pre></div></div>

<p>在可视模式中使用<code class="language-plaintext highlighter-rouge">o</code>或<code class="language-plaintext highlighter-rouge">O</code>，光标会在高亮选择区域的开头和结尾跳转，以便与您扩展高亮区域。</p>

<h2 id="可视模式语法">可视模式语法</h2>

<p>可视模式与普通模式使用相同的操作符(operations)。</p>

<p>例如，如果您有以下文字，然后您想在可视模式中删除前两行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
three
</code></pre></div></div>

<p>用逐行可视模式(<code class="language-plaintext highlighter-rouge">V</code>)高亮显示”one”和”two”行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[one
two]
three
</code></pre></div></div>

<p>按下<code class="language-plaintext highlighter-rouge">d</code>键将删除选择，类似于普通模式。请注意，与普通模式的语法规则有所不同，动词+名词不适用可视模式。虽然存在相同的动词(<code class="language-plaintext highlighter-rouge">d</code>)，但在可视模式下没有名词。可视模式下的语法规则是名词+动词(反过来了)，其中名词是高亮显示的文本。首先选择文本块，然后进行操作。</p>

<p>在普通模式下，有一些命令不需要名词(motion)，例如<code class="language-plaintext highlighter-rouge">x</code>删除光标下方的单个字符，还有<code class="language-plaintext highlighter-rouge">r</code>替换光标下方的字符(<code class="language-plaintext highlighter-rouge">rx</code>将当前光标下的字符替换为<code class="language-plaintext highlighter-rouge">x</code>)。在可视模式下，这些命令现在将应用于整个高亮显示的文本，而不是单个字符。回到高亮显示的文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[one
two]
three
</code></pre></div></div>

<p>运行<code class="language-plaintext highlighter-rouge">x</code>会删除所有高亮显示的文本。</p>

<p>您可以使用此行为在markdown文本中快速创建标题。假设您需要快速下面的文本转换为一级markdown标题(“===”):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Chapter One
</code></pre></div></div>

<p>首先，您使用<code class="language-plaintext highlighter-rouge">yy</code>复制文本，然后使用<code class="language-plaintext highlighter-rouge">p</code>粘贴文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Chapter One
Chapter One
</code></pre></div></div>

<p>现在转到第二行，以逐行可视模式选择它：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Chapter One
[Chapter One]
</code></pre></div></div>

<p>在markdown中，您可以通过在文本下方添加一系列<code class="language-plaintext highlighter-rouge">=</code>来创建标题，因此您可以通过运行<code class="language-plaintext highlighter-rouge">r=</code>来替换整个高亮显示的文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Chapter One
===========
</code></pre></div></div>

<p>要了解有关可视模式下的运算符的更多信息，请查看<code class="language-plaintext highlighter-rouge">:h visual-operators</code>。</p>

<h2 id="可视模式和ex命令">可视模式和Ex命令</h2>

<p>您可以有选择地在高亮显示的文本块上应用Ex命令。如果您具有以下表达式,并想将前两行的”const”替换为”let”：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = "one";
const two = "two";
const three = "three";
</code></pre></div></div>

<p>用 <em>任意</em> 可视模式高亮显示前两行，然后运行替换命令<code class="language-plaintext highlighter-rouge">:s/const/let/g</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "one";
let two = "two";
const three = "three";
</code></pre></div></div>

<p>请注意，我说过您可以使用 <em>任何</em> 可视模式执行此操作。您不必高亮显示整个行即可在该行上运行Ex命令。只要您在每行上至少选择一个字符，就会应用Ex命令。</p>

<h2 id="跨多行编辑">跨多行编辑</h2>

<p>您可以使用逐块可视模式在Vim中跨多行编辑文本。如果需要在每行末尾添加分号：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const one = "one"
const two = "two"
const three = "three"
</code></pre></div></div>

<p>将光标放在第一行上：</p>
<ul>
  <li>进入逐块可视模式，并向下两行(<code class="language-plaintext highlighter-rouge">Ctrl-V jj</code>)。</li>
  <li>高亮显示到行尾(<code class="language-plaintext highlighter-rouge">$</code>)。</li>
  <li>按(<code class="language-plaintext highlighter-rouge">A</code>) ，然后键入”;”。</li>
  <li>退出可视模式(<code class="language-plaintext highlighter-rouge">esc</code>)。</li>
</ul>

<p>您应该看到在每一行后面附加的 “;”。666! 有两种方法可以从逐块可视模式进入输入模式：可以使用<code class="language-plaintext highlighter-rouge">A</code>在光标后输入文本，也可以使用<code class="language-plaintext highlighter-rouge">I</code>在光标前输入文本。请勿将它们与普通模式下的<code class="language-plaintext highlighter-rouge">A</code>和<code class="language-plaintext highlighter-rouge">I</code>混淆。(普通模式中，<code class="language-plaintext highlighter-rouge">A</code>表示在行尾添加内容，<code class="language-plaintext highlighter-rouge">I</code>表示在行尾非空字符前插入内容)。</p>

<p>另外，您也可以使用<code class="language-plaintext highlighter-rouge">:normal</code>命令在多行添加内容：
-高亮显示所有3行(<code class="language-plaintext highlighter-rouge">vjj</code>)。
-输入<code class="language-plaintext highlighter-rouge">:normal! A;</code>。</p>

<p>记住，<code class="language-plaintext highlighter-rouge">:normal</code>命令执行普通模式命令。您可以指示它运行<code class="language-plaintext highlighter-rouge">A;</code>在该行的末尾添加文本”;”。</p>

<h2 id="递增数字">递增数字</h2>

<p>Vim有<code class="language-plaintext highlighter-rouge">Ctrl-X</code>和<code class="language-plaintext highlighter-rouge">Ctrl-A</code>命令来减少和增加数字。与可视模式一起使用时，可以跨多行递增数字。</p>

<p>如果您具有以下HTML元素：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;div id="app-1"&gt;&lt;/div&gt;
&lt;div id="app-1"&gt;&lt;/div&gt;
&lt;div id="app-1"&gt;&lt;/div&gt;
&lt;div id="app-1"&gt;&lt;/div&gt;
&lt;div id="app-1"&gt;&lt;/div&gt;
</code></pre></div></div>

<p>有多个具有相同名称的id是一个不好的做法，因此让我们对其进行递增以使其唯一：</p>
<ul>
  <li>将光标移动到 <strong>第二行</strong>的 “1”。</li>
  <li>启动逐块可视模式，并向下移动3行(<code class="language-plaintext highlighter-rouge">Ctrl-V 3j</code>)。这高亮显示剩余的”1”，现在除了第一行，所有的”1”应该已经高亮。</li>
  <li>运行<code class="language-plaintext highlighter-rouge">g Ctrl-A</code>。</li>
</ul>

<p>您应该看到以下结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;div id="app-1"&gt;&lt;/div&gt;
&lt;div id="app-2"&gt;&lt;/div&gt;
&lt;div id="app-3"&gt;&lt;/div&gt;
&lt;div id="app-4"&gt;&lt;/div&gt;
&lt;div id="app-5"&gt;&lt;/div&gt;
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">g Ctrl-A</code>在多行上递增数字。 <code class="language-plaintext highlighter-rouge">Ctrl-X/Ctrl-A</code>也可以增加字母。如果您运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set nrformats+=alpha
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">nrformats</code>选项指示Vim将哪个基数视为<code class="language-plaintext highlighter-rouge">Ctrl-A</code>和<code class="language-plaintext highlighter-rouge">Ctrl-X</code>递增和递减的“数字”。通过添加<code class="language-plaintext highlighter-rouge">alpha</code>，现在将字母字符视为数字。如果您具有以下HTML元素：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;div id="app-a"&gt;&lt;/div&gt;
&lt;div id="app-a"&gt;&lt;/div&gt;
&lt;div id="app-a"&gt;&lt;/div&gt;
&lt;div id="app-a"&gt;&lt;/div&gt;
&lt;div id="app-a"&gt;&lt;/div&gt;
</code></pre></div></div>

<p>将光标放在第二个”app-a”上。使用与上述相同的技术(<code class="language-plaintext highlighter-rouge">Ctrl-V 3j</code> 然后 <code class="language-plaintext highlighter-rouge">g Ctrl-A</code>)增加ID。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;div id="app-a"&gt;&lt;/div&gt;
&lt;div id="app-b"&gt;&lt;/div&gt;
&lt;div id="app-c"&gt;&lt;/div&gt;
&lt;div id="app-d"&gt;&lt;/div&gt;
&lt;div id="app-e"&gt;&lt;/div&gt;
</code></pre></div></div>

<h2 id="选择最后一个可视模式区域">选择最后一个可视模式区域</h2>

<p>前面章节中我提到了<code class="language-plaintext highlighter-rouge">gv</code>可以快速高亮显示上一个可视模式选择的内容。您还可以使用以下两个特殊标记转到最后一个可视模式的开始和结束位置：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>'&lt;    转到上一个可视模式高亮显示的第一个位置（行）(译者注，英文原版中'&lt;'前面的符号是`，但这应该是一个错误，应该是单引号')
'&gt;    转到上一个可视模式高亮显示的最后位置（行）
</code></pre></div></div>

<p>之前，我提到过您可以在高亮显示的文本上有选择地执行Ex命令，例如：<code class="language-plaintext highlighter-rouge">:s/const/let/g</code>。当您这样做时，您应该看到以下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:'&lt;,'&gt;s/const/let/g
</code></pre></div></div>

<p>您实际上是在使用(<code class="language-plaintext highlighter-rouge">'&lt;, '&gt;</code>) 标记作为范围来执行 <code class="language-plaintext highlighter-rouge">s/const/let/g</code>命令。这太有趣了！</p>

<p>您随时可以随时编辑这些标记。比如，如果您需要从高亮显示的文本的开头到文件的末尾进行替换，则只需将命令行更改为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:'&lt;,$s/const/let/g
</code></pre></div></div>

<h2 id="从插入模式进入可视模式">从插入模式进入可视模式</h2>

<p>您也可以从插入模式进入可视模式。在插入模式下进入字符可视模式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-O v
</code></pre></div></div>

<p>回想一下，在插入模式下运行<code class="language-plaintext highlighter-rouge">Ctrl-O</code>可以使您执行普通模式命令。在普通模式命令挂起模式下，运行<code class="language-plaintext highlighter-rouge">v</code>进入逐字可视模式。请注意，在屏幕的左下方，它显示为<code class="language-plaintext highlighter-rouge">--(insert) VISUAL--</code>。该技巧适用于任何可视模式运算符：<code class="language-plaintext highlighter-rouge">v</code>，<code class="language-plaintext highlighter-rouge">V</code>，和<code class="language-plaintext highlighter-rouge">Ctrl-V</code>。</p>

<h2 id="选择模式">选择模式</h2>

<p>Vim具有类似于可视模式的模式，称为<em>选择模式</em>。与可视模式一样，它也具有三种不同的模式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>gh         逐字符选择模式
gH         逐行选择模式
gCtrl-h    逐块选择模式
</code></pre></div></div>

<p>选择模式比Vim的可视模式更接近常规编辑器的文本高亮显示行为。</p>

<p>在常规编辑器中，高亮显示文本块并键入字母（例如字母”y”）后，它将删除高亮显示的文本并插入字母”y”。如果您使用逐行选择模式(<code class="language-plaintext highlighter-rouge">gH</code>)高亮显示一行文本并键入”y”，它将删除高亮显示的文本并插入字母”y”，这与常规文本编辑器非常相似。</p>

<p>将此行为与可视模式进行对比：如果您使用逐行可视模式(<code class="language-plaintext highlighter-rouge">V</code>)高亮显示一行文本并键入”y”，则高亮显示的文本不会被删除且被字母”y”代替，而是仅将其复制(yank)。在选择模式中，你不能执行对高亮文本执行普通模式的命令。</p>

<p>我个人从未使用过选择模式，但是很高兴知道它的存在。</p>

<h2 id="以聪明的方式学习可视模式">以聪明的方式学习可视模式</h2>

<p>可视模式是Vim高亮显示文本的过程。</p>

<p>如果发现使用可视模式操作的频率比正常模式操作的频率高得多，请当心。我认为这是一种反模式。运行可视模式操作所需的击键次数要多于普通模式下的击键次数。假设您需要删除一个内部单词(inner word，请回顾前面的文本对象)，如果可以只用三个按键(<code class="language-plaintext highlighter-rouge">diw</code>)，为什么要使用四个按键<code class="language-plaintext highlighter-rouge">viwd</code>（先<code class="language-plaintext highlighter-rouge">v</code>进入可视模式，然后<code class="language-plaintext highlighter-rouge">iw</code>高亮一个内部单词，最后<code class="language-plaintext highlighter-rouge">d</code>删除）呢？前者更为直接和简洁。当然，有时使用可视模式是合适的，但总的来说，更倾向于直接的方法。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch10_undo/">Ch 10 - 撤消</a></li>
  <li>下一部分 <a href="../ch12_search_and_substitute/">Ch 12 - 搜索和替换</a></li>
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
