
// elementi presi da HTML
const itemsWrapper = document.querySelector('.items-wrapper');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');


// salvo le immagini in un array
const listaImmagini = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

// quando un item è pari a 0 poi toglierò classe hide
let imgCounter = 0

// creo ciclo immagini
for (i = 0; i < listaImmagini.length; ++i) {
  // prendo un'immagine singola
  const image = listaImmagini[i];

  console.log(image);
  // stampo in pagina dentro wrapper x il numero della lunghezza dell'array
  itemsWrapper.innerHTML += `<img src="${image}" class="hide item" alt="">`;
}

// prendi tutti gli elementi che hanno item come classe
const itemCollection = document.getElementsByClassName('item');
console.log(itemCollection);

// imposto la classe hide al counter delle img in modo da applicarsi in automatico grazie al ciclo
itemCollection[imgCounter].classList.remove('hide');

btnNext.addEventListener('click', function(){

});

