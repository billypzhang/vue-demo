import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Shopcart from '@/components/shopcart/shopcart'
import Search from '@/components/search/search'
import NewsList from '@/components/news/newsList'
import NewsDetail from '@/components/news/newsDetail'
import PhotoShare from '@/components/photo/photoShare.vue'
import PhotoDetail from '@/components/photo/photoDetail.vue'
import GoodsList from '@/components/goods/goodsList.vue'
import GoodsDetail from '@/components/goods/goodsDetail.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    { path : '/', redirect : { name : 'home' } },
    { name : 'home', path : '/home', component : Home},//首页
    { name : 'member', path : '/member', component : Member},//会员
    { name : 'shopcart', path : '/shopcart', component : Shopcart},//购物车
    { name : 'search', path : '/search', component : Search},//查找
    { name:'news.list',path:'/news/list',component:NewsList}, //新闻列表
    { name:'news.detail',path:'/news/detail',component:NewsDetail}, //新闻详情
    { name:'photo.share',path:'/photo/share',component:PhotoShare}, //图文分享
    { name:'photo.detail',path:'/photo/detail/:id',component:PhotoDetail},//图片详情
    { name:'goods.list',path:'/goods/list', component:GoodsList}, //商品列表
    { name:'goods.detail',path:'/goods/detail',component:GoodsDetail}, //商品详情
  ]
})
