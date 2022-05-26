<template>
  <div class="pattern-center">
    <div class="pattern-attachment"></div>
    <header data-aos="fade-up" data-aos-duration="1000" class="pattern-header">
      <h1 class="entry-title" v-once>{{title}}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "PatternCenter",
  props: {
    title: String
  }
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .pattern-center{
    position: relative;
    top:0;
    left: 0;
    width: 100%;
    height: 45vh;
  }
  .pattern-attachment{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-origin: border-box;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/background.jpeg");
  }
  .pattern-header{
    position: absolute;
    top:45%;
    height: 50px;
    width: 100%;
    text-align: center;
  }
  .entry-title{
    color: white;
    font-size: 3.5rem;
  }
</style>