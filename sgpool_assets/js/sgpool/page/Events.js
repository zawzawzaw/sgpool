goog.provide('sgpool.page.Events');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.HoverItem');
goog.require('manic.ui.AnimatedSVG');

goog.require('sgpool.page.Default')


/**
 * The Events constructor
 * @inheritDoc
 * @constructor
 * @extends {sgpool.page.Default}
 */
sgpool.page.Events = function(options, element) {

  sgpool.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sgpool.page.Events.DEFAULT, options);  

  console.log('sgpool.page.Events: init');
};
goog.inherits(sgpool.page.Events, sgpool.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Events.DEFAULT = {
};

/**
 * Events Event Constant
 * @const
 * @type {string}
 */
sgpool.page.Events.EVENT_01 = '';


//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Events.prototype.init = function() {
  sgpool.page.Events.superClass_.init.call(this);   

  this.map_style = [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-65"
              },
              {
                  "lightness": "45"
              },
              {
                  "gamma": "1.78"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "-33"
              },
              {
                  "lightness": "22"
              },
              {
                  "gamma": "2.08"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "geometry",
          "stylers": [
              {
                  "gamma": "2.08"
              },
              {
                  "hue": "#ffa200"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.rail",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.rail",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-55"
              },
              {
                  "lightness": "-2"
              },
              {
                  "gamma": "1.88"
              },
              {
                  "hue": "#ffab00"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#bbd9e5"
              },
              {
                  "visibility": "simplified"
              }
          ]
      }
  ]; 

  this.new_event_map_position;
  this.current_event_map_position;
  this.current_event_map_marker;
  this.event_map;
  this.event_map_icon;

  this.todayDate = new Date();
  this.currentMonth = this.todayDate.getMonth();
  this.latestMonth = 4;


  while ($('*[data-month="'+this.currentMonth+'"]').length < 1) {  
    if(this.currentMonth > this.latestMonth) {
      this.currentMonth = this.latestMonth;
      break;
    } else {
      this.currentMonth++;
    }
  }

  this.fix_calendar_height();
  this.create_events_map();
  this.create_events_map_mobile();
  this.create_events_sliders();
  // this.create_sticky_map();
  this.create_sticky_sidebar();

  this.upcoming_events();

  $("#page-events-seperator-line").height($("#page-events-content-container").height());

};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

sgpool.page.Events.prototype.change_long_image_caption_position = function() {
  var caption_2_pos = $("#page-events-long-image").height()/3 + "px";
  var caption_3_pos = ($("#page-events-long-image").height()/3 * 2) + 50 + "px";

  // console.log(caption_2_pos);
  // console.log(caption_3_pos);  

  $("#page-events-long-image").find(".image-caption-1").css({"position": "absolute", "top": "20px", "left": "20px"})
  $("#page-events-long-image").find(".image-caption-2").css({"position": "absolute", "top": caption_2_pos, "right": "20px"})
  $("#page-events-long-image").find(".image-caption-3").css({"position": "absolute", "top": caption_3_pos, "left": "20px"})
  $("#page-events-long-image").find(".image-caption-4").css({"position": "absolute", "bottom": "20px", "left": "20px"})
}

sgpool.page.Events.prototype.create_events_sliders = function() {

  var slidesToShow = 3;

  if($(window).width() <= 1366) {
    slidesToShow = 3;
  }

  if($(window).width() <= 1280) {
    slidesToShow = 2;
  }

  if($(window).height() <= 900) {
    slidesToShow = 2;
  }

  if($(window).height() <= 800) {
    slidesToShow = 2;
  }

  // console.log(slidesToShow)
  
  $("#page-events-calender-slider").slick({
    'speed': 650,
    'dots': false,
    'arrows': true,
    'infinite': true,
    'slidesToShow': slidesToShow,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'vertical': true,
    'verticalSwiping': true,
    'autoplay': false,
    'autoplaySpeed': 4000,
    'asNavFor': '#page-events-slider',
    'centerMode': true,
    'centerPadding': '0px',
    'responsive': [
      {
        'breakpoint': 1025,
        'settings': {
          'slidesToShow': 2,
          'slidesToScroll': 1
        }
      }
    ]
  });

  $("#page-events-slider").slick({
    'speed': 850,
    'dots': false,
    'arrows': false,
    'infinite': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': true,
    'autoplay': false,
    'autoplaySpeed': 4000,
    'focusOnSelect': true,
    'asNavFor': '#page-events-calender-slider',
    'centerMode': true,
    'centerPadding': '0px',
    'fade': true,
    'draggable': false,
    'adaptiveHeight': true
  });  

  $('.page-events-calender-slider-item').click(function() {      

    if(!$(this).hasClass("slick-current")) {
      TweenLite.to(window, 0.1, { scrollTo : 0 });
      $("#page-events-slider").slick('slickGoTo', $(this).data("slick-index")); 
    }
  
  });

  $("#page-events-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

    var active_slide_index = $(slick.$slides[nextSlide]).attr("data-slick-index");

    // if(active_slide_index==1 || active_slide_index==6) {
      // $("#page-events-slider-map").hide();
      // $("#page-events-long-image").show();
      // $("#page-events-long-image").find("#event-"+active_slide_index).show();      

      var long_image_container = $("#page-events-long-image").find(".manic-image-container").data("manic.ui.ImageContainer");

      long_image_container.set_image_src($(slick.$slides[nextSlide]).attr('data-image-desktop'));      

      if($(slick.$slides[nextSlide]).attr('data-image-caption')==1) {        
        $("#page-events-long-image").find(".image-caption").show();
      } else {
        $("#page-events-long-image").find(".image-caption").hide();
      }
      
      this.change_long_image_caption_position();

      // if(active_slide_index==1)
      //   long_image_container.set_image_src("images_cms/events/events-slider-02.jpg");
      // else
      //   long_image_container.set_image_src("images_cms/events/events-slider-07.jpg");

      this.update_manic_image_containers();
      
      if(this.mapScence) {
        this.controller.removeScene(this.mapScence);
        this.mapScence.destroy();
        this.mapScence = null;
      }

      // if(this.longImageScence==null) 
        // this.create_sticky_long_image();

    // } else {
      // $("#page-events-slider-map").show();
      // $("#page-events-long-image").show();

      // if(this.longImageScence) {
      //   this.controller.removeScene(this.longImageScence);
      //   this.longImageScence.destroy();
      //   this.longImageScence = null;  
      // }      
      
      // if(this.mapScence==null) 
        // this.create_sticky_map();
    // }    

    $("#page-events-completed").hide();

    $("#page-events-completed").find("h2").text($(slick.$slides[nextSlide]).attr('data-expired-title'));
    $("#page-events-completed").find("a").attr("href", $(slick.$slides[nextSlide]).attr('data-expired-link'));

    if($(slick.$slides[nextSlide]).attr('data-expired')==1) {
      $("#page-events-completed").fadeIn();      
    }

    $('#page-events-slider-map').fadeOut();

    this.new_event_map_position = new google.maps.LatLng($(slick.$slides[nextSlide]).attr('data-geo-lat'), $(slick.$slides[nextSlide]).attr("data-geo-lng"));
    
    // remove current marker
    this.current_event_map_marker.setMap();

    // move map position
    this.event_map.panTo(this.new_event_map_position);

    // add new marker
    this.current_event_map_marker = new google.maps.Marker({
      map: this.event_map,
      position: this.new_event_map_position,
      icon: this.event_map_icon
    });

    $('#page-events-slider-map').fadeIn('slow');
    
  }.bind(this));


  // scroll to current month events  

  console.log(this.currentMonth)

  var eventSlideIndex = $('*[data-month="'+this.currentMonth+'"]').index();

  if(eventSlideIndex == -1) {
    eventSlideIndex = 0;
  }

  if(window.location.hash) {
    eventSlideIndex = window.location.hash.substring(1);
  }

  $("#page-events-slider").slick('slickGoTo', eventSlideIndex);

};

sgpool.page.Events.prototype.upcoming_events = function() {

  var upcoming_first_event = $('*[data-upcoming-month="'+this.currentMonth+'"]').next();
  var upcoming_second_event = $('*[data-upcoming-month="'+this.currentMonth+'"]').next().next();

  var first_upcoming_event_index = upcoming_first_event.index();
  var second_upcoming_event_index = upcoming_second_event.index();

  if(upcoming_first_event.length > 0 && upcoming_second_event.length > 0) {
    $(".first-upcoming-event").find(".tag-container").html(upcoming_first_event.find(".tag-container").html());
    $(".second-upcoming-event").find(".tag-container").html(upcoming_first_event.find(".tag-container").html());

    var first_upcoming_event_image_container = $(".first-upcoming-event").find(".manic-image-container").data("manic.ui.ImageContainer");
    first_upcoming_event_image_container.set_image_src(upcoming_first_event.find(".manic-image-container img").attr('data-image-desktop'));

    var second_upcoming_event_image_container = $(".second-upcoming-event").find(".manic-image-container").data("manic.ui.ImageContainer");
    second_upcoming_event_image_container.set_image_src(upcoming_second_event.find(".manic-image-container img").attr('data-image-desktop'));

    // $(".first-upcoming-event").find(".manic-image-container img").attr('src', upcoming_first_event.find(".manic-image-container img").attr('data-image-desktop'));
    // $(".second-upcoming-event").find(".manic-image-container img").attr('src', upcoming_second_event.find(".manic-image-container img").attr('data-image-desktop'));
    $(".first-upcoming-event").find(".text-container").html(upcoming_first_event.find(".text-container").html());
    $(".second-upcoming-event").find(".text-container").html(upcoming_second_event.find(".text-container").html());  
  }


  $(".first-upcoming-event").on("click", function(e){
    window.scrollTo(0, 0);
    $("#page-events-slider").slick('slickGoTo', first_upcoming_event_index);
  });
  $(".second-upcoming-event").on("click", function(e){
    window.scrollTo(0, 0);
    $("#page-events-slider").slick('slickGoTo', second_upcoming_event_index);
  });

};

sgpool.page.Events.prototype.create_events_map = function() {

  if (manic.IS_MOBILE == false) {
    this.current_event_map_position = new google.maps.LatLng($(".page-events-slider-item").attr('data-geo-lat'), $(".page-events-slider-item").attr('data-geo-lng'));

    this.event_map_icon = {
        url: "http://clients.manic.com.sg/singapore_pool/sgpool_assets/images/icons/map-icon.svg", // url
        scaledSize: new google.maps.Size(32, 54), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    this.event_map = new google.maps.Map(document.getElementById('page-events-slider-map'), {
      center: this.current_event_map_position,
      zoom: 15,
      styles: this.map_style,
      disableDefaultUI: true    
    });

    this.current_event_map_marker = new google.maps.Marker({
      map: this.event_map,
      position: this.current_event_map_position,
      icon: this.event_map_icon
    });  
  }

};

sgpool.page.Events.prototype.create_events_map_mobile = function() {

  if (manic.IS_MOBILE == true) {
    this.current_event_map_position = new google.maps.LatLng($('#page-events-details-event-box').attr('data-geo-lat'), $('#page-events-details-event-box').attr("data-geo-lng"));
      
    this.event_map_icon = {
        url: "http://clients.manic.com.sg/singapore_pool/sgpool_assets/images/icons/map-icon.svg", // url
        scaledSize: new google.maps.Size(32, 54), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    this.event_map = new google.maps.Map(document.getElementById('page-events-slider-map'), {
      center: this.current_event_map_position,
      zoom: 15,
      styles: this.map_style,
      disableDefaultUI: true    
    });

    // add new marker
    this.current_event_map_marker = new google.maps.Marker({
      map: this.event_map,
      position: this.current_event_map_position,
      icon: this.event_map_icon
    });
  }

};

// sgpool.page.Events.prototype.create_sticky_map = function() {

//   if (manic.IS_MOBILE == false) {
//     this.mapScence = new ScrollMagic.Scene({
//       triggerElement: "#start-events-map-sticky-trigger",
//       triggerHook: 'onLeave', 
//       duration: $("#end-events-map-sticky-trigger").offset().top - $(window).height(),
//       offset: this.offset
//     })
//       .setPin("#page-events-slider-map")
//       // .addIndicators()      
//       .addTo(this.controller); 
//   }

// };

// sgpool.page.Events.prototype.create_sticky_long_image = function() {

//   if (manic.IS_MOBILE == false) {
//     this.longImageScence = new ScrollMagic.Scene({
//       triggerElement: "#start-events-map-sticky-trigger",
//       triggerHook: 'onLeave', 
//       duration: $("#end-events-map-sticky-trigger").offset().top - $(window).height(),
//       offset: this.offset
//     })
//       .setPin("#page-events-long-image")
//       // .addIndicators()      
//       .addTo(this.controller); 
//   }

// };

sgpool.page.Events.prototype.create_sticky_sidebar = function() {


  if (manic.IS_MOBILE == false) {
    new ScrollMagic.Scene({
      triggerElement: "#start-events-sidebar-sticky-trigger",
      triggerHook: 'onLeave', 
      duration: $("#end-events-sidebar-sticky-trigger").offset().top - ($(window).height() - 100),
      offset: this.offset
    })
      .setPin("#page-events-calender-slider")
      // .addIndicators()      
      .addTo(this.controller); 
  }

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sgpool.page.Events.prototype.fix_calendar_height = function() {
  var heighest_height = 0;
  $(".page-events-calender-slider-item").each(function(){    

    if(heighest_height < $(this).height()) {
      heighest_height = $(this).height();
    }
    // console.log($(this).height());
    console.log(heighest_height);
  });

  if (manic.IS_ACTUAL_MOBILE == true) {    
    $(".page-events-calender-slider-item").css("min-height", heighest_height);    
  } else {
    if($(window).height() < 700) {      
      $(".page-events-calender-slider-item").css("min-height", heighest_height);
    } else if($(window).height() < 800) {  
      $(".page-events-calender-slider-item").css("min-height", heighest_height - 35);
    } else {
      $(".page-events-calender-slider-item").css("min-height", heighest_height);  
    }
  }
  
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
sgpool.page.Events.prototype.on_event_handler_02 = function(event) {
};



sgpool.page.Events.prototype.sample_method_calls = function() {

  // sample override
  sgpool.page.Events.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(sgpool.page.Events.EVENT_01));
};



//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Events.prototype.update_page_layout = function() {

  this.change_long_image_caption_position();

  sgpool.page.Events.superClass_.update_page_layout.call(this);

  /*
  if (manic.IS_MOBILE == true){

    this.banner_image.css({
      'height': this.window_height + 'px'
    });

  } else {

    this.banner_image.css({
      'height': ''
    });

  }
  */

}


//    _   _    _    ____  _   _ _____  _    ____ ____
//   | | | |  / \  / ___|| | | |_   _|/ \  / ___/ ___|
//   | |_| | / _ \ \___ \| |_| | | | / _ \| |  _\___ \
//   |  _  |/ ___ \ ___) |  _  | | |/ ___ \ |_| |___) |
//   |_| |_/_/   \_\____/|_| |_| |_/_/   \_\____|____/
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Events.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Events.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Events.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Events.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('sgpool.page.Events', sgpool.page.Events);