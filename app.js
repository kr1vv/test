// zmienna = pojemnik w pamięci na dane = variable

// var userName = "Jan Kowalski";
// string - łańcuch znaków

// var totalMoney = 3000.5;
// number

// console.log(userName, totalMoney);

// const userName = "Jack";
// userName = "Matt!";
// console.log(userName);

// let userName = "John!";
// userName = "Rambo!";
// console.log(userName);

// console.log(userName, userSurname, userAge);
// const userFullName = userName + " " + userSurname + " " + userAge;
// const userFullName = `Imie zawodnika: ${userName}, nazwisko: ${userSurname}, wiek piłkarza: ${userAge}`;
// console.log(userFullName);

// const typeOfUserName = typeof userName;
// console.log(`typ userName to: ${typeOfUserName},
// a zwrocona wartość ma typ: ${typeof typeOfUserName}`);

// const typeOfUserAge = typeof userAge;
// console.log(typeOfUserName, typeOfUserAge);

// wartość logiczna: false, true - BOOLEAN

// const userHasMoney = true;
// const typeOfUserhasMoney = typeof userHasMoney;
// console.log(typeOfUserhasMoney);

// W procesie konwersji na wartość boolean, JS zamienia na false:
// pusty string, ZERO, undefined, null

// natomaist  na true zamieniane są:
// liczby rózne od 0, stringi, puste obiekty, puste tablice

// undefined, null - specjalny typ danych

// let userCountry = undefined;
// console.log(userCountry);
// userCountry = "Ireland";
// console.log(userCountry);

// const days = null;
// console.log(typeof days);

// const userName = "Robert";
// const userSurname = "Lewandowski";
// const userAge = 35;

// PRYMITYWNE TYPY DANYCH: string, number, boolean, undefined, null
// ZŁOŻONE TYPY DANYCH: obiekty, tablice - zbiory róznych typów danych

// const player1 = {
//   userName: "Robert",
//   userSurname: "Lewandowski",
//   userAge: 35,
//   clubs: [
//     { name: "Znicz Pruszków", years: "2003 - 2005" },
//     { name: "Legia Warszawa", years: "2005 - 2009" },
//     { name: "BVB", years: "2009 - 15" },
//     { name: "FCB", years: "2015 - 2022" },
//     { name: "FC Barcelona", years: "2022 - now" },
//     { name: "PSG", years: "2023-then" },
//   ],
// };

// const player2 = {
//   userName: "Piotr",
//   userSurname: "Zieliński",
//   userAge: 29,
//   clubs: [
//     { name: "Empoli", years: "2013-17" },
//     { name: "Napoli", years: "2017-now" },
//   ],
// };

// const players = [player1, player2];
// console.log(players.length);

// FUNKCJE - mini-program, jego zadaniem jest PRZYJać dane i zwrócić rezultach

// <--- Parametry

// function add2Numbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// const result = add2Numbers(1, 2);

// function add2Numbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// console.log(add2Numbers(1, 2));

// function add2Numbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(add2Numbers(1, 2));

// const wordLength = function (word) {
//   return word.length;
// };
// console.log(wordLength("wiosna, wiosna ah to Ty!"));

// const editString = (value) => {
//   // pozbywamy się białych znaków stringów oraz zwracam go w postaci wielkich liter
//   // trim() oraz tuUpperCase();
//   // return value.trim();

//   console.log(`Liczba znaków przed edycją równa się: ${value.length},
// po usunięciu białych znaków parametr value ma ${value.trim().length} znaków
// `);
// };

// console.log(editString("   lorem ipsum   "));

// const numAsString = "9.99";

// const convToNumber = (num) => {
//   console.log(`przed konwersją parametr jest typu ${typeof num}`);
//   return Number(num);
// };
// // convToNumber(numAsString);

// console.log(`po edycji parametr jest typu ${typeof convToNumber(numAsString)}`);

// // console.log(typeof convToNumber(numAsString));

// stwórz funcję, która jako argument przyjmie tablicę i zwróci jej długość oraz wartość ostatniego elementu

// const arrFunc = (arr) => {
//   // return arr.length;
//   // return arr[arr.length - 1];

//   return [
//     `długość tablicy: ${arr.length}`,
//     `wartość ostatniego elementu: ${arr[arr.length - 1]}`,
//   ];
// };

// console.log(arrFunc([100, 200, 300]));

// stwórz fukcje która przyjmie imie i wroci je w formacie: Imie

// const nameEdition = (userName) => {
//   const lowerCaseName = userName.toLowerCase();
//   const result = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
//   console.log(result);
// };
// nameEdition("rAdosŁaW");
// nameEdition("ToMAsz");
// nameEdition("KrZysZtof");
// nameEdition("jARosław");

const names = ["Katarzyna", "Paulina", "Kamil", "Marta", "Magda"];

const namesList = document.querySelector(".names-list");

const stapi = async () => {
  const result = await fetch("https://swapi.dev/api/people/");
  const data = await result.json();
  console.log(data.results);
};
stapi();

names.forEach((name) => {
  const li = document.createElement("li");
  li.innerText = name;
  li.classList.add("name");
  // li.style.color = "red";
  namesList.appendChild(li);
});

const gamesList = document.querySelector(".games");

const games = [
  { team1: "Barcelona", draw: "X", team2: "Atl. Madryt" },
  { team1: "Feyenord", draw: "X", team2: "Utrecht" },
];

games.forEach((game) => {
  const div = document.createElement("div");
  div.classList.add("button-row");

  const button1 = document.createElement("button");
  button1.classList.add("button");
  button1.innerText = game.team1;

  const button2 = document.createElement("button");
  button2.classList.add("button");
  button2.innerText = game.draw;

  const button3 = document.createElement("button");
  button3.classList.add("button");
  button3.innerText = game.team2;

  div.appendChild(button1);
  div.appendChild(button2);
  div.appendChild(button3);

  gamesList.appendChild(div);
});
