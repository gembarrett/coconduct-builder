templates.homeSection = function(data){
  var text = data[0];
  var list = "";
  // if there's a list
  if (text.list !== ""){
    list += `<`+text.list[0].type+`>`;
    // get each list item
    for (var i = 0; i<text.list[0].content.length; i++){
      list += `<li>`+text.list[0].content[i]+`</li>`;
    }
    list += `</`+text.list[0].type+`>`;
  }
  var moreText = text.more.join('\n');
  var content = `
  <div class="window pink-border-glow">
    <h3>`+text.head+`</h3>
    <div class="homeSectionOverview"><p>`+text.subhead+`</p>`
    +list+
    `<details>
    <summary title="Click or press Space (while focused) to view more information">More</summary>
      <p>`+moreText+`</p>
    </details>
    </div>
  </div>`;
  return content;
};
