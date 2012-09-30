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
                                    }
                  
                  var myMap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
                  var marker = new google.maps.Marker({
                                        position: currentPosition,
                                        map : myMap,
                                        title: "Here is your marker"
                                                      
                                                    })
                  marker.setMap(myMap);

                  }
                  
            function onError(error) {
                  alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                  }

                  
                
});


//////////////////////////////////
//   CODE FOR IOS CAMERA        //
//////////////////////////////////
$('#ioscamera').live('pageinit' , function(){
//alert('Firing Camera Code');
            var pictureSource;
            var destinationType;
                     
            document.addEventListener("deviceReady",onDeviceReady,false);
                     
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
                     navigatorcamera.getPicture(pnPhotoDataSuccess, onFail, {quality: 50});
                     }
            function getLocalPicture(source){
                     navigator.camera.getPicture(onPhotoURISuccess,onFail, {quality: 50, destinationType: destinationType.FILE_URI, sourceType: source});
                     }
            function onFail(message) {
                     alert('Failed because: ' + message);
                     }

});


//////////////////////////////////
//   CODE FOR IOS NETWORK       //
//////////////////////////////////
$('#iosnetwork').live('pageinit' , function(){
alert('Firing Network Code');

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
