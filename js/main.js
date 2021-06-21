$(document).on('click', '.video-play-btn', function() {
    $('.video-poup').addClass('d-flex')
})

$(document).on('click', '.video-popup-close', function() {
    $('.video-poup').removeClass('d-flex')
})

// NAVBAR SHRINK

$(document).on('scroll', function() {
    if ($(window).scrollTop() > 90) {
        $('.navbar').addClass('navbar-shrink');
    } else {
        $('.navbar').removeClass('navbar-shrink')
    }
})



//FEATURE CAROUSEL

$('.features-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 3,


        }
    }
})

//SCREENSHOOT CAROUSEL

$('.screenshoot-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 3,


        }
    }
})

//TESTIMONIAL CAROUSEL

$('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    // autoplay: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 3,


        }
    }
})

//TEAM MEMBER CAROUSEL

$('.team-member-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    // autoplay: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 3,


        }
    }
})


// Navbar Collapse

$('.nav-link').on('click', function() {
    $('.navbar-collapse').removeClass('show')

})

// Scroll It


$(function() {
    $.scrollIt({
        //   upKey: 38,             // key code to navigate to the next section
        //   downKey: 40,           // key code to navigate to the previous section
        //   easing: 'linear',      // the easing function for animation
        //   scrollTime: 600,       // how long (in ms) the animation takes
        //   activeClass: 'active', // class given to the active nav element
        //   onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -30 // offste (in px) for fixed top navigation
    });
});