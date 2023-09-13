
// elementi presi da HTML
const itemsWrapper = document.querySelector('.items-wrapper');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');


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
for (let i = 0; i < listaImmagini.length; ++i) {
  // prendo un'immagine singola
  const image = listaImmagini[i];

  console.log(image);
  // stampo in pagina dentro wrapper x il numero della lunghezza dell'array
  itemsWrapper.innerHTML += `<img src="${image}" class="hide item" alt="">`;
}

// prendi tutti gli elementi che hanno item come classe
const itemCollection = document.getElementsByClassName('item');

// imposto la classe hide al counter delle img in modo da applicarsi in automatico grazie al ciclo
itemCollection[imgCounter].classList.remove('hide');

btnDown.addEventListener('click', function(){
  // nascondo ila img al click
  itemCollection[imgCounter].classList.add('hide');
  // quanto il counter avanza di 1 riattivo la visibilità rimuovendo hide
  imgCounter++
  itemCollection[imgCounter].classList.remove('hide')
});

btnUp.addEventListener('click', function(){
  itemCollection[imgCounter].classList.add('hide');
 
  imgCounter--
  itemCollection[imgCounter].classList.remove('hide')
});

console.log(itemCollection);

