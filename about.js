window.onresize = function() {
            var textElement = document.getElementById('responsiveText');
			var textElement1 = document.getElementById('responsiveText1');
            var windowWidth = window.innerWidth;

            // Adjust font size based on window width
            if (windowWidth < 600) {
                textElement.style.fontSize = '15px'; // Small font size for smaller screens
				textElement1.style.fontSize = '20px';
            } else {
                textElement.style.fontSize = '20px'; // Default font size
				textElement1.style.fontSize = '30px';
            }
        };

        // Call the resize function on page load to set initial font size
        window.onload = window.onresize;