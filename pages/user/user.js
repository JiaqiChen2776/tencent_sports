// pages/user/user.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    lists:[]
  },

  getUserInfo: function(e) {
    console.log(e);
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })
    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: function(res){
        // success
        console.log('保存成功');
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    }
    wx.getStorage({
      key: 'lists',
      success: (res) => {
        // success
        console.log(res);
        this.setData({
          'lists': res.data
        })
      }
    })
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