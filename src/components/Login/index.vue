<template>
  <div class="login_container">
    <div class="login_box">
      <!--logo区域-->
      <div class="logo_box">
        <img src="../../assets/logo.png" alt="">
      </div>
      <!--      登录区域-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-password" placeholder="密码"
                    type="password"></el-input>
        </el-form-item>
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
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: '1234567'
        },
        loginFormRules: {
          username: [
            {
              required: true,
              message: '用户名不能为空',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 12,
              message: '长度在 6 到 12 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      resetLoginForm () {
        console.log(this)
        this.$refs.loginFormRef.resetFields()
      },
      login () {
        // 登录合法性预校验
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid) return false
          const { data: res } = await this.$http.post('http://localhost:8080/login') // 登录成功
          // const { data: res } = await this.$http.post('http://localhost:8080/field') // 登录失败
          if (res.meta.status !== 200) {
            return this.$notify.error({
              title: res.meta.msg
            })
          }
          // 保存token至session
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2e4e6e;
    height: 100%;

    .login_box {
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .logo_box {
        width: 130px;
        height: 130px;
        border: 2px solid #efefef;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 3px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }

      .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

        .btns {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
