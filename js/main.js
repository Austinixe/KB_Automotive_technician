// === MOBILE TOGGLE ===
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu when a link is clicked (on mobile)
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// === BACK TO TOP BUTTON ===
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === COOKIE BANNER ===
const cookieBanner = document.createElement("div");
cookieBanner.className = "cookie-banner";
cookieBanner.innerHTML = `
  <span>We use cookies to improve your experience. By using our site, you agree to our Privacy Policy.</span>
  <button id="acceptCookies">Accept</button>
`;
document.body.appendChild(cookieBanner);

// Accept button functionality
document.getElementById("acceptCookies").addEventListener("click", () => {
  cookieBanner.style.display = "none";
});
