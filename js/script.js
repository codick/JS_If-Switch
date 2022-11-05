// Задание 1

// let a = prompt();
// if (a == 10) {
//     alert('Верно');
// } else {
//     alert('Неверно')
// }

// Задание 2

// let min = prompt('Введите число от 0 до 59');
// if (min <= 15 ){
//     alert('Первая четверть');
// }
// else if (min <= 30){
//     alert('Вторая четверть');
// }
// else if (min <= 45){
//     alert('Третья четверть');
// }
// else{
//     alert('Четвертая четверть')
// }

// Задание 3

// Вариант 1

// let lang = prompt(`Введите ru или en`);
// let  arr = []
// if (lang == 'ru'){
//     arr = ['Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье'];
// }
// else if (lang == 'en'){
//     arr = ['Monday', ' Tuesday', ' Wednesday', ' Thirsday', ' Friday', ' Saturday', ' Sunday'];
// }
// alert(arr)

// Вариант 2

// let lang = 'ru';
// let arr = [];
// switch(lang){
//     case 'ru':
//         arr = ['Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }
// alert(arr)

// Вариант 3

// let lang = prompt('Введите ru или en');
// var arr = {
//     'ru': ['Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье'],
//     'en': ['Monday', ' Tuesday', ' Wednesday', ' Thirsday', ' Friday', ' Saturday', ' Sunday']
// };
// alert(arr[lang]);

// Задание 4
// let a = prompt()
// if (a == 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 5

// let a = prompt();
// if (a > 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 6

// let a = prompt();
// if (a < 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 7

// let a = prompt();
// if (a >= 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 8

// let a = prompt();
// if (a <= 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 9

// let a = prompt();
// if (a <= 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 10

// let a = prompt();
// if (a != 0){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 11

// let a = prompt();
// if (a = 'test'){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 12

// let a = prompt();
// if (a == '1'){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 13

// let a = prompt();
// if (a > 0 && a < 5){
//     alert('Верно');
// }
// else{
//     alert('Неверно');
// }

// Задание 14

// let a = Number(prompt());
// if (a == 0 || a == 2){
//     a += 7;
// }
// else{
//     a /= 10;
// }
// alert(a);

// Задание 15

// let a = Number(prompt());
// let b = Number(prompt());

// if (a <= 1 && b >= 3){
//     alert(a+b);
// }
// else{
//     alert(a-b)
// }

// Задание 16

// let a = Number(prompt());
// let b = Number(prompt());

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
//     alert('Верно');
// }
// else{
//     alert('Неверно')
// }

// Задание 17

// let num = Number(prompt());
// result = '';
// switch(num){
//     case 1:
//         result = 'зима';
//         break
//     case 2:
//         result = 'весна';
//         break
//     case 3:
//         result = 'лето';
//         break
//     case 4:
//         result = 'осень';
//         break
// }
// alert(result)

// Задание 18

// let day = Number(prompt('Введите число от 1 до 31'));

// if (day >= 1 && day <= 10){
//     alert('Первая декада месяца');
// }
// else if (day >= 11 && day <= 20){
//     alert('Вторая декада месяца');
// }
// else{
//     alert('Третья декада месяца');
// }

// Задание 19

// let month = Number(prompt('Введите число от 1 до 12'));

// switch(month){
//     case 1 || 2 || 12:
//         alert('Зима')
//         break;
//     case 3 || 4 || 5:
//         alert('Весна');
//         break;
//     case 6 || 7 || 8:
//         alert('Лето');
//         break;
//     case 9 || 10 || 11:
//         alert('Осень');
//         break;
// }

// Задание 20

// let a = String(prompt());

// if (a[0] == 'a'){
//     alert('да');
// }
// else{
//     alert('нет');
// }

// Задание 21

// let num = String(prompt());

// if (num[0] == 1 || num[0] == 2 || num[0] == 3){
//     alert('да');
// }
// else{
//     alert('нет');
// }

// Задание 22

// let num = String(prompt());

// alert(Number(num[0]) + Number(num[1]) + Number(num[2]));

// Задание 23

// let num = String(prompt());

// if (Number(num[0]) + Number(num[1]) + Number(num[2]) == Number(num[4]) + Number(num[5]) + Number(num[6])){
//     alert('да');
// }
// else{
//     alert('нет')
// }