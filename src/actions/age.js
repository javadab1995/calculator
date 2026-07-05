import {
  calculateAge,
  getNextBirthdayDiff,
} from "../calculations/calculateAge";
import { ageTemplate } from "../template/ageTemplate";
import { validateDates } from "../utils/validation";

export function age() {
  return {
    html: ageTemplate(),
    init: () => {
      const birthdate = document.querySelector("#birthdate");
      const targetDate = document.querySelector("#target-date");
      const form = document.getElementById("age-form");
      const result = document.getElementById("result");
      const ageValue = document.getElementById("age-value");
      const next = document.getElementById("next");
      const errorBox = document.getElementById("error");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!targetDate.value) {
          targetDate.value = new Date();
        }

        const birth = new Date(birthdate.value);
        const target = new Date(targetDate.value);

        const error = validateDates(birth, target);
        if (error) {
          errorBox.classList.remove("hidden");
          errorBox.textContent = error;
          return;
        } 
        errorBox.classList.add("hidden");
        errorBox.textContent = "";


        const age = calculateAge(birth, target);
        const diff = getNextBirthdayDiff(birth, target);
        ageValue.textContent = age;
        next.innerHTML = `
        <p class="flex flex-col gap-1"><span class="text-sm">Month </span> <span> ${diff.months > 0 ? diff.months : "0"} </span> </p>
        <span>|</span>
        <p class="flex flex-col gap-1"><span class="text-sm">Days </span> <span> ${diff.days > 0 ? diff.days : "0"} </span> </p>
        `;
      });
    },
  };
}
