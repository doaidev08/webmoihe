// Scroll Top hidden
$(window).scroll(function() {
   if ($(this).scrollTop()>10)
     {
         $('#top').hide();
         $(".scrollTop_button").show();
     }else{
         $('#top').show();
         $(".scrollTop_button").hide();
     }
 });

// button scroll to top
$(".scrollTop_button").click(function(){
   window.scrollTo({ top: 0, behavior: 'smooth'});
});
