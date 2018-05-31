//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-info',
      success:(res) => {
        // success
        console.log(res);
        this.globalData.userInfo =res.data;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})