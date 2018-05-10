var webpage = require('webpage');
var page = webpage.create();
// page.open('http://phantomjs.org/quick-start.html', function (status) {
//  var data;
//  if (status === 'fail') {
//   console.log('open page fail!');
//  } else {
//   // console.log(page.content);//打印出HTML内容
//   console.log(page);
//  }
//  page.close();//关闭网页
//  phantom.exit();//退出phantomjs命令行
// });

// page.open('http://www.baidu.com', function(status) {
//   console.log("Status: " + status);
//   if(status === "success") {
//     page.render('example.png');
//   }
//   phantom.exit();
// });

var screenShot = function (page, name) {
  // 截图页面
  var time = new Date().getTime();
  page.render('./images/' + name + time + '.png');
}
page.open('http://www.baidu.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    screenShot(page, 'baidu');
  }
  phantom.exit();
});