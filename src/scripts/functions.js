function getBasicInfo() {
  communityName = $('#communityName').val();
  coconductUrl = $('#coconducturl').val();
}
function canProceed() {
  if ($('body').hasClass('offlineUsage') || $('body').hasClass('onlineUsage')) {
    $('#next').prop('disabled',false);
    return true;
  } else {
    $('#next').prop('disabled',true);
    return false;
  }
}
function onAndOffline() {
  if (offlineSpace && onlineSpace) {
    onAndOfflineSpace = true;
  }
}

// if section is for offline community spaces only, hide unless offline was selected earlier
function isOffline() {
  if (!offlineSpace) {
    if (section == 10) {
      section = section + 2;
    }
    else {
      section++;
    }
  }
}

// TODO: refactor using class on sections and change to switch statement
function sectionHasRequiredChanges() {
  if (section == 2 || section == 3 || section == 4 || section == 5 || section == 6 || section == 7 || section == 13) {
    console.log("no change required", section);
    $('#next').prop('disabled',false);
  } else if (section == 0 ) {
    console.log("at least one button must be selected", section);
  } else if (section == 1 || section == 8 || section == 9) {
    console.log("there must be text inside all inputs");
  } else if (section == 10 || section == 11 || section == 12) {
    console.log("at least one checkbox plus inputs required");
  }
  // console.log($.inArray(thisSection, sections));
}

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
        $(copyOtherSpacesTo).text(selectedSpaces);
      } else {
        // double check the item you're unchecking is in the array
        var index = $.inArray(value, selectedSpaces);
        // remove the value from the list of selected spaces
        if(index != -1) {
          selectedSpaces.splice(index, 1);
          if (selectedSpaces.length < 1) {
            $('#prefixing').hide();
          }
          // update text
          $(copyOtherSpacesTo).text(selectedSpaces);
        }
      }
    }
  }
}

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