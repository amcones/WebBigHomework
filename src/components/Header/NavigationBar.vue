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
      <button class="fas fa-bars"></button>
    </div>
    <nav class="navigation">
      <ul class="navigation-items">
        <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="index"><i class="fas fa-landmark">首页</i></a>
        </li>
        <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="friends"><i
            class="fas fa-link">友链</i></a></li>
        <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="about"><i
            class="fas fa-paper-plane">关于我</i></a></li>
        <li data-aos="fade-up" data-aos-offset="10" data-aos-duration="1000"><a href="login"><i
            class="fas fa-user">登录</i></a></li>
      </ul>
    </nav>
  </header>
  <el-backtop :right="100" :bottom="100"/>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavigationBar",
  data() {
    return {
      activeIndex: ref('1')
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
    handleSelect() {
      window.location.href = 'about'
    }
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
.vertical-menu{
  display: none;
}
.vertical-menu-active{
  z-index: 999;
  height: 100vh;
  width: 40%;
  position: fixed;
  transition: all 1s;
  background: white;
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

@media (max-width: 860px) {
  #menu-btn {
    display: inline;
    font-size: 2rem;
  }

  .site-header {
    flex-direction: row-reverse;
  }

  .site-header .navigation {
    display: none;
  }
}

</style>