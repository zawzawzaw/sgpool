goog.provide('sgpool.page.Milestones_Org');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.HoverItem');
goog.require('manic.ui.AnimatedSVG');

goog.require('sgpool.page.Default')


/**
 * The Milestones constructor
 * @inheritDoc
 * @constructor
 * @extends {sgpool.page.Default}
 */
sgpool.page.Milestones_Org = function(options, element) {

  sgpool.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sgpool.page.Milestones_Org.DEFAULT, options);


  console.log('sgpool.page.Milestones_Org: init');
};
goog.inherits(sgpool.page.Milestones_Org, sgpool.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Milestones_Org.DEFAULT = {
};

/**
 * Milestones Event Constant
 * @const
 * @type {string}
 */
sgpool.page.Milestones_Org.EVENT_01 = '';


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
sgpool.page.Milestones_Org.prototype.init = function() {
  sgpool.page.Milestones_Org.superClass_.init.call(this);

  this.offset = -145; // header height + paddding on top of page

  this.create_page_indicators();
  this.create_page_indicators_mobile();
  this.create_page_transitions();

  $("#page-milestones-seperator-line").height($("#page-milestones-container").height());
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

sgpool.page.Milestones_Org.prototype.create_page_indicators = function() {

  var total_content_group = $(".page-content-group").length;
  var duration = 0;        

  for(var i=1; i<=$(".page-content-group").length; i++) {

    var a = i + 1;

    if(a <= total_content_group) {
      // duration = end el position top minus start el position top
      duration = ( $("#trigger-content-group-"+a).offset().top - 185 ) - ($("#trigger-content-group-"+i).offset().top - 185);
    }
    
    new ScrollMagic.Scene({
      triggerElement: "#trigger-content-group-"+i,
      triggerHook: 'onLeave', 
      duration: duration,
      offset: this.offset // header height + page padding top
    }).setClassToggle("#content-group-indicator-"+i, "active")
      // .addIndicators()      
      .addTo(this.controller);        

  }

  // var top_pos = 0;

  // if($(window).height() <= 800) {
  //   top_pos = -100;
  // }
  // else if($('#page-milestones-indicators').height() > $(window).height()) {
  //   top_pos = $('#page-milestones-indicators').height() - $(window).height();   
  // }

  if(manic.IS_MOBILE==false && manic.IS_TABLET_PORTRAIT==false) {
    new ScrollMagic.Scene({
      triggerElement: "#start-sticky-trigger",
      triggerHook: 'onLeave', 
      duration: $("#end-sticky-trigger").offset().top - 600,
      offset: this.offset
    })
      .setPin("#page-milestones-indicators")
      // .setTween(TweenMax.fromTo($("#page-milestones-indicators-ul"), 1, { top: 0 }, { top: top_pos, ease: Linear.easeNone }))
      // .addIndicators()      
      .addTo(this.controller); 
  }

};

sgpool.page.Milestones_Org.prototype.create_page_indicators_mobile = function() {

  $(".content-gorup-indicator").click(function(e){
    console.log('here')

    // window.location.hash = '';
    $(e.currentTarget).find("ul").toggleClass("open-sub-menu");
  });

};

sgpool.page.Milestones_Org.prototype.create_page_transitions = function() {

  $(".floating-item").each(function(i, v){    

    var index = i + 1;
    var v = '#item-'+index;

    var h2 = $(v).find("h2");
    var p = $(v).find("p");
    var img = $(v).find(".manic-image-container");

    // console.log(h2.html())
    // console.log(p.html())

    var tween = new TimelineMax();
    // var section2Tl = new TimelineMax();
    // section2Tl.add(
    //   TweenMax.staggerFromTo($section2Text, 0.3, { y: 15, opacity: 0 }, { y: 0, opacity: 1, ease: Sine.easeOutQuad }, 0.2)
    // );
    // section2Tl.add(
    //   TweenMax.staggerFromTo([$section2Step1, $section2Step2], 0.7, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: Sine.easeOutQuad }, 0.4), 0.4
    // );
    tween.add([
      TweenMax.fromTo(h2, 0.3, { opacity: 0, y: 20*2 }, { y: 0, opacity: 1, ease: Sine.easeInOut, delay: 0 }),
      TweenMax.fromTo(p, 0.7, { opacity: 0, y: 30*2 }, { y: 0, opacity: 1, ease: Sine.easeInOut, delay: 0.2 }),
      TweenMax.fromTo(img, 1.1, { opacity: 0, y: 40*2 }, { y: 0, opacity: 1, ease: Sine.easeInOut, delay: 0.3 })
    ]);

    var custom_offset = this.offset;

    if(index==4) {
      custom_offset = this.offset - 100;
      // console.log(custom_offset)
    }

    if(index==15) {
      custom_offset = this.offset - 30;
    }
    if(index==16) {
      custom_offset = this.offset - 80;
    }
    
    new ScrollMagic.Scene({
      triggerElement: "#item-"+index,
      offset: custom_offset,
    }).setTween(tween)    
      // .addIndicators({ name: "#item-"+index+": offset"+custom_offset })
      .addTo(this.controller);       

  }.bind(this));

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sgpool.page.Milestones_Org.prototype.public_method_01 = function() {};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
sgpool.page.Milestones_Org.prototype.on_event_handler_02 = function(event) {
};



sgpool.page.Milestones_Org.prototype.sample_method_calls = function() {

  // sample override
  sgpool.page.Milestones_Org.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(sgpool.page.Milestones_Org.EVENT_01));
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
sgpool.page.Milestones_Org.prototype.update_page_layout = function() {

  sgpool.page.Milestones_Org.superClass_.update_page_layout.call(this);

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
sgpool.page.Milestones_Org.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Milestones_Org.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Milestones_Org.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Milestones_Org.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('sgpool.page.Milestones_Org', sgpool.page.Milestones_Org);