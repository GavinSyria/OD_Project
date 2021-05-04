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
(function (global) {

var dc = {};

var homeHtml = "snippets/home.html";


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


document.getElementById("home").addEventListener("onclick",function(){
  console.log("this is working");
});



global.$dc = dc;

})(window);

