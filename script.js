const btnAll = document.getElementById("all");
const btnPizza = document.getElementById("pizza");
const btnKarahi = document.getElementById("karahi");
const btnTikka = document.getElementById("tikka");

const secAll = document.getElementById("allSection");
const secPizza = document.getElementById("pizzaSection");
const secKarahi = document.getElementById("karahiSection");
const secTikka = document.getElementById("tikkaSection");

btnPizza.addEventListener("click", function () {
  secPizza.classList.remove("hidden");
  secAll.classList.add("hidden");
  secKarahi.classList.add("hidden");
  secTikka.classList.add("hidden");
});

btnAll.addEventListener("click", function () {
  secAll.classList.remove("hidden");
  secPizza.classList.add("hidden");
  secKarahi.classList.add("hidden");
  secTikka.classList.add("hidden");
});

btnKarahi.addEventListener("click", function () {
  secKarahi.classList.remove("hidden");
  secAll.classList.add("hidden");
  secPizza.classList.add("hidden");
  secTikka.classList.add("hidden");
});

btnTikka.addEventListener("click", function () {
  secTikka.classList.remove("hidden");
  secAll.classList.add("hidden");
  secPizza.classList.add("hidden");
  secKarahi.classList.add("hidden");
});
