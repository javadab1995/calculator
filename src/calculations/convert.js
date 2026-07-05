export function convert(value, from, to, factors) {
     if (Number.isNaN(value)) {
       throw new Error("Please enter a valid number.");
     }

     if (value < 0) {
       throw new Error("Value cannot be negative.");
     }

     if (!(from in factors) || !(to in factors)) {
       throw new Error("Unsupported unit.");
     }

     if (from === to) return value;

  const baseValue = value * factors[from];
  return baseValue / factors[to];
}
