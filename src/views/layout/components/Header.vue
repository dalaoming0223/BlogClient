<template>
  <header>
    <router-link to="/" class="title">My Blog</router-link>
  </header>
</template>

<script>

</script>

<style lang="less">

  @import "~@/assets/base.less";
  @import "http://at.alicdn.com/t/font_1377453_livkfs5l37.css";

  header {
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    border-bottom: 1px solid #efefef;

    .title {
      color: #828282;
      font-size: 25px;
      font-weight: lighter;
      margin: 0 2.5%;
      cursor: default;
    }

    .nav {
      margin: 0;
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .nav-left {
      margin: 0 1%;
      flex: 1;
    }

    .nav-middle {
      width: 160px;
    }
    .nav-right {
      margin: 0 2%;
    }

    .nav-icon {
      cursor: pointer;
    }

    .el-button:hover {
      color: #1db7d8;
      background-color: #FFF;
    }

    .notification {
      border: 0;
      padding: 10px;
      color: #959595;
    }
    .login, .register {
      color: #868e8a;
      font-size: 16px;
    }

    .active {
      color: #212121;
    }

  }

  @media (max-width: 960px) {
    header {
      padding: 0 10%;
    }
  }
</style>
