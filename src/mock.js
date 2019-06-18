//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;

// 首页轮播图
Mock.mock('/api/lunbo', (req, res) => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    let listObject = {
      url: Random.url(),
      img: Random.image('500x200', '#00405d', '#FFF', 'png', Random.word(4))
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})

// 新闻列表
Mock.mock('/api/newList', (req, res) => {
  let list = [];
  for (let i = 0; i < 30; i++) {
    let listObject = {
      id: Random.integer(100, 9999),
      title: Random.cword(15, 30),
      add_time: Random.datetime(),
      click: Random.integer(0, 999),
      img_url: Random.image('500x200', '#00405d', '#FFF', 'png', Random.word(1))
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})
// 新闻详情
Mock.mock('/api/newDetail', (req, res) => {
  return {
    data: {
      title: Random.cword(15),
      click: Random.integer(0, 999),
      add_time: Random.datetime(),
      content: Random.csentence(300, 2000)
    }
  }
})

// 图文列表
Mock.mock('/api/phoneList', (req, res) => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    let listObject = {
      id: Random.integer(0, 99999),
      title: Random.cword(4),
      zhaiyao: Random.csentence(100, 120),
      img_url: Random.image('200x100', Random.rgba(), '#fff', Random.word(4))
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})
// 图文详情
Mock.mock('/api/phoneDetail', (req, res) => {
  let list = []
  for (let i = 0; i < 3; i++) {
    let listObject = {
      src: Random.image('200x100', '#ddd', '#fff', Random.word(4)),
      msrc: Random.image('200x100', '#ddd', '#fff', Random.word(4)),
      alt: Random.cword(5),
      title: Random.cword(5),
      w: 1200,
      h: 900
    }
    list.push(listObject)
  }

  return {
    data: {
      content:{
        title:Random.cword(15),
        add_time:Random.datetime(),
        click:Random.integer(0, 1000),
        content:Random.csentence(500, 800),
      },
      img:list
    }
  }
})