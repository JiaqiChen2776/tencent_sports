// pages/wcMatches/wcMatches.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    headerBar: [
      "赛程",
      "积分",
      "淘汰赛",
      "射手"
    ],
    wcMatchesList: []
  },

  switchBar(e) {
    const curId = e.target.dataset.id;
    this.setData({
      selected: curId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '世界杯'
    })
    this.setData({
      wcMatchesList: app.globalData.wcMatchesList
    })
    console.log(app.globalData.wcMatchesList);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})