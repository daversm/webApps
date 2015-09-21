$('.permTry').hide();

$('.permInfo .permButtons, .permTry .permButtons').on('click',
    function(){
      $('#comboOut').empty();
      $('.permInfo, .permTry').toggle()
      
    }
);
