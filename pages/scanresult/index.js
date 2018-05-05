// pages/scanresult/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:'',
    time: 9,
    code:''

  },
  // 报障
  bindtap:function(){
    wx.redirectTo({
      url: '../report/index',
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       password: options.password,
       code: options.code
     });
     var timer1 = setInterval(() => {
       this.setData({
         time: --this.data.time
       });
       console.log(this.data.time)
       if (this.data.time == 0) {
         clearInterval(timer1);
         wx.redirectTo({
           url: '../usebike/index?code='+this.data.code,
         })
        
       }
     }, 1000);
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