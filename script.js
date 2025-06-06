// Slider text logic
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000); // every 2 seconds

// Popup logic
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
setTimeout(() => {
  closePopup();
}, 5000); // close after 5 sec
