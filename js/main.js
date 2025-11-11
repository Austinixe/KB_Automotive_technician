document.addEventListener("DOMContentLoaded", () => {
    // ===================================
    // === 1. MOBILE MENU TOGGLE LOGIC ===
    // ===================================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        // Toggle menu on click
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });

        // Close menu when a link is clicked (on mobile)
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                // Wait briefly for navigation to occur before closing the menu
                setTimeout(() => {
                    navMenu.classList.remove("show");
                }, 100); 
            });
        });
    }

    // ===================================
    // === 2. BACK TO TOP BUTTON LOGIC ===
    // ===================================
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        // Show/Hide button based on scroll position
        window.addEventListener("scroll", () => {
            // Check if the scroll position is greater than 200px
            backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
        });

        // Scroll to top when button is clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ===================================
    // === 3. COOKIE BANNER PERSISTENCE ==
    // ===================================
    
    // Key used to store acceptance status in browser's local storage
    const COOKIE_ACCEPTED_KEY = 'kb_cookies_accepted';

    function initCookieBanner() {
        // Check if the user has already accepted cookies
        if (localStorage.getItem(COOKIE_ACCEPTED_KEY) === 'true') {
            return; // Exit if already accepted
        }

        // Create and append the banner element
        const cookieBanner = document.createElement("div");
        cookieBanner.className = "cookie-banner";
        cookieBanner.innerHTML = `
            <span>We use cookies to improve your experience. By using our site, you agree to our Privacy Policy.</span>
            <button id="acceptCookies">Accept</button>
        `;
        document.body.appendChild(cookieBanner);

        // Set up the click listener for acceptance
        document.getElementById("acceptCookies").addEventListener("click", () => {
            // Save acceptance status to local storage
            localStorage.setItem(COOKIE_ACCEPTED_KEY, 'true'); 
            cookieBanner.style.display = "none";
        });
    }

    initCookieBanner();
});