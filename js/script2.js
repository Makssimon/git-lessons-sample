"use strict"; // директива объявляющая использование нами обновленной версии написания кода
/**************УСЛОВИЯ***********/
//если (условие - это всегда буллин) то выполняется Ок!, иначе выполняетя Error!
/*if (4==5) {
    console.log("Ок!")
}else {
    console.log("Error!")
};

if (4==='4') {
    console.log("Ок!")
};

const num = 50;
if (num<49) {
    console.log("Число меньше 50");
} else if (num>100){
    console.log ("Число больше 100!" );
} else if(num<100) {
    console.log("Значит наше число от 50 до 99!");
};
//проверяемое условие / если верно КО/ не верно Error 
(num === 50) ? console.log("Ок!") : console.log("Error!");*/

//результатом логических операция, это всегда булевое значение, в данном случае true
/*const hamburger = true;
const fries = true;
if (hamburger && fries) { console.log("Я сыт")};
 console.log((hamburger && fries)); 

const num = 50;
//swith - всегда строгое сравнение
switch (num) {
    case 49: console.log("Неверно!");
        break;
    case 100: console.log("Неверно!");
        break;
    case 51: console.log("В точку!");
        break;
    default: console.log("Не в этот раз!");
        break;
};*/

//ВСЕГДА FALCE: 0, " пустая строка   ", null, undefined, Nan
//ВСЕГДА TRUE: Все остальное!!!!
//&& как натыкается на false, сразу прекращает свою работу, т.е.ищет всега первое ложное значение если оно есть
//когда операторы true/false работают с конкретными значениями то и возвращают они цифры
//&& когда все значения правдивы, вытаскивает значение последнего правдивого элемента
1&&0;//0
1&&5;//5 последнее сравниваемое
null && 5;//null
0 && "abc";//0

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
    console.log("Все довольны!");
}else {
    console.log("Мы уходим!");
}
        //консоль выдаст 0(false)      0 <> 2 = 2   /консоль выдаст 2 (true)
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets );

console.log(!0); //не false = true




/**************ЦИКЛЫ***********/
let num = 50; //let т.к. будет меняться
//пока условие выполняется мы будет выполнять действия
//while(num < 55) {
//    console.log(num);
//    num++;
//}

//итерация - повторенни цикла

do {
    console.log(num);
    num++;
}
while (num < 55);

/*****************цикл for**********************/
    for (let i = 1; i < 8; i++ ) {
        if (i === 6) {
           // break;
           continue;//исключает i = 6
        }
        console.log(i)
    };
    //1 - ключевое слово for
    //2 - с началом цикла создается переменная let i - итератор;
    //3 - условие при котором цикл остановит свою работу i < 8;
    //4 - шаг цикла, как правило из итератора с инкрементом (i ++);

    //вложенные циклы
    first:for (let i = 0; i < 3; i++ ) {
        console.log(`First level: ${i}`); 
        for (let j = 0; j < 3; j++ ) {
        console.log(`Second level: ${i}`);
            for (let k = 0; k < 3; k++ ) {
            if (k ===2) continue first; //first - метки.т.е. срабатывает k ===2
            //срабатывает continue
            //срабатывает поиск нужной метки
            //переход сразу к следующей итерации цикла начиная с first
            //в результате третий цикл не доходит дальше 2
            console.log(`Fhird level: ${k}`);
            }
        }    
    };




    //задача пирамидка
    //определяем базовые параметры:
    let result = ""; //определили некую строчку
    let length = 7; //определили высоту елояки
   //логика - увеличивается не только количество строк но и содержимое строк, т.е.
   // 2 цикла: один формирует ряды, другой внутренности рядов
    for (let i = 1 ; i < length ; i++) { //цикл высоты
        for (let j = 0; j < i ; j++) {//формиремся на * и ориентируемсу на строку которая идет по номеру
            result +="*";
        }
        result +="\n"; // т.е. каждый раз идет перенос строки!!!
    }
    console.log(result);
    //*
    //**
    //***
    //****
    //*****
    //******
//Задачки
    //При помощи цикла выведите числа от 5 до 10 в консоль. 
    //5 и 10 включительно. Цикл можно использовать любой
    let n = 5;
    while (n <= 10){
        console.log(n);
        n++;
    };
    //При помощи цикла for вывести числа от 20 до 10 в консоль.
    // В обратном порядке (20, 19, 18...). 
    //Когда цикл дойдет до числа 13 - остановить весь цикл
   
    for (let i = 20 ; i > 10 ; i--) {
        if (i === 13){
        break;   
        }
           console.log(i);
    };

   // При помощи цикла for выведите чётные числа от 2 до 10 включительно
    for (let i = 2; i <= 10 ; i++ ) {
        if (i % 2 !== 0){
            continue;   
            }
            console.log(i);
    };

    //создать цикл while пересчет четных чисел
    /*let i = 2;
    while(i <= 15) {
        i++;
        if (i % 2 === 0){
            continue;   
        }
        console.log(i);
    };*/

    //!!второй верный вариант
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }


    //Заполните массив цифрами от 5 до 10 включительно. 
    //Помните, что элементы массива можно сформировать так же, 
    //как и обращаться к ним: arr[0]
    const arr = [];
    
    for (let i = 5; i <= 10; i++) {
    arr.push(i);        
    }
    console.log(arr);

    //2 вариант
    const arrayOfNumbers = [] ; 

    for (let i = 5; i < 11; i++) {
        //каждому новому индексу массива присваивается новое значение
        arrayOfNumbers[i - 5] = i; //5-5=5, т.е. 0 = 5/1=6/2=7/3=8/4=9/5=10/6=11
    }
    console.log(arrayOfNumbers);
   //return arrayOfNumbers; 
    
/**************************************** */
   
for (let i = 2; i <= 16; i++) {
         if (i % 2 === 0) {
             continue;
         } else {
             console.log(i);
         }
     }

//Заполните новый массив (result) числами из старого (arr). 
//Количество элементов в массиве можно получить как arr.length, 
//а к элементам обращаемся все так же: arr[0], arr[1] и тд. 
const array = [3, 5, 8, 16, 20, 23, 50];
const results = [];//у нас есть новый массив
//у нас есть количество элементов.
for(let i = 0 ; i < array.length ; i++){
    results[i] = array[i];//каждому индексу присваиваем новое значение
    //i = 1:  0 индекс result = 0 индексу arrey = 3
    //i = 2:  1 индекс result = 1 индексу arrey = 5
    //i = 3:  2 индекс result = 2 индексу arrey = 8
    //i = 4:  3 индекс result = 3 индексу arrey = 16 и т.д. 
}
console.log(results);

//Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
//а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0 ; i < data.length ; i++){ //
        if (typeof(data[i]) === "number"){ //выполняется(1 - 1) = number
           data[i] = data[i] * 2; //то индексу массива 0 (1 - 1), т.е. 5  
           // мы присваиваем значение элемента массива (1-1)*2=i0 * 2: т.е.5*2
           //затем 2 - 1 = 1 - number присваиваем (2-1)*2=i1 * 2 т.е. 20*2
    } else {
        data[i] = `${data[i]}-done"`;//всем прочим элементами массива 
        //мы присваиваем их же сзанчение + done
    }
}; 
console.log(data);


//Разверните массив data наоборот при помощи цикла и 
//запишите данные в массив result. Д/б: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const data2 = [];

    for(let i = 1 ; i <= data1.length ; i++){ 
        data2[i - 1] = data1[data1.length - i]; //4 //4-1//4-2=3//
       //i=1// 1-1=0  |  3=4-1 //// 
       //i=2// 2-1=1  |  2=4-2
       //i=3// 3-1=2  |  1=4-3
       //i=4// 4-1=3  |  0=4-4
    }
    console.log(data2);   
     

let numBase = 5;
let nunProgressive = 3;

    for( let i = numBase ; i < nunProgressive ; i++  ){
        console.log(i);
        return i
    };
    
