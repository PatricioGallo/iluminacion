
//PROGRAMA

let cuerpo_productos = document.getElementById("cuerpo_productos")


for(const lista of workList){
  let productos_contenido = document.createElement("div");
  productos_contenido.innerHTML= `
  <div class="contenedor_producto" onclick="funcionclick(${lista.id})">

      <img src="media/imagenes/${lista.imagen}" alt="">
      <h3>${lista.nombre}</h3>
      <div class="precios">
        <h2>$${lista.precio}</h2> <h4>${lista.precioTachado}</h4>
      </div>
      <p>Cuotas sin interes y envios a todo el pais</p>


  </div>
  `
  cuerpo_productos.append(productos_contenido)
}
