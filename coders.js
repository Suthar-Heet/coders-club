// Scroll-triggered animation for parallax effect
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.animate-text');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger animation when the element is in the viewport
    if (position < windowHeight - 100) {  // 100px buffer
      element.classList.add('in-view');
    }
  });
});

// out team 

// script.js
function toggleInfo(profile) {
  const info = document.getElementById(`${profile}-info`);
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}
