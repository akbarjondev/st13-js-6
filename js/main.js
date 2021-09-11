// // xarajatlar
// var borish_kelish_dollar = 500;
// var mehmonxona_dollar = 250;
// var muzey_yevro = 120;

// // kurs
// var dollar = 9433.34;
// var yevro = 10354.03;

// var som_xarajat = (borish_kelish_dollar + mehmonxona_dollar) * dollar + muzey_yevro * yevro;

// // console.log(som_xarajat);

// var user_som = Number(prompt("Qancha puling bor?")); // agar user harflarni kiritsa uni numberlasak NaN

// // NaN - if kelganda false qaytaradi
// // falsy qiymatlar: NaN, undefined, null, '', 0, false

// if (user_som == 0 || user_som == NaN) {
//   if (user_som >= som_xarajat) {
//     alert("Oq yo'l");
//   } else {
//     console.log("Uzr ukam (")
//   }
// } else {
//   alert("turi qiymat kirit");
// }

// // DOM
// var DOM = {
//   name: 'Ali',
//   age: 15,
//   call: function () {
//     alert("Qo'ng'iroq qilyabman")
//   }
// }

// console.log(DOM.name);
// console.log(DOM.age);
// DOM.call();

// console.log(document.characterSet)
// console.log(document.body.textContent)
// console.log(document.domain)

// console.log(document.querySelector(".link"))
// console.log(document.querySelector("div"))

// var heading = document.querySelector("#js-heading");
// var heading2 = document.querySelector("#js-heading-2");

// var user_name = prompt("Ismingiz nima?");

// heading.textContent = "Salom " + user_name;

// var hol_ahvol = prompt("Qalaysiz?")

// heading2.textContent = user_name + " dedi: " + hol_ahvol;


// var box = document.getElementById('box');
// console.log(box)

// var link = document.getElementsByClassName('link');
// console.log(link[1].textContent = "boshqa")

// var box = document.getElementsByTagName("div");
// console.log(box.length)

// console.log(box.innerHTML = '<p><i>Salom</i></p>')

// javob.innerHTML = "<p>" + sum + "<p>"
// javob.innerHTML = `Javob: ${sum}`

// var form = document.querySelector("#form")
// var user_name = document.querySelector('#name')
// var password = document.querySelector('#password')
// var select = document.querySelector('#select')

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // console.log(user_name.value, password.value, select.value)
//   // box.textContent = password.value
// })

function getDataFromUser(user_name, age) {
  alert("Ismi " + user_name + " va yoshi: " + age);
}

// getDataFromUser("Ali", 18);
// getDataFromUser("Sherzod", 17);
// getDataFromUser("Islombek", 24);
// getDataFromUser("Alisher", 27);
// getDataFromUser("Salim", 20);

// (function () {
//   alert('anonim funksiya')
// })();
