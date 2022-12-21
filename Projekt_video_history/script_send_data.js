"use strict"; // директива объявляющая использование нами обновленной версии написания кода//ключевое слово   //имя функции  //в () передаем аргументы функции, в данному случае в text - Helli world!
/*
let a = 5;
    b = a;//присвоили значение а
//здесь имеем дело с приравниванием по значению, это примитив
b = b + 5; 
console.log(b);
console.log(a);
*/

///////////////////////////////////////////////////
///////////////////////ОБЪЕКТЫ/////////////////////
const obj = {
    a: 5,
    b: 1,
};
//const передается ссылка на существующий выше obj
const copy = obj;//!!!Передача значения идет по ссылке!!!
//модифицируя копию мы модифицируем первоначальный объект,
//по сути мы рабтаем не с копией
copy.a = 10;
//console.log(copy);
//console.log(obj);

////////////////////КОПИРОВАНИЕ ОБЪЕКТА 1 способ////////////////////////
//Создаем ф-ю и при помощи цикла создаем новый объект перебирая старый
function copy(mainObj) {
    let objCopy = {};//создаем копию, просто {}
    let key;//можно создавать и вне перебирающей констркции
    //у нас есть ключи которые перебираются в mainObj
    for ( key in mainObj){
        //пройдемся по старому объекту, скопируем все его свойства и перенесем их в новый объект
        objCopy[key] = mainObj[key];//в пустую копию передаем новое свойство
    }
    return objCopy
}

//тестируем 
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //копия от предыдущего объекта

newNumbers.a = 10;//поверхностная копия объектов
newNumbers.c.x = 10;//Обратились ссылочно к глубокому объекту
console.log(newNumbers);
console.log(numbers);

////////////////////КОПИРОВАНИЕ ОБЪЕКТА 2 способ////////////////////////
//метод соединения сразу нескольких объектов
//и важно! Создали независимую копию объекта
const add = {
    d: 17,
    e: 20,
};
console.log(Object.assign(numbers, add));
//numbers - объект в который все хотим поместить, 
//add - тот объект который помещаем

//тоже самое при создании новой отдельной копии
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

////////////////////////////////////////
/////////МАССИВЫ///////////////////////
const oldArray = ['a', 'b' , 'c'];
//1 метод slice абсолютная копия
const newArray = oldArray.slice();

newArray[1] = 'qwerty';
console.log(newArray);
console.log(oldArray);

// 2. метод оператор разворота sprad (превращает структуру в данные)
const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

//пример посложнее
function log(a, b, c) {
    console.log(a),
    console.log(b),
    console.log(c);
}
//допустим пришел масив из сервера
const num = [2, 5, 7];

log(...num);

//4 метод. копирования....
const array = ['a', 'b'];
const newAarray = [...array];
const q = {
    one: 1,
    two: 2
}
const newObj = {...q};

console.log(newAarray);