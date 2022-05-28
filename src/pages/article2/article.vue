<template>
  <NavigationBar/>
  <PatternCenter title="博客的新用途"/>
  <div class="article-container">
    <article>
      <header></header>
      <div class="entry-content-box">
        <div class="entry-content"> <!--v-html="article.content"-->
          <main class="site-main">
            <article>
              <div class="entry-content">
                <p>自从建了博客以后，我一直在想，博客能够给我带来什么。在现在信息媒体充斥的时代，知乎、QQ空间、朋友圈、微博、b站动态，我们的内容生产力在转眼之间就被瓜分殆尽。除非是专业的自媒体从业人员，很难同时运营这些，更别提博客这种没啥收入的东西了。<br>
                  那么，如何让博客发挥自己的优势？我认为，博客的优势在于自由。在别人的网站上，生产的内容形式必然受到制约。而博客能够随着自己的喜好变换其使用的用途，这也体现了网站拥有者的成长。<br>
                  逼逼了这么多，其实接下来我想做的事情就是——在博客里开一个摄影作品栏目。最近换了新手机，总算有了玩摄影的条件了。摄影作品要贴出来才有意义，发在别的地方都感觉不太好，博客就非常合适。<br>
                  同时为了方便文件传输，我在手机上装了移动端，从此可以在手机上生产博客内容了。希望大家能够对咱的摄影作品给出意见~</p>
                <iframe src="//player.bilibili.com/player.html?aid=586689349&amp;bvid=BV1jz4y127B9&amp;cid=298946716&amp;page=1&amp;high_quality=1" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
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
iframe{
  width: 100%;
  height: 500px;
}
</style>