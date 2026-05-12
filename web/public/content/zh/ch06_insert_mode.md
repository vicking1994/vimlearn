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
    

    <title>第六章：输入模式</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch06_insert_mode/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch06_insert_mode/">
<meta property="og:title" content="第六章：输入模式">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch06_insert_mode/">
<meta name="twitter:title" content="第六章：输入模式">
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
        <h1>第六章：输入模式</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#进入输入模式的方法" id="markdown-toc-进入输入模式的方法">进入输入模式的方法</a></li>
  <li><a href="#退出输入模式的方法" id="markdown-toc-退出输入模式的方法">退出输入模式的方法</a></li>
  <li><a href="#重复输入模式" id="markdown-toc-重复输入模式">重复输入模式</a></li>
  <li><a href="#在输入模式中删除大块文本" id="markdown-toc-在输入模式中删除大块文本">在输入模式中删除大块文本</a></li>
  <li><a href="#用寄存器进行输入" id="markdown-toc-用寄存器进行输入">用寄存器进行输入</a></li>
  <li><a href="#页面滚动" id="markdown-toc-页面滚动">页面滚动</a></li>
  <li><a href="#自动补全" id="markdown-toc-自动补全">自动补全</a></li>
  <li><a href="#执行普通模式下的命令" id="markdown-toc-执行普通模式下的命令">执行普通模式下的命令</a></li>
  <li><a href="#聪明地学习输入模式" id="markdown-toc-聪明地学习输入模式">聪明地学习输入模式</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>输入模式是大部分文本编辑器的默认模式，在这个模式下，所敲即所得。</p>

<p>尽管如此，这并不代表输入模式没什么好学的。Vim的输入模式包含许多有用功能。在这一章节中，你将能够学到如何利用Vim输入模式中的特性来提升你的输入效率。</p>

<h2 id="进入输入模式的方法">进入输入模式的方法</h2>

<p>我们有很多方式从普通模式进入输入模式，下面列举出了其中的一些方法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>i    从光标之前的位置开始输入文本
I    从当前行第一个非空字符之前的位置之前开始输入文本
a    在光标之后的位置追加文本
A    在当前行的末尾追加文本
o    在光标位置下方新起一行并开始输入文本
O    在光标位置的上方新起一行并开始输入文本
s    删除当前光标位置的字符并开始输入文本
S    删除当前行并开始输入文本
gi   从当前缓冲区上次结束输入模式的地方开始输入文本
gI   在当前行的第一列的位置开始输入文本
</code></pre></div></div>

<p>值得注意的是这些命令的小写/大写模式，每一个小写命令都有一个与之对应的大写命令。如果你是初学者，不用担心记不住以上整个命令列表，可以从 <code class="language-plaintext highlighter-rouge">i</code> 和 <code class="language-plaintext highlighter-rouge">a</code>两条命令开始，这两条命令足够在入门阶段使用了，之后再逐渐地掌握更多其他的命令。</p>

<h2 id="退出输入模式的方法">退出输入模式的方法</h2>

<p>下面列出了一些从输入模式退出到普通模式的方法：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;esc&gt;     退出输入模式进入普通模式
Ctrl-[    退出输入模式进入普通模式
Ctrl-c    与 Ctrl-[ 和 &lt;esc&gt;功能相同, 但是不检查缩写
</code></pre></div></div>

<p>我发现<code class="language-plaintext highlighter-rouge"> esc</code>键在键盘上太远了，很难够到，所以我在我的机器上将<code class="language-plaintext highlighter-rouge"> caps lock</code> 映射成了<code class="language-plaintext highlighter-rouge">esc</code>键。 如果你搜索Bill Joy（Vi的作者）的ADM-3A 键盘， 你会发现<code class="language-plaintext highlighter-rouge">esc</code>键并不是像现在流行的键盘布局一样在键盘的最左上方，而是在<code class="language-plaintext highlighter-rouge">q</code>键的左边，所以我认为将<code class="language-plaintext highlighter-rouge">caps lock</code> 映射成<code class="language-plaintext highlighter-rouge">esc</code>键是合理的。</p>

<p>另一个Vim用户中常见的习惯是用以下的配置方法在输入模式中把<code class="language-plaintext highlighter-rouge">esc</code>映射到<code class="language-plaintext highlighter-rouge">jj</code>或者<code class="language-plaintext highlighter-rouge">jk</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>inoremap jj &lt;esc&gt;
inoremap jk &lt;esc&gt;
</code></pre></div></div>

<h2 id="重复输入模式">重复输入模式</h2>

<p>你可以在进入输入模式之前传递一个计数参数. 比如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>10i
</code></pre></div></div>

<p>如果你输入“hello world!”然后退出输入模式， Vim将重复这段文本10次。这个方法对任意一种进入输入模式的方式都有效（如：<code class="language-plaintext highlighter-rouge">10I</code>, <code class="language-plaintext highlighter-rouge">11a</code>, <code class="language-plaintext highlighter-rouge">12o</code>）</p>

<h2 id="在输入模式中删除大块文本">在输入模式中删除大块文本</h2>

<p>当你输入过程中出现一些输入错误时，一直重复地用<code class="language-plaintext highlighter-rouge">backspace</code>来删除的话会非常地繁琐。更为合理的做法是切换到普通模式并使用<code class="language-plaintext highlighter-rouge">d</code>来删除错误。或者，你能用以下命令在输入模式下就删除一个或者多个字符：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-h    删除一个字符
Ctrl-w    删除一个单词
Ctrl-u    删除一整行
</code></pre></div></div>

<p>此外，这些快捷键也支持在 命令行模式 和 Ex模式 中使用（命令行模式和Ex模式将会在之后的章节中介绍）</p>

<h2 id="用寄存器进行输入">用寄存器进行输入</h2>

<p>寄存器就像是内存里的暂存器一样，可供存储和取出文本。在输入模式下，可以使用快捷键<code class="language-plaintext highlighter-rouge">Ctrl-r</code>加上寄存器的标识来从任何有标识的寄存器输入文本。有很多标识可供使用，但是在这一章节中你只需要知道以（a-z)命名的寄存器是可以使用的就足够了。</p>

<p>让我们在一个具体的例子中展示寄存器的用法，首先你需要复制一个单词到寄存器a中，这一步可以用以下这条命令来完成：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>"ayiw
</code></pre></div></div>

<ul>
  <li><code class="language-plaintext highlighter-rouge">"a</code> 告诉Vim你下一个动作的目标地址是寄存器a</li>
  <li><code class="language-plaintext highlighter-rouge">yiw</code> 复制一个内词（inner word），可以回顾Vim语法章节查看具体语法。</li>
</ul>

<p>现在寄存器a存放着你刚复制的单词。在输入模式中，使用以下的快捷键来粘贴存放在寄存器a中文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-r a
</code></pre></div></div>

<p>Vim中存在很多种类型的寄存器，我会在后面的章节中介绍更多他们的细节。</p>

<h2 id="页面滚动">页面滚动</h2>

<p>你知道在输入模式中也是可以进行页面滚动的吗？在输入模式下，如果你使用快捷键<code class="language-plaintext highlighter-rouge">Ctrl-x</code>进入<code class="language-plaintext highlighter-rouge">Ctrl-x</code>子模式，你可以进行一些额外操作，页面滚动正是其中之一。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-x Ctrl-y    向上滚动页面
Ctrl-x Ctrl-e    向下滚动页面
</code></pre></div></div>

<h2 id="自动补全">自动补全</h2>

<p>Vim在进入<code class="language-plaintext highlighter-rouge">Ctrl-x</code>子模式后（和页面滚动一样），有一个自带的自动补全功能。尽管它不如intellisense或者其他的语言服务器协议（LSP）一样好用，但是也算是一个锦上添花的内置功能了。</p>

<p>下面列出了一些适合入门时学习的自动补全命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-x Ctrl-l	   补全一整行
Ctrl-x Ctrl-n	   从当前文件中补全文本
Ctrl-x Ctrl-i	   从引用（include）的文件中补全文本
Ctrl-x Ctrl-f	   补全一个文件名
</code></pre></div></div>

<p>当你触发自动补全时，Vim会显示一个选项弹窗，可以使用<code class="language-plaintext highlighter-rouge">Ctrl-n</code>和<code class="language-plaintext highlighter-rouge">Ctrl-p</code>来分别向上和向下浏览选项。</p>

<p>Vim也提供了两条不需要进入<code class="language-plaintext highlighter-rouge">Ctrl-x</code>模式就能使用的命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-n             使用下一个匹配的单词进行补全
Ctrl-p             使用上一个匹配的单词进行补全
</code></pre></div></div>

<p>通常Vim会关注所有缓冲区（buffer）中的文本作为自动补全的文本来源。如果你打开了一个缓冲区，其中一行是”Chocolate donuts are the best”：</p>

<ul>
  <li>当你输入”Choco”然后使用快捷键<code class="language-plaintext highlighter-rouge">Ctrl-x Ctrl-l</code>， Vim会进行匹配并输出这一整行的文本。</li>
  <li>当你输入”Choco”然后使用快捷键<code class="language-plaintext highlighter-rouge">Ctrl-p</code>，Vim会进行匹配并输出”Chocolate”这个单词。</li>
</ul>

<p>Vim的自动补全是一个相当大的话题，以上只是冰山一角，想要进一步学习的话可以使用<code class="language-plaintext highlighter-rouge">:h ins-completion</code>命令进行查看。</p>

<h2 id="执行普通模式下的命令">执行普通模式下的命令</h2>

<p>你知道Vim可以在输入模式下执行普通模式的命令吗？</p>

<p>在输入模式下， 如果你按下<code class="language-plaintext highlighter-rouge">Ctrl-o</code>，你就会进入到<code class="language-plaintext highlighter-rouge">insert-normal</code>（输入-普通）子模式。如果你关注一下左下角的模式指示器，通常你将看到<code class="language-plaintext highlighter-rouge">-- INSERT --</code> ，但是按下<code class="language-plaintext highlighter-rouge">Ctrl-o</code>后就会变为<code class="language-plaintext highlighter-rouge">-- (insert) --</code>。 在这一模式下，你可以执行一条普通模式的命令，比如你可以做以下这些事：</p>

<p><strong>设置居中以及跳转</strong></p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-o zz       居中窗口
Ctrl-o H/M/L    跳转到窗口的顶部/中部/底部
Ctrl-o 'a       跳转到标志'a处
</code></pre></div></div>

<p><strong>重复文本</strong></p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-o 100ihello    输入 "hello" 100 次
</code></pre></div></div>

<p><strong>执行终端命令</strong></p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-o !! curl https://google.com    运行curl命令
Ctrl-o !! pwd                        运行pwd命令
</code></pre></div></div>

<p><strong>快速删除</strong></p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-o dtz    从当前位置开始删除文本，直到遇到字母"z"
Ctrl-o D      从当前位置开始删除文本，直到行末
</code></pre></div></div>

<h2 id="聪明地学习输入模式">聪明地学习输入模式</h2>

<p>如果你和我一样是从其他文本编辑器转到Vim的，你或许也会觉得一直待在输入模式下很有诱惑力，但是我强烈反对你在没有输入文本时，却仍然待在输入模式下。应该养成当你的双手没有在输入时，就退出到普通模式的好习惯。</p>

<p>当你需要进行输入时，先问问自己将要输入的文本是否已经存在。如果存在的话，试着复制或者移动这段文本而不是手动输入它。再问问自己是不是非得进入输入模式，试试能不能尽可能地使用自动补全来进行输入。尽量避免重复输入同一个单词。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch05_moving_in_file/">Ch 5 - 移动文件</a></li>
  <li>下一部分 <a href="../ch07_the_dot_command/">Ch 7 - 点命令</a></li>
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
