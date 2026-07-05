import { converterTemplate } from "../template/converterTemplate";
import { createDropdown } from "../utils/dropdown";
import { allowDecimalInput } from "../utils/allowDecimalInput";
import { convertTemperature } from "../calculations/convertTemperature";

const units = [
  { label: "Celsius", value: "c" },
  { label: "Fahrenheit", value: "f" },
  { label: "Kelvin", value: "k" },
];

export function temp() {
  return {
    html: converterTemplate({
      title: "Temperature Converter",
      inputPlaceholder: "Enter temperature",
    }),

    init() {
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

      document.getElementById("swap-btn").addEventListener("click", () => {
        const a = from.value;
        const b = to.value;

        from.setValue(b);
        to.setValue(a);
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const value = parseFloat(input.value);

        if (isNaN(value)) {
          result.textContent = "Please enter a valid temperature.";
          return;
        }

        const converted = convertTemperature(value, from.value, to.value);

        result.textContent = `${converted.toFixed(2)} ${to.value.toUpperCase()}`;
      });
    },
  };
}
