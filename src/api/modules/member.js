import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 会员列表
export function list (params) {
  return request({
    url: requestUrl('/robot/member/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

export function staticAccount (params) {
  return request({
    url: requestUrl('/robot/member/staticAccount'),
    method: 'post',
    data: requestParam(params)
  })
}
export function updateAmount (params) {
  return request({
    url: requestUrl('/robot/member/updateAmount'),
    method: 'post',
    data: requestParam(params)
  })
}
