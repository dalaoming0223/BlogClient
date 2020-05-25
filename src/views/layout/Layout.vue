<template>
  <div class="blog-page">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/header'
import vMain from './components/main'
import vFooter from './components/footer'
export default {
  components: {
    vHeader,
    vMain,
    vFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">

</style>
