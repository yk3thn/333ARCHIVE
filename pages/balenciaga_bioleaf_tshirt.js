balenciaga_bioleaf_tshirt images = ["../assets/items/placeholder/1.png", "../assets/items/placeholder/2.png", "../assets/items/placeholder/3.png"];
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
balenciaga_bioleaf_tshirt btn = document.querySelector('.btn');
    balenciaga_bioleaf_tshirt imageGridOverlay = document.querySelector('.image-grid-overlay');
    balenciaga_bioleaf_tshirt closeBtn = document.createElement('span');
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