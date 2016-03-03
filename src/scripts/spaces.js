var spaceSelections = $('#spaces [type=checkbox]');

var prefixSpacesTo = $('#prefixing');
var copyOtherSpacesTo = $('#commSpaces');
var otherSpacesTo = $('#otherSpaces');
var copyOtherSpacesFrom = $('#otherSpaceText');
var otherCheckbox = $('#otherSpace');
var onlineChoices = $('#spaces .onlineSpacesOnly input[type=checkbox]');
var offlineChoices = $('#spaces .offlineSpacesOnly input[type=checkbox]')
var selectedSpaces;

// empty the array from last time
selectedSpaces = [];

// uncheck any from last time
$('#spaces input:checkbox:checked').each(function() {
  var $input = $(this);
  if ($input.prop('checked')) {
    $input.prop('checked', false);
  }
});

$(copyOtherSpacesFrom).keyup(function() {
  otherSpacesTo.text(this.value);
});

// when a checkbox is clicked on
$('#spaces input[type=checkbox]').click(function() {
  var clickedCheckbox = this;
  var clickedValue = this.value;
  if ($(copyOtherSpacesTo).text('')) {
    $('#prefixing').show();
  }
  // if space is Other
  if (clickedValue == 'other') {
    if ($(otherCheckbox).is(':checked')) {
      $(copyOtherSpacesFrom).prop('disabled', false);
    } else if ($(otherCheckbox).not(':checked')) {
      $(copyOtherSpacesFrom).prop('disabled', true);
      $('#otherSpaces').text('');
    }
  } else {
    if ($('body').hasClass('onlineUsage')) {
      matchSpaces(onlineChoices,clickedValue,clickedCheckbox);
    }
    if ($('body').hasClass('offlineUsage')) {
      matchSpaces(offlineChoices,clickedValue,clickedCheckbox);
    }
  }
});
