templates.intro = function(data){
  var text = ros[0];
  var buttons = text.buttons;
  // for (var i=0; i<buttons.length;buttons++){
  //   buttons += buttons.
  // }
  var content = `
    <div id="intro" class="nav-start contain">
      <h1>`+text.head+`</h1>
      <h2>`+text.subhead+`</h2>
      <div class="btn-wrap wrap-c">
        <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" title="Great Project Name!" name="home-q1-el" placeholder="Great Project Name">
        <div class="btns">
          <div><button class="btn btn-prim" id="submit-home-event" onclick="signPosts('ev')">`+buttons[0].name+`</button><p>`+buttons[0].desc+`</p></div>
          <div><button class="btn btn-seco" id="submit-home-project" onclick="signPosts('pr')">`+buttons[1].name+`</button><p>`+buttons[1].desc+`</p></div>
        </div>
        </div>
      </div>
    </div>
    `;
    return content;
};
