// xarajatlar
var borish_kelish_dollar = 500;
var mehmonxona_dollar = 250;
var muzey_yevro = 120;

// kurs
var dollar = 9433.34;
var yevro = 10354.03;

var som_xarajat = (borish_kelish_dollar + mehmonxona_dollar) * dollar + muzey_yevro * yevro;

// console.log(som_xarajat);

var user_som = Number(prompt("Qancha puling bor?")); // agar user harflarni kiritsa uni numberlasak NaN

// NaN - if kelganda false qaytaradi
// falsy qiymatlar: NaN, undefined, null, '', 0, false

if (user_som == 0 || user_som == NaN) {
  if (user_som >= som_xarajat) {
    alert("Oq yo'l");
  } else {
    console.log("Uzr ukam (")
  }
} else {
  alert("turi qiymat kirit");
}


