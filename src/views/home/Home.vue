<template>
  <div class="index">
    <section class="left-blogs">
      <div class="item">
        <span class="blog-sort">热门</span>
        <span class="blog-sort">最新</span>
      </div>
      <router-link class="blog-item"></router-link>
    </section>
    <section class="right-nav">
      div.rig
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
    @import "~@/assets/base.less";

.index {
    //网格布局
    padding: 0 15%;
    display: grid;
    grid-template-columns: 1fr 27%; //左右

    h3 {
      margin: 5px 0;
    }
    span {
      text-align: right;
      margin: 5px 0;
      font-size: 15px;
      color: @textLighterColor;

      a {
        color: @themeColor;
        text-decoration: none;
      }
    }

    .left-blogs {
      grid-column: 1;
      grid-row: 1;
      margin: 30px 2%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 3px;

      .item {
        background-color: #fff;
        border-radius: 3px;
        padding: 12px;
        margin: 0 0 1px;
        border: 1px solid #efefef;
      }

      .blog-sort {
        background-color: #fff;
        padding-right: 20px;
        cursor: pointer;
      }

      .blog-item :hover {
        background-color: #efefef;
      }
    }

    .right-nav {
      grid-column: 2;
      grid-row: 1;

      margin:30px 6%;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 3px;

      height: 500px;
    }

    //   .item {
    //     background-color: #fff;
    //     border-radius: 3px;
    //     padding: 12px;
    //     margin: 0 0 1px;
    //     border: 1px solid #efefef;
    //     border-bottom: 0;
    //   }

    //   .blog-sort {
    //     background-color: #fff;
    //     padding-right: 20px;
    //     cursor: pointer;

    //   }
    //   .blog-item :hover {
    //     background-color: #efefef;
    //   }
    //   //.avatar {
    //   //  grid-column: 1;
    //   //  grid-row: 1 / span 2;
    //   //  justify-self: center;
    //   //  margin-left: 0;
    //   //  text-align: center;
    //   //
    //   //  img {
    //   //    width: 60px;
    //   //    height: 60px;
    //   //    border-radius: 50%;
    //   //  }
    //   //
    //   //  figcaption {
    //   //    font-size: 12px;
    //   //    color: @textLighterColor;
    //   //  }
    //   //

    // }

    // .right-nav {
    //   grid-column: 2;
    //   grid-row: 1;

    //   margin: 30px 6%;
    //   background-color: #fff;
    //   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    //   border-radius: 3px;

    //   height: 500px;

    //   .right-nav-top {
    //     background-color: #fff;
    //     padding: 12px 6px;
    //     margin: 0 5%;
    //     border-bottom: 1px solid #efefef;
    //     color: @textLighterColor;
    //   }

    //   .right-tags {
    //     margin: 0 10px;
    //     .el-button {
    //       color: #999;
    //       :hover, :active {
    //         color: #2dc1c2;
    //       }
    //     }
    //     .tag-item {
    //       cursor: pointer;
    //       margin: 10px 8px;
    //       padding: 10px 8px;
    //       border-radius: 3px;
    //       border: 0;
    //       font-size: 18px;

    //     }
    //   }

    // }
    // //p {
    // //  padding-bottom: 20px;
    // //}
  }

  .el-pagination .el-pager li,
  .el-pagination button {
    background-color: #fbfbfb !important;
  }

  @media (max-width: 960px) {
    .index {
      padding: 0 10%;
    }
  }
</style>
