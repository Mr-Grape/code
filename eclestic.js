var numObjeto = 0;
var objetos;
var largo;

function actualiza(){
    
          document.getElementById("imagen-grande-productos").src = objetos[numObjeto].Imagen;
          document.getElementById("nombre-productos").innerHTML = objetos[numObjeto].Nombre;
          document.getElementById("nombre-pequeno-productos").innerHTML = objetos[numObjeto].Nombre;
          document.getElementById("nombre2-productos").innerHTML = objetos[numObjeto].Nombre2;
          document.getElementById("nombre2-pequeno-productos").innerHTML = objetos[numObjeto].Nombre2;
          document.getElementById("descripcion-productos").innerHTML = objetos[numObjeto].Descripcion;
          document.getElementById("costo-productos").innerHTML = objetos[numObjeto].Costo;
          document.getElementById("oferta-productos").innerHTML = objetos[numObjeto].Oferta;
          document.getElementById("imagen-pequena-centro-productos").src = objetos[numObjeto].Imagen;
          
         if (numObjeto == largo-1) {
            document.getElementById("nombre-pequeno-dr-productos").innerHTML = objetos[0].Nombre;
            document.getElementById("nombre2-pequeno-dr-productos").innerHTML = objetos[0].Nombre2;
            document.getElementById("imagen-pequena-dr-productos").src = objetos[0].Imagen;
          } else{
            document.getElementById("nombre-pequeno-dr-productos").innerHTML = objetos[numObjeto+1].Nombre;
            document.getElementById("nombre2-pequeno-dr-productos").innerHTML = objetos[numObjeto+1].Nombre2;
            document.getElementById("imagen-pequena-dr-productos").src = objetos[numObjeto+1].Imagen;
          }          

          if (numObjeto == 0) {
            document.getElementById("nombre-pequeno-iz-productos").innerHTML = objetos[largo-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-productos").innerHTML = objetos[largo-1].Nombre2;
            document.getElementById("imagen-pequena-iz-productos").src = objetos[largo-1].Imagen;
          } else{
            document.getElementById("nombre-pequeno-iz-productos").innerHTML = objetos[numObjeto-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-productos").innerHTML = objetos[numObjeto-1].Nombre2;
            document.getElementById("imagen-pequena-iz-productos").src = objetos[numObjeto-1].Imagen;
          }
    
}


async function inicializa(){
      try {
          const data = await fetch(
          `https://gus.works/api/uba.php`
          );
            
          const json = await data.json();
          console.log(json);
          console.log(json.length);

          largo=json.length;
          objetos = json;
      
          actualiza();    
         
      } catch (err) {
          console.error(`Error getting json: ${err}`);
      }
    
};

function avanza(){
    if (numObjeto == largo-1) {
        numObjeto=0;
    } else{
        numObjeto++;
    }      
    actualiza();
}

function retrocede(){
    if (numObjeto == 0) {
        numObjeto=largo-1;
    } else{
        numObjeto--;
    } 
    actualiza();
}

window.onload = inicializa();
document.getElementById("flecha2-dr-productos").addEventListener("click", avanza);
document.getElementById("flecha1-dr-productos").addEventListener("click", avanza);
document.getElementById("imagen-pequena-dr-productos").addEventListener("click", avanza);

document.getElementById("flecha2-iz-productos").addEventListener("click", retrocede);
document.getElementById("flecha1-iz-productos").addEventListener("click", retrocede);
document.getElementById("imagen-pequena-iz-productos").addEventListener("click", retrocede);

