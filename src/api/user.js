import request from '@/utils/request'

// 登陆接口
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 *  获取用户的基本资料
 *
 * **/
export function getUserInfo () {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

/** *
 *
 * 获取用户的基本信息  现在写它 完全是为了显示头像
 * **/
export function getUserDetailById (id) {
  return request({
    url: `/sys/user/${id}`
  })
}
