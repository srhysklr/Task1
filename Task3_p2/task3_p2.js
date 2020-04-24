'use strict'

let money,time;

function start () {
     money = +prompt ("Ваш бюджет на месяц?","");
     time = prompt ("Введите дату в формате YYYY-MM-DD", "");

     while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?","");
     }
}
start();




// Создать объект appData

var appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true
};

//Задать пользователю по 2 раза вопросы

function chooseExpenses () {
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
}
chooseExpenses();

// розрахунок бюджету на день
function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

//розрахунок рівня достатку

function detectLevel () {
    if (appData.moneyPerDay < 1000) {
        console.log("У Вас минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
        console.log("У Вас средний уровень достатка!");
    } else if (appData.moneyPerDay > 5000) {
        console.log("Вы богатый!");
    } else {
        console.log("Произошла ошибка!");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        
        appData.monthIncom = save/100/10*percent;
        alert("Доход в месяц с Вашего депозита " + appData.monthIncom);
    
    }
}
 checkSavings();

 function chooseOptExpenses () {
    for (let i = 0; i < 3; i++){
     let questOptExpenses = +prompt("Статья необязательных расходов?","");

     appData.optionalExpenses[i] = questOptExpenses;
     console.log(appData.optionalExpenses);
    }
 }
 chooseOptExpenses();