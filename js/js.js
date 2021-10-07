$(window).scroll(function() {
    if ($(this).scrollTop()>10)
     {
        $('#top').hide();
     }
    else
     {
      $('#top').show();
     }
 });
// $('#target1').on('shown.bs.collapse', function () {
//    $('#target1').hide();
// });

// $('#target1').on('hidden.bs.collapse', function () {
//    $('#target1').show();
// });