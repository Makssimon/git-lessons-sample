"use strict"; // директива объявляющая использование нами обновленной версии написания кода//ключевое слово   //имя функции  //в () передаем аргументы функции, в данному случае в text - Helli world!

//Длинна строки
const str ="teSt";
//console.log(str.length);
//console.log(str[2]);
//console.log(str[2] = "d");//важно таким образом изменитьстроку текст мы не можем
//ВАЖНО, str меняет при этом test, данная функция фозвращает TEST, но не влияет на string
console.log(str.toUpperCase());//редактирование текста в большой
console.log(str.toLowerCase());//уменьшение регистра

//поиск индекса строки
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));//количетво символов кусочек строки



const arr = [1 , 2, 3];
console.log(arr.length);

//вывод элемента в виде объекта dir
console.dir(Number);//можно посмотреть присущие методы числам

//вырезаем кусочек slice
const logg = "Hello World!";
console.log(logg.slice(6, 11));//обращаем внимание на включение 
console.log(logg.slice(6)); // тоже самое до конца
console.log(logg.slice(-5, -1)); //5 символов с конца строки

//метод substing - не поддерживает отрицательнцые значения
console.log(logg.substring(6, 11)); //выбор команд не ине ограничивает, просто есть особености

//substr - вместо второго числа указываем длинну для выреза
console.log(logg.substr(6, 5));

//ЧИСЛА
const num = 12.2;
console.log(Math.round(num));// округление числе

//превращение в числовой тип данных, в т.ч. с обрезанием от точки
const pixel = "12.2px";
console.log(parseInt(pixel)); //переводит число в другую систему исчисления
console.log(parseFloat(pixel));//возвращает число или строку в десятичном варианте

