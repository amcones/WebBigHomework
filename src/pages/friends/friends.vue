<template>
  <NavigationBar/>
  <PatternCenter title="友链"/>
  <div class="main-container">
    <h1 data-aos="fade-up" data-aos-duration="800">大佬们</h1>
    <div class="friend-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <div class="friend-card">
        <a href="https://davincievans.top/">
          <div class="friend-card-image">
            <img src="https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg">
          </div>
          <div class="friend-card-title">
            Davinci
          </div>
          <div class="friend-card-describe">
            是搭建博客过程中认识的大佬
          </div>
        </a>
      </div>
      <div class="friend-container">
        <div class="friend-card">
          <a href="https://2heng.xin/">
            <div class="friend-card-image">
              <img src="https://view.moezx.cc/images/2018/03/27/avatar.jpg">
            </div>
            <div class="friend-card-title">
              Mashiro
            </div>
            <div class="friend-card-describe">
              Sakura主题的作者
            </div>
          </a>
        </div>
      </div>
      <div class="friend-container">
        <div class="friend-card">
          <a href="https://asuhe.jp/">
            <div class="friend-card-image">
              <img src="https://asuhe.jp/wp-content/uploads/2020/12/logo.png">
            </div>
            <div class="friend-card-title">
              約束の明日へ
            </div>
            <div class="friend-card-describe">
              Sakurairo主题的作者
            </div>
          </a>
        </div>
      </div>
    </div>
    <h1 data-aos="fade-up" data-aos-duration="800">我自己</h1>
    <div class="friend-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <div class="friend-card">
        <a href="https://amcones.cn">
          <div class="friend-card-image">
            <img src="https://amcones.cn/wp-content/uploads/2022/01/cropped-IQVU8SOY3_0R9SBNIX.png">
          </div>
          <div class="friend-card-title">
            尤利的博客
          </div>
          <div class="friend-card-describe">
            我的个人博客
          </div>
        </a>
      </div>
    </div>
    <h1 data-aos="fade-up" data-aos-duration="800">小伙伴们</h1>
    <div class="friend-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <div class="friend-card">
        <a href="https://kenshin2438.top/">
          <div class="friend-card-image">
            <img src="https://amcones.cn/wp-content/uploads/2022/01/IMG_3763.jpg">
          </div>
          <div class="friend-card-title">
            lybgg的博客
          </div>
          <div class="friend-card-describe">
            是集训队队友～带带我我躺好了
          </div>
        </a>
      </div>
      <div class="friend-card">
        <a href="https://rivego.cn/">
          <div class="friend-card-image">
            <img src="https://cdn.jsdelivr.net/gh/rivego/image/img/20210824203824.jpg">
          </div>
          <div class="friend-card-title">
            pbrgg的博客
          </div>
          <div class="friend-card-describe">
            pbrgg贴贴
          </div>
        </a>
      </div>
    </div>
  </div>

  <FooterBar/>
</template>

<script>
import PatternCenter from "@/components/Header/PatternCenter";
import NavigationBar from "@/components/Header/NavigationBar";
import FooterBar from "@/components/Footer/footerBar";

export default {
  name: "AboutPage",
  components: {
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
}

a {
  text-decoration: none;
  color: rgba(73, 146, 188, 0.83);
}

.main-container {
  width: 100%;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.main-container h1 {
  color: rgba(73, 146, 188, 0.83);
  margin: 20px 0;
}

.friend-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.friend-card {
  margin: 5px 5px;
  border: 1px solid steelblue;
  border-radius: 10px;
  width: 270px;
  height: 180px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  transition: all .5s;
}

.friend-card:hover {
  border-color: black;
  background: rgba(73, 146, 188, 0.3);
}

.friend-card-image {
  height: 70px;
  width: 70px;
}

.friend-card-image img {
  border-radius: 100%;
  border: 1px solid rgba(73, 146, 188, 0.83);
  width: 70px;
  height: 70px;
  transition: all .5s;
}

.friend-card-image img:hover {
  transform: rotate(360deg);
}

.friend-card-title {
  font-size: 1.5rem;
}

.friend-card-describe {
  margin: 5px 0;
  padding-top: 5px;
  border-top: 1px dotted rgba(73, 146, 188, 0.83);
}
</style>