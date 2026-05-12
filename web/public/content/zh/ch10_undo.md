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
    

    <title>第10章：撤销</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch10_undo/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch10_undo/">
<meta property="og:title" content="第10章：撤销">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch10_undo/">
<meta name="twitter:title" content="第10章：撤销">
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
        <h1>第10章：撤销</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#撤销undo重做和行撤销undo" id="markdown-toc-撤销undo重做和行撤销undo">撤销(undo)，重做和行撤销(UNDO)</a></li>
  <li><a href="#断点插入操作" id="markdown-toc-断点插入操作">断点插入操作</a></li>
  <li><a href="#撤销树" id="markdown-toc-撤销树">撤销树</a></li>
  <li><a href="#保存撤销记录" id="markdown-toc-保存撤销记录">保存撤销记录</a></li>
  <li><a href="#时间旅行" id="markdown-toc-时间旅行">时间旅行</a></li>
  <li><a href="#聪明地学习撤销操作" id="markdown-toc-聪明地学习撤销操作">聪明地学习撤销操作</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>所有人都会犯各种各样的输入错误。因此对于任何一个现代的软件来说，撤销都是一个很基本的功能。 Vim 的撤销系统不仅支持撤销和取消撤销任何修改，而且支持存取不同的文本形态，让你能控制你输入的所有文本。在本章中，你将会学会如何执行撤销和 取消撤销文本，浏览撤销分支，反复撤销, 以及浏览改动时间线。</p>

<h2 id="撤销undo重做和行撤销undo">撤销(undo)，重做和行撤销(UNDO)</h2>

<p>对于一个基本的 undo 操作，你可以执行 <code class="language-plaintext highlighter-rouge">u</code> 或者 <code class="language-plaintext highlighter-rouge">:undo</code>。</p>

<p>假设你有如下文本(注意”one”下面有一个空行)：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>然后添加另一个文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>如果你执行 <code class="language-plaintext highlighter-rouge">u</code>，Vim 会删除 “two”。</p>

<p>Vim 是如何知道应该恢复多少修改呢？ 答案是，Vim每次仅恢复一次修改，这有点类似于点命令的操作（和 点命令不同之处在于，命令行命令也会被算作一次修改）。</p>

<p>要取消上一次的撤销，可以执行 <code class="language-plaintext highlighter-rouge">Ctrl-r</code> 或者 <code class="language-plaintext highlighter-rouge">:redo</code>。例如上面的例子中，当你执行撤销来删除 “two” 以后，你可以执行 <code class="language-plaintext highlighter-rouge">Ctrl-r</code> 来恢复被删除掉的文本。</p>

<p>Vim 也有另一个命令 <code class="language-plaintext highlighter-rouge">U</code> 可以实现 行撤销 (UNDO) 的功能，执行这个命令会撤销所有最新的修改。</p>

<p>那么，<code class="language-plaintext highlighter-rouge">U</code> 和 <code class="language-plaintext highlighter-rouge">u</code> 的区别是什么呢？首先，<code class="language-plaintext highlighter-rouge">U</code> 会删除 <em>最近修改的行中所有的</em> 的修改，而 <code class="language-plaintext highlighter-rouge">u</code> 一次仅删除一次修改。 其次，执行<code class="language-plaintext highlighter-rouge">u</code> 不会被算作一次修改操作，而执行 <code class="language-plaintext highlighter-rouge">U</code> 则会被算作一次修改。</p>

<p>让我们会的之前的例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>修改第二行的内容为 “three” (<code class="language-plaintext highlighter-rouge">ciwthree&lt;esc&gt;</code>):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
three
</code></pre></div></div>

<p>再次修改第二行的例子为 “four” (<code class="language-plaintext highlighter-rouge">ciwfour&lt;esc&gt;</code>):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
four
</code></pre></div></div>

<p>此时，如果你按下 <code class="language-plaintext highlighter-rouge">u</code>，你会看到 “three”。如果你再次按下 <code class="language-plaintext highlighter-rouge">u</code>，你会看到 “two”。然而，在第二行仍为 “four” 的时候，如果你按下 <code class="language-plaintext highlighter-rouge">U</code>，你会看到</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>执行 <code class="language-plaintext highlighter-rouge">U</code> 会跳过中间所有修改，直接恢复到文件最初的状态（第二行为空）。另外，由于 UNO 实际上是执行了一个新的修改，因此你可以 UNDO 执行过的 UNDO。 执行 <code class="language-plaintext highlighter-rouge">U</code> 后 再次执行 <code class="language-plaintext highlighter-rouge">U</code> 会撤销 自己。假如你连续执行 <code class="language-plaintext highlighter-rouge">U</code>，那么你将看到第二行的文本不停地出现和消失。</p>

<p>就我个人而言，我几乎不会使用 <code class="language-plaintext highlighter-rouge">U</code>，因为很难记住文本最初的样子。（我几乎不使用它）</p>

<p>Vim 可以通过变量 <code class="language-plaintext highlighter-rouge">undolevels</code> 来选择最多可执行 undo 的次数。你可以通过 <code class="language-plaintext highlighter-rouge">:echo &amp;undolevels</code> 来查看当前的配置。我一般设置为 1000。如果你也想设置为 1000 的话，你可以执行 <code class="language-plaintext highlighter-rouge">:set undolevels=1000</code>。不用担心，你可以设置它为任何一个你想设置的值。</p>

<h2 id="断点插入操作">断点插入操作</h2>

<p>在上文中我提到，<code class="language-plaintext highlighter-rouge">u</code> 每次恢复一个修改，类似于点命令。在每次进入 插入模式和退出插入模式之间的任何修改都被定义为一次修改。</p>

<p>如果你执行 <code class="language-plaintext highlighter-rouge">ione two three&lt;esc&gt;</code> 之后，按下 <code class="language-plaintext highlighter-rouge">u</code>，Vim 会同时删除 “one two three”，因为这是一笔修改。如果你每次只输入较短的文本，那这是可接受的；可假设你在一次插入模式中输入了大量的文本，而后退出了插入模式，可很快你意识到这中间有部分错误。此时，如果你按下 <code class="language-plaintext highlighter-rouge">u</code>，你会丢失上一次输入的所有内容。 因此，假设你按下 <code class="language-plaintext highlighter-rouge">u</code> 只删除你上一次输入的一部分文本岂不是会更好。</p>

<p>幸运的是，你可以拆分它。当你在插入模式时，按下 <code class="language-plaintext highlighter-rouge">Ctrl-G u</code> 会生成一个断点。例如，如果你执行 <code class="language-plaintext highlighter-rouge">ione &lt;Ctrl-G u&gt;two &lt;Ctrl-G u&gt;three&lt;esc&gt;</code>，之后你按下<code class="language-plaintext highlighter-rouge">u</code>，你仅会失去文本 “three”，再次执行 <code class="language-plaintext highlighter-rouge">u</code>，会删除 “two”。当你想要输入一长段内容时，应该有选择性地执行断点插入操作。在每一句话的末尾，两个段落的中间，或者每一行代码结束时插入断点是一个很好的选择，这可以帮助你快速从错误中恢复出来。</p>

<p>在插入模式中，执行删除操作时插入断点也非常有用。例如通过 <code class="language-plaintext highlighter-rouge">Ctrl-W</code> 删除光标前的单词时，以及 <code class="language-plaintext highlighter-rouge">Ctrl-U</code>删除光标前的所有文本时。一个朋友建议我使用如下的映射：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>inoremap &lt;c-u&gt; &lt;c-g&gt;u&lt;c-u&gt;
inoremap &lt;c-w&gt; &lt;c-g&gt;u&lt;c-w&gt;
</code></pre></div></div>

<p>通过上述命令，你可以很轻松地恢复被删除的文本。</p>

<h2 id="撤销树">撤销树</h2>

<p>Vim 将每一次修改存储在一个撤销树中。你打开一个空白文件，然后添加一段新文本:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>再插入一段新文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>undo一次:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>插入一段不同的话：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
three
</code></pre></div></div>

<p>再次 undo</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>再次插入另一段话：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
four
</code></pre></div></div>

<p>现在如果你执行 undo,您将丢失刚刚添加的文本 “four” :</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>如果你再次执行 undo 操作：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
</code></pre></div></div>
<p>文本 “one” 也会丢失。对于大部分编辑器来说，找回文本 “two” 和 “three” 都是不可能的事情，但是对于 Vim 来说却不是这样。执行 <code class="language-plaintext highlighter-rouge">g+</code>，你会得到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>

<p>再次执行 <code class="language-plaintext highlighter-rouge">g+</code> ，你将会看到一位老朋友:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>让我们继续执行 <code class="language-plaintext highlighter-rouge">g+</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
three
</code></pre></div></div>

<p>再一次执行 <code class="language-plaintext highlighter-rouge">g+</code> :</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
four
</code></pre></div></div>

<p>在 Vim 中，你每一次执行 <code class="language-plaintext highlighter-rouge">u</code> 去做一次修改时，Vim都会通过创建一个”撤销分支”来保存之前的文本内容。在本例中，你输入”two”后, 执行 <code class="language-plaintext highlighter-rouge">u</code>，然后输入”three”，你就创建了一个叶子分支,保存了含有”two”的文本状态。此时，撤销树已经包含了至少两个叶子节点，主节点包含文本”three”（最新），而另一undo分支节点包含文本“two”。假如你执行了另一次撤销操作并且输入了”four”，那么此时会生成三个节点，一个主节点包含文本”four”, 以及另外两个节点分别存储了”three”和”two”。</p>

<p>为了在几个不同的节点状态间进行切换，你可以执行 <code class="language-plaintext highlighter-rouge">g+</code> 去获取一个较新的状态，以及执行 <code class="language-plaintext highlighter-rouge">g-</code> 去获取一个教旧的状态。 <code class="language-plaintext highlighter-rouge">u</code>， <code class="language-plaintext highlighter-rouge">Ctrl-R</code>， <code class="language-plaintext highlighter-rouge">g+</code>， 和 <code class="language-plaintext highlighter-rouge">g-</code> 之间的区别是，<code class="language-plaintext highlighter-rouge">u</code> and <code class="language-plaintext highlighter-rouge">Ctrl-R</code> 只可以在 <em>main</em> 节点之间进行切换，而<code class="language-plaintext highlighter-rouge">g+</code> 和 <code class="language-plaintext highlighter-rouge">g-</code> 可以在 <em>所有</em> 节点之间进行切换。</p>

<p>Undo 树并不可以很轻松地可视化。我发现一个插件 <a href="https://github.com/simnalamburt/vim-mundo">vim-mundo</a> 对于理解 undo 树很有帮助。花点时间去与它玩耍吧。</p>

<h2 id="保存撤销记录">保存撤销记录</h2>

<p>当你通过 Vim 打开一个文件，并且立即按下 <code class="language-plaintext highlighter-rouge">u</code>，Vim 很可能会显示 “<em>Already at oldest change</em>” 的警告。</p>

<p>要想从最近的一次编辑工作中（在vim关闭文件再打开，算做一次新的编辑工作），在撤销历史中回滚，可以通过 <code class="language-plaintext highlighter-rouge">:wundo</code>命令使Vim 保存一份你的 undo 历史记录。</p>

<p>创建一个文件 <code class="language-plaintext highlighter-rouge">mynumbers.txt</code>. 输入:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
</code></pre></div></div>

<p>插入另一行文件 (确保你要么退出并重新进入插入模式，要么创建了断点):</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>插入新的一行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
three
</code></pre></div></div>

<p>现在，创建你的撤销记录文件。 语法为 <code class="language-plaintext highlighter-rouge">:wundo myundofile</code>。 如果你需要覆盖一个已存在的文件，在 <code class="language-plaintext highlighter-rouge">wundo</code> 之后添加 <code class="language-plaintext highlighter-rouge">!</code>.</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:wundo! mynumbers.undo
</code></pre></div></div>

<p>退出 Vim。</p>

<p>此时，在目录下，应该有<code class="language-plaintext highlighter-rouge">mynumbers.txt</code> 和 <code class="language-plaintext highlighter-rouge">mynumbers.undo</code> 两个文件。再次打开 <code class="language-plaintext highlighter-rouge">mynumbers.txt</code> 文件并且按下 <code class="language-plaintext highlighter-rouge">u</code>，这是没有响应的。因为自打开文件后，你没有执行任何的修改。现在，通过执行 <code class="language-plaintext highlighter-rouge">:rundo</code> 来加载 undo 历史。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:rundo mynumbers.undo
</code></pre></div></div>

<p>此时，如果你按下 <code class="language-plaintext highlighter-rouge">u</code>，Vim 会删除 “three”。再次按下 <code class="language-plaintext highlighter-rouge">u</code>可以删除 “two”。这就好像你从来没有关闭过 Vim 一样。</p>

<p>如果你想要自动加载 undo 历史文件，你可以通过在你的 <code class="language-plaintext highlighter-rouge">.vimrc</code> 文件中添加如下代码：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set undodir=~/.vim/undo_dir
set undofile
</code></pre></div></div>

<p>我认为将所有的 undo 文件集中保存在一个文件夹中最好，例如在 <code class="language-plaintext highlighter-rouge">~/.vim</code> 目录下。 <code class="language-plaintext highlighter-rouge">undo_dir</code> 是随意的。 <code class="language-plaintext highlighter-rouge">set undofile</code> 告诉 Vim 打开 <code class="language-plaintext highlighter-rouge">undofile</code> 这个特性，因为该特性默认是关闭的。现在，无论你何时保存，Vim 都会自动创建和保存撤销的历史记录（在使用<code class="language-plaintext highlighter-rouge">undo_dir</code>目录前，请确保你已经创建了它）。</p>

<h2 id="时间旅行">时间旅行</h2>
<p>是谁说时间旅行不存在。 Vim 可以通过 <code class="language-plaintext highlighter-rouge">:earlier</code> 命令将文本恢复为之前的状态。</p>

<p>假如有如下文本:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one

</code></pre></div></div>
<p>之后你输入了另一行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one
two
</code></pre></div></div>

<p>如果你输入 “two” 的时间少于10秒，那么你可以通过如下命令恢复到 “two” 还没被输入前的状态:</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:earlier 10s
</code></pre></div></div>

<p>你可以使用 <code class="language-plaintext highlighter-rouge">:undolist</code> 去查看之前所做的修改。 <code class="language-plaintext highlighter-rouge">:earlier</code> 可以加上分钟 (<code class="language-plaintext highlighter-rouge">m</code>), 小时 (<code class="language-plaintext highlighter-rouge">h</code>), and 天 (<code class="language-plaintext highlighter-rouge">d</code>) 作为参数。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:earlier 10s    恢复到10秒前的状态
:earlier 10m    恢复到10分钟前的状态
:earlier 10h    恢复到10小时前的状态
:earlier 10d    恢复到10天前的状态

</code></pre></div></div>

<p>另外，它同样接受一个<code class="language-plaintext highlighter-rouge">计数</code>作为参数，告诉vim恢复到老状态的次数。比如，如果运行<code class="language-plaintext highlighter-rouge">:earlier 2</code>,Vim将恢复到2次修改前的状态。功能类似于执行<code class="language-plaintext highlighter-rouge">g-</code>两次。同样，你可以运行<code class="language-plaintext highlighter-rouge">:earlier 10f</code>命令告诉vim恢复到10次保存前的状态。</p>

<p>这些参数同样作用于<code class="language-plaintext highlighter-rouge">:earlier</code>命令的对应版本:<code class="language-plaintext highlighter-rouge">:later</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:later 10s    恢复到10秒后的状态
:later 10m    恢复到10分钟后的状
:later 10h    恢复到10小时后的状
:later 10d    恢复到10天后的状态
:later 10     恢复到新状态10次
:later 10f    恢复到10次保存后的状态
</code></pre></div></div>

<h2 id="聪明地学习撤销操作">聪明地学习撤销操作</h2>

<p><code class="language-plaintext highlighter-rouge">u</code> 和 <code class="language-plaintext highlighter-rouge">Ctrl-R</code> 是两个不可缺少的 Vim 参数。请先学会它们。在我的工作流中，我并不使用 UNDO，然而我认为承认它存在是很好的。下一步，学会如何使用<code class="language-plaintext highlighter-rouge">:earlier</code> 和 <code class="language-plaintext highlighter-rouge">:later</code>，以及时间参数。在这之后，请花些时间理解 undo 树。 插件 <a href="https://github.com/simnalamburt/vim-mundo">vim-mundo</a> 对我的帮助很大。单独输入本章中展示的文本，并且查看撤销树的每一次改变。一旦你掌握它，你看待撤销系统的眼光一定不同。</p>

<p>在本章之前，你学习了如何在项目内查找任何文本，配合撤销，你可以在时间维度上查找任何一个文本。你现在可以通过位置和写入时间找到任何一个你想找的文本。你已经对 Vim 无所不能了。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch09_macros/">Ch 9 - 宏</a></li>
  <li>下一部分 <a href="../ch11_visual_mode/">Ch 11 - 可视模式</a></li>
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
