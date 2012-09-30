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
/*                    $(".takeIt".bind("click", function(){
//                                      takePicture();
//                                      })
//            document.addEventListener("deviceReady",onDeviceReady,false);

            var pictureSource;
            var destinationType;
                     
                     
            function onDeviceReady(){
                     pictureSource = navigator.camera.PictureSourceType;
                     destinationType = navigator.camera.DestinationType;
                     
                     }
            function onPhotoDataSuccess(imageData){
                     var smallImage =document.getElementById('smallImage');
                     smallImage.style.display = 'block';
                     smallImage.src = "data:image/jpeg;base64," + imageData;
                     var largeImage = document.getElementById('largeImage');
                     largeImage.style.display = 'block';
                     largeImage.src = imageURI;

                     }
            function takePicture(){
                     navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 50});
                     }
            function getLocalPicture(source){
                     navigator.camera.getPicture(onPhotoURISuccess,onFail, {quality: 50, destinationType: destinationType.FILE_URI, sourceType: source});
                     }
            function onFail(message) {
                     alert('Failed because: ' + message);
                     }*/
                     
                     $("#button").prev("a.ui-btn").unbind().click( function() {alert('button clicked');} )
     

                     function uploadPhoto(data){
                     // this is where you would send the image file to server
                     cameraPic.src = "data:image/jpeg;base64," + data;
                     // Successful upload to the server
                     navigator.notification.alert(
                                                  'Your Photo has been uploaded',  // message
                                                  okay,                           // callback
                                                  'Photo Uploaded',              // title
                                                  'OK'                          // buttonName
                                                  );
                     // upload has failed Fail
                     /*
                      if (failedToUpload){
                      navigator.notification.alert(
                      'Your Photo has failed to upload',
                      failedDismissed,
                      'Photo Not Uploaded',
                      'OK'
                      );
                      }
                      */
                     }
                     function okay(){
                     // Do something
                     }

});


//////////////////////////////////
//   CODE FOR IOS NETWORK       //
//////////////////////////////////
$('#iosnetwork').live('pageinit' , function(){
alert('Firing Network Code');
                      document.addEventListener("deviceready", onDeviceReady, false);
                      
                      // Cordova is loaded and it is now safe to make calls Cordova methods
                      //
                      function onDeviceReady() {
                      checkConnection();
                      }
                      
                      function checkConnection() {
                      var networkState = navigator.network.connection.type;
                      
                      var states = {};
                      states[Connection.UNKNOWN]  = 'Alien Connection';
                      states[Connection.ETHERNET] = 'Really a Wired connection?';
                      states[Connection.WIFI]     = 'Oh, you know, the no wires connection in your house.';
                      states[Connection.CELL_2G]  = 'Cell 2G connection';
                      states[Connection.CELL_3G]  = 'Cell 3G connection';
                      states[Connection.CELL_4G]  = 'Cell 4G connection';
                      states[Connection.NONE]     = 'No network connection';
                      $('#connection').append("You are connected via - " + states[networkState]);
                      //alert('Connection type: ' + states[networkState]);
                      }

});

//////////////////////////////////
//   CODE FOR IOS ACCELEROMETER //
//////////////////////////////////
$('#iosaccelerometer').live('pageinit' , function(){
alert('Firing Accelerometer Code');
});

//////////////////////////////////
//   CODE FOR IOS EVENTS        //
//////////////////////////////////
$('#iosevents').live('pageinit' , function(){
alert('Firing Event Code');
});
