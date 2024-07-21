Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: 'We profile',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      },
      fail: (err) => {
        console.error(err);
      }
    });
  }
});