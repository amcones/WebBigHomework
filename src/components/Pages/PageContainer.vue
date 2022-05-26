<template>
  <div id="page">
    <div class="site-content">
      <ArticleCards/>
      <ArticleCards/>
      <ArticleCards/>
      <ArticleCards/>
      <ArticleCards/>
      <ArticleCards/>
    </div>
  </div>
</template>

<script>
import ArticleCards from "@/components/Pages/ArticleCards";
export default {
  name: "PageContainer",
  components: {ArticleCards}
}
</script>

<style scoped>
.site-content {
  max-width: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 900px) {
  .site-content{
    padding: 0 4%;
  }
}
</style>