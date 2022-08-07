<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录头像 -->
      <div class="avater_box">
        <img src="../assets/avater.png" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form ref="loginFormRef" :model="loginForm" label-width="80px" class="login_form" :rules="loginFormRules">
        <el-form-item label="用户名:" prop="username">
          <!-- 用户名 -->
          <el-input v-model="loginForm.username"   placeholder="请输入用户名" prefix-icon="iconfont icon-jurassic_user1">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码:" prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-tianchongxing-1" type="password">
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录数据表单数据
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules:{
username:[{ required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],
password:[{ required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
    }
    }
  },
  methods:{
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields();

    },
    login(){
      this.$refs.loginFormRef.validate(async valid=>{
        if(!valid) return;
       const {data:res}= await this.$http.post("login",this.loginForm);
      //  console.log(res);
       if(res.meta.status !==200) return this.$message.error('登录失败')
       this.$message.success('登录成功');
       //保存token
       window.sessionStorage.setItem("token",res.data.token);
       this.$router.push("/home");
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #66b1ff;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avater_box {
    height: 130px;
    width: 130px;
    // border: 1px solid #fff;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    // border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      //  border-radius: 50%;
    }
  }
}

.btns {
  display: flex;
  justify-content: flex-end;

}

.login_form {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>