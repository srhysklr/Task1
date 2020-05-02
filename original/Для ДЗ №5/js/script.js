'use strict';

let menu = document.querySelector(".menu"),
    menuListItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    promptApple = document.getElementById('prompt');

menu.insertBefore(menuListItem[2],menuListItem[1]);

//Створюємо новий пункт, додаємо в клас
menuItemLi.classList.add('menu-item');
menuItemLi.textContent ="Пьятый пункт";
menu.appendChild(menuItemLi);

//Міняємо фон
document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 

//Змінюємо тайтл
title.textContent = "Мы продаем только подлинную технику Apple";

//Удаляємо рекламу
adv.remove();

//Створюємо питання
let question  = prompt('Каково Ваше отношение к Apple');
promptApple.textContent = question;

console.log(prompt);

