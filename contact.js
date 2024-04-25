
		
function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 700) { // Adjust styles for smaller screens
        document.getElementById('logoWordmark').style.width = '125px';
		document.getElementById('logoHover').style.width = '125px';
		document.getElementById('banner').style.fontSize = '10px';
		document.getElementById('responsiveText').style.fontSize = 	'30px';
		document.getElementById('responsiveText1').style.fontSize = '25px';
		document.getElementById('responsiveText2').style.fontSize = '15px';
		document.getElementById('responsiveText3').style.fontSize = '25px';
		document.getElementById('responsiveText4').style.fontSize = '15px';
		document.getElementById('responsiveText5').style.fontSize = '25px';
		document.getElementById('responsiveText6').style.fontSize = '15px';
		document.getElementById('responsiveText7').style.fontSize = '25px';
		document.getElementById('responsiveText8').style.fontSize = '15px';
		document.getElementById('responsiveText9').style.fontSize = '25px';
		document.getElementById('responsiveTexta').style.fontSize = '15px';
		document.getElementById('responsiveTextb').style.fontSize = '25px';
		document.getElementById('responsiveTextc').style.fontSize = '15px';
		document.getElementById('responsiveTextd').style.fontSize = '25px';
		document.getElementById('responsiveTexte').style.fontSize = '15px';
    } else { // Reset styles for larger screens
        document.getElementById('logoWordmark').style.width = '200px';
		document.getElementById('logoHover').style.width = '200px';
		document.getElementById('banner').style.fontSize = '15px';
		document.getElementById('responsiveText').style.fontSize = 	'40px';
		document.getElementById('responsiveText1').style.fontSize = '30px';
		document.getElementById('responsiveText2').style.fontSize = '20px';
		document.getElementById('responsiveText3').style.fontSize = '30px';
		document.getElementById('responsiveText4').style.fontSize = '20px';
		document.getElementById('responsiveText5').style.fontSize = '30px';
		document.getElementById('responsiveText6').style.fontSize = '20px';
		document.getElementById('responsiveText7').style.fontSize = '30px';
		document.getElementById('responsiveText8').style.fontSize = '20px';
		document.getElementById('responsiveText9').style.fontSize = '30px';
		document.getElementById('responsiveTexta').style.fontSize = '20px';
		document.getElementById('responsiveTextb').style.fontSize = '30px';
		document.getElementById('responsiveTextc').style.fontSize = '20px';
		document.getElementById('responsiveTextd').style.fontSize = '30px';
		document.getElementById('responsiveTexte').style.fontSize = '20px';
    }
}

// Call the function initially and on window resize
adjustStylesForScreenSize();
window.addEventListener('resize', adjustStylesForScreenSize);