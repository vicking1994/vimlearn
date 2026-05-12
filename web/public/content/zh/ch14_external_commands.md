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
    

    <title>第14章：外部命令</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch14_external_commands/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch14_external_commands/">
<meta property="og:title" content="第14章：外部命令">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch14_external_commands/">
<meta name="twitter:title" content="第14章：外部命令">
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
        <h1>第14章：外部命令</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#bang-命令" id="markdown-toc-bang-命令">Bang 命令</a></li>
  <li><a href="#将外部命令的标准输出stdout读入vim" id="markdown-toc-将外部命令的标准输出stdout读入vim">将外部命令的标准输出STDOUT读入Vim</a></li>
  <li><a href="#将缓冲区内容写入外部命令" id="markdown-toc-将缓冲区内容写入外部命令">将缓冲区内容写入外部命令</a></li>
  <li><a href="#执行外部命令" id="markdown-toc-执行外部命令">执行外部命令</a></li>
  <li><a href="#过滤文本" id="markdown-toc-过滤文本">过滤文本</a></li>
  <li><a href="#普通模式命令" id="markdown-toc-普通模式命令">普通模式命令</a></li>
  <li><a href="#聪明地学习外部命令" id="markdown-toc-聪明地学习外部命令">聪明地学习外部命令</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在Unix系统内部，您会发现许多小型的，超专业化命令，每个命令只做一件事（而且能很好地完成）。您可以将这些命令链接在一起以共同解决一个复杂的问题。如果可以从Vim内部使用这些命令，那不是很好吗？</p>

<p>答案是肯定的!在本章中，您将学习如何扩展Vim以使其与外部命令无缝协作。</p>

<h2 id="bang-命令">Bang 命令</h2>

<p>Vim有一个Bang(<code class="language-plaintext highlighter-rouge">!</code>)命令，可以执行三件事：</p>

<p>1.将外部命令的STDOUT读入当前缓冲区。
2.将缓冲区的内容作为STDIN写入外部命令。
3.从Vim内部执行外部命令。</p>

<p>让我们一个个认真看一下。</p>

<h2 id="将外部命令的标准输出stdout读入vim">将外部命令的标准输出STDOUT读入Vim</h2>

<p>将外部命令的STDOUT读入当前缓冲区的语法为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:r !{cmd}
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:r</code>是Vim的读命令。如果不带<code class="language-plaintext highlighter-rouge">!</code>使用它，则可以使用它来获取文件的内容。如果当前目录中有文件<code class="language-plaintext highlighter-rouge">file1.txt</code>，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:r file1.txt
</code></pre></div></div>

<p>Vim会将<code class="language-plaintext highlighter-rouge">file1.txt</code>的内容放入当前缓冲区。</p>

<p>如果您运行的<code class="language-plaintext highlighter-rouge">:r</code>命令后面跟一个<code class="language-plaintext highlighter-rouge">!</code>和外部命令，则该命令的输出将插入到当前缓冲区中。要获取<code class="language-plaintext highlighter-rouge">ls</code>命令的结果，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:r !ls
</code></pre></div></div>

<p>它返回类似下列的文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>file1.txt
file2.txt
file3.txt
</code></pre></div></div>

<p>您可以从<code class="language-plaintext highlighter-rouge">curl</code>命令读取数据：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:r !curl -s 'https://jsonplaceholder.typicode.com/todos/1'
</code></pre></div></div>

<p>r命令也接受一个地址：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:10r !cat file1.txt
</code></pre></div></div>

<p>现在，将在第10行之后插入来自运行<code class="language-plaintext highlighter-rouge">cat file.txt</code>的STDOUT。</p>

<h2 id="将缓冲区内容写入外部命令">将缓冲区内容写入外部命令</h2>

<p><code class="language-plaintext highlighter-rouge">:w</code>命令除了保存文件，还可以用来将当前缓冲区中的文本作为作为STDIN传递给外部命令。语法为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:w !cmd
</code></pre></div></div>

<p>如果您具有以下表达式：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>console.log("Hello Vim");
console.log("Vim is awesome");
</code></pre></div></div>

<p>确保在计算机中安装了<a href="https://nodejs.org/en/">node</a>，然后运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:w !node
</code></pre></div></div>

<p>Vim将使用<code class="language-plaintext highlighter-rouge">node</code>执行Javascript表达式来打印”Hello Vim”和”Vim is awesome”。</p>

<p>当使用<code class="language-plaintext highlighter-rouge">：w</code>命令时，Vim使用当前缓冲区中的所有文本，与global命令类似（大多数命令行命令，如果不给它传递范围，则仅对当前行执行该命令）。如果您通过<code class="language-plaintext highlighter-rouge">：w</code>来指定地址：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:2w !node
</code></pre></div></div>

<p>“Vim”只使用第二行中的文本到<code class="language-plaintext highlighter-rouge">node</code>解释器中。</p>

<p><code class="language-plaintext highlighter-rouge">:w !node</code>和<code class="language-plaintext highlighter-rouge">:w! node</code>形式上区别很小，但功能上相隔千里。使用<code class="language-plaintext highlighter-rouge">:w !node</code>，您是将当前缓冲区中的文本”写入”到外部命令<code class="language-plaintext highlighter-rouge">node</code>中。用<code class="language-plaintext highlighter-rouge">:w! node</code>，则您将强制保存文件并将其命名为”node”。</p>

<h2 id="执行外部命令">执行外部命令</h2>

<p>您可以使用bang命令从Vim内部执行外部命令。语法为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!cmd
</code></pre></div></div>

<p>要以长格式查看当前目录的内容，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!ls -ls
</code></pre></div></div>

<p>要终止在PID 3456上运行的进程，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!kill -9 3456
</code></pre></div></div>

<p>您可以在不离开Vim的情况下运行任何外部命令，因此您可以专注于自己的任务。</p>

<h2 id="过滤文本">过滤文本</h2>

<p>如果给<code class="language-plaintext highlighter-rouge">!</code>范围，则可用于过滤文本。假设您有：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello vim
hello vim
</code></pre></div></div>

<p>让我们使用<code class="language-plaintext highlighter-rouge">tr</code> (translate)命令将当前行大写。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:.!tr '[:lower:]' '[:upper:]'
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>HELLO VIM
hello vim
</code></pre></div></div>

<p>命令分解：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">.!</code> 在当前行执行filter命令。</li>
  <li><code class="language-plaintext highlighter-rouge">!tr '[:lower:]' '[:upper:]'</code> 调用<code class="language-plaintext highlighter-rouge">tr</code>外部命令将所有小写字符替换为大写字符。</li>
</ul>

<p>必须传递范围以运行外部命令作为过滤器。如果您尝试在没有<code class="language-plaintext highlighter-rouge">.</code>的情况下运行上述命令(<code class="language-plaintext highlighter-rouge">:!tr '[:lower:]' '[:upper:]'</code>)，则会看到错误。</p>

<p>假设您需要使用awk命令删除两行的第二列：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%!awk "{print $1}"
</code></pre></div></div>

<p>结果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello
hello
</code></pre></div></div>

<p>命令分解：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:%!</code>  在所有行(<code class="language-plaintext highlighter-rouge">%</code>)上执行filter命令。</li>
  <li><code class="language-plaintext highlighter-rouge">awk "{print $1}"</code> 仅打印匹配项的第一列。</li>
</ul>

<p>您可以使用管道运算符（<code class="language-plaintext highlighter-rouge">|</code>）链接多个命令，就像在终端中一样。假设您有一个包含这些美味早餐的文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>name price
chocolate pancake 10
buttermilk pancake 9
blueberry pancake 12
</code></pre></div></div>

<p>如果您需要根据价格对它们进行排序，并且仅以均匀的间距显示菜单，则可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%!awk 'NR &gt; 1' | sort -nk 3 | column -t
</code></pre></div></div>

<p>结果：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>buttermilk pancake 9
chocolate pancake 10
blueberry pancake 12
</code></pre></div></div>

<p>命令分解：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:%!</code> 将过滤器应用于所有行(<code class="language-plaintext highlighter-rouge">%</code>)。</li>
  <li><code class="language-plaintext highlighter-rouge">awk 'NR &gt; 1'</code> 仅从第二行开始显示文本。</li>
  <li><code class="language-plaintext highlighter-rouge">|</code>链接下一个命令。</li>
  <li><code class="language-plaintext highlighter-rouge">sort -nk 3</code>使用列3（<code class="language-plaintext highlighter-rouge">k 3</code>）中的值对数字进行排序（<code class="language-plaintext highlighter-rouge">n</code>）。</li>
  <li><code class="language-plaintext highlighter-rouge">column -t</code>以均匀的间距组织文本。</li>
</ul>

<h2 id="普通模式命令">普通模式命令</h2>

<p>在普通模式下，Vim有一个过滤运算符（<code class="language-plaintext highlighter-rouge">!</code>）。如果您有以下问候：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello vim
hola vim
bonjour vim
salve vim
</code></pre></div></div>

<p>要大写当前行和下面的行，可以运行：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>!jtr '[a-z]' '[A-Z]'
</code></pre></div></div>

<p>命令分解：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">!j</code> 运行常规命令过滤器运算符（<code class="language-plaintext highlighter-rouge">!</code>），目标是当前行及其下方的行。回想一下，因为它是普通模式运算符，所以适用语法规则”动词+名词”。</li>
  <li><code class="language-plaintext highlighter-rouge">tr '[a-z]' '[A-Z]'</code>将小写字母替换为大写字母。</li>
</ul>

<p>filter normal命令仅适用于至少一行以上的motion或至少一行以上的文本对象。如果您尝试运行<code class="language-plaintext highlighter-rouge">!iwtr'[az]''[AZ]'</code>（在内部单词上执行<code class="language-plaintext highlighter-rouge">tr</code>），您会发现它在整个行上都应用了tr命令，而不是光标所在的单词。</p>

<h2 id="聪明地学习外部命令">聪明地学习外部命令</h2>

<p>Vim不是IDE。它是一种轻量级的模式编辑器，通过设计可以高度扩展。由于这种可扩展性，您可以轻松访问系统中的任何外部命令。这样，Vim离成为IDE仅一步之遥。有人说Unix系统是有史以来的第一个IDE。</p>

<p>Bang 命令的有用程度与您知道多少个外部命令相关。如果您的外部命令知识有限，请不要担心。我还有很多东西要学。以此作为持续学习的动力。每当您需要过滤文本时，请查看是否存在可以解决问题的外部命令。不必担心掌握所有的命令。只需学习完成当前任务所需的内容即可。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch13_the_global_command/">Ch 13 - 全局命令</a></li>
  <li>下一部分 <a href="../ch15_command-line_mode/">Ch 15 - 命令行模式</a></li>
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
