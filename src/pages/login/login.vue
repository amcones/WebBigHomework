<template>
  <NavigationBar/>
  <div class="login">
    <div class="login-content" data-aos="fade-up" data-aos-duration="1000">
      <div class="login-form-container">
        <div class="login-form-content">
          <el-form class="login-form">
            <h1 data-aos="fade-up" data-aos-duration="1000">登录</h1>
            <el-form-item data-aos="fade-up" data-aos-duration="1400">
              <el-input v-model="name" placeholder="请输入用户名">
                <template #prefix>
                  <el-icon class="el-input__icon"><user/></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item data-aos="fade-up" data-aos-duration="1800">
              <el-input type="password" placeholder="请输入密码" v-model="password" show-password>
                <template #prefix>
                  <el-icon class="el-input__icon"><lock/></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item data-aos="fade-up" data-aos-duration="2200">
              <el-checkbox label="记住我" name="type"/>
            </el-form-item>
            <el-form-item data-aos="fade-up" data-aos-duration="2600">
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationBar from "@/components/Header/NavigationBar";
import {ref} from "vue";

export default {
  name: 'IndexPage',
  components: {
    NavigationBar

  },
  setup() {
    return {
      name: ref(''),
      password: ref('')
    }
  },
  methods: {
    onSubmit(){
      console.log('submit!')
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.login {
  background-image: url("../../assets/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  width: 900px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 0 15px 10px rgba(10, 10, 10, .7);
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: right;
}

.login-form-container {
  background: white;
  width: 60%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form-content {
  height: 400px;
  width: 60%;
}
.login-form-content h1{
  margin: 40px 0;
}

@media (max-width: 900px) {
  .login-form-container{
    width: 100%;
    height: 70vh;
    border-radius: 10px;
  }
  .login-content {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: end;
  }
}
</style>
