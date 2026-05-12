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
    

    <title>第五章：在文件中移动</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch05_moving_in_file/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch05_moving_in_file/">
<meta property="og:title" content="第五章：在文件中移动">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch05_moving_in_file/">
<meta name="twitter:title" content="第五章：在文件中移动">
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
        <h1>第五章：在文件中移动</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#字符导航" id="markdown-toc-字符导航">字符导航</a></li>
  <li><a href="#相对行号" id="markdown-toc-相对行号">相对行号</a></li>
  <li><a href="#对移动计数" id="markdown-toc-对移动计数">对移动计数</a></li>
  <li><a href="#单词导航" id="markdown-toc-单词导航">单词导航</a></li>
  <li><a href="#当前行导航" id="markdown-toc-当前行导航">当前行导航</a></li>
  <li><a href="#句子和段落导航" id="markdown-toc-句子和段落导航">句子和段落导航</a></li>
  <li><a href="#匹配导航" id="markdown-toc-匹配导航">匹配导航</a></li>
  <li><a href="#行号导航" id="markdown-toc-行号导航">行号导航</a></li>
  <li><a href="#窗格导航" id="markdown-toc-窗格导航">窗格导航</a></li>
  <li><a href="#滚动" id="markdown-toc-滚动">滚动</a></li>
  <li><a href="#搜索导航" id="markdown-toc-搜索导航">搜索导航</a></li>
  <li><a href="#位置标记" id="markdown-toc-位置标记">位置标记</a></li>
  <li><a href="#跳转" id="markdown-toc-跳转">跳转</a></li>
  <li><a href="#聪明地学习导航" id="markdown-toc-聪明地学习导航">聪明地学习导航</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>一开始，通过键盘移动会让你感觉特别慢特别不自在，但是不要放弃！一旦你习惯了它，比起鼠标你可以更快的在文件中去到任何地方。</p>

<p>这一章，你将学习必要的移动以及如何高效的使用它们。 记住，这一章所讲的并不是Vim的全部移动命令(motions)，我们的目标是介绍有用的移动来快速提高效率。 如果你需要学习更多的移动命令，查看<code class="language-plaintext highlighter-rouge">:h motion.txt</code>。</p>

<h2 id="字符导航">字符导航</h2>

<p>最基本的移动单元是上下左右移动一个字符。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>h   左
j   下
k   上
l   右
</code></pre></div></div>

<p>你也可以通过方向键进行移动，如果你只是初学者，使用任何你觉得最舒服的方法都没有关系。</p>

<p>我更喜欢<code class="language-plaintext highlighter-rouge">hjkl</code>因为我的右手可以保持在键盘上的默认姿势，这样做可以让我更快的敲到周围的键。 为了习惯它，我实际上在刚开始的时候通过<code class="language-plaintext highlighter-rouge">~/.vimrc</code>关闭了方向键：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>noremap &lt;Up&gt; &lt;NOP&gt;
noremap &lt;Down&gt; &lt;NOP&gt;
noremap &lt;Left&gt; &lt;NOP&gt;
noremap &lt;Right&gt; &lt;NOP&gt;
</code></pre></div></div>

<p>也有一些插件可以帮助改掉这个坏习惯，其中有一个叫<a href="https://github.com/takac/vim-hardtime">vim-hardtime</a>。 让我感到惊讶的是，我只用了几天就习惯了使用<code class="language-plaintext highlighter-rouge">hjkl</code>。</p>

<p>另外，如果你想知道为什么Vim使用<code class="language-plaintext highlighter-rouge">hjkl</code>进行移动，<em>这实际上是因为Bill Joy写VI用的Lear-Siegler ADM-3A终端没有方向键，而是把<code class="language-plaintext highlighter-rouge">hjkl</code>当做方向键</em>。</p>

<p>如果你想移动到附近的某个地方，比如从一个单词的一个部分移动到另一个部分，我会使用<code class="language-plaintext highlighter-rouge">h</code>和<code class="language-plaintext highlighter-rouge">l</code>。 如果我需要在可见的范围内上下移动几行，我会使用<code class="language-plaintext highlighter-rouge">j</code>和<code class="language-plaintext highlighter-rouge">k</code>。 如果我想去更远的地方，我倾向于使用其他移动命令。</p>

<h2 id="相对行号">相对行号</h2>

<p>我觉得设置<code class="language-plaintext highlighter-rouge">number</code>和<code class="language-plaintext highlighter-rouge">relativenumber</code>非常有用，你可以在<code class="language-plaintext highlighter-rouge">~/.vimrc</code>中设置:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set relativenumber number
</code></pre></div></div>

<p>这将会展示当前行号和其他行相对当前行的行号。</p>

<p>为什么这个功能有用呢？这个功能能够帮助我知道我离我的目标位置差了多少行，有了它我可以很轻松的知道我的目标行在我下方12行，因此我可以使用<code class="language-plaintext highlighter-rouge">12j</code>去前往。 否则，如果我在69行，我的目标是81行，我需要去计算81-69=12行，这太费劲了，当我需要去一个地方时，我需要思考的部分越少越好。</p>

<p>这是一个100%的个人偏好，你可以尝试<code class="language-plaintext highlighter-rouge">relativenumber</code>/<code class="language-plaintext highlighter-rouge">norelativenumber</code>，<code class="language-plaintext highlighter-rouge">number</code>/<code class="language-plaintext highlighter-rouge">nonumber</code> 然后选择自己觉得最有用的。</p>

<h2 id="对移动计数">对移动计数</h2>

<p>在继续之前，让我们讨论一下”计数”参数。 一个移动(motion)可以接受一个数字前缀作为参数，上面我提到的你可以通过<code class="language-plaintext highlighter-rouge">12j</code>向下移动12行，其中<code class="language-plaintext highlighter-rouge">12j</code>中的<code class="language-plaintext highlighter-rouge">12</code>就是计数数字。</p>

<p>你使用带计数的移动的语法如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[计数] + 移动
</code></pre></div></div>

<p>你可以把这个应用到所有移动上，如果你想向右移动9个字符，你可以使用<code class="language-plaintext highlighter-rouge">9l</code>来代替按9次<code class="language-plaintext highlighter-rouge">l</code>。 当你学到了更多的动作时，你都可以试试给定计数参数。</p>

<h2 id="单词导航">单词导航</h2>

<p>我们现在移动一个更长的单元：单词(word)。 你可以通过<code class="language-plaintext highlighter-rouge">w</code>移动到下一个单词的开始，通过<code class="language-plaintext highlighter-rouge">e</code>移动到下一个单词的结尾，通过<code class="language-plaintext highlighter-rouge">b</code>移动到上一个单词的开始，通过<code class="language-plaintext highlighter-rouge">ge</code>移动到前一个单词的结尾。</p>

<p>另外，为了和上面说的单词(word)做个区分，还有一种移动的单元：词组(WORD)。 你可以通过<code class="language-plaintext highlighter-rouge">W</code>移动到下一个词组的开始，通过<code class="language-plaintext highlighter-rouge">E</code>移动到下一个词组的结尾，通过<code class="language-plaintext highlighter-rouge">B</code>移动到前一个词组的开头，通过<code class="language-plaintext highlighter-rouge">gE</code>移动到前一个词组的结尾。 为了方便记忆，所以我们选择了词组和单词这两个词，相似但有些区分。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>w		移动到下一个单词的开头
W		移动到下一个词组的开头
e		移动到下一个单词的结尾
E		移动到下一个词组的结尾
b		移动到前一个单词的开头
B		移动到前一个词组的开头
ge	移动到前一个单词的结尾
gE	移动到前一个词组的结尾
</code></pre></div></div>

<p>词组和单词到底有什么相同和不同呢？单词和词组都按照非空字符被分割，一个单词指的是一个只包含<code class="language-plaintext highlighter-rouge">a-zA-Z0-9</code>字符串，一个词组指的是一个包含除了空字符(包括空格，tab，EOL)以外的字符的字符串。 你可以通过<code class="language-plaintext highlighter-rouge">:h word</code>和<code class="language-plaintext highlighter-rouge">:h WORD</code>了解更多。</p>

<p>例如，假如你有下面这段内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const hello = "world";
</code></pre></div></div>

<p>当你光标位于这行的开头时，你可以通过<code class="language-plaintext highlighter-rouge">l</code>走到行尾，但是你需要按21下，使用<code class="language-plaintext highlighter-rouge">w</code>，你需要6下，使用<code class="language-plaintext highlighter-rouge">W</code>只需要4下。 单词和词组都是短距离移动的很好的选择。</p>

<p>然而，之后你可以通过当前行导航只按一次从<code class="language-plaintext highlighter-rouge">c</code>移动到<code class="language-plaintext highlighter-rouge">;</code>。</p>

<h2 id="当前行导航">当前行导航</h2>

<p>当你在进行编辑的时候，你经常需要水平地在一行中移动，你可以通过<code class="language-plaintext highlighter-rouge">0</code>跳到本行第一个字符，通过<code class="language-plaintext highlighter-rouge">$</code>跳到本行最后一个字符。 另外，你可以使用<code class="language-plaintext highlighter-rouge">^</code>跳到本行第一个非空字符，通过<code class="language-plaintext highlighter-rouge">g_</code>跳到本行最后一个非空字符。 如果你想去当前行的第n列，你可以使用<code class="language-plaintext highlighter-rouge">n|</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>0		跳到本行第一个字符
^		跳到本行第一个非空字符
g_      跳到本行最后一个非空字符
$		跳到本行最后一个字符
n|      跳到本行第n列
</code></pre></div></div>

<p>你也可以在本行通过<code class="language-plaintext highlighter-rouge">f</code>和<code class="language-plaintext highlighter-rouge">t</code>进行行内搜索，<code class="language-plaintext highlighter-rouge">f</code>和<code class="language-plaintext highlighter-rouge">t</code>的区别在于<code class="language-plaintext highlighter-rouge">f</code>会停在第一个匹配的字母上，<code class="language-plaintext highlighter-rouge">t</code>会停在第一个匹配的字母前。 因此如果你想要搜索并停留在”h”上，使用<code class="language-plaintext highlighter-rouge">fh</code>。 如果你想搜索第一个”h”并停留在它的前一个字母上，可以使用<code class="language-plaintext highlighter-rouge">th</code>。 如果你想去下一个行内匹配的位置，使用<code class="language-plaintext highlighter-rouge">;</code>，如果你想去前一个行内匹配的位置，使用<code class="language-plaintext highlighter-rouge">,</code>。</p>

<p><code class="language-plaintext highlighter-rouge">F</code>和<code class="language-plaintext highlighter-rouge">T</code>是<code class="language-plaintext highlighter-rouge">f</code>和<code class="language-plaintext highlighter-rouge">t</code>对应的向后搜索版本。如果想向前搜索”h”，可以使用<code class="language-plaintext highlighter-rouge">Fh</code>，使用<code class="language-plaintext highlighter-rouge">;</code>，保持相同的搜索方向搜索下一个匹配的字母。 注意，<code class="language-plaintext highlighter-rouge">;</code>不是总是向后搜索，<code class="language-plaintext highlighter-rouge">;</code>表示的是上一次搜索的方向，因此如果你使用的<code class="language-plaintext highlighter-rouge">F</code>，那么使用<code class="language-plaintext highlighter-rouge">;</code>时将会向前搜索使用<code class="language-plaintext highlighter-rouge">,</code>时向后搜索。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>f   在同一行向后搜索第一个匹配
F   在同一行向前搜索第一个匹配
t   在同一行向后搜索第一个匹配，并停在匹配前
T   在同一行向前搜索第一个匹配，并停在匹配前
;   在同一行重复最近一次搜索
,   在同一行向相反方向重复最近一次搜索
</code></pre></div></div>

<p>回到上一个例子：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const hello = "world";
</code></pre></div></div>

<p>当你的光标位于行的开头时，你可以通过按一次键<code class="language-plaintext highlighter-rouge">$</code>去往行尾的最后一个字符”;”。 如果想去往”world”中的”w”，你可以使用<code class="language-plaintext highlighter-rouge">fw</code>。 一个建议是，在行内目标附近通过寻找重复出现最少的字母例如”j”，”x”，”z”来前往行中的该位置更快。</p>

<h2 id="句子和段落导航">句子和段落导航</h2>

<p>接下来两个移动的单元是句子和段落。</p>

<p>首先我们来聊聊句子。 一个句子的定义是以<code class="language-plaintext highlighter-rouge">.!?</code>和跟着的一个换行符或空格，tab结尾的。 你可以通过<code class="language-plaintext highlighter-rouge">)</code>和<code class="language-plaintext highlighter-rouge">(</code>跳到下一个和上一个句子。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>(   跳到前一个句子
)   跳到下一个句子
</code></pre></div></div>

<p>让我们来看一些例子，你觉得哪些字段是句子哪些不是? 可以尝试在Vim中用<code class="language-plaintext highlighter-rouge">(</code>和<code class="language-plaintext highlighter-rouge">)</code>感受一下。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>I am a sentence. I am another sentence because I end with a period. I am still a sentence when ending with an exclamation point! What about question mark? I am not quite a sentence because of the hyphen - and neither semicolon ; nor colon :

There is an empty line above me.

</code></pre></div></div>

<p>另外，如果你的Vim中遇到了无法将一个以<code class="language-plaintext highlighter-rouge">.</code>结尾的字段并且后面跟着一个空行的这种情况判断为一个句子的问题，你可能处于<code class="language-plaintext highlighter-rouge">compatible</code>的模式。 运行<code class="language-plaintext highlighter-rouge">:set nocompatible</code>可以修复。 在Vi中，一个句子是以<strong>两个</strong>空格结尾的，你应该总是保持的<code class="language-plaintext highlighter-rouge">nocompatible</code>的设置。</p>

<p>接下来，我们将讨论什么是段落。 一个段落可以从一个空行之后开始，也可以从段落选项(<code class="language-plaintext highlighter-rouge">paragraphs</code>)中”字符对”所指定的段落宏的每个集合开始。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>{   跳转到上一个段落
}   跳转到下一个段落
</code></pre></div></div>

<p>如果你不知道什么是段落宏，不用担心，重要的是一个段落总是以一个空行开始和结尾， 在大多数时候总是对的。</p>

<p>我们来看这个例子。 你可以尝试着使用<code class="language-plaintext highlighter-rouge">}</code>和<code class="language-plaintext highlighter-rouge">{</code>进行导航，也可以试一试<code class="language-plaintext highlighter-rouge">()</code>这样的句子导航。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Hello. How are you? I am great, thanks!
Vim is awesome.
It may not easy to learn it at first...- but we are in this together. Good luck!

Hello again.

Try to move around with ), (, }, and {. Feel how they work.
You got this.
</code></pre></div></div>

<p>你可以通过<code class="language-plaintext highlighter-rouge">:h setence</code>和<code class="language-plaintext highlighter-rouge">:h paragraph</code>了解更多。</p>

<h2 id="匹配导航">匹配导航</h2>

<p>程序员经常编辑含有代码的文件，这种文件内容会包含大量的小括号，中括号和大括号，并且可能会把你搞迷糊你当前到底在哪对括号里。 许多编程语言都用到了小括号，中括号和大括号，你可能会迷失于其中。 如果你在它们中的某一对括号中，你可以通过<code class="language-plaintext highlighter-rouge">%</code>跳到其中一个括号或另一个上(如果存在)。 你也可以通过这种方法弄清你是否各个括号都成对匹配了。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>%    Navigate to another match, usually works for (), [], {}
</code></pre></div></div>

<p>我们来看一段Scheme代码示例因为它用了大量的小括号。 你可以在括号中用<code class="language-plaintext highlighter-rouge">%</code>移动</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>(define (fib n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (else
          (+ (fib (- n 1)) (fib (- n 2)))
        )))
</code></pre></div></div>

<p>我个人喜欢使用类似<a href="https://github.com/frazrepo/vim-rainbow">vim-rainbow</a>这样的可视化指示插件来作为<code class="language-plaintext highlighter-rouge">%</code>的补充。 通过<code class="language-plaintext highlighter-rouge">:h %</code>了解更多。</p>

<h2 id="行号导航">行号导航</h2>

<p>你可以通过<code class="language-plaintext highlighter-rouge">nG</code>调到行号为<code class="language-plaintext highlighter-rouge">n</code>的行，例如如果你想跳到第7行，你可以使用<code class="language-plaintext highlighter-rouge">7G</code>，跳到第一行使用<code class="language-plaintext highlighter-rouge">gg</code>或<code class="language-plaintext highlighter-rouge">1G</code>，跳到最后一行使用<code class="language-plaintext highlighter-rouge">G</code>。</p>

<p>有时你不知道你想去的位置的具体行号，但是知道它大概在整个文件的70%左右的位置，你可以使用<code class="language-plaintext highlighter-rouge">70%</code>跳过去，可以使用<code class="language-plaintext highlighter-rouge">50%</code>跳到文件的中间。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>gg      跳转到第一行
G       跳转到最后一行
nG      跳转到第n行
n%      跳到文件的n%
</code></pre></div></div>

<p>另外，如果你想看文件总行数，可以用<code class="language-plaintext highlighter-rouge">CTRL-g</code>查看。</p>

<h2 id="窗格导航">窗格导航</h2>

<p>为了移动到当前窗格的顶部，中间，底部，你可以使用<code class="language-plaintext highlighter-rouge">H</code>，<code class="language-plaintext highlighter-rouge">M</code>和<code class="language-plaintext highlighter-rouge">L</code>。</p>

<p>你也可以给<code class="language-plaintext highlighter-rouge">H</code>和<code class="language-plaintext highlighter-rouge">L</code>传一个数字前缀。 如果你输入<code class="language-plaintext highlighter-rouge">10H</code>你会跳转到窗格顶部往下数10行的位置，如果你输入<code class="language-plaintext highlighter-rouge">3L</code>，你会跳转到距离当前窗格的底部一行向上数3行的位置。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>H   跳转到屏幕的顶部
M   跳转到屏幕的中间
L   跳转到屏幕的底部
nH  跳转到距离顶部n行的位置
nL  跳转到距离底部n行的位置
</code></pre></div></div>

<h2 id="滚动">滚动</h2>

<p>在文件中滚动，你有三种速度可以选择： 滚动一整页(<code class="language-plaintext highlighter-rouge">CTRL-F</code>/<code class="language-plaintext highlighter-rouge">CTRL-B</code>)，滚动半页(<code class="language-plaintext highlighter-rouge">CTRL-D</code>/<code class="language-plaintext highlighter-rouge">CTRL-U</code>)，滚动一行<code class="language-plaintext highlighter-rouge">CTRL-E</code>/<code class="language-plaintext highlighter-rouge">CTRL-Y</code>)。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Ctrl-e    向下滚动一行
Ctrl-d    向下滚动半屏
Ctrl-f    向下滚动一屏
Ctrl-y    向上滚动一行
Ctrl-u    向上滚动半屏
Ctrl-b    向上滚动一屏
</code></pre></div></div>

<p>你也可以相对当前行进行滚动</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>zt    将当前行置于屏幕顶部附近
zz    将当前行置于屏幕中央
zb    将当前行置于屏幕底部
</code></pre></div></div>

<h2 id="搜索导航">搜索导航</h2>

<p>通常，你已经知道这个文件中有一个字段，你可以通过搜索导航非常快速的定位你的目标。 你可以通过<code class="language-plaintext highlighter-rouge">/</code>向下搜索，也可以通过<code class="language-plaintext highlighter-rouge">?</code>向上搜索一个字段。 你可以通过<code class="language-plaintext highlighter-rouge">n</code>重复最近一次搜索，<code class="language-plaintext highlighter-rouge">N</code>向反方向重复最近一次搜索。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/   向后搜索一个匹配
?   向前搜素一个匹配
n   重复上一次搜索(和上一次方向相同)
N   重复上一次搜索(和上一次方向相反)
</code></pre></div></div>

<p>假设你有一下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = 1;
let two = 2;
one = "01";
one = "one";
let onetwo = 12;
</code></pre></div></div>

<p>你可以通过<code class="language-plaintext highlighter-rouge">/let</code>搜索”let”，然后通过<code class="language-plaintext highlighter-rouge">n</code>快速的重复搜索下一个”let”，如果需要向相反方向搜索，可以使用<code class="language-plaintext highlighter-rouge">N</code>。 如果你用<code class="language-plaintext highlighter-rouge">?let</code>搜索，会得到一个向前的搜索，这时你使用<code class="language-plaintext highlighter-rouge">n</code>，它会继续向前搜索，就和<code class="language-plaintext highlighter-rouge">?</code>的方向一致。(<code class="language-plaintext highlighter-rouge">N</code>将会向后搜索”let”)。</p>

<p>你可以通过<code class="language-plaintext highlighter-rouge">:set hlsearch</code>设置搜索高亮。 这样，当你搜索<code class="language-plaintext highlighter-rouge">/let</code>，它将高亮文件中所有匹配的字段。 另外，如果你通过<code class="language-plaintext highlighter-rouge">:set incsearch</code>设置了增量搜索，它将在你输入时不断匹配的输入的内容。 默认情况下，匹配的字段会一直高亮到你搜索另一个字段，这有时候很烦人，如果你希望取消高亮，可以使用<code class="language-plaintext highlighter-rouge">:nohlsearch</code>。 因为我经常使用这个功能，所以我会设置一个映射：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>nnoremap &lt;esc&gt;&lt;esc&gt; :noh&lt;return&gt;&lt;esc&gt;
</code></pre></div></div>

<p>你可以通过<code class="language-plaintext highlighter-rouge">*</code>快速的向前搜索光标下的文本，通过<code class="language-plaintext highlighter-rouge">#</code>快速向后搜索光标下的文本。 如果你的光标位于一个字符串”one”上，按下<code class="language-plaintext highlighter-rouge">*</code>相当于<code class="language-plaintext highlighter-rouge">/\&lt;one\&gt;</code>。
<code class="language-plaintext highlighter-rouge">/\&lt;one\&gt;</code>中的<code class="language-plaintext highlighter-rouge">\&lt;</code>和<code class="language-plaintext highlighter-rouge">\&gt;</code>表示整词匹配，使得一个更长的包含”one”的单词不会被匹配上，也就是说它会匹配”one”，但不会匹配”onetwo”。 如果你的光标在”one”上并且你想向后搜索完全或部分匹配的单词，例如”one”和”onetwo”，你可以用<code class="language-plaintext highlighter-rouge">g*</code>替代<code class="language-plaintext highlighter-rouge">*</code>。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>*   向后查找光标所在的完整单词
#   向前查找光标所在的完整单词
g*  向后搜索光标所在的单词
g#  向前搜索光标所在的单词
</code></pre></div></div>

<h2 id="位置标记">位置标记</h2>

<p>你可以通过标记保存当前位置并在之后回到这个位置，就像文本编辑中的书签。 你可以通过<code class="language-plaintext highlighter-rouge">mx</code>设置一个标记，其中<code class="language-plaintext highlighter-rouge">x</code>可以是<code class="language-plaintext highlighter-rouge">a-zA-Z</code>。 有两种办法能回到标记的位置： 用<code class="language-plaintext highlighter-rouge">`x</code>精确回到(行和列)，或者用<code class="language-plaintext highlighter-rouge">'x</code>回到行级位置。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ma    用a标签标记一个位置
`a    精确回到a标签的位置(行和列)
'a    跳转到a标签的行
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">a-z</code>的标签和<code class="language-plaintext highlighter-rouge">A-Z</code>的标签存在一个区别，小写字母是局部标签，大写字母是全局标签(也称文件标记)。</p>

<p>我们首先说说局部标记。 每个buffer可以有自己的一套局部标记，如果打开了两个文件，我可以在第一个文件中设置标记”a”(<code class="language-plaintext highlighter-rouge">ma</code>)，然后在另一个文件中设置另一个标记”a”(<code class="language-plaintext highlighter-rouge">ma</code>)。</p>

<p>不像你可以在每个buffer中设置一套局部标签，你只能设置一套全局标签。 如果你在<code class="language-plaintext highlighter-rouge">myFile.txt</code>中设置了标签<code class="language-plaintext highlighter-rouge">mA</code>，下一次你在另一个文件中设置<code class="language-plaintext highlighter-rouge">mA</code>时，A标签的位置会被覆盖。 全局标签有一个好处就是，即使你在不同的项目中，你也可以跳转到任何一个全局标签上，全局标签可以帮助你在文件间切换。</p>

<p>使用<code class="language-plaintext highlighter-rouge">:marks</code>查看所有标签，你也许会注意到除了<code class="language-plaintext highlighter-rouge">a-zA-Z</code>以外还有别的标签，其中有一些例如：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>''   在当前buffer中跳转回到上一次跳转前的最后一行
``  在当前buffer中跳转回到上一次跳转前的最后一个位置
`[  跳转到上一次修改或拷贝的文本的开头
`]  跳转到上一次修改或拷贝的文本的结尾
`&lt;  跳转到最近一次可视模式下选择的部分的开头
`&gt;  跳转到最近一次可视模式下选择的部分的结尾
`0  跳转到退出Vim前编辑的最后一个文件
</code></pre></div></div>

<p>除了上面列举的，还有更多标记，我不会在这一一列举因为我觉得它们很少用到，不过如果你很好奇，你可以通过<code class="language-plaintext highlighter-rouge">: marks</code>查看。</p>

<h2 id="跳转">跳转</h2>
<p>最后，我们聊聊Vim中的跳转你通过任意的移动可以在不同文件中或者同一个的文件的不同部分间跳转。 然而并不是所有的移动都被认为是一个跳转。 使用<code class="language-plaintext highlighter-rouge">j</code>向下移动一行就不被看做一个跳转，即使你使用<code class="language-plaintext highlighter-rouge">10j</code>向下移动10行，也不是一个跳转。 但是你通过<code class="language-plaintext highlighter-rouge">10G</code>去往第10行被算作一个跳转。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>'   跳转到标记的行
`   跳转到标记的位置(行和列)
G   跳转到行
/   向后搜索
?   向前搜索
n   重复上一次搜索，相同方向
N   重复上一次搜索，相反方向
%   查找匹配
(   跳转上一个句子
)   跳转下一个句子
{   跳转上一个段落
}   跳转下一个段落
L   跳转到当前屏幕的最后一行
M   跳转到当前屏幕的中间
H   跳转到当前屏幕的第一行
[[  跳转到上一个小节
]]  跳转到下一个小节
:s  替换
:tag  跳转到tag定义
</code></pre></div></div>
<p>我不建议你把上面这个列表记下来，一个大致的规则是，任何大于一个单词或超过当前行导航的移动都可能是一个跳转。 Vim保留了你移动前位置的记录，你可以通过<code class="language-plaintext highlighter-rouge">:jumps</code>查看这个列表，如果想了解更多，可以查看<code class="language-plaintext highlighter-rouge">:h jump-motions</code>。</p>

<p>为什么跳转有用呢? 因为你可以在跳转列表中通过<code class="language-plaintext highlighter-rouge">Ctrl-o</code>和<code class="language-plaintext highlighter-rouge">Ctrl-i</code>在记录之间向上或向下跳转到对应位置。 你可以在不同文件中进行跳转，这将是我之后会讲的部分。</p>

<h2 id="聪明地学习导航">聪明地学习导航</h2>
<p>如果你是Vim的新手，这有很多值得你学，我不期望任何人能够立刻记住每样知识点，做到不用思考就能执行这需要一些时间。</p>

<p>我想，最好的开始的办法就是从一些少量的必要的移动开始记。 我推荐你从<code class="language-plaintext highlighter-rouge">h,j,k,l,w,b,G,/,?,n</code>开始，不断地重复这10个移动直到形成肌肉记忆，这花不了多少时间。</p>

<p>为了让你更擅长导航，我有两个建议：</p>
<ol>
  <li>注意重复的动作。 如果你发现你自己在重复的使用<code class="language-plaintext highlighter-rouge">l</code>，你可以去找一个方法让你前进的更快，然后你会发现你可以用<code class="language-plaintext highlighter-rouge">w</code>在单词间移动。 如果你发现你自己的重复的使用<code class="language-plaintext highlighter-rouge">w</code>，你可以看看是否有一种方法能让你直接到行尾，然后你会想到可以用<code class="language-plaintext highlighter-rouge">$</code>。 如果你可以口语化的表达你的需求，Vim中大概就会有一种方法去完成它。</li>
  <li>当你学习任何一个新的移动时，多需要花一定的时间直到你可以不经过思考直接完成它。</li>
</ol>

<p>最后，为了提高效率你不需要知道所有的Vim的命令，大多数Vim用户也都不知道，你只需要学习当下能够帮助你完成任务的命令。</p>

<p>慢慢来，导航技巧是Vim中很重要的技巧，每天学一点并且把它学好。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch04_vim_grammar/">Ch 4 - Vim 语法</a></li>
  <li>下一部分 <a href="../ch06_insert_mode/">Ch 6 - 插入模式</a></li>
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
