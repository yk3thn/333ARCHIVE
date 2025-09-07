const images = ["../assets/items/archive_tshirt/1.png", "../assets/items/archive_tshirt/2.png"];
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
function handleSizeChange() {
            var sizePicker = document.getElementById('sizePicker');
            var selectedSize = document.getElementById('sizeValue');
            var size = sizePicker.value;

            // Update price based on selected size
            var priceElement = document.getElementById('price');
            var price = 25; // Default price

            if (size === 'small') {
                price = 25;
            } else if (size === 'medium') {
                price = 25;
            } else if (size === 'large') {
                price = 25;
            } else if (size === 'xlarge') {
                price = 30;
            } else if (size === '2xl') {
                price = 30;
            } else if (size === '3xl') {
                price = 30;
            } else if (size === '4xl') {
                price = 35;
            } else if (size === '5xl') {
                price = 35;
			}

            priceElement.textContent = '$' + price;
}