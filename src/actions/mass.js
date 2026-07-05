import { converterTemplate } from "../template/converterTemplate";
import { initConverter } from "../utils/converter";

const units = [
  { label: "Milligram", value: "mg" },
  { label: "Gram", value: "g" },
  { label: "Kilogram", value: "kg" },
  { label: "Ton", value: "t" },
  { label: "Ounce", value: "oz" },
  { label: "Pound", value: "lb" },
];

const factors = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  t: 1000000,
  oz: 28.349523125,
  lb: 453.59237,
};

export function mass() {
  return {
    html: converterTemplate({
      title: "Mass Converter",
      inputPlaceholder: "Enter mass",
    }),

    init() {
      initConverter({
        units,
        factors,
      });
    },
  };
}
