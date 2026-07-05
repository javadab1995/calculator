export function calculateBMI(height, weight) {
  return +(weight / (height * height)).toFixed(2);
}
