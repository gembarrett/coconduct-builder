controllers.policyPage = function(data, params){
  var policyContainer = templates.policyTemplate();
  utils.render('page', policyContainer);
};
