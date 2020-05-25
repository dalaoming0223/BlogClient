<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "~@/assets/common.less";
#app {
    width: 100vw;//css3新单位，viewpoint width的缩写，视窗宽度，1vw等于视窗宽度的1%。举个例子：浏览器宽度1200px, 1 vw = 1200px/100 = 12 px。
    height: 100vh;//css3新单位，viewpoint height的缩写，视窗高度，1vh等于视窗高度的1%。
}
</style>
