/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
	
	
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});
	
});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(29.742057, -95.491249);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        disableDefaultUI: false,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                featureType: 'water',
                stylers: [
                    {
                        color: '#46bcec'
                    }, {
                        visibility: 'on'
                    }
                ]
            }, 
            // {
            //     featureType: 'landscape',
            //     stylers: [{
            //         color: '#f2f2f2'
            //     }]
            // }, 
            // {
            //     featureType: 'road',
            //     stylers: [{
            //         saturation: -100
            //     }, {
            //         lightness: 45
            //     }]
            // }, 
            {
                featureType: 'road.highway',
                stylers: [{
                    visibility: 'simplified'
                }]
            }, 
            {
                featureType: 'road.arterial',
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'on'
                }]
            }, 
            {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#444444'
                }]
            }, 
            {
                featureType: 'transit',
                stylers: [{
                    visibility: 'off'
                }]
            }, 
            {
                featureType: 'poi',
                stylers: [{
                    visibility: 'on'
                }]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var contentString = '<div id="infoWindowContent">'+
        '<div style="margin-top: 0px; margin-bottom: 0px; font-size: 20px; font-weight: 400; color: black;">The Society Spa</div>'+
        '<div style="margin-top: 0px; margin-bottom: 5px; font-size: 14px; color: black;">(713) 572-7710</div>'+
        '<div style="margin-top: 0px; margin-bottom: 0px; color: black;">Alex Burton Salons, Studio 143</div>' +
        '<div style="margin-top: 0px; margin-bottom: 0px; color: black;">6100 Westheimer Rd, Houston, TX 77057</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var image = {
        url: 'img/logo/SS_Marker.png',
        size: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(29.738911, -95.490901),
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
    });
    infowindow.open(map,marker);


}

// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

