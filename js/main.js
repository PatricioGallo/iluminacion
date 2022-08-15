

// FUNCIONES

function funcionclick(id){
  let item = workList.find((lista) => lista.id === id);

  informacion_works.innerHTML=`
  <div class="cuerpo_informacion">
    <div class="fondo_informacion">

      <div class="cruz">
        <button type="button" name="button" onclick="cerrarTF()">X</button>
      </div>

      <img src="media/imagenes/${item.imagen}" alt="">

      <div class="contenido_informacion">
        <h1>${item.nombre}</h1>
        <p>${item.p1}</p>
        <p>${item.p2}</p>
        <p>${item.p3}</p>
        <p>${item.p4}</p>
        <div class="botones_informacion">
            <a href="tienda.html"> <button type="button" name="button">IR A TIENDA</button> </a>
        </div>
      </div>

    </div>
  </div>
  `
}


function cerrarTF(){
  informacion_works.innerHTML=""
}




//PROGRAMA

let cuerpo_productos = document.getElementById("cuerpo_productos")
let contador=0;

for(const lista of workList){
    if(contador < 3){
      let productos_contenido = document.createElement("div");
      productos_contenido.innerHTML= `
      <div class="contenedor_producto" onclick="funcionclick(${lista.id})">

          <img src="media/imagenes/${lista.imagen}" alt="">

      </div>

      `
      cuerpo_productos.append(productos_contenido)
      contador= contador +1;
  }
}
