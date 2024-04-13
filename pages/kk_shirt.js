const images = ["../assets/kk_shirt.png", "../assets/kk_shirt_back.png", "../assets/kk_shirt_neck.png", "../assets/kk_shirt_back_neck.png"];
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
