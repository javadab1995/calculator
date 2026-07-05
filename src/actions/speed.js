import { converterTemplate } from "../template/converterTemplate";
import { initConverter } from "../utils/converter";

 const units = [
  { label: "Millimeters/s", value: "mmps" },
  { label: "Centimeters/s", value: "cmps" },
  { label: "Meters/s", value: "mps" },
  { label: "Kilometers/h", value: "kmh" },
  { label: "Miles/h", value: "mph" },
  { label: "Feet/s", value: "fps" },
  { label: "Knots", value: "knot" },
];

 const factors = {
  mmps: 0.001,
  cmps: 0.01,
  mps: 1,
  kmh: 0.2777777778,
  mph: 0.44704,
  fps: 0.3048,
  knot: 0.514444,
};

export function speed() {
  return {
    html: converterTemplate({
      title: "Speed Converter",
      inputPlaceholder: "Enter speed",
    }),

    init() {
      initConverter({
        units,
        factors,
      });
    },
  };
}