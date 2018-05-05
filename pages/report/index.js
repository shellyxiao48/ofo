// pages/report/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        name: '0',
        value: "私锁私用",
        checked: false

      },
      {
        name: '1',
        value: "车牌缺损",
        checked: false

      }, {
        name: '2',

        value: "轮胎坏了",
        checked: false

      }, {
        name: '3',

        value: "车锁坏了",
        checked: false

      }, {
        name: '4',
        value: "违规乱停",
        checked: false

      }, {
        name: '5',
        value: "密码不对",
        checked: false

      }, {
        name: '6',
        value: "刹车坏了",
        checked: false

      }, {
        name: '7',
        value: "其他故障",
        checked: false

      },
    ],
    text: '拍摄/相册',
    disabled: true,
    imagesUrl: []

  },
  delete: function (e) {
    console.log(e);
    var imagesUrl = this.data.imagesUrl;
    var index = e.currentTarget.dataset.index;
    imagesUrl.splice(index, 1);
    this.setData({
      imagesUrl: imagesUrl
    });
    if (imagesUrl.length==0){
      this.setData({
        text: '拍摄/相册'
      });
    }
  },
  fileInput: function () {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        let arr = res.tempFilePaths;
        console.log(...arr);
        console.log(this.data.imagesUrl);
        this.setData({
          imagesUrl: [...this.data.imagesUrl, ...arr],
          text:"+"
        });




      },
    })
  },
  checkboxChange: function (e) {
    console.log(e);
    let disabled = true;
    let len = e.detail.value.length;
    console.log(e.detail.value)
    if (len == 0) {
      disabled = true;
    } else {
      disabled = false;
    }
    this.data.items.forEach((ele, index) => {
      let flag = false;
      var key = 'items[' + index + '].checked';
      for (var i = 0; i < len; i++) {
        if (ele.name == e.detail.value[i]) {
          flag = true;
          break;
        } else {
          flag = false
        }
      }
      this.setData({
        [key]: flag
      });
    });
    this.setData({
      disabled: disabled
    });
    console.log(this.data.items);
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