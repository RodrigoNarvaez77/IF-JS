//var hora = 21;
//if(hora <=12){
//    alert("Buenos dias");
//}
//else if(hora<=21){  
//alert("Buenas Noches");
//}
//else{
 //   alert("Buenas Tardes");
//}
//document.getElementById("titulo").innerHTML =hora;
function cambio(){
   var color = document.getElementById("color").value 
  //  console.log(color);
    if(color == "azul"){ 
        document.getElementById("titulo").classList.add("text-primary");
    }

    else if(color == "rojo"){
        document.getElementById("titulo").classList.add("text-danger");
    }
    else
    {
        document.getElementById("titulo").classList.add("text-warning");
    }

}
document.getElementById("boton").addEventListener("click",cambio);
