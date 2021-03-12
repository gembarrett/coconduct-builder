templates.intro = function(data){
  var text = ros[0];
  var buttons = text.buttons;
  var spacenames = ['BestConf 8', 'Cool UnConf', 'awesome-tool', 'Techies With Pets', 'JS Enbies', 'Beer & Bits'];
  var rand = Math.floor((Math.random() * spacenames.length-1) + 1);
  var content = `
    <div id="intro" class="nav-start contain">
      <div class="platform">
        <h1>`+text.head+`</h1>
        <h2>`+text.subhead+`</h2>
        <div class="btn-wrap wrap-c">
          <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" title="Great Project Name!" name="home-q1-el" placeholder="`+spacenames[rand]+`">
          <div class="btns">
            <div class="btn"><button class="btn btn-prim" id="submit-home-event" onclick="signPosts('ev', 'h')">`+buttons[0].name+`</button><p>`+buttons[0].desc+`</p></div>
            <div class="btn"><button class="btn btn-seco" id="submit-home-project" onclick="signPosts('pr', 'h')">`+buttons[1].name+`</button><p>`+buttons[1].desc+`</p></div>
          </div>
        </div>
      </div>
    </div>
    `;
    return content;
};
