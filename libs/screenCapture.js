// 屏幕抓取
var path = require('path');
console.log('目录：' + path.resolve(__dirname, '../'))
var screenCapture = {
  captureImage: function (name, type) {
    console.log('目录：' + path.resolve(__dirname, '../'))
    // 截图
    // var time = new Date().getTime();
    var time = '';
    type = type ? type : 'png';
    // page.render(path.resolve(__dirname, '../') + 'images/' + name + time + '.' + type);
  },

  captureFile: function(name, type) {
    console.log('目录：' + path.resolve(__dirname, '../'))
    // 截取pdf
    var time = '';
    type = type ? type : 'pdf';
    // page.render(path.resolve(__dirname, '../') + 'files/' + name + time + '.' + type);
  }
}

module.exports = screenCapture;