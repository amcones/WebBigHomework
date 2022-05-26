<template>
  <section id="main-container">
    <NavigationBar ref="nav"/>
    <HeaderTop/>
    <PageContainer/>
    <FooterBar/>
  </section>
</template>

<script>
import HeaderTop from "@/components/Pages/HeaderTop";
import PageContainer from "@/components/Pages/PageContainer";
import NavigationBar from "@/components/Header/NavigationBar";
import FooterBar from "@/components/Footer/footerBar";

export default {
  name: 'IndexPage',
  components: {
    FooterBar,
    NavigationBar,
    PageContainer,
    HeaderTop,
  },
}

</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#main-container {
  height: 100%;
  position: relative;
}

a {
  color: white;
  transition: all 0.5s;
}

a:hover {
  color: #fc0;
}
</style>
