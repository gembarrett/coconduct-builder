var section = 0;
var sections = $('.section');
var onlineSpace = false;
var offlineSpace = false;
var space;
var communityName;
var coconductUrl;
var eventType;
var shortVersion;
var medVersion;

// if JS is turned on then show the tool content and hide the non-JS content
// $(document).ready(function(){
  $('#no-js').hide();
  $('.main, #next').show();
// })

$('#back').click(function(){
  $(sections).each(function(index) {
    if ($(this).hasClass('active')){
      // var thisSection = $(this)[0];
      // var thatSection = $(sections[index-1]);
      // console.log(thatSection[0]);
      // $(thisSection).removeClass('active');
      // $(thatSection).addClass('active');
      // section--;
      // deactivate the current section
      $(sections[section]).removeClass('active');
      // select the next section
      section--;
      // activate it
      $(sections[section]).addClass('active');
      $('#next').prop('disabled',false);
    }
  });
});

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
    shortVersion = $('#shortVersion quote').text();
  } else if ($('#people').hasClass('active')) {
    medVersion = $('#medVersion quote').text();
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
  } else if ($('#spaces').hasClass('active')) {

  } else {
    // disable the next button
    $('#next').prop('disabled',true);
  }
});
