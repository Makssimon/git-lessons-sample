"use strict"; // директива объявляющая использование нами обновленной версии написания кода
b = 15; //переменная и значение
console.log(b); //ничего он не ликвидирует

let number = 5; //переменная изменяемая
    number = 10;
const leftBorderWidth = 1; //значение переменной изменять не можем
console.log(number);

// если в константу помещен объект, то от изменения защищена сама константа, но не свойства внутри неё
const obj = {
    name: "Alex",
    age: 25,
    married: false,
    1: "Ohh",
    abc: { //внутри объекта можем создавать объекты  и вложенные массивы
        bd: [{} , {}] ,
        ef: {},
         }
    };

//добавляем в объект новое свойство
//obj.b = 1234;
//!!! для создания динамичиских данных внутри объекта самое то!!!
obj["b"]=1234;  //js понимает, что мы обращаемся к свойству, а не к переменной, ее мы не объявляли
console.log (obj.b); //js понимает, что мы обращаемся к свойству!!!!!!!!!
console.log (obj['b']);//js думает мы обращаемся к некой переменной, а не строчке, поэтому и ковычки
console.log (obj);

//разница объекта и массива в синтаксисе (объект всегда ключ:значение, а массив это всегда коллекция объектов)
//важно, в объекте порядок не важен, в масиве же коллекция начинается с индекса 0
obj.age = 50;
console.log(obj.name);
console.log(obj["name"]);
console.log("имя объекта: "+ obj.name + " ;" + " возраст объекта - " + obj.age + " лет.");
//console.log(obj.1);
console.log(obj[1]);

// массив. по сут тот е объект
 //ключи всегда одни               0       1       2  3    4
                    let array = [ "opel" , "BMW" , 6, {} , []]
                    console.log (array[1]);
                    console.log(array[1] + " " + array[2]);



