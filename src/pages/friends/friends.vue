<template>
  <NavigationBar/>
  <PatternCenter title="友链"/>
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
}
</style>