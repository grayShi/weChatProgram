// pages/photoView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoFormat: {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    },
    photoArray: [
      {
        src: '../resources/photo1.jpg',
        title: '图片1',
      },
      {
        src: '../resources/photo2.jpg',
        title: '图片2',
      },
    ],
  },

})