//index.js
//获取应用实例
const app = getApp();
var owners = require("../../utils/owners.js");

Page({
  data: {
  },
  onLoad: function(options) {
    var list = owners.dataList();
    this.setData({
      dataList: list,
      list: list
    });
    console.log(list);
  },

  // 获得用户输入的关键字
  getKeyWord: function(e) {
    var that = this;
    that.setData({
      keyWord: e.detail.value,
    });
    console.log("关键字" + that.data.keyWord);
  },
  // 点击搜索事件
  searchOccupier: function(e) {
    var title = this.data.keyWord;
    var list = this.data.list;
    if (title != "") {
      var owners = [];
      for (var i in list) {
        if (list[i].goods_title == title) {
          owners.push(list[i]);
          console.log(list[i]);
        }
      }
      this.setData({
        dataList: owners
      });
    } else {
      this.setData({
        dataList: list
      });
    }
    console.log(this.data.dataList);

  }
})