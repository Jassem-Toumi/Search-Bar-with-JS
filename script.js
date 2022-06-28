import cardsArray from "./cards.js";
 
const main = document.querySelector('main');
      
const cardsWrapper = document.createElement('div');
cardsWrapper.classList.add('client__cards');

const cardsinfo =  cardsArray.map((card) =>{
    
    let cardcontainer = document.createElement('div');
    cardcontainer.classList.add('card');

    cardcontainer.innerHTML = `
    <h2>${card.name}</h2>
    <h3>${card.gmail}</h3>
    `;
  return cardcontainer;
})


cardsinfo.forEach((card)=>{
    cardsWrapper.append(card)

    console.log(card.childNodes[3].innerText);
});


main.append(cardsWrapper);


// Setting up the Search Input
const searchInput = document.querySelector('[searchInput]');

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    cardsinfo.forEach(card => {
      const isVisible =
        card.childNodes[1].innerText.toLowerCase().includes(value) ||
        card.childNodes[3].innerText.toLowerCase().includes(value)
        card.classList.toggle("hide", !isVisible)
    })
  })
