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
    

    <title>第21章：多文件操作</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch21_multiple_file_operations/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch21_multiple_file_operations/">
<meta property="og:title" content="第21章：多文件操作">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch21_multiple_file_operations/">
<meta name="twitter:title" content="第21章：多文件操作">
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
        <h1>第21章：多文件操作</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#在多个文件中执行命令的几种方法" id="markdown-toc-在多个文件中执行命令的几种方法">在多个文件中执行命令的几种方法</a></li>
  <li><a href="#参数列表" id="markdown-toc-参数列表">参数列表</a></li>
  <li><a href="#缓冲区列表" id="markdown-toc-缓冲区列表">缓冲区列表</a></li>
  <li><a href="#窗口列表和选项卡tab列表" id="markdown-toc-窗口列表和选项卡tab列表">窗口列表和选项卡（Tab）列表</a></li>
  <li><a href="#快速修复列表" id="markdown-toc-快速修复列表">快速修复列表</a></li>
  <li><a href="#位置列表" id="markdown-toc-位置列表">位置列表</a></li>
  <li><a href="#在vim中运行多文件操作命令" id="markdown-toc-在vim中运行多文件操作命令">在Vim中运行多文件操作命令</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>多文件编辑更新是一个值得掌握、非常有用的编辑工具。前面您已经学会了如何使用 <code class="language-plaintext highlighter-rouge">cfdo</code> 命令在多个文本中进行更新。本章，您将学到如何在Vim中进行多文件编辑的更多不同方法。</p>

<h2 id="在多个文件中执行命令的几种方法">在多个文件中执行命令的几种方法</h2>

<p>要在多个文件中执行命令，Vim有8种方法：</p>
<ul>
  <li>参数列表 (<code class="language-plaintext highlighter-rouge">argdo</code>)</li>
  <li>缓冲区列表 (<code class="language-plaintext highlighter-rouge">bufdo</code>)</li>
  <li>窗口列表 (<code class="language-plaintext highlighter-rouge">windo</code>)</li>
  <li>tab 列表(<code class="language-plaintext highlighter-rouge">tabdo</code>)</li>
  <li>快速修复列表 (<code class="language-plaintext highlighter-rouge">cdo</code>)</li>
  <li>文件方式的快速修复列表 (<code class="language-plaintext highlighter-rouge">cfdo</code>)</li>
  <li>位置列表 (<code class="language-plaintext highlighter-rouge">ldo</code>)</li>
  <li>文件方式的位置列表 (<code class="language-plaintext highlighter-rouge">lfdo</code>)</li>
</ul>

<p>实际上，大部分时间您可能只会用到1种或2种（就我个人而言，我使用 <code class="language-plaintext highlighter-rouge">cdo</code> 和 <code class="language-plaintext highlighter-rouge">argdo</code>比其他的多得多），但了解所有可行方法还是很有用的，这样您就可以选择一个最符合您个人编辑风格的方法。</p>

<p>学习所有8个命令可能听起来让人有点打退堂鼓。但实际上，这些命令工作方式很相似。学习了其中一个后，再学习剩余的将容易的多。它们的运行方式都大体相同：分别创建一个列表(列表中的元素根据命令有所不同)，然后向列表传递一个您想执行的命令。</p>

<h2 id="参数列表">参数列表</h2>

<p>参数列表是最基础的列表。它创建一个文件列表。要想为 file1, file2, file3创建文件列表，您可以执行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args file1 file2 file3
</code></pre></div></div>

<p>您也可以传递一个通配符（<code class="language-plaintext highlighter-rouge">*</code>），所以如果您想为当前目录下所有的 <code class="language-plaintext highlighter-rouge">.js</code> 文件创建一个列表，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args *.js
</code></pre></div></div>

<p>如果您想为当前目录下所有以 “a” 开头的Javascript文件创建列表，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args a*.js
</code></pre></div></div>

<p>（<code class="language-plaintext highlighter-rouge">*</code>）通配符匹配当前目录下的1个或多个任意文件名中的字符。但如果您想在某个目录下进行递归搜索怎么办呢？您可以使用双通配符（<code class="language-plaintext highlighter-rouge">**</code>）。要得到您当前位置下所有子目录中的Javascript文件，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args **/*.js
</code></pre></div></div>

<p>您运行了 <code class="language-plaintext highlighter-rouge">args</code> 命令后，您的当前buffer将会切换到列表中的第一个文件。运行 <code class="language-plaintext highlighter-rouge">:args</code>可以查看您刚才创建的文件列表。当您创建好了您的列表后，您就可以遍历它们了。<code class="language-plaintext highlighter-rouge">:first</code> 将让您跳至列表中的第一个文件。<code class="language-plaintext highlighter-rouge">:last</code> 将跳到最后一个文件。运行<code class="language-plaintext highlighter-rouge">:next</code>可以在列表中一次向前移动一个文件。运行 <code class="language-plaintext highlighter-rouge">:prev</code>可以在列表中一次向后移动一个文件。运行<code class="language-plaintext highlighter-rouge">:wnext</code> 和 <code class="language-plaintext highlighter-rouge">:wprev</code>命令，在向前/向后移动文件的同时还会保存修改。查阅 <code class="language-plaintext highlighter-rouge">: arglist</code> 了解更多导航命令。</p>

<p>参数列表在定位某个特定类型的文件或少量文件时特别有用。假如您需要将所有 <code class="language-plaintext highlighter-rouge">yml</code> 文件中的<code class="language-plaintext highlighter-rouge">donut</code> 更新为 <code class="language-plaintext highlighter-rouge">pancake</code>。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args **/*.yml
:argdo %s/donut/pancake/g | update

</code></pre></div></div>
<p>注意如果您再次执行 <code class="language-plaintext highlighter-rouge">args</code> 命令，它将覆盖先前的列表。比如，如果您先前运行了：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args file1 file2 file3
</code></pre></div></div>

<p>假设这些文件都是存在的，那么现在您的列表为 <code class="language-plaintext highlighter-rouge">file1</code>, <code class="language-plaintext highlighter-rouge">file2</code>,以及 <code class="language-plaintext highlighter-rouge">file3</code>。然后再运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args file4 file5
</code></pre></div></div>

<p>您的初始列表 <code class="language-plaintext highlighter-rouge">file1</code>, <code class="language-plaintext highlighter-rouge">file2</code>, <code class="language-plaintext highlighter-rouge">file3</code>将被覆盖为 <code class="language-plaintext highlighter-rouge">file4</code>, <code class="language-plaintext highlighter-rouge">file5</code>。如果您的参数列表中已经有了 <code class="language-plaintext highlighter-rouge">file1</code>, <code class="language-plaintext highlighter-rouge">file2</code>, <code class="language-plaintext highlighter-rouge">file3</code> ，而您想将 <code class="language-plaintext highlighter-rouge">file4</code>, <code class="language-plaintext highlighter-rouge">file5</code> 添加到初始列表中，请使用 <code class="language-plaintext highlighter-rouge">:arga</code>命令。运行</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:arga file4 file5
</code></pre></div></div>

<p>现在您的列表为<code class="language-plaintext highlighter-rouge">file1</code>, <code class="language-plaintext highlighter-rouge">file2</code>, <code class="language-plaintext highlighter-rouge">file3</code>, <code class="language-plaintext highlighter-rouge">file4</code>, <code class="language-plaintext highlighter-rouge">file5</code>。</p>

<p>如果您运行 <code class="language-plaintext highlighter-rouge">:arga</code> 时没有给任何参数，Vim会添加当前buffer到参数列表中。例如，如果您的参数列表中已经有了 <code class="language-plaintext highlighter-rouge">file1</code>, <code class="language-plaintext highlighter-rouge">file2</code>, <code class="language-plaintext highlighter-rouge">file3</code>，而您当前buffer是 <code class="language-plaintext highlighter-rouge">file5</code>，运行 <code class="language-plaintext highlighter-rouge">:arga</code> 将添加 <code class="language-plaintext highlighter-rouge">file5</code> 到您的列表中。</p>

<p>在前面的命令（<code class="language-plaintext highlighter-rouge">:argdo %s/donut/pancake/g</code>）中您已经看到过了，当您创建好列表后就可以向它传递任意命令行命令。其他的一些示例：</p>
<ul>
  <li>删除参数列表所有文件内包含 “dessert” 的行, 运行 <code class="language-plaintext highlighter-rouge">:argdo g/dessert/d</code>.</li>
  <li>在参数列表每个文件中执行宏a(假设您已经在a中录好了一个宏)，运行 <code class="language-plaintext highlighter-rouge">:argdo norm @a</code>.</li>
  <li>向参数列表所有文件的第一行插入”hello “+文件名 ，运行 <code class="language-plaintext highlighter-rouge">:argdo 0put='hello ' . @%</code>（译者注：在英文版中，原作者给出的命令是 <code class="language-plaintext highlighter-rouge">:argdo 0put='hello ' .. @:</code>，貌似这个命令有问题）。</li>
</ul>

<p>把所有工作完成后，别忘了使用 <code class="language-plaintext highlighter-rouge">:update</code> 命令保存(<code class="language-plaintext highlighter-rouge">:update</code>只会保存当前buffer，要保存列表所有文件的修改，请用 <code class="language-plaintext highlighter-rouge">:argdo update</code>)。</p>

<p>有时候您仅仅需要在参数列表的前n个文件执行某条命令。如果是这种情况，只需要向 <code class="language-plaintext highlighter-rouge">argdo</code> 命令传递一个地址就可以了。比如，要在列表的前3个文件执行替换命令，运行：<code class="language-plaintext highlighter-rouge">:1,3argdo %s/donut/pancake/g</code>。</p>

<h2 id="缓冲区列表">缓冲区列表</h2>

<p>因为每次您创建新文件或打开文件时，Vim将它保存在一个buffer中（除非您显式地删除它），所以当您编辑新文件时，缓冲区列表就有组织地被创建了。如果您已经打开了3个文件：<code class="language-plaintext highlighter-rouge">file1.rb file2.rb file3.rb</code>，您的缓冲区列表就已经有了3个元素。运行 <code class="language-plaintext highlighter-rouge">:buffers</code>（或者<code class="language-plaintext highlighter-rouge">:ls</code>、或<code class="language-plaintext highlighter-rouge">:files</code>）可以显示缓冲区列表。要想向前或向后遍历缓冲区列表，可以使用 <code class="language-plaintext highlighter-rouge">:bnext</code> <code class="language-plaintext highlighter-rouge">:bprev</code>。要想跳至列表中第一个或最后一个buffer，可使用 <code class="language-plaintext highlighter-rouge">:bfirst</code> 和 <code class="language-plaintext highlighter-rouge">:blast</code>。</p>

<p>另外，这里有一个和本章内容不相关，但是很酷的缓冲区技巧：如果您的缓冲区有大量的文件，您可以使用 <code class="language-plaintext highlighter-rouge">:ball</code> 显示所有缓冲区。<code class="language-plaintext highlighter-rouge">:ball</code> 命令默认使用水平分割窗口进行显示，如果想使用垂直分割的窗口显示，运行：<code class="language-plaintext highlighter-rouge">:vertical ball</code></p>

<p>回到本章主题。在缓冲区列表中执行某个操作的方法与参数列表操作非常相似。当您创建好缓冲区列表后，您只需要在您想执行的命令前用 <code class="language-plaintext highlighter-rouge">:bufdo</code> 代替 <code class="language-plaintext highlighter-rouge">:argdo</code>就可以了。例如，如果您想将缓冲区列表内每个文件中所有的 “donut” 替换为 “pancake”并保存修改，可以运行：<code class="language-plaintext highlighter-rouge">:bufdo %s/donut/pancake/g | update</code>。</p>

<h2 id="窗口列表和选项卡tab列表">窗口列表和选项卡（Tab）列表</h2>

<p>窗口列表、选项卡列表的操作和参数列表、缓冲区列表同样非常相似。唯一的区别在于它们的内容和语法。</p>

<p>窗口操作作用在每一个打开的窗口上，使用的命令是 <code class="language-plaintext highlighter-rouge">:windo</code>。选项卡（Tab）操作作用在每一个打开的选项卡上，使用的命令是 <code class="language-plaintext highlighter-rouge">:tabdo</code>。可以查询 <code class="language-plaintext highlighter-rouge">:h list-repeat</code>, <code class="language-plaintext highlighter-rouge">:h :windo</code>和<code class="language-plaintext highlighter-rouge">:h :tabdo</code>，了解更多信息。</p>

<p>比如，如果您打开了4个窗口（您可以使用 <code class="language-plaintext highlighter-rouge">Ctrl-w v</code>打开一个垂直分割的窗口，也可以使用 <code class="language-plaintext highlighter-rouge">Ctrl-w s</code>打开一个水平分割的窗口），然后您运行 <code class="language-plaintext highlighter-rouge">:windo 0put = 'hello' . @%</code>，Vim将在所有打开的窗口的第一行输出 “hello”+文件名。</p>

<h2 id="快速修复列表">快速修复列表</h2>

<p>在前面的章节中（第3章和第19章），我曾提到过快速修复（quickfix）。快速修复有很多作用，很多流行的插件都在使用快速修复提供的功能，因此值得花时间去理解它。</p>

<p>如果您是Vim新手，快速修复对于您可能是个新概念。回想以前您执行代码编译的时候，编译期间您可能遇到过错误，而这些错误都显示在一个特殊的窗口。这就是快速修复(quickfix)的由来。当您编译您的代码的时候，Vim会在快速修复窗口显示错误信息，您可以稍后去解决。许多现代语言已经不再需要进行显式地编译，但快速修复并没有被淘汰。现在，人们使用快速修复来做各种各样的事，比如显示虚拟终端的输入、存储搜索结果等。我们重点研究后者，存储搜索结果。</p>

<p>除编译命令外，某些特定的Vim命令也依赖快速修复接口。其中一种就是搜索命令，其使用过程中大量的使用了快速修复窗口，<code class="language-plaintext highlighter-rouge">:vimgrep</code> 和 <code class="language-plaintext highlighter-rouge">:grep</code> 都默认使用快速修复。</p>

<p>比如，如果您需要在所有的Javascript文件中递归地搜索 “donut”，您可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:vimgrep /donut/ **/*.js
</code></pre></div></div>

<p>“donut”的搜索结果存储在快速修复窗口中。要查看快速修复窗口的结果，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:copen
</code></pre></div></div>

<p>要关闭快速修复窗口，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:cclose
</code></pre></div></div>

<p>在快速修复列表中向前或向后遍历，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:cnext
:cprev
</code></pre></div></div>

<p>跳至第一个或最后一个匹配的元素，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:cfirst
:clast
</code></pre></div></div>

<p>在前面我提到过，有两种快速修复命令：<code class="language-plaintext highlighter-rouge">cdo</code> 和 <code class="language-plaintext highlighter-rouge">cfdo</code> 。它们有什么区别？<code class="language-plaintext highlighter-rouge">cdo</code> 在修复列表中的每一个元素上执行命令，而 <code class="language-plaintext highlighter-rouge">cfdo</code> 在修复列表中的每一个文件上执行命令。</p>

<p>让我讲清楚一点，假设运行完上面的 <code class="language-plaintext highlighter-rouge">vimgrep</code> 命令后，您找到以下结果：</p>
<ul>
  <li>1 result in <code class="language-plaintext highlighter-rouge">file1.js</code></li>
  <li>10 results in <code class="language-plaintext highlighter-rouge">file2.js</code></li>
</ul>

<p>如果您运行 <code class="language-plaintext highlighter-rouge">:cfdo %s/donut/pancake/g</code>, 这个命令将会在 <code class="language-plaintext highlighter-rouge">file1.js</code> 和 <code class="language-plaintext highlighter-rouge">file2.js</code> 上分别有效地运行一次<code class="language-plaintext highlighter-rouge">%s/donut/pancake/g</code>. 它执行的次数与 <em>匹配结果中文件的数量</em> 相同。因为搜索结果中有2个文件，因此Vim在 <code class="language-plaintext highlighter-rouge">file1.js</code> 上运行一次替换命令，在 <code class="language-plaintext highlighter-rouge">file2.js</code> 上再运行一次替换命令。 尽管在第二个文件中有10个搜索结果，但 <code class="language-plaintext highlighter-rouge">cfdo</code> 只关注快速修复列表中有多少个文件。</p>

<p>而如果您运行 <code class="language-plaintext highlighter-rouge">:cdo %s/donut/pancake/g</code> ，这个命令将会在 <code class="language-plaintext highlighter-rouge">file1.js</code> 上有效运行一次，然后在 <code class="language-plaintext highlighter-rouge">file2.js</code> 上运行10次。它执行的次数与 <em>快速修复列表中元素的数量</em> 相同。因为在 <code class="language-plaintext highlighter-rouge">file1.js</code> 上找到1个匹配结果，在 <code class="language-plaintext highlighter-rouge">file2.js</code> 上找到10个匹配结果，因此它执行的总次数是11次。</p>

<p>由于您要在列表中运行的命令是 <code class="language-plaintext highlighter-rouge">%s/donut/pancake/g</code> ，所以使用 <code class="language-plaintext highlighter-rouge">cfdo</code>命令是比较合理的。而使用 <code class="language-plaintext highlighter-rouge">cdo</code> 是不合理的，因为它将在 <code class="language-plaintext highlighter-rouge">file2.js</code> 中运行10次 <code class="language-plaintext highlighter-rouge">%s/donut/pancake/g</code>命令（<code class="language-plaintext highlighter-rouge">%s</code>已经是一个针对整个文件的替换操作）。一个文件运行一次 <code class="language-plaintext highlighter-rouge">%s</code> 就足够了。如果您使用 <code class="language-plaintext highlighter-rouge">cdo</code>，则传给它的命令应当改为 <code class="language-plaintext highlighter-rouge">s/donut/pancake/g</code> 才是合理的。</p>

<p>那到底什么时候该用 <code class="language-plaintext highlighter-rouge">cfdo</code>？什么时候该用 <code class="language-plaintext highlighter-rouge">cdo</code>？	这应当想一想您要传递的命令的作用域，要看命令作用域是整个文件（比如 <code class="language-plaintext highlighter-rouge">:%s</code> 或 <code class="language-plaintext highlighter-rouge">:g</code>）？还是某一行（比如 <code class="language-plaintext highlighter-rouge">:s</code> 或 <code class="language-plaintext highlighter-rouge">:!</code>）？</p>

<h2 id="位置列表">位置列表</h2>

<p>位置列表在某种意义上和快速修复列表很像。Vim也使用一个特殊的窗口来显示位置列表的信息。区别在于：您任何时候都只能有1个快速修复列表，而位置列表则是，有多少个窗口就可以有多少个位置列表。</p>

<p>假设您打开了两个窗口，其中一个窗口显示 <code class="language-plaintext highlighter-rouge">food.txt</code> ，而另一个显示 <code class="language-plaintext highlighter-rouge">drinks.txt</code>。在 <code class="language-plaintext highlighter-rouge">food.txt</code>里面，运行一个位置列表搜索命令 <code class="language-plaintext highlighter-rouge">:lvimgrep</code> （<code class="language-plaintext highlighter-rouge">:vimgrep</code>命令关于位置列表的一个变体）。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:lvim /bagel/ **/*.md
</code></pre></div></div>

<p>Vim将为 <code class="language-plaintext highlighter-rouge">food.txt</code>所在 <em>窗口</em>创建一个位置列表，用于存储所有的bagel搜索结果。用 <code class="language-plaintext highlighter-rouge">:lopen</code>命令可以查看位置列表。现在转到另一个窗口 <code class="language-plaintext highlighter-rouge">drinks.txt</code>，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:lvimgrep /milk/ **/*.md
</code></pre></div></div>

<p>Vim将为 <code class="language-plaintext highlighter-rouge">drinks.txt</code>所在 <em>窗口</em>再创建一个 <em>单独</em>的位置列表，用于存储所有关于milk的搜索结果。</p>

<p>对于每个不同的窗口中您运行的位置命令，Vim都会单独创建一个位置列表。如果您有10个不同的窗口，您就可以有最多10个不同的位置列表。对比前面介绍的快速修复列表，快速修复列表任何时候都只能有1个。就算您有10个不同的窗口，您也只能有1个快速修复列表。</p>

<p>大多数位置列表命令都和快速修复列表命令相似，唯一不同就是位置列表命令有一个 <code class="language-plaintext highlighter-rouge">l-</code>前缀，比如： <code class="language-plaintext highlighter-rouge">:lvimgrep</code>, <code class="language-plaintext highlighter-rouge">:lgrep</code>, 还有 <code class="language-plaintext highlighter-rouge">:lmake</code>。在快速修复列表命令中与之对应的是: <code class="language-plaintext highlighter-rouge">:vimgrep</code>, <code class="language-plaintext highlighter-rouge">:grep</code>, 以及 <code class="language-plaintext highlighter-rouge">:make</code>。操作位置列表窗口的方式和快速修复窗口也很相似：<code class="language-plaintext highlighter-rouge">:lopen</code>, <code class="language-plaintext highlighter-rouge">:lclose</code>, <code class="language-plaintext highlighter-rouge">:lfirst</code>, <code class="language-plaintext highlighter-rouge">:llast</code>, <code class="language-plaintext highlighter-rouge">:lnext</code>, 还有<code class="language-plaintext highlighter-rouge">:lprev</code>，与之对应快速修复版本是：<code class="language-plaintext highlighter-rouge">:copen</code>, <code class="language-plaintext highlighter-rouge">:cclose</code>, <code class="language-plaintext highlighter-rouge">:cfirst</code>, <code class="language-plaintext highlighter-rouge">:clast</code>, <code class="language-plaintext highlighter-rouge">:cnext</code>, and <code class="language-plaintext highlighter-rouge">:cprev</code>。</p>

<p>两个位置列表参数的多文件操作命令也和快速修复列表的多文件操作命令也很类似：<code class="language-plaintext highlighter-rouge">:ldo</code> 和 <code class="language-plaintext highlighter-rouge">:lfdo</code>。<code class="language-plaintext highlighter-rouge">:ldo</code> 对位置列表中每一个元素执行命令，而 <code class="language-plaintext highlighter-rouge">:lfdo</code> 对位置列表中每一个文件执行命令。可以查阅 <code class="language-plaintext highlighter-rouge">:h location-list</code>了解更多信息。</p>

<h2 id="在vim中运行多文件操作命令">在Vim中运行多文件操作命令</h2>

<p>在编辑工作中，知道如何进行多文件操作是一个非常有用的技能。当您需要在多个文件中改变一个变量名字的时候，您肯定想一个操作就全部搞定。Vim有8种不同的方法支持你完成这个事。</p>

<p>事实上，您可能并不会用到所有8种方法。您会慢慢倾向于其中1中或2种。当您刚开始时，选择其中1个（我个人建议从参数列表开始 <code class="language-plaintext highlighter-rouge">:argdo</code>）并掌握它。当您习惯了其中1个，然后再学下一个。您将会发现，学习第二个、第三个、第四个时要容易多了。记得要创造性的使用，即将它和其他各种不同命令组合起来使用。坚持练习直到您可以不经思考地高效的使用它。让它成为您的肌肉记忆。</p>

<p>就像前面已经说过的，您现在已经掌握了Vim的编辑功能。恭喜您！</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch20_views_sessions_viminfo/">Ch 20 - 视图、会话和 Viminfo</a></li>
  <li>下一部分 <a href="../ch22_vimrc/">Ch 22 - Vimrc</a></li>
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
