// pages/nbaMatches/nbaMatches.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbaPlayerRank: [],
    team:[],
    // playerRank: nbaPlayerRank["scoreRank"],
    curIndex: 0,
    playerSortIndex: 0,
    nbaMenu: [
      {
        id: '71',
        nbaSort: '赛程'
      },
      {
        id: '72',
        nbaSort: '排行'
      },
      {
        id: '73',
        nbaSort: '球员榜'
      }
    ],
    playerSortMenu: [
      {
        id: '81',
        playerSort: '得分榜'
      },
      {
        id: '82',
        playerSort: '助攻榜'
      },
      {
        id: '83',
        playerSort: '篮板榜'
      },
      {
        id: '84',
        playerSort: '抢断榜'
      },
      {
        id: '85',
        playerSort: '盖帽榜'
      }
    ],
    v_live: true,
    vLive_pic: '../../images/vLive.png',
    vLive_text:'视频直播',
    pLive_pic: '../../images/pLive.png',
    pLive_text:'图文直播',
    orderList: [
      {
        id: '1',
        gameDate: '6月7日 星期四',
        gameTime: '9:00',
        gameName: 'NBA季后赛',
        team_2: '骑士',
        team_2_pic: 'http://img1.gtimg.com/sports/pics/hv1/131/116/2220/144385211.png',
        team_2_score: 102,
        team_1: '勇士',
        team_1_pic: 'http://mat1.gtimg.com/sports/nba/logo/black/9.png',
        team_1_score: 110,
        gameLive: true,
        isStart: true
      },
      {
        id: '2',
        gameDate: '6月9日 星期六',
        gameTime: '9:00',
        gameName: 'NBA季后赛',
        team_2: '骑士',
        team_2_pic: 'http://img1.gtimg.com/sports/pics/hv1/131/116/2220/144385211.png',
        team_2_score: 85,
        team_1: '勇士',
        team_1_pic: 'http://mat1.gtimg.com/sports/nba/logo/black/9.png',
        team_1_score: 108,
        gameLive: true,
        isStart: true
      }
    ],
    nbaTeamRank: []
    
  },

  bindswiper(e) {
    this.setData({
      curIndex: e.detail.current
    })
  },

  switchSort(e) {
    console.log(e.currentTarget.dataset.index);
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index: 0
    })
  },

  switchPlayerSort(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id;
    // console.log(this.data.nbaPlayerRank.scoreRank);
    this.setData({
      playerSortIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index: 0
    })
    if(id == 81){
      this.setData({
        team:this.data.nbaPlayerRank.scoreRank,
      })
    }else if (id == 82) {
      this.setData({
        team:this.data.nbaPlayerRank.assistRank
      })
    }else if (id == 83) {
      this.setData({
        team:this.data.nbaPlayerRank.backboardRank
      })
    }else if (id == 84) {
      this.setData({
        team:this.data.nbaPlayerRank.stealRank
      })
    }else if (id == 85) {
      this.setData({
        team:this.data.nbaPlayerRank.blockRank
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nbaPlayerRank = this.data.nbaPlayerRank;
    console.log(nbaPlayerRank["scoreRank"]);
    // console.log(app.globalData.nbaPlayerRank);
    wx.setNavigationBarTitle({
      title: 'NBA'
    });
    this.setData ({
      nbaTeamRank: app.globalData.nbaTeamRank,
      nbaPlayerRank: app.globalData.nbaPlayerRank
      
    })
    this.setData({
      team:this.data.nbaPlayerRank.scoreRank
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