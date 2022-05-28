<template>
  <NavigationBar/>
  <PatternCenter title="使用frp搭建个人办公网络"/>
  <div class="article-container">
    <article>
      <header></header>
      <div class="entry-content-box">
        <div class="entry-content"> <!--v-html="article.content"-->
          <main class="site-main">
            <article>
              <div class="entry-content">
                <p>假如你有一台云服务器，除了建站，还能够做什么有意思的事情？当然是使用<strong>frp</strong>将个人的所有计算机资源进行互联啦！</p>
                <p>使用星型拓扑结构，将所有家用电脑连到frp服务器上，然后就可以通过任何一个联网终端对<strong>整个网络系统</strong>进行SSH或者VNC连接。</p>
                <p>重点在于：<br>
                  - 安装并配置服务端、客户端<br>
                  - 注意端口畅通<br>
                  - 开机自启，保护进程</p>
                <p>本文配置基于：服务端<strong>ubuntu</strong>，客户端<strong>macOS Monterey</strong>。</p>
                <h2 id="%E5%AE%89%E8%A3%85%E5%B9%B6%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E7%AB%AF%E3%80%81%E5%AE%A2%E6%88%B7%E7%AB%AF">安装并配置服务端、客户端</h2>
                <p>首先在服务端和客户端上下载对应版本frp。<br>
                  <a class="wp-editor-md-post-content-link" href="https://github.com/fatedier/frp/releases/tag/v0.40.0" target="_blank" rel="nofollow">frp下载</a></p>
                <h3 id="%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE">服务端配置</h3>
                <p>首先需要一台有公网ip的服务器就不用多说了。</p>
                <p>以下命令仅供参考</p>
                <p>Ubuntu下载frp并保存到当前文件夹的命令行</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-0">wget  https://github.com/fatedier/frp/releases/download/v0.31.1/frp_0.31.1_linux_amd64.tar.gz
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-0" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>解压tar.gz</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-1">tar -zxvf frp_0.31.1_linux_arm64.tar.gz
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-1" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>进入到文件夹下</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-2"><span class="hljs-built_in">cd</span> frp_0.31.1_linux_arm64
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-2" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>然后服务端的配置都在frps.ini中，使用vim进行编辑</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-3">vim frps.ini
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-3" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>一般的配置如下</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-ini hljs" data-rel="INI" id="code-block-4"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-section">[common]</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2"><span class="hljs-comment">#bind_addr = 0.0.0.0</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"><span class="hljs-attr">bind_port</span> = <span class="hljs-number">7000</span>  //<span class="hljs-number">7000</span>端口是和客户端连接时使用的端口。</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5">//服务器查看端口账号</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6"><span class="hljs-attr">dashboard_port</span> = <span class="hljs-number">7500</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7"><span class="hljs-attr">dashboard_user</span> = admin</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8"><span class="hljs-attr">dashboard_pwd</span> = admin</td></tr></tbody></table></code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-4" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>在浏览器输入服务器ip:7500可以看到一个仪表台。</p>
                <p>配置完成后，运行服务端即可启动服务端frp服务。</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-5"> ./frps -c ./frps.ini
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-5" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <h3 id="%E5%AE%A2%E6%88%B7%E7%AB%AF">客户端</h3>
                <p>客户端配置与服务器相差不大，只不过修改的都是frpc文件。（frps的s表示server，frpc的c表示client）</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-ini hljs" data-rel="INI" id="code-block-6"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-section">[common]</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2"><span class="hljs-attr">server_addr</span> = xx.xx.xx.xx   //服务端的IP地址</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"><span class="hljs-attr">server_port</span> = <span class="hljs-number">7000</span>          和服务端端口一致</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5"><span class="hljs-section">[RDP]</span>                   //远程桌面配置</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6"><span class="hljs-attr">type</span> = tcp</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7"><span class="hljs-attr">local_ip</span> = <span class="hljs-number">0.0</span>.<span class="hljs-number">0.0</span>     //没太弄懂  填<span class="hljs-number">0.0</span>.<span class="hljs-number">0.0</span>和<span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>都可以</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8"><span class="hljs-attr">local_port</span> = <span class="hljs-number">5900</span>      //随便填，但是不能和其他端口重合，两边服务器都把这些端口打开</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="9"><div class="hljs-ln-n" data-line-number="9"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="9"><span class="hljs-attr">remote_port</span> = <span class="hljs-number">6001</span>      //这个端口是远程连接的用户所使用的端口</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="10"><div class="hljs-ln-n" data-line-number="10"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="10"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="11"><div class="hljs-ln-n" data-line-number="11"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="11"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="12"><div class="hljs-ln-n" data-line-number="12"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="12"><span class="hljs-section">[ssh]</span>                   //连接的名字，不能重复</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="13"><div class="hljs-ln-n" data-line-number="13"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="13"><span class="hljs-attr">type</span> = tcp</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="14"><div class="hljs-ln-n" data-line-number="14"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="14"><span class="hljs-attr">local_ip</span> = <span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="15"><div class="hljs-ln-n" data-line-number="15"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="15"><span class="hljs-attr">local_port</span> = <span class="hljs-number">22</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="16"><div class="hljs-ln-n" data-line-number="16"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="16"><span class="hljs-attr">remote_port</span> = <span class="hljs-number">6000</span>     远程连接的用户使用这个端口来访问内网机器</td></tr></tbody></table></code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-6" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>设置好后启动</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-7"> ./frpc -c ./frpc.ini
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-7" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>在多个客户端上，只需要修改连接的名字和远程端口即可。注意服务端和客户端的端口入和出方向都要放通。</p>
                <h2 id="%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C">后台运行</h2>
                <p>不可能就这样挂着个黑终端使用，要确保终端窗口关闭后依然运行。</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-8"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1">服务端： <span class="hljs-built_in">nohup</span> ./frps -c frps.ini &gt;/dev/null 2&gt;&amp;1 &amp;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3">客户端： <span class="hljs-built_in">nohup</span> ./frpc -c frpc.ini &gt;/dev/null 2&gt;&amp;1 &amp;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5">说明：&gt;/dev/null 2&gt;&amp;1 &amp;，表示丢弃。</td></tr></tbody></table></code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-8" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <h2 id="%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%EF%BC%8C%E4%BF%9D%E6%8A%A4%E8%BF%9B%E7%A8%8B">开机自启，保护进程</h2>
                <p>由于我们要使用frp打破地域限制，往往需要一个长期稳定的连接，因此我们要设置开机自启，保护进程，做到只要计算机开机就可以访问。</p>
                <p>在<strong>ubuntu</strong>上，可以用systemctl控制启动。</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-9">sudo vim /lib/systemd/system/frps.service
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-9" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>写入</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-ini hljs" data-rel="INI" id="code-block-10"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-section">[Unit]</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2"><span class="hljs-attr">Description</span>=fraps service</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"><span class="hljs-attr">After</span>=network.target syslog.target</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"><span class="hljs-attr">Wants</span>=network.target</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6"><span class="hljs-section">[Service]</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7"><span class="hljs-attr">Type</span>=simple</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8"><span class="hljs-comment">#启动服务的命令（此处写你的frps的实际安装目录）</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="9"><div class="hljs-ln-n" data-line-number="9"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="9"><span class="hljs-attr">ExecStart</span>=/你的frp安装路径/frps -c /你的frp安装路径/frps.ini</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="10"><div class="hljs-ln-n" data-line-number="10"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="10"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="11"><div class="hljs-ln-n" data-line-number="11"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="11"><span class="hljs-section">[Install]</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="12"><div class="hljs-ln-n" data-line-number="12"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="12"><span class="hljs-attr">WantedBy</span>=multi-user.target</td></tr></tbody></table></code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-10" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>启动frps</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-11">sudo systemctl start frps
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-11" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>打开自启动</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-12">sudo systemctl <span class="hljs-built_in">enable</span> frps
</code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-12" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>客户端也可以采用类似的操作，但我的客户端是<strong>mac</strong>，需要使用另外的方法。</p>
                <p>配置plist实现开机自启：</p>
                <pre class="highlight-wrap" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" design="by Mashiro"><code class="language-bash hljs" data-rel="BASH" id="code-block-13"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-built_in">touch</span> ~/Library/LaunchAgents/frpc.plist</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">vim ~/Library/LaunchAgents/frpc.plist</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"><span class="hljs-comment"># 以下为 frpc.plist 配置</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5">https://streamelody.github.io/assets/attachment/frpc.plist</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7"><span class="hljs-comment"># 加载生效</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8">sudo <span class="hljs-built_in">chown</span> root ~/Library/LaunchAgents/frpc.plist</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="9"><div class="hljs-ln-n" data-line-number="9"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="9">sudo launchctl load -w ~/Library/LaunchAgents/frpc.plist</td></tr></tbody></table></code><a class="copy-code" href="javascript:" data-clipboard-target="#code-block-13" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a></pre>
                <p>需要注意的是，macOS开机自启服务有两个文件夹，分别为<code>LaunchAgents</code>和<code>LaunchDaemons</code>，区别在于<strong>用户登录前后启动</strong>。如果需要在登录之前就启动frp服务的话，就需要把plist放到<code>LaunchDaemons</code>中。</p>
                <h3 id="%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4">常用命令</h3>
                <p>重启应用：<code>sudo systemctl restart frps</code></p>
                <p>停止应用：<code>sudo systemctl enable frps</code></p>
                <p>查看日志：<code>sudo systemctl status frps</code></p>
                <h2 id="%E4%BD%BF%E7%94%A8">使用</h2>
                <p>可以正常地使用控制台ssh 服务器ip:端口就可以访问内网机器，也可以使用系统自带的远程桌面来连接。</p>
                <p>需要注意的是，如果不能正常连接，很有可能是mac的端口没有开放，可以换常用开放端口。</p>
                <p>如果想使用ssh进行远程开发的话，无论是vsc还是gateway等似乎都只能在Linux上运行。所以，应当将作为中心节点的Linux服务器作为核心开发环境，无论是通过内网机器进行开发，或是从其它网络ssh到中心服务器上都能够得到全部的计算机资源。</p>
                <p>目前gateway bug还挺多的，vsc的ssh相比之下好用多了。</p>
                <!--<div class="oshimai"></div>-->
                <!--<h2 style="opacity:0;max-height:0;margin:0">Comments</h2>--><!-- 评论跳转标记 -->
              </div>
            </article>
          </main>
        </div>
      </div>
    </article>
  </div>
  <FooterBar/>
</template>

<script>
import PatternCenter from "@/components/Header/PatternCenter";
import NavigationBar from "@/components/Header/NavigationBar";
import FooterBar from "@/components/Footer/footerBar";
export default {
  name: "AboutPage",
  components:{
    FooterBar,
    NavigationBar,
    PatternCenter,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc, 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;
}
.article-container p{
  display: inline-block;
  line-height: 2rem;
  margin:0 0 25px 0;
}
a{
  color: #409EFF;
  text-decoration: none;
}
h1{
  color: rgba(73,146,188,0.83);
  font-size: 2rem;
  line-height: 4rem;
}
h2{
  color: rgba(73,146,188,0.83);
  font-size: 1.5rem;
  line-height: 4rem;
}
h3{
  color: rgba(73,146,188,0.83);
  font-size: 1.5rem;
  line-height: 4rem;
}
p{
  max-width: 100vw;
}
.entry-content-box {
  max-width: 860px;
  padding: 0 20px;
  margin: 0 auto;
}

.site-main {
  padding: 4.5% 0 0;
}
</style>