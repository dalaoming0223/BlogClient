<template>
  <div class="index">
    <section class="left-blogs">
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
      <router-link class="blog-item" :to="`/blog/183`">
        <div class="item">
          <h3>blog.title</h3>
          <div>blog.description</div>
          <div>chuangjianriqi</div>
          <div class=""></div>
        </div>
      </router-link>
    </section>
    <section class="right-nav">
      <card-me></card-me>
      <card-tag :tags="hotTags"></card-tag>
      <card-article cardHeader="最热文章" :articles="hotArticles"></card-article>

      <card-archive cardHeader="文章归档" :archives="archives"></card-archive>

      <card-article cardHeader="最新文章" :articles="newArticles"></card-article>
    </section>
  </div>
</template>

<script>
import CardMe from './components/CardMe'
import CardTag from './components/CardTag'
import CardArticle from './components/CardArticle'
import CardArchive from './components/CardArchive'
export default {
  components: {
    'card-me': CardMe,
    'card-tag': CardTag,
    'card-article': CardArticle,
    'card-archive': CardArchive
  }
}

</script>

<style scoped lang="less">
  @import "~@/assets/base.less";

  .el-container {
    width: 960px;
  }

  .el-aside {
    margin-left: 20px;
    width: 260px;
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 20px;
  }

  .index {
    padding: 0 15%;
    display: grid;
    grid-template-columns: 1fr 27%;

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
      // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 3px;

      .item {
        background-color: #fff;
        border-radius: 3px;
        padding: 12px;
        margin: 0 0 20px;
        border: 1px solid #efefef;
        border-bottom: 0;
      }

      .blog-sort {
        background-color: #fff;
        padding-right: 20px;
        cursor: pointer;

      }

      .blog-item {}

      .blog-item :hover {
        background-color: #efefef;
      }

      //.avatar {
      //  grid-column: 1;
      //  grid-row: 1 / span 2;
      //  justify-self: center;
      //  margin-left: 0;
      //  text-align: center;
      //
      //  img {
      //    width: 60px;
      //    height: 60px;
      //    border-radius: 50%;
      //  }
      //
      //  figcaption {
      //    font-size: 12px;
      //    color: @textLighterColor;
      //  }
      //}

    }

    .right-nav {
      grid-column: 2;
      grid-row: 1;

      margin: 30px 6%;
      background-color: #fff;
      // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 3px;

      height: 500px;

      .right-nav-top {
        background-color: #fff;
        padding: 12px 6px;
        margin: 0 5%;
        border-bottom: 1px solid #efefef;
        color: @textLighterColor;
      }

      .right-tags {
        margin: 0 10px;

        .el-button {
          color: #999;

          :hover,
          :active {
            color: #2dc1c2;
          }
        }

        .tag-item {
          cursor: pointer;
          margin: 10px 8px;
          padding: 10px 8px;
          border-radius: 3px;
          border: 0;
          font-size: 18px;

        }
      }

    }

    //p {
    //  padding-bottom: 20px;
    //}
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
