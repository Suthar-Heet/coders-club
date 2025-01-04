
// headre dropdown 

    // Function to toggle the dropdown
    document.querySelector(".dropbtn").addEventListener("click", function(event) {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");
        event.preventDefault(); // Prevent default action of anchor tag
    });

    // Close dropdown if user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdownContent = document.querySelector(".dropdown-content");
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    }





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

// Prising section 
document.addEventListener("DOMContentLoaded", () => {
  const pricingCards = document.querySelectorAll('.pricing-cards');

  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the card is in view
      if (entry.isIntersecting) {
        // Add the 'show' class to trigger the animation
        entry.target.classList.add('show');
        // Stop observing once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  // Observe each pricing card
  pricingCards.forEach(card => {
    observer.observe(card);
  });

  const monthlyBtn = document.getElementById("monthly-btn");
  const annuallyBtn = document.getElementById("annually-btn");
  const priceValues = document.querySelectorAll(".price-value");

  // Ensure that the buttons are present
  if (!monthlyBtn || !annuallyBtn) {
    console.error("Monthly or Annually buttons are missing.");
    return;
  }

  // Update prices when "Monthly" button is clicked
  monthlyBtn.addEventListener("click", () => {
    // Set the active class to highlight the selected button
    monthlyBtn.classList.add("active");
    annuallyBtn.classList.remove("active");

    // Update the price to monthly
    priceValues.forEach((price) => {
      price.textContent = price.dataset.monthly;
    });
  });

  // Update prices when "Annually" button is clicked
  annuallyBtn.addEventListener("click", () => {
    // Set the active class to highlight the selected button
    annuallyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    // Update the price to annually
    priceValues.forEach((price) => {
      price.textContent = price.dataset.annually;
    });
  });
});
