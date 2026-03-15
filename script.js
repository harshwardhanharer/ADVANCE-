// ===============================
// 🔥 Smooth Scroll Reveal (Professional)
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

  // ensure first sections show
  reveals.forEach(section => section.classList.add("active"));

});


// ===============================
// 🌊 Smooth Navbar Scroll
// ===============================
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// 📧 Send via Email
// ===============================
function sendEmail() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const subject = `New Order from ${name}`;
  const body =
    `Name: ${name}%0D%0A` +
    `Phone: ${phone}%0D%0A` +
    `Message: ${message}`;

  window.location.href =
    `mailto:yourgmail@gmail.com?subject=${subject}&body=${body}`;
}


// ===============================
// 📱 Send via WhatsApp
// ===============================
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const text =
    `New Order:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  window.open(
    `https://wa.me/919876543210?text=${text}`,
    "_blank"
  );
}


// ===============================
// 🍰 Expandable Menu (Smooth Dynamic Height)
// ===============================
function toggleCategory(element) {
  const category = element.parentElement;
  const items = category.querySelector(".menu-items");

  if (!items) return;

  if (category.classList.contains("active")) {
    items.style.maxHeight = null;
    category.classList.remove("active");
  } else {
    items.style.maxHeight = items.scrollHeight + "px";
    category.classList.add("active");
  }
}

// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const c = +counter.innerText;

const increment = target / 200;

if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter,10);
}
else{
counter.innerText = target;
}

};

updateCounter();

});


// BMI Calculator

function calculateBMI(){

let height=document.getElementById("height").value/100;
let weight=document.getElementById("weight").value;

let bmi=weight/(height*height);

document.getElementById("result").innerText="Your BMI: "+bmi.toFixed(2);

}

// ===============================
// 📊 LOAD CLASS SCHEDULE FROM GOOGLE SHEET
// ===============================

document.addEventListener("DOMContentLoaded", function () {

const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRY48DZoX5YrJxPFWd0rV6RVQrpCHyVghxQ_txHzZ0j4l8i-t0dKbbfvI-KV9-SBtpcE-DVlL5P5pPI/pub?output=csv";

fetch(sheetURL)
.then(response => response.text())
.then(data => {

const rows = data.trim().split("\n").slice(1);
const tableBody = document.getElementById("schedule-body");

if(!tableBody){
console.log("Schedule table not found");
return;
}

tableBody.innerHTML = "";

rows.forEach(row => {

const cols = row.split(",");

if(cols.length >= 3){

const tr = document.createElement("tr");

tr.innerHTML = `
<td>${cols[0]}</td>
<td>${cols[1]}</td>
<td>${cols[2]}</td>
`;

tableBody.appendChild(tr);

}

});

})
.catch(error => console.log("Error loading schedule:", error));

});