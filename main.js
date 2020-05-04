'use strict';
let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    expensesItem = document.getElementsByClassName('expenses-item'),
    //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
    btnConfirmExpenses = document.getElementsByTagName('button')[0],
    btnConfirmOptExpenses = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    optIncomeInput = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'); 


console.log(dayValue);
