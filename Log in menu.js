function get(){
    var name = localStorage.getItem("g-signin2"); //Obtener datos almacenados
    document.getElementById("dropdownMenuButton").innerHTML = name; //Mostrar datos almacenados
};
get();
