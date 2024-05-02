document.getElementById('searchInput').addEventListener('input', function() {
            var searchValue = this.value.toLowerCase();
            var images = document.querySelectorAll('#imageGallery img');

            images.forEach(function(img) {
                var altText = img.alt.toLowerCase();
                var parentDiv = img.parentElement.parentElement;

                if (altText.includes(searchValue)) {
                    parentDiv.style.display = 'block';
                } else {
                    parentDiv.style.display = 'none';
                }
            });
        });
function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;
const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

	if (isMobile) { // Adjust styles for smaller screens
        document.getElementById('navbtn').style.fontSize = '15px';
		document.getElementById('navbtn2').style.fontSize = '15px';
		document.getElementById('LLogo').style.top = '12.5%';
		document.getElementById('RLogo').style.top = '12.5%';
		document.getElementById('MLogo').style.top = '5%';
        document.getElementById('searchInput').style.fontSize = '12px';
        document.getElementById('searchInput').style.width = '100px';
        document.getElementById('searchContainer').style.padding = '5px';
        document.getElementById('navbtn').style.padding = '5px 10px';
		document.getElementById('navbtn2').style.padding = '5px 10px';
        document.querySelector('.grid-container').style.marginTop = '40px';
		document.getElementById('banner').style.fontSize = '10px';
    } else {
        document.getElementById('navbtn').style.fontSize = '25px';
		document.getElementById('navbtn2').style.fontSize = '25px';
		document.getElementById('LLogo').style.top = '27%';
		document.getElementById('RLogo').style.top = '27%';
		document.getElementById('MLogo').style.top = '1%';
        document.getElementById('searchInput').style.fontSize = '16px';
        document.getElementById('searchInput').style.width = '200px';
        document.getElementById('searchContainer').style.padding = '10px';
        document.getElementById('navbtn').style.padding = '10px 20px';
		document.getElementById('navbtn2').style.padding = '10px 20px';
        document.querySelector('.grid-container').style.marginTop = '50px';
		document.getElementById('banner').style.fontSize = '15px';
    }
}

// Call the function initially and on window resize
adjustStylesForScreenSize();
window.addEventListener('resize', adjustStylesForScreenSize);

document.addEventListener('DOMContentLoaded', function () {
  const imageGallery = document.getElementById('imageGallery');
  const gridItems = imageGallery.querySelectorAll('.grid-item');

  // Function to sort items by price from lowest to highest
  function sortByPriceLowToHigh() {
    const sortedItems = Array.from(gridItems).sort((a, b) => {
      return parseInt(a.dataset.price) - parseInt(b.dataset.price);
    });
    imageGallery.innerHTML = '';
    sortedItems.forEach(item => imageGallery.appendChild(item));
	getElementByClassName('grid-item').style.height = '100%';
  }

  // Function to sort items by price from highest to lowest
  function sortByPriceHighToLow() {
    const sortedItems = Array.from(gridItems).sort((a, b) => {
      return parseInt(b.dataset.price) - parseInt(a.dataset.price);
    });
    imageGallery.innerHTML = '';
    sortedItems.forEach(item => imageGallery.appendChild(item));
  }

  // Function to sort items by date added from earliest to latest
  function sortByDateEarliestToLatest() {
    const sortedItems = Array.from(gridItems).sort((a, b) => {
      return new Date(a.dataset.date) - new Date(b.dataset.date);
    });
    imageGallery.innerHTML = '';
    sortedItems.forEach(item => imageGallery.appendChild(item));
  }

  // Event listeners for the sorting buttons
  document.getElementById('sortLowToHigh').addEventListener('click', sortByPriceLowToHigh);
  document.getElementById('sortHighToLow').addEventListener('click', sortByPriceHighToLow);
  document.getElementById('sortByDate').addEventListener('click', sortByDateEarliestToLatest);
});
