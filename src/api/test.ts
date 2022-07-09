import request from '~/utils/request'

// 测试axios
export function getImgData(size = 10): Promise<any> {
  return request({
    url: `https://picsum.photos/v2/list?page=1&limit=${size}`,
    method: 'get',
  })
}
