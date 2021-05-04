/*global $*/
var $j = jQuery.noConflict();
$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
    $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

var dc = {};

var homeHtml = "snippets/home.html";
var scene1 = "snippets/Scenario1.html";
var scene2 = "snippets/Scenario2.html";
var scene31 = "snippets/Scenario3-1.html";
var scene32 = "snippets/Scenario3-2.html";
var scene4 = "snippets/Scenario4.html";
var scene5 = "snippets/Scenario5.html";
var scene61 = "snippets/Scenario61.html";
var scene62 = "snippets/Scenario62.html";
var scene7 = "snippets/Scenario7.html";
var scene81 = "snippets/Scenario81.html";
var scene82 = "snippets/Scenario82.html";
var scene9 = "snippets/Scenario9.html";
var scene10 = "snippets/Scenario10.html";
var scene11 = "snippets/Scenario11.html";
var scene12 = "snippets/Scenario12.html";
var scene13 = "snippets/Scenario13.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


function showhome() {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene1(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene1,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene2(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene2,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene31(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene31,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene32(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene32,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene4(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene4,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene5(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene5,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene61(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene61,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene62(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene62,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene7(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene7,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene81(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene81,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene82(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene82,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene9(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene9,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene10(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene10,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene11(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene11,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene12(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene12,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};

function showscene13(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    scene13,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    },false
    );
};
global.$dc = dc; 
(function (global) {



})(window);

