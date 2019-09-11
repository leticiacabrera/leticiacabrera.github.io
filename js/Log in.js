function set(){
    /*Captura de datos escrito en el input*/        
    var email = document.getElementById("inputUsername").value;
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Username", email);
};

/*google login*/

//var profile = googleUser . getBasicProfile ();
var id_token = googleUser . getAuthResponse (). id_token ;

function onSignIn ( googleUser ) { 

// Datos útiles para sus scripts del lado del cliente: var profile = googleUser . getBasicProfile ();         
//consola . log ( "ID:" + perfil . getId ()); // ¡No envíes esto directamente a tu servidor!         
//consola . log ( 'Nombre completo:' + perfil . getName ());         
//consola . log ( 'Nombre de pila:'+ perfil . getGivenName ()); 

   consola . log ( 'Nombre de familia:' + perfil . getFamilyName ());         
   consola . log ( "URL de imagen:" + perfil . getImageUrl ());         
   consola . log ( "Correo electrónico:" + perfil . getEmail ()); 
   
   // El token de ID que debes pasar a tu backend: var id_token = googleUser . getAuthResponse (). id_token ;

   
   consola . log ( "ID Token:" + id_token ); } 

