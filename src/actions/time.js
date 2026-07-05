import { converterTemplate } from "../template/converterTemplate";
import { initConverter } from "../utils/converter";

const units = [
  { label: "Millisecond", value: "ms" },
  { label: "Second", value: "s" },
  { label: "Minute", value: "min" },
  { label: "Hour", value: "h" },
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
];

const factors = {
  ms: 0.001,
  s: 1,
  min: 60,
  h: 3600,
  day: 86400,
  week: 604800,
  month: 2592000,
  year: 31536000,
};

export function time() {
  return {
    html: converterTemplate({
      title: "Time Converter",
      inputPlaceholder: "Enter time",
    }),

    init() {
      initConverter({
        units,
        factors,
      });
    },
  };
}
