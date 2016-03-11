// ==UserScript==
// @name         莞工体育选课助手
// @namespace    http://your.homepage/
// @version      1.1
// @description  助你快速选课
// @author       mountainguan
// @match        http://tyxk.dgut.edu.cn/index.php?m=Home&c=Student&a=index
// @match        http://tyxk.dgut.edu.cn/index.php?m=&c=Student&a=index
// @grant        none
// ==/UserScript==
//============样式补充============
document.getElementsByTagName("head")[0].innerHTML = document.getElementsByTagName("head")[0].innerHTML + "<style type='text/css'>body{padding-top:40px;padding-bottom:40px;background-image:url(https://raw.githubusercontent.com/mountainguan/dguttyxkzs/master/outside_js/img/3_01.gif);background-repeat:repeat-x}.form-signin{max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox,.form-signin .form-signin-heading{margin-bottom:10px}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:10px;font-size:16px}.form-signin .form-control:focus{z-index:2}.form-signin input[type=email]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}body,button,h1,h2,h3,h4,h5,h6,input,select,textarea{font-family:'Segoe UI','Lucida Grande',Helvetica,Arial,'Microsoft YaHei',FreeSans,Arimo,'Droid Sans','wenquanyi micro hei','Hiragino Sans GB','Hiragino Sans GB W3',Arial,sans-serif}</style>"
//============插入窗口============
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + "<div style='top:0px;position:fixed;width:220px;right:0;top:30px'><div class='panel panel-info'><div class='panel-heading'><h6 class='panel-title text-center text-danger'>体育选课助手</h6></div><div class='panel-body'><div class='well'><form role='form' class='text-center'><div class='form-group'><label class='control-label' for='tyxkId'>课程编号</label><input class='form-control input-sm' id='tyxkId' type='text'></div><input type='button' class='btn btn-default btn-xs' id='select' value='选课'>         <input type='button' class='btn btn-default btn-xs' id='retreat' value='退选'></form></div><span class='badge' style='float:right'>Version 1.0</span></div></div></div>";
//=============功能===============
var script = document.createElement('script');
script.setAttribute('text', 'text/javascript');
script.innerHTML = "document.getElementById('select').onclick = function() {var TYcourseID = document.getElementById('tyxkId').value;selectCourseDoing(TYcourseID,'sel');};document.getElementById('retreat').onclick = function() {var TYcourseID = document.getElementById('tyxkId').value;selectCourseDoing(TYcourseID,'quit');}";
document.getElementsByTagName('body')[0].appendChild(script);

window.onload=function(){document.getElementById("alertModal").style="display:none;padding-right:17px;";};