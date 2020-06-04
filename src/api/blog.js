import request from './request'

const URL = {
  GET_LIST: '/blog',
  GET_BLOG_DETAIL: '/blog/:uuid'
}
export default {
  getBlogs ({ page = 1, tag = [] }) {
    return request(URL.GET_LIST, 'GET', { page, tag })
  },
  getBlogDetail ({ uuid }) {
    return request(URL.GET_BLOG_DETAIL.replace(':uuid', uuid))
  }
}
