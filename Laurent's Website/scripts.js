// Animations
document.addEventListener("DOMContentLoaded", function () {
    animateWelcome();
    animateElements();
});

function animateWelcome() {
    const welcome = document.getElementById('welcome');
    welcome.style.opacity = '0';
    welcome.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        welcome.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        welcome.style.opacity = '1';
        welcome.style.transform = 'translateY(0)';
    }, 500);
}

function animateElements() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
}

// Show loader and background overlay
const loader = document.querySelector(".loader");
const bodyOverlay = document.createElement("div");
bodyOverlay.classList.add("body-overlay");
document.body.appendChild(bodyOverlay);

// Display loader and background overlay initially
document.querySelector('.loader-container').style.display = 'block';

// Hide loader and background overlay after a specified delay
window.addEventListener("load", function () {
    const delayTime = 2000; // Delay time in milliseconds
    setTimeout(function () {
        loader.style.opacity = "0"; // Fade out animation (optional)
        bodyOverlay.style.opacity = "0"; // Fade out animation for background overlay

        // Remove loader and background overlay elements
        loader.parentNode.removeChild(loader);
        bodyOverlay.parentNode.removeChild(bodyOverlay);

        // Hide loader container after the loader and background overlay have been removed
        document.querySelector('.loader-container').style.display = 'none';

    }, delayTime);
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const len = menuItem.length;
for (let i = 0; i < len; i++) {
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Terima kasih atas Contact Anda!");
    });
});