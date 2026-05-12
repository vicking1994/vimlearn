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
    

    <title>第12章：搜索和替换</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch12_search_and_substitute/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch12_search_and_substitute/">
<meta property="og:title" content="第12章：搜索和替换">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch12_search_and_substitute/">
<meta name="twitter:title" content="第12章：搜索和替换">
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
        <h1>第12章：搜索和替换</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#智能区分大小写" id="markdown-toc-智能区分大小写">智能区分大小写</a></li>
  <li><a href="#一行中的第一个和最后一个字符" id="markdown-toc-一行中的第一个和最后一个字符">一行中的第一个和最后一个字符</a></li>
  <li><a href="#重复搜索" id="markdown-toc-重复搜索">重复搜索</a></li>
  <li><a href="#使用候选词搜索" id="markdown-toc-使用候选词搜索">使用候选词搜索</a></li>
  <li><a href="#设置模式匹配的开始位置和结束位置" id="markdown-toc-设置模式匹配的开始位置和结束位置">设置模式匹配的开始位置和结束位置</a></li>
  <li><a href="#搜索字符组" id="markdown-toc-搜索字符组">搜索字符组</a></li>
  <li><a href="#搜索重复字符" id="markdown-toc-搜索重复字符">搜索重复字符</a></li>
  <li><a href="#预定义的字符组" id="markdown-toc-预定义的字符组">预定义的字符组</a></li>
  <li><a href="#搜索示例在一对相似字符之间捕获文本" id="markdown-toc-搜索示例在一对相似字符之间捕获文本">搜索示例：在一对相似字符之间捕获文本</a></li>
  <li><a href="#搜索示例捕获电话号码" id="markdown-toc-搜索示例捕获电话号码">搜索示例：捕获电话号码</a></li>
  <li><a href="#基本替换" id="markdown-toc-基本替换">基本替换</a></li>
  <li><a href="#重复最后一次替换" id="markdown-toc-重复最后一次替换">重复最后一次替换</a></li>
  <li><a href="#替换范围" id="markdown-toc-替换范围">替换范围</a></li>
  <li><a href="#模式匹配" id="markdown-toc-模式匹配">模式匹配</a></li>
  <li><a href="#替换标志" id="markdown-toc-替换标志">替换标志</a></li>
  <li><a href="#更改定界符" id="markdown-toc-更改定界符">更改定界符</a></li>
  <li><a href="#特殊替换" id="markdown-toc-特殊替换">特殊替换</a></li>
  <li><a href="#候选模式" id="markdown-toc-候选模式">候选模式</a></li>
  <li><a href="#指定替换模式的开始位置和结束位置" id="markdown-toc-指定替换模式的开始位置和结束位置">指定替换模式的开始位置和结束位置</a></li>
  <li><a href="#贪婪与非贪婪" id="markdown-toc-贪婪与非贪婪">贪婪与非贪婪</a></li>
  <li><a href="#跨多个文件替换" id="markdown-toc-跨多个文件替换">跨多个文件替换</a></li>
  <li><a href="#用宏跨多个文件替换" id="markdown-toc-用宏跨多个文件替换">用宏跨多个文件替换</a></li>
  <li><a href="#以聪明的方式学习搜索和替换" id="markdown-toc-以聪明的方式学习搜索和替换">以聪明的方式学习搜索和替换</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>本章涵盖两个独立但相关的概念:搜索和替代。很多时候，您得基于文本的共同模式搜索大量的内容。通过学习如何在搜索和替换中使用正则表达式而不是字面字符串，您将能够快速定位任何文本。</p>

<p>附带说明一下，在本章中，当谈论搜索时，我将主要使用<code class="language-plaintext highlighter-rouge">/</code>。您使用<code class="language-plaintext highlighter-rouge">/</code>进行的所有操作也可以使用<code class="language-plaintext highlighter-rouge">?</code>完成。</p>

<h2 id="智能区分大小写">智能区分大小写</h2>

<p>尝试匹配搜索词的大小写可能会很棘手。如果要搜索文本”Learn Vim”，则很容易把字母的大小写输错，从而得到错误的搜索结果。如果可以匹配任何情况，会不会更轻松，更安全？这是选项<code class="language-plaintext highlighter-rouge">ignorecase</code>闪亮的地方。只需在 vimrc 中添加<code class="language-plaintext highlighter-rouge">set ignorecase</code>，所有搜索词就不区分大小写。现在，您不必再执行<code class="language-plaintext highlighter-rouge">/Learn Vim</code>了。 <code class="language-plaintext highlighter-rouge">/learn vim</code>将起作用。</p>

<p>但是，有时您需要搜索特定大小写的短语。一种方法是用 <code class="language-plaintext highlighter-rouge">set noignorecase</code> 关闭<code class="language-plaintext highlighter-rouge">ignorecase</code>选项，但是每次需要搜索区分大小写的短语时，都得反复地打开和关闭这个选项。</p>

<p>为避免反复开关<code class="language-plaintext highlighter-rouge">ignorecase</code>选项，Vim 有一个<code class="language-plaintext highlighter-rouge">smartcase</code>选项。您可以将<code class="language-plaintext highlighter-rouge">ignorecase</code>和<code class="language-plaintext highlighter-rouge">smartcase</code>选项结合起来，当您输入的搜索词全部是小写时，进行大小写不敏感搜索；而当搜索词 <strong>至少有1个大写字母时</strong>，进行大小写敏感搜索。</p>

<p>在您的 vimrc 中，添加:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>set ignorecase smartcase
</code></pre></div></div>

<p>如果您有这些文字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello
HELLO
Hello
</code></pre></div></div>

<ul>
  <li><code class="language-plaintext highlighter-rouge">/hello</code> 匹配”hello”，”HELLO”和”Hello”。</li>
  <li><code class="language-plaintext highlighter-rouge">/HELLO</code> 仅匹配”HELLO”。</li>
  <li><code class="language-plaintext highlighter-rouge">/Hello</code> 仅匹配”Hello”。</li>
</ul>

<p>有一个缺点。因为现在当您执行<code class="language-plaintext highlighter-rouge">/hello</code>时，Vim 将进行大小写不敏感搜索,那如果只需要搜索小写字符串怎么办？您可以在搜索词前使用<code class="language-plaintext highlighter-rouge">\C</code>模式来告诉 Vim，后续搜索词将区分大小写。如果执行<code class="language-plaintext highlighter-rouge">/\Chello</code>，它将严格匹配”hello”，而不是”HELLO”或”Hello”。</p>

<h2 id="一行中的第一个和最后一个字符">一行中的第一个和最后一个字符</h2>

<p>您可以使用<code class="language-plaintext highlighter-rouge">^</code>匹配行中的第一个字符，并使用<code class="language-plaintext highlighter-rouge">$</code>匹配行中的最后一个字符。</p>

<p>如果您有以下文字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello hello
</code></pre></div></div>

<p>您可以使用<code class="language-plaintext highlighter-rouge">/^hello</code>来定位第一个”hello”。 ‘^’后面的字符必须是一行中的第一个字符。 要定位最后一个”hello”，请运行<code class="language-plaintext highlighter-rouge">/hello$</code>。 ‘$’ 之前的字符必须是一行中的最后一个字符。</p>

<p>如果您有以下文字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello hello friend
</code></pre></div></div>

<p>运行<code class="language-plaintext highlighter-rouge">/hello$</code>将匹配不到任何内容，因为”friend”是该行的最后一项，而不是”hello”。</p>

<h2 id="重复搜索">重复搜索</h2>

<p>您可以使用<code class="language-plaintext highlighter-rouge">//</code>重复上一个搜索。如果您只是搜索<code class="language-plaintext highlighter-rouge">/hello</code>，则运行<code class="language-plaintext highlighter-rouge">//</code>等同于运行<code class="language-plaintext highlighter-rouge">/hello</code>。此快捷键可以为您节省一些按键操作，尤其是在您刚搜索了一个很长的字符串的情况下。另外，回想一下前面的章节，您还可以使用<code class="language-plaintext highlighter-rouge">n</code>和<code class="language-plaintext highlighter-rouge">N</code>分别以相同方向和相反方向重复上一次搜索。</p>

<p>如果您想快速回忆起 第<em>n</em>个最近使用的搜索字怎么办？您可以先按<code class="language-plaintext highlighter-rouge">/</code>，然后按<code class="language-plaintext highlighter-rouge">up</code>/<code class="language-plaintext highlighter-rouge">down</code>方向键（或<code class="language-plaintext highlighter-rouge">Ctrl-N</code>/<code class="language-plaintext highlighter-rouge">Ctrl-P</code>），快速遍历搜索历史，直到找到所需的搜索词。要查看所有搜索历史，可以运行<code class="language-plaintext highlighter-rouge">:history /</code>。</p>

<p>在搜索过程中到达文件末尾时，Vim 会抛出一个错误:<code class="language-plaintext highlighter-rouge">"搜索到达底部,未找到匹配项:{your-search}"</code>(<code class="language-plaintext highlighter-rouge">"Search hit the BOTTOM without match for: {your-search}"</code>)。有时这个特性能成为一个安全守卫，可以防止过度搜索，但是有时您又想将搜索重新循环到顶部。您可以使用<code class="language-plaintext highlighter-rouge">set wrapscan</code>选项使 Vim 在到达文件末尾时回到文件顶部进行搜索。要关闭此功能，请执行<code class="language-plaintext highlighter-rouge">set nowrapscan</code>。</p>

<h2 id="使用候选词搜索">使用候选词搜索</h2>

<p>一次搜索多个单词属于日常操作。 如果您需要搜索”hello vim”或”hola vim”，而不是”salve vim”或”bonjour vim”，则可以使用<code class="language-plaintext highlighter-rouge">|</code>或运算符。</p>

<p>给予这样一段文本:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello vim
hola vim
salve vim
bonjour vim
</code></pre></div></div>

<table>
  <tbody>
    <tr>
      <td>要同时匹配”hello”和”hola”，可以执行<code class="language-plaintext highlighter-rouge">/hello\|hola</code>。 您必须使用（<code class="language-plaintext highlighter-rouge">\</code>）转义（<code class="language-plaintext highlighter-rouge">|</code>）或运算符，否则 Vim 将按字面意义搜索字符串”</td>
      <td>“。</td>
    </tr>
  </tbody>
</table>

<p>如果您不想每次都输入<code class="language-plaintext highlighter-rouge">\|</code>，则可以在搜索开始时使用<code class="language-plaintext highlighter-rouge">magic</code>语法（<code class="language-plaintext highlighter-rouge">\v</code>）:<code class="language-plaintext highlighter-rouge">/\vhello|hola</code>。 我不会在本章中详细介绍<code class="language-plaintext highlighter-rouge">magic</code>，但是有了<code class="language-plaintext highlighter-rouge">\v</code>，您就不必再转义特殊字符了。 要了解有关<code class="language-plaintext highlighter-rouge">\v</code>的更多信息，请随时查看<code class="language-plaintext highlighter-rouge">:h \v</code>。</p>

<h2 id="设置模式匹配的开始位置和结束位置">设置模式匹配的开始位置和结束位置</h2>

<p>也许您需要搜索的文本是复合词的一部分。如果您有这些文字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>11vim22
vim22
11vim
vim
</code></pre></div></div>

<p>如果您仅需要选择以”11”开始、以”22”结束的”vim”，您可以使用<code class="language-plaintext highlighter-rouge">\zs</code>（开始匹配）和<code class="language-plaintext highlighter-rouge">\ze</code>（结束匹配）运算符。 执行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/11\zsvim\ze22
</code></pre></div></div>

<p>Vim仍然会匹配整个模式”11vim22”，但是仅高亮显示介于<code class="language-plaintext highlighter-rouge">\zs</code>和<code class="language-plaintext highlighter-rouge">\ze</code>之间的内容。 另一个例子:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>foobar
foobaz
</code></pre></div></div>

<p>如果需要在”foobaz”中搜索”foo”，而不是在”foobar”中搜索，请运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/foo\zebaz
</code></pre></div></div>

<h2 id="搜索字符组">搜索字符组</h2>

<p>到目前为止，您所有的搜索字都是字面内容。在现实生活中，您可能必须使用通用模式来查找文本。最基本的模式是字符组<code class="language-plaintext highlighter-rouge">[ ]</code>。</p>

<p>如果您需要搜索任何数字，则可能不想每一次都输入<code class="language-plaintext highlighter-rouge">/0\|1\|2\|3\|4\|5\|6\|7\|8\|9\|0</code>。相反，请使用<code class="language-plaintext highlighter-rouge">/[0-9]</code>来匹配一位数字。 <code class="language-plaintext highlighter-rouge">0-9</code>表达式表示 Vim 尝试匹配的数字范围是 0-9，因此，如果要查找 1 到 5 之间的数字，请使用<code class="language-plaintext highlighter-rouge">/[1-5]</code>。</p>

<p>数字不是 Vim 可以查找的唯一数据类型。您也可以执行<code class="language-plaintext highlighter-rouge">/[a-z]</code>来搜索小写字母，而<code class="language-plaintext highlighter-rouge">/[A-Z]</code>来搜索大写字母。</p>

<p>您可以将这些范围组合在一起。如果您需要搜索数字 0-9 以及从 a 到 f（十六进制）的小写字母和大写字母，可以执行<code class="language-plaintext highlighter-rouge">/[0-9a-fA-F]</code>。</p>

<p>要进行否定搜索，可以在字符范围括号内添加<code class="language-plaintext highlighter-rouge">^</code>。要搜索非数字，请运行<code class="language-plaintext highlighter-rouge">/[^0-9]</code>，Vim会匹配任何字符，只要它不是数字即可。请注意，范围括号内的脱符号（<code class="language-plaintext highlighter-rouge">^</code>）与行首位置符号（例如:<code class="language-plaintext highlighter-rouge">/^hello</code>）不同。如果插入号在一对方括号之外，并且是搜索词中的第一个字符，则表示”一行中的第一个字符”。如果插入符号在一对方括号内，并且是方括号内的第一个字符，则表示否定搜索运算符。 <code class="language-plaintext highlighter-rouge">/^abc</code>匹配行中的第一个”abc”，而<code class="language-plaintext highlighter-rouge">/[^abc]</code>匹配除”a”，”b”或”c”以外的任何字符。</p>

<h2 id="搜索重复字符">搜索重复字符</h2>

<p>如果需要在此文本中搜索两位数:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>1aa
11a
111
</code></pre></div></div>

<p>您可以使用<code class="language-plaintext highlighter-rouge">/[0-9][0-9]</code>来匹配两位数字字符，但是该方法难以扩展。 如果您需要匹配二十个数字怎么办？ 打字 20 次[[0-9]]并不是一种有趣的体验。 这就是为什么您需要一个<code class="language-plaintext highlighter-rouge">count</code>参数。</p>

<p>您可以将<code class="language-plaintext highlighter-rouge">count</code>传递给您的搜索。 它具有以下语法:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>{n,m}
</code></pre></div></div>

<p>顺便说一句，当在 Vim 中使用它们时，这些<code class="language-plaintext highlighter-rouge">count</code>周围的花括号需要被转义。 <code class="language-plaintext highlighter-rouge">count</code> 运算符放在您要递增的单个字符之后。</p>

<p>这是<code class="language-plaintext highlighter-rouge">count</code>语法的四种不同变体:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">{n}</code>是精确匹配。 <code class="language-plaintext highlighter-rouge">/[0-9]\{2\}</code>匹配两个数字:”11”，以及”111”中的”11”。</li>
  <li><code class="language-plaintext highlighter-rouge">{n,m}</code>是范围匹配。 <code class="language-plaintext highlighter-rouge">/[0-9]\{2,3\}</code>匹配 2 到 3 位数字:”11”和”111”。</li>
  <li><code class="language-plaintext highlighter-rouge">{,m}</code>是上限匹配。 <code class="language-plaintext highlighter-rouge">/[0-9]\{,3\}</code>匹配最多 3 个数字:”1”，”11”和”111”。</li>
  <li><code class="language-plaintext highlighter-rouge">{n,}</code>是下限匹配。 <code class="language-plaintext highlighter-rouge">/[0-9]\{2,\}</code>匹配最少 2 个或多个数字:”11”和”111”。</li>
</ul>

<p>计数参数<code class="language-plaintext highlighter-rouge">\{0,\}</code>（零或多个）和<code class="language-plaintext highlighter-rouge">\{1,\}</code>（一个或多个）是最常见的搜索模式，Vim 为它们提供了特殊的操作符:<code class="language-plaintext highlighter-rouge">*</code>和<code class="language-plaintext highlighter-rouge">+</code>（ <code class="language-plaintext highlighter-rouge">+</code>需要被转义，而<code class="language-plaintext highlighter-rouge">*</code> 可以正常运行而无需转义）。 如果执行<code class="language-plaintext highlighter-rouge">/[0-9]*</code>，功能与<code class="language-plaintext highlighter-rouge">/[0-9]\{0,\}</code>相同。 它搜索零个或多个数字，会匹配”“，”1”，”123”。 顺便说一句，它也将匹配非数字，例如”a”，因为在技术上，字母”a”中的数字个数为零。 在使用”*“之前，请仔细考虑。 如果执行<code class="language-plaintext highlighter-rouge">/[0-9]\+</code>，则与<code class="language-plaintext highlighter-rouge">/[0-9]\{1,\}</code>相同。 它搜索一个或多个数字，将匹配”1”和”12”。</p>

<h2 id="预定义的字符组">预定义的字符组</h2>

<p>Vim 为常见字符组（例如数字和字母）提供了简写。 我不会在这里逐一介绍，但可以在<code class="language-plaintext highlighter-rouge">:h /character-classes</code>中找到完整列表。 下面是有用的部分:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>\d    数字[0-9]
\D    非数字[^ 0-9]
\s    空格字符（空格和制表符）
\S    非空白字符（除空格和制表符外的所有字符）
\w    单词字符[0-9A-Za-z_]
\l    小写字母[a-z]
\u    大写字符[A-Z]
</code></pre></div></div>

<p>您可以像使用普通字符组一样使用它们。 要搜索任何一位数字，可以使用<code class="language-plaintext highlighter-rouge">/\d</code>以获得更简洁的语法，而不使用<code class="language-plaintext highlighter-rouge">/[0-9]</code>。</p>

<h2 id="搜索示例在一对相似字符之间捕获文本">搜索示例：在一对相似字符之间捕获文本</h2>

<p>如果要搜索由双引号引起来的短语:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>"Vim is awesome!"
</code></pre></div></div>

<p>运行这个:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`/"[^"]\+"`
</code></pre></div></div>

<p>让我们分解一下:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">"</code> 是字面双引号。它匹配第一个双引号。</li>
  <li><code class="language-plaintext highlighter-rouge">[^"]</code> 表示除双引号外的任何字符，只要不是双引号，它就与任何字母数字和空格字符匹配。</li>
  <li><code class="language-plaintext highlighter-rouge">\+</code>表示一个或多个。因为它的前面是<code class="language-plaintext highlighter-rouge">[^"]</code>，因此 Vim 查找一个或多个不是双引号的字符。</li>
  <li><code class="language-plaintext highlighter-rouge">"</code> 是字面双引号。它与右双引号匹配。</li>
</ul>

<p>当看到第一个<code class="language-plaintext highlighter-rouge">"</code>时，它开始模式捕获。Vim 在一行中看到第二个双引号时，它匹配第二个<code class="language-plaintext highlighter-rouge">"</code>模式并停止模式捕获。同时，两个双引号之间的所有非双引号字符都被<code class="language-plaintext highlighter-rouge">[^"]\+</code> 模式捕获，在这个例子中是短语”Vim is awesome!”。这是一个通用模式（其实就是正则表达式）用于捕获 <strong>由一对类似的定界符包围的短语</strong>。</p>

<ul>
  <li>要捕获被单引号包围的短语，你可以使用<code class="language-plaintext highlighter-rouge">/'[^']\+'</code></li>
  <li>要捕获为0包围的短语，你可以使用<code class="language-plaintext highlighter-rouge">/0[^0]\+0</code></li>
</ul>

<h2 id="搜索示例捕获电话号码">搜索示例：捕获电话号码</h2>

<p>如果要匹配以连字符(<code class="language-plaintext highlighter-rouge">-</code>)分隔的美国电话号码，例如<code class="language-plaintext highlighter-rouge">123-456-7890</code>，则可以使用:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/\d\{3\}-\d\{3\}-\d\{4\}
</code></pre></div></div>

<p>美国电话号码的组成是：首先是三位数字，其后是另外三位数字，最后是另外四位数字。 让我们分解一下:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">\d\{3\}</code>与精确重复三次的数字匹配</li>
  <li><code class="language-plaintext highlighter-rouge">-</code>是字面的连字符</li>
</ul>

<p>为避免转义，可使用<code class="language-plaintext highlighter-rouge">\v</code>:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/\v\d{3}-\d{3}-\d{4}
</code></pre></div></div>

<p>此模式还可用于捕获任何重复的数字，例如 IP 地址和邮政编码。</p>

<p>这涵盖了本章的搜索部分。 现在开始讲替换。</p>

<h2 id="基本替换">基本替换</h2>

<p>Vim 的替代命令是一个有用的命令，用于快速查找和替换任何模式。 替换语法为:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/{old-pattern}/{new-pattern}/
</code></pre></div></div>

<p>让我们从一个基本用法开始。 如果您有以下文字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim is good
</code></pre></div></div>

<p>让我们用”awesome”代替”good”，因为 Vim 很棒。 运行<code class="language-plaintext highlighter-rouge">:s/good/awesome/.</code>您应该看到:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim is awesome
</code></pre></div></div>

<h2 id="重复最后一次替换">重复最后一次替换</h2>

<p>您可以使用普通模式命令<code class="language-plaintext highlighter-rouge">&amp;</code>或运行<code class="language-plaintext highlighter-rouge">:s</code>来重复最后一个替代命令。 如果您刚刚运行<code class="language-plaintext highlighter-rouge">:s/good/awesome/</code>，则运行<code class="language-plaintext highlighter-rouge">&amp;</code>或<code class="language-plaintext highlighter-rouge">:s</code>将会重复执行。</p>

<p>另外，在本章前面，我提到您可以使用<code class="language-plaintext highlighter-rouge">//</code>来重复先前的搜索模式。 此技巧可用于替代命令。 如果<code class="language-plaintext highlighter-rouge">/good</code>是最近被替换的单词，那么将第一个替换模式参数留为空白，例如在<code class="language-plaintext highlighter-rouge">:s//awesome/</code>中，则与运行<code class="language-plaintext highlighter-rouge">:s/good/awesome/</code>相同。</p>

<h2 id="替换范围">替换范围</h2>

<p>就像许多 Ex 命令一样，您可以将范围参数传递给替换命令。 语法为:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:[range]s/old/new/
</code></pre></div></div>

<p>如果您有以下表达式:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
</code></pre></div></div>

<p>要将第3行到第5行中的”let”替换为”const”，您可以执行以下操作:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:3,5s/let/const/
</code></pre></div></div>

<p>下面是一些你可以使用的范围参数的变体:</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">:,3s/let/const/</code> - 如果逗号前没有给出任何内容，则表示当前行。 从当前行替换到第 3 行。</li>
  <li><code class="language-plaintext highlighter-rouge">:1,s/let/const/</code> - 如果逗号后没有给出任何内容，它也代表当前行。 从第 1 行替换到当前行。</li>
  <li><code class="language-plaintext highlighter-rouge">:3s/let/const/</code> - 如果仅给出一个值作为范围（不带逗号），则仅在该行进行替换。</li>
</ul>

<p>在 Vim 中，<code class="language-plaintext highlighter-rouge">%</code>通常表示整个文件。 如果运行<code class="language-plaintext highlighter-rouge">:%s/let/const/</code>，它将在所有行上进行替换。请记住这个范围参数语法，在后面章节中很多命令行命令都遵循这个语法。</p>

<h2 id="模式匹配">模式匹配</h2>

<p>接下来的几节将介绍基本的正则表达式。 丰富的模式知识对于掌握替换命令至关重要。</p>

<p>如果您具有以下表达式:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
</code></pre></div></div>

<p>要在数字周围添加一对双引号:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\d/"\0"/
</code></pre></div></div>

<p>结果:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
</code></pre></div></div>

<p>让我们分解一下命令:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:%s</code> 定位整个文件以执行替换。</li>
  <li><code class="language-plaintext highlighter-rouge">\d</code> 是 Vim 的预定义数字范围简写(类似使用<code class="language-plaintext highlighter-rouge">[0-9]</code>)。</li>
  <li><code class="language-plaintext highlighter-rouge">"\0"</code> 双引号是双引号的字面值。 <code class="language-plaintext highlighter-rouge">\0</code>是一个特殊字符，代表”整个匹配的模式”。 此处匹配的模式是单个数字<code class="language-plaintext highlighter-rouge">\d</code>。</li>
</ul>

<p>另外，<code class="language-plaintext highlighter-rouge">&amp;</code>也同样代表”整个匹配的模式”，就像<code class="language-plaintext highlighter-rouge">\0</code>一样。 <code class="language-plaintext highlighter-rouge">:s/\d/"&amp;"/</code>也可以。</p>

<p>让我们考虑另一个例子。 给出以下表达式，您需要将所有的”let”和变量名交换位置:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>one let = "1";
two let = "2";
three let = "3";
four let = "4";
five let = "5";
</code></pre></div></div>

<p>为此，请运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\(\w\+\) \(\w\+\)/\2 \1/
</code></pre></div></div>

<p>上面的命令包含太多的反斜杠，很难阅读。 使用<code class="language-plaintext highlighter-rouge">\v</code>运算符更方便:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\v(\w+) (\w+)/\2 \1/
</code></pre></div></div>

<p>结果:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
</code></pre></div></div>

<p>太好了！ 让我们分解该命令:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:%s</code> 定位文件中的所有行以执行替换操作</li>
  <li><code class="language-plaintext highlighter-rouge">(\w+) (\w+)</code>对模式进行分组。<code class="language-plaintext highlighter-rouge">\w</code>是 Vim 预定义的单词字符范围简写(<code class="language-plaintext highlighter-rouge">[0-9A-Za-z_]</code>)之一。 包围<code class="language-plaintext highlighter-rouge">\w</code>的<code class="language-plaintext highlighter-rouge">()</code>将匹配的单词字符进行分组。 请注意两个分组之间的空间。 <code class="language-plaintext highlighter-rouge">(\w+) (\w+)</code> 捕获两个分组。 在第一行上，第一组捕获”let”，第二组捕获”one”。(英文版中，作者写成了：第一组捕获”one”，第二组捕获”two”，可能是作者不小心的错误)。</li>
  <li><code class="language-plaintext highlighter-rouge">\2 \1</code> 以相反的顺序返回捕获的组。 <code class="language-plaintext highlighter-rouge">\2</code>包含捕获的字符串”let”，而<code class="language-plaintext highlighter-rouge">\1</code>包含字符串”one”。 使<code class="language-plaintext highlighter-rouge">\2 \1</code>返回字符串”let one”。</li>
</ul>

<p>回想一下，<code class="language-plaintext highlighter-rouge">\0</code>代表整个匹配的模式。 您可以使用<code class="language-plaintext highlighter-rouge">( )</code>将匹配的字符串分成较小的组。 每个组都由<code class="language-plaintext highlighter-rouge">\1</code>, <code class="language-plaintext highlighter-rouge">\2</code>, <code class="language-plaintext highlighter-rouge">\3</code>等表示。</p>

<p>让我们再举一个例子来巩固这一匹配分组的概念。 如果您有以下数字:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>123
456
789
</code></pre></div></div>

<p>要颠倒顺序，请运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\v(\d)(\d)(\d)/\3\2\1/
</code></pre></div></div>

<p>结果是:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>321
654
987
</code></pre></div></div>

<p>每个<code class="language-plaintext highlighter-rouge">(\d)</code>都匹配一个数字并创建一个分组。 在第一行上，第一个<code class="language-plaintext highlighter-rouge">(\d)</code>的值为”1”，第二个<code class="language-plaintext highlighter-rouge">(\d)</code>的值为”2”，第三个<code class="language-plaintext highlighter-rouge">(\d)</code>的值为”3”。 它们存储在变量<code class="language-plaintext highlighter-rouge">\1</code>，<code class="language-plaintext highlighter-rouge">\2</code>和<code class="language-plaintext highlighter-rouge">\3</code>中。 在替换的后半部分，新模式<code class="language-plaintext highlighter-rouge">\3\2\1</code>在第一行上产生”321”值。</p>

<p>相反，如果您运行下面的命令:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\v(\d\d)(\d)/\2\1/
</code></pre></div></div>
<p>您将获得不同的结果:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>312
645
978
</code></pre></div></div>

<p>这是因为您现在只有两个组。 被<code class="language-plaintext highlighter-rouge">(\d\d)</code>捕获的第一组存储在<code class="language-plaintext highlighter-rouge">\1</code>内，其值为”12”。 由<code class="language-plaintext highlighter-rouge">(\d)</code>捕获的第二组存储在<code class="language-plaintext highlighter-rouge">\2</code>内部，其值为”3”。 然后，<code class="language-plaintext highlighter-rouge">\2\1</code>返回”312”。</p>

<h2 id="替换标志">替换标志</h2>

<p>如果您有以下句子:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>chocolate pancake, strawberry pancake, blueberry pancake
</code></pre></div></div>

<p>要将所有 pancakes 替换为 donut，您不能只运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/pancake/donut
</code></pre></div></div>

<p>上面的命令将仅替换第一个匹配项，返回的结果是:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>chocolate donut, strawberry pancake, blueberry pancake
</code></pre></div></div>

<p>有两种解决方法。 一，您可以再运行两次替代命令。 二，您可以向其传递全局(<code class="language-plaintext highlighter-rouge">g</code>)标志来替换一行中的所有匹配项。</p>

<p>让我们谈谈全局标志。 运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/pancake/donut/g
</code></pre></div></div>

<p>Vim 迅速将所有”pancake”替换为”donut”。 全局命令是替代命令接受的几个标志之一。 您在替代命令的末尾传递标志。 这是有用的标志的列表:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&amp;    重用上一个替代命令中的标志。 必须作为第一个标志传递。
g    替换行中的所有匹配项。
c    要求替代确认。
e    防止替换失败时显示错误消息。
i    执行不区分大小写的替换
I    执行区分大小写的替换
</code></pre></div></div>

<p>我上面没有列出更多标志。 要了解所有标志，请查看<code class="language-plaintext highlighter-rouge">:h s_flags</code>。</p>

<p>顺便说一句，重复替换命令（<code class="language-plaintext highlighter-rouge">&amp;</code>和<code class="language-plaintext highlighter-rouge">:s</code>）不保留标志。 运行<code class="language-plaintext highlighter-rouge">&amp;</code>只会重复<code class="language-plaintext highlighter-rouge">:s/pancake/donut/</code>而没有<code class="language-plaintext highlighter-rouge">g</code>。 要使用所有标志快速重复最后一个替代命令，请运行<code class="language-plaintext highlighter-rouge">:&amp;&amp;</code>。</p>

<h2 id="更改定界符">更改定界符</h2>

<p>如果您需要用长路径替换 URL:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>https://mysite.com/a/b/c/d/e
</code></pre></div></div>

<p>要用单词”hello”代替它，请运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/https:\/\/mysite.com\/a\/b\/c\/d\/e/hello/
</code></pre></div></div>

<p>但是，很难说出哪些正斜杠（<code class="language-plaintext highlighter-rouge">/</code>）是替换模式的一部分，哪些是分隔符。 您可以使用任何单字节字符（除字母，数字或<code class="language-plaintext highlighter-rouge">"</code>，<code class="language-plaintext highlighter-rouge">|</code>和<code class="language-plaintext highlighter-rouge">\</code>之外的字符）来更改定界符。让我们将它们替换为<code class="language-plaintext highlighter-rouge">+</code>。上面的替换命令可以重写为 :</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s+https:\/\/mysite.com\/a\/b\/c\/d\/e+hello+
</code></pre></div></div>

<p>现在，更容易看到分隔符在哪里。</p>

<h2 id="特殊替换">特殊替换</h2>

<p>您还可以修改要替换的文本的大小写。 给出以下表达式，您的任务是将所有变量名比如 “one”, “two”, “three”等，改成大写:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
</code></pre></div></div>

<p>请运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>%s/\v(\w+) (\w+)/\1 \U\2/
</code></pre></div></div>

<p>你会得到:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>let ONE = "1";
let TWO = "2";
let THREE = "3";
let FOUR = "4";
let FIVE = "5";
</code></pre></div></div>

<p>这是该命令的细分:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">(\w+) (\w+)</code>捕获前两个匹配的分组，例如”let”和”one”。</li>
  <li><code class="language-plaintext highlighter-rouge">\1</code>返回第一个组的值”let”</li>
  <li><code class="language-plaintext highlighter-rouge">\U\2</code>大写(<code class="language-plaintext highlighter-rouge">\U</code>)第二组(<code class="language-plaintext highlighter-rouge">\2</code>)。</li>
</ul>

<p>该命令的窍门是表达式<code class="language-plaintext highlighter-rouge">\U\2</code>。<code class="language-plaintext highlighter-rouge">\U</code>将后面跟着的字符变为大写。</p>

<p>让我们再举一个例子。 假设您正在编写 Vim 书籍，并且需要将一行中每个单词的首字母大写。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim is the greatest text editor in the whole galaxy
</code></pre></div></div>

<p>您可以运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/\&lt;./\U&amp;/g
</code></pre></div></div>

<p>结果:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Vim Is The Greatest Text Editor In The Whole Galaxy
</code></pre></div></div>

<p>细目如下:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:s</code> 替换当前行</li>
  <li><code class="language-plaintext highlighter-rouge">\&lt;.</code> 由两部分组成:<code class="language-plaintext highlighter-rouge">\&lt;</code>匹配单词的开头，<code class="language-plaintext highlighter-rouge">.</code>匹配任何字符。 <code class="language-plaintext highlighter-rouge">\&lt;</code>运算符使后面跟着的字符表示单词的第一个字符。 由于<code class="language-plaintext highlighter-rouge">.</code>是下一个字符，因此它将匹配任意单词的第一个字符。</li>
  <li><code class="language-plaintext highlighter-rouge">\U&amp;</code> 将后续符号子序列<code class="language-plaintext highlighter-rouge">&amp;</code>大写。 回想一下，<code class="language-plaintext highlighter-rouge">&amp;</code>（或<code class="language-plaintext highlighter-rouge">\0</code>）代表整个匹配。 这里它匹配单词的第一个字符。</li>
  <li><code class="language-plaintext highlighter-rouge">g</code>全局标志。 没有它，此命令将仅替换第一个匹配项。 您需要替换此行上的每个匹配项。</li>
</ul>

<p>要了解替换的特殊替换符号（如<code class="language-plaintext highlighter-rouge">\u</code>和<code class="language-plaintext highlighter-rouge">\U</code>）的更多信息，请查看<code class="language-plaintext highlighter-rouge">:h sub-replace-special</code>。</p>

<h2 id="候选模式">候选模式</h2>

<p>有时您需要同时匹配多个模式。 如果您有以下问候:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello vim
hola vim
salve vim
bonjour vim
</code></pre></div></div>

<p>您仅需在包含单词”hello”或”hola”的行上用”friend”代替”vim”。回想一想本章前面的知识点，你可以使用<code class="language-plaintext highlighter-rouge">|</code> 来分隔可选的模式:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/\v(hello|hola) vim/\1 friend/g
</code></pre></div></div>

<p>结果:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello friend
hola friend
salve vim
bonjour vim
</code></pre></div></div>

<p>这是细分:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">%s</code> 在文件的每一行上运行替代命令。</li>
  <li><code class="language-plaintext highlighter-rouge">(hello|hola)</code> 匹配*“hello”或”hola”，并将其视为一个组。</li>
  <li><code class="language-plaintext highlighter-rouge">vim</code> 是字面意思”vim”。</li>
  <li><code class="language-plaintext highlighter-rouge">\1</code> 是第一个匹配组，它是文本”hello”或”hola”。</li>
  <li><code class="language-plaintext highlighter-rouge">friend</code> 是字面的“朋友”。</li>
</ul>

<h2 id="指定替换模式的开始位置和结束位置">指定替换模式的开始位置和结束位置</h2>

<p>回想一下，您可以使用<code class="language-plaintext highlighter-rouge">\zs</code>和<code class="language-plaintext highlighter-rouge">\ze</code>来指定一个匹配的开始位置和结束位置。这个技术在替换操作中同样有效，如果你有以下文本：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>chocolate pancake
strawberry sweetcake
blueberry hotcake
</code></pre></div></div>

<p>要想将”hotcake”中的”cake”替换为”dog”，得到”hotdog”:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:%s/hot\zscake/dog/g
</code></pre></div></div>

<p>结果是：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>chocolate pancake
strawberry sweetcake
blueberry hotdog
</code></pre></div></div>

<h2 id="贪婪与非贪婪">贪婪与非贪婪</h2>

<p>您可以使用下面技巧，在某行中替换第n个匹配：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>One Mississippi, two Mississippi, three Mississippi, four Mississippi, five Mississippi.
</code></pre></div></div>

<p>要想将第3个”Mississippi”替换为 “Arkansas”，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/\v(.{-}\zsMississippi){3}/Arkansas/g
</code></pre></div></div>

<p>命令分解：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:s/</code> 替换命令。</li>
  <li><code class="language-plaintext highlighter-rouge">\v</code> 魔术关键字，使您不必转义特殊字符。</li>
  <li><code class="language-plaintext highlighter-rouge">.</code> 匹配任意单个字符。</li>
  <li><code class="language-plaintext highlighter-rouge">{-}</code> 表示使用非贪婪模式匹配前面的0个或多个字符。</li>
  <li><code class="language-plaintext highlighter-rouge">\zsMississippi</code> 使得从”Mississippi”开始捕获匹配。</li>
  <li><code class="language-plaintext highlighter-rouge">(...){3}</code> 查找第3个匹配</li>
</ul>

<p>在本章前面的内容中，你已经看到过<code class="language-plaintext highlighter-rouge">{3}</code>这样的语法。在本例中，<code class="language-plaintext highlighter-rouge">{3}</code>将精确匹配第3个匹配。这里的新技巧是<code class="language-plaintext highlighter-rouge">{-}</code>。它表示进行非贪婪匹配。它会找到符合给定模式的最短的匹配。在本例中，<code class="language-plaintext highlighter-rouge">(.{-}Mississippi)</code>匹配以任意字符开始、数量最少的”Mississippi”。对比<code class="language-plaintext highlighter-rouge">(.*Mississippi)</code>，后者会找到符合给定模式的最长匹配。</p>

<p>如果您使用<code class="language-plaintext highlighter-rouge">(.{-}Mississippi)</code>，你会得到5个匹配：”One Mississippi”, “Two Mississippi”,等。如果您使用<code class="language-plaintext highlighter-rouge">(.*Mississippi)</code>，您只会得到1个匹配：最后一个 “Mississippi”。<code class="language-plaintext highlighter-rouge">*</code>表示贪婪匹配，而<code class="language-plaintext highlighter-rouge">{-}</code>表示非贪婪匹配。要想了解更多，可以查看 <code class="language-plaintext highlighter-rouge">:h /\{-</code> 和 <code class="language-plaintext highlighter-rouge">:h non-greedy</code>。</p>

<p>让我们看一个简单的例子。如果您有以下字符串：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>abc1de1
</code></pre></div></div>

<p>用贪婪模式匹配 “abc1de1” ：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/a.*1
</code></pre></div></div>

<p>用非贪婪模式匹配 “abc1”：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>/a.\{-}1
</code></pre></div></div>

<p>因此，如果您需要将最长的匹配转为大写（贪婪模式），运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/a.*1/\U&amp;/g
</code></pre></div></div>

<p>会得到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ABC1DE1
</code></pre></div></div>

<p>如果您需要将最短的匹配转为大写（非贪婪模式），运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:s/a.\{-}1/\U&amp;/g
</code></pre></div></div>

<p>会得到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>ABC1de1
</code></pre></div></div>

<p>如果您是第一次接触贪婪模式与非贪婪模式这两个概念，可能会把你绕晕。围绕不同的组合去实验，知道您明白这两个概念。</p>

<h2 id="跨多个文件替换">跨多个文件替换</h2>

<p>最后，让我们学习如何在多个文件中替换短语。对于本节，假设您有两个文件: <code class="language-plaintext highlighter-rouge">food.txt</code> 和 <code class="language-plaintext highlighter-rouge">animal.txt</code>.</p>

<p><code class="language-plaintext highlighter-rouge">food.txt</code>内:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>corn dog
hot dog
chili dog
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">animal.txt</code>内:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>large dog
medium dog
small dog
</code></pre></div></div>

<p>假设您的目录结构如下所示:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>├ food.txt
├ animal.txt
</code></pre></div></div>

<p>首先，用<code class="language-plaintext highlighter-rouge">:args</code>同时捕获”food.txt”和”animal.txt”到参数列表中。回顾前面的章节，<code class="language-plaintext highlighter-rouge">:args</code>可用于创建文件名列表。在 Vim 中有几种方法可以做到这一点，其中一种方法是在Vim内部运行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args *.txt                  捕获当前位置的所有txt文件
</code></pre></div></div>

<p>测试一下，当您运行<code class="language-plaintext highlighter-rouge">:args</code>时，您应该会看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[food.txt] animal.txt
</code></pre></div></div>

<p>现在，所有的相关文件都已经存储在参数列表中，您可以用 <code class="language-plaintext highlighter-rouge">:argdo</code> 命令跨多文件替换，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:argdo %s/dog/chicken/
</code></pre></div></div>

<p>这条命令对所有<code class="language-plaintext highlighter-rouge">:args</code>列表中的文件执行替换操作。最终，存储修改的文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:argdo update
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:args</code> 和 <code class="language-plaintext highlighter-rouge">:argdo</code> 是两个有用的工具，用于跨多文件执行命令行命令。可以用其他命令结合尝试一下！</p>

<h2 id="用宏跨多个文件替换">用宏跨多个文件替换</h2>

<p>另外，您也可以用宏跨多个文件运行替代命令。执行:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:args *.txt
qq
:%s/dog/chicken/g
:wnext
q
99@q
</code></pre></div></div>

<p>以下是步骤的细分:</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">:args *.txt</code> 会将相关文件列出到<code class="language-plaintext highlighter-rouge">:args</code>列表中。</li>
  <li><code class="language-plaintext highlighter-rouge">qq</code> 启动”q”寄存器中的宏。</li>
  <li><code class="language-plaintext highlighter-rouge">:%s/dog/chicken/g</code>在当前文件的所有行上用”chicken”替换”dog”。</li>
  <li><code class="language-plaintext highlighter-rouge">:wnext</code> 写入（保存）文件，然后转到<code class="language-plaintext highlighter-rouge">args</code>列表中的下一个文件。就像同时运行<code class="language-plaintext highlighter-rouge">:w</code>和<code class="language-plaintext highlighter-rouge">:next</code>一样。</li>
  <li><code class="language-plaintext highlighter-rouge">q</code> 停止宏录制。</li>
  <li><code class="language-plaintext highlighter-rouge">99@q</code> 执行宏九十九次。 Vim 遇到第一个错误后，它将停止执行宏，因此 Vim 实际上不会执行该宏九十九次。</li>
</ul>

<h2 id="以聪明的方式学习搜索和替换">以聪明的方式学习搜索和替换</h2>

<p>良好的搜索能力是编辑的必要技能。掌握搜索功能使您可以利用正则表达式的灵活性来搜索文件中的任何模式。花些时间学习这些。要想掌握正则表达式，您必须在实践中去不断地使用它。我曾经读过一本关于正则表达式的书，却没有真正去做，后来我几乎忘了读的所有东西。主动编码是掌握任何技能的最佳方法。</p>

<p>一种提高模式匹配技能的好方法是，每当您需要搜索一个模式串时（例如”hello 123”），不要直接查询文字的字面值(<code class="language-plaintext highlighter-rouge">/hello 123</code>)，去尝试使用模式串来搜索它(比如<code class="language-plaintext highlighter-rouge">/\v(\l+) (\d+)</code>)。这些正则表达式概念中的许多不仅在使用 Vim 时，也适用于常规编程。</p>

<p>既然您已经了解了 Vim 中的高级搜索和替换，现在让我们学习功能最丰富的命令之一，即全局命令。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch11_visual_mode/">Ch 11 - 可视模式</a></li>
  <li>下一部分 <a href="../ch13_the_global_command/">Ch 13 - 全局命令</a></li>
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
