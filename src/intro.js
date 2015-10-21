$(document).ready(function() {
  var onlineSpace = false;
  var offlineSpace = false;
  $('#intro button').click(function(){
    $clickedID = $(this).attr('id');
    $(this).toggleClass('selected');
    if ($clickedID == 'onlineSpace') {
      if (onlineSpace) {
        onlineSpace = false;
      } else {
        onlineSpace = true;
      }
    } else {
      if (offlineSpace) {
        offlineSpace = false;
      } else {
        offlineSpace = true;
      }
    }
    $('#next').prop('disabled',false);
  });
});