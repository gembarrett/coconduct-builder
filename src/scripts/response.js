$('#responseTeamName').val('').change(function(){
  $('#next').prop('disabled',false);
});
var $copyResponseTeamTo = $('.output .responseTeamName');
var $copyResponseTeamFrom = $('#responseTeamName');

$($copyResponseTeamFrom).keyup(function() {
  $copyResponseTeamTo.text(this.value);
});

$('#anonResponseURL').val('').change(function(){
  $('#next').prop('disabled',false);
});
var $copyResponseURLTo = $('.output .anonResponseURL');
var $copyResponseURLFrom = $('#anonResponseURL');

$($copyResponseURLFrom).keyup(function() {
  $copyResponseURLTo.text(this.value);
});