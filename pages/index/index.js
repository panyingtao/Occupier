//index.js
//获取应用实例
const app = getApp();
var owners = require("../../utils/owners.js");

Page({
  data: {
    keyWord: "",
  },
  onLoad: function (options) {
    var list = owners.dataList();
    this.setData({
      dataList: list,
    });
    console.log(list);
  },

  // 获得用户输入的关键字
  getKeyWord: function (e) {
    this.getData({
      keyWord: e.detail.value
    });
  },
  // 点击搜索事件
  searchOccupier:function(e){
    var title=this.data.keyWord;
  }
})