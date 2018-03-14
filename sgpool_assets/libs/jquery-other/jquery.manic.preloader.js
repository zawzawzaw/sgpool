/**
 * simple preloader, updated for assets
 * 
 * requires PreloadJS
 * requires MobileDetect !!!
 *
 * has remove scroll (be careful)
 *
 * MUST HAVE AT LEAST 1 JS TO LOAD !
 * MUST HAVE AT LEAST 1 JS TO LOAD !!
 * MUST HAVE AT LEAST 1 JS TO LOAD !!!
 *
 * jan 14
 * uses mobile detect to load mobile, tablet or desktop
 *
 * assets are in the window, cause different pages use different assets
 * 
 * window.asset_array
 * window.mobile_only_asset_array
 * window.tablet_only_asset_array
 * window.desktop_only_asset_array
 * 
 * 
 * @author Jairus
 */

(function ($) {

  var defaults = {

    asset_array:[],
    mobile_only_asset_array:[],
    tablet_only_asset_array:[],
    desktop_only_asset_array:[],
    mobile_js_array:[],
    tablet_js_array:[],
    desktop_js_array:[],
    on_mobile_complete: function(){},
    on_tablet_complete: function(){},
    on_desktop_complete: function(){}

  };

  ///////////////////////////////
  // ManicPreloader Class //
  ///////////////////////////////

  function ManicPreloader(settings) {
    this.settings = $.extend({}, defaults, settings);

    this.is_desktop = true;     // desktop version by default
    this.is_tablet = false;

    this.is_tablet_portrait = false;
    this.is_tablet_landscape = false;

    this.preloader = null;
    this.mobile_detect = null;

    this.init();
  }

  ManicPreloader.prototype = {
    init: function () {
      console.log("init");



      // this.is_desktop = $(window).width() >= 992;
      // this.is_desktop = $(window).width() >= 768;
      
      var wh = $(window).height();
      var ww = $(window).width();

      this.is_tablet_portrait =  wh >= ww;
      this.is_tablet_landscape = ww > wh;
      
      // set window to (0,0)
      window.scrollTo( 0, 0 );
      window.addEventListener( 'scroll', this.on_window_scroll );   // no need to bind (cause it's not using)

      if (document.location.protocol == "file:") {
        this.load_local_file();
      } else {

        this.preloader = new createjs.LoadQueue(true);
        this.mobile_detect = new MobileDetect(window.navigator.userAgent);

        this.is_desktop = this.mobile_detect.mobile() == null;
        this.is_tablet = this.mobile_detect.tablet() != null;

        // if actually a tablet
        if(this.is_tablet == true){
          $(window).resize(this.on_tablet_window_resize.bind());
        }

        // faking it, added to quell the masses suffering from the plague of mediocrity
        if(this.is_tablet == true && this.is_tablet_portrait == true){
          this.is_tablet = false;
          $('body').addClass('manic-tablet-portrait-fake');
        }
        
        


        this.preloader.addEventListener('complete', this.on_preload_complete.bind(this));
        this.preloader.addEventListener('error', this.on_preload_error.bind(this));
        
        if (this.settings['asset_array'].length != 0) {
          this.preloader.loadManifest(this.settings['asset_array']);
        }

        // new
        if (this.isDefAndNotNull(window.asset_array) && window.asset_array.length != 0) {
          this.preloader.loadManifest(window.asset_array);
        }
        
        

        
        if (this.is_desktop == true) {

          if (this.settings['desktop_only_asset_array'].length != 0) {
            this.preloader.loadManifest(this.settings['desktop_only_asset_array']);
          }
          if (this.settings['desktop_js_array'].length != 0) {
            this.preloader.loadManifest(this.settings['desktop_js_array']);
          }

          // new
          if (this.isDefAndNotNull(window.desktop_only_asset_array) && window.desktop_only_asset_array.length != 0) {
            this.preloader.loadManifest(window.desktop_only_asset_array);
          }

        } else {

          if (this.is_tablet == true) {
            // load tablet assets
            if (this.settings['tablet_only_asset_array'].length != 0) {
              this.preloader.loadManifest(this.settings['tablet_only_asset_array']);
            }
            if (this.settings['tablet_js_array'].length != 0) {
              this.preloader.loadManifest(this.settings['tablet_js_array']);
            }

            // new
            if (this.isDefAndNotNull(window.tablet_only_asset_array) && window.tablet_only_asset_array.length != 0) {
              this.preloader.loadManifest(window.tablet_only_asset_array);
            }

          } else {
            // load mobile assets
            if (this.settings['mobile_only_asset_array'].length != 0) {
              this.preloader.loadManifest(this.settings['mobile_only_asset_array']);
            }
            if (this.settings['mobile_js_array'].length != 0) {
              this.preloader.loadManifest(this.settings['mobile_js_array']);
            }

            // new
            if (this.isDefAndNotNull(window.mobile_only_asset_array) && window.mobile_only_asset_array.length != 0) {
              this.preloader.loadManifest(window.mobile_only_asset_array);
            }

          }
        }
        

      }

      
      

      
      

    },

    on_preload_error: function(event){
     
      console.log('jquery.manic.preloader.js: on_preload_error');  
      console.log(event);
      

    },

    load_local_file: function(){

      console.log('jquery.manic.preloader.js: load_local_file');

      var arr = [];
      var str = '';

      if (this.is_desktop){
        arr = this.settings['desktop_js_array']
      } else {

        if (this.is_tablet) {

        }
        arr = this.settings['mobile_js_array']
      }

      //str = arr.join('"></script><script type="text/javascript" src="');
      //str = '<script type="text/javascript" src="' + str + '"></script>';
      //$('head').append(str);
      
      $.ajaxPrefilter( "json script", function( options ) {
        options.crossDomain = true;
      });
      
      
      for (var i = 0, l = arr.length; i < l; i++) {
        
        $('<script/>')
          .attr('src', '' + arr[i])
          .appendTo('body');
      }


      setTimeout(this.on_load_local_file_complete.bind(this),300);
    },

    on_load_local_file_complete: function(){

      // same code as 'on_preload_append_complete'
      window.removeEventListener( 'scroll', this.on_window_scroll );
      
      // no need to append to head :D
      if (this.is_desktop == true) {
        this.settings['on_desktop_complete']();
      } else {

        if(this.is_tablet == true) {
          this.settings['on_tablet_complete']();
        } else {
          this.settings['on_mobile_complete']();
        }
      }

    },

    on_preload_complete: function(event){
      console.log('javascript preload complete');

      var arr = [];
      var js_element = null;
      var fragment = $(document.createDocumentFragment());

      if (this.is_desktop == true) {
        arr = this.settings['desktop_js_array'];
      } else {

        if (this.is_tablet == true) {
          arr = this.settings['tablet_js_array'];
        } else {
          arr = this.settings['mobile_js_array'];
        }
      }

      // loop through and add to fragment
      for (var i = 0, l = arr.length; i < l; i++) {
        js_element = this.preloader.getResult(arr[i]);
        fragment.append(js_element);
      }


      $('head').append(fragment);

      setTimeout(this.on_preload_append_complete.bind(this),100);
      //setTimeout(this.on_preload_append_complete.bind(this),300);  // increased to accomodate delay?
    },



    on_preload_append_complete: function(){

      window.removeEventListener( 'scroll', this.on_window_scroll );

      if (this.is_desktop == true) {
        $('body').addClass('manic-desktop');
        this.settings['on_desktop_complete']();
      } else {

        if (this.is_tablet == true) {
          $('body').addClass('manic-tablet');
          this.settings['on_tablet_complete']();
        } else {
          $('body').addClass('manic-mobile');
          this.settings['on_mobile_complete']();
        }
      }

    },

    // to prevent users from scrolling during preload
    on_window_scroll: function(){
      window.scrollTo( 0, 0 );
    },

    on_tablet_window_resize: function(event){

      var cwh = $(window).height();
      var cww = $(window).width();

      var is_current_tablet_portrait =  cwh >= cww;
      var is_current_tablet_landscape = cww > cwh;

      console.log('this.is_tablet_landscape: ' + this.is_tablet_landscape);
      console.log('is_current_tablet_landscape: ' + is_current_tablet_landscape);

      if(this.is_tablet_landscape != is_current_tablet_landscape){
        window.location.reload();
      }
    },

    isDefAndNotNull: function(val) {
      // Note that undefined == null.
      return val != null;
    }


  };

  ////////////////////////
  // jQuery Plugin Code //
  ////////////////////////
  
  $.extend({
    manic_preloader: function (settings) {
      var item = new ManicPreloader(settings);
      return item;
    }
  });

}(jQuery));