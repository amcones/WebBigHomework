<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lato:wght@300&display=swap" rel="stylesheet">
  <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <footer class="site-footer">
    <div class="footer-text">
      <div class="footer-links">
        <i class="fa fa-cog fa-spin" style="margin: 20px;color: #409EFF;font-size: 2rem"></i>
      </div>
      <p><a class="record-info" href="https://beian.miit.gov.cn/">沪ICP备20007771号-2</a></p>
      <p>Designed & Developed With <i class="fa fa-heart" style="color: red"></i> By Uli</p>
      <p>Copyright © 2022 Uli All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerBar"
}
</script>

<style scoped>
* {
  font-family: 'Lato', sans-serif;
}
.record-info{
  color: gray;
  text-decoration: none;
  transition: all .5s;
}
.record-info:hover{
  color: #ffcc00;
}
.site-footer {
  bottom: 0;
  height: 5vh;
  width: 100%;
  margin: 10vh 0 15vh 0;
  display: flex;
  justify-content: center;
}

/*@keyframes rotating {*/
/*  100% {*/
/*    transform: rotate(360deg);*/
/*  }*/
/*}*/

/*.footer-links i {*/
/*  margin: 0 3vh;*/
/*  font-size: 1.5rem;*/
/*  animation: rotating 3s linear infinite;*/
/*}*/

.footer-text {
  text-align: center;
  color: gray;
}
</style>