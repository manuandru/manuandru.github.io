const setPeople = value => document.getElementById('people').innerHTML = value;
const setPasta = value => document.getElementById('pasta').innerHTML = value;
const setPecorino = value => document.getElementById('pecorino').innerHTML = value;
const setGuanciale = value => document.getElementById('guanciale').innerHTML = value;
const setEgg = value => document.getElementById('egg').innerHTML = value;

let people = 4;
let pasta = 500;
let pecorino = 150;
let guanciale = 250;
let egg = 8;

function updateView() {
    setPeople(people);
    setPasta(pasta);
    setPecorino(pecorino);
    setGuanciale(guanciale);
    setEgg(egg);
}

updateView();

// compute from people
const updatePastaFromPeople = value => pasta = Math.round(value * 125);
const updatePecorinoFromPeople = value => pecorino = Math.round(value * 37.5);
const updateGuancialeFromPeople = value => guanciale = Math.round(value * 62.5);
const updateEggFromPeople = value => egg = egg = Math.round(value * 2);

// compute from egg
const updatePeopleFromEgg = value => people = Math.round(value / 2);
const updatePastaFromEgg = value => pasta = Math.round(value * 62.5);
const updatePecorinoFromEgg = value => pecorino = Math.round(value * 18.75);
const updateGuancialeFromEgg = value => guanciale = Math.round(value * 31.25);

function updateFromPeople(value) {
    updatePastaFromPeople(value);
    updatePecorinoFromPeople(value);
    updateGuancialeFromPeople(value);
    updateEggFromPeople(value);

    updateView();
}

function updateFromEgg(value) {
    updatePeopleFromEgg(value);
    updatePastaFromEgg(value);
    updatePecorinoFromEgg(value);
    updateGuancialeFromEgg(value);

    updateView();
}

document.getElementById('remove_person').addEventListener('click', () => {
    people = people - 1;
    updateFromPeople(people);
});

document.getElementById('add_person').addEventListener('click', () => {
    people = people + 1;
    updateFromPeople(people);
});

document.getElementById('remove_egg').addEventListener('click', () => {
    egg = egg - 1;
    updateFromEgg(egg);
});

document.getElementById('add_egg').addEventListener('click', () => {
    egg = egg + 1;
    updateFromEgg(egg);
});
