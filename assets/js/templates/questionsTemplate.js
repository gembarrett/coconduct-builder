templates.questionsTemplate = function(data, params){
  // if there's a snapshot url then build the currentState array
  if (params){
    // get the answer groups
    var snapQs = params[0].split("_");
    var count = 0;
    // for each answer group
    for (var s = 0; s < snapQs.length; s++){
      snapQ = snapQs[s].split("-")[0];
      snapA = snapQs[s].split("-")[1];
      // if there's multiple answers for this question
      if (snapA.length > 1){
        snapA = snapA.split("");
        for (var a = 0; a < snapA.length; a++){
          // get each answer and add it to the currentState array
          currentState.answers[count] = {
            q:snapQ,
            a:snapA[a]
          }
          count++;
        }
      } else {
        // if there's just one (radio) then add that answer
        currentState.answers[count] = {
          q:snapQ,
          a:snapA
        }
        count++;

      }
    }
  }
  // build the page elements
  var content = `
      <div class="qContainer contain"><progress max="`+questionsList.length+`" value="0"></progress>`;

  for(var i = 0; i < questionsList.length; i++) {
      var question = data[i];

      // create the start of the form
      content += `<form id="`+question.id+ `" class="questionContent`+ (question.id !== 'q0' ? '">' : ' current">');
      // if it's a question
      if (question.isQ) {
        var panel = "";
        if (question.tips[0].relevance) {
          panel += '<div><span class="fas fa-user-circle"></span><p>' + question.tips[0].relevance + '</p></div>';
        }
        if (question.tips[1].meaning) {
          panel += '<div><span class="fas fa-question-circle"></span><p>' + question.tips[1].meaning + '</p></div>';
        }
        if (question.tips[2].implementation) {
          panel += '<div><span class="fas fa-clipboard-list"></span><p>' + question.tips[2].implementation + '</p></div>';
        }
        if (question.tips[3].more) {
          panel += '<div><span class="fas fa-search"></span><p>| ';
          for (var s = 0; s < question.tips[3].more.length; s++){
            more = encodeURIComponent(question.tips[3].more[s]);
            panel += '<a href="https://duckduckgo.com/?q='+more+'" target="_blank" title="Research '+question.tips[3].more[s]+' on DuckDuckGo">'+question.tips[3].more[s]+'</a> | ';
          }
          panel += '</p></div>';
        }
        // add the question
        content += '<details class="question-panel"><summary title="Click or press Space (while focused) to view more information"><h2>' + question.q + '</h2></summary>';
        // if the panel content exists add it
        content += panel !== "" ? panel+'</details>' : '<br />';

        content += '<div class="answers-container">';

        // add the answers
        for (var j = 0; j < question.answers.length; j++){
           // premake the id and name
           thisID = 'id="' +question.id+ "-"+ j+ '-answer"';
           thisName = 'name="' +question.id+  '-el"';
           required = question.required ? "required" : "";
           // if there's a placeholder then grab it
           if (question.answers[j].placeholder) {
             thisPlaceholder = 'placeholder="' + question.answers[j].placeholder + '"';
           }
           // if this is an input field then create the label
           if (question.answers[j].type !== 'textarea') {
             thisLabel = '<label for="' +question.id+ "-"+ j+ '-answer"';
             if (question.answers[j].type === 'radio'){
               thisLabel += question.answers[j].editable ? ' class="btn-edit" contenteditable="true" title="Click or press S to select this editable option, or arrow keys to choose another">' : ' title="Click or press S to select this option">';
             } else {
               thisLabel += question.answers[j].editable ? ' class="btn-edit" contenteditable="true" title="Click or press S to select this editable option">' : ' title="Click or press S to select this option">';
             }
             thisLabel += question.answers[j].answerText+ '</label>';
           }
           // start the form
           content += '<div class="form-el type-'+question.answers[j].type+'">';

           // if there's a textarea
           if (question.answers[j].type === 'textarea') {
             content += '<textarea ' +thisID+thisName+thisPlaceholder+ ' class="incidentBox" '+required+' title="'+question.answers[j].placeholder+'"></textarea>';
           }

           // if there's a textbox
           else if (question.answers[j].type === 'text') {
             content += thisLabel + '<input type="' +question.answers[j].type+ '"' +thisID+thisName+thisPlaceholder+required+ ' title="'+question.answers[j].placeholder+'">';
           }

           // if there's a radio or checkbox, check if there's an answer already that can be prepopulated
           else {
             // find a match for this question and answer object
             var qMatch = currentState.answers.filter(o => (o.q === question.id.split('q')[1] && o.a === String(j)));

             // if there's a previous answer for this
             if ((qMatch !== 'undefined' && qMatch.length > 0)){
               // add a checked element
               content += '<input type="' +question.answers[j].type+ '"' +thisID+thisName+required+ ' checked="true">' + thisLabel;
             } else {
               // otherwise make an unchecked one
               content += '<input type="' +question.answers[j].type+ '"' +thisID+thisName+required+ '>' + thisLabel;
             }
           }
           // end the form
           content += '</div>';
         }
      } else if (question.id === "q0") {
        // if it's the first question, lay out the content a bit differently
        for (var k = 0; k < question.contentArray.length; k++){
          content += `<div class="window pink-border-glow"><h3>`+question.contentArray[k].title+`</h3><p>`+question.contentArray[k].text+`</p></div>`;
        }
      } else if (question.id === ("q"+(questionsList.length-1))){
        // call a function to deal with this
        content += buildSubPolicies(question);
      } else {
        // add the title and paragraphs
        content += '<h1>' + question.title + '</h1>';
        content = formatArray(question.contentArray, content);
      }
      // if its the first question
      // no closing div, just closing form
      content += question.isQ ? '</div></form>' : '</form>';
  }
  pause = '<div><button title="Click to get a snapshot link you can use to finish this process later. Using this link will pre-select your current answers. Note that no text answers are included in the snapshot" id="snapshotPolicy" disabled class="btn btn-tert" title="Click or press U to get a URL for returning to this process later">Get snapshot</button><div id="snapshotGroup" class="hidden"><div><input id="snapshotLink" type="text" readonly value="No snapshot available"><i title="Click to copy this snapshot link" id="copyBtn" class="fas fa-copy"></i></div><p>Need to pause this process? Use your snapshot link to pre-select your answers on your return. Note that no text entries are included in this snapshot, and this link is not stored.</p></div></div>';
  content += '<div class="btn-wrap wrap-r">'+pause+'<div><button disabled id="previewPolicy" class="previewButton btn btn-seco" title="Click or press P to view your policy preview">Preview</button><button id="submitAnswers" onclick="handleSubmit()" class="nextButton btn btn-prim" title="Click or press Enter to go to the next question">Got it!</button></div></div></div>';
  return content;
};
