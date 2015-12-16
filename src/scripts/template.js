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

function getCodeOfConduct() {
  var codeOfConductUrl = document.getElementById("coconducturl").value;
  if (codeOfConductUrl == '') {
    codeOfConductUrl = 'the event website';
  }

  if (offlineSpace) {
    eventType = 'offline event';
  } else if (onlineSpace) {
    eventType = 'online community';
  } else {
    eventType = 'on or offline community';
  }

  var additionalConcerns = document.getElementById('otherAdditional').value;
  var shortVersion = 'Short version: ' + communityName + ' is dedicated to a harassment-free conference experience for everyone. Our anti-harassment policy can be found at: ' + codeOfConductUrl;
  var mediumVersion = 'Medium version: ' + communityName + ' is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion ' + additionalConcerns + '. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any ' + eventType + ' venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the ' + eventType + ' [without a refund] at the discretion of the conference organizers. Our anti-harassment policy can be found at: ' + codeOfConductUrl;

  document.getElementById("copyableCoC").value = shortVersion + '\n\n' + mediumVersion;
}