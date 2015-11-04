var spaceSelections = $('#spaces [type=checkbox]');

var prefixSpaces = 'including: ' + '<ul>';
var copyOtherSpacesTo = $('#commSpaces');
var copyOtherSpacesFrom = $('#otherSpaceText');
var otherCheckbox = $('#otherSpace');

// on load: if Other checkbox is unchecked then disable #otherSpace
if ($(otherCheckbox).is(':checked')) {
  console.log('checkbox is checked');
  $('#otherSpaceText').prop('disabled', false);
} else if ($(otherCheckbox).not(':checked')) {
  console.log('checkbox is not checked');
  $('#otherSpaceText').prop('disabled', true);
}

// when a checkbox is clicked on
$('#spaces input[type=checkbox]').click(function() {
  if ($(otherCheckbox).is(':checked')) {
    console.log('checkbox is checked');
    $(otherSpaceText).prop('disabled', false);
  } else if ($(otherCheckbox).not(':checked')) {
    console.log('checkbox is not checked');
    $(otherSpaceText).prop('disabled', true);
  }

  // if ($(otherCheckbox).is(':checked')) {
  //   console.log('test');
  //   $('#otherSpaceText').prop('disabled', false);
  // }
// if it's Other
//   if (this.value == 'Other') {
//
// //  and if the box is already checked
//     if ($(otherCheckbox).is(':checked')) {
//       console.log('test');
// //    uncheck the box
//       // $(otherCheckbox).prop('checked',false);
// //    disable #otherSpace
// //    remove #otherSpace text from the preview
//
//     } else {
//       $(otherCheckbox).prop('checked',true);
//       //    check the box
//       //    enable #otherSpace
//       //    add #otherSpace text to the preview
//     }
// // else
// //  if the box is already checked
// //    uncheck the box
// //    remove the value text from the preview
// //  else
// //    check the box
// //    add the value text to the preview
// }
});

// $('#spaces input[type=checkbox]').click(function() {
//   console.log(this.value);
//   if (this.value == 'Other') {
//     if ($('input[type=checkbox][value=\'Other\']').prop('checked',true)) {
//       console.log(this + 'already checked');
//     } else {
//       copyOtherSpacesFrom.prop('disabled', true);
//     }
//     copyOtherSpacesFrom.prop('disabled', false);
//     $(copyOtherSpacesFrom).keyup(function() {
//       copyOtherSpacesTo.text(prefixSpaces + this.value);
//     });
//     copyOtherSpacesTo.text($(prefixSpaces + 'input:checked').val())
//   }
// });