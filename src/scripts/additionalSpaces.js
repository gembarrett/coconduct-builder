$('#noAdditionalSpaces').prop('checked', true);

$('#additionalSpaces label').click(function(){
  var $selected = $("#"+$(this).attr("for"));
  $selected.prop('checked',true);
  this.classList.toggle('selected');
});