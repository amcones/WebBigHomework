<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
  <header class="site-header" ref="headerRef">
    <div class="brand" data-aos="fade-right" data-aos-offset="50" data-aos-duration="1000" data-aos-easing="ease-out">
      <span class="brand-content">Amcones</span>
      <span class="brand-tip">|MY PROFILE</span>
    </div>
    <div id="menu-btn">
      <i class="fas fa-bars" @click="menubtnclk"></i>
    </div>
    <div class="navigation-container">
      <div class="navigation-mask" @click="menubtnclk"></div>
      <nav class="navigation">
        <ul class="navigation-items">
          <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="index.html"><i
              class="fas fa-landmark">首页</i></a>
          </li>
          <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="friends.html"><i
              class="fas fa-link">友链</i></a></li>
          <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="about.html"><i
              class="fas fa-paper-plane">关于我</i></a></li>
          <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="login.html"><i
              class="fas fa-user">登录</i></a></li>
        </ul>
      </nav>
    </div>
  </header>
  <el-backtop :right="20" :bottom="20"/>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavigationBar",
  data() {
    return {
      activeIndex: ref('1'),
    }
  },
  methods: {
    scrollHandler() {
      const siteHeader = document.querySelector(".site-header");
      window.addEventListener('scroll', () => {
        let curr = document.documentElement.scrollTop;
        if (curr > 0) {
          siteHeader.classList.add("yya");
        } else {
          siteHeader.classList.remove("yya");
        }
      })
    },
    menubtnclk(event){
      const navigation = document.querySelector(".navigation-container");
      if(event){
        navigation.classList.toggle('open')
      }
    },
  },
  mounted() {
    this.scrollHandler()
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

#menu-btn {
  display: none;
}

.site-header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 8vh;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  color: white;
}

.site-header:hover {
  background: rgba(255, 255, 255, 1);
  color: black;
}

.yya {
  background: rgba(255, 255, 255, 1);
  color: black;
}

.site-header .brand .brand-content {
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  transition: all 0.2s;
}

.site-header .brand .brand-tip {
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s;
}

.navigation {
  width: 40vw;
}

.navigation-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation-items li {
  font-size: 1rem;
}

.navigation-items li a {
  color: #409EFF;
  transition: all 0.3s ease;
}

.navigation-items li a:hover {
  color: #fc0;
}
.navigation-mask{
  display: none;
}

@media (max-width: 900px) {
  .site-header {
    flex-direction: row-reverse;
    padding: 10px 20px;
    background: white;
    color: black;
  }

  .site-header .brand .brand-content {
    font-size: 2rem;
  }

  .navigation-container {
    position: fixed;
    height: 100%;
    width: 250px;
    left: -250px;
    top: 8vh;
    background: white;
    transition: all 1s;
    transform: translateX(-250px);
  }
  .navigation-container .navigation{
    margin-top: 50px;
    width: 100%;
  }

  .navigation-container .navigation ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .navigation-container .navigation ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  .navigation-container .navigation-mask{
    transition: all 1s;
    background: rgba(0,0,0,0);
    display: none;
  }

  .navigation-container.open .navigation-mask{
    display: block;
    position: fixed;
    height: 100%;
    width: 900px;
    left: 250px;
    background: rgba(0,0,0,.6);
  }

  .site-header .navigation-container.open {
    transform: translateX(250px);
  }
  .site-header #menu-btn{
    display: inline;
  }
  .site-header #menu-btn i{
    width: 30px;
    height: 30px;
    margin: 25px;
    border: none;
    background: transparent;
    font-size: 2rem;
  }
}

</style>