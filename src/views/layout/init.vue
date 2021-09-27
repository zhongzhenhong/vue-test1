<template>
  <div class="index">
    <el-container>
      <el-header>图表组件库</el-header>
      <el-container>
        <el-aside style="width: 200px;">
          <nav-bar></nav-bar>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './navBar'
export default {
  data() {
    return {}
  },
  components: { NavBar },
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  .el-header {
    height: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    height: calc(100vh - 60px);
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: left;
    line-height: 200px;
    .el-menu {
      border-right: none;
      list-style: none;
      position: relative;
      margin: 0;
      padding-left: 0;
      background-color: #fff;
    }
  }
  .el-main {
    width: calc(100vw - 150px);
    height: calc(100vh- 60px);
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
}
</style>
