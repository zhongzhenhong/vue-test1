<template>
  <el-menu
    default-active="home"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="home">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- <el-menu-item index="cockpitDisplay">
      <i class="el-icon-menu"></i>
      <span slot="title">驾驶舱展示</span>
    </el-menu-item>
    <el-menu-item index="cockpitManage">
      <i class="el-icon-menu"></i>
      <span slot="title">驾驶舱管理</span>
    </el-menu-item> -->
    <el-menu-item index="exampleManage">
      <i class="el-icon-menu"></i>
      <span slot="title">图表实例管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleOpen() {},
    handleClose() {},
  },
}
</script>

<style></style>
