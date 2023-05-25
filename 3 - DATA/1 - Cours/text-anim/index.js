target = document.getElementById("target"); //  on bind notre id
let array = ["développeur", "photographe", "créatif"]; // on crée notre tableau
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span"); // On crée un span
  target.appendChild(letter); // On dit que le span est l'enfant de target

  letter.textContent = array[wordIndex][letterIndex];
};

createLetter();

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array.length) => {
    letterIndex++;
    createLetter();
    loop()
  }
  }, 100);
};

loop();
