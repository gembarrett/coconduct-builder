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

// if there's an ev/pr class on page then show Next button
function hasRoute(){
  if (document.querySelector('body').classList[0].length === 2){
    startQuestions();
  } else {
    // if there's no ev/pr class on page then show both buttons
  }
}
// when Next is clicked, if exclusions is 0 then use ev/pr class to populate that array
function prePopulateExc(){
  if ((currentState.questionQ === 'q0') && (currentState.exclusions.length === 0)){
    var route = document.querySelector('body').classList[0];
    if (route === 'ev'){
      currentState.exclusions = findQuestions("p", "m", "c");
    } else if (route === 'pr'){
      currentState.exclusions = findQuestions("e", "off", "on");
    } else {
      // if it just has the default class use the route defined by the button that was clicked
    }
  }
}

function signPosts(type,from) {
  // event
  if (type === 'ev'){
    document.querySelector('body').classList.add('ev');
    // if coming from home page
    if (from === 'h'){
      // grab the name
      getNameFromHome();
    } else { // if coming from build refresh
      // exclude these project questions
      var returned = findQuestions("p", "m", "c");
      currentState.exclusions = returned;
      startQuestions();
    }
  } else { // project
    document.querySelector('body').classList.add('pr');
    var returned = findQuestions("e", "off", "on");
    currentState.exclusions = returned;
    // if coming from home page
    if (from === 'h'){
      // grab the name
      getNameFromHome();
    } else { // if coming from build refresh
      startQuestions();
    }
  }
}

function compareNumbers(a, b) {
  return a - b;
}

// coming from home this is called before the questions are on the page, leading to both buttons showing, instead of Next
function findQuestions(space, space2, space3){
  sp = document.querySelectorAll("[data-spaces*='"+space+"']");
  all = Array.from(sp);

  sp = document.querySelectorAll("[data-spaces*='"+space2+"']");
  all = all.concat(Array.from(sp));

  sp = document.querySelectorAll("[data-spaces*='"+space3+"']");
  all = all.concat(Array.from(sp));

  itemIDs = [];

  all.forEach(item=>{

    spaces = item.dataset.spaces.split(',');

    // if there's two spaces mentioned
    if(spaces.length > 1){
      // if the first item is a match
        if ((spaces[0] === space || spaces[0] === space2 || spaces[0] === space3)&&(spaces[1] === space || spaces[1] === space2 || spaces[1] === space3)){
        // then check if the second item is a match too
            // if both spaces match the parameters then add to array
            hideThis = parseInt(item.id.split('q')[1]);
            itemIDs.push(hideThis);
        } else {
          console.log(item.id, spaces);
        }
    } else {
      hideThis = parseInt(item.id.split('q')[1]);
      itemIDs.push(hideThis);
    }
  });
  hideIDs = [...new Set(itemIDs)];
  return hideIDs;
}

// if we're at questions 2 or 3, use the answers to add to the exclusions list
function refineSpace(filter, filter2){
  // find the things with this filter
  sp1 = document.querySelectorAll("[data-spaces*='"+filter+"']");
  // create an array of things with that filter
  added = Array.from(sp1);

  filterIDs = [];
  added.forEach(item=>{
    hideThis = parseInt(item.id.split('q')[1]);
    filterIDs.push(hideThis);
  });
  hideIDs = [...new Set(filterIDs)];
  return hideIDs;
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
  // then click it - why?
  // next.click();
}
