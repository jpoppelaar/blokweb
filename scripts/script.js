// JavaScript Document
var hamburgermenu = document.querySelector('.hamburgermenu');
var navigatie = document.querySelector('.navigatie');

hamburgermenu.addEventListener('click',menuUitklappen);

function menuUitklappen(){
navigatie.classList.toggle('uitklappen');
}
