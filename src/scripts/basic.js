$('#communityName, #userName, #communityurl, #coconducturl').val('').change(function(){
  $('#next').prop('disabled',false);
});
var $copyNameTo = $('.output .communityName');
var $copyName = $('#communityName');

$($copyName).keyup(function() {
  $copyNameTo.text(this.value);
});

var $copyUrlTo = $('.output .coconductURL');
var $copyUrl = $('#coconducturl');

$($copyUrl).keyup(function() {
  $copyUrlTo.text(this.value);
});
