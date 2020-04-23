'use strict'
// 2) В файле скрипта создать 2 переменные (money и time)
var money = +prompt ("Ваш бюджет на месяц?","");
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


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
    a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
        console.log("DONE");
    } else {
        console.log("Не правильно! Попробуйте еще раз!")
        i--;
    }
    
};

appData.moneyPerDay = appData.budget / 30;

alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log("У Вас минимальный уровень достатка!");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
    console.log("У Вас средний уровень достатка!");
} else if (appData.moneyPerDay > 5000) {
    console.log("Вы богатый!");
} else {
    console.log("Произошла ошибка!");
}

 /*цикл WHILE:
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");
  if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
a != "" && b != "" && a.length < 50) {
    appData.expenses[a] = b;
    console.log("DONE");
}   else {
    console.log("Не правильно! Попробуйте еще раз!")
    i--;
}
    i++
};*/


/*цикл DO/WHILE:
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
    a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
        console.log("DONE");
    }   else {
        console.log("Не правильно! Попробуйте еще раз!")
        i--;
}
    while(i < 2);
*/
