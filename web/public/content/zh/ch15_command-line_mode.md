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
    

    <title>第15章：命令行模式</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch15_command-line_mode/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch15_command-line_mode/">
<meta property="og:title" content="第15章：命令行模式">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch15_command-line_mode/">
<meta name="twitter:title" content="第15章：命令行模式">
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
        <h1>第15章：命令行模式</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#进入和退出命令行模式" id="markdown-toc-进入和退出命令行模式">进入和退出命令行模式</a></li>
  <li><a href="#重复上一个命令" id="markdown-toc-重复上一个命令">重复上一个命令</a></li>
  <li><a href="#命令行模式快捷键" id="markdown-toc-命令行模式快捷键">命令行模式快捷键</a></li>
  <li><a href="#寄存器和自动补全" id="markdown-toc-寄存器和自动补全">寄存器和自动补全</a></li>
  <li><a href="#历史记录窗口" id="markdown-toc-历史记录窗口">历史记录窗口</a></li>
  <li><a href="#更多命令行指令" id="markdown-toc-更多命令行指令">更多命令行指令</a></li>
  <li><a href="#聪明地学习命令行模式" id="markdown-toc-聪明地学习命令行模式">聪明地学习命令行模式</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在前三章中，您已经学习了如何使用搜索命令(<code class="language-plaintext highlighter-rouge">/</code>, <code class="language-plaintext highlighter-rouge">?</code>)、替换命令(<code class="language-plaintext highlighter-rouge">:s</code>)、全局命令(<code class="language-plaintext highlighter-rouge">:g</code>)，以及外部命令(<code class="language-plaintext highlighter-rouge">!</code>)。这些都是命令行模式命令的一些例子。</p>

<p>在本章中，您将学习命令行模式的更多技巧。</p>

<h2 id="进入和退出命令行模式">进入和退出命令行模式</h2>

<p>命令行模式本身也是一种模式，就像普通模式、输入模式、可视模式一样。在这种模式中，光标将转到屏幕底部，此时您可以输入不同的命令。</p>

<p>有 4 种进入命令行模式的方式：</p>
<ul>
  <li>搜索命令 (<code class="language-plaintext highlighter-rouge">/</code>, <code class="language-plaintext highlighter-rouge">?</code>)</li>
  <li>命令行指令 (<code class="language-plaintext highlighter-rouge">:</code>)</li>
  <li>外部命令 (<code class="language-plaintext highlighter-rouge">!</code>)</li>
</ul>

<p>您可以从正常模式或可视模式进入命令行模式。</p>

<p>若要离开命令行模式，您可以使用 <code class="language-plaintext highlighter-rouge">&lt;esc&gt;</code>、<code class="language-plaintext highlighter-rouge">Ctrl-c</code>、<code class="language-plaintext highlighter-rouge">Ctrl-[</code>。</p>

<p><strong>有时其他资料可能会将”命令行指令”称为”Ex 命令”，将”外部命令”称为”过滤命令”或者”叹号运算符”。</strong></p>

<h2 id="重复上一个命令">重复上一个命令</h2>

<p>您可以用 <code class="language-plaintext highlighter-rouge">@:</code> 来重复上一个命令行指令或外部命令。</p>

<p>如果您刚运行 <code class="language-plaintext highlighter-rouge">:s/foo/bar/g</code>，执行 <code class="language-plaintext highlighter-rouge">@:</code> 将重复该替换。如果您刚运行 <code class="language-plaintext highlighter-rouge">:.!tr '[a-z]' '[A-Z]'</code>，执行 <code class="language-plaintext highlighter-rouge">@:</code> 将重复上一次外部命令转换过滤。</p>

<h2 id="命令行模式快捷键">命令行模式快捷键</h2>

<p>在命令行模式中，您可以使用 <code class="language-plaintext highlighter-rouge">Left</code> 或 <code class="language-plaintext highlighter-rouge">Right</code> 方向键，来左右移动一个字符。</p>

<p>如果需要移动一个单词，使用 <code class="language-plaintext highlighter-rouge">Shift-Left</code> 或 <code class="language-plaintext highlighter-rouge">Shift-Right</code> (在某些操作系统中，您需要使用 <code class="language-plaintext highlighter-rouge">Ctrl</code> 而不是 <code class="language-plaintext highlighter-rouge">Shift</code>)。</p>

<p>使用 <code class="language-plaintext highlighter-rouge">Ctrl-b</code>移动到该行的开始，使用 <code class="language-plaintext highlighter-rouge">Ctrl-e</code>移动到该行的结束。</p>

<p>和输入模式类似，在命令行模式中，有三种方法可以删除字符：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-h    删除一个字符
Ctrl-w    删除一个单词
Ctrl-u    删除一整行
</code></pre></div></div>
<p>最后，如果您想像编辑文本文件一样来编辑命令，可以使用 <code class="language-plaintext highlighter-rouge">Ctrl-f</code>。</p>

<p>这样还可以查看过往的命令，并在这种”命令行编辑的普通模式”中编辑它们，同时还能按下 <code class="language-plaintext highlighter-rouge">Enter</code> 来运行它们。</p>

<h2 id="寄存器和自动补全">寄存器和自动补全</h2>

<p>当处于命令行模式时，您可以像在插入模式中一样使用 <code class="language-plaintext highlighter-rouge">Ctrl-r</code> 从Vim寄存器中插入文本。如果您在寄存器 a 中存储了字符串 “foo” ，您可以执行 <code class="language-plaintext highlighter-rouge">Ctrl-r a</code> 从寄存器a中插入该文本。任何在插入模式中您可以从寄存器中获取的内容，在命令行模式中您也可以获取。</p>

<p>另外，您也可以按 <code class="language-plaintext highlighter-rouge">Ctrl-r Ctrl-w</code> 获取当前光标下的单词（按 <code class="language-plaintext highlighter-rouge">Ctrl-r Ctrl-A</code> 获取当前光标下的词组）。还可以按 <code class="language-plaintext highlighter-rouge">Ctrl-r Ctlr-l</code> 获取当前光标所在行。按 <code class="language-plaintext highlighter-rouge">Ctrl-r Ctrl-f</code> 获取光标下的文件名。</p>

<p>您也可以对已存在的命令使用自动补全。要自动补全 <code class="language-plaintext highlighter-rouge">echo</code> 命令，当处于命令行模式时，首先输入 “ec”，接着按下 <code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>，此时您应该能在左下角看到一些 “ec” 开头的 Vim 命令（例如：<code class="language-plaintext highlighter-rouge">echo echoerr echohl echomsg econ</code>）。按下 <code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code> 或 <code class="language-plaintext highlighter-rouge">Ctrl-n</code> 可以跳到下一个选项。按下 <code class="language-plaintext highlighter-rouge">&lt;Shift-Tab&gt;</code> 或 <code class="language-plaintext highlighter-rouge">Ctrl-p</code> 可以回到上一个选项。</p>

<p>一些命令行指令接受文件名作为参数。<code class="language-plaintext highlighter-rouge">edit</code> 就是一个例子，这时候您也可以使用自动补全。当输入 <code class="language-plaintext highlighter-rouge">:e </code> 后（不要忘记空格了），按下 <code class="language-plaintext highlighter-rouge">&lt;Tab&gt;</code>，Vim 将列出所有相关的文件名，这样您就可以进行选择而不必完整的输入它们。</p>

<h2 id="历史记录窗口">历史记录窗口</h2>

<p>您可以查看命令行指令和搜索项的历史记录（要确保在运行 <code class="language-plaintext highlighter-rouge">vim --version</code> 时，Vim 的编译选项中含有<code class="language-plaintext highlighter-rouge">+cmdline_hist</code>）。</p>

<p>运行 <code class="language-plaintext highlighter-rouge">:his :</code> 来查看命令行指令的历史记录：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>##  cmd History
2  e file1.txt
3  g/foo/d
4  s/foo/bar/g
</code></pre></div></div>

<p>Vim 列出了您运行的所有 <code class="language-plaintext highlighter-rouge">:</code> 命令。默认情况下，Vim 存储最后 50 个命令。运行 <code class="language-plaintext highlighter-rouge">:set history=100</code> 可以将 Vim 记住的条目总数更改为 100。</p>

<p>一个更有用的做法是使用命令行历史记录窗口，按<code class="language-plaintext highlighter-rouge">q:</code>将会打开一个可搜索、可编辑的历史记录窗口。假设按下<code class="language-plaintext highlighter-rouge">q:</code>后您有如下的表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>51  s/verylongsubstitutionpattern/pancake/g
52  his :
53  wq
</code></pre></div></div>

<p>如果您当前任务是执行 <code class="language-plaintext highlighter-rouge">s/verylongsubstitutionpattern/donut/g</code>（”pancake”换成了”donut”），为什么不复用 <code class="language-plaintext highlighter-rouge">s/verylongsubstitutionpattern/pancake/g</code> 呢？毕竟，两条命令唯一不同的是替换的单词，”donut” vs “pancake” ，所有其他的内容都是相同的。</p>

<p>当您运行 <code class="language-plaintext highlighter-rouge">q:</code>后，在历史记录中找到 <code class="language-plaintext highlighter-rouge">s/verylongsubstitutionpattern/pancake/g</code>（在这个环境中，您可以使用Vim导航），然后直接编辑它！ 在历史记录窗口中将 “pancake” 改为 “donut” ，然后按 <code class="language-plaintext highlighter-rouge">&lt;Enter</code>。Vim立刻执行 <code class="language-plaintext highlighter-rouge">s/verylongsubstitutionpattern/donut/g</code> 命令，超级方便！</p>

<p>类似地，运行 <code class="language-plaintext highlighter-rouge">:his /</code> 或 <code class="language-plaintext highlighter-rouge">:his ?</code> 可以查看搜索记录。要想打开您可以直接搜索和编辑的搜索历史记录窗口，您可以运行 <code class="language-plaintext highlighter-rouge">q/</code> 和 <code class="language-plaintext highlighter-rouge">q?</code>。</p>

<p>要退出这个窗口，按 <code class="language-plaintext highlighter-rouge">Ctrl-c</code>, <code class="language-plaintext highlighter-rouge">Ctrl-w c</code>, 或输入 <code class="language-plaintext highlighter-rouge">:quit</code>。</p>

<h2 id="更多命令行指令">更多命令行指令</h2>

<p>Vim有几百个内置指令，要查看Vim的所有指令，执行 <code class="language-plaintext highlighter-rouge">:h ex-cmd-index</code> 或 <code class="language-plaintext highlighter-rouge">:h :index</code>。</p>

<h2 id="聪明地学习命令行模式">聪明地学习命令行模式</h2>

<p>对比其他三种模式，命令行模式就像是文本编辑中的瑞士军刀。寥举几例，您可以编辑文本、修改文件和执行命令。本章是命令行模式的零碎知识的集合。同时，Vim 模式的介绍也走向尾声。现在，您已经知道如何使用普通、输入、可视以及命令行模式，您可以比以往更快地使用 Vim 来编辑文本了。</p>

<p>是时候离开 Vim 模式，来了解如何使用 Vim 标记进行更快的导航了。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch14_external_commands/">Ch 14 - 外部命令</a></li>
  <li>下一部分 <a href="../ch16_tags/">Ch 16 - 标签</a></li>
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
