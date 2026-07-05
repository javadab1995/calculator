import { circle, themeBtn } from "./dom";



 const isDarkActive = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const setCirclePosition = (isDark) => {
  if (isDark) {
    circle.classList.remove("left-1");
    circle.classList.add("right-1");
  } else {
    circle.classList.remove("right-1");
    circle.classList.add("left-1");
  }
}; 

function applyTheme(theme) {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    html.classList.add(theme)
    localStorage.setItem("theme", theme)
    setCirclePosition(theme === "dark")
}

function toggleTheme() {
    applyTheme(isDarkActive() ? "light" : "dark")
}

function applySavedTheme() {
    applyTheme(localStorage.getItem("theme" || "light"))
}

export function initTheme() {
    themeBtn.addEventListener("click", toggleTheme);
    applySavedTheme()
}