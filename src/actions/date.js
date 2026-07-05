

import { calculateDate } from "../calculations/CalculateDate";
import { dateTemplate } from "../template/dateTemplate";
import { validateDates } from "../utils/validation";

export function date() {
  return {
    html: dateTemplate(),
    init: () => {
      const dateInput= document.querySelector("#date");
      const targetDate = document.querySelector("#target-date");
      const form = document.getElementById("date-form");
      const result = document.getElementById("result");
      const dateValue = document.getElementById("date-value");
      
      const errorBox = document.getElementById("error");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!targetDate.value) {
          targetDate.value = new Date();
        }

        const date = new Date(dateInput.value);
        const target = new Date(targetDate.value);

        const error = validateDates(date, target);
        if (error) {
          errorBox.classList.remove("hidden");
          errorBox.textContent = error;
          return;
        }
        errorBox.classList.add("hidden");
        errorBox.textContent = "";

        const diff = calculateDate(date, target);
        dateValue.innerHTML = `
        <p class="flex flex-col gap-1"><span class="text-sm">Years </span> <span> ${diff.years > 0 ? diff.years : "0"} </span> </p>
        <p class="flex flex-col gap-1"><span class="text-sm">Month </span> <span> ${diff.months > 0 ? diff.months : "0"} </span> </p>
        <p class="flex flex-col gap-1"><span class="text-sm">Days </span> <span> ${diff.days > 0 ? diff.days : "0"} </span> </p>
        `;
      });
    },
  };
}
