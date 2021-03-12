templates.homeSection = function(data){
  var text = data[0];
  var list = "";
  var links = "";
  // if there's a list
  if (text.list !== ""){
    list += `<`+text.list[0].type+`>`;
    // get each list item
    for (var i = 0; i<text.list[0].content.length; i++){
      list += `<li>`+text.list[0].content[i]+`</li>`;
    }
    list += `</`+text.list[0].type+`>`;
  }
  if (text.links.length > 0){
    var resources = text.links;
    for (var r = 0; r < resources.length; r++){
      links += `<a href="`+resources[r].url+`" target="_blank" class="btn btn-seco" title="Get more info about `+resources[r].name+`">`+resources[r].name+`</a>`;
    }
  }

  var content = `
  <div class="window">
    <h3>`+text.head+`</h3>
    <div class="homeSectionOverview"><p>`+text.subhead+`</p>`
    +list+text.more+links+`</div></div>`;

  return content;
};
