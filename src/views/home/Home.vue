<template>
  <div class="index">
    <section class="left-blogs">
      <router-link class="blog-item" v-for="blog in blogs" :key="blog.id" :to="`/blog/${blog.id}`">
        <div class="item">
          <h3>{{blog.title}}</h3>
          <div>{{blog.user.email}}</div>
          <div class='item-list'>
            <div class="item-tag">
              <span class="el-icon-connection"></span>
              <el-tag v-for="t in blog.tags" :key="t.name" size="mini" type="success">{{t.name}}</el-tag>
            </div>
            <div class="item-time">
              <span class="el-icon-time"></span>
              <span>{{friendlyDate(blog.created_at)}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </section>
    <section class="right-nav">
      <card-me></card-me>
      <card-tag :tags="hotTags"></card-tag>
      <!-- <card-article cardHeader="最热文章" :articles="hotArticles"></card-article>

      <card-archive cardHeader="文章归档" :archives="archives"></card-archive>

      <card-article cardHeader="最新文章" :articles="newArticles"></card-article> -->
    </section>
  </div>
</template>

<script>
import CardMe from './components/CardMe'
import CardTag from './components/CardTag'
// import CardArticle from './components/CardArticle'
// import CardArchive from './components/CardArchive'
import blog from '@/services/blog.js'
import tag from '@/services/tag.js'
export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1,
      pageCount: 0,
      sortBy: 'updated_at',
      tagList: [],
      filterTags: [],
      hotTags: []
    }
  },
  created () {
    this.page = parseInt(this.$route.query.page) || 1
    this.getBlogsByFilter(this.filterTags)
    this.getTags()
  },
  methods: {
    getBlogsByFilter (tag_id = []) {
      blog.getBlogs({
        page: this.page,
        sortBy: this.sortBy,
        tag: tag_id
      }).then(res => {
        console.log('返回的数据为', res)
        this.blogs = res.data.data
        console.log('返回的blog列表为', res.data.data)
        this.total = res.total
        this.page = res.page
        this.pageCount = res.pageCount
      })
    },
    getTags () {
      tag.getTags().then(res => {
        this.hotTags = res.data.data
        console.log('标签列表：', this.hotTags)
      })
    }

  },
  components: {
    'card-me': CardMe,
    'card-tag': CardTag
    // 'card-article': CardArticle,
    // 'card-archive': CardArchive
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
    margin-top: 40px;

    h3 {
      margin: 5px 0;
    }

    span {
      text-align: right;
      margin: 5px 0;
      font-size: 15px;
      color: @textLighterColor;

      // a {
      //   color: @themeColor;
      //   text-decoration: none;
      // }
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

      .item-list {
        display: flex;
        justify-content: space-between;
        .item-tag {
          margin-left: 20%;
        }
        .item-time {
          margin-top: 3px;
          margin-right: 30%;
        }

      }

      .blog-sort {
        background-color: #fff;
        padding-right: 20px;
        cursor: pointer;

      }

      .blog-item {
        text-decoration: none;
      }

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
      // background-color: #fff;
      // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      // border-radius: 3px;

      height: 500px;

      .right-nav-top {
        background-color: #fff;
        padding: 12px 6px;
        margin: 0 5%;
        border-bottom: 1px solid #efefef;
        color: @textLighterColor;
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
