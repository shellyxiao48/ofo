// pages/usebike/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"",
    status:"正在计费",
    timer:{
      hour:0,
      minute:0,
      second:0,
    },
    time:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      code: options.code,
    });
     this.data.time=setInterval(()=>{
      this.setData({
        "timer.second": ++this.data.timer.second
      });
      if(this.data.timer.second==59){
        setTimeout(()=>{
          if (this.data.timer.minute==59){
            console.log('hour:' + this.data.timer.hour)
            this.setData({
              "timer.hour": ++this.data.timer.hour,
              "timer.second": 0,
              "timer.minute": 0
            });
          }else{
            this.setData({
              "timer.second": 0,
              "timer.minute": ++this.data.timer.minute
            });
          }
          
        },1000);
      }
    },1000);
  },
  // 结束骑行
  endride:function(){
    clearInterval(this.data.time);
    wx.showLoading({
      title: '结束中...',
    });
    setTimeout(()=>{
          wx.hideLoading();
          wx.redirectTo({
            url: '../index/index',
          })
    },2000);

  },
  // 回到地图
  moveToIndex:function(){
    wx.navigateTo({
      url: '../index/index?status=true',
    });

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