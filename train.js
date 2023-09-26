// Async functionlarni qo'llash

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", //0=20
    "togri boshliqning tanlang va koproq xato qiling", //20-30
    "o'zingizga ishlashingizni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq" //60
];


// Nodejs event loop va Callback functionlarni organamiz

function maslahatBering (a, callback) {
    if (typeof a !== 'number') callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);

    }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
    if (err) console.log("error", err);
    else {
        console.log('javob', data);
    }
});
console.log("passed here 1");

// Async function maslahatBering (a) {
//     if (typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                  resolve (list[5]);
//             }, 5000);  
//         });
//     }
// }
// then/catch
// console.log("passed here 0");
// maslahatBering(65)
// .then((data) => {
//     console.log('javob', data);
// })
// .catch((err) => {
//     console.log('Error', err);
// });
// console.log('passed here 1')

// async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();










// D Task

// const moment = require('moment');
// class Shop {

//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }
//     qoldiq() {
//         console.log(`Hozirgi  ${moment().format("YYYYMMDD HH:mm:ss")} da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola`);
//     }
  
//     sotish(product, num) {
//         if (this[product] >= num) {
//             this[product] -= num;
//             return `Hozir  ${moment().format("YYYYMMDD HH:mm")} da ${num}ta ${product} sotdingiz`;
//         }else {
//             return "Sotish uchun mahsulot yetarli emas";
//         }
   
//         }
//     qabulQilish(product, value) {
//             this[product] += value;
//             return `Hozir soat ${moment().format("HH:mm")} da ${value} ta ${product} qabul qildingiz`;
//           }
// };
// const shop = new Shop(4, 5, 9);
// shop.qoldiq();

// console.log(shop.sotish('non', 4));
// console.log('***********************');
// console.log(shop.qabulQilish("lagmon", 2));
// console.log('***********************');
// console.log(shop.sotish("lagmon", 4));
// console.log('***********************');
// console.log(shop.sotish("cola", 6));
// console.log('***********************');
// console.log(shop.qabulQilish("non", 5));
// console.log('***********************');
// console.log(shop.qabulQilish("lagmon", 7));
// console.log('***********************');
// console.log(shop.qabulQilish("cola", 9));
// console.log('***********************');
// console.log(shop.qoldiq());