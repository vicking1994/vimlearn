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
    

    <title>第19章：编译</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch19_compile/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch19_compile/">
<meta property="og:title" content="第19章：编译">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch19_compile/">
<meta name="twitter:title" content="第19章：编译">
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
        <h1>第19章：编译</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#从命令行编译" id="markdown-toc-从命令行编译">从命令行编译</a></li>
  <li><a href="#make命令" id="markdown-toc-make命令">Make命令</a></li>
  <li><a href="#使用-make-编译" id="markdown-toc-使用-make-编译">使用 Make 编译</a></li>
  <li><a href="#不同的make程序" id="markdown-toc-不同的make程序">不同的Make程序</a></li>
  <li><a href="#保存时自动编译" id="markdown-toc-保存时自动编译">保存时自动编译</a></li>
  <li><a href="#切换编译器" id="markdown-toc-切换编译器">切换编译器</a></li>
  <li><a href="#创建自定义编译器" id="markdown-toc-创建自定义编译器">创建自定义编译器</a></li>
  <li><a href="#异步编译器" id="markdown-toc-异步编译器">异步编译器</a></li>
  <li><a href="#插件vim-dispatch" id="markdown-toc-插件vim-dispatch">插件：Vim-dispatch</a>    <ul>
      <li><a href="#异步make" id="markdown-toc-异步make">异步Make</a></li>
      <li><a href="#异步调度dispatch" id="markdown-toc-异步调度dispatch">异步调度（Dispatch）</a></li>
      <li><a href="#自动调度" id="markdown-toc-自动调度">自动调度</a></li>
    </ul>
  </li>
  <li><a href="#聪明地学习编译" id="markdown-toc-聪明地学习编译">聪明地学习编译</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>编译是许多编程语言的重要主题。在本章中，您将学习如何在 Vim 中编译。此外，您将看到如何利用好 Vim 的 <code class="language-plaintext highlighter-rouge">:make</code> 命令。</p>

<h2 id="从命令行编译">从命令行编译</h2>

<p>您可以使用叹号运算符（<code class="language-plaintext highlighter-rouge">!</code>）进行编译。如果您需要使用 <code class="language-plaintext highlighter-rouge">g++</code> 来编译 <code class="language-plaintext highlighter-rouge">.cpp</code> 文件，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!g++ hello.cpp -o hello
</code></pre></div></div>

<p>但要每次手动指定文件名和输出文件名会非常繁琐和容易出错。而 makefile 是条可行之路。</p>

<h2 id="make命令">Make命令</h2>

<p>Vim 有运行 makefile 的 <code class="language-plaintext highlighter-rouge">:make</code> 命令。当您运行它时，Vim 会在当前目录查找 makefile 并执行它。</p>

<p>在当前目录创建一个文件名为 <code class="language-plaintext highlighter-rouge">makefile</code> ，然后添加下列内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>all:
	echo "Hello all"
foo:
	echo "Hello foo"
list_pls:
	ls
</code></pre></div></div>

<p>在 Vim 中运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make
</code></pre></div></div>

<p>Vim 执行它的方式与从终端运行它的方式相同。<code class="language-plaintext highlighter-rouge">:make</code> 命令也接受终端中 <code class="language-plaintext highlighter-rouge">make</code> 命令的参数。运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make foo
" Outputs "Hello foo"

:make list_pls
" Outputs the ls command result
</code></pre></div></div>

<p>如果命令执行异常，<code class="language-plaintext highlighter-rouge">:make</code> 命令将使用 Vim 的 <code class="language-plaintext highlighter-rouge">quickfix</code> 来存储这些错误。现在试着运行一个不存在的目标：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make dontexist
</code></pre></div></div>

<p>您应该会看到该命令执行错误。运行 <code class="language-plaintext highlighter-rouge">quickfix</code> 命令 <code class="language-plaintext highlighter-rouge">:copen</code> 可以打开 <code class="language-plaintext highlighter-rouge">quickfix</code> 窗口来查看该错误：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>|| make: *** No rule to make target `dontexist'.  Stop.
</code></pre></div></div>

<h2 id="使用-make-编译">使用 Make 编译</h2>

<p>让我们使用 makefile 来编译一个基本的 <code class="language-plaintext highlighter-rouge">.cpp</code> 程序。首先创建一个 <code class="language-plaintext highlighter-rouge">hello.cpp</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello!\n";
    return 0;
}
</code></pre></div></div>

<p>然后，更新 <code class="language-plaintext highlighter-rouge">makefile</code> 来编译和运行 <code class="language-plaintext highlighter-rouge">.cpp</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>all:
	echo "build, run"
build:
	g++ hello.cpp -o hello
run:
	./hello
</code></pre></div></div>

<p>现在运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make build
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">g++</code> 将编译 <code class="language-plaintext highlighter-rouge">./hello.cpp</code> 并且生成 <code class="language-plaintext highlighter-rouge">./hello</code>。接着运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make run
</code></pre></div></div>

<p>您应该会看到终端上打印出了 <code class="language-plaintext highlighter-rouge">"Hello!"</code>。</p>

<h2 id="不同的make程序">不同的Make程序</h2>

<p>当您运行 <code class="language-plaintext highlighter-rouge">:make</code> 时，Vim 实际上会执行 <code class="language-plaintext highlighter-rouge">makeprg</code> 选项所设置的任何命令，您可以运行 <code class="language-plaintext highlighter-rouge">:set makeprg?</code> 来查看它：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>makeprg=make
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">:make</code> 的默认命令是外部的 <code class="language-plaintext highlighter-rouge">make</code> 命令。若想修改 <code class="language-plaintext highlighter-rouge">:make</code> 命令，使每次运行它时执行 <code class="language-plaintext highlighter-rouge">g++ &lt;your-file-name&gt;</code>，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set makeprg=g++\ %
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">\</code> 用于转义 <code class="language-plaintext highlighter-rouge">g++</code> 后的空格。Vim 中 <code class="language-plaintext highlighter-rouge">%</code> 符号代表当前文件。因此，<code class="language-plaintext highlighter-rouge">g++\ %</code> 命令等于运行 <code class="language-plaintext highlighter-rouge">g++ hello.cpp</code>。</p>

<p>转到 <code class="language-plaintext highlighter-rouge">./hello.cpp</code> 然后运行 <code class="language-plaintext highlighter-rouge">:make</code>，Vim 将编译 <code class="language-plaintext highlighter-rouge">hello.cpp</code> 并输出 <code class="language-plaintext highlighter-rouge">a.out</code>（因为您没有指定输出）。让我们重构一下，使用去掉扩展名的原始文件名来命名编译后的输出。运行下面的命令（或将它们添加到vimrc）：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set makeprg=g++\ %\ -o\ %&lt;
</code></pre></div></div>

<p>上面的命令分解如下：</p>
<ul>
  <li><code class="language-plaintext highlighter-rouge">g++\\ %</code> 如上所述，等同于运行 <code class="language-plaintext highlighter-rouge">g++ &lt;your-file&gt;</code>。</li>
  <li><code class="language-plaintext highlighter-rouge">-o</code> 输出选项。</li>
  <li><code class="language-plaintext highlighter-rouge">%&lt;</code> 在 Vim 中代表了没有扩展名的当前文件名（如 <code class="language-plaintext highlighter-rouge">hello.cpp</code> 变成 <code class="language-plaintext highlighter-rouge">hello</code>）。</li>
</ul>

<p>当您在 <code class="language-plaintext highlighter-rouge">./hello.cpp</code> 中运行 <code class="language-plaintext highlighter-rouge">:make</code> 时，它将编译为 <code class="language-plaintext highlighter-rouge">./hello</code>。要在 <code class="language-plaintext highlighter-rouge">./hello.cpp</code> 中快速地执行 <code class="language-plaintext highlighter-rouge">./hello</code>，可以运行 <code class="language-plaintext highlighter-rouge">:!./%&lt;</code>。同样，它等同于运行 <code class="language-plaintext highlighter-rouge">:!./&lt;无后缀的当前文件名&gt;</code>。</p>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h :compiler</code> 和 <code class="language-plaintext highlighter-rouge">:h write-compiler-plugin</code> 可以了解更多信息。</p>

<h2 id="保存时自动编译">保存时自动编译</h2>

<p>有了自动化编译，您可以让生活更加轻松。回想一下，您可以使用 Vim 的 <code class="language-plaintext highlighter-rouge">autocmd</code> 来根据某些事件自动执行操作。例如，要自动在每次保存后编译 <code class="language-plaintext highlighter-rouge">.cpp</code> 文件，您可以将下面内容添加到vimrc：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:autocmd BufWritePost *.cpp make
</code></pre></div></div>

<p>现在您每次保存 <code class="language-plaintext highlighter-rouge">.cpp</code> 文件后，Vim 都将自动执行 <code class="language-plaintext highlighter-rouge">make</code> 命令。</p>

<h2 id="切换编译器">切换编译器</h2>

<p>Vim 有一个 <code class="language-plaintext highlighter-rouge">:compiler</code> 命令可以快速切换编译器。您的 Vim 可能附带了一些预构建的编译配置。要检查您拥有哪些编译器，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:e $VIMRUNTIME/compilers/&lt;tab&gt;
</code></pre></div></div>

<p>您应该会看到一个不同编程语言的编译器列表。</p>

<p>若要使用 <code class="language-plaintext highlighter-rouge">:compiler</code> 命令，假设您有一个 ruby 文件 <code class="language-plaintext highlighter-rouge">hello.rb</code>，内容是：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>puts "Hello ruby"
</code></pre></div></div>

<p>回想一下，如果运行 <code class="language-plaintext highlighter-rouge">:make</code>，Vim 将执行赋值给 <code class="language-plaintext highlighter-rouge">makeprg</code> 的任何命令（默认是 <code class="language-plaintext highlighter-rouge">make</code>）。如果您运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:compiler ruby
</code></pre></div></div>

<p>Vim 执行 <code class="language-plaintext highlighter-rouge">$VIMRUNTIME/compiler/ruby.vim</code> 脚本，并将 <code class="language-plaintext highlighter-rouge">makeprg</code> 更改为使用 <code class="language-plaintext highlighter-rouge">ruby</code> 命令。现在如果您运行 <code class="language-plaintext highlighter-rouge">:set makeprg?</code>，它会显示 <code class="language-plaintext highlighter-rouge">makeprg=ruby</code>（这取决于您 <code class="language-plaintext highlighter-rouge">$VIMRUNTIME/compiler/ruby.vim</code> 里的内容，如果您有其他自定义的 ruby 编译器，您的结果可能会有不同）。<code class="language-plaintext highlighter-rouge">:compiler &lt;your-lang&gt;</code> 命令允许您快速切换至其他编译器。如果您的项目使用多种语言，这会非常有用。</p>

<p>您不必使用 <code class="language-plaintext highlighter-rouge">:compiler</code> 或 <code class="language-plaintext highlighter-rouge">makeprg</code> 来编译程序。您可以运行测试脚本、分析文件、发送信号或任何您想要的内容。</p>

<h2 id="创建自定义编译器">创建自定义编译器</h2>

<p>让我们来创建一个简单的 Typescript 编译器。先在您的设备上安装 Typescript（<code class="language-plaintext highlighter-rouge">npm install -g typescript</code>），安装完后您将有 <code class="language-plaintext highlighter-rouge">tsc</code> 命令。如果您之前没有尝试过 typescript，<code class="language-plaintext highlighter-rouge">tsc</code> 将 Typescript 文件编译成 Javascript 文件。假设您有一个 <code class="language-plaintext highlighter-rouge">hello.ts</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const hello = "hello";
console.log(hello);
</code></pre></div></div>

<p>运行 <code class="language-plaintext highlighter-rouge">tsc hello.ts</code> 后，它将被编译成 <code class="language-plaintext highlighter-rouge">hello.js</code>。然而，如果您的 <code class="language-plaintext highlighter-rouge">hello.ts</code> 文件中有如下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>const hello = "hello";
hello = "hello again";
console.log(hello);
</code></pre></div></div>

<p>这会抛出错误，因为不能更改一个 <code class="language-plaintext highlighter-rouge">const</code> 变量。运行 <code class="language-plaintext highlighter-rouge">tsc hello.ts</code> 的错误如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>hello.ts:2:1 - error TS2588: Cannot assign to 'person' because it is a constant.

2 person = "hello again";
  ~~~~~~

Found 1 error.
</code></pre></div></div>

<p>要创建一个简单的 Typescript 编译器，请在您的 <code class="language-plaintext highlighter-rouge">~/.vim/</code> 目录中新添加一个 <code class="language-plaintext highlighter-rouge">compiler</code> 目录（即 <code class="language-plaintext highlighter-rouge">~/.vim/compiler/</code>），接着创建 <code class="language-plaintext highlighter-rouge">typescript.vim</code> 文件（即 <code class="language-plaintext highlighter-rouge">~/.vim/compiler/typescript.vim</code>），并添加如下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>CompilerSet makeprg=tsc
CompilerSet errorformat=%f:\ %m
</code></pre></div></div>

<p>第一行将 <code class="language-plaintext highlighter-rouge">makeprg</code> 设置为运行 <code class="language-plaintext highlighter-rouge">tsc</code> 命令。第二行将错误格式设置为显示文件（<code class="language-plaintext highlighter-rouge">%f</code>），后跟冒号（<code class="language-plaintext highlighter-rouge">:</code>）和转义的空格（<code class="language-plaintext highlighter-rouge">\ </code>），最后是错误消息（<code class="language-plaintext highlighter-rouge">%m</code>）。查阅 <code class="language-plaintext highlighter-rouge">:h errorformat</code> 可了解更多关于错误格式的信息。</p>

<p>您还可以阅读一些预制的编译器，看看它们是如何实现的。输入 <code class="language-plaintext highlighter-rouge">:e $VIMRUNTIME/compiler/&lt;some-language&gt;.vim</code> 查看。</p>

<p>有些插件可能会干扰 Typescript 文件，可以使用 <code class="language-plaintext highlighter-rouge">--noplugin</code> 标志以零插件的形式打开<code class="language-plaintext highlighter-rouge">hello.ts</code> 文件：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim --noplugin hello.ts
</code></pre></div></div>

<p>检查 <code class="language-plaintext highlighter-rouge">makeprg</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set makeprg?
</code></pre></div></div>

<p>它应该会显示默认的 <code class="language-plaintext highlighter-rouge">make</code> 程序。要使用新的 Typescript 编译器，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:compiler typescript
</code></pre></div></div>

<p>当您运行 <code class="language-plaintext highlighter-rouge">:set makeprg?</code> 时，它应该会显示 <code class="language-plaintext highlighter-rouge">tsc</code> 了。我们来测试一下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make %
</code></pre></div></div>

<p>回想一下，<code class="language-plaintext highlighter-rouge">%</code> 代表当前文件。看看您的 Typescript 编译器是否如预期一样工作。运行 <code class="language-plaintext highlighter-rouge">:copen</code> 可以查看错误列表。</p>

<h2 id="异步编译器">异步编译器</h2>

<p>有时编译可能需要很长时间。在等待编译时，您不会想眼睁睁盯着已冻结的 Vim 的。如果可以异步编译，就可以在编译期间继续使用 Vim 了，岂不美哉？</p>

<p>幸运的是，有插件来运行异步进程。有两个比较好的是：</p>

<ul>
  <li><a href="https://github.com/tpope/vim-dispatch">vim-dispatch</a></li>
  <li><a href="https://github.com/skywind3000/asyncrun.vim">asyncrun.vim</a></li>
</ul>

<p>在这一章中，我将介绍 vim-dispatch，但我强烈建议您尝试上述列表中所有插件。</p>

<p><em>Vim 和 NeoVim 实际上都支持异步作业，但它们超出了本章的范围。如果您好奇，可以查阅 <code class="language-plaintext highlighter-rouge">:h job-channel-overview.txt</code>。</em></p>

<h2 id="插件vim-dispatch">插件：Vim-dispatch</h2>

<p>Vim-dispatch 有几个命令，最主要的两个是 <code class="language-plaintext highlighter-rouge">:Make</code> 和 <code class="language-plaintext highlighter-rouge">:Dispatch</code>。</p>

<h3 id="异步make">异步Make</h3>

<p>Vim-dispatch 的 <code class="language-plaintext highlighter-rouge">:Make</code> 命令与 Vim 的 <code class="language-plaintext highlighter-rouge">:make</code> 相似，但它以异步方式运行。如果您正处于 Javascript 项目中，并且需要运行 <code class="language-plaintext highlighter-rouge">npm t</code>，可以将 <code class="language-plaintext highlighter-rouge">makeprg</code> 设置为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:set makeprg=npm\\ t
</code></pre></div></div>

<p>如果运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:make
</code></pre></div></div>

<p>Vim 将执行 <code class="language-plaintext highlighter-rouge">npm t</code>。但同时，您只能盯着冻结了的屏幕。有了 vim-dispatch，您只需要运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:Make
</code></pre></div></div>

<p>Vim 将启用后台进程异步运行 <code class="language-plaintext highlighter-rouge">npm t</code>，同时您还能在 Vim 中继续编辑您的文本。棒极了！</p>

<h3 id="异步调度dispatch">异步调度（Dispatch）</h3>

<p><code class="language-plaintext highlighter-rouge">:Dispatch</code> 命令的工作方式和 <code class="language-plaintext highlighter-rouge">:compiler</code> 及 <code class="language-plaintext highlighter-rouge">:!</code> 类似，它可以在Vim中运行任意外部命令。</p>

<p>假设您在 ruby spec 文件中，需要执行测试，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:Dispatch rspec %
</code></pre></div></div>

<p>Vim 将对当前文件异步运行 <code class="language-plaintext highlighter-rouge">rspec</code> 命令。</p>

<h3 id="自动调度">自动调度</h3>

<p>Vim-dispatch 有一个缓冲区变量<code class="language-plaintext highlighter-rouge">b:dispatch</code>，您可以配置它来自动执行特定命令，您可以利用 <code class="language-plaintext highlighter-rouge">autocmd</code>和它一起工作。如果在您的 vimrc 中添加如下内容：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>autocmd BufEnter *_spec.rb let b:dispatch = 'bundle exec rspec %'
</code></pre></div></div>

<p>现在每当您进入（<code class="language-plaintext highlighter-rouge">BufEnter</code>）一个以 <code class="language-plaintext highlighter-rouge">_spec.rb</code> 结尾的文件，运行<code class="language-plaintext highlighter-rouge">:Dispatch</code> 将自动执行 <code class="language-plaintext highlighter-rouge">bundle exec rspec &lt;your-current-ruby-spec-file&gt;</code>。</p>

<h2 id="聪明地学习编译">聪明地学习编译</h2>

<p>在本章中，您了解到可以使用 <code class="language-plaintext highlighter-rouge">make</code> 和 <code class="language-plaintext highlighter-rouge">compiler</code> 命令从Vim内部异步运行 <em>任何</em> 进程，以完善您的编程工作流程。Vim 拥有通过其他程序来扩展自身的能力，这使其变得强大。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch18_git/">Ch 18 - Git</a></li>
  <li>下一部分 <a href="../ch20_views_sessions_viminfo/">Ch 20 - 视图、会话和 Viminfo</a></li>
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
