/*Coding by Aditya Dalal.*/
(function (global) {

var call = {};

var homeHtml = "parts/home.html";
var ourTeamHtml="parts/ourteam.html";

var insert = function (selector, html) {
  var target = document.querySelector(selector);
  target.innerHTML = html;
};


var load = function (selector) {
  var html = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
  insert(selector, html);
};




document.addEventListener("DOMContentLoaded", function (event) {

load("#content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#content")
      .innerHTML = responseText;
  },
  false);
});


call.loadingOurTeamPage = function () {
  load("#content");
  $ajaxUtils.sendGetRequest(
    ourTeamHtml,
    function (responseText) {
    document.querySelector("#content")
      .innerHTML = responseText;
  });
};

call.loadingHomePage = function () {
  load("#content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
    document.querySelector("#content")
      .innerHTML = responseText;
  });
};


global.$call = call;

})(window);
