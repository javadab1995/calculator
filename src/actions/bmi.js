import { calculateBMI } from "../calculations/calculateBMI";
import { bmiTemplate } from "../template/bmiTemplate";

import { allowDecimalInput } from "../utils/allowDecimalInput";
import { renderBMI } from "../utils/renderBMI";
import { validateBMI } from "../utils/validation";

export function bmi() {
    return {
      html: bmiTemplate(),

      init: () => {
        const form = document.getElementById("bmi-form");
        const heightInput = document.getElementById("height");
        const weightInput = document.getElementById("weight");
        const result = document.getElementById("result");

        heightInput.addEventListener("input", allowDecimalInput);
        weightInput.addEventListener("input", allowDecimalInput);

        form.addEventListener("submit", (e) => {
          e.preventDefault();

          const height = parseFloat(heightInput.value);
            const weight = parseFloat(weightInput.value);
            
          const error = validateBMI(height, weight);

          if (error) {
            result.style.color = "red";
            result.textContent = error;
            return;
          }

          const bmi = calculateBMI(height, weight);

          renderBMI(result, bmi);
        });

        form.addEventListener("reset", () => {
          setTimeout(() => {
            result.textContent = "";

            result.style.color = "";
          }, 0);
        });
      },
    };
  }
