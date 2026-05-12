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
    

    <title>第7章：点命令</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch07_the_dot_command/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch07_the_dot_command/">
<meta property="og:title" content="第7章：点命令">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch07_the_dot_command/">
<meta name="twitter:title" content="第7章：点命令">
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
        <h1>第7章：点命令</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#用法" id="markdown-toc-用法">用法</a></li>
  <li><a href="#什么才算是修改操作" id="markdown-toc-什么才算是修改操作">什么才算是修改操作？</a></li>
  <li><a href="#重复多行修改操作" id="markdown-toc-重复多行修改操作">重复多行修改操作</a></li>
  <li><a href="#在修改中包含移动操作" id="markdown-toc-在修改中包含移动操作">在修改中包含移动操作</a></li>
  <li><a href="#聪明地学习点命令" id="markdown-toc-聪明地学习点命令">聪明地学习点命令</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>在编辑文本时，我们应该尽可能地避免重复的动作。在这一章节中，你将会学习如何使用点命令来重放上一个修改操作。点命令是最简单的命令，然而又是减少重复操作最为有用的命令。</p>

<h2 id="用法">用法</h2>

<p>正如这个命令的名字一样，你可以通过按下<code class="language-plaintext highlighter-rouge">.</code>键来使用点命令。</p>

<p>比如，如果你想将下面文本中的所有”let“替换为”const”：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
</code></pre></div></div>

<ul>
  <li>首先，使用<code class="language-plaintext highlighter-rouge">/let</code>来进行匹配。</li>
  <li>接着，使用<code class="language-plaintext highlighter-rouge">cwconst&lt;esc&gt;</code>来将”let”替换成”const”。</li>
  <li>第三步，使用<code class="language-plaintext highlighter-rouge">n</code>来找到下一个匹配的位置。</li>
  <li>最后，使用点命令(<code class="language-plaintext highlighter-rouge">.</code>)来重复之前的操作。</li>
  <li>持续地使用<code class="language-plaintext highlighter-rouge">n . n .</code>直到每一个匹配的词都被替换。</li>
</ul>

<p>在这个例子里面，点命令重复的是<code class="language-plaintext highlighter-rouge">cwconst&lt;esc&gt;</code>这一串命令，它能够帮你将需要8次输入的命令简化到只需要敲击一次键盘。</p>

<h2 id="什么才算是修改操作">什么才算是修改操作？</h2>

<p>如果你查看点命令的定义的话(<code class="language-plaintext highlighter-rouge">:h .</code>),文档中说点命令会重复上一个修改操作，那么什么才算是一个修改操作呢？</p>

<p>当你使用普通模式下的命令来更新（添加，修改或者删除）当前缓冲区中的内容时，你就是在执行一个修改操作了。其中的例外是使用命令行命令进行的修改（以<code class="language-plaintext highlighter-rouge">：</code>开头的命令），这些命令不算作修改操作。</p>

<p>在第一个例子中，你看到的<code class="language-plaintext highlighter-rouge">cwconst&lt;esc&gt;</code>就是一个修改操作。现在假设你有以下这么一个句子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancake, potatoes, fruit-juice,
</code></pre></div></div>

<p>我们来删除从这行开始的位置到第一个逗号出现的位置。你可以使用<code class="language-plaintext highlighter-rouge">df,</code>来完成这个操作,使用<code class="language-plaintext highlighter-rouge">.</code>来重复两次直到你将整个句子删除。</p>

<p>让我们再来试试另一个例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancake, potatoes, fruit-juice,
</code></pre></div></div>

<p>这一次你只需要删除所有的逗号，不包括逗号前面的词。我们可以使用<code class="language-plaintext highlighter-rouge">f,</code>来找到第一个逗号，再使用<code class="language-plaintext highlighter-rouge">x</code>来删除光标下的字符。然后使用用<code class="language-plaintext highlighter-rouge">.</code>来重复两次，很简单对不对？等等！这样做行不通(只会重复删除光标下的一个字符，而不是删除逗号)！为什么会这样呢？</p>

<p>在Vim里，修改操作是不包括移动（motions）的，因为移动(motions)不会更新缓冲区的内容。当你运行<code class="language-plaintext highlighter-rouge">f,x</code>，你实际上是在执行两个独立的操作：<code class="language-plaintext highlighter-rouge">f,</code>命令只移动光标，而<code class="language-plaintext highlighter-rouge">x</code>更新缓冲区的内容，只有后者算作修改动作。和之前例子中的<code class="language-plaintext highlighter-rouge">df,</code>进行一下对比的话，你会发现<code class="language-plaintext highlighter-rouge">df,</code>中的<code class="language-plaintext highlighter-rouge">f,</code>告诉删除操作<code class="language-plaintext highlighter-rouge">d</code>哪里需要删除，是整个删除命令<code class="language-plaintext highlighter-rouge">df,</code>的一部分。</p>

<p>让我们想想办法完成这个任务。在你运行<code class="language-plaintext highlighter-rouge">f,</code>并执行<code class="language-plaintext highlighter-rouge">x</code>来删除第一个逗号后，使用<code class="language-plaintext highlighter-rouge">;</code>来继续匹配<code class="language-plaintext highlighter-rouge">f</code>的下一个目标（下一个逗号）。之后再使用<code class="language-plaintext highlighter-rouge">.</code>来重复修改操作，删除光标下的字符。重复<code class="language-plaintext highlighter-rouge">; . ; .</code>直到所有的逗号都被删除。完整的命令即为<code class="language-plaintext highlighter-rouge">f,x;.;.</code>。</p>

<p>再来试试下一个例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancake
potatoes
fruit-juice
</code></pre></div></div>

<p>我们的目标是给每一行的结尾加上逗号。从第一行开始，我们执行命令<code class="language-plaintext highlighter-rouge">A,&lt;esc&gt;j</code>来给结尾加上逗号并移动到下一行。现在我们知道了<code class="language-plaintext highlighter-rouge">j</code>是不算作修改操作的，只有<code class="language-plaintext highlighter-rouge">A,</code>算作修改操作。你可以使用<code class="language-plaintext highlighter-rouge">j . j . </code>来移动并重复修改操作。完整的命令是<code class="language-plaintext highlighter-rouge">A,&lt;esc&gt;j</code>。</p>

<p>从你按下输入命令（A）开始到你退出输入模式（<esc>）之间的所有输入都算作是一整个修改操作。</esc></p>

<h2 id="重复多行修改操作">重复多行修改操作</h2>

<p>假设你有如下的文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
const foo = "bar";
let four = "4";
let five = "5";
let six = "6";
let seven = "7";
let eight = "8";
let nine = "9";
</code></pre></div></div>

<p>你的目标是删除除了含有”foo”那一行以外的所有行。首先，使用<code class="language-plaintext highlighter-rouge">d2j</code>删除前三行。之后跳过”foo”这一行，在其下一行使用点命令两次来删除剩下的六行。完整的命令是<code class="language-plaintext highlighter-rouge">d2jj..</code>。</p>

<p>这里的修改操作是<code class="language-plaintext highlighter-rouge">d2j</code>，<code class="language-plaintext highlighter-rouge">2j</code>不是一个移动(motion)操作，而是整个删除命令的一部分。</p>

<p>我们再来看看下一个例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>zlet zzone = "1";
zlet zztwo = "2";
zlet zzthree = "3";
let four = "4";
</code></pre></div></div>

<p>我们的目标是删除所有的’z’。从第一行第一个字符开始，首先，在块可视化模式下使用<code class="language-plaintext highlighter-rouge">Ctrl-vjj</code>来选中前三行的第一个’z’字母。如果你对块可视化模式不熟悉的话也不用担心，我会在下一章节中进行介绍。在选中前三行的第一个’z’后，使用<code class="language-plaintext highlighter-rouge">d</code>来删除它们。接着用<code class="language-plaintext highlighter-rouge">w</code>移动到下一个z字母上，使用<code class="language-plaintext highlighter-rouge">..</code>重复两次之前选中加删除的动作。完整的命令为<code class="language-plaintext highlighter-rouge">Ctrl-vjjdw..</code>。</p>

<p>你删除一列上的三个’z‘的操作(<code class="language-plaintext highlighter-rouge">Ctrl-vjjd</code>)被看做一整个修改操作。可视化模式中的选择操作可以用来选中多行，作为修改动作的一部分。</p>

<h2 id="在修改中包含移动操作">在修改中包含移动操作</h2>

<p>让我们来重新回顾一下本章中的第一个例子。这个例子中我们使用了<code class="language-plaintext highlighter-rouge">/letcwconst&lt;esc&gt;</code>紧接着<code class="language-plaintext highlighter-rouge">n . n .</code>将下面的文本中的’let’都替换成了’const’。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
</code></pre></div></div>

<p>其实还有更快的方法来完成整个操作。当你使用<code class="language-plaintext highlighter-rouge">/let</code>搜索后，执行<code class="language-plaintext highlighter-rouge">cgnconst&lt;Esc&gt;</code>，然后<code class="language-plaintext highlighter-rouge">. . .</code>。</p>

<p><code class="language-plaintext highlighter-rouge">gn</code>是一个移动并选择的动作，它向前搜索和上一个搜索的模式（本例中为<code class="language-plaintext highlighter-rouge">/let</code>）匹配的位置，并且 <strong>自动对匹配的文本进行可视化模式下的选取</strong>。想要对下一个匹配的位置进行替换的话，你不再需要先移动在重复修改操作（<code class="language-plaintext highlighter-rouge">n . n .</code>），而是简单地使用<code class="language-plaintext highlighter-rouge">. .</code>就能完成。你不需要再进行移动操作了，因为找到下一个匹配的位置并进行选中成为了修改操作的一部分了。</p>

<p>当你在编辑文本时，应该时刻关注像<code class="language-plaintext highlighter-rouge">gn</code>命令这种能一下子做好几件事的移动操作。</p>

<blockquote>
  <p>（译者在这里研究了一会，并做了不少实验，总结规律是：单独的motion(第4章中所说的名词)不算修改操作，而opeartor(动词)+motion(名词)时(请回顾第4章)，motion被视为一个完整的修改操作中的一部分。再看一个例子，看看<code class="language-plaintext highlighter-rouge">/</code>命令是如何被包含在一个修改操作中的：</p>
</blockquote>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>a
b
foo
c
d
foo
e
f
</code></pre></div></div>

<blockquote>
  <p>假设你的光标在第一行的a上，执行命令<code class="language-plaintext highlighter-rouge">d/foo&lt;Esc&gt;</code>，Vim会删除a,b。然后<code class="language-plaintext highlighter-rouge">.</code>，Vim会删除foo, c, d，再按<code class="language-plaintext highlighter-rouge">.</code>，Vim什么也不做，因为后面没有”foo”了。在这个例子中，<code class="language-plaintext highlighter-rouge">/foo</code>是一个motion（名词），是Vim语法(动词+名词：operator + motion)的一部分，前面的<code class="language-plaintext highlighter-rouge">d</code>则是动词。<code class="language-plaintext highlighter-rouge">d/foo&lt;Esc&gt;</code>这条命令的功能是：从当前光标所在位置开始删除，直到遇到”foo”为止。后面的点命令就重复这个功能，第二次按<code class="language-plaintext highlighter-rouge">.</code>之所以Vim什么也不做，是因为找不到下一个匹配了，所以这条命令就失效了。</p>
</blockquote>

<h2 id="聪明地学习点命令">聪明地学习点命令</h2>

<p>点命令的强大之处在于使用仅仅1次键盘敲击代替好几次敲击。对于<code class="language-plaintext highlighter-rouge">x</code>这种只需一次敲击键盘就能完成的修改操作来说，点命令或许不会带来什么收益。但是如果你的上一个修改操作是像<code class="language-plaintext highlighter-rouge">cgnconst&lt;esc&gt;</code>这种复杂命令的话，使用点命令来替代就有非常可观的收益了。</p>

<p>在进行编辑时，思考一下你正将进行的操作是否是可以重复的。举个例子，如果我需要删除接下来的三个单词，是使用<code class="language-plaintext highlighter-rouge">d3w</code>更划算，还是<code class="language-plaintext highlighter-rouge">dw</code>再使用<code class="language-plaintext highlighter-rouge">.</code>两次更划算？之后还会不会再进行删除操作？如果是这样的话，使用<code class="language-plaintext highlighter-rouge">dw</code>好几次确实比<code class="language-plaintext highlighter-rouge">d3w</code>更加合理，因为<code class="language-plaintext highlighter-rouge">dw</code>更加有复用性。在编辑时应该养成“修改操作驱动”的观念。</p>

<p>点命令非常简单但又功能强大，帮助你开始自动化处理简单的任务。在后续的章节中，你将会学习到如何使用Vim的宏命令来自动化处理更多复杂的操作。但是首先，还是让我们来学习一下如何使用寄存器来存取文本吧。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch06_insert_mode/">Ch 6 - 插入模式</a></li>
  <li>下一部分 <a href="../ch08_registers/">Ch 8 - 寄存器</a></li>
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
