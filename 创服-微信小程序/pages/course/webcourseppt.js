// pages/course/webcourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    ppt_list:[
      [
        { name: "第一章，我不知道说啥，我就是凑字数", id: "0" },
        { name: "第二章", id: "1" },
        { name: "第三章", id: "2" }
      ],
      [
        
        { name: "函数的极限", id: "3" },
        { name: "区间的定义", id: "4" },
        { name: "导数", id: "5" }
      ]
    ],
    timelist:[
      { timeinfo: "2019-01-01" },
      { timeinfo: "2019-01-25" },
    ],
    /*ppt_list1: [
      [
        { timeinfo: "2019-01-01" },
        { name: "第一章，我不知道说啥，我就是凑字数", id: "0" },
        { name: "第二章", id: "1" },
        { name: "第三章", id: "2" }
      ],
      [
        { timeinfo: "2019-01-25" },
        { name: "函数的极限", id: "3" },
        { name: "区间的定义", id: "4" },
        { name: "导数", id: "5" }
      ]
    ],*/
    ppt_list0:[
      {name:"第一章，我不知道说啥，我就是凑字数",id:"0"},
      {name:"第二章",id:"1"},
      {name:"第三章",id:"2"}
    ],
    ppt_list1: [
      { name: "函数的极限", id: "3" },
      { name: "区间的定义", id: "4" },
      { name: "导数", id: "5" }
    ],
    word_list: [
      { name: "第一章", id: "0" },
      { name: "第二章", id: "1" },
      { name: "第三章", id: "2" }
    ],
    video_list: [
      { name: "第一章", id: "0" },
      { name: "第二章", id: "1" },
      { name: "第三章", id: "2" }
    ],
    ppt_list_num:[
      { id: "0",timeinfo:"2019-01-01"},
      { id: "1", timeinfo: "2019-01-01" },
      { id: "2", timeinfo: "2019-01-01" }
    ],
    PPTcollection: [false, false, false, false, false, false, false, false, false, false, false, false],
    PPTdownload: [false, false, false, false, false, false, false, false, false, false, false, false],
    /*WORDcollection: [false, false],
    WORDdownload: [false, false],
    VIDEOcollection: [false, false],
    VIDEOdownload: [false, false]*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (opt) {

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

  },


  //原用于swiper-item,现已不使用
  swiperTab: function (e) {
    var that = this;
    that.setData({    
      //setData 函数用于将数据从逻辑层发送到视图层（异步),同时改变对应的 this.data 的值（同步）
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current)//点击当前已选中栏
     {
      return false;
    } else //点击其他栏
    {
      that.setData({
        currentTab: e.target.dataset.current//栏切换
      })
    }
  },
  PPTcollection: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    console.log(e.detail.current);
  },
  PPTdownload: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    console.log(e.detail.current);
  },
  /*WORDcollection: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  WORDdownload: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  VIDEOcollection: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  VIDEOdownload: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },*/
  // 改变下载/收藏的图标
  PPTchangeToggleCol: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.PPTcollection[index]) 
    {
      this.data.PPTcollection[index] = false;
    } 
    else 
    {
      this.data.PPTcollection[index] = true;
    }
    this.setData({
      PPTcollection: this.data.PPTcollection
    })
  },
  
  PPTchangeToggleDl: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.PPTdownload[index]) {
      this.data.PPTdownload[index] = false;
    } else {
      this.data.PPTdownload[index] = true;
    }
    this.setData({
      PPTdownload: this.data.PPTdownload
    })
  },


  /*// 展开折叠选择WORD  
  WORDchangeToggleCol: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.WORDcollection[index]) {
      this.data.WORDcollection[index] = false;
    } else {
      this.data.WORDcollection[index] = true;
    }
    this.setData({
      WORDcollection: this.data.WORDcollection
    })
  },

  WORDchangeToggleDl: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.WORDdownload[index]) {
      this.data.WORDdownload[index] = false;
    } else {
      this.data.WORDdownload[index] = true;
    }
    this.setData({
      WORDdownload: this.data.WORDdownload
    })
  },
  // 展开折叠选择VIDEO  
  VIDEOchangeToggleCol: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.VIDEOcollection[index]) {
      this.data.VIDEOcollection[index] = false;
    } else {
      this.data.VIDEOcollection[index] = true;
    }
    this.setData({
      VIDEOcollection: this.data.VIDEOcollection
    })
  },

  VIDEOchangeToggleDl: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.VIDEOdownload[index]) {
      this.data.VIDEOdownload[index] = false;
    } else {
      this.data.VIDEOdownload[index] = true;
    }
    this.setData({
      VIDEOdownload: this.data.VIDEOdownload
    })
  },*/


  //下载函数
  download: function(event){
    var fileindex = event.currentTarget.dataset.index;
    var url = "https://forteach.cn/forteach/resource/ppt/week1_徐畅.ppt";
    /*url += fileindex;*/
    wx.downloadFile({//文档下载
      url:url,
      success:function(res)
      {
        var filePath = res.tempFilePath;//tempFilePath string 临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件
        console.log(filePath);
        wx.openDocument({//文档预览
          fileType: 'ppt',
          filePath: filePath,
          success: function(res){
            console.log("打开文档成功")
          },
          fail: function(res){
            console.log(res);
          },
          complete: function(res){
            console.log(res);
          }
        })
      },
      fail: function(){
        console.log("下载失败");
      }
    })
  },

  navBack: function () {
    wx.navigateBack({
      delta: 1
    })
  }

})