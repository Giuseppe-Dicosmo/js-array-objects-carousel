const items = [
  {
    immagine:'img/01.jpg',
    stato:'Svezia',
    descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  },
  {
    immagine:'img/02.jpg',
    stato:'Svizzera',
    descrizione:'Lorem ipsum',
  },
  {
    immagine:'img/03.jpg',
    stato:'Gran Bretagna',
    descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    immagine:'img/04.jpg',
    stato:'Germania',
    descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  },
  {
    immagine:'img/05.jpg',
    stato:'Paradise',
    descrizione:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  }
];

// Creare un div per mettere l'immagine.
const containerImg = document.querySelector (".slide")
console.log(containerImg)

const arrowsTop = document.getElementById ('cr_arrows_top_a')
console.log(arrowsTop)

const arrowsBottom = document.getElementById ('cr_arrows_bottom_b')
console.log(arrowsBottom)

let cambiaImmagine = 2;

// -----------------------------------------


function image(lista) {

  let immagini = [], stati = [], descrizioni = [];


  lista.forEach( (elemento) => {
    const {immagine, stato, descrizione} = elemento;

    immagini.push(immagine);
    stati.push(stato);
    descrizioni.push(descrizione);
  })

  // console.log("immagini", immagini, stati, descrizioni)

  return {
    immagini,
    stati,
    descrizioni
  }

}

const liste = image(items)
console.log("🚀 ~ liste", liste)



// Ho appeso le immagini dentro al contenitore
for (let i = 0; i < liste.immagini.length; i++){

  const crItem = document.createElement ('div')
  crItem.classList.add('cr_item')
  containerImg.append(crItem)

  crItem.innerHTML = `<img src="${liste.immagini[i]}"></img>`

  if (cambiaImmagine == i) {
    crItem.classList.add('cr_active')
  }
}





const allDivItem = document.querySelectorAll(".cr_item")

arrowsBottom.addEventListener('click', function(){
  console.log('indietro')

  allDivItem[cambiaImmagine].classList.remove("cr_active");
  cambiaImmagine++;
  allDivItem[cambiaImmagine].classList.add("cr_active");

})

arrowsTop.addEventListener('click', function(){
  console.log('indietro')

  allDivItem[cambiaImmagine].classList.remove("cr_active");
  cambiaImmagine--;
  allDivItem[cambiaImmagine].classList.add("cr_active");

})





const containerImgAnte = document.querySelector (".arrows")
console.log(containerImgAnte)

for (let y = 0; y < liste.immagini.length; y++){

  const crItemAnte = document.createElement ('div')
  crItemAnte.classList.add('item_g')
  containerImgAnte.append(crItemAnte)

  crItemAnte.innerHTML = `<img src="${liste.immagini[y]}"></img>`

}

