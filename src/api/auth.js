import request from './request'

const URL = {
  REGISTER: '/user/register',
  LOGIN: '/user/login',
  LOGOUT: '/user/logout',
  GET_INFO: '/user/info'
}

export default {
  register ({ username, password, email }) {
    return request(URL.REGISTER, 'POST', { username, password, email })
  },

  login ({ username, password }) {
    return request(URL.LOGIN, 'POST', { username, password })
  },

  logout () {
    return request(URL.LOGOUT, 'POST')
  },

  getInfo () {
    return request(URL.GET_INFO, 'POST')
  }
}
