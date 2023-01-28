"use strict"; // директива объявляющая использование нами обновленной версии написания кода
/*начало коммента
//Создаем программу ИСТОРИЯ ПРОСМОТРА ФИЛЬМОВ
//1) Создаем переменную глобально и в нее помещаем каждый раз ответы от пользователя
let numberOfFilms;
//alert(numberOfFilms); //выводим вопрос в браузер
//console.log(typeof(numberOfFilms)) //сохраняем введенное значение
//1.1 Валидируем введенный текст после нажатия на ОК
function start() {
    numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", ""); //обьявляем локальную переменную куда записываем ответ пользователя всегда число, за это отвечает +
    //создаем цикл и:проверяем некорректные вводы
    //и если не корерктные то вопрос будет повторен
    // || или возвращает true когда один из элементов сработает, т.е. возобновит вопрос(is Nan возвращает true ели пользователь вернет не число, то что нам и нужно)
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", ""); //повторяем вопрос пользоваетл.
    }
};
start();

//2) Создаем объект для сбора и обработки данных
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};
//3 добавляем еще пару вопросов пользователю и далее помещаем их в movies
//const a = prompt("Один из последних просмотренных фильмов?", ""),
 //     b = +prompt("Поставьте оценку просмотренному фильму по шкале от 1 до 10 :" , ""),
 //     c = prompt("Один из последних просмотренных фильмов?", ""),
 //     d = +prompt("Поставьте оценку просмотренному фильму по шкале от 1 до 10 :" , "");
 //     personalMovieDB.movies["a"] = "b";
 //     personalMovieDB.movies["c"] = "d";

 //3.1 оборачиваем в функцию, чтобы вызывать только по требованию!!!
function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "").trim(),//trim убирает пробельные символы в начале и конце строки
          b = prompt("Поставьте оценку просмотренному фильму по шкале от 1 до 10 :" , "");
    //перем-я a не д/б = nullб т.е. пользователь не должен нажать кнопку отмена и т.д.
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
        } else { //если ни одно из условий не было выполнено, то
        console.log('Error');
        i--; // возвращаемся на шаг назад, снова задаем a и b
        }
    }
}
//временно/ rememberMyFilms();

//3.2 оборачиваем в функцию
function detectorPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено достаточно мало новых фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
//временно/ detectorPersonalLevel();

//3.3 Создаем функцию отображения DB проверяющую свойство private
//вычисления производим над объектом personalMovieDB взаимодействуя с privat.
function showMyBD(hidden){ //hidden - произвольный аргумен
    if(!hidden){ //если наша BD не скрыта !hidden
        console.log(personalMovieDB);//тода показываем ее в консоль
    }
};
//чтобы функция сработала передаем название объекта и элемент с которым работаем
showMyBD(personalMovieDB.privat);

//3.4. создаем массив добавления жанров по номерам;
function writeYourGenres() {
    //так как задаем один и тот же вопрос то создаем цикл
    for(let i  = 1; i <= 3; i++){ //почему i = 1, т.к. пользователю удобнее отсчет от 1
        //присваиваем элементу массива genre [ i - 1], (т.к. для присваивание в программе начинается с индекса 0 )
        //введенные пользователем данные.
        personalMovieDB.genres[i - 1] =prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
конец коммента */

//4. Переписать код так, чтобы все функции стали методами объекта PersonalMovieDB

//1. ф-ю 1.1. сделаем кастомным методом и поместим в 2) объект для сбора и обработки данных
//!!!Мы получили объект БД со свойствами и методы которые что-то делают внутри объекта
const personalMovieDB = {
    count: 0, //удаляем лишнюю переменную из глобальной области numberOfFilms 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { //методу start прописываем функцию.Как только она запускается мы записываем результат в count
        personalMovieDB = +prompt ("Сколько фильмов Вы уже посмотрели?", ""); //обьявляем локальную переменную куда записываем ответ пользователя всегда число, за это отвечает +
        //создаем цикл и проверяем некорректные вводы, при необходимости повторяем ввод
        // || возвращает true и возобновит вопрос(isNaN возвращает true ели пользователь вернет не число, то что нам и нужно)
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ("Сколько фильмов Вы уже посмотрели?", ""); //повторяем вопрос пользоваетл.
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),//trim убирает пробельные символы в начале и конце строки
                  b = prompt("Поставьте оценку просмотренному фильму по шкале от 1 до 10 :" , "");
        //перем-я a не д/б = nullб т.е. пользователь не должен нажать кнопку отмена и т.д.
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
            } else { //если ни одно из условий не было выполнено, то
                console.log('Error');
                i--; // возвращаемся на шаг назад, снова задаем a и b
            }
        }
    },
    detectorPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено достаточно мало новых фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyBD: function (hidden){ //hidden - произвольный аргумен
        if(!hidden){ //если наша BD не скрыта !hidden
            console.log(personalMovieDB);//тода показываем ее в консоль
        }
    },
    //создаем метод, кот-й при вызове проверяет свойство приват:
    //ecли приват false, то метод переключает его в true
    toggleVisibleMyDB: function () {
    //создаем классический тоглер шаблон
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        //так как задаем один и тот же вопрос то создаем цикл
        for(let i  = 1; i <= 3; i++){ //почему i = 1, т.к. пользователю удобнее отсчет от 1
            //для проверки результата ввода от пользователя нужна другая переменная с которой будем маротать
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--; // откатить действие
            } else {
                //присваиваем элементу массива genre [ i - 1], (т.к. для присваивание в программе начинается с индекса 0 )
                //введенные пользователем данные.
                personalMovieDB.genres[i - 1] = genre;
            }
        /* //2 вариант
        let genres = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase();
        
        if (genres === '' || genres == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
            i--;
        } else {
            personalMovieDB.genres = genres.split(', ')
            personalMovieDB.genres.sort();
        }*/
    }
        personalMovieDB.genres.forEach((item, i) =>{ //item -каждый элемент в массике который перебираюм
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });    
    }
};
//в методе writeYourGenres запретить пользователю нажимать отмену/оставлять пустую строку
//если он это сдела, то возвращять к вопросу
//далел при помощи метода for Each вывести в консоль сообщение: