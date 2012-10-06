//////////////////////////////////
//   CODE FOR IOS GEOLOCATION   //
//////////////////////////////////
$('#iosgeo').live('pageshow', function(){

                  
    document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {

                  navigator.geolocation.getCurrentPosition(onSuccess, onError);
                  }
            function onSuccess(position){
                  var lat   = position.coords.latitude;
                  var long  = position.coords.longitude;
                  var currentPosition = new google.maps.LatLng(lat, long);

                  var mapOptions = {
                                        zoom    : 14,
                                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                                        center  : currentPosition
                  };
                  
                  var myMap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
                  var marker = new google.maps.Marker({
                                        position: currentPosition,
                                        map : myMap,
                                        title: "Here is your marker"
                                                      
                                                      });
                  marker.setMap(myMap);

                  };
                  
            function onError(error) {
                  alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                  };

                  
                
});


//////////////////////////////////
//   CODE FOR IOS CAMERA        //
//////////////////////////////////
$('#ioscamera').live('pageinit' , function(){
//alert('Firing Camera Code');


});


//////////////////////////////////
//   CODE FOR IOS NETWORK       //
//////////////////////////////////
$('#iosnetwork').live('pageinit' , function(){
                      document.addEventListener("deviceready", onDeviceReady, false);
                      
                      // Cordova is loaded and it is now safe to make calls Cordova methods
                      //
                      function onDeviceReady() {
                      checkConnection();
                      }
                      
                      function checkConnection() {
                      var networkType = navigator.network.connection.type;
                      
                      var types = {};
                      types[Connection.UNKNOWN]  = 'Alien Connection';
                      types[Connection.ETHERNET] = 'Really a Wired connection?';
                      types[Connection.WIFI]     = 'Oh, ya know, the no wires connection in your house.';
                      types[Connection.CELL_2G]  = 'Cell 2G connection';
                      types[Connection.CELL_3G]  = 'Cell 3G connection';
                      types[Connection.CELL_4G]  = 'Cell 4G connection';
                      types[Connection.NONE]     = 'No network connection';
                      $('#connection').append("You are connected via - " + types[networkType]);
                      }

});

//////////////////////////////////
//   CODE FOR IOS ACCELEROMETER //
//////////////////////////////////
$('#iosaccelerometer').live('pageinit' , function(){
alert('Firing Accelerometer Code');
                            var accel = null;
                            document.addEventListener("deviceready", onDeviceReady, false);
                            function onDeviceReady(){
                            startWatching();
                            }
                            
                            function startWatching() {
                            var options = {frequency: 500};
                            accel = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                            
                            }
                            function stopWatching() {
                            if (accel) {
                            navigator.accelerometer.clearWatch(accel);
                            accel = null;
                            
                                }
                            }
                            function onSuccess(acceleration) {
                            var acceltag = document.getElementById('accelerometer');
                            acceltag.innerHTML = 'X Axis: ' + acceleration.x + '<br/>' +
                                                 'Y Axis: ' + acceleration.y + '<br/>' +
                                                 'Z Axis: ' + acceleration.z + '<br/>';
                            }
                            function onError() {
                            alert('There was an Error!');
                            }
});

//////////////////////////////////
//   CODE FOR IOS EVENTS        //
//////////////////////////////////
$('#ioscompass').live('pageinit' , function(){
alert('Firing compass Code');
                      document.addEventListener("deviceReady", onDeviceReady, false);
                      function onDeviceReady(){
                        navigator.compass.getCurrentHeading(onSuccess, onError);
                      }
                      function onSuccess(heading){
                      var pointer = $('#pointer');
                      var pointerDirection = 360 - heading.magneticHeading;
                      pointer.css ('-webkit-transform', 'rotate(' + pointerDirection + 'deg)');
                      }
                      function onError(){
                      alert('There was an error getting the compass heading');
                      
                      }
                      var options = {frequency: 300};
                      var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
                      
                      
});

/////////////////////////////////
//Code for Twiter Search API   //
/////////////////////////////////
$('#ioscompass').live('pageinit' , function(){
	alert('test');
	});
