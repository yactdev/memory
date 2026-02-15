import { datos } from "./data.js";
import { shuffleArray } from "./services.js";
let options = [];
let discoveredCards = [];

function render(n) {
  // comienzo del juego render the table

  const container = document.querySelector(".card-container");
  const defaultimg =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/126.png";

  let ramdon = Math.floor(Math.random() * (n - 0));
  let datosRender = datos.splice(ramdon, n / 2);
  datosRender = datosRender.concat(datosRender);
  shuffleArray(datosRender);

  // console.table("este ", shuffleArray(datosRender));
  for (let i = 0; i < datosRender.length; i++) {
    container.innerHTML += datosRender[i]
      ? `<div id = "${i}" class="card"><div  class ="card-back"> <img class ="images" id= "${datosRender[i]}" src="${datosRender[i]}" alt="" > </div> <div id= "${datosRender[i]}" class=" card-front">OPEN</div></div>`
      : `<div class="card"><div  class ="card-back"> <img class ="images" id = "${defaultimg}" src="${defaultimg}" alt="" > </div> <div id= "${datosRender[i]}" class="  card-front">OPEN</div></div>`;
  }
  const containers = document.querySelectorAll(".card");
  let lastcard = [];
  let isComparing = false;
  containers.forEach((card) => {
    card.addEventListener("click", (index) => {
      // Prevent clicking while comparing or if card is already flipped
      if (isComparing || card.classList.contains("is-flipped")) {
        return;
      }

      card.classList.add("is-flipped");

      if (options.length < 2) {
        options.push(index.target.id);
        lastcard.push(card);
        console.log(options);
        
        if (options.length >= 2) {
          isComparing = true;
          if (options[0] === options[1]) {
            discoveredCards.push(options[0]);
            console.log("*".repeat(50));
            console.table("antes de borrar", options);

            options = [];
            console.log("principal :", discoveredCards);
            lastcard = [];
            isComparing = false;
          } else if (options[0] !== options[1]) {
            console.log("bad");

            console.log(options[0]);

            setTimeout(() => {
              lastcard[0].classList.remove("is-flipped");
              lastcard[1].classList.remove("is-flipped");
              console.log("volteada la tarjeta");
              options = [];
              lastcard = [];
              isComparing = false;
            }, 1000);
          }
        }
      }

      //
    });
  });
}

// boton.addEventListener(
//   ("click",
//   () => {
//     console.log("CLICKED");
//   })
// );
render(12);
