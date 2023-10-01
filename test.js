//  const fs = require("fs");
//  let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     }else {
//         user = JSON.parse(data);
//     }
// });  
 
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       const data = user;
//       const error = false;
  
//       if (error) {
//         reject("someting went wrong!");
//       } else {
//         resolve(data);
//       }
//     });
//   }
  
//   fetchData()
//     .then((data) => console.log("data: ", data))
//     .catch((err) => console.log("err", err));

 
let Alphabite = "abcdefghijklmanopqrstuwxyz"
const str = 'abc';
const isAlpha = code => (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
const isLast = code => code === 90 || code === 122;
const nextLetterString = str => {
   const strArr = str.split('');
   return strArr.reduce((acc, val) => {
      const code = val.charCodeAt(0);
      if(!isAlpha(code)){
         return acc+val;
      };
      if(isLast(code)){
         return acc+String.fromCharCode(code-25);
      };
      return acc+String.fromCharCode(code+1);
   }, '');
};
console.log(nextLetterString(str));

var alphabets = "qwertyuiopasdfghjklzxcvbnm".split("");
  
      