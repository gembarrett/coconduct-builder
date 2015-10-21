$(document).ready(function() {
  var section = 0;
  var sections = $('.section');
  $(sections[section]).addClass('active');
  $('#next').prop('disabled',true);
  $('#next').click(function(){
    $(sections[section]).removeClass('active');
    section++;
    $(sections[section]).addClass('active');
    $('#next').prop('disabled',true);
  });
});