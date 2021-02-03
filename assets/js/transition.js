function getNameFromHome(type){
  // find the input field
  var homeOrgName = document.getElementById('home-q1-0-answer');
  // if there's an Org Name entered
  if (homeOrgName.value !== ""){
    // collect the name and store it in a variable
    homeName = homeOrgName.value;
    // go to #build
    window.location.href="/#build";
  } else {
    console.log('No organization name provided');
  }
}

function checkForName() {
  // if there's a name been entered previously
  if (homeName !== ""){
    // autofill q1 input field with the variable
    var orgNameInput = document.querySelectorAll('#q1-0-answer');
    orgNameInput[0].value = homeName;
    // document.getElementById('q1').classList.add('editable');
    // currentState.questionC++;
    // currentState.questionQ++;
    // currentState.questionP++;
    // moveForward(1);
    // nextQuestion();
  } else {
    console.log('No organization name stored');
  }
}

function signPosts(type) {
  if (type === 'ev'){
    currentState.exclusions = [3,8];
    getNameFromHome();
  } else {
    currentState.exclusions = [2,4,6];
    getNameFromHome()
  }
}
