//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    days:0,
    gameList: [],
    iconList: [
      {
        linksPic: '../../images/wc/links_matches.png',
        linksText: '赛程'
      },
      {
        linksPic: '../../images/wc/links_goals.png',
        linksText: '射手榜'
      },
      {
        linksPic: '../../images/wc/links_table.png',
        linksText: '积分榜'
      },
      {
        linksPic: '../../images/wc/links_video.png',
        linksText: '视频'
      }
    ],
    articleList: null
  },
  //事件处理函数
  onLoad: function (options) {
    var s1 = '2018-6-14';
    s1 = new Date(s1.replace(/-/g, "/"));
    var s2 = new Date();
    var days = s2.getTime() -s1.getTime();
    var time = parseInt(days / (1000*60*60*24));
    console.log(time+1);
    this.setData({
      days: time+1,
      articleList: app.globalData.articleList,
      gameList: app.globalData.gameList
    })
    console.log(this.data.gameList);
  }
})
