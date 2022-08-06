'use strict'
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("validacion").addEventListener('submit',validarDatos);
});
function validarDatos(){
   
    var user = document.getElementById('user').value;
    var pwd = document.getElementById('pwd').value;
    if(user === "jhon" && pwd === "123456"){
        
        alert("Logeo correcto");
        

    }   
    else{
        alert("logeo incorrecto");
    }

   
 

  
}