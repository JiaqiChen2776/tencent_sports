// pages/matchDetail/matchDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barCurIndex: 0,
    barInfoIndex: 0,
    ordered: false,
    game: []
  },

  switchTab(e){
    var datasetId = e.target.dataset.id;
    this.setData({
      barCurIndex: datasetId,
      barInfoIndex: datasetId
    })
  },

  bindOrderMatch() {
    let ordered = !this.data.ordered;
    this.setData({
      ordered
    })
    console.log(this.data.ordered);
    if (this.data.ordered) {
      wx.showToast({
        title: '预约成功',
        icon: 'success'
      })
    } else {
      wx.showToast({
        title: '取消成功',
        icon: 'success'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    const id = options.id;
    console.log(id);
    const game = app.globalData.gameList.filter((item) => {
      return item.id == id
    })
    this.setData({
      game
    })
    console.log(game);
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