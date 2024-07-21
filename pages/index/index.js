// index.js
Page({
  data:{

  },

  onNavigateToExample() {
    wx.navigateTo({
      url: '/pages/example/example',
    })
  },

  onNavigateToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile',
    })
  }
})
