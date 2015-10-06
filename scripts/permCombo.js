
$('.permTryInputs .runButtons').on('click',
    function(){
        var jello = $('#permIn').val();
        if (jello.length == 0){

          $('#permIn').attr('placeholder', 'did not enter a word');
          $('#permLen').val('');

        }
        else if (/\s/.test(jello)){

          $('#permIn').attr('placeholder', 'no spaces');
          $('#permIn').val('');
          $('#permLen').val('');

        }
        else if ($('#permLen').val() > jello.length) {
          $('#permIn').attr('placeholder', 'length value was set too large');
          $('#permIn').val('');
          $('#permLen').val('');
        }
        else if (jello.length > 6) {
          $('#permIn').attr('placeholder', 'word length must be less than 7');
          $('#permIn').val('');
          $('#permLen').val('');
        }
        else if ($('#permLen').val() < 0) {
          $('#permIn').attr('placeholder', 'length must be greater than 0');
          $('#permIn').val('');
          $('#permLen').val('');
        }
        else{

          $('#permIn').attr('placeholder', 'enter a word with no spaces');
          $('.permOut').empty();
          // THIS NEEDS TO BE perm, NOT PERM
          $('#permIn').val('');

          var len = $('#permLen').val();

          if (len.length == 0){

            for (i=1; i<=jello.length; i++ ){
              var newDiv = permutation("", jello, i, '');
              newDiv = i + ":" + newDiv;
              $('.permOut').append("<div>" + newDiv + "</div>");
            }
            $('#permLen').val('');

          }else{

            for (i=1; i<=$('#permLen').val(); i++ ){
              var newDiv = permutation("", jello, i, '');
              newDiv = i + ":" + newDiv;
              $('.permOut').append("<div>" + newDiv + "</div>");
            }
            $('#permLen').val('');

          }
        }
    }
);


function permutation(prefix, str, size, start) {

	    var n = str.length;

	     if (size == 1){

		      for (var j =0; j < n; j++){

                start = start + "<br>" + (prefix.substring(0,prefix.length)+str.charAt(j));

	    	  }
          return start;

	    }
	    else {
	        for (var k = 0; k < n; k++){

              start = permutation(prefix + str.charAt(k), str.substring(0, k) + str.substring(k+1, n), size-1, start);
	        }
	    }
      return start;

	}
// COMBO CODE

  $('.comboTryInputs .runButtons').on('click',
      function(){
          var jello = $('#comboIn').val();
          if (jello.length == 0){

            $('#comboIn').attr('placeholder', 'did not enter a word');
            $('#comboLen').val('');

          }
          else if (/\s/.test(jello)){

            $('#comboIn').attr('placeholder', 'no spaces');
            $('#comboIn').val('');
            $('#comboLen').val('');

          }
          else if ($('#comboLen').val() > jello.length) {
            $('#comboIn').attr('placeholder', 'length value was set too large');
            $('#comboIn').val('');
            $('#comboLen').val('');
          }
          else if (jello.length > 11) {
            $('#comboIn').attr('placeholder', 'word length must be less than 11');
            $('#comboIn').val('');
            $('#comboLen').val('');
          }
          else if ($('#comboLen').val() < 0) {
            $('#comboIn').attr('placeholder', 'length must be greater than 0');
            $('#comboIn').val('');
            $('#comboLen').val('');
          }
          else{

            $('#comboIn').attr('placeholder', 'enter a word with no spaces');
            $('.comboOut').empty();
            $('#comboIn').val('');

            var len = $('#comboLen').val();

            if (len.length == 0){

              for (i=1; i<=jello.length; i++ ){
                var newDiv = combination("", jello, i, '');
                newDiv = i + ":" + newDiv;
                $('.comboOut').append("<div>" + newDiv + "</div>");
              }
              $('#comboLen').val('');

            }else{

              for (i=1; i<=$('#comboLen').val(); i++ ){
                var newDiv = combination("", jello, i, '');
                newDiv = i + ":" + newDiv;
                $('.comboOut').append("<div>" + newDiv + "</div>");
              }
              $('#comboLen').val('');

            }
          }
      }
  );


  function combination(prefix, str, size, start) {

  	    var n = str.length;

  	     if (size == 1){

  		      for (var j =0; j < n; j++){

                  start = start + "<br>" + (prefix.substring(0,prefix.length)+str.charAt(j));

  	    	  }
            return start;

  	    }
  	    else {
  	        for (var k = 0; k < n; k++){

                start = combination(prefix + str.charAt(k),  str.substring(k+1, n), size-1, start);
  	        }
  	    }
        return start;

  	}
