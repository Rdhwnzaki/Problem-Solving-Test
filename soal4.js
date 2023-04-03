/* Soal 4
Buat fungsi untuk menggabungkan 2 array sorted menjadi 1 array sorted atau array sorted baru.
a.	hasil seperti apa jika kita memasukkan array kosong?
b.	Sarankan hal-hal apa yang perlu kita uji?
*/

/* Bagian a
Jika memasukan array kosong pada variabel array1 dan array2 maka hasilnya adalah kosong "[]"
Jika memasukan array kosong pada salah satu variabel maka hasilnya adalah variabel yang memiliki nilai
Jika memasukan nilai pada kedua array maka hasilnya adalah gabungan dari dua array tersebut
*/
var array1 = [1, 2, 3, 4, 5];
var array2 = [];
var array3 = [...array1, ...array2];
console.log(array3);
/* Bagian b
Mungkin kita bisa uji array1 diisi dengan number dan array2 diisi dengan string
*/
var array1 = [1, 2, 3, 4, 5];
var array2 = ["Senin", "Selasa", "Rabu"];
var array3 = [...array1, ...array2];
console.log(array3);
