var spaceSelections = $('#spaces [type=checkbox]');

var prefixSpacesTo = $('#prefixing');
var copyOtherSpacesTo = $('#commSpaces');
var otherSpacesTo = $('#otherSpaces');
var copyOtherSpacesFrom = $('#otherSpaceText');
var otherCheckbox = $('#otherSpace');
var onlineChoices = $('#spaces #onlineSpaces input[type=checkbox]');
var offlineChoices = $('#spaces #offlineSpaces input[type=checkbox]')
var selectedSpaces = [];

// if any checkboxes are checked
if ($('#spaces input:checkbox:checked').length) {
  // if Other checkbox is checked
  if ($(otherCheckbox).is(':checked')) {
    // enable the text box
    $(copyOtherSpacesFrom).prop('disabled', false);
  } else {
    // disable the text box
    $(copyOtherSpacesFrom).prop('disabled', true);
  }
} else {
  $('#prefixing').hide();
}


$(copyOtherSpacesFrom).keyup(function() {
  otherSpacesTo.text(this.value);
});

function matchSpaces(array, value, box) {
  for (var i=0; i < array.length; i++) {
    if (value == array[i].value){
      // if you are checking the box
      if ($(box).is(':checked')) {
        // add the value to the list of selected spaces
        selectedSpaces.push(array[i].value);
      } else {
        // assuming
        var index = $.inArray(value, selectedSpaces);
        // remove the value from the list of selected spaces
        if(index != -1) {
          selectedSpaces.splice(index, 1);
          // update text

        }
      }
    }
  }
}

// when a checkbox is clicked on
$('#spaces input[type=checkbox]').click(function() {
  var clickedCheckbox = this;
  var clickedValue = this.value;

  // if space is Other
  if (clickedValue == 'Other') {
    if ($(otherCheckbox).is(':checked')) {
      $(copyOtherSpacesFrom).prop('disabled', false);
    } else if ($(otherCheckbox).not(':checked')) {
      $(copyOtherSpacesFrom).prop('disabled', true);
      $(otherSpacesTo).text('');
    }
  } else {
    if ($('body').hasClass('onlineUsage')) {
      matchSpaces(onlineChoices,clickedValue,clickedCheckbox)
    }
    if ($('body').hasClass('offlineUsage')) {
      matchSpaces(offlineChoices,clickedValue,clickedCheckbox)
    }
  }

// else
//  if the box is already checked
//    uncheck the box
//    remove the value text from the preview
//  else
//    check the box
//    add the value text to the preview
// }
});
