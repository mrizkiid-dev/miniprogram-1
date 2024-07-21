// index.js
Page({
  data:{

  },

  onNavigateToTodo() {
    wx.navigateTo({
      url: '/pages/todo/todo',
    })
  },

  onNavigateToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile',
    })
  }
})
