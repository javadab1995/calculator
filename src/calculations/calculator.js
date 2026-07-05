
import { animateButton } from "../animation/animateButton";
import { btns, del, display, equal, reset } from "../utils/dom";

export function handleInput(value) {
  const currentDisplay = display.value;
  const lastChar = currentDisplay.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (currentDisplay === "Error") {
    display.value = "";
    return;
  }

  if (operators.includes(value) && operators.includes(lastChar)) {
    display.value = currentDisplay.slice(0, -1) + value;
  } else if (currentDisplay === "" && ["*", "/"].includes(value)) {
    return;
  } else {
    display.value += value;
  }
}


function handleButtonClick(e) {
  const btn = e.currentTarget;
  const value = btn.dataset.value;
  if (!value) return;
  handleInput(value);
  animateButton(btn);
}

btns.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});


/* reset input */
 function reseted() {
  display.value = "";
}

/* backspace delete */
 function deleted() {
  display.value = display.value.slice(0, -1);
}

/* calculator */
 function calc() {
  try {
    if (display.value === "" || display.value === "Error") return;

    const result = new Function("return " + display.value)();

    display.value = Number.isFinite(result) ? result : "Error";
  } catch {
    display.value = "Error";
  }
}

export function initCalc() {
  
document.addEventListener("keydown", (e) => {
  const tag = e.target.tagName;

  if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) {
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    calc();
  } else if (e.key === "Backspace") {
    e.preventDefault();
    deleted();
  } else if (e.key === "Escape") {
    e.preventDefault();
    reset();
  } else if (/[0-9+\-*/.]/.test(e.key)) {
    handleInput(e.key);
  }
});

del.addEventListener("click", deleted);
reset.addEventListener("click", reseted);
equal.addEventListener("click", calc);

  
}