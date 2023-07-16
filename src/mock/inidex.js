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

const data3 = Mock.mock({
  data: [
    {
      id: 101,
      authName: '用户管理',
      path: null,
      children: [
        {
          id: 102,
          authName: '用户列表',
          path: 'user',
          children: []
        }
      ]
    },
    {
      id: 103,
      authName: '权限管理',
      path: null,
      children: [
        {
          id: 104,
          authName: '角色列表',
          path: 'dept',
          children: []
        },
        {
          id: 105,
          authName: '权限列表',
          path: 'role',
          children: []
        }
      ]
    },
    {
      id: 106,
      authName: '商品管理',
      path: null,
      children: [
        {
          id: 107,
          authName: '商品列表',
          path: 'shops',
          children: []
        },
        {
          id: 108,
          authName: '分类参数',
          path: 'each',
          children: []
        },
        {
          id: 109,
          authName: '商品分类',
          path: 'spfl',
          children: []
        }
      ]
    },
    {
      id: 110,
      authName: '订单管理',
      path: null,
      children: [
        {
          id: 111,
          authName: '订单列表',
          path: 'ddlb',
          children: []
        },
        {
          id: 112,
          authName: '订单详情',
          path: 'ddxq',
          children: []
        }
      ]
    },
    {
      id: 114,
      authName: '数据统计',
      path: null,
      children: [
        {
          id: 115,
          authName: '商品总数',
          path: 'spzs',
          children: []
        },
        {
          id: 116,
          authName: '订单总计',
          path: 'ddzj',
          children: []
        }
      ]
    }
  ],
  meta:
    {
      msg:
        '获取菜单列表成功',
      status:
        200
    }
})

Mock.mock(/menus/, 'get', () => {
  return data3
})

const data4 = Mock.mock({
  data: {
    pagenum: 1,
    total: 4,
    users: [{
      id: 500,
      rolename: '超级管理员',
      username: 'admin',
      create_time: '1486720211',
      mobile: '15788852136',
      email: 'tige112@qq.com',
      type: 1,
      mg_state: true
    }, {
      id: 501,
      rolename: '测试角色1',
      username: 'linken',
      create_time: '1486720211',
      mobile: '15788852136',
      email: 'tige1555@qq.com',
      type: 1,
      mg_state: false
    }]
  },
  meta:
    {
      msg:
        '获取管理员列表成功',
      status:
        200
    }
})

Mock.mock(/user/, 'get', () => {
  return data4
})
