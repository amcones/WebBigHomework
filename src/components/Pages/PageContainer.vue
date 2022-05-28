<template>
  <div id="page">
    <div class="site-content">
      <article data-aos="fade-up" data-aos-duration="1000" class="post post-list-thumb">
        <div class="post-thumb">
          <a href="article.html">
            <img src="../../assets/bg1.jpeg"/>
          </a>
        </div>
        <div class="post-content-wrap">
          <div class="post-content">
            <div class="post-date">
              <i class="fa fa-clock"></i>发布于2022/5/28 00:26
            </div>
            <h1>
              <a href="article.html" class="post-title">
                关于本站
              </a>
            </h1>
            <div class="post-meta">
              <div class="post-meta-content meta-user">
                <i class="fa fa-user"></i>uli
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-eye"></i>256观看
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-folder-open"></i>文章
              </div>
            </div>
            <div class="float-content">欢迎来到本站👏我是Uli，这是我开发的一个个人博客网站。目前站点还在开发当中，内容还不完善，欢迎到github提出pr💡在游玩之前，请先查看本文，如果想要了解更多，也可以移步至关于我页面。
            </div>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" data-aos-duration="1000" class="post post-list-thumb">
        <div class="post-thumb">
          <a href="article1.html">
            <img src="../../assets/bg2.jpeg"/>
          </a>
        </div>
        <div class="post-content-wrap">
          <div class="post-content">
            <div class="post-date">
              <i class="fa fa-clock"></i>发布于2022/5/27 13:32
            </div>
            <h1>
              <a href="article1.html" class="post-title">
                使用frp搭建个人办公网络
              </a>
            </h1>
            <div class="post-meta">
              <div class="post-meta-content meta-user">
                <i class="fa fa-user"></i>uli
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-eye"></i>12观看
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-folder-open"></i>文章
              </div>
            </div>
            <div class="float-content">
              假如你有一台云服务器，除了建站，还能够做什么有意思的事情？当然是使用frp将个人的所有计算机资源进行互联啦！
              使用星型拓扑结构，将所有家用电脑连到frp服务器上，然后就可以通过任何一个联网终端对整个网络系统进行SSH或者VNC连接。
              重点在于
            </div>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" data-aos-duration="1000" class="post post-list-thumb">
        <div class="post-thumb">
          <a href="article2.html">
            <img src="../../assets/bg3.jpeg"/>
          </a>
        </div>
        <div class="post-content-wrap">
          <div class="post-content">
            <div class="post-date">
              <i class="fa fa-clock"></i>发布于2022/5/26 12:23
            </div>
            <h1>
              <a href="article2.html" class="post-title">
                博客的新用途
              </a>
            </h1>
            <div class="post-meta">
              <div class="post-meta-content meta-user">
                <i class="fa fa-user"></i>uli
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-eye"></i>32观看
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-folder-open"></i>随笔
              </div>
            </div>
            <div class="float-content">
              自从建了博客以后，我一直在想，博客能够给我带来什么。在现在信息媒体充斥的时代，知乎、QQ空间、朋友圈、微博、b站动态，我们的内容生产力在转眼之间就被瓜分殆尽。除非是专业的自媒体从业人员，很难同时运营这些，更别提博客这种没啥收入的东西了。
            </div>
          </div>
        </div>
      </article>
      <article data-aos="fade-up" data-aos-duration="1000" class="post post-list-thumb">
        <div class="post-thumb">
          <a href="article3.html">
            <img src="../../assets/bg4.jpeg"/>
          </a>
        </div>
        <div class="post-content-wrap">
          <div class="post-content">
            <div class="post-date">
              <i class="fa fa-clock"></i>发布于2022/5/28 00:26
            </div>
            <h1>
              <a href="article3.html" class="post-title">
                LCA算法总结
              </a>
            </h1>
            <div class="post-meta">
              <div class="post-meta-content meta-user">
                <i class="fa fa-user"></i>uli
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-eye"></i>22观看
              </div>
              <div class="post-meta-content meta-watch">
                <i class="fa fa-folder-open"></i>文章
              </div>
            </div>
            <div class="float-content">
              LCA（最近公共祖先）一般有三种算法解决这类问题。为什么要求树上结点的公共祖先？这是由于求解树上两点间最近距离、以及做树上差分等问题时需要。（其它得做题才知道）
              这是最容易理解的一种做法，时间复杂度O(n)，在多次查询时就不够用了，所以很少用。
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// import ArticleCards from "@/components/Pages/ArticleCards";
export default {
  name: "PageContainer",
  // components: {ArticleCards}
}
</script>

<style scoped>
.post {
  width: auto;
  height: 300px;
  background: white;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  box-shadow: 0 1px 20px -4px;
  position: relative;
}

.post-list-thumb:nth-child(2n) .post-thumb {
  float: right;
}

.post-thumb {
  float: left;
  width: 55%;
  display: block;
}

.post-thumb a {
  border-radius: 10px 0 0 10px;
}

.post-list-thumb:nth-child(2n) .post-thumb a {
  border-radius: 0 10px 10px 0;
}

.post-thumb a {
  height: 300px;
  position: relative;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.post-thumb a * {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all .6s;
}

.post-thumb a *:hover {
  transform: scale(1.2);
}

.post-content-wrap {
  position: relative;
  display: inline-block;
  float: right;
  padding-right: 30px;
  padding-left: 0;
  width: 40%;
  margin: 20px 10px 0 10px;
}

.post-content {
  width: 100%;
  height: 100%;
}

.post-content h1 {
  text-align: right;
}

.post-list-thumb:nth-child(2n) .post-content h1 {
  text-align: left;
}

.post-date {
  background: rgba(255, 224, 102, .6);
  color: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 30px;
  border-radius: 10px;
  margin: 0 0 20px 0;
}

.post-content h1 a {
  color: rgb(30, 50, 50);
  text-decoration: none;
}

.post-meta {
  margin: 8px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.post-meta-content{
  margin: 0 20px 0 0;
}
.post-meta-content i{
  color: #ffcc00;
  margin: 0 5px 0 0;
}

@media (max-width: 900px) {
  .post {
    height: 570px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .post-thumb {
    float: none;
  }

  .post-meta {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  .post-meta-content{
    margin: 0 20px 0 0;
  }
  .post-meta-content i{
    color: #ffcc00;
    margin: 0 5px 0 0;
  }

  .post-content-wrap {
    flex-grow: 1;
    padding: 0 20px;
    width: 100%;
  }

  .post-content {
    left: 0;
  }

  .post-content h1 {
    text-align: left;
  }

  .post-thumb {
    width: 100%;
  }

  .post-thumb a {
    border-radius: 10px;
  }

  .post-list-thumb:nth-child(2n) .post-thumb a {
    border-radius: 10px;
  }
}
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