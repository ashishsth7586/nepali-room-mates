;(function($){
    "use strict"
    var nav_offset_top = $('.header-area').height()+50; 
    var nav_offset_top_two = $('.header-area-two').height()+50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header-area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header-area").addClass("navbar-fixed");
                } else {
                    $(".header-area").removeClass("navbar-fixed");
                }
            });
        };
    };
    navbarFixed();

    function navbarFixedTwo(){
        if ( $('.header-area-two').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top_two ) {
                    $(".header-area-two").addClass("navbar-fixed");
                } else {
                    $(".header-area-two").removeClass("navbar-fixed");
                }
            });
        };
    };
    navbarFixedTwo();
})(jQuery)