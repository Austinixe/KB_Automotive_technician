// === MOBILE TOGGLE ===
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
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

document.getElementById("acceptCookies").addEventListener("click", () => {
  cookieBanner.style.display = "none";
});
