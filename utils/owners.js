function dataList(){
  var dataList= [{
    goods_id: 1,
    goods_title: '曼谷',
    goods_img: '../image/1.jpg',
    goods_site: '泰国'
  }, {
    goods_id: 2,
    goods_title: '东京',
    goods_img: '../image/1.jpg',
    goods_site: '日本'
  }, {
    goods_id: 3,
    goods_title: '伦敦',
    goods_img: '../image/1.jpg',
    goods_site: '英国'
  }, {
    goods_id: 4,
    goods_title: '巴黎',
    goods_img: '../image/1.jpg',
    goods_site: '法国'
  }, {
    goods_id: 5,
    goods_title: '柏林',
    goods_img: '../image/1.jpg',
    goods_site: '德国'
  }];
  console.log(dataList);
  return dataList;
}
module.exports={
  dataList: dataList,
} 

