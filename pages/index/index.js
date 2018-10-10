//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dataList: [{
      goods_id: 1,
      goods_title: '曼谷4',
      goods_img: '../image/1.jpg',
      goods_site: '广州白云区'
    }, {
        goods_id: 1,
        goods_title: '曼谷4',
        goods_img: '../image/1.jpg',
        goods_site: '广州白云区'
    }, {
        goods_id: 1,
        goods_title: '曼谷4',
        goods_img: '../image/1.jpg',
        goods_site: '广州白云区'
    }, {
      goods_id: 1,
      goods_title: '曼谷4',
        goods_img: '../image/1.jpg',
      goods_site: '广州白云区'
    }, {
        goods_id: 1,
        goods_title: '曼谷4',
        goods_img: '../image/1.jpg',
        goods_site: '广州白云区'
    }],
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function() {
  
  }
})