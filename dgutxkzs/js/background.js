chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url.replace('http://tyxk.dgut.edu.cn/Public/static/css/bootstrap.min.css', 'http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css');
        url = url.replace('http://tyxk.dgut.edu.cn/Public/static/img/', 'https://raw.githubusercontent.com/mountainguan/dguttyxkzs/master/outside_js/img/');
        url = url.replace('http://tyxk.dgut.edu.cn/Public/static/js/jquery-1.11.2.min.js', 'http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js');
        url = url.replace('http://tyxk.dgut.edu.cn/Public/static/js/bootstrap.min.js', 'http://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.min.js');
        url = url.replace('http://www.google-analytics.com/analytics.js', 'http://libs.cdnjs.net/analytics.js/1.3.29/analytics.min.js');
        
        return {redirectUrl: url};
    },
    {urls: ["*://*.google-analytics.com/*","*://tyxk.dgut.edu.cn/Public/static/css/bootstrap.min.*","*://tyxk.dgut.edu.cn/Public/static/js/*","*://tyxk.dgut.edu.cn/Public/static/img/*"]},
    ["blocking"]
);