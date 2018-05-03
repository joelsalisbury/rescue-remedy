
/*!
 * main.js
 */

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

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


 
;(function(window, $) {
  $(function() {
    $("#amazon_button").on('click', function() {
      var ftRandom = Math.random()*1000000; 
document.write('<iframe style="position:absolute; visibility:hidden; width:1px; height:1px;" src="https://servedby.flashtalking.com/container/10734;90761;9360;iframe/?spotName=Nelsons_Coupon_Amazon_page_redirect&cachebuster='+ftRandom+'"></iframe>'); 
    });

  });
})(window, jQuery);

