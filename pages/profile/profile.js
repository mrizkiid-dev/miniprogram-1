Page({
  data: {
    userInfo: {
      name: '',
      image: '',
      bio: ''
    },
  },
  onLoad() {
    if (!this.data.userInfo.name) {
      this.fetchUserProfile();
    }
  },
  async fetchUserProfile() {
    const t = this
    wx.request({
      url: 'https://randomuser.me/api/',
      method: "GET",
      dataType: "json",
      header: {
        'Content-Type' : 'application/json'
      },
      success(response) {
        if (response.statusCode === 200) {
          const data = response.data.results[0];
          console.log('data = ',data);
          t.setData({
            userInfo: {
              name: data.name.first + data.name.last,
              image: data.picture.thumbnail,
              bio: data.email
            }
          })
        } else {
          console.log('error success= ',response.data)
        }
      },
      fail(response) {
        console.log('error = ',response.errMsg)
      }
    })
  }
});