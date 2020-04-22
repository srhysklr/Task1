'use strict'
// 2) В файле скрипта создать 2 переменные (money и time)
var money = prompt ("Ваш бюджет на месяц?","");
console.log("Ваш бюджет на месяц " + money + "$");

var time = prompt ("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

// Создать объект appData

var appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

//Задать пользователю по 2 раза вопросы

let q1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    q2 = prompt("Во сколько обойдется?",""),
    q3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    q4 = prompt("Во сколько обойдется?","");

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert(appData.budget / 30);