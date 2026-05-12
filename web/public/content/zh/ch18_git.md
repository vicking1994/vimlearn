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
    

    <title>第18章：Git</title>
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
    <link rel="canonical" href="https://wsdjeg.net/wiki/learn-vim/ch18_git/">
    <link rel="alternate" type="application/rss+xml" title="Eric's Blog" href="https://wsdjeg.net/feed.xml">
    
    <!-- SEO 标签 -->
    <!-- SEO Meta Tags -->
<meta name="keywords" content="">
<meta name="author" content="Eric Wong">

<!-- Open Graph / Facebook / 微信 / QQ / 微博 / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wsdjeg.net/wiki/learn-vim/ch18_git/">
<meta property="og:title" content="第18章：Git">
<meta property="og:description" content="专注于编程技术、开源项目与生活感悟的独立博客">
<meta property="og:image" content="https://wsdjeg.net/images/og-default.png">
<meta property="og:site_name" content="Eric's Blog">
<meta property="og:locale" content="zh_CN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://wsdjeg.net/wiki/learn-vim/ch18_git/">
<meta name="twitter:title" content="第18章：Git">
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
        <h1>第18章：Git</h1>
        <hr>
        <!-- prettier-ignore-start -->

<ul id="markdown-toc">
  <li><a href="#差异比较" id="markdown-toc-差异比较">差异比较</a></li>
  <li><a href="#使用-vim-作为合并工具" id="markdown-toc-使用-vim-作为合并工具">使用 Vim 作为合并工具</a></li>
  <li><a href="#在-vim-中使用-git" id="markdown-toc-在-vim-中使用-git">在 Vim 中使用 Git</a></li>
  <li><a href="#插件" id="markdown-toc-插件">插件</a></li>
  <li><a href="#vim-fugitive" id="markdown-toc-vim-fugitive">Vim-Fugitive</a></li>
  <li><a href="#git-status" id="markdown-toc-git-status">Git Status</a></li>
  <li><a href="#git-blame" id="markdown-toc-git-blame">Git Blame</a></li>
  <li><a href="#gdiffsplit" id="markdown-toc-gdiffsplit">Gdiffsplit</a></li>
  <li><a href="#gwrite-和-gread" id="markdown-toc-gwrite-和-gread">Gwrite 和 Gread</a></li>
  <li><a href="#gclog" id="markdown-toc-gclog">Gclog</a></li>
  <li><a href="#vim-fugitive-的更多功能" id="markdown-toc-vim-fugitive-的更多功能">Vim-Fugitive 的更多功能</a></li>
  <li><a href="#聪明地学习-vim-和-git" id="markdown-toc-聪明地学习-vim-和-git">聪明地学习 Vim 和 Git</a></li>
  <li><a href="#链接" id="markdown-toc-链接">链接</a></li>
</ul>

<!-- prettier-ignore-end -->

<p>Vim 和 Git 是两种实现不同功能的伟大工具。Vim 用于文本编辑，Git 用于版本控制。</p>

<p>在本章中，您将学习如何将 Vim 和 Git 集成在一起。</p>

<h2 id="差异比较">差异比较</h2>

<p>在上一章中，您看到了如何运行 <code class="language-plaintext highlighter-rouge">vimdiff</code> 命令以显示多个文件之间的差异。</p>

<p>假设您有两个文件，<code class="language-plaintext highlighter-rouge">file1.txt</code> 和 <code class="language-plaintext highlighter-rouge">file2.txt</code>。</p>

<p><code class="language-plaintext highlighter-rouge">file1.txt</code> 的内容如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
apples

milk
apple juice

yogurt
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">file2.txt</code> 的内容如下：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
oranges

milk
orange juice

yogurt
</code></pre></div></div>

<p>若要查看两个文件之间的差异，请运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vimdiff file1.txt file2.txt
</code></pre></div></div>

<p>或者也可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>vim -d file1.txt file2.txt
</code></pre></div></div>

<p align="center">
  <img alt="Basic diffing with Vim" width="900" height="auto" src="images/diffing-basic.png" />
</p>

<p><code class="language-plaintext highlighter-rouge">vimdiff</code> 并排显示两个缓冲区。左边是 <code class="language-plaintext highlighter-rouge">file1.txt</code>，右边是 <code class="language-plaintext highlighter-rouge">file2.txt</code>。不同的两行（apples 和 oranges）会被高亮显示。</p>

<p>假设您要使第二个缓冲区相应位置变成 apples，而不是 oranges。若想从 <code class="language-plaintext highlighter-rouge">file1.txt</code> 传输您当前位置（当前您在 <code class="language-plaintext highlighter-rouge">file1.txt</code>）的内容到 <code class="language-plaintext highlighter-rouge">file2.txt</code>，首先使用 <code class="language-plaintext highlighter-rouge">]c</code> 跳转到下一处差异（使用 <code class="language-plaintext highlighter-rouge">[c</code> 可跳回上一处差异），现在光标应该在 apples 上了。接着运行 <code class="language-plaintext highlighter-rouge">:diffput</code>。此时，这两个文件都是 apples 了。</p>

<p align="center">
  <img alt="Finding files in FZF" width="900" height="auto" src="images/diffing-apples.png" />
</p>

<p>如果您想从另一个缓冲区（orange juice，<code class="language-plaintext highlighter-rouge">file2.txt</code>）传输文本来替代当前缓冲区（apple juice，<code class="language-plaintext highlighter-rouge">file1.txt</code>），让您的光标仍然位于 <code class="language-plaintext highlighter-rouge">file1.txt</code> 的窗口中，首先使用 <code class="language-plaintext highlighter-rouge">]c</code> 跳转至下一处差异，此时光标应该在 apple juice 上。接着运行 <code class="language-plaintext highlighter-rouge">:diffget</code> 获取另一个缓冲区的 orange juice 来替代当前缓冲区中的 apple juice。</p>

<p><code class="language-plaintext highlighter-rouge">:diffput</code> 将文本从当前缓冲区 <em>输出</em> 到另一个缓冲区。<code class="language-plaintext highlighter-rouge">:diffget</code> 从另一个缓冲区 <em>获取</em> 文本到当前缓冲区。</p>

<p>如果有多个缓冲区，可以运行 <code class="language-plaintext highlighter-rouge">:diffput fileN.txt</code> 和 <code class="language-plaintext highlighter-rouge">:diffget fileN.txt</code> 来指定目标缓冲区 fileN。</p>

<h2 id="使用-vim-作为合并工具">使用 Vim 作为合并工具</h2>

<blockquote>
  <p>“我非常喜欢解决合并冲突。” ——佚名</p>
</blockquote>

<p>我不知道有谁喜欢解决合并冲突，但总之，合并冲突是无法避免的。在本节中，您将学习如何利用 Vim 作为解决合并冲突的工具。</p>

<p>首先，运行下列命令来将默认合并工具更改为 <code class="language-plaintext highlighter-rouge">vimdiff</code>：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git config merge.tool vimdiff
git config merge.conflictstyle diff3
git config mergetool.prompt false
</code></pre></div></div>

<p>或者您也可以直接修改 <code class="language-plaintext highlighter-rouge">~/.gitconfig</code>（默认情况下，它应该处于根目录中，但您的可能在不同的位置）。上面的命令应该会将您的 <code class="language-plaintext highlighter-rouge">gitconfig</code> 改成如下设置的样子，如果您还没有运行上面的命令，您也可以手动更改您的 gitconfig。</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>[core]
  editor = vim
[merge]
  tool = vimdiff
  conflictstyle = diff3
[difftool]
  prompt = false
</code></pre></div></div>

<p>让我们创建一个假的合并冲突来测试一下。首先创建一个目录 <code class="language-plaintext highlighter-rouge">/food</code>，并初始化 git 仓库：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git init
</code></pre></div></div>

<p>添加 <code class="language-plaintext highlighter-rouge">breakfast.txt</code> 文件，内容为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
oranges
</code></pre></div></div>

<p>添加文件并提交它：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git add .
git commit -m "Initial breakfast commit"
</code></pre></div></div>

<p>接着，创建一个新分支 apples：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git checkout -b apples
</code></pre></div></div>

<p>更改 <code class="language-plaintext highlighter-rouge">breakfast.txt</code> 文件为：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
apples
</code></pre></div></div>

<p>保存文件，添加并提交更改：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git add .
git commit -m "Apples not oranges"
</code></pre></div></div>

<p>真棒！现在 master 分支有 oranges，而 apples 分支有 apples。接着回到 master 分支：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git checkout master
</code></pre></div></div>

<p>在 <code class="language-plaintext highlighter-rouge">breakfast.txt</code> 文件中，您应该能看到原来的文本 oranges。接着将它改成 grapes，因为它是现在的应季水果：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
grapes
</code></pre></div></div>

<p>保存、添加、提交：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git add .
git commit -m "Grapes not oranges"
</code></pre></div></div>

<p>嚯！这么多步骤！现在准备要将 apples 分支合并进 master 分支了：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git merge apples
</code></pre></div></div>

<p>您应该会看到如下错误：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Auto-merging breakfast.txt
CONFLICT (content): Merge conflict in breakfast.txt
Automatic merge failed; fix conflicts and then commit the result.
</code></pre></div></div>

<p>没错，一个冲突！现在一起来用一下新配置的 <code class="language-plaintext highlighter-rouge">mergetool</code> 来解决冲突吧！运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git mergetool
</code></pre></div></div>

<p align="center">
  <img alt="Three-way mergetool with Vim" width="900" height="auto" src="images/mergetool-initial.png" />
</p>

<p>Vim 显示了四个窗口。注意一下顶部三个：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">LOCAL</code> 包含了 <code class="language-plaintext highlighter-rouge">grapes</code>。这是“本地”中的变化，也是您要合并的内容。</li>
  <li><code class="language-plaintext highlighter-rouge">BASE</code> 包含了 <code class="language-plaintext highlighter-rouge">oranges</code>。这是 <code class="language-plaintext highlighter-rouge">LOCAL</code> 和 <code class="language-plaintext highlighter-rouge">REMOTE</code> 的共同祖先，用于比较它们之间的分歧。</li>
  <li><code class="language-plaintext highlighter-rouge">REMOTE</code> 包含了 <code class="language-plaintext highlighter-rouge">apples</code>。这是要被合并的内容。</li>
</ul>

<p>底部窗口（也即第四个窗口），您能看到：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>pancakes
waffles
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
grapes
||||||| db63958
oranges
=======
apples
&gt;&gt;&gt;&gt;&gt;&gt;&gt; apples
</code></pre></div></div>

<p>第四个窗口包含了合并冲突文本。有了这步设置，就能更轻松看到哪个环境发生了什么变化。您可以同时查看 <code class="language-plaintext highlighter-rouge">LOCAL</code>、<code class="language-plaintext highlighter-rouge">BASE</code> 和 <code class="language-plaintext highlighter-rouge">REMOTE</code> 的内容。</p>

<p>您的光标应该在第四个窗口的高亮区域。再运行 <code class="language-plaintext highlighter-rouge">:diffget LOCAL</code>，就可以<em>获取</em>来自 <code class="language-plaintext highlighter-rouge">LOCAL</code> 的改变（grapes）。同样，运行 <code class="language-plaintext highlighter-rouge">:diffget BASE</code> 可以获取来自 <code class="language-plaintext highlighter-rouge">BASE</code> 的改变（oranges），而运行 <code class="language-plaintext highlighter-rouge">:diffget REMOTE</code> 可以获取来自 <code class="language-plaintext highlighter-rouge">REMOTE</code> 的改变（apples）。</p>

<p>在这个例子中，我们试着获取来自 <code class="language-plaintext highlighter-rouge">LOCAL</code> 的改变。运行 <code class="language-plaintext highlighter-rouge">:diffget LO</code>（<code class="language-plaintext highlighter-rouge">LOCAL</code> 的简写），第四个窗口变成了 grapes。完成后，就可以保存并退出所有文件（<code class="language-plaintext highlighter-rouge">:wqall</code>）了。还不错吧？</p>

<p>稍加留意您会发现，现在多了一个 <code class="language-plaintext highlighter-rouge">breakfast.txt.orig</code> 文件。这是 Git 防止事与愿违而创建的备份文件。如果您不希望 Git 在合并期间创建备份文件，可以运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git config --global mergetool.keepBackup false
</code></pre></div></div>

<h2 id="在-vim-中使用-git">在 Vim 中使用 Git</h2>

<p>Vim 本身没有集成 Git，要在 Vim 中执行 Git 命令，一种方法是在命令行模式中使用 <code class="language-plaintext highlighter-rouge">!</code> 叹号运算符。</p>

<p>使用 <code class="language-plaintext highlighter-rouge">!</code> 可以运行任何 Git 命令：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!git status
:!git commit
:!git diff
:!git push origin master
</code></pre></div></div>

<p>您还可以使用 Vim 的特殊字符 <code class="language-plaintext highlighter-rouge">%</code> (当前缓冲区) 或 <code class="language-plaintext highlighter-rouge">#</code> (其他缓冲区)：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!git add %         " git add current file
:!git checkout #    " git checkout the other file
</code></pre></div></div>

<p>这里有一个Vim技巧，您可以用来添加不同Vim窗口中的多个文件，运行：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>windo !git add %
</code></pre></div></div>

<p>然后提交：</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>:!git commit "添加了Vim窗口中的所有文件，酷"
</code></pre></div></div>

<p><code class="language-plaintext highlighter-rouge">windo</code>命令是VIm的 “do” 命令其中之一，类似于您前面看到的 <code class="language-plaintext highlighter-rouge">argdo</code> 。<code class="language-plaintext highlighter-rouge">windo</code> 将命令执行在每一个窗口中。</p>

<h2 id="插件">插件</h2>

<p>这里有很多提供git支持的Vim插件。以下是 Vim 中较流行的 Git 相关插件列表（您读到这篇文章时可能又有更多）：</p>

<ul>
  <li><a href="https://github.com/airblade/vim-gitgutter">vim-gitgutter</a></li>
  <li><a href="https://github.com/mhinz/vim-signify">vim-signify</a></li>
  <li><a href="https://github.com/tpope/vim-fugitive">vim-fugitive</a></li>
  <li><a href="https://github.com/junegunn/gv.vim">gv.vim</a></li>
  <li><a href="https://github.com/jreybert/vimagit">vimagit</a></li>
  <li><a href="https://github.com/sodapopcan/vim-twiggy">vim-twiggy</a></li>
  <li><a href="https://github.com/tpope/vim-rhubarb">rhubarb</a></li>
</ul>

<p>其中最流行的是 vim-fugitive。本章的剩余部分，我将使用此插件来介绍几个 git 工作流。</p>

<h2 id="vim-fugitive">Vim-Fugitive</h2>

<p>vim-fugitive 插件允许您在不离开 Vim 编辑器的情况下运行 git 命令行界面。您会发现，有些命令在 Vim 内部执行时会更好。</p>

<p>开始前，请先使用 Vim 插件管理器（<a href="https://github.com/junegunn/vim-plug">vim-plug</a>、<a href="https://github.com/VundleVim/Vundle.vim">vundle</a>、<a href="https://github.com/Shougo/dein.vim">dein.vim</a> 等）安装 vim-fugitive。</p>

<h2 id="git-status">Git Status</h2>

<p>当您不带参数地运行 <code class="language-plaintext highlighter-rouge">:Git</code> 命令时，vim-fugitive 将显示一个 git 概要窗口，它显示了未跟踪、未暂存和已暂存的文件。在此 “<code class="language-plaintext highlighter-rouge">git status</code>” 模式下，您可以做一些操作：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">Ctrl-n</code> / <code class="language-plaintext highlighter-rouge">Ctrl-p</code> 转到下一个 / 上一个文件。</li>
  <li><code class="language-plaintext highlighter-rouge">-</code> 暂存或取消暂存光标处的文件。</li>
  <li><code class="language-plaintext highlighter-rouge">s</code> 暂存光标处的文件。</li>
  <li><code class="language-plaintext highlighter-rouge">u</code> 取消暂存光标处的文件。</li>
  <li><code class="language-plaintext highlighter-rouge">&gt;</code> / <code class="language-plaintext highlighter-rouge">&lt;</code> 内联显示或隐藏光标处文件的差异变化。</li>
</ul>

<p align="center">
  <img alt="Finding files in FZF" width="900" height="auto" src="images/fugitive-git.png" />
</p>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h fugitive-staging-maps</code> 可获得更多信息。</p>

<h2 id="git-blame">Git Blame</h2>

<p>在当前文件运行 <code class="language-plaintext highlighter-rouge">:Git blame</code> 命令，vim-fugitive 可以显示一个拆分的问责窗口。这有助于追踪那些 BUG 是谁写的，接着就可以冲他/她怒吼（开个玩笑）。</p>

<p>在  <code class="language-plaintext highlighter-rouge">"git blame"</code> 模式下您可以做：</p>

<ul>
  <li><code class="language-plaintext highlighter-rouge">q</code> 关闭问责窗口。</li>
  <li><code class="language-plaintext highlighter-rouge">A</code> 调整作者列大小。</li>
  <li><code class="language-plaintext highlighter-rouge">C</code> 调整提交列大小。</li>
  <li><code class="language-plaintext highlighter-rouge">D</code> 调整日期/时间列大小。</li>
</ul>

<p>查阅 <code class="language-plaintext highlighter-rouge">:h :Git_blame</code> 可获得更多信息。</p>

<p align="center">
  <img alt="Finding files in FZF" width="900" height="auto" src="images/fugitive-git-blame.png" />
</p>

<h2 id="gdiffsplit">Gdiffsplit</h2>

<p>当您运行 <code class="language-plaintext highlighter-rouge">:Gdiffsplit</code> 命令后，vim-fugitive 会执行 <code class="language-plaintext highlighter-rouge">vimdiff</code>，比对索引或工作树中的版本与当前文件最新更改的区别。如果运行 <code class="language-plaintext highlighter-rouge">:Gdiffsplit &lt;commit&gt;</code>，vim-fugitive 则会根据 <code class="language-plaintext highlighter-rouge">&lt;commit&gt;</code> 中的版本来执行 <code class="language-plaintext highlighter-rouge">vimdiff</code>。</p>

<p align="center">
  <img alt="Finding files in FZF" width="900" height="auto" src="images/fugitive-gdiffsplit.png" />
</p>

<p>由于您处于 <code class="language-plaintext highlighter-rouge">vimdiff</code> 模式中，因此您可以使用 <code class="language-plaintext highlighter-rouge">:diffput</code> 和 <code class="language-plaintext highlighter-rouge">:diffget</code> 来 <em>获取</em> 或 <em>输出</em> 差异。</p>

<h2 id="gwrite-和-gread">Gwrite 和 Gread</h2>

<p>当您在更改文件后运行 <code class="language-plaintext highlighter-rouge">:Gwrite</code> 命令，vim-fugitive 将暂存更改，就像运行 <code class="language-plaintext highlighter-rouge">git add &lt;current-file&gt;</code> 一样。</p>

<p>当您在更改文件后运行 <code class="language-plaintext highlighter-rouge">:Gread</code> 命令，vim-fugitive 会将文件还原至更改前的状态，就像运行 <code class="language-plaintext highlighter-rouge">git checkout &lt;current-file&gt;</code> 一样。使用 <code class="language-plaintext highlighter-rouge">:Gread</code> 还有一个好处是操作可撤销。如果在运行 <code class="language-plaintext highlighter-rouge">:Gread</code> 后您改变主意，想要保留原来的更改，您只需要撤消（<code class="language-plaintext highlighter-rouge">u</code>），Vim 将撤回 <code class="language-plaintext highlighter-rouge">:Gread</code> 操作。要换作是在命令行中运行 <code class="language-plaintext highlighter-rouge">git checkout &lt;current-file&gt;</code>，就完成不了这种操作了。</p>

<h2 id="gclog">Gclog</h2>

<p>当您运行 <code class="language-plaintext highlighter-rouge">:Gclog</code> 命令时，vim-fugitive 将显示提交历史记录，就像运行 <code class="language-plaintext highlighter-rouge">git log</code> 命令一样。Vim-fugitive 使用 Vim 的 quickfix 来完成此任务，因此您可以使用 <code class="language-plaintext highlighter-rouge">:cnext</code> 和 <code class="language-plaintext highlighter-rouge">:cprevious</code> 来遍历下一个或上一个日志信息。您还可以使用 <code class="language-plaintext highlighter-rouge">:copen</code> 和 <code class="language-plaintext highlighter-rouge">:cclose</code> 打开或关闭日志列表。</p>

<p align="center">
  <img alt="Finding files in FZF" width="900" height="auto" src="images/fugitive-git-log.png" />
</p>

<p>在 <code class="language-plaintext highlighter-rouge">"git log"</code> 模式中，您可以做两件事：</p>
<ul>
  <li>查看树。</li>
  <li>访问父级（上一个提交）。</li>
</ul>

<p>您可以像 <code class="language-plaintext highlighter-rouge">git log</code> 命令一样，传递参数给 <code class="language-plaintext highlighter-rouge">:Gclog</code> 命令。如果您项目的提交历史记录很长，只想看最后三个提交，则可以运行 <code class="language-plaintext highlighter-rouge">:Gclog -3</code>。如果需要根据提交日期来筛选记录，可以运行类似 <code class="language-plaintext highlighter-rouge">:Gclog --after="January 1" --before="March 14"</code> 的命令。</p>

<h2 id="vim-fugitive-的更多功能">Vim-Fugitive 的更多功能</h2>

<p>以上只是寥寥几个 vim-fugitive 功能的例子，您可以查阅 <code class="language-plaintext highlighter-rouge">:h fugitive.txt</code> 来了解更多有关 vim-fugitive 的信息。大多数流行的 git 命令可能都有 vim-fugitive 的优化版本，您只需在文档中查找它们。</p>

<p>如果您处于 vim-fugitive 的“特殊模式”（如 <code class="language-plaintext highlighter-rouge">:Git</code> 或 <code class="language-plaintext highlighter-rouge">:Git blame</code> 模式）中，按下 <code class="language-plaintext highlighter-rouge">g?</code> 可以了解当前有哪些可用的快捷键，Vim-fugitive 将为您所处的模式显示相应的 <code class="language-plaintext highlighter-rouge">:help</code> 窗口。棒极了！</p>

<h2 id="聪明地学习-vim-和-git">聪明地学习 Vim 和 Git</h2>

<p>每个人都有不同的 git 工作流，可能 vim-fugitive 非常合适您的工作流（也可能不适合）。总之，我强烈建议您试试上面列出的所有插件。可能还有一些其他的我没有列出来，都可以去试一试。</p>

<p>要让Vim-git的集成工作得更好，一个显而易见的办法就是去深入了解git。Git 本身是一个很庞大的主题，我只向您展示了它其中很小的一部分。好了，接下来谈谈如何使用 Vim 编译您的代码。</p>

<h2 id="链接">链接</h2>
<ul>
  <li><a href="../">目录</a></li>
  <li>上一部分 <a href="../ch17_fold/">Ch 17 - 折叠</a></li>
  <li>下一部分 <a href="../ch19_compile/">Ch 19 - 编译</a></li>
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
