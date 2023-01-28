"use strict"; // директива объявляющая использование нами обновленной версии написания кода
//ключевое слово   //имя функции  //в () передаем аргументы функции, в данному случае в text - Helli world!
        let num = 10; //-глобальная переменная

        function showFirstMessage(text){
            //тело функции действия
            console.log(text);//когда функция будет вызываться то выведет в консоль значение аргумента
            let num = 5; // num - локальная переменная и работает локально, только внутри функции
            //num = 1; //при наличии глобальной переменной num мы можем просто объявить переменную фнутри
            console.log(num);//вначале ищет num внутри функции, если не находит, то ищет глобальную 
        };
//!!!!!имя функции должно быть с глаголом и припиской над чем выполняется действия!!!
        //самое Важное, функцию нужно вызвать и передать ей аргумента в ()!!!
        showFirstMessage("Hello world!");
        console.log(num);//Важно, всегда обращается к глобальной переменной,
        // внутри функции он ее не увидит, 
        //кроме случаев если она не объявлена через let!!! 

        //калькулятор
        //особенность, функция работает до того, как она вызвана (функция declaration)
        console.log (calc(3, 4));
        console.log (calc(5, 6));
        console.log (calc(7, 8));

        function calc (a, b) {
            return (a + b); //1 - окончание функции/ 2 - возвращение значения во внешний мир
            console.log ("dwed");//- этот код после return уже не выполнится
        };
        
       //пример использвования return
        function ret( ){
            let num = 50;//зададим локальную переменную
            //.... некий код
            //....
            return(num); //возвращаем значение num "наружу"
        }; //- не ставим при function declaration
        const anotherNum1 = ret(); //зададим постоянную переменную и присвоим ей результат выполненной функции
        console.log(anotherNum1); //вывод 

        //function expression
        //создадим переменную и поместим в нее функцию
        const logger = function(value){
            console.log(value)
        }; //- ставим при function expression
            //вызовем функцию
            logger("Hello function declaration!!!");

            //стрелочная функция!!!не имеет вызова, используется в обработчиках события
                    //аргументы ф-и//действие ф-и
            const calcul=(a, b) => {return a + b}; 

        //!!!про замыкание. 1 чать
        let a = 3            //1
        function addTwo(x) { //2 сначала в глобальный стек объявлена х. т.е. цифра 3
        let ret = x + 2      //3 далее объявлена ret, но пока еще undefinde, после присваивание она равна 3 + 2
        return ret           //4 возвращение в глобальную область готового ret
        }                    //5 выход функции из глобальной области
        let b = addTwo(a)    //6 //как только переменная объявлена она undefined!Через = мы присваиваем bновое значение
        console.log(b)       //7 //появление b после всег цикла мини инструкция в области видимости
        //после return или } функция останавливается и выходит из стека выполнения
        //все объявленные переменные стираются. они более не доступны

        //!!!про замыкание. 2 чать
    let val = 7                     //1
    function createAdder() {        //2
        function addNumbers(a, b) { //3
        let ret = a + b             //4
        return ret                  //5 
    }                               //6
    return addNumbers               //7
  }                                 //8
    let adder = createAdder()       //9 переменная adder хранит описание функции, до тех пор пока не вызвана и не определены значения 
 //хранить описание функции даже после разрушения после return,
 //ее описание будет невидимо для программы пока не будет вызвано
    let sum = adder(val, 8)        //10 - параметры передаютс в adder, т.е. автоматически в  функцию 
    console.log('example of function returning a function: ', sum);

//замыкание часть 3
//одна функция возвращает другую функцию
function createCounter() {         //1
    let counter = 0                //2
    const myFunction = function() { //3
//Строки 3–6. Объявляем новую переменную myFunction.
// Эта переменная объявлена в локальной области выполнения.
// Пока что контентом этой переменной является описание функции function. 
//ф-я fanction описана в строках 4 и 5. 
//Но также мы создаём замыкание, оно - часть ф-и function. 
//Замыкание хранит переменные из своей области видимости. 
//В нашем случае это переменная КАУНТЕР (значение которой 0).
        counter = counter + 1        //4 это 1 : counter = undefined + 1 т.е. 0 + 1 = 1
       return counter                //5
     }                               //6
    return myFunction 
    //мы возвращаем описание функции и её ЗАМЫКАНИЕ,
    // рюкзак с переменными, которые были в области
    // видимости во время её создания.               //7
    }                                //8
    const increment = createCounter()//9 increment = определению ф-ции createCounter. Возвращённое значение (1) присвоено c1
    //!!!Замыкание содержит все переменные,
    // которые находятся в области видимости во время создания функции.
    // Это аналогично рюкзаку. 
    const c1 = increment()          //10 ф-я increment, она содержит определение функции возвращенной в 4-5 строках и!!!Замыкание ФУНКЦИИ
    const c2 = increment()          //11
    const c3 = increment()          //12
    console.log('example increment', c1, c2, c3) //13

    //!Ключевое: когда функция объявляется,
    // то она содержит описание функции и замыкание.
    // Замыкание — это коллекция всех переменных из области видимости 
    //во время создания функции.
        //практикум по замыканию
    function createCounter() {         
        let counter = 0                
        const myFunction = function() { 
           counter = counter + 1 ;
           return counter;        
         } 
        //console.log(counter);  
        return myFunction
        } 
        const increment1 = createCounter ();
        console.log(increment1);//[Function: myFunction]
        console.log(createCounter()); //[Function: myFunction] 
        
        //const w1 = increment1();
        //const w2 = increment1();
        //console.log(increment1());
        //console.log(w1);
        //console.log(w2);


    //ФУНКЦИЯ ДЛЯ ПЕРЕСЧЕТА
    const usdCurr = 28;
    const discount = 0.9;

    function convert(amount, curr){ //аргумент. изначально без данных
       // console.log(curr * amount); //amount - значение которое приходит в функцию
    //curr - убираем привязку к конкретной валюте, делаем функцию универсальной   
        return curr * amount; //когда нам нужно вернуть для использования в других функциях   
    }
    
    function promotion(result){
        console.log(result * discount);
    }
    promotion(convert(500, usdCurr)); 
    //т.е. запускается фкнуция converter(amount,curr)
    //и возвращает результат
    //этот результат мы получаем в виде аргумента в ()promotion 
    //далее автоматически это значение передается в result

    //остановка функции returnon. Результат undefinde
    function test() {
        for( let i = 0; i < 5; i++) {
            console.log(i);
            if(i === 3) {return}   // это не просто brake, это остановка вообще всей функции
        }
        console.log("Done");
    }

    test();

    //еще один тест...ф-я всегда делает return. В подтверждение мы тут получаем true
    function doNothing() {};
    console.log(doNothing() === undefined);

//Задачки
    function sayHello(name) {
        string =  `Привет, ${name}!`;
        return string
    }
    sayHello('Aнтон');
    console.log(string);
//Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и
// возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
//Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
function returnNeighboringNumbers(num) {
    const array = [];
        array[0] = (num - 1);
        array[1] = num;
        array[2] = (num + 1);
    //console.log(array);
    return (array); //возвращаем значение num "наружу"
};//- не ставим при function declaration
const value = returnNeighboringNumbers(5);//зададим постоянную переменную и присвоим ей результат выполненной функции
console.log(value);

//1. Создайте функцию, принимающую 2 аргумента числа: 
// 1е число - база, 2е число - то, сколько раз повторить его в прогрессии.
//Функция должна возвращать строку (или число в особых случаях) 
//где эти числа идут по порядку, разделенные тремя дефисами "---".
// После последнего числа их не должно быть.

//Если второй аргумент не является числом, равен или меньше нуля - то 
//возвращать просто первый аргумент. (Проверяем через оператор typeof)
function getMathResult(num, value) { 
    if (typeof(value) !== 'number' || value <= 0) { //если множитель не число, отрицательное или нуль
        return num; //то мы возвращаем только наше число num
    }

    let str = ''; //задаем переменную пустую

    for (let i = 1; i <= value; i++) {
        if (i === value) {   //если i = множителю, то есть по сути i - число
            str += `${num * i}`; //то к строке прибавляем произведение числа на множитель
            // Тут без черточек в конце
        } else { //в оратном случа добавляем черточки
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    console.log(str);
    return str;
}
getMathResult(10, 5);

//***ПРОДВИНУТЫЕ ЗАДАЧКИ/
//1. создать функцию вычисляющую объем и площадь куба. 
//Принимает в себя целое число со значением длины ребра куба
//Примеры: calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
   //Создаем массив ребер
    
    const lineCub = [ 5,  15, 15.5, '15.5', 15, -15];
    // Получаем случайный ключ массива
    //const a = Math.floor(Math.random() * lineCub.length);
        //функция с расчетом и выводом
    function calculateVolumeAndArea(lineCub){
        for(let i = 0 ; i < lineCub.length; i ++) {
            if (typeof(lineCub[i]) !== 'number' || !Number.isInteger(lineCub[i]) || lineCub[i] < 0 ) {
                console.log('При вычислении произошла ошибка');
            } else {
                console.log(`Объем куба: ${Math.round(lineCub[i]*lineCub[i]*lineCub[i])}, площадь всей поверхности: ${Math.round(12*lineCub[i])}`); 
            };
            return;
        };
    };
    calculateVolumeAndArea(lineCub);
    //2 вариант 
    function calculateVolumeAndArea(length) {
        if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
            return "При вычислении произошла ошибка";
        }
    
        let volume = 0,
            area = 0;
    
        volume = length * length * length;
        // length ** 3 - это тоже самое, что и выше или варианты через цикл.
        // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
        area = 6 * (length * length);
    
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
    calculateVolumeAndArea(5);

//2 задача
//Напишите функцию, которая будет определять номер купе по переданному 
//ей номеру места. Наглядно:
//Функция принимает только целое число от 1 до 36.
//Если переданный аргумент не число, отрицательное или дробное - 
//возвращается сообщение:"Ошибка. Проверьте правильность введенного номера места"
//Если число 0 или больше 36, то сообщение: 
//"Таких мест в вагоне не существует"
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    console.log(Math.ceil(seatNumber / 4));
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

//3 задача часы
//Создать функцию  принимающую целое число минут и возвращает время в строке.
//getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
//задаем рандомное значение времени
let minutesPerDay = 1440; //создали переменную = часам минутам в сутках
let minutesRandom = getRandomInt(minutesPerDay);//создана переменная рандомно определяющая количество минут в момент запроса

function getRandomInt(minutesPerDay) { //функция возвращающая значение рандомного времени для дальнейшего использований
    let ret = Math.floor(Math.random() * 1440);//создана локальная переменная для возврата в функцию
    return (ret);
}
getRandomInt(minutesRandom); //вызов функции
 
console.log(minutesRandom);//вывод полученного рандома
//создаем функцию обработки
function getTimeFromMinutes(minutesRandom){ //передаем рандомное время в новую функцию
    let hour = (Math.trunc(minutesRandom / 60));//переменная часы
//условия проверки входящего аргумента
    if (typeof(minutesRandom) !== 'number' || minutesRandom < 0 || !Number.isInteger(minutesRandom)) {
        return "Ошибка, проверьте данные";
    }
//условия запускающие подбор окончания
    if ( hour === 0 || (5 <= hour)&& (hour <= 20)) {
        endingHour = "ов";
    } else if ((2 <= hour) && (hour <= 4) || (22 <= hour) && (hour <= 24)) {
        endingHour = "а";
    } else if ( hour === 1 || hour === 21){
        endingHour = "";
    }else if(hour instanceof NotInt){
        console.log("Ошибка времени, попробуйте запустить программу позднее");
    
    };
    console.log(endingHour);

    let min =  minutesRandom%60; //переменная минуты

    if ( min === 1 || min === 21 || min === 31 || min === 41 || min === 51 ) {
        endingMinutes = "a";
    } else if ((2 <= min) && (min <= 4) || (22 <= min) && (min <= 24) || (32 <= min) && (min <= 34) ||( 42 <= min) && (min <= 44) || (52 <= min) && (min <= 54)) {
        endingMinutes = "ы";
    } else if (  min ===0 || (5 <= min) && (min <= 20) || (25 <= min) && (min <= 30) ||(35 <= min) && (min <= 40) || (45 <= min) && (min <= 50) || (55 <= min) && (min <= 60)){
        endingMinutes = " ";
    } else {
        console.log("Ошибка времени, попробуйте запустить программу позднее");
    }
       
    console.log(`Время на часах: ${hour} час${endingHour} ${min} минут${endingMinutes}`);
    return `Время на часах: ${hour} час${endingHour} ${min} минут${endingMinutes}`;
}
getTimeFromMinutes(minutesRandom);

//1, 21,31,41,51, минута
//2,3,4, 22,23,24 32,33,34 42,43,44 52,53,54  минуты
//5-20, 25-30,35-40,45-50,55-60 минут

//1, 21 час,
//2, 3, 4, 22, 23, 24,  часа
//5 - 20 часов
//
//вариант
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)

//ЗаДаЧа// Напишите функцию,принимает 4 числа и возвращает самое большее из них.
// Если один из аргументов не число или их меньше 4 - возвращается 0.
// Дробные числа разрешены.
const array = [];
function getFourNum(){ //передаем массив с рандомными элементами в глобальный массив
    for(let i = 0 ; i <=3 ; i++){
        let num = ((Math.random()*100).toFixed(1));//рандомный num до 100 и с округлением к ближайшему значению
        array.push(num);//в каждом цикле добавляем в массив num
    }
    return(array);
}
getFourNum()
//console.log(getFourNum(array));
console.log(array); //вывод рандомного массива с которым далее работаем

let getMaxNum = getFourNum(array)
    for (let j = 0 ; j <=array.length ; j++){
        if (typeof(j) !== "number" || array.length < 4){
            console.log("Error");
            return "0";
        } else { 
            console.log(`Самый большой аргумент = ${Math.max.apply(null, array)}`);
            return Math.max.apply(null, array);
        }    
    }
console.log(getFourNum(array));

//вариант function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
    return 0;
} else {
    return Math.max(a, b ,c, d);
}


findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');

//числа Фибоначчи. первые числа 0 и 1. далее производится суммирование двух последних чисел

function fib(num) {
    
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) { //не происходит ничего в первый пересчет, идем к else
            result = result + `${first}`;
        // Без пробела в конце
        } else {
            result = result + `${first} `; //тут получаем лишь пробел: result =" "0' ' 
            console.log(result)
        }
        let third = first + second; //let third = 0 + 1 = 1
        first = second;    //first = 1
        second = third;    //second = 1
        //т.е. 0 1 1 1
        
    }
    console.log(result);
    return result;
}
fib(5)

//еще вариант
//let res = fib(num)
function fib(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) return '';
    if (num === 1) return '0'
    let first = 0,
      second = 1,
      third;
   
    let res = `${first} ${second}`;
   
    for (let i = 0; i < num - 2; i++) {
      third = first + second;
      res += ` ${third}`;
      first = second;
      second = third;
    }
    console.log(res);
    return res;
  }
  fib(5);

///////////////**задача из теста/////////////////////// */
  function foo(a,b) {
    const [first] = a;
    const {eng} = b;
    return `${first} ${eng}`;
    }
    const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
    console.log(result);

   
  