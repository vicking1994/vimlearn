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
    

    <title>第一章：起步</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch01_starting_vim/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch01_starting_vim/">
<meta property="og:title" content="第一章：起步">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch01_starting_vim/">
<meta name="twitter:title" content="第一章：起步">
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
        <h1>第一章：起步</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#安装" id="markdown-toc-安装">安装</a></li>
  <li><a href="#vim命令" id="markdown-toc-vim命令">Vim命令</a></li>
  <li><a href="#退出vim" id="markdown-toc-退出vim">退出Vim</a></li>
  <li><a href="#保存文件" id="markdown-toc-保存文件">保存文件</a></li>
  <li><a href="#帮助" id="markdown-toc-帮助">帮助</a></li>
  <li><a href="#打开文件" id="markdown-toc-打开文件">打开文件</a></li>
  <li><a href="#参数" id="markdown-toc-参数">参数</a></li>
  <li><a href="#打开多个窗口" id="markdown-toc-打开多个窗口">打开多个窗口</a></li>
  <li><a href="#挂起" id="markdown-toc-挂起">挂起</a></li>
  <li><a href="#聪明的启动vim" id="markdown-toc-聪明的启动vim">聪明的启动Vim</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在本章，您将了解从终端启动Vim的几种不同方法。我写这本教程时使用的Vim版本是8.2。如果您使用Neovim或老版本的Vim，大部分情况下方法是通用的，但注意个别命令可能无效。</p>

<h2 id="安装">安装</h2>

<p>我不会给出在某台特定机器上安装Vim的详细指令。好消息是，大部分Unix-based电脑应该预装了Vim。如果没有，大部分发行版也应该有关于如何安装Vim的指令。</p>

<p>从Vim的官方网站或官方仓库可以获得下载链接：</p>

<ul>
  <li><a href="https://www.vim.org/download.php">Vim 官网</a></li>
  <li><a href="https://github.com/vim/vim">Vim 官方仓库</a></li>
  <li><a href="https://hub.fastgit.org/vim/vim">Vim 官方仓库镜像</a></li>
</ul>

<h2 id="vim命令">Vim命令</h2>

<p>当您安装好Vim后，在终端运行以下命令：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim
</code></pre></div></div>

<p>您应该会看到一个介绍界面。这就是您用来处理文本的工作区。不像其它大部分文本编辑器和IDE，Vim是一个模式编辑器。如果您想输入”hello”，您需要使用’i’命令切换到插入模式。按下’ihello<Esc>'可以在工作区插入文本"hello"。</Esc></p>

<h2 id="退出vim">退出Vim</h2>

<p>有好几种不同的方法都可以退出Vim。（译者注：在stackflow论坛上，有个著名的问题“如何退出Vim”，五年来，有超过100万开发者遇到相同的问题。^_^，这件事已经成为了开发者中的一个梗）。最常用的退出方法是在Vim中输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:quit
</code></pre></div></div>

<p>您可以使用简写<code class="language-plaintext highlighter-rouge">:q</code>。这是一个命令行模式的命令(command-line mode：Vim的另一种模式)。如果您在普通模式输入<code class="language-plaintext highlighter-rouge">:</code>，光标将移动到屏幕底部，在这里您可以输入命令。在后面的第15章，您会学到关于命令行模式更多信息。如果您处于插入模式，按下<code class="language-plaintext highlighter-rouge">:</code>将会在屏幕上直接显示”:”(冒号)。因此，您需要按下<code class="language-plaintext highlighter-rouge">&lt;Esc&gt;</code>键切换回普通模式。顺带说一下，在命令行模式也可以通过按<code class="language-plaintext highlighter-rouge">&lt;Esc&gt;</code>键切换回普通模式。您将会注意到，在Vim的好几种模式下都可以通过按<code class="language-plaintext highlighter-rouge">&lt;Esc&gt;</code>键切回普通模式。</p>

<h2 id="保存文件">保存文件</h2>

<p>若要保存您的修改，在Vim中输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:write
</code></pre></div></div>

<p>您也可以输入简写’:w’。如果这是一个新建的文件，您必须给出文件名才能保存。下面的命令使文件保存为名为’file.txt’的文件，在Vim命令行运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:w file.txt
</code></pre></div></div>

<p>如果想保存并退出，可以将’:w’和’:q’命令联起来，在Vim命令行中输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:wq
</code></pre></div></div>

<p>如果想不保存修改而强制退出，可以在’:q’命令后加’!’（叹号）,在Vim命令行中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:q!
</code></pre></div></div>

<h2 id="帮助">帮助</h2>

<p>在本指南全文中，我将向您提及好几种Vim的帮助页面。您可以通过输入<code class="language-plaintext highlighter-rouge">:help {命令}</code>(<code class="language-plaintext highlighter-rouge">:h</code>是简写)进入相关命令的帮助文档。可以向<code class="language-plaintext highlighter-rouge">:h</code>命令传递主题、命令名作为参数。比如，如果想查询退出Vim的方法，在vim中输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:h write-quit
</code></pre></div></div>

<p>我是怎么知道应该搜索”write-quit”这个关键词的呢？实际上我也不知道，我仅仅只是输入’:h quit’，然后按<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>。Vim会自动显示相关联的关键词供用户选择。如果您需要查询一些信息，只需要输入<code class="language-plaintext highlighter-rouge">:h</code>后接关键词，然后按<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>。</p>

<h2 id="打开文件">打开文件</h2>

<p>如果想在终端中使用Vim打开名为(‘hello1.txt’)，在终端中运行：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim hello1.txt
</code></pre></div></div>

<p>可以一次打开多个文件，在终端中：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim hello1.txt hello2.txt hello3.txt
</code></pre></div></div>

<p>Vim会在不同的buffers中打开’hello1.txt’，’hello2.txt’，’hello3.txt’。在下一章您将学到关于buffers的知识。</p>

<h2 id="参数">参数</h2>

<p>您可以在终端中向<code class="language-plaintext highlighter-rouge">vim</code>命令传递参数。</p>

<p>如果想查看Vim的当前版本，在终端中运行：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">--version</span>
</code></pre></div></div>

<p>终端中将显示您当前Vim的版本和所有支持的特性，’+’表示支持的特性，’-‘表示不支持的特性。本教程中的一些操作需要您的Vim支持特定的特性。比如，在后面的章节中提到可以使用<code class="language-plaintext highlighter-rouge">:history</code>查看Vim的命令行历史记录。您的Vim必须包含<code class="language-plaintext highlighter-rouge">+cmdline_history</code>这一特性，这条命令才能正常使用。一般情况下，如果您通过主流的安装源下载Vim的话，您安装的Vim是支持所有特性的，</p>

<p>您在终端里做的很多事情都可以在Vim内部实现。比如，在Vim程序中也可以查看当前Vim版本，您可以运行下面的命令，在Vim中输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:version
</code></pre></div></div>

<p>如果您想打开<code class="language-plaintext highlighter-rouge">hello.txt</code>文件后迅速执行一条命令，您可以向<code class="language-plaintext highlighter-rouge">vim</code>传递一个<code class="language-plaintext highlighter-rouge">+{cmd}</code>选项。</p>

<p>在Vim中，您可以使用<code class="language-plaintext highlighter-rouge">:s</code>命令（<code class="language-plaintext highlighter-rouge">substitue</code>的缩写）替换文本。如果您想打开<code class="language-plaintext highlighter-rouge">hello.txt</code>后立即将所有的”pancake”替换成”bagel”，在终端中：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim +%s/pancake/bagel/g hello.txt
</code></pre></div></div>

<p>该命令可以被叠加，在终端中：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim +%s/pancake/bagel/g +%s/bagel/egg/g +%s/egg/donut/g hello.txt
</code></pre></div></div>

<p>Vim会将所有”pancake” 实例替换为”bagel”，然后将所有”bagel”替换为”egg”，然后将所有”egg”替换为”donut”（在后面的章节中您将学到如何替换）。</p>

<p>您同样可以使用<code class="language-plaintext highlighter-rouge">c</code>标志来代替<code class="language-plaintext highlighter-rouge">+</code>语法，在终端中：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-c</span> %s/pancake/bagel/g hello.txt
vim <span class="nt">-c</span> %s/pancake/bagel/g <span class="nt">-c</span> %s/bagel/egg/g <span class="nt">-c</span> %s/egg/donut/g hello.txt
</code></pre></div></div>

<h2 id="打开多个窗口">打开多个窗口</h2>

<p>您可以使用<code class="language-plaintext highlighter-rouge">o</code>和<code class="language-plaintext highlighter-rouge">O</code>选项使Vim打开后分别显示为水平或垂直分割的窗口。</p>

<p>若想将Vim打开为2个水平分割的窗口，在终端中运行：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-o2</span>
</code></pre></div></div>

<p>若想将Vim打开为5个水平分割的窗口，在终端中运行：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-o5</span>
</code></pre></div></div>

<p>若想将Vim打开为5个水平分割的窗口，并使前两个窗口显示<code class="language-plaintext highlighter-rouge">hello1.txt</code>和<code class="language-plaintext highlighter-rouge">hello2.txt</code>的内容，在终端中运行：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-o5</span> hello1.txt hello2.txt
</code></pre></div></div>

<p>若想将Vim打开为2个垂直分割的窗口、5个垂直分割的窗口、5个垂直分割窗口并显示2个文件，在终端中分别运行以下命令：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-O2</span>
vim <span class="nt">-O5</span>
vim <span class="nt">-O5</span> hello1.txt hello2.txt
</code></pre></div></div>

<h2 id="挂起">挂起</h2>

<p>如果您编辑时想将Vim挂起，您可以按下<code class="language-plaintext highlighter-rouge">Ctrl-z</code>。同样，您也可以使用<code class="language-plaintext highlighter-rouge">:stop</code>或<code class="language-plaintext highlighter-rouge">:suspend</code>命令达到相同的效果。若想从挂起状态返回，在终端中运行<code class="language-plaintext highlighter-rouge">fg</code>命令。</p>

<h2 id="聪明的启动vim">聪明的启动Vim</h2>

<p>您可以向<code class="language-plaintext highlighter-rouge">vim</code>命令传递不同的选项(option)和标志(flag)，就像其他终端命令一样。其中一个选项是命令行命令（<code class="language-plaintext highlighter-rouge">+{cmd}</code>或<code class="language-plaintext highlighter-rouge">-c cmd</code>）。当您读完本教程学到更多命令后，看看您是否能将相应命令应用到Vim的启动中。同样，作为一个终端命令，您可以将<code class="language-plaintext highlighter-rouge">vim</code>命令和其他终端命令联合起来。比如，您可以将<code class="language-plaintext highlighter-rouge">ls</code>命令的输出重定向到Vim中编辑，命令是<code class="language-plaintext highlighter-rouge">ls -l | vim -</code>。</p>

<p>若要了解更多Vim终端命令，查看<code class="language-plaintext highlighter-rouge">man vim</code>。若要了解更多关于Vim编辑器的知识，继续阅读本教程，多使用<code class="language-plaintext highlighter-rouge">:help</code>命令。</p>

<h2 id="链接">链接</h2>

<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch00_read_this_first/">Ch 0 - 请先阅读</a></li>
  <li>下一部分 <a href="../ch02_buffers_windows_tabs/">Ch 2 - 缓冲区，窗口和选项卡</a></li>
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
