// JavaScript Document
var hamburgermenu = document.querySelector('button');
var navigatie = document.querySelector('.navigatie');

// regel 2 en 3 betekent dat je een regel selecteer uit de DOM

hamburgermenu.addEventListener('click',menuUitklappen);
// Wanneer de event click word aangeroepen word de functie menuUitklappen geactiveerd

function menuUitklappen(){
navigatie.classList.toggle('uitklappen');
}
