// 1

// let  me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };

//   let  stroflanguages = me.languages.join(",");
//   let  strFrieds = me.friends.join("+");
  
//   console.log("firstName: " + me.firstName);
//   console.log("lastName: " + me.lastName);
//   console.log("age: " + me.age);
//   console.log("languages: " + stroflanguages);
//   console.log("friends: " + strFrieds);
  

// 2

// let n = 7 ;

// let obj = {};

// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }

// console.log(obj);

// 3

// let n = 7;

// let obj = {};

// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }
// let keys = Object.keys(obj);
// let values = Object.values(obj);

// let sum = 0;
// let valuesSUm = 0;

// for (let i = 0; i < keys.length; i++) {
//   sum += Number(keys[i]);
//   valuesSUm += values[i];
// }

// console.log("Kalitlari yig'indisi:", sum ,";");
// console.log("Qiymatlari yig'indisi:", valuesSUm,";");


// 4

// let strings = ["hello", "my", "name is", "Muhammadali"];

// let objlenth = {};

// for (let i = 0; i < strings.length; i++) {
//   let key = strings[i];
//   let value = key.length;

//   objlenth[key] = value;
// }

// console.log(objlenth);

// 5

// let prices = {"Banan": 10000, "Olma": 12000, "Apelsin": 8000, "Kiwi": 20000};

// let umumiy = 10000;

// for (let key in prices) {
//   umumiy += prices[key];
// }

// console.log(umumiy);

// 6

// function defineObject(obj) {
//     let keys = Object.keys(obj);
  
//     for (let key of keys) {
//       if (typeof key !== 'string') {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   let objectTest = {abc: 1, 123: 2, d: 5};
//   let natija = defineObject(objectTest);
  
//   console.log(natija);
  

// 7


// function falseValues(obj) {
//     let filterObject = {};
  
//     let keys = Object.keys(obj);
  
//     for (let key of keys) {
//       if (obj[key]) {
//         filterObject[key] = obj[key];
//       }
//     }
  
//     return filterObject;
//   }
  
//   let inputObject = { a: false, b: 12, c: true, d: 0 };
//   let objOutput = falseValues(inputObject);
  
//   console.log(objOutput);
  

// 8

// function HodisalarSoni(arr) {
//     let yuzagakelganobekt = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let joriyraqam = arr[i];
  
//       if (yuzagakelganobekt[joriyraqam]) {
//         yuzagakelganobekt[joriyraqam]++;
//       } else {
//         yuzagakelganobekt[joriyraqam] = 1;
//       }
//     }
  
//     return yuzagakelganobekt;
//   }
  
//   let kirishmassivi = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   let outputObject = HodisalarSoni(kirishmassivi);
  
//   console.log(outputObject);
  
// 9
// function createNumberObject(number) {
//     let  numberString = number.toString();
  
//     let  birlar = parseInt(numberString.slice(-1));
//     let  minglar = parseInt(numberString.slice(-4, -3));
//     let  millionlar = parseInt(numberString.slice(-7, -6));
//     let  milliardlar = parseInt(numberString.slice(-10, -9));
//     let  trilionlar = parseInt(numberString.slice(-13, -12));
  
//     let  numberObject = {
//       birlar: birlar,
//       minglar: minglar,
//       millionlar: millionlar,
//       milliardlar: milliardlar,
//       trilionlar: trilionlar,
//     };
  
//     return numberObject;
//   }
  
//   let  inputNumber = 89541564165629;
//   let  outputObject = createNumberObject(inputNumber);
  
//   console.log(outputObject);
  
// 10

// let  kitoblar = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < kitoblar.length; i++) {
//     let  kitob = kitoblar[i];
//     let  status = kitob.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}. ${kitob.author}ning "${kitob.title}" kitobi ${status};`);
//   }
  

// 11

// let products = [
//     { nomi: "Product 1", narxi: 20000, chegirma: 10, miqdori: 5 },
//     { nomi: "Product 2", narxi: 10000, chegirma: 20, miqdori: 4 },
//     { nomi: "Product 3", narxi: 15000, chegirma: 8, miqdori: 10 },
//     { nomi: "Product 4", narxi: 18000, chegirma: 5, miqdori: 6 },
//     { nomi: "Product 5", narxi: 5000, chegirma: 10, miqdori: 16 },
//   ];
  
//   let totalCostWithoutDiscount = 0;
//   let totalDiscount = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     let costWithoutDiscount = product.narxi * product.miqdori;
//     let discountAmount = (product.narxi * product.chegirma / 100) * product.miqdori;
  
//     totalCostWithoutDiscount += costWithoutDiscount;
//     totalDiscount += discountAmount;
//   }
  
//   console.log("Umumiy summa:", totalCostWithoutDiscount);
//   console.log("Cheqirma umumiy summa:", totalDiscount);
  

// 12

// let  obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   let  resultArray = [];
  
//   for (let  key in obj) {
//     resultArray.push(key);
//     resultArray.push(obj[key]);
//   }
  
//   console.log(resultArray);
  

// 13

// let grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   function calculateGPA(grades) {
//     let totalGradeCredits = 0;
//     let umumiyKredit = 0;
  
//     for (let i = 0; i < grades.length; i++) {
//       let fanlar = grades[i];
//       totalGradeCredits += fanlar.grade * fanlar.kredit;
//       umumiyKredit += fanlar.kredit;
//     }
  
//     let gpa = totalGradeCredits / umumiyKredit;
//     return gpa;
//   }
  
//   let gpa = calculateGPA(grades);
//   console.log("GPA:", gpa);
  

// 14


// let rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// let myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// function calculateScore(rightAnswers, myAnswers) {
//   let togriSon = 0;
//   let notogriSon = 0;

//   for (let questionNumber in rightAnswers) {
//     let rightAnswer = rightAnswers[questionNumber];
//     let myAnswer = myAnswers[questionNumber];

//     if (myAnswer === rightAnswer) {
//       togriSon++;
//     } else {
//       notogriSon++;
//     }
//   }

//   return { togriSon, notogriSon };
// }

// let natija = calculateScore(rightAnswers, myAnswers);
// console.log("To'g'ri javoblar soni:", natija.togriSon);
// console.log("Noto'g'ri javoblar soni:", natija.notogriSon);



//   15

// function getMultipleValues(obj, n) {
//     let natija = {};
  
//     for (let key in obj) {
//       natija[key] = obj[key] * n;
//     }
  
//     return natija;
//   }
  
//   let n = 5;
//   let obj = { a: 2, b: 3, c: 4, d: 6 };
//   let res = getMultipleValues(obj, n);
  
//   console.log(res);


// 16

// let product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   let { name, company: { name: companyName, price, founder: { firstName, lastName, birthDate } } } = product;
  
//   console.log(name); 
//   console.log(companyName); 
//   console.log(price);
//   console.log(firstName); 
//   console.log(lastName); 
//   console.log(birthDate);


// 17

// const students = [
//     { name: "Ali", ball: 85 },
//     { name: "Diyor", ball: 90 },
//     { name: "Robiya", ball: 78 },
//     { name: "Elshod", ball: 92 },
//     { name: "Uldana", ball: 88 },
//   ];
  
//   function ortachaFoizniHisoblang(students) {
//     let totalPercentage = 0;
//     const newStudentsArray = [];
  
//     for (let i = 0; i < students.length; i++) {
//       totalPercentage += students[i].ball;
//       const newStudent = {
//         name: students[i].name,
//         ball: students[i].ball,
//         percentage: students[i].ball / 100 * 100,
//       };
//       newStudentsArray.push(newStudent);
//     }
  
//     const averagePercentage = totalPercentage / students.length;
  
//     return { averagePercentage, newStudentsArray };
//   }
  
//   const result = ortachaFoizniHisoblang(students);
  
//   console.log("O'rtacha protsent:", result.averagePercentage);
//   console.log("Yangi massiv:", result.newStudentsArray);
  
  
  