var utils = (function(){
  var extract_params = function(params_string){
      var params = {};
      var raw_params = params_string.split('&');

      var j = 0;
      for(var i = raw_params.length - 1; i >= 0; i--){
          var url_params = raw_params[i].split('=');
          if(url_params.length == 2){
              params[url_params[0]] = url_params[1];
          }
          else if(url_params.length == 1){
              params[j] = url_params[0];
              j += 1;
          }
          else{
              //param not readable. pass.
          }
      }

      return params;
  };

  return {
    router: function(route, data){
      route = route || location.hash.slice(1) || 'home';
      var temp = route.split('?');
      var route_split = temp.length;
      var function_to_invoke;
      if ((temp[0] === 'build') || (temp[0].startsWith('b'))) {
        function_to_invoke = 'questionsView';
      } else if (temp[0] === 'policy') {
        function_to_invoke = 'policyView';
      } else {
        function_to_invoke = temp[0] || false;
      }

      if(route_split > 1){
        var params = extract_params(temp[1]);
      }

      if(function_to_invoke){
        views[function_to_invoke](data, params);
      }
    },

    render: function(element_id, content){
        document.getElementById(element_id).innerHTML = content;
    },

  };

})();
