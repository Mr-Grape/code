var numObjeto_productos = 0;
var objetos_productos;
var largo_productos;

var numObjeto_diseno = 0;
var objetos_diseno;
var largo_diseno;

var numObjeto_estilo = 0;
var objetos_estilo;
var largo_estilo;
var filtro = "organico";

function actualiza_productos(){
    
          document.getElementById("imagen-grande-productos").src = objetos_productos[numObjeto_productos].Imagen;
          document.getElementById("nombre-productos").innerHTML = objetos_productos[numObjeto_productos].Nombre;
          document.getElementById("nombre-pequeno-productos").innerHTML = objetos_productos[numObjeto_productos].Nombre;
          document.getElementById("nombre2-productos").innerHTML = objetos_productos[numObjeto_productos].Nombre2;
          document.getElementById("nombre2-pequeno-productos").innerHTML = objetos_productos[numObjeto_productos].Nombre2;
          document.getElementById("descripcion-productos").innerHTML = objetos_productos[numObjeto_productos].Descripcion;
          document.getElementById("costo-productos").innerHTML = objetos_productos[numObjeto_productos].Costo;
          document.getElementById("oferta-productos").innerHTML = objetos_productos[numObjeto_productos].Oferta;
          document.getElementById("imagen-pequena-centro-productos").src = objetos_productos[numObjeto_productos].Imagen;
          
         if (numObjeto_productos == largo_productos-1) {
            document.getElementById("nombre-pequeno-dr-productos").innerHTML = objetos_productos[0].Nombre;
            document.getElementById("nombre2-pequeno-dr-productos").innerHTML = objetos_productos[0].Nombre2;
            document.getElementById("imagen-pequena-dr-productos").src = objetos_productos[0].Imagen;
          } else{
            document.getElementById("nombre-pequeno-dr-productos").innerHTML = objetos_productos[numObjeto_productos+1].Nombre;
            document.getElementById("nombre2-pequeno-dr-productos").innerHTML = objetos_productos[numObjeto_productos+1].Nombre2;
            document.getElementById("imagen-pequena-dr-productos").src = objetos_productos[numObjeto_productos+1].Imagen;
          }          

          if (numObjeto_productos == 0) {
            document.getElementById("nombre-pequeno-iz-productos").innerHTML = objetos_productos[largo_productos-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-productos").innerHTML = objetos_productos[largo_productos-1].Nombre2;
            document.getElementById("imagen-pequena-iz-productos").src = objetos_productos[largo_productos-1].Imagen;
          } else{
            document.getElementById("nombre-pequeno-iz-productos").innerHTML = objetos_productos[numObjeto_productos-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-productos").innerHTML = objetos_productos[numObjeto_productos-1].Nombre2;
            document.getElementById("imagen-pequena-iz-productos").src = objetos_productos[numObjeto_productos-1].Imagen;
          }
    
}


function actualiza_diseno(){
    
          document.getElementById("imagen-grande-diseno").src = objetos_diseno[numObjeto_diseno].Imagen;
          document.getElementById("nombre-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Nombre;
          document.getElementById("nombre-pequeno-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Nombre;
          document.getElementById("nombre2-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Nombre2;
          document.getElementById("nombre2-pequeno-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Nombre2;
          document.getElementById("descripcion-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Descripcion;
          document.getElementById("costo-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Costo;
          document.getElementById("oferta-diseno").innerHTML = objetos_diseno[numObjeto_diseno].Oferta;
          document.getElementById("imagen-pequena-centro-diseno").src = objetos_diseno[numObjeto_diseno].Imagen;
          
         if (numObjeto_diseno == largo_diseno-1) {
            document.getElementById("nombre-pequeno-dr-diseno").innerHTML = objetos_diseno[0].Nombre;
            document.getElementById("nombre2-pequeno-dr-diseno").innerHTML = objetos_diseno[0].Nombre2;
            document.getElementById("imagen-pequena-dr-diseno").src = objetos_diseno[0].Imagen;
          } else{
            document.getElementById("nombre-pequeno-dr-diseno").innerHTML = objetos_diseno[numObjeto_diseno+1].Nombre;
            document.getElementById("nombre2-pequeno-dr-diseno").innerHTML = objetos_diseno[numObjeto_diseno+1].Nombre2;
            document.getElementById("imagen-pequena-dr-diseno").src = objetos_diseno[numObjeto_diseno+1].Imagen;
          }          

          if (numObjeto_diseno == 0) {
            document.getElementById("nombre-pequeno-iz-diseno").innerHTML = objetos_diseno[largo_diseno-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-diseno").innerHTML = objetos_diseno[largo_diseno-1].Nombre2;
            document.getElementById("imagen-pequena-iz-diseno").src = objetos_diseno[largo_diseno-1].Imagen;
          } else{
            document.getElementById("nombre-pequeno-iz-diseno").innerHTML = objetos_diseno[numObjeto_diseno-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-diseno").innerHTML = objetos_diseno[numObjeto_diseno-1].Nombre2;
            document.getElementById("imagen-pequena-iz-diseno").src = objetos_diseno[numObjeto_diseno-1].Imagen;
          }
    
}


function actualiza_estilo(filtro){

          document.getElementById("imagen-grande-estilo").src = objetos_estilo[numObjeto_estilo].Imagen;
          document.getElementById("nombre-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Nombre;
          document.getElementById("nombre-pequeno-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Nombre;
          document.getElementById("nombre2-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Nombre2;
          document.getElementById("nombre2-pequeno-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Nombre2;
          document.getElementById("descripcion-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Descripcion;
          document.getElementById("costo-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Costo;
          document.getElementById("oferta-estilo").innerHTML = objetos_estilo[numObjeto_estilo].Oferta;
          document.getElementById("imagen-pequena-centro-estilo").src = objetos_estilo[numObjeto_estilo].Imagen;
          
         if (numObjeto_estilo == largo_estilo-1) {
            document.getElementById("nombre-pequeno-dr-estilo").innerHTML = objetos_estilo[0].Nombre;
            document.getElementById("nombre2-pequeno-dr-estilo").innerHTML = objetos_estilo[0].Nombre2;
            document.getElementById("imagen-pequena-dr-estilo").src = objetos_estilo[0].Imagen;
          } else{
            document.getElementById("nombre-pequeno-dr-estilo").innerHTML = objetos_estilo[numObjeto_estilo+1].Nombre;
            document.getElementById("nombre2-pequeno-dr-estilo").innerHTML = objetos_estilo[numObjeto_estilo+1].Nombre2;
            document.getElementById("imagen-pequena-dr-estilo").src = objetos_estilo[numObjeto_estilo+1].Imagen;
          }          

          if (numObjeto_estilo == 0) {
            document.getElementById("nombre-pequeno-iz-estilo").innerHTML = objetos_estilo[largo_estilo-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-estilo").innerHTML = objetos_estilo[largo_estilo-1].Nombre2;
            document.getElementById("imagen-pequena-iz-estilo").src = objetos_estilo[largo_estilo-1].Imagen;
          } else{
            document.getElementById("nombre-pequeno-iz-estilo").innerHTML = objetos_estilo[numObjeto_estilo-1].Nombre;
            document.getElementById("nombre2-pequeno-iz-estilo").innerHTML = objetos_estilo[numObjeto_estilo-1].Nombre2;
            document.getElementById("imagen-pequena-iz-estilo").src = objetos_estilo[numObjeto_estilo-1].Imagen;
          }
    
}

async function inicializa(){
      try {
        //productos
          const data = await fetch(
          `https://gus.works/api/uba.php`
          );

          const json = await data.json();
          console.log(json);
          console.log(json.length);

          largo_productos=json.length;
          objetos_productos = json;
          actualiza_productos();
        
           
         
      } catch (err) {
          console.error(`Error getting json: ${err}`);
      }
    
};




window.onload = inicializa();

