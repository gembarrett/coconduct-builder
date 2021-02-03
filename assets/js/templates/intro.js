templates.intro = function(data){
  var text = ros[0];
  var content = `
    <div id="intro" class="nav-start contain">
      <div id="logoContainer">
        <h1>`+text.head+`</h1>
      </div>
      <h2>`+text.subhead+`</h2>
      <div class="btn-wrap wrap-c">
        <label for="home-q1-0-answer"></label><input type="text" id="home-q1-0-answer" title="Great Project Name!" name="home-q1-el" placeholder="Great Project Name">
        <div class="btns">
          <button class="btn btn-prim" id="submit-home-event" onclick="signPosts('ev')">Event</button>
          <button class="btn btn-seco" id="submit-home-project" onclick="signPosts('pr')">Project</button>
        </div>
        </div>
      </div>
    </div>
    `;
    return content;
};
