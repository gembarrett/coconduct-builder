// 0 should have at least 1 button selected
// 1 should have text inside all inputs
// 2 no change required
// 3 should have at least 1 checkbox selected
// 4 no change required
// (offline) 5 should have 1 button selected
// 6 no change required
// 7 no change required
// 8 should have text inside input
// 9 should have text inside input
// 10 should have text inside all inputs and, if applicable, 1 button selected
// (offline) 11 should have at least 1 checkbox selected and text inside related input
// (offline) 12 should have at least 1 checkbox selected and text inside related input
// 13 no change required

// 2, 6, 7, 13 - no change
// 0, 4, 5 - 1+ button selected
// 1, 8, 9 - text inside all inputs
// 3, 10, 11, 12 - 1+ checkbox plus inputs (poss button on 10)

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
var additionalSpaces;

// TODO: refactor using class on sections and change to switch statement
function sectionHasRequiredChanges() {
  var thisSection = section;
  if (thisSection == 2 || thisSection == 3 || thisSection == 4 || thisSection == 5 || thisSection == 6 || thisSection == 7 || thisSection == 13) {
    console.log("no change required", thisSection);
    $('#next').prop('disabled',false);
  } else if (thisSection == 0 ) {
    console.log("at least one button must be selected", thisSection);
  } else if (thisSection == 1 || thisSection == 8 || thisSection == 9) {
    console.log("there must be text inside all inputs");
  } else if (thisSection == 10 || thisSection == 11 || thisSection == 12) {
    console.log("at least one checkbox plus inputs required");
    if (thisSection == 10) {
      isOffline();
    }
  }
  // console.log($.inArray(thisSection, sections));
}

// if JS is turned on then show the tool content and hide the non-JS content
$('#no-js').hide();
$('.main, #next').show();
sectionHasRequiredChanges();

$('#back').click(function(){
  $(sections).each(function(index) {
    if ($(this).hasClass('active')){
      // deactivate the current section
      $(sections[section]).removeClass('active');
      // select the previous section
      section--;
      // activate it
      $(sections[section]).addClass('active');
      $('#next').prop('disabled',false);
    }
  });

  if (section === 0) {
    // disable the back button
    $('#back').prop('disabled',true);
  }
});

// add active class to first section
$(sections[section]).addClass('active');

// disable the back button
$('#back').prop('disabled',true);

// disable the next button
$('#next').prop('disabled',true);
// when the next button is enabled and clicked
$('#next').click(function(){
  $('#back').prop('disabled',false);
  // if we're on the intro section
  if ($('#intro').hasClass('active')) {
    // check whether on or offline has been chosen and run function
    onAndOffline();
  // if we're on the basic section
  } else if ($('#basic').hasClass('active')) {
    // grab input info
    getBasicInfo();
    shortVersion = $('#shortVersion quote').text();
    $('#outputCoC').show();
  } else if ($('#people').hasClass('active')) {
    medVersion = $('#medVersion quote').text();
  }

  // deactivate the current section
  $(sections[section]).removeClass('active');
  // select the next section
  section++;
  // activate it
  $(sections[section]).addClass('active');
  // scroll back to the top of the page
  window.scrollTo(0,0);
  // if we're in a section that doesn't require user change
  if ($('#people').hasClass('active')) {
    // enable the next button
    $('#next').prop('disabled',false);
  } else if ($('#spaces').hasClass('active')) {

  } else {
    // disable the next button
    $('#next').prop('disabled',true);
  }
  sectionHasRequiredChanges();
});