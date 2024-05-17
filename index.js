import Pokemon from "./Pokemon.js";
/* az osztálypéldány mindig kisbetűs */
let pok1 = new Pokemon(
  "Ditto",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
  "Jó esős reggelt!",
  $(".pokemonok")
);

let pok2 = new Pokemon(
  "Charizard",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
  "Nem tudom!",
  $(".pokemonok")
);

//pok1.nev="DIIITTTTOOOO" -> ezt nem tudom már megváltoztatni
pok1.szerep="harcos"
delete pok1.mondat
/* a nevek lekérése getteren keresztül */
console.log(pok1.nev)
console.log(pok2.nev)

console.log(pok1)
console.log(pok2)