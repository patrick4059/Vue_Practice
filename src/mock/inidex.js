const Mock = require('mockjs')
const data = Mock.mock({
  'data|6': [
    {
      'shopId|+1': 1,
      shopMsg: '234'
    }
  ]
})

Mock.mock(/goods\/goodsAll/, 'post', () => {
  return data
})

const data1 = Mock.mock({
  data:
    {
      id: 500,
      rid: 0,
      username: 'admin',
      mobile: '123',
      email: '123@qq.com',
      token: 'Bearer LLtBTzUHhxWbSdrUSbWniqHHXPvLpRQvZwAeRfMwXGmRAJGDbnbuWTCgfBuGjftFSkwrirhyMZknsoCzMAoCDYfMemNNJXqLDprVFtrzsFLHfXIDkXfxCCqvpFwpYyTqbRtHNbakBeWTYmnADLBPxzr'
    },
  meta:
    {
      msg:
        '登录成功',
      status:
        200
    }
})

Mock.mock(/login/, 'post', () => {
  return data1
})

const data2 = Mock.mock({
  data:
    {},
  meta:
    {
      msg:
        '用户名不存在',
      status:
        400
    }
})

Mock.mock(/field/, 'post', () => {
  return data2
})
