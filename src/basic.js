$(document).ready(function() {
  $('input#userName').val('').change(function(){
    console.log($('#communityName, #userName, #communityurl'));
    $('#next').prop('disabled',false);
  });
});