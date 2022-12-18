"use strict"; // директива объявляющая использование нами обновленной версии написания кода

//Создаем программу ИСТОРИЯ ПРОСМОТРА ФИЛЬМОВ

//1) Создаем переменную и в нее помещаем ответ от пользователя

const numberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", ""); //ответ всегда число, за это отвечает +
//alert(numberOfFilms); //выводим вопрос в браузер
//console.log(typeof(numberOfFilms)) //сохраняем введенное значение

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
for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
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
console.log(personalMovieDB);

if (personalMovieDB.count < 10){
    console.log("Просмотрено достаточно мало новых фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
