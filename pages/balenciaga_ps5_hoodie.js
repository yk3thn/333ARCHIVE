const images = ["../assets/items/balenciaga_ps5_hoodie/1.png", "../assets/items/balenciaga_ps5_hoodie/2.png"];
let currentIndex = 0;
//document.getElementById("mainImage").src = images[currentIndex];

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
const btn = document.querySelector('.btn');
    const imageGridOverlay = document.querySelector('.image-grid-overlay');
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'image-grid-close';
    imageGridOverlay.appendChild(closeBtn);

    btn.addEventListener('click', () => {
        imageGridOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeBtn.addEventListener('click', () => {
        imageGridOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });