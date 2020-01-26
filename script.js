//**************************************homeTask1 - Task3**************************************
// function Time(hours, minutes, seconds) {
//   this.hour = hours;
//   this.minute = minutes;
//   this.second = seconds;
//
//
//   this.printTime = function () {
//     document.writeln(this.hour + ":" + this.minute + ":" + this.second);
//   };
//   this.changeTimeSec = function (sec) {
//     var d = new Date(null, null, null, this.hour, this.minute, this.second + sec);
//     var options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     };
//     document.writeln(d.toLocaleString("ru", options));
//   }
//   this.changeTimeMin = function (min) {
//     var d = new Date(null, null, null, this.hour, this.minute + min, this.second);
//     var options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     };
//     document.writeln(d.toLocaleString("ru", options));
//   }
//   this.changeTimeH = function (h) {
//     var d = new Date(null, null, null, this.hour + h, this.minute, this.second);
//     var options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     };
//     document.writeln(d.toLocaleString("ru", options));
//   }
// }
// var t = new Time(10, 23, 34);
// t.printTime();
// document.write('<br>');
// t.changeTimeSec(30);
// document.write('<br>');
// t.changeTimeMin(40);
// document.write('<br>');
// t.changeTimeH(10);

//**************************************homeTask2 - Task1**************************************
// //Создаем массив и три элемента в нем.
// var toBuyList = [];
//
// toBuyList[0] = {
//   name: "bread",
//   quantity: 3,
//   isBought: false
// };
// toBuyList[1] = {
//   name: "milk",
//   quantity: 2,
//   isBought: true
// };
// toBuyList[2] = {
//   name: "meat",
//   quantity: 3,
//   isBought: false
// };
//
// //Функция вывода любого массива
// function printList(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     document.write("- " + arr[i].name + " " + "<br>")
//   }
// }
//
// //функция вывода отсортированного массива(задание 1)
// function printSortList(arr) {
//   var isB = [];
//   var isNB = [];
//   arr.forEach(function (element, index, array) {
//     if (array[index].isBought) {
//       isB.push(arr[index]);
//     } else isNB.push(arr[index]);
//   });
//   document.write("ToBuyList: " + "<br>");
//   printList(isNB);
//   printList(isB);
// }
//
// //функция, которая добавляет продукт в список (задание 2)
// function addProduct(productName) {
//   var isOnList = true;
//   toBuyList.forEach(function (element) {
//     if (element.name == productName) {
//       element.quantity++;
//       isOnList = false;
//     }
//   });
//   if (isOnList) {
//     var product = {
//       name: productName,
//       quantity: 1,
//       isBought: false
//     };
//     toBuyList.push(product)
//   }
// }
//
// //функция, которая помечает, что продукт куплен (задание 3)
// function buyProd(productName) {
//   toBuyList.forEach(function (element) {
//     if (element.name == productName) {
//       element.isBought = true;
//     }
//   })
// }
//
// //демонстрация задания 1
// printSortList(toBuyList);
// document.write("<br>");
// //демонстрация задания 2
// addProduct("bread");
// addProduct("apple");
// printSortList(toBuyList);
// document.write("<br>");
// //демонстрация задания 3
// buyProd('bread');
// printSortList(toBuyList);

//**************************************homeTask3 - Task1**************************************
// function statistic(str) {
//   var arr = str.split('');
//   var num = 0, letter = 0, simb = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       num++;
//     } else if (arr[i].match (/^[A-Za-z]/)) {
//       letter++;
//     } else simb++;
//   }
//   document.write(num + " " + letter + " " + simb);
// }
// statistic("q131knhih!!!@#$%^&*()QWERTYASDFGH1234567890!!");

//**************************************homeTask3 - Task4**************************************
// function transform(styleCSSName) {
//   var arr = styleCSSName.split('-');
//   var res = "";
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) {
//       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     res = res + arr[i];
//   }
//   document.write(res);
// }
//
// transform("document-font-size-example");

//**************************************homeTask3 - Task5**************************************
// function transformToAbbreviation(abbreviation) {
//   var arr = abbreviation.split(' ');
//   var res = "";
//   for (var i = 0; i < arr.length; i++) {
//     res = res + arr[i][0];
//   }
//   document.write(res);
// }
//
// transformToAbbreviation("cascading style sheets");

// **************************************homeTask3 - Task6**************************************
// function transformToOneStr(arrOfStrings) {
//   var res = " ";
//   for (var i = 0; i < arrOfStrings.length; i++) {
//     var arr = arrOfStrings[i].split(" ");
//     for (var str = 0; str < arr.length; str++) {
//       res = res + arr[str];
//     }
//   }
//   document.write(res);
// }
//можно передовать любое количество строк в виде массива
// transformToOneStr(["cascading style sheets", "biywg fiyqwqf gfi", "wucv vuyv uvuy vuy fuy "]);

//**************************************homeTask3 - Task9**************************************
// function splitWithoutSplit(str, separator) {
//   var str1 = "";
//   var arr = [];
//   for (var i = 0; i < str.length; i++) {
//     if ((!str.charAt(i).match(separator)) && (i + 1 != str.length)) {
//       str1 = str1 + str.charAt(i)
//     } else {
//       arr.push(str1);
//       str1 = "";
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     document.write(arr[i] + " ");
//   }
// }
//
// splitWithoutSplit("03/10/30/20/7383783/ivbwvi/ihhwb", "/");

//**************************************homeTask4 - Task1**************************************
// class Circle {
//   constructor() {
//     this.radius = undefined;
//   }
//
//   getRadius() {
//     return this.radius;
//   }
//
//   setRadius(radius) {
//     this.radius = radius;
//   }
//
//   getDiametr() {
//     return this.radius * 2;
//   }
//
//   getCircleSquare() {
//     return Math.pow(this.radius, 2) * Math.PI;
//   }
//
//   getCircleLength() {
//     return Math.PI * this.radius * 2;
//   }
// }
//  //демонстрация
// var circle1 = new Circle();
// circle1.setRadius(5); // 20;
// document.write(circle1.getRadius() +  "<br>");
// document.write(circle1.getDiametr() + "<br>");
// document.write(circle1.getCircleSquare() + "<br>");
// document.write(circle1.getCircleLength() + "<br>");

// **************************************homeTask5 - Task2**************************************
// class ExtendedDate extends Date {
//   constructor(year, month, day) {
//     super(year, month - 1, day);
//   }
//
//   toStringFormat() {
//     var arrayDate1 = ["первое", "второе", "третье", "четвертое", "пятое", "шестое", "седьмое", "восьмое", "девятое", "десятое", "одиннадцатое", "двенадцатое", "тринадцатое", "четырнадцатое ", "пятнадцатое", "шестнадцатое", "семнадцатое", "восемнадцатое", "девятнадцатое", "двадцатое", "тридцатое"];
//     var arrayDate2 = ["двадцать", "тридцать"];
//     var month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//     var res = "";
//     if (this.getDate() == 30) {
//       res = arrayDate1[20];
//     } else if (this.getDate() < 21) {
//       res = arrayDate1[this.getDate() - 1];
//     } else if (this.getDate() > 20 && this.getDate() != 30) {
//       res = arrayDate2[Math.floor(this.getDate() / 10) - 2] + " " + arrayDate1[(this.getDate() % 10) - 1];
//     }
//     document.write(res + " " + month[this.getMonth()] + " " + this.getFullYear());
//   }
//
//   checkDate() {
//     var date = new Date();
//     return this.getTime() <= new Date(date.getFullYear(), date.getMonth(), date.getDay()) ? false : true;
//   }
//
//   isLeadYear() {
//     var year = this.getFullYear();
//     if ((year % 400 == 0) || ((year % 4 == 0 && year % 100 != 0))) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   getNextDate() {
//     var newDate = new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1);
//     return (newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate());
//   }
// }
// //тестирование
// var myExtendedDate = new ExtendedDate(2019, 7, 14);
// document.write(myExtendedDate.checkDate());
// document.write("<br>");
// document.write(myExtendedDate.isLeadYear());
// document.write("<br>");
// document.write(myExtendedDate.getNextDate());
// document.write("<br>");
// myExtendedDate.toStringFormat();


