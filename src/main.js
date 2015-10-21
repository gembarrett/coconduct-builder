var section = 0;
var sections = $('.section');
var onlineSpace = false;
var offlineSpace = false;
var space;
var communityName;
var userName;
var communityUrl;
var coconductUrl;
var eventType;

$(sections[section]).addClass('active');
$('#next').prop('disabled',true);
$('#next').click(function(){
  if ($('#intro').hasClass('active')) {
    onAndOffline();
  } else if ($('#basic').hasClass('active')) {
    getBasicInfo();
  }
  $(sections[section]).removeClass('active');
  section++;
  $(sections[section]).addClass('active');
  $('#next').prop('disabled',true);
});
