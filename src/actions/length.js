import { converterTemplate } from "../template/converterTemplate";
import { initConverter } from "../utils/converter";

const units = [
  { label: "Millimeter", value: "mm" },
  { label: "Centimeter", value: "cm" },
  { label: "Meter", value: "m" },
  { label: "Kilometer", value: "km" },
  { label: "Mile", value: "mi" },
];

const factors = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  mi: 1609.344,
};
export function length() {
    return {
        html: converterTemplate({
            title: "Length Converter",
            inputPlaceholder: "Enter length",
        }),

        init() {
            initConverter({
                units,
                factors,
            });
        },
    };
}