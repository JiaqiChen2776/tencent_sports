//app.js
import articleList from './utils/articleList.js';
import dayList from './utils/dayList.js';
import nbaTeamRank from './utils/nbaTeamRank.js';
import nbaPlayerRank from './utils/nbaPlayerRank.js';
import gameList from './utils/gameList.js';
import wcMatchesList from './utils/wcMatchesList.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData,articleList);
    Object.assign(this.globalData,dayList);
    Object.assign(this.globalData,nbaTeamRank);
    Object.assign(this.globalData,nbaPlayerRank);
    Object.assign(this.globalData,gameList);
    Object.assign(this.globalData,wcMatchesList);
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