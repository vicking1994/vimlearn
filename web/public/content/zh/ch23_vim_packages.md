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
    

    <title>第23章：Vim软件包</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch23_vim_packages/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch23_vim_packages/">
<meta property="og:title" content="第23章：Vim软件包">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch23_vim_packages/">
<meta name="twitter:title" content="第23章：Vim软件包">
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
        <h1>第23章：Vim软件包</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#包目录" id="markdown-toc-包目录">包目录</a></li>
  <li><a href="#两种加载方式" id="markdown-toc-两种加载方式">两种加载方式</a>    <ul>
      <li><a href="#自动加载" id="markdown-toc-自动加载">自动加载</a></li>
      <li><a href="#手动加载" id="markdown-toc-手动加载">手动加载</a></li>
    </ul>
  </li>
  <li><a href="#组织管理软件包" id="markdown-toc-组织管理软件包">组织管理软件包</a></li>
  <li><a href="#聪明地添加插件" id="markdown-toc-聪明地添加插件">聪明地添加插件</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在前面的章节中，我提到使用第三方插件管理器来安装插件。从Vim 8开始，Vim自带了一个内置的插件管理器，名叫 <em>软件包（packages）</em>。在本章，您将学习如何使用Vim软件包来安装插件。</p>

<p>要看您的Vim编译版本是否能够使用软件包，运行 <code class="language-plaintext highlighter-rouge">:version</code>。然后查看是否有 <code class="language-plaintext highlighter-rouge">+packages</code>属性。另外，您也可以运行 <code class="language-plaintext highlighter-rouge">:echo has('packages')</code>（如果返回1，表示可以使用软件包）。</p>

<h2 id="包目录">包目录</h2>

<p>在根目录下查看您是否有一个 <code class="language-plaintext highlighter-rouge">~/.vim</code> 文件夹。如果没有就新建一个。在文件夹里面，创建一个子文件夹取名 <code class="language-plaintext highlighter-rouge">pack</code>(<code class="language-plaintext highlighter-rouge">~/.vim/pack/</code>)。Vim会在这个子文件夹内自动搜索插件。</p>

<h2 id="两种加载方式">两种加载方式</h2>

<p>Vim软件包有两种加载机制：自动加载和手动加载。</p>

<h3 id="自动加载">自动加载</h3>

<p>要想让Vim启动时自动加载插件，你需要将它们放置在 <code class="language-plaintext highlighter-rouge">start/</code>子目录中。路径看起来像这样：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/*/start/
</code></pre></div></div>

<p>现在您可能会问，为什么在<code class="language-plaintext highlighter-rouge">pack/</code> 和 <code class="language-plaintext highlighter-rouge">start/</code> 之间有一个 <code class="language-plaintext highlighter-rouge">*</code> ？这个星号可以是任意名字。让我们将它取为<code class="language-plaintext highlighter-rouge">packdemo/</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/packdemo/start/
</code></pre></div></div>

<p>记住，如果您忽略这一点，用下面的路径代替的话：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/start/
</code></pre></div></div>

<p>软件包系统是不会正常工作的。 必须在<code class="language-plaintext highlighter-rouge">pack/</code> 和 <code class="language-plaintext highlighter-rouge">start/</code>之间添加一个名字才能正常运行。</p>

<p>在这个示例中，让我们尝试安装 <a href="https://github.com/preservim/nThe package system won't work. It is imperative to put a name between `pack/` and `start/`.erdtree">NERDTree</a> 插件。用任意方法进入 <code class="language-plaintext highlighter-rouge">start/</code> 目录（<code class="language-plaintext highlighter-rouge">cd ~/.vim/pack/packdemo/start/</code>），然后将NERDTree的仓库克隆下来：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git clone https://github.com/preservim/nerdtree.git
</code></pre></div></div>

<p>完成了！您已经完成了安装。下一次您启动Vim，您可以立即执行 NERDTree 命令 <code class="language-plaintext highlighter-rouge">:NERDTreeToggle</code>。</p>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/pack/*/start/</code> 目录中，您想克隆多少插件仓库就克隆多少。Vim将会自动加载每一个插件。如果您删除了克隆的仓库（<code class="language-plaintext highlighter-rouge">rm -rf nerdtree</code>），那么插件就失效了。</p>

<h3 id="手动加载">手动加载</h3>

<p>要想在Vim启动时手动加载插件，您得将相关插件放置在 <code class="language-plaintext highlighter-rouge">opt/</code> 目录中，类似于自动加载，这个路径看起来像这样：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/*/opt/
</code></pre></div></div>

<p>让我们继续使用前面的 <code class="language-plaintext highlighter-rouge">packdemo/</code> 这个名字：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/packdemo/opt/
</code></pre></div></div>

<p>这一次，让我们安装<a href="https://github.com/vim/killersheep">killersheep</a> 游戏（需要Vim8.2以上版本）。进入<code class="language-plaintext highlighter-rouge">opt/</code> 目录(<code class="language-plaintext highlighter-rouge">cd ~/.vim/pack/packdemo/opt/</code>) 然后克隆仓库：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git clone https://github.com/vim/killersheep.git
</code></pre></div></div>

<p>启动Vim。执行游戏的命令是 <code class="language-plaintext highlighter-rouge">:KillKillKill</code>。试着运行一下。Vim将会提示这不是一个有效的编辑命令。您需要首先 <em>手动</em> 加载插件，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:packadd killersheep
</code></pre></div></div>

<p>现在再运行一下 <code class="language-plaintext highlighter-rouge">:KillKillKill</code> 。命令已经可以使用了。</p>

<p>您可能好奇，“为什么我需要手动加载插件？启动时自动加载岂不是更好？”</p>

<p>很好的问题。有时候有些插件我们并不是所有的时候都在用，比如 KillerSheep 游戏。您可能不会想要加载10个不同的游戏导致Vim启动变慢。但是偶尔当您觉得乏味的时候，您可能想要玩几个游戏，使用手动加载一些非必须的插件。</p>

<p>您也可以使用这个方法有条件的加载插件。可能您同时使用了Neovim和Vim，有一些插件是为NeoVim优化过的。您可以添加类似下列的内容到您的vimrc中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>if has('nvim')
  packadd! neovim-only-plugin
else
  packadd! generic-vim-plugin
endif
</code></pre></div></div>

<h2 id="组织管理软件包">组织管理软件包</h2>

<p>回想一下，要使用Vim的软件包系统必须有以下需求：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/*/start/
</code></pre></div></div>

<p>或者:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/*/opt/
</code></pre></div></div>

<p>实际上，<code class="language-plaintext highlighter-rouge">*</code>星号可以使 <em>任意</em> 名字，这个名字就可以用来管理您的插件。假设您想将您的插件根据类型（颜色、语法、游戏）分组：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/colors/
~/.vim/pack/syntax/
~/.vim/pack/games/
</code></pre></div></div>

<p>您仍然可以使用各个目录下的 <code class="language-plaintext highlighter-rouge">start/</code> 和 <code class="language-plaintext highlighter-rouge">opt/</code> 。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>~/.vim/pack/colors/start/
~/.vim/pack/colors/opt/

~/.vim/pack/syntax/start/
~/.vim/pack/syntax/opt/

~/.vim/pack/games/start/
~/.vim/pack/games/opt/
</code></pre></div></div>

<h2 id="聪明地添加插件">聪明地添加插件</h2>

<p>您可能好奇，Vim软件包是否让一些流行的插件管理器，比如 vim-pathogen, vundle.vim, dein.vim, a还有vim-plug面临淘汰？</p>

<p>答案永远是：“看情况而定。”</p>

<p>我仍然使用vim-plug，因为使用它添加、删除、更新插件很容易。如果您使用了很多插件，插件管理器的好处更加明显，因为使用它可以对很多插件进行同时更新。有些插件管理器同时也提供了一些异步功能。</p>

<p>如果您是极简主义者，可以尝试一下Vim软件包。如果您是一名插件重度使用者，您可能需要一个插件管理器。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch22_vimrc/">Ch 22 - Vimrc</a></li>
  <li>下一部分 <a href="../ch24_vim_runtime/">Ch 24 - Vim Runtime</a></li>
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
