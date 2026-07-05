export function renderBMI(resultDiv, bmi) {
  let status = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "goldenrod";
  } else if (bmi < 25) {
    status = "Normal";
    color = "rgb(12, 186, 12)";
  } else if (bmi < 30) {
    status = "Overweight";
    color = "orange";
  } else {
    status = "Obese";
    color = "orangered";
  }

  resultDiv.style.color = color;
  resultDiv.innerHTML = `
   <strong class="p-1"> BMI: ${bmi}</strong>  
    <span class="p-1" > Status: ${status}</span>
  `;
}
