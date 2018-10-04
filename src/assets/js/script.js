"use strict";
$(document).ready(function() {


  /*----------------------------------------
   home removeclass section
  ----------------------------------------*/
  var slider_caption = $(window).width();
  if (slider_caption >= 2000) {
    $('.home-right').addClass("home-contain");
  }
  if (slider_caption <= 1024) {
    $('.home-right').addClass("home-contain");
  }


  /*----------------------------------------
   mobile menu nav click hide collapse
   ----------------------------------------*/
  var mobile_menu = $(window).width();
  if (mobile_menu < 991) {
    $("nav a.nav-link").on('click', function(event) {
      if (!$(this).hasClass('dropdown-toggle')) {
        $(".navbar-collapse").collapse('hide');
      }

    });
  }

  /*----------------------------------------
     GO to Home
    ----------------------------------------*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
      $('.tap-top').fadeIn();
    } else {
      $('.tap-top').fadeOut();
    }
  });
  $('.tap-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });



  /*----------------------------------------
   color picker start
   ----------------------------------------*/

  (function() {
    $('<div class="color-picker">' +
      '<a href="#" class="handle">' +
      '<i class="fa fa-cog"></i>' +
      '</a><div class="sec-position"><div class="settings-header">' +
      '<h3>Select Color:</h3>' +
      '</div>' +
      '<div class="section">' +
      '<div class="colors o-auto">' +
      '<a href="#" class="color-1" ></a>' +
      '<a href="#" class="color-2" ></a>' +
      '<a href="#" class="color-3" ></a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>').appendTo($('body'));
  })();
  var body_event = $("body");
  body_event.on("click", ".color-1", function() {
    var link = $("<link />", {
      rel: "stylesheet",
      type: "text/css",
      href: "assets/css/color/color-1.css"
    });

    $('#color').html(link);
    $('#color-admin').html(link);
    return false;
  });
  body_event.on("click", ".color-2", function() {
    var link = $("<link />", {
      rel: "stylesheet",
      type: "text/css",
      href: "assets/css/color/color-2.css"
    });
    $('#color').html(link);
    $('#color-admin').html(link);
    return false;
  });
  body_event.on("click", ".color-3", function() {
    var link = $("<link />", {
      rel: "stylesheet",
      type: "text/css",
      href: "assets/css/color/color-3.css"
    });
    $('#color').html(link);
    $('#color-admin').html(link);
    return false;
  });
  $('.color-picker').animate({ right: '-190px' });
  body_event.on("click", ".color-picker a.handle", function(e) {
    e.preventDefault();
    var div = $('.color-picker');
    if (div.css('right') === '-190px') {
      $('.color-picker').animate({ right: '0px' });
    } else {
      $('.color-picker').animate({ right: '-190px' });
    }
  });


});
