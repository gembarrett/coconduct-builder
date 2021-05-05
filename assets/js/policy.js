// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc = {
    plain: "",
    markdown: "",
    html: ""
  };
  // create the temporary values
  var tempPolicy = [];
  var tempGeneralA = [];
  var tempReviewA = [];
  var tempTipsA = [];

  var contextP = [];
  var purposeP = [];
  var reportP = [];
  var enforceP = [];

  // what is the first q in the answers array?
  var prevQ = 0;

  // for each of the answer references
  for (var i = 0; i < currentState.answers.length; i++){
    // get quick ref for answers
    aRef = currentState.answers[i].a;
    // get quick ref for question number
    qRef = currentState.answers[i].q;
    // set up question name
    var thisQ = 'q'+qRef;
    // search for the relevant data using the answer reference
    for (var j = 0; j < sections.length; j++){
      // store if the data is found
      var found = sections[j].find(ans => ans.id === thisQ);
      // if there's data
      if (found){
        switch (true) {
          // section 0
          case qRef < 15: // CHANGE THIS WHEN UPDATING QUESTION NUMBERS
            contextP = getPolicyContent(qRef, prevQ, aRef, contextP, found);
            break;
          // add case for teaming name & pos @ 9
          // section 1
          case qRef < 42:
            purposeP = getPolicyContent(qRef, prevQ, aRef, purposeP, found);
            break;
          // section 2
          case qRef < 52:
            reportP = getPolicyContent(qRef, prevQ, aRef, reportP, found);
            break;
          // section 3
          case qRef < 68:
            enforceP = getPolicyContent(qRef, prevQ, aRef, enforceP, found);
            break;
          default:
            console.log(qRef + ' not found');
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }

  doc.plain = 'Code of Conduct\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.markdown = '# Code of Conduct \n#### Created '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.html = '<!DOCTYPE html><html><head><title>Code of Conduct '+dateStamp()+'</title></head><body><h1>Code of Conduct</h1><h4>Created '+dateStamp()+'</h4><p>'+contextP.join('</p><p>')+'</p>';

  if (purposeP.length > 0){
    doc.plain += '\n\nThe purpose of this Code of Conduct\n' + purposeP.join('\n');
    doc.markdown += '\n\n### The purpose of this policy \n' + purposeP.join('\n');
    doc.html += '<h3>The purpose of this Code of Conduct</h3><p>' + purposeP.join('</p><p>')+'</p>';
  }
  if (reportP.length > 0){
    doc.plain += '\n\nReporting a problem\n' + reportP.join('\n');
    doc.markdown += '\n\n### Reporting a problem \n' + reportP.join('\n');
    doc.html += '<h3>Reporting a problem</h3><p>' + reportP.join('</p><p>')+'</p>';
  }
  if (enforceP.length > 0){
    doc.plain += '\n\nHow this will be enforced\n' + enforceP.join('\n\n');
    doc.markdown += '\n\n### How this will be enforced\n' + enforceP.join('\n\n');
    doc.html += '<h3>How this will be enforced</h3><p>' + enforceP.join('</p><p>')+'</p>';
  }

  doc.plain += '\n\nBuilt at CodeOfConduct.tools v.'+current;
  doc.markdown += '\n\n##### Built at CodeOfConduct.tools v.'+current;
  doc.html += '<h5>Built at CodeOfConduct.tools v. '+current+'</h5></body></html>';

  output = doc;
  return doc;
}


// function to replace temporary placeholder text in policy
function replaceStr(string) {
  var editedStr = string;
  // for each of the stored keys
  for (var key in dict){
    // if it's a list of things and the last item does not start with an " and "
    if ((Array.isArray(dict[key])) && (!dict[key][dict[key].length-1].startsWith(" and "))){
      last = dict[key][dict[key].length-1];
      // add "and" plus a full stop to the last item
      dict[key][dict[key].length-1] = "and " + last;
      // prepend each item in the array with a space
      for (var i = 0; i < dict[key].length; i++){
        dict[key][i] = " " + dict[key][i];
      }
    }
    var regexKey = key.replace('[', '\\[').replace(']', '\\]');
    var regex = new RegExp(regexKey, 'gi');
    // check if that key exists in the string and replace it with value from dict
    editedStr = editedStr.replace(regex, dict[key]);
  }
  // if string contains items that start [date+
  if (editedStr.match(/\[date\+[\.\d]+\]/g)){
    // grab all instances in this string
    dates = editedStr.match(/\[date\+[\.\d]+\]/g);
    // for each instance
    for (var d = 0; d < dates.length; d++){
      // take the number after the +
      num = dates[d].split('+');
      num = num[1].split(']');
      num = num[0];

      // get the current date
      start = new Date();
      // add the appropriate number of months/years to it
      start.setMonth(start.getMonth()+parseInt(num, 10));

      future = start.getDate();
      var options = {month:'long'};
      future += ' ' + new Intl.DateTimeFormat('en-UK', options).format(start);
      future += ' ' + start.getFullYear();

      // update the edited string
      editedStr = editedStr.replace(dates[d], future);
    }
  }
  return editedStr;
}

function dateStamp(){
  // get the current date
  var today = new Date();
  // start creating the date stamp
  var fullDate = today.getDate();
  var options = {month:'long'};
  fullDate += ' ' + new Intl.DateTimeFormat('en-UK', options).format(today);
  fullDate += ' ' + today.getFullYear();
  return fullDate; // is there a way to return date + 3 months (no day)?
}

function clearData(){
  currentState = null;
  dates  = null;
  dict = null;
  output = null;
  qRef = null;
  tmpContent = null;
  window.location.reload(true);
}


// function to download data to a file
function downloadPolicy(type, edit) {
  var data;
  // if we're looking to download an edited policy
  if (edit === true){
    // grab the edited textcontent
    var editedPolicy = document.querySelector('.policyHolder').value;
    // store it in data
    if (editedPolicy !== ""){
      data = editedPolicy;
    } else {
      data = output[type];
    }
  } else {
    // else grab the content from output as usual
    data = output[type];
  }

  var format = 'text/'+type;
  var filename = "SOAP-policy";
  if (type === 'markdown'){
    filename += '.md';
  } else if (type === 'plain'){
    filename += '.txt';
  } else {
    filename += '.'+type;
  }

  var file = makeFile(data, filename, format);

  if (window.navigator.msSaveOrOpenBlob){ // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  } else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 1000);
  }
}

function makeFile(d, n, f){
  try {
    return new File([d], n,{type: f});
  } catch (exception) {
    const blob = new Blob([d], {type: f, name: n});
    return blob;
  }
}

function getPolicyContent(question, previous, answer, policy, content){
  // if it's a new question and there's policyEntry
  if ((question !== previous) && (content.policyEntry !== "")) {
    // edit the policyEntry and push it to the policy
    thisContent = replaceStr(content.policyEntry);
    policy.push(thisContent);
  } else {
    console.log(question + ' is not a new question');
  }

  // TODO: add a case that deals with the first question
  // if q1 isn't answered then the next answered question is being skipped over because it's the same as previous
  // need to check (one-time) if the question is same as previous but has not been processed before

  // if the answer has a policyEntry
  if (content.answers[answer].policyEntry !== ""){
    // edit the policyEntry and push it to the policy
    thisContent = replaceStr(content.answers[answer].policyEntry);
    policy.push(thisContent);
  } else {
    console.log(question + ' does not have an answer-specific entry');
  }
  return policy;
}

function resetChanges(){
  // could also use textContent instead of output here
  document.querySelector('.policyHolder').value = output.plain;
}
