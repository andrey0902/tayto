document.addEventListener('DOMContentLoaded', function () {
    console.log('load111');
    $('#test').selectize({
        scrollDuration: 80,
        onInitialize: function(){
            console.log('asdfalsdjf')

        },
        onDropdownOpen:  function(){
            console.log('asdfalsdjf')

        }
    });
    $(".dropdown-menu-scrollbar").mCustomScrollbar({
        theme:"minimal-dark",
        mouseWheel:{ preventDefault:true }
    });

    $('.carousel').carousel({
        interval: 1000000
    })
    function onResize() {
        $('.package ul').equalHeights();


    }onResize();
    window.addEventListener('resize', function (e) {
        if(e.target.innerWidth > 768){
            console.log('resize');
            $('.my-col').equalHeights();
            return;
        }
        $('.my-col').css('height', 'auto');
    })
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.auth').toggleClass('active');
    })
} )