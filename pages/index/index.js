Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude: 0,
    mapctx:null,
    status:false//骑行标志
  },
  bindcontroltap:function(e){
    console.log(e);
    var id=e.controlId;
    switch(id){
      case 1:
        this.moveToCenter();
        break;
      case 2:
        console.log(this.data.status)
      if(this.data.status==true){
        // 在骑行中
        wx.navigateBack({
          delta:'1'
        });

      }else{

        wx.scanCode({
          success: (res) => {
            console.log(res);
            wx.request({
              url: 'https://www.easy-mock.com/mock/5ad7efc56443e070b8dc7115/carmsg',
              method: 'GET',
              success: (res) => {
                console.log(res);
                wx.navigateTo({
                  url: '../scanresult/index?code=' + res.data.code + '&password=' + res.data.password,
                })
              }
            })
          }
        });
      }
         break;
      case 3:
        wx.redirectTo({
        url: '../user/index',
      });
      break;
      case 4:
        wx.redirectTo({
          url: '../report/index',
        });
       
        
        
    }
  },
  moveToCenter:function(){
    // 将地图中心移动到当前定位点，需要配合map组件的show - location使用
    this.mapctx.moveToLocation();

  }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (Object.keys(options).length>0){
      this.setData({
        status:true
      });
    }
    console.log(this);
    var self=this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        self.setData({
          longitude:res.longitude,
          latitude: res.latitude
        })
      },
    });
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        self.setData({
          controls:[{
            id:1,
            iconPath:'/images/location.png',
            position:{
              width:50,
              height:50,
              top: res.windowHeight-80,
              left: 20
            },
            clickable:true
          },
          {
            id:2,
            iconPath:'/images/use.png',
            position:{
              width: 90,
              height: 90,
              top: res.windowHeight - 120,
              left: res.windowWidth / 2-45 
            },
            clickable: true
           
          }
            ,
          {
            id: 3,
            iconPath: '/images/avatar.png',
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 160,
              left: res.windowWidth -70
            },
            clickable: true

          } ,
          {
            id: 4,
            iconPath: '/images/warn.png',
            position: {
              width: 50,
              height:50,
              top: res.windowHeight - 80,
              left: res.windowWidth - 70
            },
            clickable: true

          }
            ,
          {
            id: 5,
            iconPath: '/images/marker.png',
            position: {
              width: 30,
              height:45,
              top: res.windowHeight/2-45,
              left: res.windowWidth /2-15
            }
          }
          ]
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
    this.mapctx = wx.createMapContext('map_container', this);
    this.moveToCenter();
    
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