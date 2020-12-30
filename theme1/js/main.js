!(function($) {
    "use strict";
  
    // Hero-Carousel
    $('.carousel').carousel({
        interval: 5000,
        Wrap: false,
        ride: true,
        touch: true,
        pause: false
    })
  
    // Set the count down timer
    if ($('.countdown').length) {
        var count = $('.countdown').data('count');
        var template = $('.countdown').html();
        $('.countdown').countdown(count, function(event) {
            $(this).html(event.strftime(template));
        });
    }
})(jQuery);