function adjustStylesForScreenSize() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 1300) {
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

    // Run style adjustments first
    adjustStylesForScreenSize();
    window.addEventListener('resize', adjustStylesForScreenSize);

    // Detect if animations are frozen (mobile Safari sometimes does this)
    setTimeout(() => {
        let anyFrozen = false;
        logos.forEach(el => {
            const computed = window.getComputedStyle(el);
            const matrix = new WebKitCSSMatrix(computed.transform);
            // If transform is identity and opacity is 1, animation never started
            if (matrix.m41 === 0 && matrix.m42 === 0) {
                anyFrozen = true;
            }
        });

        if (anyFrozen) {
            // Only restart if truly frozen
            logos.forEach(logo => {
                logo.style.animation = "none";
            });
            void document.body.offsetWidth;
            logos.forEach(logo => {
                logo.style.animation = "";
            });
        }
    }, 400); // Give Safari enough time to try first
});
