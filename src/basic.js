$('#communityName, #userName, #communityurl, #coconducturl').val('').change(function(){
  $('#next').prop('disabled',false);
});
function getBasicInfo() {
  communityName = $('#communityName').val();
  coconductUrl = $('#coconducturl').val();
}
var $copyNameTo = $('#basic .output .communityName');
var $copyName = $('#communityName');

$($copyName).keyup(function() {
  $copyNameTo.text(this.value);
});

var $copyUrlTo = $('#basic .output .coconductURL');
var $copyUrl = $('#coconducturl');

$($copyUrl).keyup(function() {
  $copyUrlTo.text(this.value);
});
