// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },
  //  登录
  login:function(){
    wx.getUserInfo({
      success:(res)=>{
        console.log(res);
        wx.setStorage({
          key: 'userInfo',
          data: res.userInfo,
        });
        wx.showLoading({
          title: '登录中...',
        });
        setTimeout(()=>{
          this.setData({
            userInfo: res.userInfo
          });
          wx.hideLoading();
        },2000)
       
      }
    })

  },
  moveToMywallet:function(){
    wx.navigateTo({
      url: '../mywallet/index',
    })

  },
  loginout:function(){
   wx.clearStorage();
  
   wx.showToast({
     title: '退出成功',
     duration: 2000
   });
   setTimeout(()=>{
     this.setData({
       userInfo: null
     });
   },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success:(res)=> {
        console.log(res);
        this.setData({
          userInfo:res.data
        })
      },
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