//------------------ FUNCIONES ---------------------

function funcionclick(id, cantidad) {

    for (let i = 0; i < cantidadProductos; i++) {
      let item = workList.find((lista) => lista.id === id);
      carrito.push(item); //creo el carrito con la seleccion
      localStorage.setItem("carritoJSON", JSON.stringify(carrito)); //agrego el carrito en formato Json al local storage
      circulo_carrito.innerHTML = `
            <p>${carrito.length}</p>
          `
  
      if (cantidadProductos > 1 && i == 0) {
        div6 = document.createElement("div");
        div6.innerHTML = `
  
                <div class="alerta_compra">
                  <h1>Productos enviados al carrito</h1>
                  <div class="cuerpo_lineaMenu"></div>
                  <h3>${item.nombre}</h3>
                  <h4>$${item.precio}</h4>
                  <button type="button" onclick="cerrar()">CERRAR</button>
                </div>
  
            `
      } else if (cantidadProductos == 1) {
        div6 = document.createElement("div");
        div6.innerHTML = `
  
                  <div class="alerta_compra">
                    <h1>Producto enviado al carrito</h1>
                    <div class="cuerpo_lineaMenu"></div>
                    <h3>${item.nombre}</h3>
                    <h4>$${item.precio}</h4>
                    <button type="button" onclick="cerrar()">CERRAR</button>
                  </div>
  
              `
      }
  
      div6.classList = "animacion-entrada"
      espacio_alerta.append(div6);
  
      if (noti == 0) {
        timeOutID = setTimeout(cerrar, 3000);
        noti = noti + 1;
      } else if (noti > 0) {
        clearTimeout(timeOutID);
        timeOutID = setTimeout(cerrar, 3000);
      }
      contenidoMenuSlider.innerHTML = "";
      funcionSlider();
    }
  
  
  }
  
  
  
  
  
  
  function cerrar() {
  
    div6.classList = "ocultar";
    espacio_alerta.innerHTML = "";
    noti = 0;
  }
  
  
  
  
  
  
  function funcionCarrito_click() {
  
    if (carritoOn == 0) {
      menu_slider.className = "entrada menu_slider";
      carritoOn = 1;
    } else if (carritoOn == 1) {
      menu_slider.className = "ocultar";
      carritoOn = 0;
    }
  
    if (carritoEnLs.length != 0) {
      debajo_menuSlider.innerHTML = `
            <div class="cuerpo_lineaMenu"></div>
            <h1>Total: $${totalPrecio}</h1>
           <a href="compra.php"> <button id="boton_compra" type="button" name="button">COMPRAR</button></a>
        `
    } else if (carritoEnLs.length == 0) {
      debajo_menuSlider.innerHTML = `
            <div class="cuerpo_lineaMenu"></div>
            <br><br>
            <h1>Actualmente no agrego articulos en su carrito</h1>
            <br><br>
            <div class="cuerpo_lineaMenu"></div>
  
          `
    }
  
  }
  
  
  
  
  
  
  function funcionSlider() {
  
    for (const produc of carrito) {
      slider_contenido = document.createElement("div");
      let index = carrito.indexOf(produc);
      totalPrecio = totalPrecio + produc.precio;
      slider_contenido.innerHTML = `
  
          <div class="slider_componentes">
            <div class="componentes_imagen">
              <img src="media/imagenes/${produc.imagen}" alt="">
            </div>
            <div class="componentes_nombres">
              <h3>${produc.nombre}</h3>
              <h4>$${produc.precio}</h4>
            </div>
            <div class="componentes_boton">
              <button type="button" name="button" onclick="eliminarDelCarrito(${index})">X</button>
            </div>
          </div>
    `
      contenidoMenuSlider.prepend(slider_contenido);
      contenidoMenuSlider.className = "overflow"
    }
  
    if (carritoEnLs.length != 0) {
      debajo_menuSlider.innerHTML = `
          <div class="cuerpo_lineaMenu"></div>
          <h1>Total: $${totalPrecio}</h1>
          <a href="compra.php"> <button id="boton_compra" type="button" name="button">COMPRAR</button> </a>
  `
    } else if (carritoEnLs.length == 0) {
      debajo_menuSlider.innerHTML = `
          <div class="cuerpo_lineaMenu"></div>
          <br><br>
          <h1>Actualmente no agrego articulos en su carrito</h1>
          <br><br>
          <div class="cuerpo_lineaMenu"></div>
  
  `
    }
    menu_slider.prepend(contenidoMenuSlider)
    menu_slider.append(debajo_menuSlider);
  }
  
  
  
  
  
  
  
  function eliminarDelCarrito(index) {
    if (index != -1) {
      carrito.splice(index, 1)
      localStorage.setItem("carritoJSON", JSON.stringify(carrito)); //agrego el carrito en formato Json al local storage
    }
    totalPrecio = 0;
    contenidoMenuSlider.innerHTML = "";
    circulo_carrito.innerHTML = `
      <p>${carrito.length}</p>
    `
  
    funcionSlider();
  }
  
  
  
  
  
  
  function pagina2() {
    //funcionCarrito_click();
    cuerpo.classList = "ocultar"
    cuerpo_compra.innerHTML = ""
    for (const lista of carrito) {
      let productos_contenido = document.createElement("div");
      productos_contenido.innerHTML = `
  
            <div class="separacion_compra">
              <div class="imagen_compra">
                <img src="media/imagenes/${lista.imagen}" alt="">
              </div>
              <div class="informacion_compra">
                <h1>${lista.nombre}</h1>
                <h2>${lista.tipo}</h2>
                <div class="informacion_compra_parrafos">
                  <h3>${lista.p1}</h3>
                  <h3>${lista.p2}</h3>
                  <h3>${lista.p3}</h3>
                  <h3>${lista.p4}</h3>
                  <h4>MEDIAS: ${lista.medidas}</h4>
                  <h5>Precio: $${lista.precio}</h5>
                </div>
  
                <img src="media/imagenes/mercadolibre.png" alt="">
                
                <a href="${lista.linkDesacarga}" target="_blank"> 
                <button type="button" name="button">IR A COMPRAR</button> </a>
                <p>*La compra se realiza por medio de mercadolibre</p>
              </div>
            </div>
  
      `
      cuerpo_compra.append(productos_contenido)
    }
  }
  
  
  
  
  function funcionBusqueda(e) {
    e.preventDefault();
  
    if (buscador.buscar.value) {
  
      const productosFiltrados = workList.filter((el) => el.nombre.toLowerCase().includes(buscador.buscar.value.toLowerCase()) || el.tipo.toLowerCase().includes(buscador.buscar.value.toLowerCase()))
      productosFiltrados2 = productosFiltrados;
      productoFiltrado = 1;
      console.log(productoFiltrado);
      console.log("ure");
  
      cuerpo_productos.innerHTML = ""
      mostrarIndex();
    } else {
  
    }
  
  }
  
  
  function carritoEnJASON() {
    if (carritoEnLs) {
      carrito = carritoEnLs
  
      circulo_carrito.innerHTML = `
        <p>${carritoEnLs.length}</p>
      `
  
      funcionSlider();
  
    } else {
      carrito = []
    }
  
  }
  
  
  
//muestro los productos

function mostrarIndex() {

  cuerpo_compra.innerHTML=""
  cuerpo_productos.innerHTML=""
  cuerpo.classList="body"

  if (productoFiltrado == 0) {

    for (const lista of workList) {
      let productos_contenido = document.createElement("div");
      productos_contenido.innerHTML = `

                     <a href="mostrar.php?id=${lista.id}"> <div class="contenedor_producto" >

                          <img src="media/imagenes/${lista.imagen}" alt="">
                          <h3>${lista.nombre}</h3>
                          <div class="precios">
                            <h2>$${lista.precio}</h2> <h4>${lista.precioTachado}</h4>
                          </div>
                          <p>Cuotas sin interes y envios a todo el pais</p>


                      </div> </a>
              `
      cuerpo_productos.append(productos_contenido)
    }

  } else if (productoFiltrado == 1) {

    for (const lista of productosFiltrados2) {
      let productos_contenido = document.createElement("div");
      productos_contenido.innerHTML = `

            <a href="mostrar.php?id=${lista.id}"> <div class="contenedor_producto" >

            <img src="media/imagenes/${lista.imagen}" alt="">
            <h3>${lista.nombre}</h3>
            <div class="precios">
              <h2>$${lista.precio}</h2> <h4>${lista.precioTachado}</h4>
            </div>
            <p>Cuotas sin interes y envios a todo el pais</p>


            </div> </a>
            `
      cuerpo_productos.append(productos_contenido)
    }

  }
}



  //------------------ PROGRAMA --------------------
  
  //variables
  const carritoEnLs = JSON.parse(localStorage.getItem("carritoJSON"))
  let cantidadProductos = 0;
  let productoFiltrado = 0;
  let productosFiltrados2 = []
  let numeroCarrito = 0;
  let cuerpo_productos = document.getElementById("cuerpo_productos")
  let circulo_carrito = document.getElementById("circulo_carrito")
  let carrito_click = document.getElementById("carrito_click")
  let buscador = document.getElementById("buscador")
  let carrito = []
  let noti = 0;
  let carritoOn = 0;
  let totalPrecio = 0;
  carrito_click.addEventListener("click", funcionCarrito_click);
  buscador.addEventListener("submit", funcionBusqueda);
  
     
  carritoEnJASON();
  pagina2(); 
  
  
