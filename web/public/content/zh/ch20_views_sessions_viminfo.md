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
    

    <title>第20章：视图、会话和 Viminfo</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch20_views_sessions_viminfo/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch20_views_sessions_viminfo/">
<meta property="og:title" content="第20章：视图、会话和 Viminfo">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch20_views_sessions_viminfo/">
<meta name="twitter:title" content="第20章：视图、会话和 Viminfo">
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
        <h1>第20章：视图、会话和 Viminfo</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#视图" id="markdown-toc-视图">视图</a>    <ul>
      <li><a href="#配置视图属性" id="markdown-toc-配置视图属性">配置视图属性</a></li>
      <li><a href="#保存视图" id="markdown-toc-保存视图">保存视图</a></li>
      <li><a href="#视图文件" id="markdown-toc-视图文件">视图文件</a></li>
      <li><a href="#加载视图文件" id="markdown-toc-加载视图文件">加载视图文件</a></li>
      <li><a href="#多个视图" id="markdown-toc-多个视图">多个视图</a></li>
      <li><a href="#自动创建视图" id="markdown-toc-自动创建视图">自动创建视图</a></li>
    </ul>
  </li>
  <li><a href="#会话" id="markdown-toc-会话">会话</a>    <ul>
      <li><a href="#创建新会话" id="markdown-toc-创建新会话">创建新会话</a></li>
      <li><a href="#加载会话" id="markdown-toc-加载会话">加载会话</a></li>
      <li><a href="#配置会话属性" id="markdown-toc-配置会话属性">配置会话属性</a></li>
    </ul>
  </li>
  <li><a href="#viminfo" id="markdown-toc-viminfo">Viminfo</a>    <ul>
      <li><a href="#读写-viminfo" id="markdown-toc-读写-viminfo">读写 Viminfo</a></li>
      <li><a href="#不使用-viminfo-启动-vim" id="markdown-toc-不使用-viminfo-启动-vim">不使用 Viminfo 启动 Vim</a></li>
      <li><a href="#配置-viminfo-属性" id="markdown-toc-配置-viminfo-属性">配置 Viminfo 属性</a></li>
    </ul>
  </li>
  <li><a href="#聪明地使用视图会话和-viminfo" id="markdown-toc-聪明地使用视图会话和-viminfo">聪明地使用视图、会话和 Viminfo</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>当您做了一段时间的项目后，您可能会发现这个项目逐渐形了成自己的设置、折叠、缓冲区、布局等，就像住了一段时间公寓后，精心装饰了它一样。问题是，关闭 Vim 后，所有的这些更改都会丢失。如果能保留这些更改，等到下次打开 Vim 时，一切恢复如初，岂不美哉？</p>

<p>本章中，您将学习如何使用 视图、会话 和 Viminfo 来保存项目的“快照”。</p>

<h2 id="视图">视图</h2>

<p>视图是这三个部分（视图、会话、Viminfo）中的最小子集，它是单个窗口相关设置的集合。如果您长时间在一个窗口上工作，并且想要保留其映射和折叠，您可以使用视图。</p>

<p>我们来创建一个 <code class="language-plaintext highlighter-rouge">foo.txt</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>foo1
foo2
foo3
foo4
foo5
foo6
foo7
foo8
foo9
foo10
</code></pre></div></div>

<p>在这个文件中，做三次修改：</p>

<ol>
  <li>在第 1 行，创建一个手动折叠 <code class="language-plaintext highlighter-rouge">zf4j</code>（折叠接下来 4 行）。</li>
  <li>更改 <code class="language-plaintext highlighter-rouge">number</code> 设置：<code class="language-plaintext highlighter-rouge">setlocal nonumber norelativenumber</code>。这会移除窗口左侧的数字指示器。</li>
  <li>创建本地映射，每当按一次 <code class="language-plaintext highlighter-rouge">j</code> 时，向下两行：<code class="language-plaintext highlighter-rouge">:nnoremap &lt;buffer&gt; j jj</code>。</li>
</ol>

<p>您的文件看起来应该像：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>+-- 5 lines: foo1 -----
foo6
foo7
foo8
foo9
foo10
</code></pre></div></div>

<h3 id="配置视图属性">配置视图属性</h3>

<p>运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set viewoptions?
</code></pre></div></div>

<p>默认情况下会显示（根据您的 vimrc 可能会有所不同）：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>viewoptions=folds,cursor,curdir
</code></pre></div></div>

<p>我们来配置 <code class="language-plaintext highlighter-rouge">viewoptions</code>。要保留的三个属性分别是折叠、映射和本地设置选项。如果您的设置和我的相似，那么您已经有了 <code class="language-plaintext highlighter-rouge">folds</code> 选项。运行下列命令使视图记住 <code class="language-plaintext highlighter-rouge">localoptions</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set viewoptions+=localoptions
</code></pre></div></div>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h viewoptions</code> 可了解 <code class="language-plaintext highlighter-rouge">viewoptions</code> 的其他可用选项。现在运行 <code class="language-plaintext highlighter-rouge">:set viewoptions?</code>，您将看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>viewoptions=folds,cursor,curdir,localoptions
</code></pre></div></div>

<h3 id="保存视图">保存视图</h3>

<p>在 <code class="language-plaintext highlighter-rouge">foo.txt</code> 窗口经过适当折叠并设置了 <code class="language-plaintext highlighter-rouge">nonumber norelativenumber</code> 选项后，现在我们来保存视图。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mkview
</code></pre></div></div>

<p>Vim 创建了一个视图文件。</p>

<h3 id="视图文件">视图文件</h3>

<p>您可能会想“Vim 将这个视图文件保存到哪儿了呢？”，运行下列命令就可以看到答案了：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set viewdir?
</code></pre></div></div>

<p>默认情况下会显示 <code class="language-plaintext highlighter-rouge">~/.vim/view</code>（根据您的操作系统，可能会有不同的路径。查阅 <code class="language-plaintext highlighter-rouge">:h viewdir</code> 获得更多信息）。如果您运行的是基于Unix的操作系统，想修改该路径，可以在您的 vimrc 中添加下列内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set viewdir=$HOME/else/where
</code></pre></div></div>

<h3 id="加载视图文件">加载视图文件</h3>

<p>关闭并重新打开 <code class="language-plaintext highlighter-rouge">foo.txt</code>，您会看到原来的文本，没有任何改变。这是预期行为。运行下列命令可以加载视图文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:loadview
</code></pre></div></div>

<p>现在您将看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>+-- 5 lines: foo1 -----
foo6
foo7
foo8
foo9
foo10
</code></pre></div></div>

<p>那些折叠、本地设置以及映射都恢复了。如果您细心还可以发现，光标位于上一次您运行 <code class="language-plaintext highlighter-rouge">:mkview</code> 时所处的行上。只要您有 <code class="language-plaintext highlighter-rouge">cursor</code> 选项，视图将记住光标位置。</p>

<h3 id="多个视图">多个视图</h3>

<p>Vim 允许您保存 9 个编号的视图（1-9）。</p>

<p>假设您想用 <code class="language-plaintext highlighter-rouge">:9,10 fold</code> 来额外折叠最后两行，我们把这存为视图 1。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mkview 1
</code></pre></div></div>

<p>如果您又想用 <code class="language-plaintext highlighter-rouge">:6,7 fold</code> 再折叠一次，并存为不同的视图，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mkview 2
</code></pre></div></div>

<p>关闭并重新打开 <code class="language-plaintext highlighter-rouge">foo.txt</code> 文件，运行下列命令可以加载视图 1：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:loadview 1
</code></pre></div></div>

<p>要加载视图 2，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:loadview 2
</code></pre></div></div>

<p>要加载原始视图，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:loadview
</code></pre></div></div>

<h3 id="自动创建视图">自动创建视图</h3>

<p>有一件可能会发生的很倒霉的事情是，您花了很长时间在一个大文件中进行折叠，一不小心关闭了窗口，接着丢失了所有折叠信息。您可以在 vimrc 中添加下列内容，使得在关闭缓冲区后 Vim 能自动创建视图，防止此类灾难发生：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufWinLeave *.txt mkview
</code></pre></div></div>

<p>另外也能在打开缓冲区后自动加载视图：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufWinEnter *.txt silent loadview
</code></pre></div></div>

<p>现在，当您编辑 <code class="language-plaintext highlighter-rouge">txt</code> 文件时，不用再担心创建和加载视图了。但也注意，随着时间的推移，视图文件会不断积累，记得每隔几个月清理一次。</p>

<h2 id="会话">会话</h2>

<p>如果说视图保存了某个窗口的设置，那么会话则保存了所有窗口（包括布局）的信息。</p>

<h3 id="创建新会话">创建新会话</h3>

<p>假设您在 <code class="language-plaintext highlighter-rouge">foobarbaz</code> 工程中编辑着 3 个文件：</p>

<p><code class="language-plaintext highlighter-rouge">foo.txt</code> 的内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>foo1
foo2
foo3
foo4
foo5
foo6
foo7
foo8
foo9
foo10
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">bar.txt</code> 的内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>bar1
bar2
bar3
bar4
bar5
bar6
bar7
bar8
bar9
bar10
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">baz.txt</code> 的内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>baz1
baz2
baz3
baz4
baz5
baz6
baz7
baz8
baz9
baz10
</code></pre></div></div>

<p>假设您的窗口布局如下所示（适当地使用 <code class="language-plaintext highlighter-rouge">split</code> 和 <code class="language-plaintext highlighter-rouge">vsplit</code> 来放置）：</p>

<p><img src="images/session-layout.png" alt="Session Layout" /></p>

<p>要保留这个外观，您需要保存会话。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mksession
</code></pre></div></div>

<p>与默认存储在 <code class="language-plaintext highlighter-rouge">~/.vim/view</code> 的 <code class="language-plaintext highlighter-rouge">mkview</code> 不同，<code class="language-plaintext highlighter-rouge">mksession</code> 在当前目录存储会话文件（<code class="language-plaintext highlighter-rouge">Session.vim</code>）。如果好奇，您可以看看文件。</p>

<p>如果您想将会话文件另存他处，可以将参数传递给 <code class="language-plaintext highlighter-rouge">mksession</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:mksession ~/some/where/else.vim
</code></pre></div></div>

<p>使用 <code class="language-plaintext highlighter-rouge">!</code> 来调用命令可以覆盖一个已存在的会话文件（<code class="language-plaintext highlighter-rouge">:mksession! ~/some/where/else.vim</code>）。</p>

<h3 id="加载会话">加载会话</h3>

<p>运行下列命令可以加载会话：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:source Session.vim
</code></pre></div></div>

<p>现在 Vim 看起来就像您离开它时的样子！或者，您也可以从终端加载会话文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -S Session.vim
</code></pre></div></div>

<h3 id="配置会话属性">配置会话属性</h3>

<p>您可以配置会话要保存的属性。若要查看当前哪些属性正被保存，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set sessionoptions?
</code></pre></div></div>

<p>我的显示：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>blank,buffers,curdir,folds,help,tabpages,winsize,terminal
</code></pre></div></div>

<p>如果在保存会话时不想存储 <code class="language-plaintext highlighter-rouge">terminal</code>，可以运行下列命令将其从会话选项中删除：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set sessionoptions-=terminal
</code></pre></div></div>

<p>如果要在保存会话时存储 <code class="language-plaintext highlighter-rouge">options</code>，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set sessionoptions+=options
</code></pre></div></div>

<p>下面是一些 <code class="language-plaintext highlighter-rouge">sessionoptions</code> 可以存储的属性：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">blank</code> 存储空窗口</li>
  <li><code class="language-plaintext highlighter-rouge">buffers</code> 存储缓冲区</li>
  <li><code class="language-plaintext highlighter-rouge">folds</code> 存储折叠</li>
  <li><code class="language-plaintext highlighter-rouge">globals</code> 存储全局变量（必须以大写字母开头，并且至少包含一个小写字母）</li>
  <li><code class="language-plaintext highlighter-rouge">options</code> 存储选项和映射</li>
  <li><code class="language-plaintext highlighter-rouge">resize</code> 存储窗口行列</li>
  <li><code class="language-plaintext highlighter-rouge">winpos</code> 存储窗口位置</li>
  <li><code class="language-plaintext highlighter-rouge">winsize</code> 存储窗口大小</li>
  <li><code class="language-plaintext highlighter-rouge">tabpages</code> 存储选项卡</li>
  <li><code class="language-plaintext highlighter-rouge">unix</code> 以 Unix 格式存储文件</li>
</ul>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h 'sessionoptions'</code> 来获取完整列表。</p>

<p>会话是保存项目外部属性的好工具。但是，一些内部属性不存储在会话中，如本地标记、寄存器、历史记录等。要保存它们，您需要使用 Viminfo！</p>

<h2 id="viminfo">Viminfo</h2>

<p>如果您留意，在复制一个单词进寄存器 a，再退出并重新打开 Vim 后，您仍然可以看到存储在寄存器中的文本。这就是 Viminfo 的功劳。没有它，在您关闭 Vim 后，Vim 会忘记这些寄存器。</p>

<p>如果您使用 Vim 8 或更高版本，Vim 会默认启用 Viminfo。因此您可能一直在使用 Viminfo，而您对它毫不知情！</p>

<p>您可能会问：Viminfo 存储了什么？与会话有何不同？</p>

<p>要使用 Viminfo，您必须启用了 <code class="language-plaintext highlighter-rouge">+viminfo</code> 特性（<code class="language-plaintext highlighter-rouge">:version</code>）。Viminfo 存储着：</p>

<ul>
  <li>命令行历史记录。</li>
  <li>字符串搜索历史记录。</li>
  <li>输入行历史记录。</li>
  <li>非空寄存器的内容。</li>
  <li>多个文件的标记。</li>
  <li>文件标记，它指向文件中的位置。</li>
  <li>上次搜索 / 替换模式（用于 “n” 和 “&amp;”）。</li>
  <li>缓冲区列表。</li>
  <li>全局变量。</li>
</ul>

<p>通常，会话存储“外部”属性，Viminfo 存储“内部”属性。</p>

<p>每个项目可以有一个会话文件，而 Viminfo 与会话不同，通常每台计算机只使用一个 Viminfo。Viminfo 是项目无关的。</p>

<p>对于 Unix，Viminfo 的默认位置是 <code class="language-plaintext highlighter-rouge">$HOME/.viminfo</code>（<code class="language-plaintext highlighter-rouge">~/.viminfo</code>）。如果您用其他操作系统，Viminfo 位置可能会有所不同。可以查阅 <code class="language-plaintext highlighter-rouge">:h viminfo-file-name</code>。每一次您做出的“内部”更改，如将文本复制进一个寄存器，Vim 都会自动更新 Viminfo 文件。</p>

<p><em>请确保您设置了 <code class="language-plaintext highlighter-rouge">nocompatible</code> 选项（<code class="language-plaintext highlighter-rouge">set nocompatible</code>），否则您的 Viminfo 将不起作用。</em></p>

<h3 id="读写-viminfo">读写 Viminfo</h3>

<p>尽管只使用一个 Viminfo 文件，但您还是可以创建多个 Viminfo 文件。使用 <code class="language-plaintext highlighter-rouge">:wviminfo</code> 命令（缩写为 <code class="language-plaintext highlighter-rouge">:wv</code>）来创建多个 Viminfo 文件。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:wv ~/.viminfo_extra
</code></pre></div></div>

<p>要覆盖现有的 Viminfo 文件，向 <code class="language-plaintext highlighter-rouge">wv</code> 命令多添加一个叹号：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:wv! ~/.viminfo_extra
</code></pre></div></div>

<p>Vim 默认情况下会读取 <code class="language-plaintext highlighter-rouge">~/.viminfo</code> 文件。运行 <code class="language-plaintext highlighter-rouge">:rviminfo</code>（缩写为 <code class="language-plaintext highlighter-rouge">:rv</code>）可以读取不同的 Vimfile 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:rv ~/.viminfo_extra
</code></pre></div></div>

<p>要在终端使用不同的 Viminfo 文件来启动 Vim，请使用 “i” 标志：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -i viminfo_extra
</code></pre></div></div>

<p>如果您要将 Vim 用于不同的任务，比如写代码和写作，您可以创建两个 Viminfo，一个针对写作优化，另一个为写代码优化。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -i viminfo_writing

vim -i viminfo_coding
</code></pre></div></div>

<h3 id="不使用-viminfo-启动-vim">不使用 Viminfo 启动 Vim</h3>

<p>要不使用 Viminfo 启动 Vim，可以在终端运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -i NONE
</code></pre></div></div>

<p>要永不使用 Viminfo，可以在您的 vimrc 文件添加：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set viminfo="NONE"
</code></pre></div></div>

<h3 id="配置-viminfo-属性">配置 Viminfo 属性</h3>

<p>和 <code class="language-plaintext highlighter-rouge">viewoptions</code> 以及 <code class="language-plaintext highlighter-rouge">sessionoptions</code> 类似，您可以用 <code class="language-plaintext highlighter-rouge">viminfo</code> 选项指定要存储的属性。请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set viminfo?
</code></pre></div></div>

<p>您会得到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>!,'100,&lt;50,s10,h
</code></pre></div></div>

<p>看起来有点晦涩难懂。命令分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">!</code> 保存以大写字母开头、却不包含小写字母的全局变量。回想一下 <code class="language-plaintext highlighter-rouge">g:</code> 代表了一个全局变量。例如，假设您写了赋值语句 <code class="language-plaintext highlighter-rouge">let g:FOO = "foo"</code>，Viminfo 将存储全局变量 <code class="language-plaintext highlighter-rouge">FOO</code>。然而如果您写了 <code class="language-plaintext highlighter-rouge">let g:Foo = "foo"</code>，Viminfo 将不存储它，因为它包含了小写字母。没有 <code class="language-plaintext highlighter-rouge">!</code>，Vim 不会存储这些全局变量。</li>
  <li><code class="language-plaintext highlighter-rouge">'100</code> 代表标记。在这个例子中，Viminfo 将保存最近 100 个文件的本地标记（a-z）。注意，如果存储的文件过多，Vim 会变得很慢，1000 左右就可以了。</li>
  <li><code class="language-plaintext highlighter-rouge">&lt;50</code> 告诉 Viminfo 每个寄存器最多保存多少行（这个例子中是 50 行）。如果我复制 100 行文本进寄存器 a（<code class="language-plaintext highlighter-rouge">"ay99j</code>）后关闭 Vim，下次打开 Vim 并从寄存器 a（<code class="language-plaintext highlighter-rouge">"ap</code>）粘贴时，Vim 最多只粘贴 50 行；如果不指定最大行号， <em>所有</em> 行都将被保存；如果指定 0，什么都不保存了。</li>
  <li><code class="language-plaintext highlighter-rouge">s10</code> 为寄存器设置大小限制（kb）。在这个例子中，任何大于 10kb 的寄存器都会被排除。</li>
  <li><code class="language-plaintext highlighter-rouge">h</code> 禁用高亮显示（<code class="language-plaintext highlighter-rouge">hlsearch</code> 时）。</li>
</ul>

<p>可以查阅 <code class="language-plaintext highlighter-rouge">:h 'viminfo'</code> 来了解其他更多选项。</p>

<h2 id="聪明地使用视图会话和-viminfo">聪明地使用视图、会话和 Viminfo</h2>

<p>Vim 能使用视图、会话和 Viminfo 来保存不同级别的 Vim 环境快照。对于微型项目，可以使用视图；对于大型项目，可以使用会话。您应该花些时间来查阅视图、会话和 Viminfo 提供的所有选项。</p>

<p>为您的编辑风格创建属于您自己的视图、会话和 Viminfo。如果您要换台计算机使用 Vim，只需加载您的设置，立刻就会感到就像在家里的工作环境一样！</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch19_compile/">Ch 19 - 编译</a></li>
  <li>下一部分 <a href="../ch21_multiple_file_operations/">Ch 21 - 多文件操作</a></li>
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
