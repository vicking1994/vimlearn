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
    

    <title>第22章：vimrc</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch22_vimrc/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch22_vimrc/">
<meta property="og:title" content="第22章：vimrc">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch22_vimrc/">
<meta name="twitter:title" content="第22章：vimrc">
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
        <h1>第22章：vimrc</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#vim如何找到vimrc" id="markdown-toc-vim如何找到vimrc">Vim如何找到Vimrc</a></li>
  <li><a href="#应该把什么放在vimrc中" id="markdown-toc-应该把什么放在vimrc中">应该把什么放在Vimrc中？</a></li>
  <li><a href="#vimrc基础内容" id="markdown-toc-vimrc基础内容">Vimrc基础内容</a>    <ul>
      <li><a href="#插件" id="markdown-toc-插件">插件</a></li>
      <li><a href="#设置" id="markdown-toc-设置">设置</a></li>
      <li><a href="#自定义函数" id="markdown-toc-自定义函数">自定义函数</a></li>
      <li><a href="#自定义命令" id="markdown-toc-自定义命令">自定义命令</a></li>
      <li><a href="#键盘映射" id="markdown-toc-键盘映射">键盘映射</a></li>
    </ul>
  </li>
  <li><a href="#组织管理vimrc" id="markdown-toc-组织管理vimrc">组织管理Vimrc</a>    <ul>
      <li><a href="#划分您的vimrc" id="markdown-toc-划分您的vimrc">划分您的vimrc</a></li>
      <li><a href="#保持单独的一个vimrc文件" id="markdown-toc-保持单独的一个vimrc文件">保持单独的一个Vimrc文件</a></li>
    </ul>
  </li>
  <li><a href="#启动vim时加载不加载vimrc和插件" id="markdown-toc-启动vim时加载不加载vimrc和插件">启动Vim时加载/不加载Vimrc和插件</a></li>
  <li><a href="#聪明地配置vimrc" id="markdown-toc-聪明地配置vimrc">聪明地配置Vimrc</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在先前的章节中，您学习了如何使用Vim。在本章，您将学习如何组织和配置Vimrc。</p>

<h2 id="vim如何找到vimrc">Vim如何找到Vimrc</h2>

<p>对于Vimrc，常见的理解是在根目录下添加一个 <code class="language-plaintext highlighter-rouge">.vimrc</code> 点文件（根据您使用的操作系统，文件路径名可能不同）。</p>

<p>实际上，Vim在多个地方查找vimrc文件。下面是Vim检查的路径：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">$VIMINIT</code></li>
  <li><code class="language-plaintext highlighter-rouge">$HOME/.vimrc</code></li>
  <li><code class="language-plaintext highlighter-rouge">$HOME/.vim/vimrc</code></li>
  <li><code class="language-plaintext highlighter-rouge">$EXINIT</code></li>
  <li><code class="language-plaintext highlighter-rouge">$HOME/.exrc</code></li>
  <li><code class="language-plaintext highlighter-rouge">$VIMRUNTIME/default.vim</code></li>
</ul>

<p>当您启动Vim时，它将在上面列出的6个位置按顺序检查vimrc文件，第一个被找到的vimrc文件将被加载，而其余的将被忽略。</p>

<p>首先，Vim将查找环境变量 <code class="language-plaintext highlighter-rouge">$VIMINIT</code>。如果没有找到，Vim将检查 <code class="language-plaintext highlighter-rouge">$HOME/.vimrc</code>。如果还没找到，VIm就检查 <code class="language-plaintext highlighter-rouge">$HOME/.vim/vimrc</code>。如果Vim找到了vimrc文件，它就停止查找，并使用 <code class="language-plaintext highlighter-rouge">$HOME/.vim/vimrc</code>。</p>

<p>关于第一个位置，<code class="language-plaintext highlighter-rouge">$VIMINIT</code> 是一个环境变量。默认情况下它是未定义的。如果您想将 <code class="language-plaintext highlighter-rouge">~/dotfiles/testvimrc</code> 作为 <code class="language-plaintext highlighter-rouge">$VIMINTI</code> 的值，您可以创建一个包含那个vimrc路径的环境变量。当您运行 <code class="language-plaintext highlighter-rouge">export VIMINIT='let $MYVIMRC="$HOME/dotfiles/testvimrc" | source $MYVIMRC'</code>后，VIm将使用 <code class="language-plaintext highlighter-rouge">~/dotfiles/testvimrc</code> 作为您的vimrc文件。</p>

<p>第二个位置，<code class="language-plaintext highlighter-rouge">$HOME/.vimrc</code> 是很多Vim用户习惯使用的路径。<code class="language-plaintext highlighter-rouge">$HOME</code> 大部分情况下是您的根目录（<code class="language-plaintext highlighter-rouge">~</code>）。如果您有一个 <code class="language-plaintext highlighter-rouge">~/.vimrc</code> 文件，Vim将使用它作为您的vimrc文件。</p>

<p>第三个，<code class="language-plaintext highlighter-rouge">$HOME/.vim/vimrc</code>，位于 <code class="language-plaintext highlighter-rouge">~/.vim</code> 目录中。您可能已经有了一个 <code class="language-plaintext highlighter-rouge">~/.vim</code> 目录用于存放插件、自定义脚本、或视图文件。注意这里的vimrc文件名没有“点”（<code class="language-plaintext highlighter-rouge">$HOME/.vim/.vimrc</code> 不会被识别，但 <code class="language-plaintext highlighter-rouge">$HOME/.vim/vimrc</code>能被识别）。</p>

<p>第四个，<code class="language-plaintext highlighter-rouge">$EXINIT</code> 工作方式与 <code class="language-plaintext highlighter-rouge">$VIMINIT</code> 类似。</p>

<p>第五个，<code class="language-plaintext highlighter-rouge">$HOME/.exrc</code> 工作方式与 <code class="language-plaintext highlighter-rouge">$HOME/.vimrc</code> 类似。</p>

<p>第六个，<code class="language-plaintext highlighter-rouge">$VIMRUNTIME/defaults.vim</code> 是Vim编译时自带的默认vimrc文件。在我的电脑中，我是使用Homebrew安装的Vim8.2，所以我的路径是（<code class="language-plaintext highlighter-rouge">/usr/local/share/vim/vim82</code>）。如果Vim在前5个位置都没有找到vimrc文件，它将使用这个Vim自带的vimrc文件。</p>

<p>在本章剩余部分，我将假设vimrc使用的路径是 <code class="language-plaintext highlighter-rouge">~/.vimrc</code>。</p>

<h2 id="应该把什么放在vimrc中">应该把什么放在Vimrc中？</h2>

<p>我刚开始配置Vimrc时，曾问过一个问题，“我究竟该把什么放在Vimrc文件中？”。</p>

<p>答案是，“任何您想放的东西”。 直接复制粘贴别人的vimrc文件的确是一个诱惑，但您应当抵制这个诱惑。如果您仍然坚持使用别人的vimrc文件，确保您知道这个vimrc干了什么，为什么他/她要用这些设置？以及他/她如何使用这些设置？还有最重要的是，这个vimrc文件是否符合你的实际需要？别人使用并不代表您也要使用。</p>

<h2 id="vimrc基础内容">Vimrc基础内容</h2>

<p>简单地说，一个vimrc是以下内容的集合：</p>
<ul>
  <li>插件</li>
  <li>设置</li>
  <li>自定义函数</li>
  <li>自定义命令</li>
  <li>键盘映射</li>
</ul>

<p>当然还有一些上面没有提到的内容，但总体说，已经涵盖了绝大部分使用场景。</p>

<h3 id="插件">插件</h3>

<p>在前面的章节中，我曾提到很多不同的插件，比如<a href="https://github.com/junegunn/fzf.vim">fzf.vim</a>, <a href="https://github.com/simnalamburt/vim-mundo">vim-mundo</a>, 还有 <a href="https://github.com/tpope/vim-fugitive">vim-fugitive</a>.</p>

<p>十年前，管理插件插件是一个噩梦。但随着很多现代插件管理器的开发，现在安装插件可以在几秒内完成。我现在正在使用<a href="https://github.com/junegunn/vim-plug">vim-plug</a>作为我的插件管理器，所以我在本节中将使用它。相关概念和其他流行的插件管理器应该是类似的。我强烈建议您多试试几个插件管理器，比如：</p>
<ul>
  <li><a href="https://github.com/VundleVim/Vundle.vim">vundle.vim</a></li>
  <li><a href="https://github.com/tpope/vim-pathogen">vim-pathogen</a></li>
  <li><a href="https://github.com/Shougo/dein.vim">dein.vim</a></li>
</ul>

<p>除了上面列出的，还有很多插件管理器，可以随便看看。要想安装 vim-plug，如果您使用的是Unix，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
</code></pre></div></div>

<p>要添加新的插件，将您的插件名(比如，<code class="language-plaintext highlighter-rouge">Plug 'github-username/repository-name'</code>) 放置在 <code class="language-plaintext highlighter-rouge">call plug#begin()</code> 和 <code class="language-plaintext highlighter-rouge">call plug#end()</code> 之间的行中. 所以，如果您想安装 <code class="language-plaintext highlighter-rouge">emmet-vim</code> 和 <code class="language-plaintext highlighter-rouge">nerdtree</code>，将下面的片段放到您的vimrc中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>call plug#begin('~/.vim/plugged')
  Plug 'mattn/emmet-vim'
  Plug 'preservim/nerdtree'
call plug#end()
</code></pre></div></div>

<p>然后保存修改，加载当前vimrc (<code class="language-plaintext highlighter-rouge">:source %</code>), 然后运行 <code class="language-plaintext highlighter-rouge">:PlugInstall</code> 安装插件。</p>

<p>如果以后您想删除不使用的插件，您只需将插件名从 <code class="language-plaintext highlighter-rouge">call</code> 代码块之间移除，保存并加载，然后运行 <code class="language-plaintext highlighter-rouge">:PlugClean</code> 命令将它从机器上删除。</p>

<p>Vim 8 有自己的内置包管理器。您可以查阅 <code class="language-plaintext highlighter-rouge">:h packages</code> 了解更多信息。在后面一章中，我将向您展示如何使用它。</p>

<h3 id="设置">设置</h3>

<p>在任意一个vimrc文件中都可以看到大量的 <code class="language-plaintext highlighter-rouge">set</code> 选项。 如果您在命令行模式中运行 set 命令，它只是暂时的。当您关闭Vim，设置就会丢失。比如，为了避免您每次运行Vim时都必须在命令行模式运行 <code class="language-plaintext highlighter-rouge">:set relativenumber number</code> 命令，您可以将这个命令添加在vimrc中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set relativenumber number
</code></pre></div></div>

<p>有一些设置需要您赋予一个值，比如 <code class="language-plaintext highlighter-rouge">set tabstop=2</code>。想了解一个设置可以接收什么类型的值，可以查看帮助页。</p>

<p>您也可以使用 <code class="language-plaintext highlighter-rouge">let</code> 来代替 <code class="language-plaintext highlighter-rouge">set</code>（确保在选项前添加一个 <code class="language-plaintext highlighter-rouge">&amp;</code>号）。使用 <code class="language-plaintext highlighter-rouge">let</code> ，您可以使用表达式进行赋值。比如，要想仅当某个路径存在时，才将该路径赋予 <code class="language-plaintext highlighter-rouge">'dictionary'</code> 选项：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let s:english_dict = "/usr/share/dict/words"

if filereadable(s:english_dict)
  let &amp;dictionary=s:english_dict
endif
</code></pre></div></div>

<p>在后面的章节中您将了解关于Vimscript赋值和条件的知识。</p>

<p>要查看Vim中所有可用的选项，查阅 <code class="language-plaintext highlighter-rouge">:h E355</code>。</p>

<h3 id="自定义函数">自定义函数</h3>

<p>Vimrc是一个很好的用来放置自定义函数的地方。在后面的章节中您将学习如何写您自己的Vimscript函数。</p>

<h3 id="自定义命令">自定义命令</h3>

<p>您可以使用 <code class="language-plaintext highlighter-rouge">command</code> 创建一个自定义命令行命令。</p>

<p>比如，创建一个用于显示今天日期的基本命令 <code class="language-plaintext highlighter-rouge">GimmeDate</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:command! GimmeDate echo call("strftime", ["%F"])
</code></pre></div></div>

<p>当您运行 <code class="language-plaintext highlighter-rouge">:GimmeDate</code> 时，Vim将显示一个类似 “2021-01-1”的日期。</p>

<p>要创建一个可以接收输入的基本命令，您可以使用 <code class="language-plaintext highlighter-rouge">&lt;args&gt;</code> 。如果您想向 <code class="language-plaintext highlighter-rouge">GimmeDate</code> 传递一个时间/日期格式参数：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:command! GimmeDate echo call("strftime", [&lt;args&gt;])

:GimmeDate "%F"
" 2020-01-01

:GimmeDate "%H:%M"
" 11:30
</code></pre></div></div>

<p>如果您想限定参数的数目，您可以使用 <code class="language-plaintext highlighter-rouge">-nargs</code> 标志。<code class="language-plaintext highlighter-rouge">-nargs=0</code> 表示没有参数，<code class="language-plaintext highlighter-rouge">-nargs=1</code> 表示传递1个参数，<code class="language-plaintext highlighter-rouge">-nargs=+</code> 表示至少1个参数，<code class="language-plaintext highlighter-rouge">-nargs=*</code> 表示传递任意数量的参数，<code class="language-plaintext highlighter-rouge">-nargs=?</code> 表示传递0个或1个参数。如果您想传递n个参数，使用 <code class="language-plaintext highlighter-rouge">-nargs=n</code>（这里 <code class="language-plaintext highlighter-rouge">n</code> 是一个任意整数）。</p>

<p><code class="language-plaintext highlighter-rouge">&lt;args&gt;</code> 有两个变体：<code class="language-plaintext highlighter-rouge">&lt;f-args&gt;</code> 和 <code class="language-plaintext highlighter-rouge">&lt;q-args&gt;</code> 。前者用来向Vimscript函数传递参数，后者用来将用户输入自动转换为字符串。</p>

<p>使用 <code class="language-plaintext highlighter-rouge">args</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:command! -nargs=1 Hello echo "Hello " . &lt;args&gt;
:Hello "Iggy"
" returns 'Hello Iggy'

:Hello Iggy
" Undefined variable error
</code></pre></div></div>

<p>使用 <code class="language-plaintext highlighter-rouge">q-args</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:command! -nargs=1 Hello echo "Hello " . &lt;q-args&gt;
:Hello Iggy
" returns 'Hello Iggy'
</code></pre></div></div>

<p>使用 <code class="language-plaintext highlighter-rouge">f-args</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:function! PrintHello(person1, person2)
:  echo "Hello " . a:person1 . " and " . a:person2
:endfunction

:command! -nargs=* Hello call PrintHello(&lt;f-args&gt;)

:Hello Iggy1 Iggy2
" returns "Hello Iggy1 and Iggy2"
</code></pre></div></div>

<p>当您学了关于Vimscript函数的章节后，上面的函数将更有意义。</p>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h command</code> 和 <code class="language-plaintext highlighter-rouge">:args</code> 了解更多关于command和args的信息。</p>

<h3 id="键盘映射">键盘映射</h3>

<p>如果您发现您重复地执行一些相同的复杂操作，那么为这些复杂操作建立一个键盘映射将会很有用：</p>

<p>比如，在我的vimrc文件中有2个键盘映射：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap &lt;silent&gt; &lt;C-f&gt; :GFiles&lt;CR&gt;

nnoremap &lt;Leader&gt;tn :call ToggleNumber()&lt;CR&gt;
</code></pre></div></div>

<p>在第一个中，我将 <code class="language-plaintext highlighter-rouge">Ctrl-F</code> 映射到 <a href="https://github.com/junegunn/fzf.vim">fzf.vim</a> 插件的 <code class="language-plaintext highlighter-rouge">:Gfiles</code> 命令(快速搜索Git文件)上。在第二个中，我将 <code class="language-plaintext highlighter-rouge">&lt;leader&gt;tn</code> 映射到调用一个自定义函数 <code class="language-plaintext highlighter-rouge">ToggleNumber</code> （切换 <code class="language-plaintext highlighter-rouge">norelativenumber</code> 和 <code class="language-plaintext highlighter-rouge">relativenumber</code> 选项）。<code class="language-plaintext highlighter-rouge">Ctrl-f</code> 映射覆盖了Vim的原生的页面滚动。如果发生冲突，您的映射将会覆盖Vim的设置。因为从几乎从来不用Vim原生的页面滚动功能，所以我认为可以安全地覆盖它。</p>

<p>另外，在 <code class="language-plaintext highlighter-rouge">&lt;Leader&gt;tn</code> 中的 “leader” 键到底是什么?</p>

<p>Vim有一个leader键用来辅助键盘映射。比如，我将 <code class="language-plaintext highlighter-rouge">&lt;leader&gt;tn</code> 映射为运行 <code class="language-plaintext highlighter-rouge">ToggleNumber()</code> 函数。如果没有leader键，我可能会用 <code class="language-plaintext highlighter-rouge">tn</code>，但Vim中的 <code class="language-plaintext highlighter-rouge">t</code> 已经用做其他功能（”till”搜索导航命令）了。有了leader键，我现在先按定义好的leader键作为开头，然后按 <code class="language-plaintext highlighter-rouge">tn</code>，而不用干扰已经存在的命令。您可以设置leader键作为您映射的连续按键的第一个按键。默认Vim使用反斜杠作为leader键（所以 <code class="language-plaintext highlighter-rouge">&lt;Leader&gt;tn</code> 会变成 “反斜杠-t-n”）。</p>

<p>我个人喜欢使用空格 <code class="language-plaintext highlighter-rouge">&lt;Space&gt;</code> 作为leader键，代替默认的反斜杠。要想改变您的leader键，将下面的文本添加到您的vimrc中：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let mapleader = "\&lt;space&gt;"
</code></pre></div></div>

<p>上面的 <code class="language-plaintext highlighter-rouge">nnoremap</code> 命令可以分解为三个部分：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">n</code> 表示普通模式。</li>
  <li><code class="language-plaintext highlighter-rouge">nore</code> 表示禁止递归。</li>
  <li><code class="language-plaintext highlighter-rouge">map</code> 是键盘映射命令。</li>
</ul>

<p>如果不想使用 <code class="language-plaintext highlighter-rouge">nnoremap</code>，您至少也得使用 <code class="language-plaintext highlighter-rouge">nmap</code> (<code class="language-plaintext highlighter-rouge">nmap &lt;silent&gt; &lt;C-f&gt; :Gfiles&lt;CR&gt;</code>)。但是，最好还是使用禁止递归的版本，这样是为了避免键盘映射时潜在的无限循环风险。</p>

<p>如果您进行键盘映射时不使用禁止递归，下面例子演示了会发生什么。假设您想给 <code class="language-plaintext highlighter-rouge">B</code> 添加一个键盘映射，用来在一行的末尾添加一个分号，然后跳回前一个词组（回想一下，<code class="language-plaintext highlighter-rouge">B</code> 是Vim普通模式的一个导航命令，用来跳回前一个词组)。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nmap B A;&lt;esc&gt;B
</code></pre></div></div>

<p>当您按下 <code class="language-plaintext highlighter-rouge">B</code> …哦豁，Vim开始失控了，开始无止尽的添加<code class="language-plaintext highlighter-rouge">;</code>（用 <code class="language-plaintext highlighter-rouge">Ctrl-c</code>终止）。为什么会发生这样的情况？因为在键盘映射 <code class="language-plaintext highlighter-rouge">A;&lt;esc&gt;B</code>中，这个 <code class="language-plaintext highlighter-rouge">B</code>不再是Vim原生的导航命令，它已经被映射到您刚才创建的键盘映射中了。这是您实际上执行的操作序列：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>A;&lt;esc&gt;A;&lt;esc&gt;A;&lt;esc&gt;A;esc&gt;...
</code></pre></div></div>

<p>要解决这个问题，您需要指定键盘映射禁止递归：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap B A;&lt;esc&gt;B
</code></pre></div></div>

<p>现在再按一下 <code class="language-plaintext highlighter-rouge">B</code> 试试。这一次它成功地在行尾添加了一个 <code class="language-plaintext highlighter-rouge">;</code>，然后跳回到前一个词组。这个映射中的 <code class="language-plaintext highlighter-rouge">B</code> 就表示Vim原生的 <code class="language-plaintext highlighter-rouge">B</code>了。</p>

<p>Vim针对不同的模式有不同的键盘映射命令。如果您想创建一个插入模式下的键盘映射 <code class="language-plaintext highlighter-rouge">jk</code>，用来退出插入模式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>inoremap jk &lt;esc&gt;
</code></pre></div></div>

<p>其他模式的键盘映射命令有：<code class="language-plaintext highlighter-rouge">map</code>（普通、可视、选择、以及操作符等待模式）， <code class="language-plaintext highlighter-rouge">vmap</code>（可视、选择）， <code class="language-plaintext highlighter-rouge">smap</code>（选择）， <code class="language-plaintext highlighter-rouge">xmap</code>（可视）， <code class="language-plaintext highlighter-rouge">omap</code>（操作符等待模式）， <code class="language-plaintext highlighter-rouge">map!</code>（插入、命令行）， <code class="language-plaintext highlighter-rouge">lmap</code>（插入，命令行，Lang-arg模式）， <code class="language-plaintext highlighter-rouge">cmap</code>（命令行）， 还有<code class="language-plaintext highlighter-rouge">tmap</code>（终端任务）。在这里我不会详细的讲解它们，要了解更多信息，查阅 <code class="language-plaintext highlighter-rouge">:h map.txt</code>。</p>

<p>创建最直观、最一致、最易于记忆的键盘映射。</p>

<h2 id="组织管理vimrc">组织管理Vimrc</h2>

<p>一段时候键，您的vimrc文件就会变大且复杂得难以阅读。有两种方法让您的vimrc文件保持整洁：</p>
<ul>
  <li>将您的vimrc文件划分为几个文件</li>
  <li>折叠您的vimrc文件</li>
</ul>

<h3 id="划分您的vimrc">划分您的vimrc</h3>

<p>您可以使用Vim的 <code class="language-plaintext highlighter-rouge">:source</code> 命令将您的vimrc文件划分为多个文件。这个命令可以根据给定的文件参数，读取文件中的命令行命令。</p>

<p>让我们在 <code class="language-plaintext highlighter-rouge">~/.vim</code> 下创建一个子文件夹，取名为 <code class="language-plaintext highlighter-rouge">/settings</code>（<code class="language-plaintext highlighter-rouge">~/.vim/settings</code>）。名字可以取为任意您喜欢的名字。</p>

<p>然后你在这个文件夹下创建4个文件：</p>
<ul>
  <li>第三方插件 (<code class="language-plaintext highlighter-rouge">~/.vim/settings/plugins.vim</code>).</li>
  <li>通用设置 (<code class="language-plaintext highlighter-rouge">~/.vim/settings/configs.vim</code>).</li>
  <li>自定义函数 (<code class="language-plaintext highlighter-rouge">~/.vim/settings/functions.vim</code>).</li>
  <li>键盘映射 (<code class="language-plaintext highlighter-rouge">~/.vim/settings/mappings.vim</code>) .</li>
</ul>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vimrc</code> 里面添加:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>source $HOME/.vim/settings/plugins.vim
source $HOME/.vim/settings/configs.vim
source $HOME/.vim/settings/functions.vim
source $HOME/.vim/settings/mappings.vim
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/settings/plugins.vim</code> 里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>call plug#begin('~/.vim/plugged')
  Plug 'mattn/emmet-vim'
  Plug 'preservim/nerdtree'
call plug#end()
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/settings/configs.vim</code> 里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set nocompatible
set relativenumber
set number
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/settings/functions.vim</code> 里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>function! ToggleNumber()
  if(&amp;relativenumber == 1)
    set norelativenumber
  else
    set relativenumber
  endif
endfunc
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">~/.vim/settings/mappings.vim</code> 里面:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>inoremap jk &lt;esc&gt;
nnoremap &lt;silent&gt; &lt;C-f&gt; :GFiles&lt;CR&gt;
nnoremap &lt;Leader&gt;tn :call ToggleNumber()&lt;CR&gt;
</code></pre></div></div>

<p>这样您的vimrc文件依然能够正常工作，但现在它只有4行了。</p>

<p>使用这样的设置，您可以轻易知道到哪去修改配置。如果您要添加一些键盘映射，就将它们添加在 <code class="language-plaintext highlighter-rouge">/mappings.vim</code> 文件中。以后，当您的vimrc变大时，您总是可以新建几个子文件来缩小它的大小。比如，如果您想为主题配色创建相关设置，您可以添加 <code class="language-plaintext highlighter-rouge">~/.vim/settings/themes.vim</code>。</p>

<h3 id="保持单独的一个vimrc文件">保持单独的一个Vimrc文件</h3>

<p>如果您倾向于保持一个单独的vimrc文件，以使它更加便于携带，您可以使用标志折叠让它保持有序。在vimrc文件的顶部添加一下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>" setup folds }
</code></pre></div></div>

<p>Vim能够检测当前buffer所属的文件类型 (<code class="language-plaintext highlighter-rouge">:set filetype?</code>). 如果发现属于 <code class="language-plaintext highlighter-rouge">vim</code> 类型，您可以使用标志折叠。回想一个标志折叠的用法，它使用 <code class="language-plaintext highlighter-rouge">}</code> 来指明折叠的开始和结束。</p>

<p>添加 <code class="language-plaintext highlighter-rouge">}</code> 标志将您的vimrc文件其他部分折叠起来。(别忘了使用 <code class="language-plaintext highlighter-rouge">"</code> 对标志进行注释):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>" setup folds }

" plugins }

" configs }

" functions }

" mappings }
</code></pre></div></div>

<p>您的vimrc文件将会看起来类似下面：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>+-- 6 lines: setup folds -----

+-- 6 lines: plugins ---------

+-- 5 lines: configs ---------

+-- 9 lines: functions -------

+-- 5 lines: mappings --------
</code></pre></div></div>

<h2 id="启动vim时加载不加载vimrc和插件">启动Vim时加载/不加载Vimrc和插件</h2>

<p>如果您要启动Vim时，既不加载Vimrc，也不加载插件，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -u NONE
</code></pre></div></div>

<p>如果您要启动Vim时，不加载Vimrc，但加载插件，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -u NORC
</code></pre></div></div>

<p>如果您要启动Vim时，加载Vimrc，但不加载插件，运行</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim --noplugin
</code></pre></div></div>

<p>如果您要Vim启动加载一个 <em>其他的</em> vimrc, 比如 <code class="language-plaintext highlighter-rouge">~/.vimrc-backup</code>, 运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -u ~/.vimrc-backup
</code></pre></div></div>

<h2 id="聪明地配置vimrc">聪明地配置Vimrc</h2>

<p>Vimrc是定制Vim时的一个重要组件，学习构建您的Vimrc最好是首先阅读他人的vimrc文件，然后逐渐地建立自己的。最好的vimrc并不是谁谁谁使用的，而是最适合您的工作需要和编辑风格的。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch21_multiple_file_operations/">Ch 21 - 多文件操作</a></li>
  <li>下一部分 <a href="../ch23_vim_packages/">Ch 23 - Vim软件包</a></li>
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
