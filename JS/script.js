
// elementi presi da HTML
const itemsWrapper = document.querySelector('.items-wrapper');

const listaImmagini = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];


// creo ciclo immagini
for (i = 0; i < listaImmagini.length; ++i) {
  const image = listaImmagini[i];
  itemsWrapper.innerHTML += `<img src="${image}" class="hide" alt="">`;
  
}