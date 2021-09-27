<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    console.log(process.env.VUE_APP_BASE_URL)
  },
  mounted() {},
}
</script>

<style lang="scss">
$color: #fff;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
}
</style>
