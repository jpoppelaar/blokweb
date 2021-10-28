// JavaScript Document
var hamburgermenu = document.querySelector('button');
var navigatie = document.querySelector('.navigatie');

hamburgermenu.addEventListener('click',menuUitklappen);

function menuUitklappen(){
navigatie.classList.toggle('uitklappen');
}
