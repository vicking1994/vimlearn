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
    

    <title>第二章：缓冲区、窗口和标签页</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch02_buffers_windows_tabs/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch02_buffers_windows_tabs/">
<meta property="og:title" content="第二章：缓冲区、窗口和标签页">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch02_buffers_windows_tabs/">
<meta name="twitter:title" content="第二章：缓冲区、窗口和标签页">
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
        <h1>第二章：缓冲区、窗口和标签页</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#buffers" id="markdown-toc-buffers">Buffers</a></li>
  <li><a href="#退出vim" id="markdown-toc-退出vim">退出Vim</a></li>
  <li><a href="#windows" id="markdown-toc-windows">Windows</a></li>
  <li><a href="#tabs" id="markdown-toc-tabs">Tabs</a></li>
  <li><a href="#三维移动" id="markdown-toc-三维移动">三维移动</a></li>
  <li><a href="#用聪明的方法使用bufferswindows以及tabs" id="markdown-toc-用聪明的方法使用bufferswindows以及tabs">用聪明的方法使用Buffers、Windows、以及Tabs</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>(译者注：在Vim中，Buffers缓冲区，Windows窗口，Tabs选项卡是专有名词。为适应不同读者的翻译习惯，确保没有歧义，本文将不对Buffers、Windows、Tabs这三个词进行翻译)。</p>

<p>如果您使用过现代文本编辑器，您很可能对Windows和tabs这两个概念是非常熟悉的。但Vim使用了三个关于显示方面的抽象概念：buffers, windows, 还有tabs。在本章，我将向您解释什么是buffers, windows和tabs，以及它们在Vim中如何工作。</p>

<p>在开始之前，确保您的vimrc文件中开启了<code class="language-plaintext highlighter-rouge">set hidden</code>选项。若没有配置该选项，当您想切换buffer且当前buffer没有保存时，Vim将提示您保存文件（如果您想快速切换，您不会想要这个提示）。我目前还没有讲vimrc，如果您没有vimrc配置文件，那就创建一个。它通常位于根目录下，名字叫<code class="language-plaintext highlighter-rouge">.vimrc</code>。我的vimrc位于<code class="language-plaintext highlighter-rouge">~/.vimrc</code>。要查看您自己的vimrc文件应该放置在哪，可以在Vim命令模式中输入<code class="language-plaintext highlighter-rouge">:h vimrc</code>。在vimrc文件中，添加：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set hidden
</code></pre></div></div>

<p>保存好vimrc文件，然后激活它(在vimrc文件中运行<code class="language-plaintext highlighter-rouge">:source %</code>)。</p>

<h2 id="buffers">Buffers</h2>

<p><em>buffer</em>到底是什么？</p>

<p>buffer就是内存中的一块空间，您可以在这里写入或编辑文本。当您在Vim中打开一个文件时，文件的数据就与一个buffer绑定。当您在Vim中打开3个文件，您就有3个buffers。</p>

<p>创建两个可使用的空文件，分别名为<code class="language-plaintext highlighter-rouge">file1.js</code>和<code class="language-plaintext highlighter-rouge">file2.js</code>（如果可能，尽量使用Vim来创建）。在终端中运行下面的命令：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim file1.js
</code></pre></div></div>

<p>这时您看到的是<code class="language-plaintext highlighter-rouge">file1.js</code>的 <em>buffer</em> 。每当您打开一个新文件，Vim总是会创建一个新的buffer。</p>

<p>退出Vim。这一次，打开两个新文件：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim file1.js file2.js
</code></pre></div></div>

<p>Vim当前显示的是<code class="language-plaintext highlighter-rouge">file1.js</code>的buffer，但它实际上创建了两个buffers：<code class="language-plaintext highlighter-rouge">file1.js</code>buffer和<code class="language-plaintext highlighter-rouge">file2.js</code>buffer。运行<code class="language-plaintext highlighter-rouge">:buffers</code>命令可以查看所有的buffers（另外，您也可以使用<code class="language-plaintext highlighter-rouge">:ls</code>和<code class="language-plaintext highlighter-rouge">:files</code>命令）。您应该会 <em>同时</em> 看到列出来的<code class="language-plaintext highlighter-rouge">file1.js</code>和<code class="language-plaintext highlighter-rouge">file2.js</code>。运行<code class="language-plaintext highlighter-rouge">vim file1 file2 file3 ... filen</code>创建n个buffers。每一次您打开一个新文件，Vim就为这个文件创建一个新的buffer。</p>

<p>要遍历所有buffers，有以下几种方法：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">:bnext</code> 切换至下一个buffer（<code class="language-plaintext highlighter-rouge">:bprevious</code>切换至前一个buffer）。</li>
  <li><code class="language-plaintext highlighter-rouge">:buffer</code> + 文件名。（按下<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>键Vim会自动补全文件名）。</li>
  <li><code class="language-plaintext highlighter-rouge">:buffer</code> + <code class="language-plaintext highlighter-rouge">n</code>, n是buffer的编号。比如，输入<code class="language-plaintext highlighter-rouge">:buffer 2</code>将使您切换到buffer #2。</li>
  <li>按下<code class="language-plaintext highlighter-rouge">Ctrl-O</code>将跳转至跳转列表中旧的位置，对应的，按下<code class="language-plaintext highlighter-rouge">Ctrl-I</code>将跳转至跳转列表中新的位置。这并不是属于buffer的特有方法，但它可以用来在不同的buffers中跳转。我将在第5章详细讲述关于跳转的知识。</li>
  <li>按下<code class="language-plaintext highlighter-rouge">Ctrl-^</code>跳转至先前编辑过的buffer。</li>
</ul>

<p>一旦Vim创建了一个buffer，它将保留在您的buffers列表中。若想删除它，您可以输入<code class="language-plaintext highlighter-rouge">:bdelete</code>。这条命令也可以接收一个buffer编号（<code class="language-plaintext highlighter-rouge">:bdelete 3</code>将删除buffer #3）或一个文件名（<code class="language-plaintext highlighter-rouge">:bdelete</code>然后按<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>自动补全文件名）。</p>

<p>我学习buffer时最困难的事情就是理解buffer如何工作，因为我当时的思维已经习惯了使用主流文本编辑器时关于窗口的概念。要理解buffer，可以打个很好的比方，就是打牌的桌面。如果您有2个buffers，就像您有一叠牌（2张）。您只能看见顶部的牌，虽然您知道在它下面还有其他的牌。如果您看见<code class="language-plaintext highlighter-rouge">file1.js</code>buffer，那么<code class="language-plaintext highlighter-rouge">file1.js</code>就是顶部的牌。虽然您看不到其他的牌<code class="language-plaintext highlighter-rouge">file2.js</code>，但它实际上就在那。如果您切换buffers到<code class="language-plaintext highlighter-rouge">file2.js</code>，那么<code class="language-plaintext highlighter-rouge">file2.js</code>这张牌就换到了顶部，而<code class="language-plaintext highlighter-rouge">file1.js</code>就换到了底部。</p>

<p>如果您以前没有用过Vim，这是一个新的概念。花上几分钟理解一下。</p>

<h2 id="退出vim">退出Vim</h2>

<p>顺带说一句，如果您已经打开了多个buffers，您可以使用quit -all来关闭所有的buffers：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:qall
</code></pre></div></div>

<p>如果您想关闭所有buffers但不保存，仅需要在后面加<code class="language-plaintext highlighter-rouge">!</code>（叹号）就行了：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:qall!
</code></pre></div></div>

<p>若要保存所有buffers然后退出，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:wqall
</code></pre></div></div>

<h2 id="windows">Windows</h2>

<p>一个window就是在buffer上的一个视口。如果您使用过主流的编辑器，Windows这个概念应该很熟悉。大部分文本编辑器具有显示多个窗口的能力。在Vim中，您同样可以拥有多个窗口。</p>

<p>让我们从终端再次打开<code class="language-plaintext highlighter-rouge">file1.js</code>：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim file1.js
</code></pre></div></div>

<p>先前我说过，您看到的是<code class="language-plaintext highlighter-rouge">file1.js</code>的buffer。但这个说法并不完整，现在这句话得更正一下，您看到的是<code class="language-plaintext highlighter-rouge">file1.js </code>的buffer通过 <strong>一个窗口</strong> 显示出来。窗口就是您查看的buffer所使用的视口。</p>

<p>先不忙急着退出Vim，在Vim中运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:split file2.js
</code></pre></div></div>

<p>现在您看到的是两个buffers通过 <strong>两个窗口</strong> 显示出来。上面的窗口显示的是<code class="language-plaintext highlighter-rouge">file2.js</code>的buffer。而下面的窗口显示的是<code class="language-plaintext highlighter-rouge">file1.js</code>的buffer。</p>

<p>如果您想在窗口之间导航，使用这些快捷键：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-W H    移动光标到左边的窗口
Ctrl-W J    移动光标到下面的窗口
Ctrl-W K    移动光标到上面的窗口
Ctrl-W L    移动光标到右边的窗口
</code></pre></div></div>

<p>现在，在Vim中运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:vsplit file3.js
</code></pre></div></div>

<p>您现在看到的是三个窗口显示三个buffers。一个窗口显示<code class="language-plaintext highlighter-rouge">file3.js</code>的buffer，一个窗口显示<code class="language-plaintext highlighter-rouge">file2.js</code>的buffer，还有一个窗口显示<code class="language-plaintext highlighter-rouge">file1.js</code>的buffer。</p>

<p>您可以使多个窗口显示同一个buffer。当光标位于左上方窗口时，输入：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:buffer file2.js
</code></pre></div></div>

<p>现在两个窗口显示的都是<code class="language-plaintext highlighter-rouge">file2.js</code>的buffer。如果您现在在这两个窗口中的某一个输入内容，您会看到所有显示<code class="language-plaintext highlighter-rouge">file2.js</code>buffer的窗口都在实时更新。</p>

<p>要关闭当前的窗口，您可以按<code class="language-plaintext highlighter-rouge">Ctrl-W C</code>或输入<code class="language-plaintext highlighter-rouge">:quit</code>。当您关闭一个窗口后，buffers仍然会在列表中。（可以运行<code class="language-plaintext highlighter-rouge">:buffers</code>来确认这一点）。</p>

<p>这里有一些普通模式下关于窗口的命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-W V    打开一个新的垂直分割的窗口
Ctrl-W S    打开一个新的水平分割的窗口
Ctrl-W C    关闭一个窗口
Ctrl-W O    除了当前窗口，关闭所有其他的窗口
</code></pre></div></div>

<p>另外，下面的列表列出了一些有用的关于windows的命令行命令</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:vsplit filename    垂直分割当前窗口，并在新窗口中打开名为filename的文件。
:split filename     水平分割当前窗口，并在新窗口中打开名为filename的文件。
:new filename       创建一个新窗口并打开名为filename的文件。
</code></pre></div></div>

<p>花一点时间理解上面的知识。要了解更多信息，可以查看帮助<code class="language-plaintext highlighter-rouge">:h window</code>。</p>

<h2 id="tabs">Tabs</h2>

<p>Tabs就是windows的集合。它就像窗口的布局。在大部分的现代文本编辑器（还有现代互联网浏览器）中，一个tab意味着打开一个文件/页面，当您关闭标签，相应的文件/页面就消失了。但在Vim中，tab并不表示打开了一个文件。当您在Vim中关闭一个tab，您并不是关闭一个文件。您仅仅关闭了窗口布局。文件的数据依然存储在内存中的buffers中。</p>

<p>让我们运行几个命令看看Vim中tabs的功能。打开<code class="language-plaintext highlighter-rouge">file1.js</code>：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim file1.js
</code></pre></div></div>

<p>若要在新tab中打开<code class="language-plaintext highlighter-rouge">file2.js</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tabnew file2.js
</code></pre></div></div>

<p>当然您可以按<code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>让Vim自动补全 <em>新tab</em> 中将要打开的文件名（啰嗦几句，请理解作者的幽默 ）。</p>

<p>下面的列表列出了一些有用的关于tab导航的命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:tabnew file.txt    在tab中打开一个文件
:tabclose           关闭当前tab
:tabnext            切换至下一个tab
:tabprevious        切换至前一个tab
:tablast            切换至最后一个tab
:tabfirst           切换至第一个tab
</code></pre></div></div>

<p>您可以输入<code class="language-plaintext highlighter-rouge">gt</code>切换到下一个标签页（对应的，可以用<code class="language-plaintext highlighter-rouge">gT</code>切换到前一个标签页）。您也可以传递一个数字作为参数给<code class="language-plaintext highlighter-rouge">gt</code>，这个数字是tab的编号。若想切换到第3个tab，输入<code class="language-plaintext highlighter-rouge">3gt</code>。</p>

<p>拥有多个tabs的好处是，您可以在不同的tab中使用不同的窗口布局。也许，您想让您的第1个tab包含3个垂直分割的窗口，然后让第2个tab为水平分割和垂直分割混合的窗口布局。tab是完成这件工作的完美工具!</p>

<p>若想让Vim启动时就包含多个tabs，您可以在终端中运行如下命令：</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim <span class="nt">-p</span> file1.js file2.js file3.js
</code></pre></div></div>

<h2 id="三维移动">三维移动</h2>

<p>在windows之间移动就像在笛卡尔坐标系的二维平面上沿着X-Y轴移动。您可以使用<code class="language-plaintext highlighter-rouge">Ctrl-W H/J/K/L</code>移动到上面、右侧、下面、以及左侧的窗口。</p>

<p>在buffer之间移动就像在笛卡尔坐标系的Z轴上穿梭。想象您的buffer文件在Z轴上呈线性排列，您可以使用<code class="language-plaintext highlighter-rouge">:bnext</code>和<code class="language-plaintext highlighter-rouge">bprevious</code>在Z轴上一次一个buffer地遍历。您也可以使用<code class="language-plaintext highlighter-rouge">:buffer 文件名/buffer编号</code>在Z轴上跳转到任意坐标。</p>

<p>结合window和buffer的移动，您可以在 <em>三维空间</em> 中移动。您可以使用window导航命令移动到上面、右侧、下面、或左侧的窗口（X-Y平面导航）。因为每个window都可能包含了多个buffers，您可以使用buffer移动命令向前、向后移动（Z轴导航）。</p>

<h2 id="用聪明的方法使用bufferswindows以及tabs">用聪明的方法使用Buffers、Windows、以及Tabs</h2>

<p>您已经学习了什么是buffers、windows、以及tabs，也学习了它们如何在Vim中工作。现在您对它们有了更好地理解，您可以把它们用在您自己的工作流程中。</p>

<p>每个人都有不同的工作流程，以下示例是我的工作流程：</p>

<ul>
  <li>首先，对于某个特定任务，我先使用buffers存储所有需要的文件。Vim就算打开很多buffer，速度一般也不会减慢。另外打开多个buffers并不会使我的屏幕变得拥挤。我始终只会看到1个buffer（假设我只有1个window），这可以让我注意力集中在1个屏幕上。当我需要使用其他文件时，可以快速切换至对应文件的buffer。</li>
  <li>当比对文件、读文档、或追踪代码流时，我使用多窗口来一次查看多个buffers。我尽量保持屏幕上的窗口数不超过3个，因为超过3个屏幕将变得拥挤（我使用的是小型笔记本）。当相应工作完成后，我就关掉多余的窗口。窗口越少可以使注意力更集中。</li>
  <li>我使用<a href="https://github.com/tmux/tmux/wiki">tmux</a>windows来代替tabs。通常一次使用多个tmux窗口。比如，一个tmux窗口用来写客户端代码，一个用来写后台代码。</li>
</ul>

<p>由于编辑风格不同，我的工作流程可能和您的工作流程不同，这没关系。您可以在实践中去探索适合您自己工作流程的编码风格。</p>

<h2 id="链接">链接</h2>

<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch01_starting_vim/">Ch 1 - 起步</a></li>
  <li>下一部分 <a href="../ch03_searching_files/">Ch 3 - 打开和搜索文件</a></li>
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
