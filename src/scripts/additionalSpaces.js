$('#additionalSpaces button').click(function(){
  $clickedID = $(this).attr('id');
  this.parentElement.classList.toggle('selected');
  if ($clickedID == 'additionalSpaceRulesYes') {
    // if (additionalSpaceRulesYes) {
      console.log(additionalSpaceRulesYes);
    // }
    additionalSpaces = true;
  } else {
    additionalSpaces = false;
  }
});
