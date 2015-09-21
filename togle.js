$('.comboTry').hide();
$('.permTry').hide();


$('.permInfo .permButtons, .permTry .backButton').on('click',
    function(){
      $('.permOut').empty();
      $('.permInfo, .permTry').toggle()
    }
);

$('.comboInfo .permButtons, .comboTry .backButton').on('click',
    function(){

      $('.comboOut').empty();
      $('.comboInfo, .comboTry').toggle()
    }
);
