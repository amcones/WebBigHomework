<template>
  <NavigationBar/>
  <PatternCenter title="关于本站"/>
  <div class="article-container">
    <article>
      <header></header>
      <div class="entry-content-box">
        <div class="entry-content"> <!--v-html="article.content"-->
          <main class="site-main">
            <article>
              <h1 data-aos="fade-up" data-aos-duration="1000">基本信息</h1>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                我是uli（王鼎亿），本站的开发者。这个网站是我的web大作业，在完成它的同时我也加深了对前端页面设计的理解。
                <br/>
                目前，本站仍在开发当中。虽然碍于时间限制无法以一个更好的状态发布，但是我想要在接下来的时间里继续对它进行版本迭代。<br/>
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1000">关于网站</h1>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                在开发这个网站时，我不仅想把它作为一个作业，更是想把它投入到实际的使用当中。本站使用了vue3框架与element plus库进行开发，遵循MVVM设计模式，将视图与数据解耦，做到数据驱动视图。在设计上参考了<a href="https://github.com/mirai-mamori/Sakurairo">Sakurairo</a>主题，采用响应式设计，具有良好的视觉动效，在移动端上也做了相应的适配。
              </p>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                虽然因为时间因素，我未能实现后台，因此这里的界面都是写死的静态页面（但我还是实现了一部分前端的接口）。如果之后有时间，我也许会为它编写自己的后台并把它投入使用。
              </p>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                在开发过程中，我学到了许多新的技术与技巧，对五花八门的前端技术有了一些自己的想法，也对一些想做但未能实现的功能感到遗憾。我会将这些运用到之后的开发之中，努力做出更好的产品。
              </p>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                左上角的标识Amcones是我常用的用户名，由于是自创词没有合适的读音，所以大家更多叫我uli。希望这个网站能够给你带来良好的体验。
              </p>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                由于我本人是一名坚定的开源主义者，同时这个站点的开发也使用了许多的开源项目，所以我会将本站点以MIT协议开源于Github网站。
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1000">TODOs</h1>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                为博客设计数据库<br/>
                使用Java实现博客后台管理系统<br/>
                删除静态代码，完全以MVVM模式驱动<br/>
                将一部分网页实现为路由驱动的单页应用，最大化利用Vue的功能<br/>
                实现登录注册<br/>
                优化页面设计<br/>
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1000">时间表</h1>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <em>2022/5/23 开始网站的编写</em><br/>
                <em>2022/5/26 完成网站最初版本的编写</em><br/>
                <em>2022/5/27 部署于个人服务器</em><br/>
                <em>2022/5/28 于Github开源</em><br/>
                <em>To be continued...</em>
              </p>
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