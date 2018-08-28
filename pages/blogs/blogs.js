// pages/blogs/blogs.js
var WxParse = require('../wxParse/wxParse.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/api/blog/findBlogList',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);

        for (let i = 0; i < res.data.data.length; i++) {
          WxParse.wxParse('reply' + i, 'html', res.data.data[i].contentText, that);
          if (i === res.data.data.length - 1) {
            WxParse.wxParseTemArray("replyTemArray", 'reply', res.data.data.length, that)
          }
        }
      }
    })
  }
})