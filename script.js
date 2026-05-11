const languageBtn = document.getElementById("languageBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

let currentLanguage = "en";

year.textContent = new Date().getFullYear();

function updateLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageBtn.textContent = language === "en" ? "EN | 中文" : "中文 | EN";
}

languageBtn.addEventListener("click", () => {
  updateLanguage(currentLanguage === "en" ? "zh" : "en");
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
