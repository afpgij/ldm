window.onload = function(){
  asignar_eventos();
  initialize();
}

function asignar_eventos(){
  /* Asignar eventos del menu */
  var opciones = document.querySelectorAll('#menu li');
  for(var i=0; i<opciones.length; i++) {
    opciones[i].onclick=mostrarPagina;
  }

  /* Asignar eventos de la galería de imágenes */
  var imagenes = document.querySelectorAll('#lista img');
  for(var i=0; i<imagenes.length; i++) {
    imagenes[i].onclick=mostrarImagen;
  }
}

function mostrarPagina(event){
  var paginas = document.getElementsByClassName("pagina");
    for(var i=0; i<paginas.length; i++) {
      paginas[i].style.display = "none";
    }
  var pagina = document.getElementById(event.target.getAttribute("title"));
  pagina.style.display="block";
  if (pagina.id=='pagina3'){ //Aquí se comprueba que la página a mostrar sea la que incluye el mapa, en cuyo caso se vuelve a cargar el mapa
    initialize();
  }

}

function mostrarImagen(event){
  var imagen=event.target.src;
  var marco = document.querySelectorAll('#principal img');
  marco[0].src=imagen.substring(imagen.lastIndexOf("/imagenes")+1,imagen.length);

}


var myCenter = new google.maps.LatLng(51.4067231, 30.0361971); //Centro del mapa, modificar las coordenadas para centrarlo en otro punto

function initialize()
{

var mapOpt = {
  center: myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("maps"),mapOpt);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Prypiat"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });


}
