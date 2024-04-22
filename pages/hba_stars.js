const images = ["../assets/hba_stars.png", "../assets/hba_stars2.png", "../assets/hba_stars3.png", "../assets/hba_stars4.png", "../assets/hba_stars5.png", "../assets/hba_stars6.png", "../assets/hba_stars7.png", "../assets/hba_stars8.png"];
let currentIndex = 0;

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  document.getElementById("mainImage").src = images[currentIndex];
}

function nextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  document.getElementById("mainImage").src = images[currentIndex];
}
