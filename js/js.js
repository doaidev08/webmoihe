// Scroll Top hidden
$(window).scroll(function() {
   if ($(this).scrollTop()>10)
     {
         $('#top').hide();
         $('.navbar').addClass( "changeTop");
         $(".scrollTop_button").show();

     }else{
         $('#top').show();
         $('.navbar').removeClass( "changeTop");
         $(".scrollTop_button").hide();
     }
 });

// button scroll to top
$(".scrollTop_button").click(function(){
   window.scrollTo({ top: 0, behavior: 'smooth'});
});
