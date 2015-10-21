$('#intro button').click(function(){
  $clickedID = $(this).attr('id');
  $(this).toggleClass('selected');
  // if online space is chosen
  if ($clickedID == 'onlineSpace') {
    // if online space is already chosen
    if (onlineSpace) {
      // deselect online space
      onlineSpace = false;
    } else {
      // select online space
      onlineSpace = true;
    }
    // if offline space is chosen
  } else {
    // if offline space is already chosen
    if (offlineSpace) {
      // deselect offline space
      offlineSpace = false;
    } else {
      // select offline space
      offlineSpace = true;
    }
  }
  $('#next').prop('disabled',false);
});
function onAndOffline() {
  if (offlineSpace && onlineSpace) {
    onAndOfflineSpace = true;
  }
}
