/* Soal 2
Buatlah sebuah program yang menampilkan angka dari 1 sampai 100 dengan bahasa pemrograman apapun yang Anda kuasai dengan kondisi sebagai berikut:
•	untuk semua angka yang merupakan kelipatan 3 tampilkan "Roots"
•	untuk semua angka yang merupakan kelipatan 5 tampilkan "Hebat"
•	untuk semua angka yang merupakan kelipatan 3 dan 5 tampilkan "Roots Hebat!"
*/

let kelipatanTiga = [];
let kelipatanLima = [];
let kelipatanTigaDanLima = [];

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    kelipatanTigaDanLima = [...kelipatanTigaDanLima, "Roots Hebat!"];
  } else if (i % 3 == 0) {
    kelipatanTiga = [...kelipatanTiga, "Roots"];
  } else if (i % 5 == 0) {
    kelipatanLima = [...kelipatanLima, "Hebat"];
  }
}
console.log({ kelipatanTiga, kelipatanLima, kelipatanTigaDanLima });
