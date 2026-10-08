import { gsap } from "gsap";
import image1 from "url:../images/image-patch.jpg";
import image2 from "url:../images/peigne.jpg";
import image3 from "url:../images/creme.jpeg";
import image4 from "url:../images/mascara.jpeg";
import image5 from "url:../images/parfum.jpeg";
import image6 from "url:../images/rouge a levre.jpeg";
import image7 from "url:../images/blush.jpeg";
import image8 from "url:../images/fard a paupiere.jpeg";

// refaire pour chaque image //
const emojis = [
  image1,
  image1,
  image2,
  image2,
  image3,
  image3,
  image4,
  image4,
  image5,
  image5,
  image6,
  image6,
  image7,
  image7,
  image8,
  image8,
];
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
  card.dataset.emoji = emoji;

  const image = document.createElement("img");
  image.src = emoji;
  card.appendChild(image);

  // écoute le clic sur la carte
  card.addEventListener("click", () => {
    if (!card.classList.contains("hidden")) return;
    if (firstChoice === null) {
      firstChoice = card;
      card.classList.remove("hidden");
    } else if (secondChoice === null) {
      secondChoice = card;
      card.classList.remove("hidden");

      if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
        firstChoice = null;
        secondChoice = null;
        cardsLeftToMatch = cardsLeftToMatch - 1;
        if (cardsLeftToMatch === 0) {
          window.alert("Bravo tu es trop forte!");
        }
        firstChoice = null;
        secondChoice = null;
      } else {
        setTimeout(() => {
          firstChoice.classList.add("hidden");
          secondChoice.classList.add("hidden");
          firstChoice = null;
          secondChoice = null;
        }, 800);
      }
    } else {
      // on ne fait rien
    }
  });

  board.appendChild(card);
});
