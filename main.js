var webpage = require('webpage');
var page = webpage.create();

var captureImage = function (name, type) {
  // 截图
  // var time = new Date().getTime();
  var time = '';
  type = type ? type : 'png';
  // 指定截图宽高
  page.viewportSize = { width: 600, height: 400 };
  page.clipRect = { top: 0, left: 0, width: 600, height: 400 };
  page.render('./images/' + name + time + '.' + type);
}

var captureFile = function(name, type) {
  // 只能截成pdf
  // 截取pdf
  var time = '';
  type = type ? type : 'pdf';
  page.render('./files/' + name + time + '.' + type);
}

var loadUrlTime = function (startTime) {
  // 测量加载页面花费的时间
  var time = Date.now() - startTime;
  console.log('加载页面耗时：' + time + ' msec');
  return time;
}

var getTitle = function () {
  // 获取页面标题
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('页面title：' + title)
}
// onConsoleMessage可以抓取页面的console.log
// page.onConsoleMessage = function(msg) {
//   console.log('页面的console.log：' + msg);
// };
// // 简单的获取页面请求
// page.onResourceRequested = function(request) {
//   console.log('Request：' + JSON.stringify(request, undefined, 4));
// };
// // 简单的获取页面响应
// page.onResourceReceived = function(response) {
//   console.log('Receive：' + JSON.stringify(response, undefined, 4));
// };

var startTime = Date.now();
page.open('https://www.baidu.com/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    loadUrlTime(startTime);
    captureImage("baidu");
    // captureFile('baidu');
    getTitle(page);
  } else {
    console.log('FAIL to load the address');
  }
  phantom.exit();
});