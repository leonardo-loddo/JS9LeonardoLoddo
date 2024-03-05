// dinamicita qundo l'utente fa qualcosa tu comportati di conseguenza
let title = document.querySelector("#title");
let changeColorBtn = document.querySelector("#changeColorBtn");
let showParagraphBtn = document.querySelector("#showParagraphBtn");
let wrapper = document.querySelector("#wrapper");
let names = ["marzio", "felicetta", "luca"];
//click
//scroll
//input
// let check = false;
// changeColorBtn.addEventListener("click", () => {
//   if (check == false) {
//     title.style.color = "red";
//     title.innerText = "ciao rosso";
//     check = true;
//   } else {
//     title.style.color = "black";
//     title.innerText = "ciao mondo";
//     check = false;
//   }
// });
console.dir(title);
changeColorBtn.addEventListener("click", () => {
  title.classList.toggle("red");
});
// showParagraphBtn.addEventListener("click", () => {
//   let p = document.createElement("p");
//   p.innerHTML = `pargafo di prova`;
//   wrapper.appendChild(p);
// });
//add
//remove
//toggle
showParagraphBtn.addEventListener("click", () => {
  names.forEach((nome) => {
    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = nome;
    div.appendChild(paragrafo);
  });
});
