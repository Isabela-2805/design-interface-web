import { gsap } from "gsap";
import image1 from "url:../images/image-patch.jpg";
// refaire pour chaque image //
const emojis = [image1];
let firstChoice = null;
let secondChoice = null;
let cardsLeftToMatch = emojis.length / 2;

const board = document.querySelector("#board");

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

shuffle(emojis).forEach((emoji) => {
  const card = document.createElement("div");

  // Ajout des 2 classes, .card et .hidden
  card.classList.add("card", "hidden");
  // card.dataset.emoji = emoji;

  const image = document.createElement("img");
  image.src = emoji;
  card.appendChild(image);

  // écoute le clic sur la carte
  card.addEventListener("click", () => {
    if (firstChoice === null) {
      firstChoice = card;
      card.classList.remove("hidden");
    } else if (secondChoice === null) {
      secondChoice = card;
      card.classList.remove("hidden");

      if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
        firstchoice = null;
        secondChoice = null;
        cardsLeftToMatch = cardsLeftToMatch - 1;
        if (cardsLeftToMatch === 0) {
          window.alert("Bravo tu es trop fort!");
        }
        firstChoice = null;
        secondChoice = null;
      } else {
        setTimeout(() => {
          firstChoice.classList.add("hidden");
          secondChoice.classList.add("hidden");
          firstChoice = null;
          secondChoice = null;
        }, 1000);
      }
    } else {
      hjh;
      // on ne fait rien
    }
  });

  board.appendChild(card);
});
