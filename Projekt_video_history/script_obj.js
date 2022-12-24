"use strict"; // директива объявляющая использование нами обновленной версии написания кода//ключевое слово   //имя функции  //в () передаем аргументы функции, в данному случае в text - Helli world!

///////////////////////////////////////////////
///////////callback///////////////////////////

function first(){
    //Do something
    setTimeout (function() {
       console.log(1);   //выведется при задержке в 500 мл
    }, 500);
}
function second(){
    console.log(2);
}
first();
second();

//наглядный пример
//функция JS выполнит console только когда дойдет до callback
//вместо callback вызывается done  и уже вызывается внутри функции
function learnJS(lang, callback) { //шаблон. позднее в callback добавим другую ф-ю
    console.log(`Я учу: ${lang}`)
    callback();
}

function done(){ //круглые скобки не ставим, т.к.сейчас не запускаем.
    // а передаем для дальнейшего использхования
console.log('Я прошел этот урок');
}
//
learnJS('JavaScript' , done );


//Объект
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){ //кастомный метод
        console.log("Test");
    }
};
options.makeTest();//запускаем наш метод

//Деструктуризация - вытаскивание отдельных структур
const {border, bg} = options.colors;//вытащили свойства в качеств отдельной переменной
console.log(border);
//методы объекта:
console.log(Object.keys(options)); //получаем массив
console.log(Object.keys(options).length);//получаем количество элементов в массиве
//console.log(options['colors']['border']); //вывод пары ключ значение
//delete options.name; //удаление пары
//console.log(options);

//перебрать содержимое объекта
/*let counter = 0;
for(let key  in options){//срабатывать будет столько раз сколько у нас в нем key.ВАЖНО - "IN"
    if (typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);//перебор через key пар ключ: значение    
            //counter++;//получаем количество свойств вместе с вложенными
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);//перебор через key пар ключ: значение
    counter++;//количество объектов только внешнего уровня
    }
}
console.log(counter);*/

//массивы и псевдомассивы
const arr = [0, 1, 2, 3, 4, 5, 8];
//console.log(arr.length);//какое соотношение индекса к значению length (к нему всегда +1)
arr[99] = 0; //записали 99 на последнюю позицию, как бы 100 элементов

arr.pop();//удаление последнего элемента
arr.push(9);//добавление элемента в конец
//перебрать элементы внутри массива
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);

for(let value of arr){ //переберем каждый отдельный элемент value
    console.log(value);
}

//метод принимающий в себя callback ф-ю, выполняется строго после определенных действия.
// item - тот аргумент который перебираем. Здесь i - номер по порядку, можем его так же сохранить
const arr = [0, 1, 2, 3, 4, 5, 8];
arr.forEach(function(item, i, arr){//применяет функцию на каждом элементе массива
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//отовары по порядку
const str = prompt("", "");//ИЗ СТРОК > МАССИВ. только через браузер.
// вводим элементы и получаем массив

const products = str.split(", ");//для массива задали склеивание символов
//метод сортировки
products.sort();//всегда сортируем элементы как с роки
console.log(products.join("; "));//ОБРАТНО,ИЗ МАССИВА В СТРОКИ, так же задаем пробельные символы

const arr1 = [1 , 10, 20, 5];
arr1.sort(); //сортирует по первой цифре...как СТРОКИ
arr1.sort(compareNum);//вывод отсортированнного массива
console.log(arr1);
//зададим этой сортировке колбэк
function compareNum(a, b) {//в аргументе два сравниваемыъ числа
    return a - b;//возвращает a - b
}


////////////////////////////////
//////ЗАДАЧА 1/////////////////
///////////////////////////////
// ф -я , которая будет принимать в себя объект со всеми данными
// и возвращать строку с опытом
//схема: 1 деструктуризация, 2 формирование нового объекта, 3 - перевод его в строку
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    //решение
    //Для деструктуризации задаем метод и присваиваем ему произвоьный аргумнт plan
    //в аргумент plan позднее передадим значение 
    showAgeAndLangs: function(plan) {
        const {age} = plan; //вытащили свойства {age} = 29
        const {languages} = plan.skills;//вытащили свойство {languages: [ 'ru', 'eng' ]}
        let str = `Мне ${age} и я владею языками: `;//выводим опыт скилы

        //метод пеербора forEach и пишем продолжение ыввода с опытом
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;//toUpperCase() - делаем строку заглавной
        });
        //console.log(str);
        return str;
    }
};
//передаем аргумент personalPlanPeter в план, соответственно все содержание в plans
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills; //вытаскиваем опыт из skills
    return exp;
}
showExperience(personalPlanPeter);

//ф-я возвращения строки
function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;//{ programmingLangs: { js: '20%', php: '10%' } }
    for (let key in programmingLangs) { //перебор ключей
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
};

showProgrammingLangs(personalPlanPeter);


//////////////////////////////////////
/////////////ЗАДАЧА 2/////////////////
//1) Напишите функцию showFamily, которая будет принимать в себя 
//массив строк и возвращать сообщение в нужном формате.
//showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//Имена подставляются автоматически из массива. 
//Если массив пустой, то выводится сообщение 'Семья пуста'

const arrayFamily = [ 'Peter', 'Ann', 'Alex', 'Linda'];
const newString = showFamily(arrayFamily);

function showFamily(arrayFamily){
    let str = ''; //задаем переменную куда будем вести запись
    
    if (arrayFamily.length === 0) {
        str = 'Семья пустая';
    } else {
        str = "Семья состоит из: ";
    }    
    arrayFamily.forEach(member =>{
        str += `${member} `
    });
        return str;      
};
showFamily(arrayFamily);
console.log(newString);

//////////////////////////////////////
/////////////ЗАДАЧА 3/////////////////
// напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
//вывод в консоль строки в нижнем регистре.
const favoriteCities = ['liSSaBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

//еще один вариант
const showFamily = arr26 => arr26.length ?
 `Семья состоит из: ${arr26.join(' ')}` 
 : `Семья пуста`;

 //////////////////////////////////////
/////////////ЗАДАЧА 4/////////////////
//Напишите функцию reverse, которая принимает в себя строку и 
//возвращает эту строку в обратном порядке.
//Пример: 
const someString = ["Almaty", "Astana", "Karagandy", "Shymkent"];
const reverse = someString.reverse();
//reverse(someString) => 'gnirts egnarts emos si sihT'
console.log(reverse);

//варианты
const someString = 'This is some strange string';

function reverse(str){
    if (typeof(str) !== 'string') {
            return "Ошибка!";
        }
        // Самый оптимальный вариант решения
        console.log(str.split('').reverse().join(''));
        return str.split('').reverse().join('');
            // Решение при помощи цикла
        // let newStr = '';
        // for (let i = str.length - 1; i >= 0; i--) {
        //     newStr += str[i];
        // }
        // return newStr
};
reverse(someString);

//////////////////////////////////////
/////////////ЗАДАЧА 5/////////////////
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

//2 вариант
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
 
let totalCurrencies = baseCurrencies.concat(additionalCurrencies); /* объединяем элементы обеих массивов в новый массив */
 
function availableCurr(arr, missingCurr) { // в arr приходит ['USD','EUR','UAH','RUB','CNY'];
 
    let str = 'Доступные валюты:\n';
 
    if (arr.length == 0) {
        str = 'Нет доступных валют'; 
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === missingCurr) {
                continue;
            } else {
                str += `${arr[i]}\n`; 
            }
        }
    }
 
    return str;
}
 
availableCurr(totalCurrencies,'EUR');












