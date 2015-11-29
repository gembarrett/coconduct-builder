$('#intro input[type="checkbox"]').click(function(){
  $clickedID = $(this).attr('id');
  this.parentElement.classList.toggle('selected');
  // if online space is chosen
  if ($clickedID == 'onlineSpace') {
    // if online space is already chosen
    if (onlineSpace) {
      // deselect online space
      onlineSpace = false;
      $('body').removeClass('onlineUsage');
    } else {
      // select online space
      onlineSpace = true;
      $('body').addClass('onlineUsage');
    }
    // if offline space is chosen
  } else {
    // if offline space is already chosen
    if (offlineSpace) {
      // deselect offline space
      offlineSpace = false;
      $('body').removeClass('offlineUsage');
    } else {
      // select offline space
      offlineSpace = true;
      $('body').addClass('offlineUsage');
    }
  }

  canProceed();
});
function canProceed() {
  if ($('body').hasClass('offlineUsage') || $('body').hasClass('onlineUsage')) {
    $('#next').prop('disabled',false);
    return true;
  } else {
    $('#next').prop('disabled',true);
    return false;
  }
}
function onAndOffline() {
  if (offlineSpace && onlineSpace) {
    onAndOfflineSpace = true;
  }
}
