if (additionalSpaces == true) {
  additionalSpaceRules = 'Some spaces may have additional rules in place, which will be made clearly available to participants. Participants are responsible for knowing and abiding by these rules.';
}

$('#outputCoC').click(function() {
  $('#popover, #CoCWindow').show();
  document.getElementById("copyableCoC").value == '';
  getCodeOfConduct();
});

$('#close, #popover').click(function() {
  $('#popover, #CoCWindow').hide();
});

