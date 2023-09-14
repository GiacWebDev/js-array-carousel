

// elementi presi da HTML
const itemsWrapper = document.querySelector('.items-wrapper');
const btnUp =        document.querySelector('.btn-arrow.up');
const btnDown =      document.querySelector('.btn-arrow.down');


// salvo le immagini in un array
const listaImmagini = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

btnUp.classList.add('hide');

// counter parte da 0
let imgCounter = 0;


// creo ciclo immagini
for (let i = 0; i < listaImmagini.length; ++i) {
  // creo variabile per il risultato del ciclo = image
  const image = listaImmagini[i];
  // stampo in pagina dentro wrapper x il numero della lunghezza dell'array
  itemsWrapper.innerHTML += `<img src="${image}" class="hide item" alt="">`;
}

// prendi tutti gli elementi che hanno item come classe
const itemCollection = document.getElementsByClassName('item');
// // e gli rimuovo la classe hide
itemCollection[imgCounter].classList.remove('hide');


btnDown.addEventListener('click', function(){
  // nascondo ila img al click
  itemCollection[imgCounter].classList.add('hide');
  // quanto il counter avanza di 1 riattivo la visibilità rimuovendo hide
  imgCounter++;

  if (imgCounter === listaImmagini.length) imgCounter = 0;
  
  itemCollection[imgCounter].classList.remove('hide')
  
});

btnUp.addEventListener('click', function(){
  
  itemCollection[imgCounter].classList.add('hide');
  
  imgCounter--;

  if (imgCounter < 0) imgCounter = listaImmagini.length - 1;
  
  itemCollection[imgCounter].classList.remove('hide')
  
});


