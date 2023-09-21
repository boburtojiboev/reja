// D Task

const moment = require('moment');
class Shop {

    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq() {
        console.log(`Hozirgi  ${moment().format("YYYYMMDD HH:mm:ss")} da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola`);
    }
  
    sotish(product, num) {
        if (this[product] >= num) {
            this[product] -= num;
            return `Hozir  ${moment().format("YYYYMMDD HH:mm")} da ${num}ta ${product} sotdingiz`;
        }else {
            return "Sotish uchun mahsulot yetarli emas";
        }
   
        }
    qabulQilish(product, value) {
            this[product] += value;
            return `Hozir soat ${moment().format("HH:mm")} da ${value} ta ${product} qabul qildingiz`;
          }
};
const shop = new Shop(4, 5, 9);
shop.qoldiq();

console.log(shop.sotish('non', 4));
console.log('***********************');
console.log(shop.qabulQilish("lagmon", 2));
console.log('***********************');
console.log(shop.sotish("lagmon", 4));
console.log('***********************');
console.log(shop.sotish("cola", 6));
console.log('***********************');
console.log(shop.qabulQilish("non", 5));
console.log('***********************');
console.log(shop.qabulQilish("lagmon", 7));
console.log('***********************');
console.log(shop.qabulQilish("cola", 9));
console.log('***********************');
console.log(shop.qoldiq());