$(document).ready(function() {
  resizeThemeBlocks()

  $("#slick-header").slick({
    "arrows":false,
    //"draggable":false,
    "fade":true,
    "infinite":false
  });

  $("#slick-form").slick({
    "arrows":false,
    //"draggable":false,
    "fade":true,
    "infinite":false
  });

  $(".slick-goto").click(function() {
    var number = $(this).data('slide-number')
    $("#slick-header").slick('slickGoTo', number);
    $("#slick-form").slick('slickGoTo', number);
  })

  $("#slick-next").click(function() {
    $("#slick-header").slick('slickNext');
    $("#slick-form").slick('slickNext');
  })

  $("#slick-prev").click(function() {
    $("#slick-header").slick('slickPrev');
    $("#slick-form").slick('slickPrev');
  })
});

$(window).resize(function () {
  resizeThemeBlocks()
})

function resizeThemeBlocks() {
  var blockH = 120;
  var h = 0;

  $(".theme-text").each(function () {
    var th = $(this).height();

    if (th > h) {
      h = th;
    }
  })

  $(".theme-selection--block").each(function () {
    $(this).height(blockH + h);
  })
}
