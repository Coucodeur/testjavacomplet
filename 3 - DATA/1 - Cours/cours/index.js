 // Rappel types de données
let string = "Chaine";
let number = 13;
let boolean = true;
let maViariable; // type Undifined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "Nodejs"],
  admin: false,
};
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "Nodejs"],
    admin: false,
  },
  {
    pseudo: "Samina",
    age: 24,
    technos: ["CSS", "React", "Nodejs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "Nodejs"],
    admin: true,
  },
];
// console.log(data[2].age);

// --------------------------
// Les structures de controle
// --------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // valeur si faux
}

//  While
let w = 0;
while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} ${
  //   user.age + " ans"
  // } maitrise :  ${user.technos}</li>`;
}
// on a dit 32:52 !! (push depuis le mac)

// on déclare la valeur de i | jusqu'ou on boucle |
for (i = 0; i < data.length; i++) {
  // document.body.innerHTML +=
  //   "<h2>" +
  //   data[i].pseudo +
  //   " " +
  //   data[i].age +
  //   " ans " +
  //   "Technos matrisées : " +
  //   data[i].technos +
  //   "</h2>";
}

//  le 25/05 on s'arrete à 43:25 | les switch case :)
 
document.body.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'php':
      document.body.style.background = "blue"
      console.log('php click');
      break;
    case 'javascript':
      document.body.style.background = "yellow"
      console.log('java click');
      break;
    case 'python':
      document.body.style.background = "purple"
      console.log('python click');
      break;
    default:
      document.body.style.background = "none"
      console.log('click ailleur');
  }
})