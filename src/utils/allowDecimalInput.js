export function allowDecimalInput(e) {
   
  let value = e.target.value;

  value = value.replace(/[^0-9.]/g, "");

  const parts = value.split(".");
  if (parts.length > 2) {
    value = parts.shift() + "." + parts.join("");
  }

  e.target.value = value;
}
