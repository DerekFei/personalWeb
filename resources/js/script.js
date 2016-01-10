$(document).ready(function() {
    /*---------------------------*/
    /*      For the nav bar      */
    /*---------------------------*/
    
    $('.js--section-abt').waypoint(function(direction) {
        if(direction == "down") {
            $('.js--section-nav').css('position','fixed');
            $('.js--section-nav').css('top','-1px');
            $('.js--section-nav').css('border-top','1px solid #2980b9');
            $('.js--section-navTag').css('display','block');
        } else {
            $('.js--section-nav').css('position','relative');
            $('.js--section-navTag').css('display','none');
            $('.js--section-nav').css('border-top','none');
            
        }
        
    }, {
        offset:'50px'
    });
    

    
    
    /*---------------------------*/
    /*---scroll on buttuns ------*/
    /*---------------------------*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  
    
    
    /*---------------------------*/
    /*--- Animation on scroll ---*/
    /*---------------------------*/
     $('.js--wp-headleft').waypoint(function(direction){
       $('.js--wp-headleft').addClass('animated slideInLeft');
    },{
        offset:'50%'
    });
    
    $('.js--wp-headright').waypoint(function(direction){
       $('.js--wp-headright').addClass('animated slideInDown');
    },{
        offset:'50%'
    });
    
     $('.js--wp-aboutleft').waypoint(function(direction){
       $('.js--wp-aboutleft').addClass('animated bounceInLeft');
    },{
        offset:'100%'
    });
    
     $('.js--wp-aboutright').waypoint(function(direction){
       $('.js--wp-aboutright').addClass('animated bounceInRight');
    },{
        offset:'70%'
    });
    
      $('.js--wp-projleft').waypoint(function(direction){
       $('.js--wp-projleft').addClass('animated bounceInLeft');
    },{
        offset:'70%'
    });
    
      $('.js--wp-projright').waypoint(function(direction){
       $('.js--wp-projright').addClass('animated bounceInRight');
    },{
        offset:'70%'
    });
    
    $('.js--wp-expright').waypoint(function(direction){
       $('.js--wp-expright').addClass('animated bounceInRight');
    },{
        offset:'70%'
    });
    
    $('.js--wp-expp').waypoint(function(direction){
       $('.js--wp-expp').addClass('animated bounceInRight');
    },{
        offset:'70%'
    });
    
    $('.js--wp-icon').waypoint(function(direction){
       $('.js--wp-icon').addClass('animated tada');
    },{
        offset:'100%'
    });
    
    
    
    
});

    
    /*---------------------------*/
    /*----Lightbox gallery ------*/
    /*---------------------------*/
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small style="overflow:hidden;">by Cheng Fei (Derek)</small>';
			}
		}
	});
});
