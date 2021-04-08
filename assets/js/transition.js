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

// CHANGE THIS WHEN UPDATING QUESTION NUMBERS
// TODO: edit this so that exclusions list takes out only e-only or p-only area questions
function signPosts(type,from) {
  // event
  if (type === 'ev'){
    // exclude these project questions
    currentState.exclusions = [3, 15, 19, 24, 28];
    // if coming from home page
    if (from === 'h'){
      // grab the name
      getNameFromHome();
    } else { // if coming from build refresh
      startQuestions();
    }
  } else { // project
    currentState.exclusions = [2, 4, 5, 6, 11, 12, 14, 18, 21, 23, 27, 29];
    // if coming from home page
    if (from === 'h'){
      // grab the name
      getNameFromHome();
    } else { // if coming from build re
      startQuestions();
    }
  }
}

function startQuestions(){
  // if there are event/project buttons then hide them
  if (document.querySelectorAll('.routes')){
    routes = (document.querySelectorAll('.routes'));
    for (var r = 0; r<routes.length;r++){
      routes[r].remove();
    }
  }
  // show the submit button
  next = document.querySelector('#submitAnswers');
  next.classList.remove('hide');
  // then click it
  next.click();
}
