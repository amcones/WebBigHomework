<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lato:wght@300&display=swap" rel="stylesheet">
  <footer class="site-footer">
    <div class="footer-text">
      <div class="footer-links">
        <i class="fa fa-gear" style="margin: 20px;color: #409EFF"></i>
      </div>
      <p>Designed & Developed With <i class="fa fa-heart" style="color: red"/> By Uli</p>
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

.site-footer {
  bottom: 0;
  height: 5vh;
  width: 100%;
  margin: 10vh 0;
  display: flex;
  justify-content: center;
}

@keyframes rotating {
  100% {
    transform: rotate(360deg);
  }
}

.footer-links i {
  margin: 0 3vh;
  font-size: 1.5rem;
  animation: rotating 3s linear infinite;
}

.footer-text {
  text-align: center;
  color: gray;
}
</style>