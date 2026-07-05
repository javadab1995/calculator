import { menu, menuItem } from "./dom";
import {bmi} from "../actions/bmi"
import {speed} from "../actions/speed"
import {time} from "../actions/time"
import {date} from "../actions/date"
import {temp} from "../actions/temp"
import {mass} from "../actions/mass"
import {age} from "../actions/age"
import {length} from "../actions/length"
import { modalTemplate } from "../template/itemModal";
import { reqAnimate } from "../animation/reqAnimation";


const actions = {
  bmi,
  speed,
  time,
  date,
  temp,
  mass,
  age,
  length
};

export function initMenuItems(){
    
menuItem.forEach((item) => {
  item.setAttribute("data-action", `${item.textContent.trim().toLowerCase()}`);

  item.addEventListener("click", (e) => {
    const currentClickedItem = e.currentTarget;
    const act = currentClickedItem.dataset.action;
  
    const renderContent = actions[act]
      ? actions[act]()
      : { html: `<p>محتوایی یافت نشد!</p>` };

    menuItem.forEach((el) =>
      el.firstElementChild.classList.remove(
        "bg-text/25",
        "scale-120",
        "font-bold",
      ),
    );

    currentClickedItem.firstElementChild.classList.add(
      "bg-text/25",
      "scale-120",
      "font-bold",
    );

    const existingModal = menu.querySelector('div[class*="absolute"]');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = `
        absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
    lg:w-xl w-11/12 h-100
      bg-operator p-4 rounded-3xl shadow-2xl
      scale-75 opacity-0 backdrop-blur-2xl
      transition-all duration-500 ease-out
    `;

    modal.innerHTML = modalTemplate(act, renderContent);

    menu.appendChild(modal);
    if (renderContent.init) renderContent.init();

    reqAnimate(modal);

    // --- بخش سوم: مدیریت بستن مودال ---

    const closeModal = () => {
      modal.classList.add("scale-75", "opacity-0", "blur-sm", "hidden");
      currentClickedItem.firstElementChild.classList.remove(
        "bg-text/25",
        "scale-120",
        "font-bold",
      );
    };

    modal
      .querySelector(".close_modal-content")
      .addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  });
});

}