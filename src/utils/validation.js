export function validateBMI(height, weight) {
  if (isNaN(height) || isNaN(weight)) {
    return "Please enter valid height and weight.";
  }

  if (height <= 0 || weight <= 0) {
    return "Height and weight must be greater than zero.";
  }

  if (height > 2.5) {
    return "Height must be entered in meters (e.g. 1.75), not centimeters.";
  }

  if (weight > 500) {
    return "Please enter a valid weight in kilograms.";
  }

  return null;
}


export function validateDates(date, target) {
  if (!date || !target || isNaN(date) || isNaN(target)) {
    return "Please select valid dates.";
  }

  if (date > target) {
    return "date date cannot be after target date.";
  }

  return null;
   }
