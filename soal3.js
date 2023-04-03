/* Soal 3
Buatlah sebuah algoritma pemrograman untuk menampilkan kata-kata pada sebuah kalimat secara terbalik:
Contoh : “Roots adalah perusahaan yang bergerak di bidang IT terbaik”
Hasil : “terbaik IT bidang di bergerak yang perusahaan adalah Roots”
*/

const reverseWord = (kalimat) => {
  const splitKalimat = kalimat.split(" ");
  const revKalimat = splitKalimat.reverse();
  const joinKalimat = revKalimat.join(" ");
  return console.log(joinKalimat);
};
reverseWord("Roots adalah perusahaan yang bergerak di bidang IT terbaik");
