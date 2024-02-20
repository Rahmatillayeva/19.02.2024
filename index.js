// Challenge #1

// const calcAvg = (participant1, participant2, participant3) => {
//   const averageScore = (participant1 + participant2 + participant3) / 3;
//   return averageScore;
// }

// const checkWinner = (team1, team2) => {
//   if (team1 > team2) {
//     return team1;
//   } else {
//     return team2;
//   }
// }

// console.log(`Birinchi jamoaning o'rtacha ko'rsatkichi = ${calcAvg(20, 50, 26)}`);
// console.log(`Ikkinchi jamoaning o'rtacha ko'rsatkichi = ${calcAvg(21, 50, 16)}`);

// console.log(`Eng yuqori natija ${checkWinner(calcAvg(20, 50, 26), calcAvg(21, 50, 16))} va siz g'olibsiz!`);


// Challenge #2
// 1 - masala

// the world population is 7900 million people. Create a function declaration called 'percentage0fWorld1' which receives a ' population ' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2%  of the world population

// dunyo aholisi 7900 million kishi. "population" qiymatini oladigan va berilgan aholi vakili bo'lgan dunyo aholisining foizini qaytaradigan "percentage0fWorld1" function declarationni yarating. Masalan, Xitoyda 1441 million kishi bor, bu dunyo aholisining 18,2 foizini tashkil qiladi.

// function percentage0fWorld1(population) {
// const worldPopulation = 7900;
// return (population/worldPopulation)*100;
// }
// let Country = "Xitoy";
// console.log(`${Country} aholisi butun yer yuzi aholisining ${percentage0fWorld1(1441).toFixed(2)}% tashkil qiladi.`);


// const  percentage0fWorld1 = population => {
//   const worldPopulation = 7900;
// return (population/worldPopulation)*100;
// }
// let Country = "Xitoy";
// console.log(`${Country} aholisi butun yer yuzi aholisining ${percentage0fWorld1(1441).toFixed(2)}% tashkil qiladi.`);


// FizzBuzz

// const a = 15;
// if (a%5 === 0 && a%3 === 0) {
//   console.log(`FizzBuzz`);
// } else if (a%5 !== 0 && a%3 === 0) {
//   console.log(`Fizz`);
// } else if (a%5 === 0 && a%3 !== 0) {
//   console.log(`Buzz`);
// } else {
//   console.log(`a = ${a}`);
// }

// let divisionMarks = (a%5 === 0 && a%3 === 0) ? "FizzBuzz" : (a%5 !== 0 && a%3 === 0) ? "Fizz" : (a%5 === 0 && a%3 !== 0) ? "Buzz" : `a = ${a}`;
// console.log(divisionMarks);




// hafta kunlari masalasi

// const dayOfTheWeek = 9;

// switch (dayOfTheWeek) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default: console.log("faqat 1 dan 7 gacha raqam kiritish mumkin!");
//     break;
// }