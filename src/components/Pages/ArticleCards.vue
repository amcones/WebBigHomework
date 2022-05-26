<template>
  <article data-aos="fade-up" data-aos-duration="1000" class="post post-list-thumb">
    <div class="post-thumb">
      <a href="#">
        <img src="../../assets/background.jpeg"/>
      </a>
    </div>
    <div class="post-content-wrap">
      <div class="post-content">
        <div class="post-date">
          <i class="fa fa-clock"></i>发布于5/26 17:50
        </div>
        <h1>
          <a href="#" class="post-title">
            关于本站
          </a>
        </h1>
        <div class="post-meta">
          <div class="post-meta-content meta-user">
            <i class="fa fa-user"></i>Uli
          </div>
          <div class="post-meta-content meta-watch">
            <i class="fa fa-eye"></i>256观看
          </div>
          <div class="post-meta-content meta-watch">
            <i class="fa fa-folder-open"></i>随笔
          </div>
        </div>
        <div class="float-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate
          dolores ducimus error eum ex facilis fugit nam nisi odio possimus, quia quibusdam, repellat repudiandae saepe,
          sed sunt tempore voluptate.
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleCards"
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
  width: 170px;
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
    height: 550px;
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
</style>