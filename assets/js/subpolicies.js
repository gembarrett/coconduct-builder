function buildSubPolicies(data){
  layout = `<details class="question-panel">
            <summary><h2>`+data.q+`</h2></summary>`;
  // add each of the description paragraphs
  for (var p = 0; p < data.desc.length; p++){
    layout += `<p>`+data.desc[p]+`</p>`;
  }
  layout += `</details><div id="teamContentCols"><div id="teams">`;
  // add each of the default teams
  // TODO: change this from e to avoid confusion
  for (var e = 0; e < data.teams.length; e++){
      layout += `<div class="form-el type-radio">`;
      layout += e === 0 ? `<input type="radio" checked="true" id="`+data.id+`-0`+e+`-answer" name="`+data.id+`-el">` : `<input type="radio" id="`+data.id+`-0`+e+`-answer" name="`+data.id+`-el">`;
      layout += `<label for="`+data.id+`-0`+e+`-answer" contenteditable="true" class="btn-edit">`+data.teams[e].name+`</label></div>`;
  }
  layout += `<button id="`+data.id+`-addTeam" class="btn btn-seco">+ add team (up to 10)</button></div><div id="policyAreas">`;
  // add all of the content areas
  for (var t = 0; t < data.areas.length; t++){
    layout += `<div class="form-el type-checkbox">
      <input type="checkbox" id="`+data.id+`-1`+t+`-answer" name="`+data.id+`-el">
      <label for="`+data.id+`-1`+t+`-answer">`+data.areas[t].name+` <span>`+data.areas[t].desc+`</span></label></div>`;
  }
  // close the columns and add the summary
  layout += `</div></div>
  <details id="expectedOutput">
    <summary>Your policy package:</summary>
    <ul><li>Organizational Security Policy (full version)</li>
    <li>Appendix (inc. tips, links and Everyday Practices document)</li>
    </ul></details>`;

  // return the complete page
  return layout;
}

function addTeam(e){
  // get the id of this last question
  lastQid = e.target.id.split('-')[0];
  // count the number of input-label pairs in the teams column
  allEls = document.querySelectorAll('#teams input');
  // if it won't exceed the maximum
  if (allEls.length < 10){
    // build another team element
    thingToAdd = `<div class="form-el type-radio">
          <input type="radio" id="`+lastQid+`-0`+allEls.length+`-answer" name="`+lastQid+`-el">
          <label for="`+lastQid+`-0`+allEls.length+`-answer" contenteditable="true" class="btn-edit">New team</label>
        </div>`;
    // then add it to the screen
    e.target.insertAdjacentHTML('beforebegin', thingToAdd);
    // add this team to teamContent
    teamContent.push({
      "tId" : lastQid+`-0`+allEls.length+`-answer`,
      "name": "New team",
      "areas": [],
      "output": ""
    });

    // store the currently selected things
    // get the currently selected team
    // find it in the array
    // compare the stored areas with these selections
    // if they're the same, do nothing
    // else replace the stored values with the selections

    // then clear all those selections
    // and select the thingToAdd team

    // don't do any other buttony stuff
    e.preventDefault();
  } else {
    // if it's more than 10, do nothing (maybe show error text)
    // don't do any other buttony stuff
    e.preventDefault();
  }

}

// TODO change the data references to something based on what can be grabbed from the e values
function updateTeams(e){
  // use teamContent to store the pairs as array of objects
  var areaTitles = ["device", "communications", "accounts", "travel", "environmental", "network"];

  // if user clicked a team and its now checked
  if ((e.target.type === "radio") && (e.target.checked)){

    // clear selections and load the team-specific ones
    // get all the areas
    allAreas = document.querySelectorAll('#policyAreas input');
    // for each area
    for (var aa = 0; aa < allAreas.length; aa++){
      // get the position number of that input
      thisEl = allAreas[aa].id.split('-')[1].split('')[1];
      // and the position number of that team
      thisT = e.target.id.split('-')[1].split('')[1];
      // if it's in the areas array then check it
      if (teamContent[parseInt(thisT)].areas.includes(parseInt(thisEl))){
        allAreas[aa].checked = true;
      } else {
        // otherwise deselect
        allAreas[aa].checked = false;
      }
    }
    // compare label to what's stored and replace if necessary
    // TODO: pick up the name on blur
    teamContent[parseInt(thisT)].name = e.target.labels[0].textContent !== teamContent[parseInt(thisT)].name ? e.target.labels[0].textContent : teamContent[parseInt(thisT)].name;

  } else if (e.target.type === "checkbox"){   // if user clicked a content area
    // which team is selected
    thisTeam = document.querySelector('#teams input:checked'); // returns a radio button
    // get all selected areas
    theseAreas = document.querySelectorAll('#policyAreas input:checked'); // returns multiple checkboxes
    areaRefs = [];

    // for each of the elements, get the id, then split it down to single figure
    for (var ta = 0; ta < theseAreas.length; ta++){
      areaRefs[ta] = parseInt(theseAreas[ta].id.split('-')[1].split('')[1]);
    }

    // for each of the stored teams
    for (var tc = 0; tc < teamContent.length; tc++){

      // check the id against currently selected team
      if (teamContent[tc].tId === thisTeam.id){
        // update the stored name if needs be
        teamContent[tc].name = thisTeam.labels[0].textContent;
        // update the stored values if needed
        teamContent[tc].areas = areaRefs;
        teamContent[tc].output = teamContent[tc].name +" policy (inc. ";

        // concatenate the area titles
        for (var at=0; at<teamContent[tc].areas.length; at++){

          // if there's just one area
          if (teamContent[tc].areas.length === 1){
            // just add the area name and a space
            teamContent[tc].output += areaTitles[teamContent[tc].areas[at]] + " ";
          }
          else if ((at === teamContent[tc].areas.length-1) && (at > 0)){
            // if its the last area title being added, then include appropriate ending
            teamContent[tc].output += "and " + areaTitles[teamContent[tc].areas[at]];
          }
          else {
            // otherwise just separate the areas with a comma
            teamContent[tc].output += areaTitles[teamContent[tc].areas[at]] + ", ";
          }
        }

        teamContent[tc].output += " security)";
        // update the summary text
        updateSummary(teamContent[tc]);
        // then break the loop
        tc = teamContent.length;

      } else {
        // if it isn't a match then do nothing
        console.log('Not a match');
      }
    }
  } else {
    console.log(e.target);
  }
}

function updateSummary(el){
  // we are given a teamContent element
  // in the summary, is there an li with a matching id
  list = document.querySelectorAll('#expectedOutput ul li');
  itemID = el.tId+'-output';
  var found = false;
  // if there is a matching one
  for (var li = 0; li<list.length; li++){
    // does this list item match the element we've been given
    if (list[li].id === itemID){
      found = list[li];
      li = list.length;
    }
  }
  if (found){
    // if it does then should we update the innerText
    // are there no areas selected for this team
    if (el.areas.length === 0){
      // no selections, no policy - delete the element
      found.remove();
    } else {
      // update the text to describe all the areas
      found.innerText = el.output;
    }
  } else {
    // build the new list item for adding
    item = '<li id="'+itemID+'">'+el.output+'</li>';
    // add new summary text to the top of the list
    list[0].insertAdjacentHTML('beforebegin', item);
  }
}


function setUpTeamContent(){
  // get all the default teams on the page
  teams = document.querySelectorAll('#teams input');
  // for each of those defaults
  for (var a = 0; a < teams.length; a++){
    // store the id in the teamContent
    teamContent.push({
      "tId" : teams[a].id,
      "name" : "",
      "areas" : [],
      "output": ""
    });
  }
}
