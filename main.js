var webpage = require('webpage');
var page = webpage.create();

var loadUrlTime = function (startTime) {
  // 测量加载页面花费的时间
  var time = Date.now() - startTime;
  console.log('加载页面耗时：' + time + ' msec');
  return time;
}

var screenShot = function (page, name) {
  // 截图页面
  // var time = new Date().getTime();
  var time = '';
  page.render('./images/' + name + time + '.png');
}

var getTitle = function (page) {
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

var startTime = Date.now();
page.open('http://www.baidu.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    loadUrlTime(startTime);
    // screenShot(page, 'baidu');
    getTitle(page);
  } else {
    console.log('FAIL to load the address');
  }
  phantom.exit();
});