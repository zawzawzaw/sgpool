$(function () {
  var minDesktop = 992;

  // mobile dectection
  function detectMobile() {
    if ($(window).width() >= minDesktop) { return false }
    else { return true };
  }
  const mobile = detectMobile();

  $(window).resize(function () {
    if (mobile !== detectMobile()) {
      location.reload();
    }
  })

  function currentPortion() {
    current = location.hash || '#lottery_draws';
    if (mobile) {
      $('[data-portion]').removeClass('current');
      $('[data-portion=' + current + ']').addClass('current')
    }
  }
  currentPortion();

  window.onhashchange = function () {
    currentPortion();
  }

  // Navigation
  function positionDetect() {
    var portions = ['lottery_draws', 'retail_outlets', 'bet_slips', 'posters', 'first_sweep_tickets', 'sg_pools_logo', 'anchor_end'];
    var scrollTop = $(window).scrollTop();
    for (var i = 0; i < portions.length; i++) {
      if ($('#' + portions[i]).offset().top > (scrollTop + 200)) {
        $('[href="#' + portions[i - 1] + '"]')
          .parents('.museum__nav__list').addClass('active')
          .siblings().removeClass('active')
        return;
      }
    }
  }
  positionDetect();
  $(window).scroll(positionDetect)




  // See Other
  $('.heritage__thumbnail').click(function (e) {
    e.preventDefault();
    var target = $(this).find('a').attr('href').match(/\#[\w]*/ig);

    location.hash = target;
    currentPortion()

    // $('html,body').scrollTop(0)
  });


  // Navgation
  $('.museum__nav [href^="#"]').click(function (e) {
    e.preventDefault();
    var hash = $(this).attr('href');
    var target = $(hash);
    if (target.length) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top,
        duration: 350
      });
    }
  });

  // Slider
  var arrowShape = {
    x0: 10,
    x1: 60, y1: 50,
    x2: 65, y2: 50,
    x3: 15
  }

  var carouselSetting = {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    arrowShape: arrowShape,
    pageDots: false,
    freeScrollFriction: 0.03,
    imagesLoaded: true,
    on: {
      ready: function () {
        var elems = this.cells.slice(0, 2);
        for (i in elems) {
          $(elems[i].element).addClass('pic--in');
        }
      },
      change: function (e) {

        // for (i in this.cells) {
        //   $(elems[i].element).removeClass('pic--in');
        // }

        // var elems = this.cells.slice(e - 1 < 0 ? 0 : e - 1, e + 2);
        // for (i in elems) {
        //   console.log(elems[i].element)
        //   $(elems[i].element).addClass('pic--in');
        // }

      },
      scroll: function (event, pointer, moveVector) {
        if ($(window).width() >= minDesktop) {
          for (i in this.cells) {
            if (
              $(this.cells[i].element).offset().left > 0
              && ($(this.cells[i].element).offset().left + $(this.cells[i].element).width()) < $(window).width()
            ) {
              $(this.cells[i].element).addClass('pic--in')
            } else {
              $(this.cells[i].element).removeClass('pic--in')
            }
          }
        }

        if ($(window).width() < minDesktop) {
          for (i in this.cells) {
            if (
              $(this.cells[i].element).offset().left + $(window).width() * 0.7 > 0
              && ($(this.cells[i].element).offset().left + $(this.cells[i].element).width()) < $(window).width() * 1.7
            ) {
              $(this.cells[i].element).addClass('pic--in')
            } else {
              $(this.cells[i].element).removeClass('pic--in')
            }
          }
        }

      }
    }
  }


  if ($(window).width() >= minDesktop) {
    var flkty1 = new Flickity('#museum__stream1', carouselSetting);
    var flkty2 = new Flickity('#museum__stream2', carouselSetting);
    var flkty3 = new Flickity('#museum__stream3', carouselSetting);
    var flkty4 = new Flickity('#museum__stream4', carouselSetting);
    var flkty5 = new Flickity('#museum__stream5', carouselSetting);
    var flkty6 = new Flickity('#museum__stream6', carouselSetting);
    var flkty7 = new Flickity('#museum__stream7', carouselSetting);

    $(window).resize(function () {
      setTimeout(
        function () {
          flkty1.resize();
          flkty2.resize();
          flkty3.resize();
          flkty4.resize();
          flkty5.resize();
          flkty6.resize();
          flkty7.resize();
        }, 1500)
    });
  }


})