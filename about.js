
		
function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 1300) {
        document.getElementById('logoWordmark').style.width = '125px';
		document.getElementById('logoHover').style.width = '125px';
		document.getElementById('banner').style.fontSize = '10px';
		document.getElementById('responsiveText').style.fontSize = 	'30px';
		document.getElementById('responsiveText1').style.fontSize = '20px';
		document.getElementById('responsiveText2').style.fontSize = '10px';
		document.getElementById('responsiveText3').style.fontSize = '15px'; document.getElementById('responsiveText3').style.marginBottom = '-15px';
		document.getElementById('responsiveText4').style.fontSize = '10px';
		document.getElementById('responsiveText5').style.fontSize = '15px'; document.getElementById('responsiveText5').style.marginBottom = '-15px';
		document.getElementById('responsiveText6').style.fontSize = '10px';
		document.getElementById('responsiveText7').style.fontSize = '15px'; document.getElementById('responsiveText7').style.marginBottom = '-15px';
		document.getElementById('responsiveText8').style.fontSize = '10px';
		document.getElementById('responsiveText9').style.fontSize = '15px'; document.getElementById('responsiveText9').style.marginBottom = '-15px';
		document.getElementById('responsiveTexta').style.fontSize = '10px'; document.getElementById('responsiveTexta').style.color = '#00008b';
		document.getElementById('responsiveTextb').style.fontSize = '15px'; document.getElementById('responsiveTextb').style.marginBottom = '-15px';
		document.getElementById('responsiveTextc').style.fontSize = '10px';
		
		document.getElementById('LLogo').style.top = '12.5%';
		document.getElementById('RLogo').style.top = '12.5%';
		document.getElementById('MLogo').style.top = '5%';
		document.getElementById('banner').style.fontSize = '10px';
    } else {
        document.getElementById('logoWordmark').style.width = '200px';
		document.getElementById('logoHover').style.width = '200px';
		document.getElementById('banner').style.fontSize = '15px';
		document.getElementById('responsiveText').style.fontSize = 	'40px';
		document.getElementById('responsiveText1').style.fontSize = '20px';
		document.getElementById('responsiveText2').style.fontSize = '15px';
		document.getElementById('responsiveText3').style.fontSize = '20px';
		document.getElementById('responsiveText4').style.fontSize = '15px';
		document.getElementById('responsiveText5').style.fontSize = '20px';
		document.getElementById('responsiveText6').style.fontSize = '15px';
		document.getElementById('responsiveText7').style.fontSize = '20px';
		document.getElementById('responsiveText8').style.fontSize = '15px';
		document.getElementById('responsiveText9').style.fontSize = '20px';
		document.getElementById('responsiveTexta').style.fontSize = '15px'; document.getElementById('responsiveTexta').style.color = '#00008b';
		document.getElementById('responsiveTextb').style.fontSize = '20px';
		document.getElementById('responsiveTextc').style.fontSize = '15px';
		
		document.getElementById('LLogo').style.top = '27%';
		document.getElementById('RLogo').style.top = '27%';
		document.getElementById('MLogo').style.top = '1%';
		
    }
}

adjustStylesForScreenSize();
window.addEventListener('resize', adjustStylesForScreenSize);
