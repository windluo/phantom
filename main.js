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

var startTime = Date.now();
page.open('http://www.baidu.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    loadUrlTime(startTime);
    screenShot(page, 'baidu');
  } else {
    console.log('FAIL to load the address');
  }
  phantom.exit();
});