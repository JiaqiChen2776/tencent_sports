// pages/hot/hot.js
const app = getApp()
Page({
  data: {
    swiperCurIndex: 1,
    dayListIndex:0,
    month: '',
    day: '',
    week: '',
    i: 0,
    weekArr: ['周日','周一','周二','周三','周四','周五','周六'],
    curDate: '',
    daysCountArr: [// 保存各个月份的长度，平年
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ],
    v_live: true,
    vLive_pic: '../../images/vLive.png',
    vLive_text:'视频直播',
    pLive_pic: '../../images/pLive.png',
    pLive_text:'图文直播',
    dayList: [],
    sub_dayList: []
  },

  onLoad: function (options) {
    let dayListIndex = this.data.dayListIndex;
    this.setData({
      dayList: app.globalData.dayList
    })
    console.log(this.data.dayList);
    let testArr = [];
    for (let i = dayListIndex;i<dayListIndex+5;i++) {
      testArr.push(this.data.dayList[i]);
    }
    console.log(testArr);
    this.setData({
      sub_dayList: testArr,
      dayListIndex: this.data.dayListIndex + 5
    })
    console.log(this.data.dayListIndex);
  },

  changeMatch(e) {
    const current = e.detail.current;
    const befInd = this.data.swiperCurIndex;
    const dayListIndex = this.data.dayListIndex;
    const index = current - befInd;
    var arr = [];
    if (current == this.data.sub_dayList.length-1){
      for (let i = dayListIndex;i<dayListIndex+5;i++){
        arr.push(this.data.dayList[i]);
      }
      var testArr = [
        ...this.data.sub_dayList,
        ...arr
      ];
      this.setData({
        sub_dayList: testArr
      })
    }
    if (current == 0) {
      wx.showToast({
        title: '暂无更多赛事',
      })
    }
    if (index <= -1) {
      this.preDay();

    } else if (index >= 1) {
      this.nextDay();
    } else {
      return
    }
    this.setData({
      // sub_dayList: testArr
      // dayListIndex: this.data.dayListIndex + 5
      // swiperCurIndex: current,
    })
  },

  preDay() {
    let day = this.data.day;
    let month = this.data.month;
    let week= this.data.week;
    let i = this.data.i;
    if (i<=0) {
      i = 6;
    }else {
      i--;
    }
    if(day<=1) {
      month--;
      day = this.data.daysCountArr[month-1];
    }else {
      day--;
    }
    this.setData({
      swiperCurIndex: this.data.swiperCurIndex-1,
      month,
      day,
      i,
      week: this.data.weekArr[i],
      curDate: month+'月'+day+'日'+' '+this.data.weekArr[i]
    })
  },

  nextDay() {
    let day = this.data.day;
    let month = this.data.month;
    let week= this.data.week;
    let i = this.data.i;
    if (i>=6) {
      i = 0;
    }else {
      i++;
    }
    if (day>=this.data.daysCountArr[month-1]) {
      day = 1;
      month++;
    }else {
      day++;
    }
    this.setData({
      swiperCurIndex: this.data.swiperCurIndex+1,
      month,
      day,
      i,
      week: this.data.weekArr[i],
      curDate: month+'月'+day+'日'+' '+this.data.weekArr[i]
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
    let date = new Date;
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let i = date.getDay();
    this.setData({
      swiperCurIndex: 2,
      month,
      day,
      i,
      week: this.data.weekArr[i],
      curDate: month+'月'+day+'日'+' '+this.data.weekArr[i]
    })
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