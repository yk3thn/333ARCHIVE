document.getElementById('searchInput').addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();
    var images = document.querySelectorAll('#imageGallery img');

    images.forEach(function (img) {
        var altText = img.alt.toLowerCase();
        var parentDiv = img.parentElement.parentElement;
        parentDiv.style.display = altText.includes(searchValue) ? 'block' : 'none';
    });
});

function adjustStylesForScreenSize() {
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
        document.querySelector('.grid-container').style.marginTop = '40px';
    } else {
        document.getElementById('navbtn').style.fontSize = '20px';
        document.getElementById('navbtn2').style.fontSize = '20px';
        document.getElementById('LLogo').style.top = '27%';
        document.getElementById('RLogo').style.top = '27%';
        document.getElementById('MLogo').style.top = '1%';
        document.getElementById('searchInput').style.fontSize = '16px';
        document.getElementById('searchInput').style.width = '200px';
        document.getElementById('searchContainer').style.padding = '10px';
        document.querySelector('.grid-container').style.marginTop = '50px';
    }
}

adjustStylesForScreenSize();
window.addEventListener('resize', adjustStylesForScreenSize);

window.addEventListener("load", () => {
    const heroImage = document.getElementById("heroImage");
    if (!heroImage || !heroImage.dataset.hq) return;

    const HQ_KEY = "homepageHQLoaded";
    const hqSrc = heroImage.dataset.hq;

    // If HQ already cached before, use it immediately
    if (localStorage.getItem(HQ_KEY)) {
        heroImage.src = hqSrc;
        return;
    }

    // Quietly preload HQ in the background
    const hqImg = new Image();
    hqImg.src = hqSrc;

    hqImg.onload = () => {
        heroImage.src = hqSrc;
        localStorage.setItem(HQ_KEY, "true");
    };
});

