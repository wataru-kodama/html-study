'use strict';

$(function() {
  $('#top').on('click', function() {
    $('html,body').animate({scrollTop:0},800);
  });
});