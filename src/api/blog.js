import request from './request'

const URL = {
  GET_LIST: '/blog',
  GET_BLOG_DETAIL: '/blog/:blogId'
}
export default {
  getBlogs ({ page = 1, tag = [] }) {
    return request(URL.GET_LIST, 'GET', { page, tag })
  },
  getBlogDetail ({ blogId }) {
    return request(URL.GET_BLOG_DETAIL.replace(':blogId', blogId))
  }
}
