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
        //саоме Важной, функцию нужно вызвать и передать ей аргумента в ()!!!
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
        const anotherNum = ret(); //зададим постоянную переменную и присвоим ей результат выполненной функции
        console.log(anotherNum); //вывод 

        //function expression
        //создадим переменную и поместим в нее функция
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
let value = returnNeighboringNumbers();
console.log(value);

function returnNeighboringNumbers(num) {
    const array = [];
        array[0] = (num - 1);
        array[1] = num;
        array[2] = (num + 1);
    //console.log(array);
    return (array); 
}
returnNeighboringNumbers(5);

function ret(num){
    let array = []
        array[0] = (num - 1);
        array[1] = num;
        array[2] = (num + 1);
        return(array); //возвращаем значение num "наружу"
}; //- не ставим при function declaration
const anotherNum = ret([]); //зададим постоянную переменную и присвоим ей результат выполненной функции
console.log(anotherNum); //
ret(5);

//1. Создайте функцию, принимающую 2 аргумента числа: 
// 1е число - база, 2е число - то, сколько раз повторить его в прогрессии.
//Функция должна возвращать строку (или число в особых случаях) 
//где эти числа идут по порядку, разделенные тремя дефисами "---".
// После последнего числа их не должно быть.

//Если второй аргумент не является числом, равен или меньше нуля - то 
//возвращать просто первый аргумент. (Проверяем через оператор typeof)
function getMathResult(num, value) { 
    if (typeof(value) !== 'number' || value <= 0) { //если множитель не число, отрицательное или нуль
        return num; //то мы возвращаем в только наше число num
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