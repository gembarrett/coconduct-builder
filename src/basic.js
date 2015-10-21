$('#communityName, #userName, #communityurl').val('').change(function(){
  $('#next').prop('disabled',false);
});
function getBasicInfo() {
  communityName = $('#communityName').val();
  userName = $('#userName').val();
  communityUrl = $('#communityurl').val();
  if ($('#coconducturl').val() != '') {
    coconductUrl = $('#coconducturl').val();
  }
}