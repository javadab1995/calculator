export function reqAnimate(element) {
      requestAnimationFrame(() => {
        element.classList.remove("scale-75", "opacity-0", "blur-sm");
        element.classList.add("scale-100", "opacity-100", "blur-0");
      });
}