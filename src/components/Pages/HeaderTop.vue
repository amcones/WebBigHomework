<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <div class="headertop">
    <figure class="center-bg">
      <div class="focus-info">
        <h1 data-aos="fade-up" data-aos-duration="600">Hello,Amcones!</h1>
        <div class="info-container">
          <div class="motto">
            <i class="fa fa-quote-left" data-aos="fade-up" data-aos-duration="1200"></i>
            <span data-aos="fade-up" data-aos-duration="1200">盛夏日落迟，灯火未夜匆匆明</span>
            <i class="fa fa-quote-right" data-aos="fade-up" data-aos-duration="1200"></i>
          </div>
          <div class="social-info">
            <a href="https://wpa.qq.com/msgrd?v=3&uin=1409380256&site=qq&menu=yes"><i data-aos="fade-up"
                                                                                      data-aos-duration="1500"
                                                                                      class="fab fa-qq"></i></a>
            <a href="https://steamcommunity.com/id/amcones/"><i data-aos="fade-up" data-aos-duration="1500"
                                                                class="fab fa-steam"></i></a>
            <a href="https://github.com/amcones"><i data-aos="fade-up" data-aos-duration="1500"
                                                    class="fab fa-github"></i></a>
            <a href="https://amcones.cn"><i data-aos="fade-up" data-aos-duration="1500"
                                            class="fab fa-wordpress"></i></a>
            <a href="https://www.zhihu.com/people/amcones-77"><i data-aos="fade-up" data-aos-duration="1500"
                                                                 class="fab fa-zhihu"></i></a>
          </div>
        </div>
      </div>
    </figure>
    <div class="go-down">
      <a href="#page"><i class="down-arrow fas fa-angle-down"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop"
}
</script>

<style scoped>
.headertop{
  position: relative;
}
.center-bg {
  height: 100vh;
  background-image: url("../../assets/background.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.focus-info {
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.focus-info h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 6rem;
  transition: all 0.2s;
}

.info-container{
  margin: 10vh 0;
  box-sizing: content-box;
  padding: 20px 50px;
  border-radius: 10px;
  transition: all 1s;
}
.info-container:hover{
  background: rgba(30,30,30,0.8);
  color: #ffe066;
}

.social-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  width: 100%;
}

.social-info a {
  color: white;
  transition: all 0.5s;
}

.social-info a:hover {
  color: #409EFF;
}

.go-down {
  position: absolute;
  display: flex;
  width: 100%;
  height: 80px;
  bottom: 0;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
}

.motto {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.motto i {
  font-size: 2.5rem;
  margin: 0 10px;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.down-arrow:hover {
  animation: move 1s ease-in infinite;
}

@media (max-width: 800px) {
  .focus-info h1 {
    font-size: 4rem;
  }

  .focus-info h2 {
    font-size: 1.5rem;
  }
}
</style>