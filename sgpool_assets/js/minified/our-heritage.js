$(function () {
  function thmbnailResize() {
    var minsize = 0;
    $('.heritage__thumbnail__content p').each(function () {
      var text = $(this).text().split('');
      var max = 147;
      if (text.length > max) {
        text.length = (max - 3)
        $(this).text(text.join('') + '...');
      }


    });
  }
  thmbnailResize();



  $('.heritage__thumbnail').click(function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      var target = $(this).find('a').attr('href');
      location = target;
    }
  })
})