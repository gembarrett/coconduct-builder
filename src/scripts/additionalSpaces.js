var $default = document.getElementById('noAdditionalSpaces');
$default.parentElement.classList.toggle('selected');

$('#additionalSpaces label').click(function(){
  var $selected = $("#"+$(this).attr("for"));
  if ($(this).is(':checked')) {
    console.log('element is checked');
  }
  $selected.prop('checked',true);
  this.classList.toggle('selected');
});