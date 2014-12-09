$(function() {

  var $blob = $('<blob/>');
  var $blob2 = $('<blob class="blob2"/>');


  $('#sidebarToggle').on('click', function() {
    $(this).closest('.menu').toggleClass('open');
    $('.page').toggleClass('open');

  });



  $('.link').on('mouseleave', function(e) {
    $blob.css({
      top: e.offsetY + 'px',
      left: e.offsetX + 'px'
    });
    $blob.removeClass('scale');
  });
  $('.link').on('mousemove', function(e) {
    $(this).find('blob').css({
      top: e.offsetY + 'px',
      left: e.offsetX + 'px'
    });
  });
  $('.link').on('mouseenter', function(e) {
    $blob.css({
      top: e.offsetY + 'px',
      left: e.offsetX + 'px'
    });
    $(this).append($blob);
    setTimeout(function() {
      $blob.addClass('scale');
    }, 20);
  });
  $('.link').on('click', function(e) {
    e.preventDefault();
    $blob2.css({
      top: e.offsetY + 'px',
      left: e.offsetX + 'px'
    });
    $blob2.removeClass('scale');
    $(this).append($blob2);
    setTimeout(function() {
      $blob2.addClass('scale');
    }, 20);
    var target = $(this).attr('href');
    var scroll = $(target)[0].offsetTop - 70;
    $('html, body').animate({
      scrollTop: scroll
    });

  });

  
});