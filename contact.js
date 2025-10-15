function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 1300) { /* note to self: make sure all elements actually exist */
        document.getElementById('logoWordmark').style.width = '125px';
        document.getElementById('logoHover').style.width = '125px';
        document.getElementById('banner').style.fontSize = '10px';
        document.getElementById('responsiveText').style.fontSize = '25px';
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

		document.getElementById('LLogo').style.top = '12.5%';
		document.getElementById('RLogo').style.top = '12.5%';
		document.getElementById('MLogo').style.top = '5%';
    } else {
        document.getElementById('logoWordmark').style.width = '200px';
        document.getElementById('logoHover').style.width = '200px';
        document.getElementById('banner').style.fontSize = '15px';
        document.getElementById('responsiveText').style.fontSize = '40px';
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

window.addEventListener("load", function () {
    const logos = document.querySelectorAll(".leftLogo, .largeLogo, .rightLogo");

    adjustStylesForScreenSize();
    window.addEventListener('resize', adjustStylesForScreenSize);

    setTimeout(() => {
        let anyFrozen = false;
        logos.forEach(el => {
            const computed = window.getComputedStyle(el);
            const matrix = new WebKitCSSMatrix(computed.transform);
            if (matrix.m41 === 0 && matrix.m42 === 0) {
                anyFrozen = true;
            }
        });

        if (anyFrozen) {
            logos.forEach(logo => {
                logo.style.animation = "none";
            });
            void document.body.offsetWidth;
            logos.forEach(logo => {
                logo.style.animation = "";
            });
        }
    }, 400);
});
