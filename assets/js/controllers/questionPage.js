controllers.questionPage = function(data, params){
  // add class to body to change nav-start/scroll
  document.querySelector('body').classList.add('buildPage');
  var templateContext = [];
  window.scrollTo(0,0);
  // queue up all the questions in this section
  // for each of the sections
  for (var i = 0; i < sections.length; i++){
    // get each of the questions
    for (var j = 0; j < sections[i].length; j++){
      var el = sections[i][j];
      if (el.isQuestion === true) {
        var item = {
          'q': el.q,
          'answers': el.answers,
          'id': el.id,
          'spaces':el.spaces,
          'tips': el.tips,
          'isQ':true,
          'required': el.required
        };
      } else if (el.id === 'q0'){
        var item = {
          'id':el.id,
          'title':el.title,
          'contentArray': el.steps,
        };
      } else {
        var item = {
          'id':el.id,
          'title':el.title,
          'contentArray': el.paragraph,
        };
      }
      templateContext.push(item);
    }
  }

  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(templateContext, params);
  utils.render('page', questionContainer);
};
