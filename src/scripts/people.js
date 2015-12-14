var $yesAdditional = $('#yesAdditional');
var $noAdditional = $('#noAdditional');
var $copyAddPeepsTo = $('#people .output #additional');
var $copyAddPeeps = $('#otherAdditional');
var $prefixPeeps = 'We will also support the following groups of people in whatever way is needed: ';
$noAdditional.prop('checked', true);

$($copyAddPeeps).keyup(function() {
  $copyAddPeepsTo.text($prefixPeeps + this.value + '. ');
});

$yesAdditional.click(function(){
    $copyAddPeeps.prop('disabled', false);
});

$noAdditional.click(function(){
    $copyAddPeeps.prop('disabled', true);
    $copyAddPeepsTo.text('');
});