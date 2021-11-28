/* JAROL */

var nr = document.querySelector('.tabla-1');
var num = 5;
nr.addEventListener("click", t1);
function t1() {
  num = prompt('Digite un numero del 1 al 10', '');

  num = parseInt(num)

  if (num < 0) {
    alert("Numero fuera de rango")
  } if (num > 10) {
    alert("Numero fuera de rango")
  } else {
    for (var x = 1; x <= 10; x++) {
      r = num * x;
      document.write(num + "x" + x + "=" + r + "<br>");
    }
  }
}

var urls = document.querySelectorAll('[class *= "url-"]');
var urlss = document.querySelectorAll('[class *= "1url-"]');
var mostrarurl = document.getElementById("direc");
var mostrartext = document.getElementById("texto");

mostrarurl.addEventListener("click", event0);
function event0() {
  enlace = document.getElementById("1url-1");
  enlace.href = "www.google.com";
  enlace.innerText = "www.Google.com\n";
  enlace = document.getElementById("1url-2");
  enlace.href = "www.Facebook.com";
  enlace.innerText = "www.Facebook.com\n";
  enlace = document.getElementById("1url-3");
  enlace.href = "www.Cun.edu.co";
  enlace.innerText = "www.Cun.edu.co";
}
mostrartext.addEventListener("click", event1);
function event1() {
  enlace = document.getElementById("1url-1").removeAttribute("href");
  enlace = document.getElementById("1url-2").removeAttribute("href");
  enlace = document.getElementById("1url-3").removeAttribute("href");
  enlace = document.getElementById("1url-1")
  enlace.innerText = "Google\n";
  enlace = document.getElementById("1url-2");
  enlace.innerText = "Facebook\n";
  enlace = document.getElementById("1url-3");
  enlace.innerText = "CUN\n";
}

/* JHON */
var zFondos150 = ["url('https://p4.wallpaperbetter.com/wallpaper/862/528/50/mountains-apple-mac-os-x-wallpaper-preview.jpg')", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpwMx3ARBA7zusWxJpdzQ3pigkjb8hOqa12zTWbcIDUWQ6l-TBcdcKleI1qqgxejrWO8&usqp=CAU')", "url('https://p4.wallpaperbetter.com/wallpaper/603/490/471/anime-your-name-kimi-no-na-wa-sky-wallpaper-preview.jpg')", "url('https://www.ambientum.com/wp-content/uploads/2019/03/Portada-Fuente-Javier-Martinez-de-Orueta.jpg')"];
var zFondos600 = ["url('https://p4.wallpaperbetter.com/wallpaper/862/528/50/mountains-apple-mac-os-x-wallpaper-preview.jpg')", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpwMx3ARBA7zusWxJpdzQ3pigkjb8hOqa12zTWbcIDUWQ6l-TBcdcKleI1qqgxejrWO8&usqp=CAU')", "url('https://p4.wallpaperbetter.com/wallpaper/603/490/471/anime-your-name-kimi-no-na-wa-sky-wallpaper-preview.jpg')", "url('https://www.ambientum.com/wp-content/uploads/2019/03/Portada-Fuente-Javier-Martinez-de-Orueta.jpg')"];
var titulos = ["Paisaje 1", "Paisaje 1", "Paisaje 1", "Paisaje 1"]

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
var titulos = document.querySelectorAll(".titulo");

imagenPrincipal.style.backgroundImage = zFondos600[0];
subImagenes[0].style.backgroundImage = zFondos150[0];
subImagenes[1].style.backgroundImage = zFondos150[1];
subImagenes[2].style.backgroundImage = zFondos150[2];
subImagenes[3].style.backgroundImage = zFondos150[3];


subImagenes[0].addEventListener("click", accion0);
subImagenes[0].addEventListener("click", accion4);
subImagenes[1].addEventListener("click", accion1);
subImagenes[1].addEventListener("click", accion5);
subImagenes[2].addEventListener("click", accion2)
subImagenes[2].addEventListener("click", accion6);;
subImagenes[3].addEventListener("click", accion3);
subImagenes[3].addEventListener("click", accion7);

function accion0() { imagenPrincipal.style.backgroundImage = zFondos600[0]; }
function accion1() { imagenPrincipal.style.backgroundImage = zFondos600[1]; }
function accion2() { imagenPrincipal.style.backgroundImage = zFondos600[2]; }
function accion3() { imagenPrincipal.style.backgroundImage = zFondos600[3]; }
function accion4() { document.getElementById("prin").innerHTML = "Montañas"; }
function accion5() { document.getElementById("prin").innerHTML = "Nevado"; }
function accion6() { document.getElementById("prin").innerHTML = "Meteorito"; }
function accion7() { document.getElementById("prin").innerHTML = "Atardecer"; }

/* ANDRES */

var subtitulos = document.querySelectorAll('[class *= "subt-"]');
var titu = document.getElementById("titu_1").innerHTML;

subtitulos[0].addEventListener("click", func0);
subtitulos[1].addEventListener("click", func1);
subtitulos[2].addEventListener("click", func2);
subtitulos[3].addEventListener("click", func3);
subtitulos[4].addEventListener("click", func4);
subtitulos[5].addEventListener("click", func5);
function func0() { document.getElementById("fondoc").style.backgroundColor = "yellow"; }
function func1() { document.getElementById("fondoc").style.backgroundColor = "white"; }
function func2() { document.getElementById("fondoc").style.color = "blue"; }
function func3() { document.getElementById("fondoc").style.color = "black"; }
function func4() { alert("El titulo de la pagina es: " + titu) }
function func5() { alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) }

/* ALEJANDRO */

var parrent01 = /\w{1,}/;
var parrent02 = /@/;
var parrent03 = /\./;
var parrent04 = /\w@\w/;
var parrent05 = /\.\w{2,}/;
var parrent06 = /\w+@\w+(?=\w+\.\w+)/;


function verificar() {

  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', quitarAtencion);
  }

  if ((document.getElementById('nombre').value).match(parrent01) == null) {
    document.getElementById('nombre').style.backgroundColor = "red";
    alert('El campo nombre es obligatorio!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent01) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('El campo correo electrónico es obligatorio!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent02) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('El correo electrónico tiene que contener el símbolo "@"!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent03) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('El correo electrónico tiene que contener el símbolo "."!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent04) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('Antes y después del símbolo "@" tiene que haber, por lo menos, una letra!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent05) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('Después del símbolo "." tiene que haber, por lo menos, dos letras!!!');
    return false;
  } else if ((document.getElementById('correo').value).match(parrent06) == null) {
    document.getElementById('correo').style.backgroundColor = "red";
    alert('En un correo electrónico siempre tiene que estar el "@" antes que el "."!!!');
    return false;
  } else if ((document.getElementById('edad').value) <= 0) {
    document.getElementById('edad').style.backgroundColor = "red";
    alert('La edad tiene que ser un valor positivo!!!');
    return false;
  } else {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellidos').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    alert('Los datos han sido correctos!!!\nNombre:  '+nombre+'\nApellido:  '+apellido+'\nEdad:  '+edad+'\nCorreo electrónico:  '+correo);
   
    return true;
  }
}

function quitarAtencion() {
  this.style.backgroundColor = "";
}
