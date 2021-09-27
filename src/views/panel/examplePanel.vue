<template>
  <div class="examplePanel">
    <el-row style="text-align: right; margin-bottom: 20px;">
      <el-button type="info" @click="goBack()">返回列表</el-button>
    </el-row>
    <component :is="name" class="component"></component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    this.name = this.$route.query.exampleType
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss" scoped>
.examplePanel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .component {
    width: 100%;
    height: calc(100% - 60px);
  }
}
</style>
