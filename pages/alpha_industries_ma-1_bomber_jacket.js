const images = ["../assets/items/alpha_industries_ma-1_bomber_jacket/1.png", "../assets/items/alpha_industries_ma-1_bomber_jacket/2.png", "../assets/items/alpha_industries_ma-1_bomber_jacket/3.png", "../assets/items/alpha_industries_ma-1_bomber_jacket/4.png", "../assets/items/alpha_industries_ma-1_bomber_jacket/5.png"];
let currentIndex = 0;
//document.getElementById("mainImage").src = images[currentIndex];

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
const btn = document.querySelector('.btn');
    const imageGridOverlay = document.querySelector('.image-grid-overlay');
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'image-grid-close';
    imageGridOverlay.appendChild(closeBtn);

    btn.addEventListener('click', () => {
        imageGridOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeBtn.addEventListener('click', () => {
        imageGridOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
	
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
    }
}

adjustStylesForScreenSize();
window.addEventListener('resize', adjustStylesForScreenSize);

window.addEventListener("load", () => {
    const intro = document.getElementById("intro-animation");
    const siteContent = document.getElementById("site-content");
    const lastLogo = document.getElementById("RLogo");

   
    document.querySelectorAll("#LLogo, #MLogo, #RLogo").forEach(el => {
        el.style.animation = "none";
        el.offsetHeight;
        el.style.animation = null;
    });


    lastLogo.addEventListener("animationend", () => {
        intro.style.display = "none";
        siteContent.style.display = "block";
    });
});
