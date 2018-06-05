//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gameList: [
      {
        id: '1',
        gameDate: '6月14日',
        gameTime: '23:00',
        team_1: '俄罗斯',
        team_1_pic: '../../images/shijiebei/RUS.png',
        team_1_score: 0,
        team_2: '沙特',
        team_2_pic: '../../images/shijiebei/147837532.png',
        team_2_score: 0,
        gameLive: true,
        isStart: false,
        navigateUrl: '/pages/order/order'
      },
      {
        id: '2',
        gameDate: '6月15日',
        gameTime: '20:00',
        team_1: '埃及',
        team_1_pic: '../../images/shijiebei/EGY.png',
        team_1_score: 0,
        team_2: '乌拉圭',
        team_2_pic: '../../images/shijiebei/team_1_837.png',
        team_2_score: 0,
        gameLive: true,
        isStart: false,
        navigateUrl: '/pages/order/order'
      },
      {
        id: '3',
        gameDate: '6月15日',
        gameTime: '23:00',
        team_1: '摩洛哥',
        team_1_pic: '../../images/shijiebei/MAR.png',
        team_1_score: 0,
        team_2: '伊朗',
        team_2_pic: '../../images/shijiebei/0.png',
        team_2_score: 0,
        gameLive: true,
        isStart: false,
        navigateUrl: '/pages/order/order'
      },
    ],
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
    articleList: [
      {
        id: '31',
        articleTitle: '满血复活！内少迷踪步禁区1v3为所欲为 他复出就是进球机器',
        articlePic: '../../images/shijiebei/123.jpg',
        commentsNum: 66
      },
      {
        id: '32',
        articleTitle: '热身赛-西班牙1-1瑞士 新星破门 徳赫亚脱手送R罗进球',
        articlePic: '../../images/shijiebei/125.jpg',
        commentsNum: 678
      },
      {
        id: '33',
        articleTitle: '【世界杯翻译官】 圆梦1998：创造奇迹的牙买加队',
        articlePic: '../../images/shijiebei/124.jpg',
        commentsNum: 0
      },
      {
        id: '34',
        articleTitle: '爆切尔西为省钱将签前巴黎主帅6000万求购罗马门神',
        articlePic: '../../images/shijiebei/120.jpg',
        commentsNum: 5
      },
      {
        id: '35',
        articleTitle: '专访哥斯达黎家铁卫：不惧与内马尔对位 世界杯力争出线',
        articlePic: '../../images/shijiebei/121.jpg',
        commentsNum: 14
      },
      {
        id: '36',
        articleTitle: '博格巴：外界对我批评不公平 梅西散步就人说',
        articlePic: '../../images/shijiebei/122.jpg',
        commentsNum: 128
      },
      {
        id: '37',
        articleTitle: '首签？爆皇马与利物浦神锋基本谈妥 齐祖下课导致延误',
        articlePic: '../../images/shijiebei/126.jpg',
        commentsNum: 71
      }
    ]
  },
  //事件处理函数
  
})
