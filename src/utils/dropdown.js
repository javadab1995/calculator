export function createDropdown({
  button,
  menu,
  label,
  items,
  defaultValue = null,
  onChange = () => {},
}) {
  const btn = document.querySelector(button);
  const dropdown = document.querySelector(menu);
  const text = document.querySelector(label);


  
    function openDropdown(dropdown) {
      dropdown.classList.remove(
        "opacity-0",
        "scale-95",
        "-translate-y-2",
        "invisible",
        "pointer-events-none",
      );

      dropdown.classList.add("opacity-100", "scale-100", "translate-y-0");
    }

    function closeDropdown(dropdown) {
      dropdown.classList.remove("opacity-100", "scale-100", "translate-y-0");

      dropdown.classList.add(
        "opacity-0",
        "scale-95",
        "-translate-y-2",
        "invisible",
        "pointer-events-none",
      );
    }

  let selected = defaultValue || items[0];

  text.textContent = ` (${selected.value})`;
  btn.dataset.value = selected.value;

  dropdown.innerHTML = "";

  items.forEach((item) => {
    const option = document.createElement("button");

    option.type = "button";

    option.className = `
      flex w-full items-center justify-between
      px-4 py-3
      hover:bg-text/10
      transition
      border-b border-bg last:border-none
    `;

    option.innerHTML = `
      <span>${item.label}</span>
      <span class="text-alt">${item.value}</span>
    `;

    option.addEventListener("click", () => {
      selected = item;

      text.textContent = ` (${item.value})`;

      btn.dataset.value = item.value;

      dropdown.classList.add("hidden");

      btn.classList.remove("dropdown-open");

      onChange(item);
    });

    dropdown.appendChild(option);
  });

 btn.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = dropdown.classList.contains("opacity-100");

  document.querySelectorAll(".dropdown-menu").forEach(closeDropdown);

  if (!isOpen) {
    openDropdown(dropdown);
  }
});

    document.querySelectorAll(".dropdown-trigger").forEach((el) => {
      if (el !== btn) {
        el.classList.remove("dropdown-open");
      }
    });

    btn.classList.toggle("dropdown-open");
  

 document.addEventListener("click", () => {
  document
    .querySelectorAll(".dropdown-menu")
    .forEach(closeDropdown);
});

  return {
    get value() {
      return selected.value;
    },

    get item() {
      return selected;
    },

    setValue(value) {
      const found = items.find((i) => i.value === value);

      if (!found) return;

      selected = found;

      text.textContent = ` (${found.value})`;

      btn.dataset.value = found.value;
    },
  };
}
