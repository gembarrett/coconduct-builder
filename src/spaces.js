var spaceSelections = $('#spaces [type=checkbox]');

var prefixSpacesTo = $('#prefixing');
var copyOtherSpacesTo = $('#commSpaces');
var otherSpacesTo = $('#otherSpaces');
var copyOtherSpacesFrom = $('#otherSpaceText');
var otherCheckbox = $('#otherSpace');
var onlineChoices = $('#spaces #onlineSpaces input[type=checkbox]');
var offlineChoices = $('#spaces #offlineSpaces input[type=checkbox]')
var selectedSpaces = [];

// push any pre-checked boxes to the array
$('#spaces input:checkbox:checked').each(function() {
  console.log(this.value);
  if (this.value != 'other') {
    selectedSpaces.push(this.value);
  } else {
    otherSpacesTo.text(copyOtherSpacesFrom.value);
  }
  $('#commSpaces').text(selectedSpaces);
});

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
  // for every item in the on or offline array
  for (var i=0; i < array.length; i++) {
    // compare elements and if found
    if (value == array[i].value){
      // and if you are checking the box
      if ($(box).is(':checked')) {
        // add the value to the list of selected spaces
        selectedSpaces.push(array[i].value);
        // update text
        $('#commSpaces').text(selectedSpaces);
      } else {
        // double check the item you're unchecking is in the array
        var index = $.inArray(value, selectedSpaces);
        // remove the value from the list of selected spaces
        if(index != -1) {
          selectedSpaces.splice(index, 1);
          // update text
          $('#commSpaces').text(selectedSpaces);
        }
      }
    }
  }
}

// when a checkbox is clicked on
$('#spaces input[type=checkbox]').click(function() {
  var clickedCheckbox = this;
  var clickedValue = this.value;
  if ($('#commSpaces').text('')) {
    $('#prefixing').show();
  }
  // if space is Other
  if (clickedValue == 'other') {
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
});
