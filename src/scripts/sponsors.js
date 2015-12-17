var $default = document.getElementById('noSponsors');
$default.parentElement.classList.toggle('selected');

$('#sponsors label').click(function(){
  var $selected = $("#"+$(this).attr("for"));
  if ($(this).is(':checked')) {
    console.log('element is checked');
  }
  $selected.prop('checked',true);
  this.classList.toggle('selected');
  console.log("added selected class");
});