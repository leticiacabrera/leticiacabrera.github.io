/*function set(){
    /*Captura de datos escrito en el input*/        
   /* var email = document.getElementById("inputUsername").value;
    /*Guardando los datos en el LocalStorage*/
     /*localStorage.setItem("Username", email);
};

/*google login*/


function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

/*var profile = googleUser . getBasicProfile ();
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

   
   consola . log ( "ID Token:" + id_token ); }  */

