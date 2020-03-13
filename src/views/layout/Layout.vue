<template>
  <div>
    <v-header></v-header>
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
  .blog-footer {
      height: 20px;
      color: aquamarine;
    }
</style>
