// M-FAVOR Website Script
document.addEventListener("DOMContentLoaded", function() {
    console.log("M-FAVOR Website loaded successfully.");

    // Active Navigation Link Highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Contact Form Submission Handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Merci pour votre message ! Nous vous contacterons sous peu.");
            contactForm.reset();
        });
    }
});
