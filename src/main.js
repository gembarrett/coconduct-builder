var section = 0;
var sections = $('.section');
var onlineSpace = false;
var offlineSpace = false;
var space;
var communityName;
var coconductUrl;
var eventType;

// if JS is turned on then show the tool content and hide the non-JS content
// $(document).ready(function(){
  $('#no-js').hide();
  $('.main, #next').show();
// })

// add active class to first section
$(sections[section]).addClass('active');
// disable the next button
$('#next').prop('disabled',true);
// when the next button is enabled and clicked
$('#next').click(function(){
  // if we're on the intro section
  if ($('#intro').hasClass('active')) {
    // check whether on or offline has been chosen and run function
    onAndOffline();
  // if we're on the basic section
  } else if ($('#basic').hasClass('active')) {
    // grab input info
    getBasicInfo();
  }
  // deactivate the current section
  $(sections[section]).removeClass('active');
  // select the next section
  section++;
  // activate it
  $(sections[section]).addClass('active');
  // if we're in a section that doesn't require user change
  if ($('#people').hasClass('active')) {
    // enable the next button
    $('#next').prop('disabled',false);
  } else {
    // disable the next button
    $('#next').prop('disabled',true);
  }
});
