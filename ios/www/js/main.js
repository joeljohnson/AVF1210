

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
$('#twits').live('pageinit' , function(){
	//alert('test');
	$('#twitsubmit').click(function(){
		//alert($('#query').val());
		
		twitSearch();
		});
		function twitSearch(){
			$.ajax({
				url:'http://search.twitter.com/search.json?q='+ $('#query').val() + '&rpp=' + $('#numtweets').val(),
				dataType:'jsonp',
				success: function(json_results){
					$('#twitresults ul').remove();
					$('#twitresults').append('<ul data-role="listview"></ul><p>');
					console.log(json_results);
					listItems = $('#twitresults').find('ul');
					$.each(json_results.results, function(key){
						html ='<img src=' + json_results.results[key].profile_image_url +  '>';
						html += '<h3><a href="#">' + json_results.results[key].text + '</a></h3><p>';
						html += '<p>From: ' + json_results.results[key].from_user + '<p>Created: ' + json_results.results[key].created_at + '</p>';
						listItems.append('<li>' + html + '</li>');
						
						});
					$('#twitresults ul').listview();
					
					
					
					}
				});
			};
});

/////////////////////////////
//  Code for DGCR API      //
/////////////////////////////
$('#discgolf').live('pageinit' , function(){
			
//Button handlers
	$('#zipsubmit').click(function(){
			dgZipSearch(); // call this function perform DGCR search and populate the page with results
			});
		
		
	$('#mapit').click(function(){
			map_gcs();
			});
		
// Map Function		
function map_gcs(){
			alert('bang bang!');

			navigator.geolocation.getCurrentPosition(onSuccess, onError);
			function onSuccess(position){
				
			var my_lat  = position.coords.latitude.toFixed(6);
			var my_long = position.coords.longitude.toFixed(6);

			alert(my_lat);
			alert(my_long);
			$.ajax({
				url:'http://www.dgcr-api.com/?key=e26cknv1vebce7sq2rpzp6bx&mode=near_rad&lat=' + my_lat + '&lon=' + my_long + '&limit=5&rad=15&sig=3bd451342cc34949499220d6ed54a0f2',
				dataType: 'json',
				success: function(geo_results){
					alert(geo_results);
					$.each(geo_results, function(){
						alert(this.name);
						})
					}
				});

				};
			function onError(error){
				alert('error');
				};
			};
			
//Zipsearch function			
function dgZipSearch(){

			$.ajax({
				url:'http://www.dgcr-api.com?key=e26cknv1vebce7sq2rpzp6bx&mode=findzip&zip=' + $('#zipcode').val() + '&rad=10&sig=0b3f68b37fbd0602f51c16236bcd2518',
				dataType: 'json',
				success: function(zip_results){
					alert(zip_results);
					$.each(zip_results, function(){
						$('#zipsearch').append("<div class='gcdetail'><li><h3>Course Name : " + this.name + "</h3></li><p>Holes : " + this.holes + "</p><p>Rating : <img src='"+  this.rating_img_small + "'/></p></div><br>");

						})
				}
				
				});
		};
});
