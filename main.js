var webpage = require('webpage');
var page = webpage.create();
var screenCapture = require('./libs/screenCapture');

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
page.open('https://en.wikipedia.org/w/index.php?title=Jakarta&printable=yes', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    loadUrlTime(startTime);
    screenCapture.captureImage('baidu');
    screenCapture.captureFile('baidu');
    getTitle(page);
  } else {
    console.log('FAIL to load the address');
  }
  phantom.exit();
});