import { createDropdown } from "./dropdown"
import { convert } from "../calculations/convert";
import {allowDecimalInput} from "./allowDecimalInput"
export function initConverter({ units, factors }) {
  const input = document.getElementById("converter-value");
  const form = document.getElementById("converter-form");
  const result = document.getElementById("result-value");

  input.addEventListener("input", allowDecimalInput);

  const from = createDropdown({
    button: "#from-select",
    menu: "#from-dropdown",
    label: "#from-value",
    items: units,
    defaultValue: units[0],
  });

  const to = createDropdown({
    button: "#to-select",
    menu: "#to-dropdown",
    label: "#to-value",
    items: units,
    defaultValue: units[1],
  });

  document.getElementById("swap-btn").onclick = () => {
    const a = from.value;
    const b = to.value;

    from.setValue(b);
    to.setValue(a);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = parseFloat(input.value);

    result.textContent = convert(value, from.value, to.value, factors).toFixed(
      4,
    );
  });
}
