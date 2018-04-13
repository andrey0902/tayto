/**
 * Created by andrei on 16.09.2017.
 */
$( function() {
  $('#my-menu').mmenu({
    extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
    navbar:{
      title: '<img src="../../assets/img2/logo-1.svg" style="height: 17px; width: auto">'
    },
    offCanvas: {
      position: 'left'
    }
  });

  var api = $('#my-menu').data('mmenu');
api.bind('open', function () {
  $('.hamburger').addClass('is-active');
});
api.bind('closed', function () {
  $('.hamburger').removeClass('is-active');
});
  $('.carousel-services').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouserItem();
    }, 100)
  });
$('.carousel-services').owlCarousel({
/*  loop: true,*/
  nav: true,
  smartSpeed: 800,
  navText: ['<i class="fa fa-angle-double-right" aria-hidden="true"></i>', '<i class="fa fa-angle-double-left" aria-hidden="true"></i>' ],
  responsiveClass:true,
  dots: false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3
    }
  }
});
$('.review-carousel').owlCarousel({
  nav: false,
  loop: true,
  autoHeight: true,
  smartSpeed: 800,
  responsiveClass:true,
  dots: true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});
$('.partners').owlCarousel({
  nav: true,
  navText: ['<i class="fa fa-angle-right" aria-hidden="true"></i>', '<i class="fa fa-angle-left" aria-hidden="true"></i>' ],
  loop: true,
  smartSpeed: 700,
  responsiveClass:true,
  dots: false,
  responsive:{
    0:{
      items: 1
    },
    768:{
      items: 2
    },
    992: {
      items: 3
    },
    1200:{
      items: 4
    }
  }
})
function carouserItem() {
  $('.carousel-services-item').each(function () {
    var th = $(this),
      thh = th.find('.carousel-services-content').outerHeight(true);
    console.log(thh);
    th.find('.carousel-services-image').css('height', thh );
  })
}

function lastWorld() {
  $('.carousel-services-content .h3').each(function () {
   var ths = $(this);
   ths.html(ths.html().replace(/(\S+)\s*$/, '<span class="two-words">$1</span>'));
  })
}
  lastWorld();
  function firstWorld() {
    $('section .h2').each(function () {
      var ths = $(this);
      console.log('1111', ths);
      ths.html(ths.html().replace(/^(\S+)/, '<span class="one-word">$1</span>'));

    });

    $('.h-first').each(function () {
      var ths = $(this);
      console.log('5555', ths);
      ths.html(ths.html().replace(/^(\S+)/, '<span class="one-word">$1</span>'));

    })
  }firstWorld()

  $('select').selectize({
    create: true,
    sortField: 'text'
  });

  var form = function() {
    $('.form-button').on('click', function () {
      $('.selectize-control').addClass('disable');
      $('.success').addClass('active');
      setTimeout(function () {
        $('.success').removeClass('active');
        $('.selectize-control').removeClass('disable');

      }, 2000)
    })
  };
  form();

  $(window).scroll(function () {
    if($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active-right');
      return;
    }
    $('.top').removeClass('active-right');
  });
  $('.top').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}, 'slow');
  })
function onResize() {
  $('.carousel-services-composition').equalHeights();
}onResize()
$(window).on('resize', onResize);
});
$(window).on('load', function() {
  $('.preload').delay(1000).fadeOut('slow');
})
