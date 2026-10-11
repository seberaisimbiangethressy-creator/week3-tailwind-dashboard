const root = document.documentElement;
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeBtn = document.getElementById("theme-btn");

/* ---------- Mobile menu toggle ---------- */
function setMenu(open) {
  sidebar.classList.toggle("-translate-x-full", !open);
  overlay.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () => setMenu(true));
closeBtn.addEventListener("click", () => setMenu(false));
overlay.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

/* ---------- Dark mode (saved in localStorage) ---------- */
function setTheme(dark) {
  root.classList.toggle("dark", dark);
  themeBtn.setAttribute("aria-pressed", String(dark));
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}
themeBtn.addEventListener("click", () => setTheme(!root.classList.contains("dark")));
setTheme(root.classList.contains("dark"));

/* ---------- Add user form ---------- */
const form = document.getElementById("user-form");
const msg = document.getElementById("form-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(form).get("name");
  msg.textContent = `${name} was added (demo only, nothing is saved).`;
  form.reset();
});
