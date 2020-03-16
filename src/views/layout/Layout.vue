<template>
  <div class="layout">
    <v-header class="v-header"></v-header>
    <v-main></v-main>
    <v-footer class="blog-footer"></v-footer>
  </div>
</template>

<script>
import vHeader from './components/Header'
import vMain from './components/Main'
import vFooter from './components/Footer'
export default {
  components: {
    vHeader,
    vMain,
    vFooter
  }
}
</script>

<style lang="less">
  // .layout {
  //   margin: 0;
  // }
  .v-header {
    position: fixed;
    width: 80%;
    z-index: 100;
    top: 0;
  }
  .blog-footer {
      height: 20px;
      color: aquamarine;
    }
</style>
