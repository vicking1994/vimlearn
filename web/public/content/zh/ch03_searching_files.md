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
    

    <title>第三章：打开和搜索文件</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch03_searching_files/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch03_searching_files/">
<meta property="og:title" content="第三章：打开和搜索文件">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch03_searching_files/">
<meta name="twitter:title" content="第三章：打开和搜索文件">
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
        <h1>第三章：打开和搜索文件</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#打开和编辑文件" id="markdown-toc-打开和编辑文件">打开和编辑文件</a></li>
  <li><a href="#使用find命令搜索文件" id="markdown-toc-使用find命令搜索文件">使用find命令搜索文件</a></li>
  <li><a href="#find-和-path" id="markdown-toc-find-和-path">Find 和 Path</a></li>
  <li><a href="#使用grep命令在文件中搜索" id="markdown-toc-使用grep命令在文件中搜索">使用Grep命令在文件中搜索</a></li>
  <li><a href="#用netrw浏览文件" id="markdown-toc-用netrw浏览文件">用Netrw浏览文件</a></li>
  <li><a href="#fzf插件" id="markdown-toc-fzf插件">Fzf插件</a></li>
  <li><a href="#安装" id="markdown-toc-安装">安装</a></li>
  <li><a href="#fzf的语法" id="markdown-toc-fzf的语法">Fzf的语法</a></li>
  <li><a href="#查找文件" id="markdown-toc-查找文件">查找文件</a></li>
  <li><a href="#在文件中查找" id="markdown-toc-在文件中查找">在文件中查找</a></li>
  <li><a href="#其他搜索" id="markdown-toc-其他搜索">其他搜索</a></li>
  <li><a href="#将grep替换为rg" id="markdown-toc-将grep替换为rg">将Grep替换为Rg</a></li>
  <li><a href="#在多文件中搜索和替换" id="markdown-toc-在多文件中搜索和替换">在多文件中搜索和替换</a></li>
  <li><a href="#用聪明的方法学习搜索" id="markdown-toc-用聪明的方法学习搜索">用聪明的方法学习搜索</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>本章的目的是向您介绍如何在Vim中快速搜索，能够快速搜索是提高您的Vim工作效率的重要途径。当我解决了如何快速搜索文件这个问题后，我就决定改为完全使用Vim来工作。</p>

<p>本章划分为两个部分：一是如何不依赖插件搜索；二是使用<a href="https://github.com/junegunn/fzf.vim">fzf插件</a>搜索。让我们开始吧！</p>

<h2 id="打开和编辑文件">打开和编辑文件</h2>

<p>要在Vim中打开一个文件，您可以使用<code class="language-plaintext highlighter-rouge">:edit</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit file.txt
</code></pre></div></div>

<p>如果<code class="language-plaintext highlighter-rouge">file.txt</code>已经存在，就会打开<code class="language-plaintext highlighter-rouge">file.txt</code>buffer。如果<code class="language-plaintext highlighter-rouge">file.txt</code>不存在，会创建一个新buffer名为<code class="language-plaintext highlighter-rouge">file.txt</code>。</p>

<p><code class="language-plaintext highlighter-rouge">:edit</code>命令支持使用<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>进行自动补全。比如，如果您的文件位于<a href="https://rubyonrails.org/">Rails</a>应用控制器的用户控制器目录<code class="language-plaintext highlighter-rouge">./app/controllers/users_controllers.rb</code>内，您可以使用<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>对文件路径名进行快速扩展。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit a&lt;Tab&gt;c&lt;Tab&gt;u&lt;Tab&gt;
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:edit</code>可以接收通配符参数。<code class="language-plaintext highlighter-rouge">*</code>匹配当前目录下的任意文件。如果您只想查找当前目录下后缀名为<code class="language-plaintext highlighter-rouge">.yml</code>的文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit *.yml&lt;Tab&gt;
</code></pre></div></div>

<p>Vim将列出当前目录下所有<code class="language-plaintext highlighter-rouge">.yml</code>文件供您选择。</p>

<p>您可以使用<code class="language-plaintext highlighter-rouge">**</code>进行递归的搜索。如果您想查找当前项目文件夹下所有<code class="language-plaintext highlighter-rouge">*.md</code>文件，但您不知道在哪个目录，您可以这样做：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit **/*.md&lt;Tab&gt;
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:edit</code>可以用于运行<code class="language-plaintext highlighter-rouge">netrw</code>（Vim的内置文件浏览器）。使用方法是，给<code class="language-plaintext highlighter-rouge">:edit</code>一个目录参数而不是文件名就行了：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit .
:edit test/unit/
</code></pre></div></div>

<h2 id="使用find命令搜索文件">使用find命令搜索文件</h2>

<p>您可以使用<code class="language-plaintext highlighter-rouge">:find</code>命令搜索文件。比如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:find package.json
:find app/controllers/users_controller.rb
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:find</code>命令同样支持自动补全：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:find p&lt;Tab&gt;                " to find package.json
:find a&lt;Tab&gt;c&lt;Tab&gt;u&lt;Tab&gt;    " to find app/controllers/users_controller.rb
</code></pre></div></div>

<p>您可能注意到<code class="language-plaintext highlighter-rouge">:find</code>和<code class="language-plaintext highlighter-rouge">:edit</code>看起来很像。它们的区别是什么呢？</p>

<h2 id="find-和-path">Find 和 Path</h2>

<p>两者的区别在于，<code class="language-plaintext highlighter-rouge">:find</code>命令根据<code class="language-plaintext highlighter-rouge">path</code>选项配置的路径查找文件，而<code class="language-plaintext highlighter-rouge">:edit</code>不会。让我们了解一点关于<code class="language-plaintext highlighter-rouge">path</code>选项的知识。一旦您学会如何修改您的路径，<code class="language-plaintext highlighter-rouge">:find</code>命令能变成一个功能强大的搜索工具。先查看一下您的<code class="language-plaintext highlighter-rouge">path</code>是什么：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set path?
</code></pre></div></div>

<p>默认情况下，您的<code class="language-plaintext highlighter-rouge">path</code>内容很可能是这样的：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>path=.,/usr/include,,
</code></pre></div></div>

<ul>
  <li><code class="language-plaintext highlighter-rouge">.</code> 意思是在当前文件所在目录下搜索。(译者注：注意不是命令行输入pwd返回的当前目录，而是 <strong>当前所打开的文件</strong> 所在的目录)</li>
  <li><code class="language-plaintext highlighter-rouge">,</code> 意思是在当前目录下搜索。</li>
  <li><code class="language-plaintext highlighter-rouge">/usr/include</code> 表示在C编译器头文件目录下搜索。</li>
</ul>

<p>前两个配置非常重要，第3个现在可以被忽略。您这里应该记住的是：您可以修改您自己的路径。让我们假设您的项目结构是这样的：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>app/
  assets/
  controllers/
    application_controller.rb
    comments_controller.rb
    users_controller.rb
    ...
</code></pre></div></div>

<p>如果您想从根目录跳到<code class="language-plaintext highlighter-rouge">users_controller.rb</code>，您将不得不经过好几层目录（按好几次<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>）。一般说来，当您处理一个framework时，90%的时间您都在某个特定的目录下。在这种情况下，您只关心如何用最少的按键跳到<code class="language-plaintext highlighter-rouge">controllers/</code>目录。那么<code class="language-plaintext highlighter-rouge">path</code>设置可以减少这个途程。</p>

<p>您只需要将<code class="language-plaintext highlighter-rouge">app/controllers/</code>添加到当前<code class="language-plaintext highlighter-rouge">path</code>选项。以下是操作步骤：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set path+=app/controllers/
</code></pre></div></div>

<p>现在您的路径已经更新，当您输入<code class="language-plaintext highlighter-rouge">:find u&lt;Tab&gt;</code>时，Vim将会在<code class="language-plaintext highlighter-rouge">app/controllers/</code>目录内搜索所有以”u”开头的文件。</p>

<p>如果您有一个嵌套的目录<code class="language-plaintext highlighter-rouge">controllers/</code>，比如<code class="language-plaintext highlighter-rouge">app/controllers/account/users_controller.rb</code>，Vim就找不到<code class="language-plaintext highlighter-rouge">users_controllers</code>了。您必须改为添加<code class="language-plaintext highlighter-rouge">:set path+=app/controllers/**</code>，这样自动补全才会找到<code class="language-plaintext highlighter-rouge">users_controller.rb</code>。这太棒了！您现在可以只需要按1次键就可找到users controller。</p>

<p>您可能会想将整个项目文件夹添加到<code class="language-plaintext highlighter-rouge">path</code>中，这样当您按<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>，Vim将在所有文件夹内搜索您要找的文件，就像这样：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set path+=$PWD/**
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">$PWD</code> 表示的是当前工作目录。如果您尝试将整个项目路径加到<code class="language-plaintext highlighter-rouge">path</code>中，并希望让所有文件名可以用<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>补全，虽然对于小项目没问题，但如果您的项目中包含大量文件时，这会显著降低您的搜索速度。我建议仅仅将您最常访问的文件/目录添加到<code class="language-plaintext highlighter-rouge">path</code>。（译者注：不知道是不是因为系统环境不一样的原因，译者使用的是windows下的Vim8.2，$PWD 这个环境变量在译者的vim中不起作用，必须在vimrc文件中添加一句<code class="language-plaintext highlighter-rouge">let $PWD=getcwd()</code>才行）。</p>

<p>您可以将<code class="language-plaintext highlighter-rouge">set path+={您需要添加的目录}</code>添加到您的vimrc文件中。更新<code class="language-plaintext highlighter-rouge">path</code>仅花费几秒钟，但可以为您的工作节省很多时间。</p>

<h2 id="使用grep命令在文件中搜索">使用Grep命令在文件中搜索</h2>

<p>如果您想在文件内部查找（搜索文件中的词句），您可以使用grep。Vim有两个方法可以完成这个工作：</p>

<ul>
  <li>内置grep （<code class="language-plaintext highlighter-rouge">:vim</code>。没错，就是<code class="language-plaintext highlighter-rouge">:vim</code>，它是<code class="language-plaintext highlighter-rouge">:vimgrep</code>的简写）。</li>
  <li>外部grep (<code class="language-plaintext highlighter-rouge">:grep</code>)。</li>
</ul>

<p>让我们首先仔细看看内置grep。<code class="language-plaintext highlighter-rouge">:vim</code>有以下语法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:vim /pattern/ file
</code></pre></div></div>

<ul>
  <li><code class="language-plaintext highlighter-rouge">/pattern/</code> 是您要搜索的内容的正则表达式。</li>
  <li><code class="language-plaintext highlighter-rouge">file</code> 是文件参数。您可以传入多个参数。Vim将在文件中搜索所有匹配正则表达式的内容。类似于<code class="language-plaintext highlighter-rouge">:find</code>，您可以传入*和**通配符。</li>
</ul>

<p>比如，要在<code class="language-plaintext highlighter-rouge">app/controllers/</code>目录下所有ruby文件(<code class="language-plaintext highlighter-rouge">.rb</code>)中，查找所有的”breakfast”字符串:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:vim /breakfast/ app/controllers/**/*.rb
</code></pre></div></div>

<p>输入上面的命令后，您将会被导航到第一个结果。Vim的<code class="language-plaintext highlighter-rouge">vim</code>搜索命令使用<code class="language-plaintext highlighter-rouge">quickfix</code>进行处理。要查看所有搜索结果，运行<code class="language-plaintext highlighter-rouge">:copen</code>会打开一个<code class="language-plaintext highlighter-rouge">quickfix</code>窗口。下面有一些有用的quickfix命令，可以让您提高效率：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:copen        打开quickfix窗口
:cclose       关闭quickfix窗口
:cnext        跳到下一个错误
:cprevious    跳到前一个错误
:colder       跳到旧的错误列表
:cnewer       跳到新的错误列表
</code></pre></div></div>

<p>要了解更多关于quickfix的信息，使用<code class="language-plaintext highlighter-rouge">:h quickfix</code>查看帮助信息。</p>

<p>您可能注意到运行内置grep(<code class="language-plaintext highlighter-rouge">:vim</code>)命令时，如果匹配结果数量较多时系统速度会变慢。这是因为Vim将每一个搜索结果读入内存。Vim加载每一个匹配的文件就像它们被编辑一样。如果Vim查到大量文件，它将消耗很多内存。</p>

<p>让我们谈谈外置grep。默认情况下，它使用终端命令<code class="language-plaintext highlighter-rouge">grep</code>。要想在<code class="language-plaintext highlighter-rouge">app/controllers/</code>目录中搜索字符串”lunch”，您可以这样做：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:grep -R "lunch" app/controllers/
</code></pre></div></div>

<p>注意这里不是使用<code class="language-plaintext highlighter-rouge">/pattern/</code>，它遵循的是终端grep的语法<code class="language-plaintext highlighter-rouge">"pattern"</code>，它同样使用’quickfix’来显示所有的匹配结果。</p>

<p>Vim使用<code class="language-plaintext highlighter-rouge">grepprg</code>变量来决定运行<code class="language-plaintext highlighter-rouge">:grep</code>时，应该使用哪个外部程序。所以您并不是非得使用终端的<code class="language-plaintext highlighter-rouge">grep</code>命令。稍后我将为您演示如何改变外部grep程序的默认值。</p>

<h2 id="用netrw浏览文件">用Netrw浏览文件</h2>

<p><code class="language-plaintext highlighter-rouge">netrw</code>是Vim的内置文件浏览器，当查看项目的目录结构时很有用。要运行<code class="language-plaintext highlighter-rouge">netrw</code>，您需要在您的<code class="language-plaintext highlighter-rouge">.vimrc</code>中做以下设置：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set nocp
filetype plugin on
</code></pre></div></div>

<p>由于<code class="language-plaintext highlighter-rouge">netrw</code>是一个很宽泛的话题，我将仅仅介绍它的基本用法，这应该已经足够了。您可以在启动Vim时运行<code class="language-plaintext highlighter-rouge">netrw</code>，只需要传给Vim一个目录参数（而不是文件参数）就行了。比如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim .
vim src/client/
vim app/controllers/
</code></pre></div></div>

<p>要想从Vim内部运行<code class="language-plaintext highlighter-rouge">netrw</code>，您可以使用<code class="language-plaintext highlighter-rouge">:edit</code>命令，传给他一个目录而不是文件名：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:edit .
:edit src/client/
:edit app/controllers/
</code></pre></div></div>

<p>也有其他方法，不需要传递目录参数就运行<code class="language-plaintext highlighter-rouge">netrw</code>窗口：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:Explore     从当前文件启动netrw。
:Sexplore    Sex_Plore?不是开玩笑:)，在顶部水平分割的窗口打开netrw。
:Vexplore    在左侧垂直分割的窗口打开netrw。
</code></pre></div></div>

<p>您可以使用Vim动作(motions，在后面的章节中将详细讲述)在<code class="language-plaintext highlighter-rouge">netrw</code>中导航。如果您要创建、删除、重命名文件或文件夹，下面有一些关于<code class="language-plaintext highlighter-rouge">netrw</code>的有用命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>%    创建新文件
d    创建新目录
R    重命名文件/目录
D    删除文件/目录
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:h netrw</code> 的信息非常复杂，如果您有时间可以看看。</p>

<p>如果您觉得 <code class="language-plaintext highlighter-rouge">netrw</code> 过于单调乏味，<a href="https://github.com/tpope/vim-vinegar">vim-vinegar</a>是netrw的一个改进插件。如果您想找一个不同的文件浏览器，<a href="https://github.com/preservim/nerdtree">NERDTree</a> 是一个很好的选择。去看看吧。</p>

<h2 id="fzf插件">Fzf插件</h2>

<p>您现在已经学会了如何使用Vim的内置工具去搜索文件，那么让我们学习一下如何用插件实现这些功能吧。</p>

<p>现代文本编辑器相比Vim，有一个功能设计得很好，那就是文件搜索和模糊搜索的简化。在本章的下半部分，我将向您演示如何使用<a href="https://github.com/junegunn/fzf.vim">fzf.vim</a>插件，在Vim中轻松实现功能强大的搜索功能。</p>

<h2 id="安装">安装</h2>

<p>首先，确保您下载了<a href="https://github.com/junegunn/fzf">fzf</a>和<a href="https://github.com/BurntSushi/ripgrep">ripgrep</a>。按照它们在github仓库上的指令一步步做。成功安装后，命令<code class="language-plaintext highlighter-rouge">fzf</code>和<code class="language-plaintext highlighter-rouge">rg</code>应该就可以用了。</p>

<p>Ripgrep是一个类似grep（从名字上就看得出）的搜索工具。一般说来，它比grep要快，而且还有很多有用的特性。Fzf是一个多用途的命令行模糊搜索工具，您可以讲它与其他命令联合起来使用，包括ripgrep。联合起来后，它们成为一个功能强大的搜索工具。</p>

<p>Fzf默认并不使用ripgrep，所以我们需要设置<code class="language-plaintext highlighter-rouge">FZF_DEFAULT_COMMAND</code>变量告诉fzf使用ripgrep命令。在我的<code class="language-plaintext highlighter-rouge">.zshrc</code>（如果您用bash，应该是<code class="language-plaintext highlighter-rouge">.bashrc</code>）文件内，我有以下设置：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>if type rg &amp;&gt; /dev/null; then
  export FZF_DEFAULT_COMMAND='rg --files'
  export FZF_DEFAULT_OPTS='-m'
fi
</code></pre></div></div>

<p>注意<code class="language-plaintext highlighter-rouge">FZF_DEFAULT_OPTS</code>变量中的<code class="language-plaintext highlighter-rouge">-m</code>。这个设置允许我们按下<code class="language-plaintext highlighter-rouge">&lt;Tab</code>或<code class="language-plaintext highlighter-rouge">&lt;Shift-Tab&gt;</code>后进行多重选择。如果仅想让fzf在Vim中能够工作，这个设置不是必须的，但我认为这是一个有用的设置。当您想在多个文件中执行搜索和替换，进行少量修改时，它会很方便。fzf命令可以接收很多标志，但我不会再这里讲。要想了解更多信息，可以查看<a href="https://github.com/junegunn/fzf#usage">fzf’s 仓库</a>，或者使用<code class="language-plaintext highlighter-rouge">man fzf</code>。要想让fzf使用ripgrep，您至少得有这个设置<code class="language-plaintext highlighter-rouge">export FZF_DEFAULT_COMMAND='rg'</code>。</p>

<p>安装好了fzf和ripgrep后，让我们再安装fzf的插件。在这个例子中，我使用的是<a href="https://github.com/junegunn/vim-plug">vim-plug</a>插件管理器，当然您可以使用其他插件管理器。</p>

<p>将下列配置添加到您的<code class="language-plaintext highlighter-rouge">.vimrc</code>中。因为您需要使用<a href="https://github.com/junegunn/fzf.vim">fzf.vim</a>插件。（同样是由fzf的作者在维护）</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Plug 'junegunn/fzf.vim'
Plug 'junegunn/fzf', { 'do': { -&gt; fzf#install() } }
</code></pre></div></div>

<p>添加后，您需要打开vim，运行<code class="language-plaintext highlighter-rouge">:PlugInstall</code>。这条命令将会安装所有您在<code class="language-plaintext highlighter-rouge">vimrc</code>文件中定义了但尚未安装的插件。 在我的例子中，将会安装<code class="language-plaintext highlighter-rouge">fzf.vim</code>和<code class="language-plaintext highlighter-rouge">fzf</code>。</p>

<p>要了解更多关于此插件的信息，您可以查看<a href="https://github.com/junegunn/fzf/blob/master/README-VIM.md">fzf.vim 的仓库</a>。</p>

<h2 id="fzf的语法">Fzf的语法</h2>

<p>要想高效的使用fzf，您首先得了解一些fzf的基础语法。幸运的是，这个列表比较短：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">^</code> 表示前缀精确匹配。要搜索一个以”welcome”开头的短语：<code class="language-plaintext highlighter-rouge">^welcom</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">$</code> 表示后缀精确匹配。要搜索一个以”my friends”结尾的短语：<code class="language-plaintext highlighter-rouge">friends$</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">'</code> 表示精确匹配。要搜索短语”welcom my friends”：<code class="language-plaintext highlighter-rouge">'welcom my friends</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">|</code> 表示”或者”匹配。要搜索”friends”或”foes”：<code class="language-plaintext highlighter-rouge">friends | foes</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">!</code> 表示反向匹配。要搜索一个包含”welcome”但不包含”friends”的短语：<code class="language-plaintext highlighter-rouge">welcome !friends</code>。</li>
</ul>

<p>您可以混合起来使用。比如，<code class="language-plaintext highlighter-rouge">^hello | ^welcome friends$</code>将搜索以”welcome”或”hello”开头，并且以”friends”结束的短语。</p>

<h2 id="查找文件">查找文件</h2>

<p>要想在Vim内使用fzf.vim插件搜索文件，您可以使用<code class="language-plaintext highlighter-rouge">:Files</code>方法。在Vim中运行<code class="language-plaintext highlighter-rouge">:Files</code>，您将看到fzf搜索提示符。</p>

<p>因为您将频繁地使用这个命令，最好建立一个键盘映射，我把它映射到<code class="language-plaintext highlighter-rouge">Ctrl-f</code>。在我的vimrc配置中，有这个设置：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap &lt;silent&gt; &lt;C-f&gt; :Files&lt;CR&gt;
</code></pre></div></div>

<h2 id="在文件中查找">在文件中查找</h2>

<p>要想在文件内部搜索，您可以使用<code class="language-plaintext highlighter-rouge">:Rg</code>命令。</p>

<p>同样，因为您可能将频繁的使用这个命令，让我们给它一个键盘映射。我的映射在<code class="language-plaintext highlighter-rouge">&lt;Leader&gt;f</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap &lt;silent&gt; &lt;Leader&gt;f :Rg&lt;CR&gt;
</code></pre></div></div>

<h2 id="其他搜索">其他搜索</h2>

<p>Fzf.vim提供了许多其他命令。这里我不会一个个仔细讲，您可以去<a href="https://github.com/junegunn/fzf.vim#commands">这里</a>查看更多信息。</p>

<p>这是我的fzf键盘映射：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap &lt;silent&gt; &lt;Leader&gt;b :Buffers&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;C-f&gt; :Files&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;f :Rg&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;/ :BLines&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;' :Marks&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;g :Commits&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;H :Helptags&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;hh :History&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;h: :History:&lt;CR&gt;
nnoremap &lt;silent&gt; &lt;Leader&gt;h/ :History/&lt;CR&gt;
</code></pre></div></div>

<h2 id="将grep替换为rg">将Grep替换为Rg</h2>

<p>正如前面提到的，Vim有两种方法在文件内搜索：<code class="language-plaintext highlighter-rouge">:vim</code>和<code class="language-plaintext highlighter-rouge">:grep</code>。您可以使用<code class="language-plaintext highlighter-rouge">grepprg</code>这个关键字重新指定<code class="language-plaintext highlighter-rouge">:grep</code>使用的外部搜索工具。我将向您演示如何设置Vim，使得当运行<code class="language-plaintext highlighter-rouge">:grep</code>命令时，使用ripgrep代替终端的grep。</p>

<p>现在，让我们设置<code class="language-plaintext highlighter-rouge">grepprg</code>来使<code class="language-plaintext highlighter-rouge">:grep</code>使用ripgrep。将下列设置添加到您的vimrc：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set grepprg=rg\ --vimgrep\ --smart-case\ --follow
</code></pre></div></div>

<p>上面的一些选项可以随意修改！要想了解更多关于这些选项的含义，请使用<code class="language-plaintext highlighter-rouge">man rg</code>了解详情。</p>

<p>当您更新<code class="language-plaintext highlighter-rouge">grepprg</code>选项后，现在当您运行<code class="language-plaintext highlighter-rouge">:grep</code>，它将实际运行<code class="language-plaintext highlighter-rouge">rg --vimgrep --smart-case --follow</code>而不是<code class="language-plaintext highlighter-rouge">grep</code>。如果您想使用ripgrep搜索”donut”，您可以运行一条更简洁的命令<code class="language-plaintext highlighter-rouge">:grep "donut"</code>，而不是<code class="language-plaintext highlighter-rouge">:grep "donut" . -R</code></p>

<p>就像老的<code class="language-plaintext highlighter-rouge">:grep</code>一样，新的<code class="language-plaintext highlighter-rouge">:grep</code>同样使用quickfix窗口来显示结果。</p>

<p>您可能好奇，“很好，但我从没在Vim中使用过<code class="language-plaintext highlighter-rouge">:grep</code>，为什么我不能直接使用<code class="language-plaintext highlighter-rouge">:Rg</code>命令在文件中搜索呢？究竟什么时候我必须使用<code class="language-plaintext highlighter-rouge">:grep</code>？”。</p>

<p>这个问题问得很好。在Vim中，当您需要在多个文件中执行搜索和替换时，您可能必须使用<code class="language-plaintext highlighter-rouge">:grep</code>这个命令。我马上就会讲这个问题。</p>

<h2 id="在多文件中搜索和替换">在多文件中搜索和替换</h2>

<p>现代文本编辑器，比如VSCode中，在多个文件中搜索和替换一个字符串是很简单的事情。在这一节，我将向您演示如何在Vim中轻松实现这个。</p>

<p>第一个方法是在您的项目中替换 <strong>所有</strong> 的匹配短句。您得使用<code class="language-plaintext highlighter-rouge">:grep</code>命令。如果您想将所有”pizza”替换为”donut”，下面是操作方法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:grep "pizza"
:cfdo %s/pizza/donut/g | update
</code></pre></div></div>

<p>让我们来分析一下这条命令：</p>

<ol>
  <li><code class="language-plaintext highlighter-rouge">:grep pizza</code>使用ripgrep去搜索所有”pizza”（顺带说一句，就算您不给<code class="language-plaintext highlighter-rouge">grepprg</code>重新赋值让它使用ripgrep，这条命令依然有效，但您可能不得不使用<code class="language-plaintext highlighter-rouge">:grep "pizza" . -R</code>命令，而不是<code class="language-plaintext highlighter-rouge">:grep "pizza"</code>）。</li>
  <li><code class="language-plaintext highlighter-rouge">:cfdo</code>会在您的quickfix列表中所有文件里，执行您传递给它的命令。在这个例子中，您的命令是一条替换命令<code class="language-plaintext highlighter-rouge">%s/pizza/donut/g</code>。管道符号(<code class="language-plaintext highlighter-rouge">|</code>)是一个链接操作符。命令<code class="language-plaintext highlighter-rouge">update</code>在每个文件被替换后，立刻保存。在后面的章节中，我将深入介绍替换命令。</li>
</ol>

<p>第二个方法是在您选择文件中执行搜索和替换。用这个方法，您可以手动选择您想执行搜索和替换的文件。下面是操作方法：</p>

<ol>
  <li>首先清空您的buffer。让您的buffer列表仅包含您所需要的文件，这一点很有必要。您可以重启Vim，也可以运行<code class="language-plaintext highlighter-rouge">:%bd | e#</code>命令（<code class="language-plaintext highlighter-rouge">%bd</code>关闭所有buffer，而<code class="language-plaintext highlighter-rouge">e#</code>打开您当前所在的文件）。</li>
  <li>运行<code class="language-plaintext highlighter-rouge">:Files</code>。</li>
  <li>选择好您想搜索-替换的文件。要选择多个文件，使用<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>或<code class="language-plaintext highlighter-rouge">&lt;Shift-Tab&gt;</code>。当然，您必须使多文件标志(<code class="language-plaintext highlighter-rouge">-m</code>)位于<code class="language-plaintext highlighter-rouge">FZF_DEFAULT_OPTS</code>中。</li>
  <li>运行<code class="language-plaintext highlighter-rouge">:bufdo %s/pizza/donut/g | update</code>。命令<code class="language-plaintext highlighter-rouge">:bufdo %s/pizza/donut/g | update</code>看起来和前面的<code class="language-plaintext highlighter-rouge">:cfdo %s/pizza/donut/g | update</code>很像，区别在于，(<code class="language-plaintext highlighter-rouge">:cfdo</code>)替换所有quickfix中的实体，而(<code class="language-plaintext highlighter-rouge">:bufdo</code>)替换所有buffer中的实体。</li>
</ol>

<h2 id="用聪明的方法学习搜索">用聪明的方法学习搜索</h2>

<p>在文本编辑时，搜索是一个很实用的技巧。学会在Vim中如何搜索，将显著提高您的文本编辑工作流程效率。</p>

<p>Fzf.vim插件就像一个游戏规则改变者。我无法想象使用Vim没有它的情景。当最开始使用Vim时，如果有一个好的搜索工具，我想是非常重要的。我看见很多人过渡到Vim时的艰难历程，就是因为Vim缺少了现代编辑器所拥有的一些关键功能特性，比如简单快捷且功能强大的搜索功能。我希望本章将帮助您更轻松地向Vim过渡。</p>

<p>您同时也看到了Vim的扩展性，即使用插件或外部程序扩展搜索功能的能力。将来，记住您想在Vim中拓展的功能。很有可能已经有人写好了相关插件，已经有现成的程序了。下一章，您将学习Vim中非常重要的主题：Vim语法。</p>

<h2 id="链接">链接</h2>

<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch02_buffers_windows_tabs/">Ch 2 - 缓冲区，窗口和选项卡</a></li>
  <li>下一部分 <a href="../ch04_vim_grammar/">Ch 4 - Vim 语法</a></li>
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
