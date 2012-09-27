//////////////////////////////////
//   CODE FOR IOS GEOLOCATION   //
//////////////////////////////////

$('#iosgeo').live('pageinit' , function(){

document.addEventListener("deviceready",onDeviceReady, false);


function onDeviceReady(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function onSuccess(position){
                  alert(position.coords.latitude);
                  }
function onError(error){
        alert('code: ' + error.code + '\n' + 'Message: ' + error.message + '\n');
}
                  
                  

});

//////////////////////////////////
//   CODE FOR IOS CAMERA        //
//////////////////////////////////
$('#ioscamera').live('pageinit' , function(){
alert('Firing Camera Code');
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
