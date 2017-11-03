/**
 * Created by ryanrodwell on 7/31/17.
 */
$(document).ready(function() {
    $('select').material_select();
});

$('.saveBtn').click(function(){
   var password = $('#password').val();
   console.log(password);
});
