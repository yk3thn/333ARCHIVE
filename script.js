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

    if (window.innerWidth < 768) { // Adjust styles for smaller screens
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