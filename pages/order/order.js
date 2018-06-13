// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasOrder: true,
    vLive_pic: '../../images/vLive.png',
    vLive_text:'视频直播',
    pLive_pic: '../../images/pLive.png',
    pLive_text:'图文直播',
    orderList: [
      {
        id: '1',
        gameDate: '6月4日 星期一',
        gameTime: '8:00',
        gameName: 'NBA季后赛',
        team_1: '骑士',
        team_1_pic: 'http://img1.gtimg.com/sports/pics/hv1/131/116/2220/144385211.png',
        team_1_score: 0,
        team_2: '勇士',
        team_2_pic: 'http://mat1.gtimg.com/sports/nba/logo/black/9.png',
        team_2_score: 0,
        gameLive: true,
        isStart: false
      },
      {
        id: '2',
        gameDate: '6月7日 星期四',
        gameTime: '9:00',
        gameName: 'NBA季后赛',
        team_1: '骑士',
        team_1_pic: 'http://img1.gtimg.com/sports/pics/hv1/131/116/2220/144385211.png',
        team_1_score: 0,
        team_2: '勇士',
        team_2_pic: 'http://mat1.gtimg.com/sports/nba/logo/black/9.png',
        team_2_score: 0,
        gameLive: true,
        isStart: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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