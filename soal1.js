/* Soal 1
Buatlah sebuah program yang menampilkan barisan bilangan fibonacci.
Contoh barisan bilangan fibonacci : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

let fibonacci = [];
let nilai1 = 0;
let nilai2 = 1;

for (let i = 0; i <= 10; i++) {
  if (i === 0 || i === 1) {
    fibonacci = [...fibonacci, i];
  } else {
    let total = nilai1 + nilai2;
    fibonacci = [...fibonacci, total];
    nilai1 = nilai2;
    nilai2 = total;
  }
}
console.log(fibonacci);
