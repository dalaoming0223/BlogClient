<template>
  <div class="page-main">
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
  @import "~@/assets/common.less";
  .page-main {
    background-color: @bgColor;
  }
</style>
