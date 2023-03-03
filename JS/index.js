
function enviar() {
  const nombre=document.getElementById("fname").value
  const apellido=document.getElementById("lname").value
  const devolucion=document.querySelector('input[name="devolucion"]:checked').value;
  const calificacion=document.querySelector('input[name="calificacion"]:checked').value;
  alert(`Informacion enviada. 
  nombre: ${nombre}
  apellido: ${apellido}
  devolucion: ${devolucion}
  calificacion: ${calificacion}
  `)
}

function goto() {
  window.open("https://previews.123rf.com/images/piotrurakau/piotrurakau1709/piotrurakau170900017/86180443-comic-book-page-composition-with-crash-blue-wording-yellow-speech-bubble-halftone-effects-and-rays.jpg");
}

function video() {
    document.location='Videos/EL INSPECTOR ARDILLA INTRO.mp4'
}