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
    

    <title>第24章：Vim Rumtime</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch24_vim_runtime/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch24_vim_runtime/">
<meta property="og:title" content="第24章：Vim Rumtime">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch24_vim_runtime/">
<meta name="twitter:title" content="第24章：Vim Rumtime">
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
        <h1>第24章：Vim Rumtime</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#runtime路径" id="markdown-toc-runtime路径">Runtime路径</a></li>
  <li><a href="#plugin脚本" id="markdown-toc-plugin脚本">Plugin脚本</a></li>
  <li><a href="#文件类型检测" id="markdown-toc-文件类型检测">文件类型检测</a>    <ul>
      <li><a href="#文件名检测" id="markdown-toc-文件名检测">文件名检测</a>        <ul>
          <li><a href="#ftdetect" id="markdown-toc-ftdetect"><code class="language-plaintext highlighter-rouge">ftdetect/</code></a></li>
          <li><a href="#文件类型文件" id="markdown-toc-文件类型文件">文件类型文件</a></li>
        </ul>
      </li>
      <li><a href="#文件类型脚本" id="markdown-toc-文件类型脚本">文件类型脚本</a></li>
    </ul>
  </li>
  <li><a href="#文件类型插件" id="markdown-toc-文件类型插件">文件类型插件</a></li>
  <li><a href="#缩进文件" id="markdown-toc-缩进文件">缩进文件</a></li>
  <li><a href="#颜色" id="markdown-toc-颜色">颜色</a></li>
  <li><a href="#语法高亮" id="markdown-toc-语法高亮">语法高亮</a></li>
  <li><a href="#文档" id="markdown-toc-文档">文档</a></li>
  <li><a href="#延时加载脚本" id="markdown-toc-延时加载脚本">延时加载脚本</a></li>
  <li><a href="#after脚本" id="markdown-toc-after脚本">After脚本</a></li>
  <li><a href="#vimruntime" id="markdown-toc-vimruntime">$VIMRUNTIME</a></li>
  <li><a href="#runtimepath选项" id="markdown-toc-runtimepath选项">Runtimepath选项</a></li>
  <li><a href="#聪明地学习runtime" id="markdown-toc-聪明地学习runtime">聪明地学习Runtime</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在前面的章节中，我提到Vim会自动查找一些特殊的路径，比如在<code class="language-plaintext highlighter-rouge">~/.vim/</code> 中的 <code class="language-plaintext highlighter-rouge">pack/</code>(第23章) <code class="language-plaintext highlighter-rouge">compiler/</code>（第19章）。这些都是Vim runtime路径的例子。</p>

<p>除了上面提到的两个，Vim还有更多runtime路径。在本章，您将学习关于Vim runtime路径的高层次概述。本章的目标是向您展示它们什么时候被调用。知道这些知识能够帮您更进一步理解和定制Vim。</p>

<h2 id="runtime路径">Runtime路径</h2>

<p>在一台Unix机器中，其中一个vim runtime路径就是 <code class="language-plaintext highlighter-rouge">$HOME/.vim/</code> （如果您用的是其他操作系统，比如Windows，您的路径可能有所不同）。要查看不同的操作系统有什么样的runtime路径，查阅 <code class="language-plaintext highlighter-rouge">:h runtimepath</code>。在本章，我将使用 <code class="language-plaintext highlighter-rouge">~/.vim/</code> 作为默认的runtime路径。</p>

<h2 id="plugin脚本">Plugin脚本</h2>

<p>Vim有一个runtime路径 plugin，每次Vim启动时都会执行这个路径中的所有脚本。不要把这个名字 “plugin” 和Vim的外部插件（external plugins，比如NERDTree, fzf.vim, 等)搞混了。</p>

<p>进入 <code class="language-plaintext highlighter-rouge">~/.vim/</code> 目录，然后创建 <code class="language-plaintext highlighter-rouge">plugin/</code> 子目录。 创建两个文件： <code class="language-plaintext highlighter-rouge">donut.vim</code> 和 <code class="language-plaintext highlighter-rouge">chocolate.vim</code>。</p>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/plugin/donut.vim</code>里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>echo "donut!"
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/plugin/chocolate.vim</code>里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>echo "chocolate!"
</code></pre></div></div>

<p>现在关闭Vim。下次您启动Vim，您将会看到 <code class="language-plaintext highlighter-rouge">"donut!"</code> 和 <code class="language-plaintext highlighter-rouge">:chocolate!</code> 的显示。此 plugin runtime路径可以用来执行一些初始化脚本。</p>

<h2 id="文件类型检测">文件类型检测</h2>

<p>在开始之前，为保证检测能正常运行，确保在您的vimrc中至少包含了下列的行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>filetype plugin indent on
</code></pre></div></div>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h filetype-overview</code> 了解更多信息。本质上，这条代码开启Vim的文件类型检测。</p>

<p>当您打开一个新的文件，Vim通常知道这个文件是什么类型。如果您有一个文件 <code class="language-plaintext highlighter-rouge">hello.rb</code>，运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code> 会返回正确的相应 <code class="language-plaintext highlighter-rouge">filetype=ruby</code>。</p>

<p>Vim知道如何检测 “常见” 的文件类型（Ruby, Python, Javascript, 等）。但如果是一个自定义文件会怎样呢？您需要告诉Vim去检测它，并给它指派一个正确的文件类型。</p>

<p>有两种检测方法：使用文件名和使用文件内容</p>

<h3 id="文件名检测">文件名检测</h3>

<p>文件名检测使用一个文件的文件名来检测文件类型。当您打开 <code class="language-plaintext highlighter-rouge">hello.rb</code>文件时，Vim依靠扩展名 <code class="language-plaintext highlighter-rouge">.rb</code> 知道它是一个Ruby文件。</p>

<p>有两种方法实现文件名检测：一是使用 <code class="language-plaintext highlighter-rouge">ftdetect</code> runtime目录，二是使用 <code class="language-plaintext highlighter-rouge">filetype.vim</code> runtime文件。我们两个都看一看。</p>

<h4 id="ftdetect"><code class="language-plaintext highlighter-rouge">ftdetect/</code></h4>

<p>让我们创建一个古怪（但优雅）的名字，<code class="language-plaintext highlighter-rouge">hello.chocodonut</code>。当您打开它后运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code> ，因为它的后缀名不是常见的文件名，Vim不知道它是什么类型，会返回 <code class="language-plaintext highlighter-rouge">filetype=</code>。</p>

<p>您需要指示Vim将所有以 <code class="language-plaintext highlighter-rouge">.chocodonut</code>结尾的文件设置为 “chocodonut”类型的文件。在runtime路径根目录(<code class="language-plaintext highlighter-rouge">~/.vim/</code>)创建一个子目录，名为 <code class="language-plaintext highlighter-rouge">ftdetect/</code> 。在子目录里面，再创建一个名叫 <code class="language-plaintext highlighter-rouge">chocodonut.vim</code> 的文件（<code class="language-plaintext highlighter-rouge">~/.vim/ftdetect/chocodonut.vim</code>），在文件里面，添加：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufNewFile,BufRead *.chocodonut set filetype=chocodonut
</code></pre></div></div>

<p>当您创建新buffer或打开新buffer时，事件<code class="language-plaintext highlighter-rouge">BufNewFile</code> 和 <code class="language-plaintext highlighter-rouge">BufRead</code> 就会被触发。 <code class="language-plaintext highlighter-rouge">*.chocodonut</code> 意思是只有当新打开的buffer文件名后缀是 <code class="language-plaintext highlighter-rouge">.chocodonut</code> 时事件才会被触发。最后，<code class="language-plaintext highlighter-rouge">set filetype=chocodonut</code> 命令将文件类型设置为chocodonut类型。</p>

<p>重启Vim。新建一个 <code class="language-plaintext highlighter-rouge">hello.chocodonut</code> 文件然后运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code>。它将返回 <code class="language-plaintext highlighter-rouge">filetype=chocodonut</code>.</p>

<p>好极了！只要您想，您可以将任意多的文件放置在 <code class="language-plaintext highlighter-rouge">ftdetect/</code> 中。以后，如果您想扩展您的 donut 文件类型，你可以添加 <code class="language-plaintext highlighter-rouge">ftdetect/strawberrydonut.vim</code>, <code class="language-plaintext highlighter-rouge">ftdetect/plaindonut.vim</code> 等等。</p>

<p>在Vim中，实际上有两种方法设置文件类型。其中给一个是您刚刚使用的 <code class="language-plaintext highlighter-rouge">set filetype=chocodonut</code>。另一种方法是运行 <code class="language-plaintext highlighter-rouge">setfiletype chocodonut</code>。前一个命令 <code class="language-plaintext highlighter-rouge">set filetype=chocodonut</code> 将 <em>总是</em> 设置文件类型为chocodonut。 而后者<code class="language-plaintext highlighter-rouge">setfiletype chocodonut</code>只有当文件类型尚未设置时，才会将文件类型设置为chocodonut。</p>

<h4 id="文件类型文件">文件类型文件</h4>

<p>第二种文件类型检测需要你创建一个名为 <code class="language-plaintext highlighter-rouge">filetype.vim</code>的文件，并将它放置在根目录(<code class="language-plaintext highlighter-rouge">~/.vim/filetype.vim</code>)。在文件内添加一下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufNewFile,BufRead *.plaindonut set filetype=plaindonut
</code></pre></div></div>

<p>创建一个名为 <code class="language-plaintext highlighter-rouge">hello.plaindonut</code> 的文件。当你打开它后运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code> Vim会显示正确的自定义文件类型 <code class="language-plaintext highlighter-rouge">filetype=plaindonut</code>。</p>

<p>太好了，修改生效了。另外，如果您仔细看看 <code class="language-plaintext highlighter-rouge">filetype.vim</code> ，您会发现当您打开<code class="language-plaintext highlighter-rouge">hello.plaindonut</code>时，这个文件文件运行了多次。为防止这一点，您可以添加一个守卫，让主脚本只运行一次。更新 <code class="language-plaintext highlighter-rouge">filetype.vim</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>if exists("did_load_filetypes")
  finish
endif

augroup donutfiletypedetection
  autocmd! BufRead,BufNewFile *.plaindonut setfiletype plaindonut
augroup END
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">finish</code> 是一个Vim命令，用来停止执行剩余的脚本。表达式<code class="language-plaintext highlighter-rouge">"did_load_filetypes"</code> 并 <em>不是</em> 一个Vim内置函数。它实际上是<code class="language-plaintext highlighter-rouge">$VIMRUNTIME/filetype.vim</code> 中的一个全局变量。如果您好奇，运行<code class="language-plaintext highlighter-rouge">:e $VIMRUNTIME/filetype.vim</code>。您将会发现以下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>if exists("did_load_filetypes")
  finish
endif

let did_load_filetypes = 1
</code></pre></div></div>

<p>当Vim调用这个文件时，它会定义 <code class="language-plaintext highlighter-rouge">did_load_filetypes</code> 变量，并将它设置为 1 。在Vim中，1 表示真。你可以试着读完 <code class="language-plaintext highlighter-rouge">filetype.vim</code> 剩余的内容，看看您是否能够理解当Vim调用它时干了什么。</p>

<h3 id="文件类型脚本">文件类型脚本</h3>

<p>让我们学习如何基于文件内容检测文件类型。</p>

<p>假设您有一个无扩展名的文件的集合。这些文件唯一相同的地方是，第一行都是以 “donutify” 开头。您现在想给这些文件指派一个 <code class="language-plaintext highlighter-rouge">donut</code> 的文件类型。创建新文件，起名为 <code class="language-plaintext highlighter-rouge">sugardonut</code>, <code class="language-plaintext highlighter-rouge">glazeddonut</code>, 还有 <code class="language-plaintext highlighter-rouge">frieddonut</code>（没有扩展名）。在每个文件中，添加下列内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>donutify
</code></pre></div></div>

<p>当您在<code class="language-plaintext highlighter-rouge">sugardonut</code>中运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code>，Vim无法知道应该给这个文件指派什么文件类型，会返回 <code class="language-plaintext highlighter-rouge">filetype=</code>。</p>

<p>在runtime根目录，添加一个 <code class="language-plaintext highlighter-rouge">scripts.vim</code> 文件(<code class="language-plaintext highlighter-rouge">~/.vim/scripts.vim</code>)，在文件中，添加一下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>if did_filetype()
  finish
endif

if getline(1) =~ '^\\&lt;donutify\\&gt;'
  setfiletype donut
endif
</code></pre></div></div>

<p>函数 <code class="language-plaintext highlighter-rouge">getline(1)</code> 返回文件第一行的内容。它检查第一行是否以 “donutify” 开头。函数 <code class="language-plaintext highlighter-rouge">did_filetype()</code> 是Vim的内置函数，当一个与文件类型相关的事件发生至少一次时，它返回真。它用来做守卫，防止文件类型事件反复运行。</p>

<p>打开文件 <code class="language-plaintext highlighter-rouge">sugardonut</code> 然后运行 <code class="language-plaintext highlighter-rouge">:set filetype?</code>，Vim现在返回 <code class="language-plaintext highlighter-rouge">filetype=donut</code>。如果您打开另外一个donut文件 (<code class="language-plaintext highlighter-rouge">glazeddonut</code> 和 <code class="language-plaintext highlighter-rouge">frieddonut</code>)，Vim同样会将它们的文件类型定义为 <code class="language-plaintext highlighter-rouge">donut</code> 类型。</p>

<p>注意，<code class="language-plaintext highlighter-rouge">scripts.vim</code> 仅当Vim打开一个未知文件类型的文件时才会运行。如果Vim打开一个已知文件类型的文件，<code class="language-plaintext highlighter-rouge">scripts.vim</code> 将不会运行。</p>

<h2 id="文件类型插件">文件类型插件</h2>

<p>如果您想让Vim仅当您打开一个 chocodonut 文件时才运行 chocodonut 相关的特殊脚本，而当您打开的是 plaindonut 文件时，Vim就不运行这些脚本。能否做到呢？</p>

<p>您可以使用文件类型插件runtime路径(<code class="language-plaintext highlighter-rouge">~/.vim/ftplugin/</code>)来完成这个功能。Vim会在这个目录中查找一个文件，这个文件的文件名与您打开的文件类型一样。创建一个文件，起名为<code class="language-plaintext highlighter-rouge">chocodonut.vim</code> (<code class="language-plaintext highlighter-rouge">~/.vim/ftplugin/chocodonut.vim</code>):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>echo "Calling from chocodonut ftplugin"
</code></pre></div></div>

<p>创建另一个 ftplugin 文件，起名为<code class="language-plaintext highlighter-rouge">plaindonut.vim</code> (<code class="language-plaintext highlighter-rouge">~/.vim/ftplugin/plaindonut.vim</code>):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>echo "Calling from plaindonut ftplugin"
</code></pre></div></div>

<p>现在，每次您打开一个 chocodonut 类型的文件时，Vim会运行 <code class="language-plaintext highlighter-rouge">~/.vim/ftplugin/chocodonut.vim</code>中的脚本。每次您打开 plaindonut 类型的文件时，Vim会运行 <code class="language-plaintext highlighter-rouge">~/.vim/ftplugin/plaindonut.vim</code> 中的脚本。</p>

<p>一个警告：每当一个buffer的文件类型被设置时(比如，<code class="language-plaintext highlighter-rouge">set filetype=chocodonut</code>)，上述脚本就会运行一次。如果您打开3个不同的 chocodonut 文件，该脚本将运行 <em>总共</em> 3次。</p>

<h2 id="缩进文件">缩进文件</h2>

<p>Vim有一个 缩进runtime路径，其工作方式与ftplugin类似，Vim也会在这个目录中查找一个与打开的文件类型名字一样的文件。缩进runtime路径的目的是存储缩进相关的代码。如果您有文件 <code class="language-plaintext highlighter-rouge">~/.vim/indent/chocodonut.vim</code>，它仅当您打开一个 chocodonut 类型的文件时执行。您可以将 chocodonut 文件中缩进相关的代码存储在这里。</p>

<h2 id="颜色">颜色</h2>

<p>Vim 有一个颜色runtime路径 (<code class="language-plaintext highlighter-rouge">~/.vim/colors/</code>) ，用来存储颜色主题。这个目录中的任何文件都会在命令行命令 <code class="language-plaintext highlighter-rouge">:color</code> 中显示出来。</p>

<p>如果您有一个文件 <code class="language-plaintext highlighter-rouge">~/.vim/colors/beautifulprettycolors.vim</code>，当您运行 <code class="language-plaintext highlighter-rouge">:color</code> 然后按 Tab，您将会看到 <code class="language-plaintext highlighter-rouge">beautifulprettycolors</code> 出现在颜色选项中。  如果您想添加自己的颜色主题，就放在这个地方。</p>

<p>如果您想看其他人做的颜色主题，有一个好地方值得推荐：<a href="https://vimcolors.com/">vimcolors</a>。</p>

<h2 id="语法高亮">语法高亮</h2>

<p>Vim有一个语法runtime路径 (<code class="language-plaintext highlighter-rouge">~/.vim/syntax/</code>)，用来定义语法高亮。</p>

<p>假设您有一个文件 <code class="language-plaintext highlighter-rouge">hello.chocodonut</code>，在文件里面有以下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>(donut "tasty")
(donut "savory")
</code></pre></div></div>

<p>虽然Vim现在知道了正确的文件类型，但所有的文本都是相同的颜色。让我们添加语法高亮规则，使 “donut” 关键词高亮显示。创建一个新的 chocodonut 语法文件 <code class="language-plaintext highlighter-rouge">~/.vim/syntax/chocodonut.vim</code>，在文件中添加：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>syntax keyword donutKeyword donut

highlight link donutKeyword Keyword
</code></pre></div></div>

<p>现在重新打开 <code class="language-plaintext highlighter-rouge">hello.chocodonut</code> 文件，关键词 <code class="language-plaintext highlighter-rouge">donut</code> 已经高亮显示了。</p>

<p>本章不会详细介绍语法高亮。它是一个庞大的主题。如果您感兴趣，可以查阅 <code class="language-plaintext highlighter-rouge">:h syntax.txt</code>。</p>

<p><a href="https://github.com/sheerun/vim-polyglot">vim-polyglot</a> 插件非常的棒，它提供了很多流行的编程语言的语法高亮。</p>

<h2 id="文档">文档</h2>

<p>如果您写了一个插件，您还得创建一个您自己的文档。您可以使用文档runtime路径完成这个。</p>

<p>让我们为 chocodonut 和 plaindonut 关键字创建一个基本文档。创建文件 <code class="language-plaintext highlighter-rouge">donut.txt</code> (<code class="language-plaintext highlighter-rouge">~/.vim/doc/donut.txt</code>)。在文件中，添加一下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>*chocodonut* Delicious chocolate donut

*plaindonut* No choco goodness but still delicious nonetheless
</code></pre></div></div>

<p>如果您试着搜索 <code class="language-plaintext highlighter-rouge">chocodonut</code> 或 <code class="language-plaintext highlighter-rouge">plaindonut</code> (<code class="language-plaintext highlighter-rouge">:h chocodonut</code> 或 <code class="language-plaintext highlighter-rouge">:h plaindonut</code>)，您找不到任何东西。</p>

<p>首先，你需要运行 <code class="language-plaintext highlighter-rouge">:helptags</code>来创建新的帮助入口。运行 <code class="language-plaintext highlighter-rouge">:helptags ~/.vim/doc/</code></p>

<p>现在，如果您运行 <code class="language-plaintext highlighter-rouge">:h chocodonut</code> 或 <code class="language-plaintext highlighter-rouge">:h plaindonut</code>，您将找到上面那些新的帮助入口。注意，现在文件是只读的，而且类型是 “help”。</p>

<h2 id="延时加载脚本">延时加载脚本</h2>

<p>到现在，本章您学到的所有runtime路径都是自动运行的。如果您想手动加载一个脚本，可使用 autoload runtime路径。</p>

<p>创建一个目录名为 autoload(<code class="language-plaintext highlighter-rouge">~/.vim/autoload/</code>)。在目录中，创建一个新文件，起名为 <code class="language-plaintext highlighter-rouge">tasty.vim</code> (<code class="language-plaintext highlighter-rouge">~/.vim/autoload/tasty.vim</code>)。在文件中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>echo "tasty.vim global"

function tasty#donut()
  echo "tasty#donut"
endfunction
</code></pre></div></div>

<p>注意，函数名是 <code class="language-plaintext highlighter-rouge">tasty#donut</code> 而不是 <code class="language-plaintext highlighter-rouge">donut()</code>。要想使用autoload功能，井号(<code class="language-plaintext highlighter-rouge">#</code>)是必须的。在使用autoload功能时，函数的命名惯例是：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>function fileName#functionName()
  ...
endfunction
</code></pre></div></div>

<p>在本例中，文件名是 <code class="language-plaintext highlighter-rouge">tasty.vim</code>，而函数名是<code class="language-plaintext highlighter-rouge">donut</code>。</p>

<p>要调用一个函数，可以使用 <code class="language-plaintext highlighter-rouge">call</code> 命令。让我们call这个函数 <code class="language-plaintext highlighter-rouge">:call tasty#donut()</code>。</p>

<p>您第一次调用这个函数时，您应当会 <em>同时</em> 看到两条信息 (“tasty.vim global” 和 “tasty#donut”) 。后面再调用 <code class="language-plaintext highlighter-rouge">tasty#donut</code> 函数，将只会显示 “testy#donut”。</p>

<p>当您在Vim中打开一个文件，不像前面说的runtime路径，autoload脚本不会被自动加载。仅当您显式地调用 <code class="language-plaintext highlighter-rouge">tasty#donut()</code>，Vim才会查找文件<code class="language-plaintext highlighter-rouge">tasty.vim</code>，然后加载文件中的内容，包括函数 <code class="language-plaintext highlighter-rouge">tasty#donut()</code>。有些函数会占用大量资源，但我们又不常用，这时候 Autoload runtime路径就是最佳的解决方案。</p>

<p>您可以在autoload目录任意添加嵌套的目录。如果您有一个runtime路径 <code class="language-plaintext highlighter-rouge">~/.vim/autoload/one/two/three/tasty.vim</code>，您可以使用<code class="language-plaintext highlighter-rouge">:call one#two#three#tasty#donut()</code>来调用函数。</p>

<h2 id="after脚本">After脚本</h2>

<p>Vim有一个 after runtime路径 (<code class="language-plaintext highlighter-rouge">~/.vim/after/</code>) ，它的结构是 <code class="language-plaintext highlighter-rouge">~/.vim/</code>的镜像。在此目录中的任何脚本都会最后执行，所以开发者通常使用这个路径来重载脚本。</p>

<p>比如，如果您想重载 <code class="language-plaintext highlighter-rouge">plugin/chocolate.vim</code> 中的脚本，您可以创建<code class="language-plaintext highlighter-rouge">~/.vim/after/plugin/chocolate.vim</code>来放置重载脚本。Vim将会先运行 <code class="language-plaintext highlighter-rouge">~/.vim/plugin/chocolate.vim</code>， <em>然后运行</em> <code class="language-plaintext highlighter-rouge">~/.vim/after/plugin/chocolate.vim</code></p>

<h2 id="vimruntime">$VIMRUNTIME</h2>

<p>Vim有一个环境变量 <code class="language-plaintext highlighter-rouge">$VIMRUNTIME</code> 用来加载默认脚本和支持文件。您可以运行 <code class="language-plaintext highlighter-rouge">:e $VIMRUNTIME</code>查看。</p>

<p>它的结构应该看起来很熟悉。它包含的很多runtime路径都是我们本章前面学过的。</p>

<p>回想第22章，当您打开Vim时，它会在6个不同的位置查找vimrc文件。当时我说最后一个位置就是 <code class="language-plaintext highlighter-rouge">$VIMRUNTIME/default.vim</code>，如果Vim在前5个位置查找用户vimrc文件失败，就会使用<code class="language-plaintext highlighter-rouge">default.vim</code> 作为vimrc。</p>

<p>不知您是否尝试过，运行Vim是不加载比如vim-polyglot之类的语法插件，但您的文件依然有语法高亮?这是因为当Vim在runtime路径查找语法文件失败时，会从<code class="language-plaintext highlighter-rouge">$VIMRUNTIME</code> 的语法目录中查找语法文件。</p>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h $VIMRUNTIME</code>了解更多信息。</p>

<h2 id="runtimepath选项">Runtimepath选项</h2>

<p>运行 <code class="language-plaintext highlighter-rouge">:set runtimepath?</code>，可以查看您的runtime路径。</p>

<p>如果您使用 Vim-Plug 或其他流行的第三方插件管理器，它应该会显示一个目录列表。比如，我的显示如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>runtimepath=~/.vim,~/.vim/plugged/vim-signify,~/.vim/plugged/base16-vim,~/.vim/plugged/fzf.vim,~/.vim/plugged/fzf,~/.vim/plugged/vim-gutentags,~/.vim/plugged/tcomment_vim,~/.vim/plugged/emmet-vim,~/.vim/plugged/vim-fugitive,~/.vim/plugged/vim-sensible,~/.vim/plugged/lightline.vim, ...
</code></pre></div></div>

<p>插件管理器做了一件事，就是将每个插件添加到runtime路径中。每个runtime路径都有一个类似 <code class="language-plaintext highlighter-rouge">~/.vim/</code>的目录结构。</p>

<p>如果您有一个目录 <code class="language-plaintext highlighter-rouge">~/box/of/donuts/</code>，然后您想将这个目录添加到您的runtime路径中，您可以在vimrc中添加以下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set rtp+=$HOME/box/of/donuts/
</code></pre></div></div>

<p>如果在 <code class="language-plaintext highlighter-rouge">~/box/of/donuts/</code> 里面，您有一个plugin目录 (<code class="language-plaintext highlighter-rouge">~/box/of/donuts/plugin/hello.vim</code>) 以及ftplugin目录 (<code class="language-plaintext highlighter-rouge">~/box/of/donuts/ftplugin/chocodonut.vim</code>)，当您打开Vim时，Vim将会运行 <code class="language-plaintext highlighter-rouge">plugin/hello.vim</code> 中所有脚本。同样，当您打开一个 chocodonut 文件时，Vim 将会运行 <code class="language-plaintext highlighter-rouge">ftplugin/chocodonut.vim</code>。</p>

<p>自己试着做一下：创建一个任意目录，然后将它添加到您的 runtimepath中。添加一些我们本章学到的runtime路径。确保它们按预期工作。</p>

<h2 id="聪明地学习runtime">聪明地学习Runtime</h2>

<p>花点时间阅读本章，还有认真研究一下这些runtime路径。看一下真实环境下runtime路径是如何使用的。浏览一下您最喜欢的Vim插件仓库，仔细研究一下它的目录结构，您应该能够理解它们中的绝大部分。试着领会重点并跟着做。现在您已经理解了Vim的目录结构，您可以准备学习Vimscript了。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch23_vim_packages/">Ch 23 - Vim软件包</a></li>
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
