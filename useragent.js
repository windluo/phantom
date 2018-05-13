var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://www.baidu.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    // 获取id未qua的dom的文本
    // var ua = page.evaluate(function() {
    //   return document.getElementById('qua').textContent;
    // });
    // console.log(ua);
    console.log("page.url: " + page.url);
    console.log("page.title: " + page.title);
    console.log("page.windowName: " + page.windowName);
    // console.log("page.content: " + page.content);
    // console.log("page.cookies: " + JSON.stringify(page.cookies));
    // console.log("page.customHeaders: " + JSON.stringify(page.customHeaders));
  }
  phantom.exit();
});
// var page = require('webpage').create();
// page.open('http://www.sample.com', function() {
//   page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
//     page.evaluate(function() {
//       $("p").click();
//     });
//     phantom.exit()
//   });
// });