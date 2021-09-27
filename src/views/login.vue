<template>
  <div class="fullScreen" :style="'background-image:url(' + back_imgurl + ')'">
    <div class="loginPanelStyle">
      <div>
        <div class="loginTitle">
          {{ systemTitle }}
        </div>
        <div class="loginForm">
          <el-form label-width="100px" label-position="left">
            <el-form-item label="用户名">
              <el-input
                v-model="account.username"
                type="text"
                placeholder="输入用户名"
              ></el-input>
            </el-form-item>
            <br />
            <el-form-item label="密码">
              <el-input
                type="password"
                v-model="account.pwd"
                placeholder="输入登录密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <div style="margin-top: 60px;">
            <el-button type="success" style="width: 100%;" @click="handleLogin"
              >登录</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="copyRightStyle">
      <span>
        <!-- CopyRight 中国工商银行股份有限公司 版权所有 -->
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {
        username: '',
        pwd: '',
      },
      roleType: 'admin',
      systemTitle: '驾驶舱测试系统',
      back_imgurl: require('@/assets/images/loginbackground.png'),
    }
  },
  beforeMount() {},
  mounted() {},
  methods: {
    handleLogin() {
      this.$store.state.username = this.account.username
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.fullScreen {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  .loginPanelStyle {
    /*输入框居中*/
    height: 500px;
    width: 600px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .loginForm {
      padding-top: 50px;
      padding-left: 50px;
      padding-right: 50px;
      ::v-deep .el-form-item__label {
        color: #fff;
      }
      ::v-deep .el-button--success {
        color: #fff;
        background-color: cornflowerblue;
        border-color: cornflowerblue;
      }
    }
    .loginTitle {
      margin-top: 20px;
      text-align: center;
      font-size: 28px;
      color: #fff;
      font-weight: 500;
    }
  }
  .copyRightStyle {
    position: fixed;
    bottom: 0px;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    width: 700px;
    margin-bottom: 50px;
    font-size: 16px;
  }
}
</style>
