<?php


if($_GET){

}


?>



<!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>COMPRAR | Tienda | Light Design</title>
  <link rel="stylesheet" href="css/tienda.css">
  <link rel="shortcut icon" href="media/imagenes/logoNegro.jpeg">
  <meta name="description" content="Pagina de compra">
  <script src="js/works.js"></script>
</head>



<body>

  <div class="espacio_alerta" id="espacio_alerta"></div>

  <div class="ocultar" id="menu_slider">
    <div id="contenidoMenuSlider">
    </div>
    <div id="debajo_menuSlider">
    </div>
  </div>



  <header>
    <div class="header_nombre">
      <a href="index.html">
        <h1>Light Design</h1>
      </a>
    </div>
    <div class="header_contenido">
      <div class="formulario_busqueda">
        <form class="" action="index.html" method="post" id="buscador">
          <div class="borderFormulario">
            <img src="media/imagenes/lupa.png" alt="">
            <input type="text" name="buscar" placeholder="Buscar">
          </div>
        </form>
      </div>

      <div class="separacionHeader">
        <div class="logo_Empresa2">
          <a href="tienda.php"> <img src="media/imagenes/logoNegro.jpeg" alt=""></a>
        </div>
        <div class="carrito2">
          <div class="carrito_click" id="carrito_click2">
            <img src="media/imagenes/carrito.png" alt="">
            <div class="circulo_carrito" id="circulo_carrito">
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

      <div class="logo_Empresa">
        <a href="tienda.php"> <img src="media/imagenes/logoNegro.jpeg" alt=""></a>
      </div>
      <div class="carrito">
        <div class="carrito_click" id="carrito_click">
          <img src="media/imagenes/carrito.png" alt="">
          <div class="circulo_carrito" id="circulo_carrito">
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  </header>


 
<div class="body" id="cuerpo">

<div class="presentacion">
  <h1>TIENDA</h1>
  <h2>Light Design | Hacemos envios a todo el pais por Mercado Envios</h2>
  <div class="imagenes_envio">
    <img src="media/imagenes/mercadopago.webp" alt="">
    <img src="media/imagenes/mercadolibre.png" alt="">
    <img src="media/imagenes/mercadoenvios.png" alt="">
  </div>
</div>

<div class="productos_body">
  <div class="cuerpo_productos" id="cuerpo_productos">
  </div>
</div>

</div>

  <div class="body2" id="cuerpo_compra">
  </div>




  <footer>

    <div class="footer_tienda">
      <div class="footer_contenedorTienda">
        <div class="titulo_footer">
          <a href="tienda.php"> <img src="media/imagenes/logoNegro.jpeg" alt=""> </a>
        </div>
        <div class="tienda_footer">
          <h3>Contacto y tienda online</h3>
          <a href="tienda.php"> <button type="button" name="button">TIENDA ONLINE</button> </a>
        </div>
        <div class="redesSociales_footer">
          <h3>Redes Sociales</h3>
          <div class="redes">
            <a href="#"> <img src="media/imagenes/facebook.png" alt=""> </a>
            <a href="#"> <img src="media/imagenes/instagram.png" alt=""> </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer_copy">
      <h1>LIGHT DESIGN © 2022</h1>
      <h2>- Designed by:</h2>
      <a href="http://patriciogallo.com.ar/?location=ld" target="_blank">Patricio Gallo</a>
    </div>

  </footer>

  <script src="js/compra.js"></script>

</body>

</html>
