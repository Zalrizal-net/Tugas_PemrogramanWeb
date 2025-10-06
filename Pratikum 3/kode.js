// Mengatur navbar ketika di scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");   
    } else {
      nav.classList.remove("scrolled"); 
    }
  }
});

// Mengatur mode light/dark
  const toggle = document.getElementById("theme-toggle");
  const modeText = document.getElementById("mode-text");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    modeText.textContent = "Dark";
  }

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    modeText.textContent = "Dark";
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    modeText.textContent = "Light";
  }
});

// Notifikasi contact
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const messageBox = Object.assign(document.createElement("div"), { className: "notification" });
  form.appendChild(messageBox);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const pesan = form.querySelector("#message").value.trim();

    const valid = name && email && pesan;
    messageBox.textContent = valid ? "✅ Pesan berhasil dikirim." : "❌ Semua field harus diisi!";
    messageBox.className = `notification ${valid ? "success" : "error"} show`;

    if (valid) {
      form.reset();
      setTimeout(() => messageBox.classList.remove("show"), 3000);
    }
  });
});

// Tampilkan / sembunyikan foto profil
const photo = document.getElementById("profile-pic");
const button = document.getElementById("toggle-photo");

button.addEventListener("click", () => {
  photo.classList.toggle("hide"); 

  if (photo.classList.contains("hide")) {
    button.textContent = "Tampilkan Foto";
  } else {
    button.textContent = "Sembunyikan Foto";
  }
});
