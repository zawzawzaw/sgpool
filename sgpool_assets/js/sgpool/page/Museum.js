goog.provide('sgpool.page.Museum');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.HoverItem');
goog.require('manic.ui.AnimatedSVG');
goog.require('manic.ui.DingMasonry');

goog.require('sgpool.page.Default');


/**
 * The Museum constructor
 * @inheritDoc
 * @constructor
 * @extends {sgpool.page.Default}
 */
sgpool.page.Museum = function(options, element) {

  sgpool.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sgpool.page.Museum.DEFAULT, options);


  console.log('sgpool.page.Museum: init');
};
goog.inherits(sgpool.page.Museum, sgpool.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Museum.DEFAULT = {
};

/**
 * Museum Event Constant
 * @const
 * @type {string}
 */
sgpool.page.Museum.EVENT_01 = '';


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
sgpool.page.Museum.prototype.init = function() {

  this.create_masonry();
  this.create_masonry_sweep();
  this.create_masonry_lottery();
  this.create_masonry_bet_slips_lottery();
  this.create_masonry_retail_outlets();
  this.create_masonry_posters();

  sgpool.page.Museum.superClass_.init.call(this);

  this.create_masonry_transitions();
  
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sgpool.page.Museum.prototype.create_masonry = function() {

  $(".item-caption-container.hover-version").click(function(e){
    var link = $(this).data("link");
    window.location.href = link;
  });

  // var grid_masonry = new manic.ui.DingMasonry({
  //   'column_divider': 800
  // }, $('.masonry-container'));
  if($(window).width() < 769 && $(window).width() > 700) {
    this.column_divider_01 = 400;
    this.column_divider_02 = 250;
    this.column_divider_03 = 250;
    this.column_divider_04 = 200;
    this.column_divider_05 = 100;
    this.column_divider_06 = 200;
    this.column_divider_07 = 250;  
  } else if($(window).width() < 1025 && $(window).width() > 700) {
    this.column_divider_01 = 400;
    this.column_divider_02 = 300;
    this.column_divider_03 = 300;
    this.column_divider_04 = 250;
    this.column_divider_05 = 100;
    this.column_divider_06 = 250;
    this.column_divider_07 = 300;  
  } else if($(window).width() < 1200) {
    this.column_divider_01 = 800;
    this.column_divider_02 = 400;
    this.column_divider_03 = 400;
    this.column_divider_04 = 300;
    this.column_divider_05 = 500;
    this.column_divider_06 = 300;
    this.column_divider_07 = 400;
  } else if($(window).width() < 1300) {
    this.column_divider_01 = 800;
    this.column_divider_02 = 400;
    this.column_divider_03 = 400;
    this.column_divider_04 = 300;
    this.column_divider_05 = 200;
    this.column_divider_06 = 300;
    this.column_divider_07 = 400;
  } else if($(window).width() < 1600) {
    this.column_divider_01 = 800;
    this.column_divider_02 = 500;
    this.column_divider_03 = 500;
    this.column_divider_04 = 350;
    this.column_divider_05 = 200;
    this.column_divider_06 = 350;
    this.column_divider_07 = 500;
  } else {
    this.column_divider_01 = 800;
    this.column_divider_02 = 600;
    this.column_divider_03 = 550;
    this.column_divider_04 = 450;
    this.column_divider_05 = 200;
    this.column_divider_06 = 500;
    this.column_divider_07 = 600;
  }

  this.grid_masonry_01 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_01
  }, $('.masonry-container-01'));

  this.grid_masonry_02 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_02
  }, $('.masonry-container-02'));

  this.grid_masonry_03 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_03
  }, $('.masonry-container-03'));

  this.grid_masonry_04 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_04
  }, $('.masonry-container-04'));

  this.grid_masonry_05 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_05,
    'max_column_num':6
  }, $('.masonry-container-05'));

  this.grid_masonry_06 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_06
  }, $('.masonry-container-06'));

  this.grid_masonry_07 = new manic.ui.DingMasonry({
    'column_divider':this.column_divider_07
  }, $('.masonry-container-07'));

  $(window).resize(function(){

    if($(window).width() < 769 && $(window).width() > 700) {
      this.grid_masonry_01.column_divider = 400;
      this.grid_masonry_02.column_divider = 250;
      this.grid_masonry_03.column_divider = 250;
      this.grid_masonry_04.column_divider = 200;
      this.grid_masonry_05.column_divider = 100;
      this.grid_masonry_06.column_divider = 200;
      this.grid_masonry_07.column_divider = 250;  
    } else if($(window).width() < 1025 && $(window).width() > 700) {
      this.grid_masonry_01.column_divider = 400;
      this.grid_masonry_02.column_divider = 300;
      this.grid_masonry_03.column_divider = 300;
      this.grid_masonry_04.column_divider = 250;
      this.grid_masonry_05.column_divider = 100;
      this.grid_masonry_06.column_divider = 250;
      this.grid_masonry_07.column_divider = 300;  
    } else if($(window).width() < 1200) {

      this.grid_masonry_02.column_divider = 400;
      this.grid_masonry_03.column_divider = 400;
      this.grid_masonry_04.column_divider = 300;
      this.grid_masonry_05.column_divider = 500;
      this.grid_masonry_06.column_divider = 300;
      this.grid_masonry_07.column_divider = 400;

    } else if($(window).width() < 1300) {

      this.grid_masonry_02.column_divider = 400;
      this.grid_masonry_03.column_divider = 400;
      this.grid_masonry_04.column_divider = 300;
      this.grid_masonry_05.column_divider = 200;
      this.grid_masonry_06.column_divider = 300;
      this.grid_masonry_07.column_divider = 400;

    } else if($(window).width() < 1650) {

      this.grid_masonry_02.column_divider = 500;
      this.grid_masonry_03.column_divider = 500;
      this.grid_masonry_04.column_divider = 350;
      this.grid_masonry_05.column_divider = 200;
      this.grid_masonry_06.column_divider = 350;
      this.grid_masonry_07.column_divider = 500;

    } else {

      this.grid_masonry_02.column_divider = 600;
      this.grid_masonry_03.column_divider = 550;
      this.grid_masonry_04.column_divider = 450;
      this.grid_masonry_05.column_divider = 200;
      this.grid_masonry_06.column_divider = 500;
      this.grid_masonry_07.column_divider = 600;

    }

    console.log(this.grid_masonry_02.column_divider);
  }.bind(this));  

};

sgpool.page.Museum.prototype.create_masonry_sweep = function() {

  if($(window).width() < 769 && $(window).width() > 700) {
    this.sweep_column_divider_01 = 250;    
    this.sweep_column_divider_02 = 300;    
    this.sweep_column_divider_03 = 300;    
    this.sweep_column_divider_04 = 200;    
    this.sweep_column_divider_05 = 300;    
    this.sweep_column_divider_06 = 200;    
    this.sweep_column_divider_07 = 200;  
  } else if($(window).width() < 1025 && $(window).width() > 700) {
    this.sweep_column_divider_01 = 300;    
    this.sweep_column_divider_02 = 300;    
    this.sweep_column_divider_03 = 300;    
    this.sweep_column_divider_04 = 200;    
    this.sweep_column_divider_05 = 300;    
    this.sweep_column_divider_06 = 200;    
    this.sweep_column_divider_07 = 200;  
  } else if($(window).width() < 1300) {
    this.sweep_column_divider_01 = 400;    
    this.sweep_column_divider_02 = 300;    
    this.sweep_column_divider_03 = 400;    
    this.sweep_column_divider_04 = 200;    
    this.sweep_column_divider_05 = 300;    
    this.sweep_column_divider_06 = 200;    
    this.sweep_column_divider_07 = 200;    
  } else if($(window).width() < 1600) {
    this.sweep_column_divider_01 = 500;
    this.sweep_column_divider_02 = 400;
    this.sweep_column_divider_03 = 500;
    this.sweep_column_divider_04 = 300;
    this.sweep_column_divider_05 = 400;
    this.sweep_column_divider_06 = 200;
    this.sweep_column_divider_07 = 200;
  } else {
    this.sweep_column_divider_01 = 600;    
    this.sweep_column_divider_02 = 500;    
    this.sweep_column_divider_03 = 600;    
    this.sweep_column_divider_04 = 400;    
    this.sweep_column_divider_05 = 500;    
    this.sweep_column_divider_06 = 300;    
    this.sweep_column_divider_07 = 300;    
  }

  $(window).resize(function(){

    if($(window).width() < 769 && $(window).width() > 700) {
      this.sweep_masonry_01.column_divider = 250;      
      this.sweep_masonry_02.column_divider = 300;      
      this.sweep_masonry_03.column_divider = 400;      
      this.sweep_masonry_05.column_divider = 300;      
      this.sweep_masonry_04.column_divider = 200;      
      this.sweep_masonry_06.column_divider = 200;      
      this.sweep_masonry_07.column_divider = 200; 
    } else if($(window).width() < 1025 && $(window).width() > 700) {
      this.sweep_masonry_01.column_divider = 300;      
      this.sweep_masonry_02.column_divider = 300;      
      this.sweep_masonry_03.column_divider = 400;      
      this.sweep_masonry_05.column_divider = 300;      
      this.sweep_masonry_04.column_divider = 200;      
      this.sweep_masonry_06.column_divider = 200;      
      this.sweep_masonry_07.column_divider = 200;  
    } else if($(window).width() < 1300) {
      this.sweep_masonry_01.column_divider = 400;      
      this.sweep_masonry_02.column_divider = 300;      
      this.sweep_masonry_03.column_divider = 400;      
      this.sweep_masonry_05.column_divider = 300;      
      this.sweep_masonry_04.column_divider = 200;      
      this.sweep_masonry_06.column_divider = 200;      
      this.sweep_masonry_07.column_divider = 200;      
    } else if($(window).width() < 1650) {
      this.sweep_masonry_01.column_divider = 500;      
      this.sweep_masonry_02.column_divider = 400;      
      this.sweep_masonry_03.column_divider = 500;      
      this.sweep_masonry_05.column_divider = 400;      
      this.sweep_masonry_04.column_divider = 300;      
      this.sweep_masonry_06.column_divider = 200;      
      this.sweep_masonry_07.column_divider = 200;      
    } else {
      this.sweep_masonry_01.column_divider = 600;      
      this.sweep_masonry_02.column_divider = 500;      
      this.sweep_masonry_03.column_divider = 600;      
      this.sweep_masonry_04.column_divider = 400;      
      this.sweep_masonry_05.column_divider = 500;      
      this.sweep_masonry_06.column_divider = 300;      
      this.sweep_masonry_07.column_divider = 300;      
    }

  }.bind(this));

  this.sweep_masonry_01 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_01
  }, $('.sweep-masonry-container-01'));

  this.sweep_masonry_02 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_02
  }, $('.sweep-masonry-container-02'));

  this.sweep_masonry_03 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_03
  }, $('.sweep-masonry-container-03'));

  this.sweep_masonry_04 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_04
  }, $('.sweep-masonry-container-04'));

  this.sweep_masonry_05 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_05
  }, $('.sweep-masonry-container-05'));

  this.sweep_masonry_06 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_06
  }, $('.sweep-masonry-container-06'));

  this.sweep_masonry_07 = new manic.ui.DingMasonry({
    'column_divider': this.sweep_column_divider_07
  }, $('.sweep-masonry-container-07'));

};

sgpool.page.Museum.prototype.create_masonry_lottery = function() {

  if($(window).width() < 769 && $(window).width() > 700) {
    this.lottery_column_divider_01 = 400;    
    this.lottery_column_divider_02 = 250;    
    this.lottery_column_divider_03 = 200;    
    this.lottery_column_divider_04 = 200;    
    this.lottery_column_divider_05 = 250; 
  } else if($(window).width() < 1025 && $(window).width() > 700) {
    this.lottery_column_divider_01 = 400;    
    this.lottery_column_divider_02 = 300;    
    this.lottery_column_divider_03 = 250;    
    this.lottery_column_divider_04 = 250;    
    this.lottery_column_divider_05 = 300; 
  } else if($(window).width() < 1476) {
    this.lottery_column_divider_01 = 800;    
    this.lottery_column_divider_02 = 400;    
    this.lottery_column_divider_03 = 300;    
    this.lottery_column_divider_04 = 300;    
    this.lottery_column_divider_05 = 400;    
  } else if($(window).width() < 1600) {
    this.lottery_column_divider_01 = 800;
    this.lottery_column_divider_02 = 500;
    this.lottery_column_divider_03 = 400;
    this.lottery_column_divider_04 = 400;
    this.lottery_column_divider_05 = 500;
  } else {
    this.lottery_column_divider_01 = 800;    
    this.lottery_column_divider_02 = 600;    
    this.lottery_column_divider_03 = 500;    
    this.lottery_column_divider_04 = 500;    
    this.lottery_column_divider_05 = 600;    
  }

  $(window).resize(function(){

    if($(window).width() < 769 && $(window).width() > 700) {
      this.lottery_masonry_01.column_divider = 400;      
      this.lottery_masonry_02.column_divider = 250;      
      this.lottery_masonry_03.column_divider = 200;      
      this.lottery_masonry_04.column_divider = 200;      
      this.lottery_masonry_05.column_divider = 250;
    } else if($(window).width() < 1025 && $(window).width() > 700) {
      this.lottery_masonry_01.column_divider = 400;      
      this.lottery_masonry_02.column_divider = 300;      
      this.lottery_masonry_03.column_divider = 250;      
      this.lottery_masonry_04.column_divider = 250;      
      this.lottery_masonry_05.column_divider = 300;
    } else if($(window).width() < 1476) {
      this.lottery_masonry_01.column_divider = 800;      
      this.lottery_masonry_02.column_divider = 400;      
      this.lottery_masonry_03.column_divider = 300;      
      this.lottery_masonry_04.column_divider = 300;      
      this.lottery_masonry_05.column_divider = 400;      
    } else if($(window).width() < 1650) {
      this.lottery_masonry_01.column_divider = 800;      
      this.lottery_masonry_02.column_divider = 500;      
      this.lottery_masonry_03.column_divider = 400;      
      this.lottery_masonry_04.column_divider = 400;      
      this.lottery_masonry_05.column_divider = 500;      
    } else {
      this.lottery_masonry_01.column_divider = 800;      
      this.lottery_masonry_02.column_divider = 600;      
      this.lottery_masonry_03.column_divider = 500;      
      this.lottery_masonry_04.column_divider = 500;      
      this.lottery_masonry_05.column_divider = 600;      
    }

  }.bind(this));

  this.lottery_masonry_01 = new manic.ui.DingMasonry({
    'column_divider': this.lottery_column_divider_01
  }, $('.lottery-masonry-container-01'));

  this.lottery_masonry_02 = new manic.ui.DingMasonry({
    'column_divider': this.lottery_column_divider_02
  }, $('.lottery-masonry-container-02'));

  this.lottery_masonry_03 = new manic.ui.DingMasonry({
    'column_divider': this.lottery_column_divider_03
  }, $('.lottery-masonry-container-03'));

  this.lottery_masonry_04 = new manic.ui.DingMasonry({
    'column_divider': this.lottery_column_divider_04
  }, $('.lottery-masonry-container-04'));

  this.lottery_masonry_05 = new manic.ui.DingMasonry({
    'column_divider': this.lottery_column_divider_05
  }, $('.lottery-masonry-container-05'));

};

sgpool.page.Museum.prototype.create_masonry_bet_slips_lottery = function() {

  if($(window).width() < 769 && $(window).width() > 700) {
    this.bet_slips_column_divider_01 = 150;    
    this.bet_slips_column_divider_02 = 250;    
    this.bet_slips_column_divider_03 = 150;    
    this.bet_slips_column_divider_04 = 250;    
    this.bet_slips_column_divider_05 = 200;   
  } else if($(window).width() < 1025 && $(window).width() > 700) {
    this.bet_slips_column_divider_01 = 200;    
    this.bet_slips_column_divider_02 = 300;    
    this.bet_slips_column_divider_03 = 200;    
    this.bet_slips_column_divider_04 = 350;    
    this.bet_slips_column_divider_05 = 250;   
  } else if($(window).width() < 1476) {
    this.bet_slips_column_divider_01 = 200;    
    this.bet_slips_column_divider_02 = 400;    
    this.bet_slips_column_divider_03 = 200;    
    this.bet_slips_column_divider_04 = 450;    
    this.bet_slips_column_divider_05 = 350;    
  } else if($(window).width() < 1875) {
    this.bet_slips_column_divider_01 = 300;
    this.bet_slips_column_divider_02 = 500;
    this.bet_slips_column_divider_03 = 300;
    this.bet_slips_column_divider_04 = 550;
    this.bet_slips_column_divider_05 = 400;
  } else {
    this.bet_slips_column_divider_01 = 400;    
    this.bet_slips_column_divider_02 = 600;    
    this.bet_slips_column_divider_03 = 400;    
    this.bet_slips_column_divider_04 = 600;    
    this.bet_slips_column_divider_05 = 450;    
  }

  $(window).resize(function(){

    if($(window).width() < 769 && $(window).width() > 700) {
      this.bet_slips_masonry_01.column_divider = 150;      
      this.bet_slips_masonry_02.column_divider = 250;      
      this.bet_slips_masonry_03.column_divider = 150;      
      this.bet_slips_masonry_04.column_divider = 250;      
      this.bet_slips_masonry_05.column_divider = 200;  
    } else if($(window).width() < 1025 && $(window).width() > 700) {
      this.bet_slips_masonry_01.column_divider = 200;      
      this.bet_slips_masonry_02.column_divider = 300;      
      this.bet_slips_masonry_03.column_divider = 200;      
      this.bet_slips_masonry_04.column_divider = 350;      
      this.bet_slips_masonry_05.column_divider = 250;  
    } else if($(window).width() < 1476) {
      this.bet_slips_masonry_01.column_divider = 200;      
      this.bet_slips_masonry_02.column_divider = 400;      
      this.bet_slips_masonry_03.column_divider = 200;      
      this.bet_slips_masonry_04.column_divider = 450;      
      this.bet_slips_masonry_05.column_divider = 350;      
    } else if($(window).width() < 1875) {
      this.bet_slips_masonry_01.column_divider = 300;      
      this.bet_slips_masonry_02.column_divider = 500;      
      this.bet_slips_masonry_03.column_divider = 300;      
      this.bet_slips_masonry_04.column_divider = 550;      
      this.bet_slips_masonry_05.column_divider = 400;      
    } else {
      this.bet_slips_masonry_01.column_divider = 400;      
      this.bet_slips_masonry_02.column_divider = 600;      
      this.bet_slips_masonry_03.column_divider = 400;      
      this.bet_slips_masonry_04.column_divider = 600;      
      this.bet_slips_masonry_05.column_divider = 450;      
    }

  }.bind(this));


  this.bet_slips_masonry_01 = new manic.ui.DingMasonry({
    'column_divider': this.bet_slips_column_divider_01
  }, $('.bet-slips-masonry-container-01'));

  this.bet_slips_masonry_02 = new manic.ui.DingMasonry({
    'column_divider': this.bet_slips_column_divider_02
  }, $('.bet-slips-masonry-container-02'));

  this.bet_slips_masonry_03 = new manic.ui.DingMasonry({
    'column_divider': this.bet_slips_column_divider_03
  }, $('.bet-slips-masonry-container-03'));

  this.bet_slips_masonry_04 = new manic.ui.DingMasonry({
    'column_divider': this.bet_slips_column_divider_04
  }, $('.bet-slips-masonry-container-04'));

  this.bet_slips_masonry_05 = new manic.ui.DingMasonry({
    'column_divider': this.bet_slips_column_divider_05
  }, $('.bet-slips-masonry-container-05'));

};

sgpool.page.Museum.prototype.create_masonry_retail_outlets = function() {

  this.retail_outlets_masonry_01 = new manic.ui.DingMasonry({
    'column_divider': 300
  }, $('.retail-outlets-masonry-container-01'));

  this.retail_outlets_masonry_01.update_layout();

  this.retail_outlets_masonry_02 = new manic.ui.DingMasonry({
    'column_divider': 300
  }, $('.retail-outlets-masonry-container-02'));  

};

sgpool.page.Museum.prototype.create_masonry_posters = function() {

  if($(window).width() < 769 && $(window).width() > 700) {
    this.posters_column_divider_01 = 200;    
    this.posters_column_divider_02 = 200;    
    this.posters_column_divider_03 = 200;    
    this.posters_column_divider_04 = 250;    
    this.posters_column_divider_05 = 200;    
    this.posters_column_divider_06 = 250;    
    this.posters_column_divider_07 = 200;    
    this.posters_column_divider_08 = 200;
  } else if($(window).width() < 1025 && $(window).width() > 700) {
    this.posters_column_divider_01 = 250;    
    this.posters_column_divider_02 = 250;    
    this.posters_column_divider_03 = 200;    
    this.posters_column_divider_04 = 250;    
    this.posters_column_divider_05 = 200;    
    this.posters_column_divider_06 = 300;    
    this.posters_column_divider_07 = 300;    
    this.posters_column_divider_08 = 200;
  } else if($(window).width() < 1300) {
    this.posters_column_divider_01 = 300;    
    this.posters_column_divider_02 = 300;    
    this.posters_column_divider_03 = 200;    
    this.posters_column_divider_04 = 300;    
    this.posters_column_divider_05 = 200;    
    this.posters_column_divider_06 = 400;    
    this.posters_column_divider_07 = 300;    
    this.posters_column_divider_08 = 300;    
  } else if($(window).width() < 1600) {
    this.posters_column_divider_01 = 400;
    this.posters_column_divider_02 = 300;
    this.posters_column_divider_03 = 200;
    this.posters_column_divider_04 = 400;
    this.posters_column_divider_05 = 200;
    this.posters_column_divider_06 = 500;
    this.posters_column_divider_07 = 300;
    this.posters_column_divider_08 = 300;
  } else {
    this.posters_column_divider_01 = 500;    
    this.posters_column_divider_02 = 300;    
    this.posters_column_divider_03 = 200;    
    this.posters_column_divider_04 = 500;    
    this.posters_column_divider_05 = 200;    
    this.posters_column_divider_06 = 600;    
    this.posters_column_divider_07 = 400;    
    this.posters_column_divider_08 = 400;    
  }

  $(window).resize(function(){

    if($(window).width() < 769 && $(window).width() > 700) {
      this.posters_masonry_01.column_divider = 200;      
      this.posters_masonry_02.column_divider = 200;      
      this.posters_masonry_03.column_divider = 200;      
      this.posters_masonry_04.column_divider = 250; 
      this.posters_masonry_05.column_divider = 200;                
      this.posters_masonry_06.column_divider = 300;      
      this.posters_masonry_07.column_divider = 300;      
      this.posters_masonry_08.column_divider = 200; 
    } else if($(window).width() < 1025 && $(window).width() > 700) {
      this.posters_masonry_01.column_divider = 250;      
      this.posters_masonry_02.column_divider = 250;      
      this.posters_masonry_03.column_divider = 200;      
      this.posters_masonry_04.column_divider = 250; 
      this.posters_masonry_05.column_divider = 200;                
      this.posters_masonry_06.column_divider = 300;      
      this.posters_masonry_07.column_divider = 300;      
      this.posters_masonry_08.column_divider = 200; 
    } else if($(window).width() < 1300) {
      this.posters_masonry_01.column_divider = 300;      
      this.posters_masonry_02.column_divider = 300;      
      this.posters_masonry_03.column_divider = 200;      
      this.posters_masonry_04.column_divider = 300; 
      this.posters_masonry_05.column_divider = 200;                
      this.posters_masonry_06.column_divider = 400;      
      this.posters_masonry_07.column_divider = 300;      
      this.posters_masonry_08.column_divider = 300;      
    } else if($(window).width() < 1650) {
      this.posters_masonry_01.column_divider = 400;      
      this.posters_masonry_02.column_divider = 300;      
      this.posters_masonry_03.column_divider = 200;      
      this.posters_masonry_04.column_divider = 400;   
      this.posters_masonry_05.column_divider = 200;              
      this.posters_masonry_06.column_divider = 500;      
      this.posters_masonry_07.column_divider = 300;      
      this.posters_masonry_08.column_divider = 300;      
    } else {
      this.posters_masonry_01.column_divider = 500;      
      this.posters_masonry_02.column_divider = 300;      
      this.posters_masonry_03.column_divider = 200;      
      this.posters_masonry_04.column_divider = 500;      
      this.posters_masonry_05.column_divider = 200;      
      this.posters_masonry_06.column_divider = 600;      
      this.posters_masonry_07.column_divider = 400;      
      this.posters_masonry_08.column_divider = 400;      
    }

  }.bind(this));

  this.posters_masonry_01 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_01
  }, $('.posters-masonry-container-01'));

  this.posters_masonry_02 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_02
  }, $('.posters-masonry-container-02'));

  this.posters_masonry_03 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_03,
    'max_column_num': 6
  }, $('.posters-masonry-container-03'));

  this.posters_masonry_04 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_04
  }, $('.posters-masonry-container-04'));

  this.posters_masonry_05 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_05
  }, $('.posters-masonry-container-05'));

  this.posters_masonry_06 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_06
  }, $('.posters-masonry-container-06'));

  this.posters_masonry_07 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_07
  }, $('.posters-masonry-container-07'));

  this.posters_masonry_08 = new manic.ui.DingMasonry({
    'column_divider': this.posters_column_divider_08
  }, $('.posters-masonry-container-08'));


};


sgpool.page.Museum.prototype.create_masonry_transitions = function() {

  $(".page-museum-details-item").each(function(i, v){    

    var img = $(v).find("img");

    var index = i + 1;
    
    var tween = new TimelineMax();

    img.each(function(i, v){
      tween.add([
        TweenMax.fromTo(v, 0.3, { opacity: 0, y: 40*2 }, { y: 0, opacity: 1, ease: Sine.easeInOut })
      ]);      
    }.bind(this));  

    new ScrollMagic.Scene({
        triggerElement: "#item-"+index,
        offset: 0
      }).setTween(tween)
        // .addIndicators()
        .addTo(this.controller);

  }.bind(this));  

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
sgpool.page.Museum.prototype.on_event_handler_02 = function(event) {
};



sgpool.page.Museum.prototype.sample_method_calls = function() {

  // sample override
  sgpool.page.Museum.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(sgpool.page.Museum.EVENT_01));
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
sgpool.page.Museum.prototype.update_page_layout = function() {

  sgpool.page.Museum.superClass_.update_page_layout.call(this);

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
sgpool.page.Museum.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Museum.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Museum.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Museum.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('sgpool.page.Museum', sgpool.page.Museum);