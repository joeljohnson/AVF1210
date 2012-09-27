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