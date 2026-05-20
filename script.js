const imagenes = [
"../gato/tarot/2.png",
"../gato/tarot/3.png",
"../theOracle-bot/tarot/4.png",
"../theOracle-bot/tarot/5.png",
"../theOracle-bot/tarot/6.png",
"../theOracle-bot/tarot/7.png",
"../theOracle-bot/tarot/8.png",
"../theOracle-bot/tarot/9.png",
"../theOracle-bot/tarot/10.png",
"../theOracle-bot/tarot/11.png",
"../theOracle-bot/tarot/12.png",
"../theOracle-bot/tarot/13.png",
"../theOracle-bot/tarot/14.png",
"../theOracle-bot/tarot/15.png",
"../theOracle-bot/tarot/16.png",
"../theOracle-bot/tarot/17.png",
"../theOracle-bot/tarot/18.png",
"../theOracle-bot/tarot/19.png",
"../theOracle-bot/tarot/20.png",
"../theOracle-bot/tarot/21.png",
"../theOracle-bot/tarot/22.png",
];

const titulos = [
  "El loco",
  "El mago",
  "La suma sacerdotisa",
  "La emperatriz",
  "El emperador",
  "El Hierofante",
  "Los amantes",
  "El carro",
  "La justicia",
  "El hermitaño",
  "La rueda de la fortuna",
  "La fuerza",
  "El colgado",
  "La muerte",
  "La templanza",
  "El diablo",
  "La torre",
  "La estrella",
  "La luna",
  "El sol",
  "El juicio",
  "El mundo",
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