$('#additionalSpaces button').click(function(){
  $clickedID = $(this).attr('id');
  $(this).toggleClass('selected');
  if ($clickedID == 'additionalSpaceRulesYes') {
    // if (additionalSpaceRulesYes) {
      console.log(additionalSpaceRulesYes);
    // }
    additionalSpaces = true;
  } else {
    additionalSpaces = false;
  }
});
