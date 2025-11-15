// Open external links
function joinDiscord() {
  window.open("https://discord.gg/qfhnwB8mPB", "_blank");
}
function openCandidature() {
  window.open("https://candidatures-fermées", "_blank");
}

// Ripple click effect for elements with .ripple
document.addEventListener("click", (e) => {
  const el = e.target.closest(".ripple");
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left - 10;
  const y = e.clientY - rect.top - 10;
  el.style.setProperty("--x", `${x}px`);
  el.style.setProperty("--y", `${y}px`);
  el.classList.add("is-rippling");
  setTimeout(() => el.classList.remove("is-rippling"), 500);
});

// Contact form (demo message)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return;

    const resp = document.getElementById("formResponse");
    resp.textContent = `Merci ${name}! Ton message a bien été pris en compte.`;
    form.reset();
  });
}
