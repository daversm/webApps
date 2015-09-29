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

$('#me').on('click',
    function(){

      $('body').scrollTo('footer', {duration:500});
    }
);
$('#photography').on('click',
    function(){

      $('body').scrollTo('0%', {duration:500});
    }
);

$('#apps').on('click',
    function(){

      $('body').scrollTo($('#webAppsDiv').offset().top-52, {duration:500});
    }
);
