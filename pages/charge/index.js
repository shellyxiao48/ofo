// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:''
  
  },
  bindInput:function(e){
    console.log(e.detail.value)
        this.setData({
          value:e.detail.value
        });
  },
  bindtap:function(){
        console.log(this.data.value);
        wx.getStorage({
          key: 'charge',
          success: (res) =>{
            console.log(res);
            wx.setStorage({
              key: 'charge',
              data: parseFloat(this.data.value)+parseFloat(res.data),
            })
          },
          fail:(res)=>{
            console.log(res);
            wx.setStorage({
              key: 'charge',
              data: this.data.value,
            })
          }
        });
        wx.showLoading({
          title: '充值中',
        })

        setTimeout(function () {
          wx.hideLoading();
          wx.showToast({
            title: '充值成功',
            icon: 'success',
            duration: 2000,

          });
          setTimeout(function () {
          
          wx.redirectTo({
            url: '../mywallet/index',
          });
          }, 2000);
          
        }, 2000);
       
        
        

                       
                        
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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