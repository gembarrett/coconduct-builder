// disable text field of Yes radio button when no is selected
// when yes is selected, enable the text field
// copy content entered into that text field over to the span in the preview
// if no is selected again, hide the span in the preview and disable the text field again




// $('#yesAdditional').prop('checked').click(){
//   console.log('yes changed');
// };
// $('#noAdditional').prop('checked').click(){
//   console.log('no changed');
// };
//
// if ($('#noAdditional').prop('checked', true)) {
//   $('#otherAdditional').prop('disabled', true);
// } else {
//   $('#otherAdditional').prop('disabled', false);
// }

// what this SHOULD do is automagically check the Yes radio button when user starts typing
// $('#otherAdditional').val('').change(function(){
//   $('#yesAdditional').prop('checked', true);
// });

var $yesAdditional = $('#yesAdditional');
var $noAdditional = $('#noAdditional');
var $copyAddPeepsTo = $('#people .output #additional');
var $copyAddPeeps = $('#otherAdditional');
var $prefixPeeps = 'We will also support the following groups of people in whatever way is needed: ';

$($copyAddPeeps).keyup(function() {
  // if (!($copyAddPeeps).val('')) {
  $copyAddPeepsTo.text($prefixPeeps + this.value + '. ');
  // }
});

$yesAdditional.click(function(){
    $('#otherAdditional').prop('disabled', false);
});

$noAdditional.click(function(){
    $('#otherAdditional').prop('disabled', true);
    $copyAddPeepsTo.text('');
});

//   };
// } else if ($('#noAdditional').prop('checked', true)) {
//   $('#next').prop('disabled',false);
// }

// function disableTextField() {
//
// }