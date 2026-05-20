
const imagenes = [
"/tarot/1.png",
"/tarot/2.png",
"/tarot/3.png",
"/tarot/4.png",
"/tarot/5.png",
"/tarot/6.png",
"/tarot/7.png",
"/tarot/8.png",
"/tarot/9.png",
"/tarot/10.png",
"/tarot/11.png",
"/tarot/12.png",
"/tarot/13.png",
"/tarot/14.png",
"/tarot/15.png",
"/tarot/16.png",
"/tarot/17.png",
"/tarot/18.png",
"/tarot/19.png",
"/tarot/20.png",
"/tarot/21.png",
"/tarot/22.png",
];

const titulos = [
  "El Loco",
  "El mago",
  "La Suma Sacerdotisa",
  "La Emperatriz",
  "El Emperador",
  "El Hierofante",
  "Los Enamorados",
  "El Carro",
  "La Fuerza",
  "El Ermitaño",
  "La Rueda de la Fortuna",
  "La Justicia",
  "El Colgado",
  "La Muerte",
  "La Templanza",
  "El Diablo",
  "La Torre",
  "La Estrella",
  "La Luna",
  "El Sol",
  "El Juicio",
  "El Mundo",
];

const frases = [
  "Ten el coraje suficiente para confiar en ti misma.",
  "Tienes todas las herramientas para manejar la realidad a tu antojo.",
  "Confía en la sabiduría de tu voz interna.",
  "Traes abundancia a tu vida y todo lo que te rodea.",
  "Protege tus límites y deja ir lo que está fuera de tu control.",
  "Encuentra un espacio seguro donde las personas te acepten tal como eres.",
  "El amor se revela todos los días mediante la cotidianidad.",
  "Sabes cuando ejercer determinación y cuando dejar ir.",
  "Eres responsable de tus propias acciones.",
  "Piensa antes de hablar.",
  "El cambio es inevitable. Adaptáte a la corriente con resiliencia.",
  "La compasión que te tienes a ti misma, funda las bases de tu compasión con otros.",
  "El despertar espiritual no se puede forzar, pero puedes estar abierta a ellos cuando el tiempo llegue.",
  "La pérdida puede abrir la puerta a nuevos comienzos.",
  "Dirige tu energía y recursos para encontrar balance.",
  "Al redimir las partes que tu ego desvanece, te completas.",
  "Ten el corage de romper las estructuras que necesitan ser rotas.",
  "Cuando todo está perdido, tu esperanza sigue brillando como una estrella guía. Síguela.",
  "Conocer los sesgos de tu inconsciente, te ayudará a diferenciar entre intuición e ilusión",
  "Siente la felicidad de estar viva.",
  "Despierta a tu llamada.",
  "Tú perteneces.",

];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();


let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'pQ5brswRTz8',

    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'pQ5brswRTz8'
    }
  });
}

document.addEventListener("click", () => {

  if (player) {
    player.setVolume(5);
    player.playVideo();
  }

}, { once: true });