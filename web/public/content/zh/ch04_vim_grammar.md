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
    

    <title>第四章：Vim 语法</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch04_vim_grammar/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch04_vim_grammar/">
<meta property="og:title" content="第四章：Vim 语法">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch04_vim_grammar/">
<meta name="twitter:title" content="第四章：Vim 语法">
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
        <h1>第四章：Vim 语法</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#如何学习一门语言" id="markdown-toc-如何学习一门语言">如何学习一门语言</a></li>
  <li><a href="#语法规则" id="markdown-toc-语法规则">语法规则</a></li>
  <li><a href="#名词动作-motion" id="markdown-toc-名词动作-motion">名词(动作 Motion)</a></li>
  <li><a href="#动词操作符-operator" id="markdown-toc-动词操作符-operator">动词(操作符 Operator)</a></li>
  <li><a href="#动词操作符-operator和名词动作-motions的结合" id="markdown-toc-动词操作符-operator和名词动作-motions的结合">动词（操作符 Operator）和名词（动作 motions）的结合</a></li>
  <li><a href="#更多名词文本对象-text-objects" id="markdown-toc-更多名词文本对象-text-objects">更多名词(文本对象 Text Objects)</a></li>
  <li><a href="#结合性和语法" id="markdown-toc-结合性和语法">结合性和语法</a></li>
  <li><a href="#聪明地学习语法" id="markdown-toc-聪明地学习语法">聪明地学习语法</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>刚接触Vim时很容易被Vim许多复杂的命令吓到，如果你看到一个Vim的用户使用<code class="language-plaintext highlighter-rouge">gUfV</code>或<code class="language-plaintext highlighter-rouge">1GdG</code>，你可能不能立刻想到这些命令是在做什么。这一章中，我将把Vim命令的结构拆分成一个简单的语法规则进行讲解。</p>

<p>这一章将是本书中最重要的一章，一旦你理解了Vim命令的语法结构，你将能够和Vim”说话”。注意，在这一章中当我讨论Vim语言时，我讨论并不是
Vimscript(Vim自带的插件编写和自定义设置的语言)，这里我讨论的是Vim中normal模式的下的命令的通用规则。</p>

<h2 id="如何学习一门语言">如何学习一门语言</h2>

<p>我并不是一个英语为母语的人，当我13岁移民到美国时我学习的英语，我会通过做三件事情建立我的语言能力：</p>
<ol>
  <li>学习语法规则</li>
  <li>扩展我的词汇量</li>
  <li>练习，练习，练习</li>
</ol>

<p>同样的，为了说好Vim语言，你需要学习语法规则，增加词汇量，并且不断练习直到你可以把执行命令变成肌肉记忆。</p>

<h2 id="语法规则">语法规则</h2>

<p>你只需要知道一个Vim语言的语法规则：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>verb + noun # 动词 + 名词
</code></pre></div></div>

<p>这就类似与在英语中的祈使句：</p>
<ul>
  <li>“Eat(verb) a donut(noun)”</li>
  <li>“Kick(verb) a ball(noun)”</li>
  <li>“Learn(verb) the Vim Editor(noun)”</li>
</ul>

<p>现在你需要的就是用Vim中基本的动词和名字来建立你的词汇表</p>

<h2 id="名词动作-motion">名词(动作 Motion)</h2>

<p>我们这里将 <strong>动作 Motion</strong> 作为名词， <strong>动作Motion</strong>用来在Vim中到处移动。下面列出了一些常见的<strong>动作</strong>的例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>h	左
j	下
k	上
l	右
w	向前移动到下一个单词的开头
}	跳转到下一个段落
$	跳转到当前行的末尾
</code></pre></div></div>

<p>在之后的章节你将学习更多的关于<strong>动作</strong>的内容，所以如果你不理解上面这些<strong>动作</strong>也不必担心。</p>

<h2 id="动词操作符-operator">动词(操作符 Operator)</h2>
<p>根据<code class="language-plaintext highlighter-rouge">:h operator</code>，Vim共有16个<strong>操作符</strong>，然而根据我的经验，学习这3个<strong>操作符</strong>在80%的情况下就已经够用了</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>y	yank(复制)
d	delete(删除)
c	change 删除文本，将删除的文本存到寄存器中，进入插入模式
</code></pre></div></div>

<p>顺带说一句，当你yank一段文本后，您可以使用<code class="language-plaintext highlighter-rouge">p</code>将它粘贴到光标后，或使用<code class="language-plaintext highlighter-rouge">P</code>粘贴到光标前。</p>

<h2 id="动词操作符-operator和名词动作-motions的结合">动词（操作符 Operator）和名词（动作 motions）的结合</h2>

<p>现在你已经知道了基本的动词和名词，我们来用一下我们的语法规则，动词和名词的结合！假设你有下面这段文本：</p>

<div class="language-javascript highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">const</span> <span class="nx">learn</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Vim</span><span class="dl">"</span><span class="p">;</span>
</code></pre></div></div>

<ul>
  <li>复制当前位置到行尾的所有内容：<code class="language-plaintext highlighter-rouge">y$</code></li>
  <li>删除当前位置到下一个单词的开头：<code class="language-plaintext highlighter-rouge">dw</code></li>
  <li>修改当前位置到这个段落的结尾：<code class="language-plaintext highlighter-rouge">c}</code></li>
</ul>

<p><strong>动作 motions</strong>也接受数字作为参数(这个部分我将在下个章节展开)，如果你需要向上移动3行，你可以用<code class="language-plaintext highlighter-rouge">3k</code>代替按3次<code class="language-plaintext highlighter-rouge">k</code>，数字可应用在Vim语法中。</p>

<ul>
  <li>向左拷贝2个字符：<code class="language-plaintext highlighter-rouge">y2h</code></li>
  <li>删除后两个单词：<code class="language-plaintext highlighter-rouge">d2w</code></li>
  <li>修改后面两行：<code class="language-plaintext highlighter-rouge">c2j</code></li>
</ul>

<p>目前，你也许需要想很久才能完成一个简单的命令，不过我刚开始时也是这样，我也经历过类似的挣扎的阶段但是不久我的速度就快了起来，你也一样。唯一途径就是重复、重复再重复。</p>

<p>作为补充，行级的 <strong>操作符 operations</strong> (作用在整行中的操作符)在文本编辑中和其他的 <strong>操作符</strong> 一样，Vim允许你通过按两次 <strong>操作符</strong>使它执行行级的操作，例如<code class="language-plaintext highlighter-rouge">dd</code>，<code class="language-plaintext highlighter-rouge">yy</code>，<code class="language-plaintext highlighter-rouge">cc</code>来执行删除，复制或修改整个行。您可以使用其他operations试一下（比如<code class="language-plaintext highlighter-rouge">gUgU</code>）。</p>

<p>666!从这可以看出Vim命令的一种执行模式。但是到目前为止还没有结束，Vim有另一种类型的名词：文本对象(text object)</p>

<h2 id="更多名词文本对象-text-objects">更多名词(文本对象 Text Objects)</h2>

<p>想象一下你现在正在某个被括号包围的文本中例如<code class="language-plaintext highlighter-rouge">(hello Vim)</code>，你现在想要删掉括号中的所有内容，你会怎样快速的完成它？是否有一种方法能够把括号中内容作为整体删除呢？</p>

<p>答案是有的。文本通常是结构化的，特别是代码中，文本经常被放置在小括号、中括号、大括号、引号等当中。Vim提供了一种处理这种结构的文本对象的方法。</p>

<p>文本对象可以被 <strong>操作符 operations</strong> 使用，这里有两类文本对象：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>i + object  内部文本对象
a + object  外部文本对象
</code></pre></div></div>

<p><strong>内部文本对象</strong>选中的部分不包含包围文本对象的空白或括号等，<strong>外部文本对象</strong>则包括了包围内容的空白或括号等对象。外部对象总是比内部对象选中的内容更多。如果你的光标位于一对括号内部，例如<code class="language-plaintext highlighter-rouge">(hello Vim)</code>中：</p>
<ul>
  <li>删除括号内部的内容但保留括号：<code class="language-plaintext highlighter-rouge">di(</code></li>
  <li>删除括号以及内部的内容：<code class="language-plaintext highlighter-rouge">da(</code></li>
</ul>

<p>让我们看一些别的例子，假设你有这样一段Javascript的函数，你的光标停留在”Hello”中的”H”上：</p>

<div class="language-javascript highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">const</span> <span class="nx">hello</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hello Vim</span><span class="dl">"</span><span class="p">);</span>
    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div></div>

<ul>
  <li>删除整个”Hello Vim”：<code class="language-plaintext highlighter-rouge">di(</code></li>
  <li>删除整个函数(被{}包含)：<code class="language-plaintext highlighter-rouge">di{</code></li>
  <li>删除”Hello”这个词：<code class="language-plaintext highlighter-rouge">diw</code></li>
</ul>

<p>文本对象很强大因为你可以在同一个位置指向不同的内容，可以删除一对小括号中的文本，也可以是当前大括号中的函数体，也可以是当前单词。这一点也很好记忆，当你看到<code class="language-plaintext highlighter-rouge">di(</code>，<code class="language-plaintext highlighter-rouge">di{</code>和<code class="language-plaintext highlighter-rouge">diw</code>时，你也可以很好的意识到他们表示的是什么：小括号，大括号，单词。</p>

<p>让我们来看最后一个例子。假设你有这样一些html的标签的文本：</p>

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nt">&lt;div&gt;</span>
  <span class="nt">&lt;h1&gt;</span>Header1<span class="nt">&lt;/h1&gt;</span>
  <span class="nt">&lt;p&gt;</span>Paragraph1<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>Paragraph2<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre></div></div>

<p>如果你的光标位于”Header1”文本上：</p>
<ul>
  <li>删除”Header1”：<code class="language-plaintext highlighter-rouge">dit</code></li>
  <li>删除<code class="language-plaintext highlighter-rouge">&lt;h1&gt;Header1&lt;/h1&gt;</code>：<code class="language-plaintext highlighter-rouge">dat</code></li>
</ul>

<p>如果你的光标在”div”文本上：</p>
<ul>
  <li>删除<code class="language-plaintext highlighter-rouge">h1</code>和所有<code class="language-plaintext highlighter-rouge">p</code>标签的行：<code class="language-plaintext highlighter-rouge">dit</code></li>
  <li>删除所有文本：<code class="language-plaintext highlighter-rouge">dat</code></li>
  <li>删除”div”：<code class="language-plaintext highlighter-rouge">di&lt;</code></li>
</ul>

<p>下面列举的一些通常见到的文本对象：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>w     一个单词
p     一个段落
s     一个句子
(或)  一对()
{或}  一对{}
[或]  一对[]
&lt;或&gt;  一对&lt;&gt;
t     XML标签
"     一对""
'     一对''
`     一对``
</code></pre></div></div>

<p>你可以通过<code class="language-plaintext highlighter-rouge">:h text-objects</code>了解更多</p>

<h2 id="结合性和语法">结合性和语法</h2>

<p>在学习Vim的语法之后，让我们来讨论一下Vim中的结合性以及为什么在文本编辑器中这是一个强大的功能。</p>

<p>结合性意味着你有很多可以组合起来完成更复杂命令的普通命令，就像你在编程中可以通过一些简单的抽象建立更复杂的抽象，在Vim中你可以通过简单的命令的组合执行更复杂的命令。Vim语法正是Vim中命令的可结合性的体现。</p>

<p>Vim的结合性最强大之处体现在它和外部程序结合时，Vim有一个 <strong>过滤操作符</strong><code class="language-plaintext highlighter-rouge">!</code>可以用外部程序过滤我们的文本。假设你有下面这段混乱的文本并且你想把它用tab格式化的更好看的一些：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Id|Name|Cuteness
01|Puppy|Very
02|Kitten|Ok
03|Bunny|Ok
</code></pre></div></div>

<p>这件事情通过Vim命令不太容易完成，但是你可以通过终端提供的命令<code class="language-plaintext highlighter-rouge">column</code>很快的完成它，当你的光标位于”Id”上时，运行<code class="language-plaintext highlighter-rouge">!}column -t -s "|"</code>，你的文本就变得整齐了许多：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Id  Name    Cuteness
01  Puppy   Very
02  Kitten  Ok
03  Bunny   Ok
</code></pre></div></div>

<p>让我们分解一下上面那条命令，动词是<code class="language-plaintext highlighter-rouge">!</code>(<strong>过滤操作符</strong>)，名词是<code class="language-plaintext highlighter-rouge">}</code>(到下一个段落)。<strong>过滤操作符</strong><code class="language-plaintext highlighter-rouge">!</code>接受终端命令作为另一个参数，因此我把<code class="language-plaintext highlighter-rouge">column -t -s "|"</code>传给它。我不想详细描述<code class="language-plaintext highlighter-rouge">column</code>是如何工作的，但是总之它格式化了文本。</p>

<p>假设你不止想格式化你的文本，还想只展示<code class="language-plaintext highlighter-rouge">Ok</code>结尾的行，你知道<code class="language-plaintext highlighter-rouge">awk</code>命令可以做这件事情，那么你可以这样做：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>!}column -t -s "|" | awk 'NR &gt; 1 &amp;&amp; /Ok/{print $0}'
</code></pre></div></div>

<p>结果如下：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>02  Kitten  Ok
03  Bunny   Ok
</code></pre></div></div>
<p>666！管道竟然在Vim中也能起作用。</p>

<p>这就是Vim的结合性的强大之处。你知道的动词 <strong>操作符</strong>，名词 <strong>动作</strong>，终端命令越多，你组建复杂操作的能力成倍增长。</p>

<p>换句话说，假设你只知道四个<strong>动作</strong>：<code class="language-plaintext highlighter-rouge">w, $, }, G</code>和删除操作符(<code class="language-plaintext highlighter-rouge">d</code>)，你可以做8件事：按四种方式移动(<code class="language-plaintext highlighter-rouge">w, $, }, G</code>)和删除4种文本对象(<code class="language-plaintext highlighter-rouge">dw, d$, d}, dG</code>)。如果有一天你学习了小写变大写的<strong>操作符</strong>(<code class="language-plaintext highlighter-rouge">gU</code>)，你的Vim工具箱中多的不是1种工具，而是4种：<code class="language-plaintext highlighter-rouge">gUw, gU$, gU}, gUG</code>。现在你的Vim工具箱中就有12种工具了。如果你知道10个<strong>动作</strong>和5个<strong>操作符</strong>，那么你就有60种工具(50个操作+10个移动)。另外，行号动作(<code class="language-plaintext highlighter-rouge">nG</code>)给你了<code class="language-plaintext highlighter-rouge">n</code>种<strong>动作</strong>，其中<code class="language-plaintext highlighter-rouge">n</code>是你文件中的行数(例如前往第5行，<code class="language-plaintext highlighter-rouge">5G</code>)。搜索动作(<code class="language-plaintext highlighter-rouge">/</code>)实际上给你带来无限数量的<strong>动作</strong>因为你可以搜索任何内容。你知道多少终端命令，外部命令操作符(<code class="language-plaintext highlighter-rouge">!</code>)就给你了多少种过滤工具。使用Vim这种能够组合的工具，所有你知道的东西都可以被串起来完成更复杂的操作。你知道的越多，你就越强大。</p>

<p>这种具有结合性的行为也正符合Unix的哲学：<em>一个命令做好一件事</em>。<strong>动作</strong>只需要做一件事：前往X。<strong>操作符</strong>只需要做一件事：完成Y。通过结合一个<strong>操作符</strong>和一个<strong>动作</strong>，你就获得了YX：在X上完成Y。</p>

<p>甚至，<strong>动作</strong>和<strong>操作符</strong>都是可拓展的，你可以自己创造<strong>动作</strong>和<strong>操作符</strong>去丰富你的Vim工具箱，<a href="https://github.com/kana/vim-textobj-user"><code class="language-plaintext highlighter-rouge">Vim-textobj-user</code></a>插件允许你创建自己的文本对象，同时包含有<a href="https://github.com/kana/vim-textobj-user/wiki">一系列定义好的文本对象</a>。</p>

<p>另外，如果你不知道我刚才使用的<code class="language-plaintext highlighter-rouge">column</code>和<code class="language-plaintext highlighter-rouge">awk</code>命令也没有关系，重要的是Vim可以和终端命令很好的结合起来。</p>

<h2 id="聪明地学习语法">聪明地学习语法</h2>

<p>你刚刚学完Vim唯一的语法规则：</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>verb + noun
</code></pre></div></div>
<p>我学Vim中最大的”AHA moment”之一是当我刚学完大写命令(<code class="language-plaintext highlighter-rouge">gU</code>)时，想要把一个单词变成大写，我本能的运行了<code class="language-plaintext highlighter-rouge">gUiW</code>，它居然成功了，我光标所在的单词都大写了。我正是从那是开始理解Vim的。我希望你也会在不久之后有你自己的”AHA moment”，如果之前没有的话。</p>

<p>这一章的目标是向你展现Vim中的<code class="language-plaintext highlighter-rouge">verb+noun</code>模式，因此之后你就可以像学习一门新的语言一样渐进的学习Vim而不是死记每个命令的组合。</p>

<p>学习这种模式并且理解其中的含义，这是聪明的学习方式。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch03_searching_files/">Ch 3 - 打开和搜索文件</a></li>
  <li>下一部分 <a href="../ch05_moving_in_file/">Ch 5 - 移动文件</a></li>
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
