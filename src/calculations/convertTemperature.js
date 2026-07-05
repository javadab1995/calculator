const toCelsius = {
  c: (v) => v,
  f: (v) => ((v - 32) * 5) / 9,
  k: (v) => v - 273.15,
};

const fromCelsius = {
  c: (v) => v,
  f: (v) => (v * 9) / 5 + 32,
  k: (v) => v + 273.15,
};

export function convertTemperature(value, from, to) {
  return fromCelsius[to](toCelsius[from](value));
}
