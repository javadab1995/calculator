import { closeIcon, menuBtn } from "./dom";

export function initMenu() {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("hidden");
      const isMenuHidden = menu.classList.contains("hidden");
      menu.classList.toggle("flex", !isMenuHidden);
    });

    closeIcon.addEventListener("click", () => {
      menu.classList.add("hidden");
    });

}