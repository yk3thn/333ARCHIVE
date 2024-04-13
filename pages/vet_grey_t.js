const images = ["../assets/vet_grey_t.png", "../assets/vet_grey_t2.png", "../assets/vet_grey_t3.png", "../assets/vet_grey_t4.png", "../assets/vet_grey_t5.png"];
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
