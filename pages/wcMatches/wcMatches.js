// pages/wcMatches/wcMatches.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 3,
    ftBarSelected: 0,
    wcSortSwitch: 0,
    v_live: false,
    vLive_pic: '../../images/vLive.png',
    vLive_text:'视频直播',
    pLive_pic: '../../images/pLive.png',
    pLive_text:'图文直播',
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

  bindSortBar(e) {
    const curIndex = e.target.dataset.index;
    this.setData({
      ftBarSelected: curIndex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id  = options.id;
    wx.setNavigationBarTitle({
      title: '世界杯'
    })
    this.setData({
      selected: id,
      wcMatchesList: app.globalData.wcMatchesList,
      wcScoreList: app.globalData.wcScoreList
    })
    console.log(app.globalData.wcScoreList);
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