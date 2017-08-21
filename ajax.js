document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button = document.getElementById('exercise_1');
  var button2 = document.getElementById('exercise_2');
  var step3456 = document.querySelector('#step3456');
  var button3 = document.getElementById('exercise_3')
  var step7 = document.getElementById('step7');
  var button4 = document.getElementById('exercise_4');
  var step8 = document.getElementById('step8');
  var button5 = document.getElementById('exercise_5');
  var ul = document.getElementById('ul');

  button.addEventListener( 'click', function() {

    $.ajax( {
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: {
      }
    } ).done( function( data ) {
        console.log("post succeeded");
      });
  })

  button2.addEventListener( 'click', function() {

    $.ajax( {
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    data: {
      }
    }).done( function( data ) {
        console.log("post succeeded");
        console.log(data);

        var myElement = document.createElement( 'div');
        myElement.innerHTML = data;
        step3456.append( myElement );
    }).fail( function() {
        console.log('post failed')
        var newElement = document.createElement( 'div');
        newElement.innerHTML = 'Sorry. That request failed.';
        step3456.append( newElement );
    }).always( function() {
      console.log('Hey the request finished!')
    });

  })

  button3.addEventListener( 'click', function() {

    $.ajax( {
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    data: { amount: 5
      }
    }).done( function( data ) {
      console.log("post succeeded");
      console.log(data);

      var myElement = document.createElement( 'div');
      myElement.innerHTML = 'Count: ' + data;
      step7.append( myElement );
    })
  })

  button4.addEventListener( 'click' ,function() {

    $.ajax( {
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: { timezone: 'Pacific/Honolulu'
      }
    }).done( function( data ) {
      console.log("post succeeded");
      console.log(data);

      var myElement = document.createElement( 'div');
      myElement.innerHTML = data;
      step8.append( myElement );
    })
  })

  button5.addEventListener( 'click', function() {

    $.ajax( {
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    data: {
      }
    }).done( function( data ) {
      console.log("post succeeded");
      console.log(data);

      var myElement = document.createElement( 'div');
      myElement.innerHTML = data;
      ul.append( myElement );
    })
    })


});
