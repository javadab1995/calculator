

export function animateButton(btn) {
  btn.classList.remove("bg-bg");
  btn.classList.add("bg-accent/10");
  setTimeout(() => {
    btn.classList.remove("bg-accent/10");
    btn.classList.add("bg-bg");
  }, 200);
}

