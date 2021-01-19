function copyUrl(){
  try {
    // does copy work here?
    if (document.queryCommandSupported('copy')) {
      var copyText = document.querySelector('#snapshotLink');
      copyText.select();
      document.execCommand('copy');
    } else {
      window.alert('Sorry, SOAP can\'t access your clipboard right now');
    }
  } catch (error){
    console.log(error);
  }
}

function getSnapshotURL(){
  // var snapshotUrl = "https://usesoap.app/#b";
  var snapshotUrl = thisEnv+"/#b-"+soapv+"-p";
  var qNo = "0";
  for (var i = 0; i < currentState.answers.length; i++){
    // if we're on the same question
    if (qNo === currentState.answers[i].q){
      // add the a value to rest of that answer group
      snapshotUrl += currentState.answers[i].a;
    } else if (isCheckableQ(parseInt(currentState.answers[i].q))) {
      // get the new question number
      qNo = currentState.answers[i].q;
      // start new answer group, format appropriately if it's the first answer
      snapshotUrl += snapshotUrl[snapshotUrl.length - 1] === "p" ? "?" : "_";
      // add the question number and first answer for that question
      snapshotUrl += qNo + "-" + currentState.answers[i].a;
    } else {
      // tell the user why they're not getting what they expect
      console.log('either no answers or no questions');
    }
  }
  // get the input box and update the value
  document.querySelector('#snapshotLink').value = snapshotUrl;
  // show the link
  document.querySelector('#snapshotGroup').classList.remove('hidden');
}

function isCheckableQ(q){
  var btnsArr = [2, 3, 5, 6, 7, 8, 10, 11, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30, 31, 32, 36, 37, 38, 40, 41, 44, 45, 46, 47];
  return btnsArr.includes(q) ? true : false;
}
