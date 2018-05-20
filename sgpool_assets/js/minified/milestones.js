var pathStatus = {
  slow: false,
  ready: false,
  length: 0,
  pos: 0,
  target: 0,
  current: 0,
};

$(function () {
  if ($(window).width() < 992) {
    var fix = 200;
  } else {
    var fix = 105
  }
  function decadeDetect() {
    var decades = [1968, 1973, 1986, 1991, 2000, 2010, 2016];
    var scrollTop = $(window).scrollTop();
    for (var i = 0; i < decades.length; i++) {
      if ($('#ms' + decades[i]).offset().top > (scrollTop + fix)) {
        $('[href="#ms' + decades[i - 1] + '"]')
          .parents('.decade').addClass('active')
          .siblings().removeClass('active')
        return;
      }
    }
  }
  decadeDetect();
  $(window).scroll(decadeDetect)


  $('#year-nav').click(function (evt) {
    evt.stopPropagation();
    $(this).toggleClass('open');

    function windowEventHandler(event) {
      evt.stopPropagation();
      $('#year-nav').removeClass('open');
      $(window).unbind('click scroll', windowEventHandler);
    }

    $(window).bind('click scroll', windowEventHandler)
  })



  // Slick Settings
  var ms2003Contents = [
    {
      title: "About iSHINE",
      content: "We launched iSHINE a staff community programme that actively promote '<b>I</b> <b>S</b>erve from the <b>H</b>eart and <b>I</b>n <b>N</b>urturing <b>E</b>veryone' to inculcate staff volunteerism in support of the community-at-large."
    }, {
      title: "Earth Buddiz",
      content: "Team Earth Buddiz raises awareness in conserving the environment and promoting a greener lifestyle."
    }, {
      title: "i-Care",
      content: "Team i-Care partners with Metta Welfare Association in helping children with special needs."
    }, {
      title: "i-Friend",
      content: "Team i-Friend partners with Society For The Aged Sick to bring festive cheers to the elderly residents."
    }, {
      title: "p.a.l",
      content: "Team Pals for Active Living (p.a.l) promotes active aging among elderly Singaporeans, as physical and social wellness are vital for maintaining a healthy lifestyle in one’s golden years. "
    }, {
      title: "SportsFrenz",
      content: "Team SportsFrenz is passionate about sports and believe that it is a great way to break down communication barriers and build confidence and character in youths."
    }, {
      title: "TL&C",
      content: "Team Tender Love & Care (TL&C) is about bringing joy, positive values and loving care to children in need. "
    }
  ];

  var ms2010Contents = [
    {
      title: "ABOUT WITH A HEART",
      content: "Organised the first 'With A Heart' fundraising event with Golf With A Heart, graced by then-Senior Minister Goh Chok Tong. The 'With A Heart' series of fundraising events, initiated by Singapore Pools, had raised more than S$3.8 million for worthy causes."
    },
    {
      title: "Breakfast With A Heart",
      content: "7 Dec ’13 - Breakfast With A Heart raised S$170,000 and all proceeds went towards the S.R. Nathan Education Upliftment Fund."
    },
    {
      title: "Dance With A Heart",
      content: "30 Sep ’16 - Dance With A Heart raised about S$6,300 in aid of Braddell Heights CC Community Development and Welfare Fund. "
    },
    {
      title: "Fashion With A Heart",
      content: "28 Apr ’11 - Fashion With A Heart raised S$340,000 in aid of six beneficiaries."
    },
    {
      title: "Golf With A Heart",
      content: "Golf With A Heart raised more than S$722,000 in aid of nine beneficiaries."
    },
    {
      title: "Football With A Heart",
      content: "The four editions of “Football With A Heart” raised more than S$2.2 million."
    },
    {
      title: "Lunch With A Heart",
      content: "26 Apr ’12 - “Laksamania! Lunch With A Heart” event raised a total of S$30,000 for the Samaritans of Singapore (SOS)."
    },
    {
      title: "River With A Heart",
      content: "28 Oct ’14 - River With A Heart raised over S$408,000 in aid of six beneficiaries. "
    }
  ];

  $('#ms2003Slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $('#ms2003Slick').on('afterChange', function (event, slider, i) {


    $('#iShineTitleBack p').html($('#iShineTitle p').html()).css('transition', 'none')
    $('#iShineTitleBack p').css('opacity', 1).stop().animate({ opacity: 0 }, 500);
    $('#iShineTitle p').html(ms2003Contents[i].title).css('transition', 'none')
    $('#iShineTitle p').css('opacity', 0).stop().animate({ opacity: 1 }, 500, function () {
      $(this).removeAttr('style');
    })

    $('#iShineContentBack p').html($('#iShineContent p').html()).css('transition', 'none')
    $('#iShineContentBack p').css('opacity', 1).stop().animate({ opacity: 0 }, 500);
    $('#iShineContent p').html(ms2003Contents[i].content).css('transition', 'none')
    $('#iShineContent p').css('opacity', 0).stop().animate({ opacity: 1 }, 500, function () {
      $(this).removeAttr('style');
    })

    if ($(window).width() < 992) {
      $('#iShineContent').css('height', $('#iShineContent p').height() + 15 + 'px');
    };

  });

  $('#ms2010Slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('#ms2010Slick').on('afterChange', function (event, slider, i) {
    $('#heartTitleBack p').html($('#heartTitle p').html()).css('transition', 'none')
    $('#heartTitleBack p').css('opacity', 1).stop().animate({ opacity: 0 }, 500);
    $('#heartTitle p').html(ms2010Contents[i].title).css('transition', 'none')
    $('#heartTitle p').css('opacity', 0).stop().animate({ opacity: 1 }, 500, function () {
      $(this).removeAttr('style');
    })

    $('#heartContentBack p').html($('#heartContent p').html()).css('transition', 'none')
    $('#heartContentBack p').css('opacity', 1).stop().animate({ opacity: 0 }, 500);
    $('#heartContent p').html(ms2010Contents[i].content).css('transition', 'none')
    $('#heartContent p').css('opacity', 0).stop().animate({ opacity: 1 }, 500, function () {
      $(this).removeAttr('style');
    })

    if ($(window).width() < 992) {
      $('#heartContent').css('height', $('#heartContent p').height() + 15 + 'px');
    };

  });

  var currentWindowWidth = $(window).width();
  function slickResize() {
    $('#heartContent').removeAttr('style');
    $('#iShineContent').removeAttr('style');
    if ($(window).width() >= 992) {
      $('#heartContent').css('minHeight', $('#heartContent').height());
      $('#iShineContent').css('minHeight', $('#iShineContent').height());
    } else {
      $('#heartContent')
        .css('overflow', 'hidden')
        .css('transition', '0.6s')
        .css('height', $('#heartContent p').height() + 15 + 'px');

      $('#iShineContent')
        .css('overflow', 'hidden')
        .css('transition', '0.6s')
        .css('height', $('#iShineContent p').height() + 15 + 'px');
    };
  };
  slickResize();


  var checkOnload = function () {
    var images = document.querySelectorAll('img');
    var state = true;
    for (var i = 0; i < images.length; i++) {
      if (!images[i].complete) {
        state = false;
        break
      }
    }
    return state;
  };

  $('img').load(function () {
    // clearTimeout(initTimeout);
    if (!checkOnload()) { return }
    blueLineInit();
  });

  // var initTimeout = setTimeout(blueLineInit, 2000);

  function blueLineInit() {
    pathStatus.ready = true;
    whiteLineRWD();
    blueLineRWD();
    var stroke = document.querySelector('#blueLineSVG path');
    pathStatus.length = stroke.getTotalLength();
    $('#blueLineSVG path').css('stroke-dasharray', pathStatus.length);
    $('#blueLineSVG path').css('stroke-dashoffset', pathStatus.length);
    setTimeout(function () {
      $(stroke).css('transition', 'stroke-dashoffset 0.6s linear, stroke 0.6s')
      $(stroke).css('stroke', '#005cb9')
    }, 700);
  }

  //  SVG RWD
  function blueLineRWD() {
    if (!pathStatus.ready) { return };
    if ($(window).width() <= 1200) {
      var fix = 150;
    } else {
      var fix = 0;
    }
    var blueLine = $('#blueLineSVG')
    var height = $('#ms2016_5').offset().top + $('#ms2016_5').height() + 200;
    var width = $(window).width() - 20;
    var middle = $('#ms1986 img').width() / 2 + $('#ms1986 img').offset().left
    blueLine.attr('width', width + 'px');
    blueLine.attr('height', height + 'px');
    blueLine.attr('viewbox', '0 0 ' + width + ' ' + height)

    var blueLinePath =
      'M' + getL('#ms1968', 3) + ' ' + getT('#ms1968', 115) + ' ' +
      'L' + getL('#ms1968', 3) + ' ' + getT('#ms1969', -20) + ' ' +
      'L' + getL('#ms1969', 3) + ' ' + getT('#ms1969', -20) + ' ' +
      'L' + getL('#ms1969', 3) + ' ' + getT('#ms1973', -100) + ' ' +
      'L' + getL('#ms1973', 3) + ' ' + getT('#ms1973', -100) + ' ' +
      'L' + getL('#ms1973', 3) + ' ' + getB('#ms1973', 60) + ' ' +
      'L' + middle + ' ' + getB('#ms1973', 60) + ' ' +
      'L' + middle + ' ' + getT('#ms1987', 40) +
      'L' + getL('#ms1987', 3) + ' ' + getT('#ms1987', 40) +
      'L' + getL('#ms1987', 3) + ' ' + getT('#ms1989', 120) +
      'L' + getL('#ms1989', 3) + ' ' + getT('#ms1989', 120) +
      'L' + getL('#ms1989', 3) + ' ' + getT('#ms1991', 150) +
      'L' + getL('#ms1991', 3) + ' ' + getT('#ms1991', 150) +
      'L' + getL('#ms1991', 3) + ' ' + getT('#ms1993', 40) +
      'L' + getL('#ms1994', 3) + ' ' + getT('#ms1993', 40) +
      'L' + getL('#ms1994', 3) + ' ' + getT('#ms1995', -130) +
      'L' + getL('#ms1995', 3) + ' ' + getT('#ms1995', -130) +
      'L' + getL('#ms1995', 3) + ' ' + getT('#ms1995', 300) +
      'L' + getL('#ms1995_2', 100) + ' ' + getT('#ms1995', 300) +
      'L' + getL('#ms1995_2', 100) + ' ' + getT('#ms1996', -70) +
      'L' + middle + ' ' + getT('#ms1996', -70) +
      'L' + middle + ' ' + getT('#ms1998', -20) +
      'L' + getL('#ms1998', 3) + ' ' + getT('#ms1998', -20) +
      'L' + getL('#ms1998', 3) + ' ' + getT('#ms1999', 70) +
      'L' + getL('#ms1999', 3) + ' ' + getT('#ms1999', 70) +
      'L' + getL('#ms1999', 3) + ' ' + getT('#ms2002', 40) +
      'L' + getL('#ms2002', 3) + ' ' + getT('#ms2002', 40) +
      'L' + getL('#ms2002', 3) + ' ' + getT('#ms2003 img', 10) +
      'L' + getL('#ms2003', 3) + ' ' + getT('#ms2003 img', 10) +
      'L' + getL('#ms2003', 3) + ' ' + getT('#ms2003_3', 30) +
      'L' + getL('#ms2003_3', 3) + ' ' + getT('#ms2003_3', 30) +
      'L' + getL('#ms2003_3', 3) + ' ' + getB('#ms2003_5 p', 40) +
      'L' + getL('#ms2004', 3) + ' ' + getB('#ms2003_5 p', 40) +
      'L' + getL('#ms2004', 3) + ' ' + getT('#ms2006', 40) +
      'L' + getL('#ms2006', 3) + ' ' + getT('#ms2006', 40) +
      'L' + getL('#ms2006', 3) + ' ' + getT('#ms2006_2', 65) +
      'L' + getL('#ms2006_2', 3) + ' ' + getT('#ms2006_2', 65) +
      'L' + getL('#ms2006_2', 3) + ' ' + getT('#ms2007_2', 30) +
      'L' + getL('#ms2007_2', 3) + ' ' + getT('#ms2007_2', 30) +
      'L' + getL('#ms2007_2', 3) + ' ' + getT('#ms2007_3', 65) +
      'L' + middle + ' ' + getT('#ms2007_3', 65) +
      'L' + middle + ' ' + getT('#ms2010', 40) +
      'L' + getL('#ms2010', 3) + ' ' + getT('#ms2010', 40) +
      'L' + getL('#ms2010', 3) + ' ' + getT('#ms2010_2', -10) +
      'L' + getL('#ms2010_2', 3) + ' ' + getT('#ms2010_2', -10) +
      'L' + getL('#ms2010_2', 3) + ' ' + getT('#ms2010_4', 85) +
      'L' + getL('#ms2010_4', 3) + ' ' + getT('#ms2010_4', 85) +
      'L' + getL('#ms2010_4', 3) + ' ' + getB('#ms2010_4', 65) +
      'L' + (middle + fix) + ' ' + getB('#ms2010_4', 65) +
      'L' + (middle + fix) + ' ' + getT('#ms2011', 40) +
      'L' + getL('#ms2011', 3) + ' ' + getT('#ms2011', 40) +
      'L' + getL('#ms2011', 3) + ' ' + getM('#ms2011 img', 40) +
      'L' + (width / 12 * 10 + 22) + ' ' + getM('#ms2011 img', 40) +
      'L' + (width / 12 * 10 + 22) + ' ' + getB('#ms2011', 20) +
      'L' + getL('#ms2012', 3) + ' ' + getB('#ms2011', 20) +
      'L' + getL('#ms2012', 3) + ' ' + getT('#ms2012_2 p', 5) +
      'L' + getL('#ms2012_2', 3) + ' ' + getT('#ms2012_2 p', 5) +
      'L' + getL('#ms2012_2', 3) + ' ' + getT('#ms2013', 40) +
      'L' + getL('#ms2013', 3) + ' ' + getT('#ms2013', 40) +
      'L' + getL('#ms2013', 3) + ' ' + getT('#ms2014 p', 5) +
      'L' + getL('#ms2014', 3) + ' ' + getT('#ms2014 p', 5) +
      'L' + getL('#ms2014', 3) + ' ' + getT('#ms2015', 40) +
      'L' + getL('#ms2015', 3) + ' ' + getT('#ms2015', 40) +
      'L' + getL('#ms2015', 3) + ' ' + getM('#ms2015 img') +
      'L' + getL('#ms2016', 3) + ' ' + getM('#ms2015 img') +
      'L' + getL('#ms2016', 3) + ' ' + getT('#ms2016_2', 30) +
      'L' + getL('#ms2016_2', 3) + ' ' + getT('#ms2016_2', 30) +
      'L' + getL('#ms2016_2', 3) + ' ' + getT('#ms2016_3', 30) +
      'L' + getL('#ms2016_4', 3) + ' ' + getT('#ms2016_3', 30) +
      'L' + getL('#ms2016_4', 3) + ' ' + getT('#ms2016_5', 30) +
      'L' + getL('#ms2016_5', 3) + ' ' + getT('#ms2016_5', 30) +
      'L' + getL('#ms2016_5', 3) + ' ' + height +
      '';

    blueLine.find('path#blue').attr('d', blueLinePath);

    function getL(elem, num) {
      num = num || 0;
      return Math.round($(elem).offset().left) + num
    }
    function getR(elem, num) {
      num = num || 0;
      return Math.round($(elem).offset().left + $(elem).width()) + num
    }
    function getT(elem, num) {
      num = num || 0;
      return Math.round($(elem).offset().top - blueLine.offset().top) + num
    }
    function getB(elem, num) {
      num = num || 0;
      return Math.round($(elem).offset().top - blueLine.offset().top) + num + Math.round($(elem).height())
    }
    function getM(elem, num) {
      num = num || 0;
      return Math.round($(elem).offset().top - blueLine.offset().top) + num + Math.round($(elem).height() / 2)
    }
  }

  //  White Line RWD
  function whiteLineRWD() {
    var parent = $('.milestone--full .line').each(
      function () {
        var height = ($(this).parent().height() - $(this).parent().find('.content').height()) / 2
        if (height < 0) {
          height = 0;
        }
        $(this).css('height', height - 30);
      }
    )

  }

  var resizeDelay;
  function resizeDelayHandeler() {
    clearTimeout(resizeDelay);
    resizeDelay = setTimeout(function () {
      blueLineRWD();
      whiteLineRWD();
    }, 50)
  }

  $(window).resize(function () {
    if (currentWindowWidth !== $(window).width()) {
      currentWindowWidth = $(window).width();
      $('#ms2003Slick').slick('slickGoTo', 0);
      $('#ms2010Slick').slick('slickGoTo', 0);
      slickResize();
    }

    resizeDelayHandeler();
  });

  // Detect milestones should be in or out
  // $('.milestone').addClass('ms--out');
  function scrollSlideHandler() {
    var scrollT = $(window).scrollTop();
    var scrollB = $(window).scrollTop() + $(window).height() * 0.9;
    $('.milestone').each(function () {
      var posT = $(this).offset().top;
      var posB = $(this).offset().top + $(this).height();
      if (
        posB > (scrollT - 200) &&
        posT < (scrollB + 20)
      ) {
        $(this).addClass('ms--in')
      }
      else {
        $(this).removeClass('ms--in')
      }
    })
  }

  if (!document.querySelector('#ms1986 img').complete) {
    $('#ms1986 img').load(function () {
      scrollSlideHandler();
    });
  } else {
    scrollSlideHandler();
  }

  var scrollDelay;
  function scrollHandlerDelay() {
    clearTimeout(scrollDelay);
    scrollDelay = setTimeout(function () {
      scrollSlideHandler();
      blueLineRWD();
    }, 50);
  };

  $(window).scroll(scrollHandlerDelay);

  function navSticky() {
    var navPos = $('#year-nav');
    var scrollPos = $(window).scrollTop() + navPos.height() + 186;
    var stickyStartPos = $('#navStickyStart').offset().top;
    var stickyEndPos = $('#navStickyEnd').offset().top;
    if (scrollPos > stickyEndPos) {
      navPos
        .css('position', 'absolute')
        .css('top', stickyEndPos - navPos.height() - 186 + 'px')
    } else {
      navPos.removeAttr('style')
    }
  };

  $(window).scroll(navSticky);

});

$(function () {
  if ($(window).width() < 992) {
    var fix = -120
  } else {
    var fix = -99
  }

  $('#year-nav [href^="#"]').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top + fix
      }, {
          duration: 350,
          // easing: "easeOutCubic"
        });
    }
  });
});

// Path growing with scroll
$(function () {
  var stroke = document.querySelector('#blueLineSVG path');
  function getYpoint(length) {
    return stroke.getPointAtLength(length).y
  }

  pathStatus.getCenter = function () {
    if (!pathStatus.ready) { return };
    pathStatus.target = $(window).scrollTop() + ($(window).height() - 100) / 2
    pathStatus.length = stroke.getTotalLength();
    if (pathStatus.target >= ($('svg').height() + 200 - (($(window).height() - 100) / 2))) {
      pathStatus.pos = pathStatus.length;
      // draw
      $('#blueLineSVG path').css('stroke-dasharray', pathStatus.length);
      $('#blueLineSVG path').css('stroke-dashoffset', pathStatus.length - pathStatus.pos);
    } else {
      // approching
      var accurate = pathStatus.length;
      while (accurate > 0.5) {
        accurate *= 0.5;
        if (getYpoint(pathStatus.pos) > pathStatus.target) {
          pathStatus.pos -= accurate;
        } else {
          pathStatus.pos += accurate;
        };
      };
      // draw
      $('#blueLineSVG path').css('stroke-dasharray', pathStatus.length);
      $('#blueLineSVG path').css('stroke-dashoffset', pathStatus.length - pathStatus.pos);
    }

  }

  var currentWindowWidth = $(window).width();
  $(window).resize(function () {
    if (currentWindowWidth == $(window).width()) { return }
    else { currentWindowWidth = $(window).width(); };
    pathStatus.getCenter();
  });

  $(window).on('scroll', function () {
    // blue line run
    pathStatus.getCenter();
    // white line run
    $('.line').each(function () {
      var scrollPos = $(window).scrollTop() + ($(window).height()) / 2;
      var scrollPos = pathStatus.target;
      var linePos = $(this).offset().top - 100;
      var height = Math.round(scrollPos - linePos);
      if (
        (scrollPos + $(window).height()) < linePos
        || (scrollPos - $(window).height()) > linePos
      ) {
        return;
      };

      if ($(this).hasClass('.line1')) {
        height += 100;
      };

      if (
        scrollPos > linePos
        && height < $(this).height()
      ) {
        $(this).find('.white').css('height', height + 'px');
      } else if (height > $(this).height()) {
        $(this).find('.white').css('height', 'calc(100% + 100px)');
      } else {
        $(this).find('.white').css('height', '0px');
      };

    })

  });
});


// Fix IE fixed shaking
// $(function () {
//   if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
//     $('body').on("mousewheel", function () {
//       // remove default behavior
//       event.preventDefault();

//       //scroll without smoothing
//       var wheelDelta = event.wheelDelta;
//       var currentScrollPosition = window.pageYOffset;
//       window.scrollTo(0, currentScrollPosition - wheelDelta);
//     });
//   }
// })


// video control
$(function () {
  $('video').click(function () {
    if ($(window).width() < 992) {
      return;
    }
    if (this.paused) {
      this.play();
      $(this).parent().removeClass('paused');
      $('video').removeAttr('controls')
    } else {
      this.pause();
      $(this).parent().addClass('paused');
      $('video').attr('controls', 'true')
    }

  })
  

  function videoControlsDetect() {
    if ($(window).width() >= 992) {
      $('video').removeAttr('controls')
    } else {
      $('video').attr('controls', 'true')
    }
  }
  videoControlsDetect();
  $(window).resize(videoControlsDetect);
});