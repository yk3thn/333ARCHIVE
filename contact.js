function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;
const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

	if (isMobile) {
        document.getElementById('navbtn').style.fontSize = '10px';
		document.getElementById('navbtn2').style.fontSize = '10px';
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
document.getElementById('logoWordmark').style.width = '125px';
		document.getElementById('logoHover').style.width = '125px';
		document.getElementById('banner').style.fontSize = '10px';
		document.getElementById('responsiveText').style.fontSize = 	'25px';
		document.getElementById('responsiveText1').style.fontSize = '20px';
		document.getElementById('responsiveText2').style.fontSize = '15px';
		document.getElementById('responsiveText3').style.fontSize = '20px';
		document.getElementById('responsiveText4').style.fontSize = '15px';
		document.getElementById('responsiveText5').style.fontSize = '20px';
		document.getElementById('responsiveText6').style.fontSize = '15px';
		document.getElementById('responsiveText7').style.fontSize = '20px';
		document.getElementById('responsiveText8').style.fontSize = '15px';
		document.getElementById('responsiveText9').style.fontSize = '20px';
		document.getElementById('responsiveTexta').style.fontSize = '15px';
		document.getElementById('responsiveTextb').style.fontSize = '20px';
		document.getElementById('responsiveTextc').style.fontSize = '15px';
		document.getElementById('responsiveTextd').style.fontSize = '20px';
		document.getElementById('responsiveTexte').style.fontSize = '15px';
    } else {
        document.getElementById('navbtn').style.fontSize = '20px';
		document.getElementById('navbtn2').style.fontSize = '20px';
		document.getElementById('LLogo').style.top = '27%';
		document.getElementById('RLogo').style.top = '27%';
		document.getElementById('MLogo').style.top = '1%';
        document.getElementById('searchInput').style.fontSize = '16px';
        document.getElementById('searchInput').style.width = '200px';
        document.getElementById('searchContainer').style.padding = '10px';
        document.getElementById('navbtn').style.padding = '7px 15px';
		document.getElementById('navbtn2').style.padding = '7px 15px';
        document.querySelector('.grid-container').style.marginTop = '50px';
		document.getElementById('banner').style.fontSize = '15px';
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