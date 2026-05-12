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
    

    <title>第16章：标签</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch16_tags/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch16_tags/">
<meta property="og:title" content="第16章：标签">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch16_tags/">
<meta name="twitter:title" content="第16章：标签">
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
        <h1>第16章：标签</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#标签概述" id="markdown-toc-标签概述">标签概述</a></li>
  <li><a href="#标签生成器" id="markdown-toc-标签生成器">标签生成器</a></li>
  <li><a href="#解剖标签文件" id="markdown-toc-解剖标签文件">解剖标签文件</a></li>
  <li><a href="#标签文件" id="markdown-toc-标签文件">标签文件</a></li>
  <li><a href="#为大型项目生成标签" id="markdown-toc-为大型项目生成标签">为大型项目生成标签：</a></li>
  <li><a href="#标签导航" id="markdown-toc-标签导航">标签导航</a></li>
  <li><a href="#标签优先级" id="markdown-toc-标签优先级">标签优先级</a></li>
  <li><a href="#选择性跳转标签" id="markdown-toc-选择性跳转标签">选择性跳转标签</a></li>
  <li><a href="#标签的自动补全" id="markdown-toc-标签的自动补全">标签的自动补全</a></li>
  <li><a href="#标签堆栈" id="markdown-toc-标签堆栈">标签堆栈</a></li>
  <li><a href="#自动生成标签" id="markdown-toc-自动生成标签">自动生成标签</a></li>
  <li><a href="#在保存时生成标签" id="markdown-toc-在保存时生成标签">在保存时生成标签</a></li>
  <li><a href="#使用插件" id="markdown-toc-使用插件">使用插件</a></li>
  <li><a href="#ctags-以及-git-钩子" id="markdown-toc-ctags-以及-git-钩子">Ctags 以及 Git 钩子</a></li>
  <li><a href="#聪明地学习标签" id="markdown-toc-聪明地学习标签">聪明地学习标签</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>快速转到任意定义处，是文本编辑中一个非常有用的特性。在本章中，您将学习如何使用 Vim 标签来做到这一点。</p>

<h2 id="标签概述">标签概述</h2>

<p>假设有人给了您一个新的代码库：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one = One.new
one.donut
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">One</code>？<code class="language-plaintext highlighter-rouge">donut</code>？呃，对于当时编写代码的开发者而言，这些代码的含义可能显而易见。问题是当时的开发者已经不在了，现在要由您来理解这些费解的代码。而跟随有<code class="language-plaintext highlighter-rouge">One</code> 和 <code class="language-plaintext highlighter-rouge">donut</code>定义的源代码，是帮助您理解的一个有效方法。</p>

<p>您可以使用<code class="language-plaintext highlighter-rouge">fzf</code> 或 <code class="language-plaintext highlighter-rouge">grep</code>来搜索它们，但这种情况下，但使用标签将更快。</p>

<p>把标签想象成地址簿：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Name    Address
Iggy1   1234 Cool St, 11111
Iggy2   9876 Awesome Ave, 2222
</code></pre></div></div>

<p>当然，标签可不是存储着“姓名-地址”对，而是“定义-地址”对。</p>

<p>假设您在一个目录中有两个 Ruby 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## one.rb
class One
  def initialize
    puts "Initialized"
  end

  def donut
    puts "Bar"
  end
end
</code></pre></div></div>

<p>以及</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## two.rb
require './one'

one = One.new
one.donut
</code></pre></div></div>

<p>在普通模式下，您可以使用<code class="language-plaintext highlighter-rouge">Ctrl-]</code>跳转到定义。在<code class="language-plaintext highlighter-rouge">two.rb</code>中，转到<code class="language-plaintext highlighter-rouge">one.donut</code>所在行，将光标移到<code class="language-plaintext highlighter-rouge">donut</code>处，按下<code class="language-plaintext highlighter-rouge">Ctrl-]</code>。</p>

<p>哦豁，Vim 找不到标签文件，您需要先生成它。</p>

<h2 id="标签生成器">标签生成器</h2>

<p>现代 Vim 不自带标签生成器，您需要额外下载它。有几个选项可供选择：</p>

<ul>
  <li>ctags = 仅用于 C，基本随处可见。</li>
  <li>exuberant ctags = 最流行的标签生成器之一，支持许多语言。</li>
  <li>universal ctags = 和 exuberant ctags 类似，但比它更新。</li>
  <li>etags = 用于 Emacs，嗯……</li>
  <li>JTags = Java</li>
  <li>ptags.py = Python</li>
  <li>ptags = Perl</li>
  <li>gnatxref = Ada</li>
</ul>

<p>如果您查看 Vim 在线教程，您会发现许多都会推荐 <a href="http://ctags.sourceforge.net/">exuberant ctags</a>，它支持 <a href="http://ctags.sourceforge.net/languages.html">41 种编程语言</a>，我用过它，挺不错的。但自2009年以来一直没有维护，因此 Universal ctags 更好些，它和 exuberant ctags 相似，并仍在维护。</p>

<p>我不打算详细介绍如何安装 Universal ctags，您可以在 <a href="https://github.com/universal-ctags/ctags">universal ctags</a> 仓库了解更多说明。</p>

<p>假设您已经安装好了ctags，接下来，生成一个基本的标签文件。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ctags -R .
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">R</code> 选项告诉 <code class="language-plaintext highlighter-rouge">ctags</code> 从当前位置 (<code class="language-plaintext highlighter-rouge">.</code>) 递归扫描文件。稍后，您应该在当前文件夹看到一个<code class="language-plaintext highlighter-rouge">tags</code> 文件，里面您将看到类似这样的内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>!_TAG_FILE_FORMAT	2	/extended format; --format=1 will not append ;" to lines/
!_TAG_FILE_SORTED	1	/0=unsorted, 1=sorted, 2=foldcase/
!_TAG_OUTPUT_FILESEP	slash	/slash or backslash/
!_TAG_OUTPUT_MODE	u-ctags	/u-ctags or e-ctags/
!_TAG_PATTERN_LENGTH_LIMIT	96	/0 for no limit/
!_TAG_PROGRAM_AUTHOR	Universal Ctags Team	//
!_TAG_PROGRAM_NAME	Universal Ctags	/Derived from Exuberant Ctags/
!_TAG_PROGRAM_URL	&lt;https://ctags.io/&gt;	/official site/
!_TAG_PROGRAM_VERSION	0.0.0	/b43eb39/
One	one.rb	/^class One$/;"	c
donut	one.rb	/^  def donut$/;"	f	class:One
initialize	one.rb	/^  def initialize$/;"	f	class:One
</code></pre></div></div>

<p>根据 Vim 设置和 ctag 生成器的不同，您的<code class="language-plaintext highlighter-rouge">tags</code> 文件可能会有些不同。一个标签文件由两部分组成：标签元数据和标签列表。那些标签元数据 (<code class="language-plaintext highlighter-rouge">!TAG_FILE...</code>) 通常由 ctags 生成器控制。这里我不打算介绍它们，您可以随意查阅文档。标签列表是一个由所有定义组成的列表，由ctags建立索引。</p>

<p>现在回到 <code class="language-plaintext highlighter-rouge">two.rb</code>，将光标移至 <code class="language-plaintext highlighter-rouge">donut</code>，再输入<code class="language-plaintext highlighter-rouge">Ctrl-]</code>，Vim 将带您转到 <code class="language-plaintext highlighter-rouge">one.rb</code> 文件里<code class="language-plaintext highlighter-rouge">def donut</code> 所在的行上。成功啦！但 Vim 怎么做到的呢？</p>

<h2 id="解剖标签文件">解剖标签文件</h2>

<p>来看看<code class="language-plaintext highlighter-rouge">donut</code> 标签项：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>donut	one.rb	/^  def donut$/;"	f	class:One
</code></pre></div></div>

<p>上面的标签项由四个部分组成：一个<code class="language-plaintext highlighter-rouge">tagname</code>、一个<code class="language-plaintext highlighter-rouge">tagfile</code>、一个<code class="language-plaintext highlighter-rouge">tagaddress</code>，以及标签选项。</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">donut</code> 是 <code class="language-plaintext highlighter-rouge">tagname</code>。当光标在 “donut” 时，Vim 搜索标签文件里含有 “donut” 字符串的一行。</li>
  <li><code class="language-plaintext highlighter-rouge">one.rb</code> 是 <code class="language-plaintext highlighter-rouge">tagfile</code>。Vim 会搜寻 <code class="language-plaintext highlighter-rouge">one.rb</code> 文件。</li>
  <li><code class="language-plaintext highlighter-rouge">/^ def donut$/</code> 是 <code class="language-plaintext highlighter-rouge">tagaddress</code>。<code class="language-plaintext highlighter-rouge">/.../</code> 是模式指示器。<code class="language-plaintext highlighter-rouge">^</code> 代表一行中第一个元素，后面跟着两个空格，然后是<code class="language-plaintext highlighter-rouge">def donut</code>字符串，最后 <code class="language-plaintext highlighter-rouge">$</code> 代表一行中最后一个元素。</li>
  <li><code class="language-plaintext highlighter-rouge">f class:One</code> 是标签选项，它告诉 Vim，<code class="language-plaintext highlighter-rouge">donut</code> 是一种函数 (<code class="language-plaintext highlighter-rouge">f</code>)，并且是 <code class="language-plaintext highlighter-rouge">One</code> 类的一部分。</li>
</ul>

<p>再看看另一个标签项：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One	one.rb	/^class One$/;"	c
</code></pre></div></div>

<p>这一行和 <code class="language-plaintext highlighter-rouge">donut</code>也是一样的：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">One</code> 是 <code class="language-plaintext highlighter-rouge">tagname</code>。注意，对于标签，第一次扫描区分大小写。如果列表中有 <code class="language-plaintext highlighter-rouge">One</code> 和 <code class="language-plaintext highlighter-rouge">one</code>， Vim 会优先考虑 <code class="language-plaintext highlighter-rouge">One</code> 而不是 <code class="language-plaintext highlighter-rouge">one</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">one.rb</code> 是 <code class="language-plaintext highlighter-rouge">tagfile</code>。Vim 会搜寻 <code class="language-plaintext highlighter-rouge">one.rb</code> 文件。</li>
  <li><code class="language-plaintext highlighter-rouge">/^class One$/</code> 是 <code class="language-plaintext highlighter-rouge">tagaddress</code> 。Vim 会查找以 <code class="language-plaintext highlighter-rouge">class</code> 开头 (<code class="language-plaintext highlighter-rouge">^</code>) 、以 <code class="language-plaintext highlighter-rouge">One</code> 结尾 (<code class="language-plaintext highlighter-rouge">$</code>) 的行。</li>
  <li><code class="language-plaintext highlighter-rouge">c</code> 是可用标签选项之一。由于 <code class="language-plaintext highlighter-rouge">One</code> 是一个 ruby 类而不是过程，因此被标签为 <code class="language-plaintext highlighter-rouge">c</code>。</li>
</ul>

<p>标签文件的内容可能不尽相同，根据您使用的标签生成器而定。但至少，标签文件必须具有以下格式之一：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>1.  {tagname} {TAB} {tagfile} {TAB} {tagaddress}
2.  {tagname} {TAB} {tagfile} {TAB} {tagaddress} {term} {field} ..
</code></pre></div></div>

<h2 id="标签文件">标签文件</h2>

<p>您知道，在运行 <code class="language-plaintext highlighter-rouge">ctags -R .</code> 后，一个新 <code class="language-plaintext highlighter-rouge">tags</code> 文件会被创建。但是，Vim 是如何知道在哪儿查找标签文件的呢？</p>

<p>如果运行 <code class="language-plaintext highlighter-rouge">:set tags?</code>，您可能会看见 <code class="language-plaintext highlighter-rouge">tags=./tags,tags</code>（根据您的 Vim 设置，内容可能有所不同）。对于 <code class="language-plaintext highlighter-rouge">./tags</code>，Vim 会在当前文件所在路径查找所有标签；对于 <code class="language-plaintext highlighter-rouge">tags</code>，Vim 会在当前目录（您的项目根路径）中查找。</p>

<p>此外，对于 <code class="language-plaintext highlighter-rouge">./tags</code>，Vim 会在当前文件所在路径内查找一个标签文件，无论它被嵌套得有多深。接下来，Vim 会在当前目录（项目根路径）查找。Vim 在找到第一个匹配项后会停止搜索。</p>

<p>如果您的 <code class="language-plaintext highlighter-rouge">'tags'</code> 文件是 <code class="language-plaintext highlighter-rouge">tags=./tags,tags,/user/iggy/mytags/tags</code>，那么 Vim 在搜索完 <code class="language-plaintext highlighter-rouge">./tags</code> 和 <code class="language-plaintext highlighter-rouge">tags</code> 目录后，还会在 <code class="language-plaintext highlighter-rouge">/user/iggy/mytags</code> 目录内查找。所以您可以分开存放标签文件，不必将它们置于项目文件夹中。</p>

<p>要添加标签文件位置，只需要运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set tags+=path/to/my/tags/file
</code></pre></div></div>

<h2 id="为大型项目生成标签">为大型项目生成标签：</h2>

<p>如果您尝试在大型项目中运行 ctag，则可能需要很长时间，因为 Vim 也会查看每个嵌套目录。如果您是 Javascript 开发者，您会知道 <code class="language-plaintext highlighter-rouge">node_modules</code> 非常大。假设您有五个子项目，每个都包含自己的 <code class="language-plaintext highlighter-rouge">node_modules</code> 目录。一旦运行 <code class="language-plaintext highlighter-rouge">ctags -R .</code>，ctags 将尝试扫描这5个 <code class="language-plaintext highlighter-rouge">node_modules</code>。但您可能不需要为 <code class="language-plaintext highlighter-rouge">node_modules</code> 运行 ctag。</p>

<p>如果要排除 <code class="language-plaintext highlighter-rouge">node_modules</code> 后执行 ctags，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code> ctags -R --exclude=node_modules .
</code></pre></div></div>

<p>这次应该只需要不到一秒钟的时间。另外，您还可以多次使用 <code class="language-plaintext highlighter-rouge">exclude</code> 选项：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ctags -R --exclude=.git --exclude=vendor --exclude=node_modules --exclude=db --exclude=log .
</code></pre></div></div>

<h2 id="标签导航">标签导航</h2>

<p>仅使用 <code class="language-plaintext highlighter-rouge">Ctrl-]</code> 也挺好，但我们还可以多学几个技巧。其实，标签跳转键 <code class="language-plaintext highlighter-rouge">Ctrl-]</code> 还有命令行模式：<code class="language-plaintext highlighter-rouge">:tag my-tag</code>。如果您运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tag donut
</code></pre></div></div>

<p>Vim 就会跳转至 <code class="language-plaintext highlighter-rouge">donut</code> 方法，就像在 “donut” 字符串上按 <code class="language-plaintext highlighter-rouge">Ctrl-]</code> 一样。您还可以使用 <code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code> 来自动补全参数：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tag d&lt;Tab&gt;
</code></pre></div></div>

<p>Vim 会列出所有以 “d” 开头的标签。对于上面的命令，结果则是 “donut”。</p>

<p>在实际项目中，您可能会遇到多个同名的方法。我们来更新下这两个文件。先是 <code class="language-plaintext highlighter-rouge">one.rb</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## one.rb
class One
  def initialize
    puts "Initialized"
  end

  def donut
    puts "one donut"
  end

  def pancake
    puts "one pancake"
  end
end
</code></pre></div></div>

<p>然后 <code class="language-plaintext highlighter-rouge">two.rb</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## two.rb
require './one.rb'

def pancake
  "Two pancakes"
end

one = One.new
one.donut
puts pancake
</code></pre></div></div>

<p>由于新添加了一些过程，因此编写完代码后，不要忘记运行 <code class="language-plaintext highlighter-rouge">ctags -R .</code>。现在，您有了两个 <code class="language-plaintext highlighter-rouge">pancake</code> 过程。如果您在 <code class="language-plaintext highlighter-rouge">two.rb</code> 内按下 <code class="language-plaintext highlighter-rouge">Ctrl-]</code>，会发生什么呢？</p>

<p>Vim 会跳转到 <code class="language-plaintext highlighter-rouge">two.rb</code> 内的 <code class="language-plaintext highlighter-rouge">def pancake</code>，而不是 <code class="language-plaintext highlighter-rouge">one.rb</code> 的 <code class="language-plaintext highlighter-rouge">def pancake</code>。这是因为 Vim 认为 <code class="language-plaintext highlighter-rouge">two.rb</code> 内部的 <code class="language-plaintext highlighter-rouge">pancake</code> 过程比其他的<code class="language-plaintext highlighter-rouge">pancake</code> 过程具有更高优先级。</p>

<h2 id="标签优先级">标签优先级</h2>

<p>并非所有的标签都有着相同的地位。一些标签有着更高的优先级。如果有重复的标签项，Vim 会检查关键词的优先级。顺序是：</p>

<ol>
  <li>当前文件中完全匹配的静态标签。</li>
  <li>当前文件中完全匹配的全局标签。</li>
  <li>其他文件中完全匹配的全局标签。</li>
  <li>其他文件中完全匹配的静态标签。</li>
  <li>当前文件中不区分大小写匹配的静态标签。</li>
  <li>当前文件中不区分大小写匹配的全局标签。</li>
  <li>其他文件中区分大小写匹配的全局标签。</li>
  <li>当前文件中不区分大小写匹配的静态标签。</li>
</ol>

<p>根据优先级列表，Vim 会对在同一个文件上找到的精确匹配项进行优先级排序。这就是为什么 Vim 会选择 <code class="language-plaintext highlighter-rouge">two.rb</code> 里的 <code class="language-plaintext highlighter-rouge">pancake</code> 过程而不是 <code class="language-plaintext highlighter-rouge">one.rb</code> 里的。但是，上述优先级列表有些例外，取决于您的<code class="language-plaintext highlighter-rouge">'tagcase'</code>、<code class="language-plaintext highlighter-rouge">'ignorecase'</code>、<code class="language-plaintext highlighter-rouge">'smartcase'</code> 设置。我不打算介绍它们，您可以自行查阅 <code class="language-plaintext highlighter-rouge">:h tag-priority</code>。</p>

<h2 id="选择性跳转标签">选择性跳转标签</h2>

<p>如果可以选择要跳转到哪个标签，而不是始终转到优先级最高的，那就太好了。因为您可能想跳转到 <code class="language-plaintext highlighter-rouge">one.rb</code> 里的 <code class="language-plaintext highlighter-rouge">pancake</code> 方法，而不是 <code class="language-plaintext highlighter-rouge">two.rb</code> 里的。现在您可以使用 <code class="language-plaintext highlighter-rouge">:tselect</code> 做到它！运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tselect pancake
</code></pre></div></div>

<p>您可以在屏幕底部看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>## pri kind tag               file
1 F C f    pancake           two.rb
             def pancake
2 F   f    pancake           one.rb
             class:One
             def pancake
</code></pre></div></div>

<p>如果输入<code class="language-plaintext highlighter-rouge">2</code> 后再 <code class="language-plaintext highlighter-rouge">&lt;Return&gt;</code>，Vim 将跳转到 <code class="language-plaintext highlighter-rouge">one.rb</code> 里的<code class="language-plaintext highlighter-rouge">pancake</code> 过程。如果输入<code class="language-plaintext highlighter-rouge">1</code> 后再 <code class="language-plaintext highlighter-rouge">&lt;Return&gt;</code>，Vim 将跳转到 <code class="language-plaintext highlighter-rouge">two.rb</code> 里的。</p>

<p>注意<code class="language-plaintext highlighter-rouge">pri</code> 列，第一个匹配中该列是<code class="language-plaintext highlighter-rouge">F C</code>，第二个匹配中则是<code class="language-plaintext highlighter-rouge">F</code>。这就是 Vim 用来确定标签优先级的凭据。<code class="language-plaintext highlighter-rouge">F C</code>表示在当前 (<code class="language-plaintext highlighter-rouge">C</code>) 文件中完全匹配 (<code class="language-plaintext highlighter-rouge">F</code>) 的全局标签。<code class="language-plaintext highlighter-rouge">F</code> 表示仅完全匹配 (<code class="language-plaintext highlighter-rouge">F</code>) 的全局标签。<code class="language-plaintext highlighter-rouge">F C</code> 的优先级永远比 <code class="language-plaintext highlighter-rouge">F</code> 高。<em>（译注：<code class="language-plaintext highlighter-rouge">F</code>是<code class="language-plaintext highlighter-rouge">Fully-matched</code>，<code class="language-plaintext highlighter-rouge">C</code>是<code class="language-plaintext highlighter-rouge">Current file</code>）</em></p>

<p>如果运行<code class="language-plaintext highlighter-rouge">:tselect donut</code>，即使只有一个标签可选，Vim 也会提示您选择跳转到哪一个。有没有什么方法可以让 Vim 仅在有多个匹配项时才提示标签列表，而只找到一个标签时就立即跳转呢？</p>

<p>当然！Vim 有一个 <code class="language-plaintext highlighter-rouge">:tjump</code> 方法。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tjump donut
</code></pre></div></div>

<p>Vim 将立即跳转到 <code class="language-plaintext highlighter-rouge">one.rb</code> 里的<code class="language-plaintext highlighter-rouge">donut</code> 过程，就像在运行 <code class="language-plaintext highlighter-rouge">:tag donut</code> 一样。现在试试：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tjump pancake
</code></pre></div></div>

<p>Vim 将提示您从标签选项中选择一个，就像在运行<code class="language-plaintext highlighter-rouge">:tselect pancake</code>。<code class="language-plaintext highlighter-rouge">tjump</code> 能两全其美。</p>

<p><code class="language-plaintext highlighter-rouge">tjump</code> 在普通模式下有一个快捷键：<code class="language-plaintext highlighter-rouge">g Ctrl-]</code>。我个人喜欢<code class="language-plaintext highlighter-rouge">g Ctrl-]</code>胜过 <code class="language-plaintext highlighter-rouge">Ctrl-]</code>。</p>

<h2 id="标签的自动补全">标签的自动补全</h2>

<p>标签能有助于自动补全。回想下第6章“插入模式”，您可以使用 <code class="language-plaintext highlighter-rouge">Ctrl-x</code> 子模式来进行各式自动补全。其中有一个我没有提到过的自动补全子模式便是 <code class="language-plaintext highlighter-rouge">Ctrl-]</code>。如果您在插入模式中输入<code class="language-plaintext highlighter-rouge">Ctrl-x Ctrl-]</code>，Vim 将使用标签文件来自动补全。</p>

<p>在插入模式下输入<code class="language-plaintext highlighter-rouge">Ctrl-x Ctrl-]</code>，您会看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One
donut
initialize
pancake
</code></pre></div></div>

<h2 id="标签堆栈">标签堆栈</h2>

<p>Vim 维持着一个标签堆栈，上面记录着所有您从哪儿来、跳哪儿去的标签列表。使用 <code class="language-plaintext highlighter-rouge">:tags</code> 可以看到这个堆栈。如果您首先跳转到<code class="language-plaintext highlighter-rouge">pancake</code>，紧接着是<code class="language-plaintext highlighter-rouge">donut</code>，此时运行<code class="language-plaintext highlighter-rouge">:tags</code>，您将看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>  # TO tag         FROM line  in file/text
  1  1 pancake            10  ch16_tags/two.rb
  2  1 donut               9  ch16_tags/two.rb
&gt;
</code></pre></div></div>

<p>注意上面的 <code class="language-plaintext highlighter-rouge">&gt;</code> 符号，它代表着您当前在堆栈中的位置。要“弹出”堆栈，从而回到上一次的状态，您可以运行<code class="language-plaintext highlighter-rouge">:pop</code>。试试它，再运行<code class="language-plaintext highlighter-rouge">:tags</code>看看：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>  # TO tag         FROM line  in file/text
  1  1 pancake            10  puts pancake
&gt; 2  1 donut               9  one.donut

</code></pre></div></div>

<p>注意现在 <code class="language-plaintext highlighter-rouge">&gt;</code> 符号位于 <code class="language-plaintext highlighter-rouge">donut</code> 所在的第二行了。再 <code class="language-plaintext highlighter-rouge">pop</code> 一次，然后运行<code class="language-plaintext highlighter-rouge">:tags</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>  # TO tag         FROM line  in file/text
&gt; 1  1 pancake            10  puts pancake
  2  1 donut               9  one.donut
</code></pre></div></div>

<p>在普通模式下，您可以按下 <code class="language-plaintext highlighter-rouge">Ctrl-t</code> 来达到和 <code class="language-plaintext highlighter-rouge">:pop</code> 一样的效果。</p>

<h2 id="自动生成标签">自动生成标签</h2>

<p>Vim 标签最大的缺点之一是，每当进行重大改变时，您需要重新生成标签文件。如果您将<code class="language-plaintext highlighter-rouge">pancake</code> 过程重命名为 <code class="language-plaintext highlighter-rouge">waffle</code>，标签文件不知道 <code class="language-plaintext highlighter-rouge">pancake</code> 被重命名了，标签列表仍旧存储着 <code class="language-plaintext highlighter-rouge">pancake</code> 过程。运行<code class="language-plaintext highlighter-rouge">ctags -R .</code> 可以创建更新的标签文件，但这可能会很缓慢。</p>

<p>幸运的是，有几种可以自动生成标签的方法。这一小节不打算介绍一个简单明了的过程，而是提出一些想法，以便您可以扩展它们。</p>

<h2 id="在保存时生成标签">在保存时生成标签</h2>

<p>Vim 有一个自动命令 (<code class="language-plaintext highlighter-rouge">autocmd</code>) 方法，可以在触发事件时执行任意命令。您可以使用这个方法，以便在每次保存时生成标签。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:autocmd BufWritePost *.rb silent !ctags -R .
</code></pre></div></div>

<p>上面命令的分解如下：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">autocmd</code> 是 Vim 的自动命令方法，它接受一个事件名称、文件和一个命令。</li>
  <li><code class="language-plaintext highlighter-rouge">BufWritePost</code> 是保存缓冲区时的一个事件。每次保存文件时将触发一次 <code class="language-plaintext highlighter-rouge">BufWritePost</code> 事件。</li>
  <li><code class="language-plaintext highlighter-rouge">.rb</code> 是 ruby (<code class="language-plaintext highlighter-rouge">rb</code>) 文件的一种文件模式。</li>
  <li><code class="language-plaintext highlighter-rouge">silent</code> 是您传递的命令的一部分。如果不输入它，每次触发自动命令时，Vim 都会提示  <code class="language-plaintext highlighter-rouge">press ENTER or type command to continue</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">!ctags -R .</code> 是要执行的命令。回想一下，<code class="language-plaintext highlighter-rouge">!cmd</code> 从 Vim 内部执行终端命令。</li>
</ul>

<p>现在，每次您保存一个 ruby 文件时，Vim 都会运行<code class="language-plaintext highlighter-rouge">ctags -R .</code>。</p>

<h2 id="使用插件">使用插件</h2>

<p>有几种插件可以自动生成 ctags：</p>

<ul>
  <li><a href="https://github.com/ludovicchabant/vim-gutentags">vim-gutentags</a></li>
  <li><a href="https://github.com/szw/vim-tags">vim-tags</a></li>
  <li><a href="https://github.com/xolox/vim-easytags">vim-easytags</a></li>
  <li><a href="https://github.com/craigemery/vim-autotag">vim-autotag</a></li>
</ul>

<p>我使用 vim-gutentags。它的使用方法很简单，而且装上就可以直接使用。</p>

<h2 id="ctags-以及-git-钩子">Ctags 以及 Git 钩子</h2>

<p>Tim Pope 是一个写了很多非常棒的 Vim 插件的作者，他写了一篇博客，建议使用 git 钩子。<a href="https://tbaggery.com/2011/08/08/effortless-ctags-with-git.html">可以看一看</a>。</p>

<h2 id="聪明地学习标签">聪明地学习标签</h2>

<p>只要配置得当，标签是非常有用的。假设在一个新的代码库中，您想要搞清楚 <code class="language-plaintext highlighter-rouge">functionFood</code> 干了什么，您可以通过跳转到它的定义来搞懂它们。在那儿可以看到，它又调用了 <code class="language-plaintext highlighter-rouge">functionBreakfast</code>。继续跟踪，发现还调用了 <code class="language-plaintext highlighter-rouge">functionPancake</code>。现在您明白了，函数调用路径图长这样：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>functionFood -&gt; functionBreakfast -&gt; functionPancake
</code></pre></div></div>

<p>进一步可以知道，这段代码和早餐吃煎饼有关。</p>

<p>现在您已经知道如何使用标签，通过 <code class="language-plaintext highlighter-rouge">:h tags</code> 可以学习更多有关标签的知识。接下来让我们一起来探索另一个功能：折叠。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch15_command-line_mode/">Ch 15 - 命令行模式</a></li>
  <li>下一部分 <a href="../ch17_fold/">Ch 17 - 折叠</a></li>
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
