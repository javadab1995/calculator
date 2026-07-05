export function bmiTemplate() {
  return `
    <form id="bmi-form" class="w-full p-1 space-y-4">
      <input
        id="height"
        type="text"
        inputmode="decimal"
        placeholder="Height (m) | e.g. 1.75"
        class="p-2 w-full border-b border-bg text-text-inverce focus:outline-none focus:border-b-2 focus:border-accent"
      />

      <input
        id="weight"
        type="text"
        inputmode="decimal"
        placeholder="Weight (kg)"
        class="p-2 w-full border-b border-bg text-text-inverce focus:outline-none focus:border-b-2 focus:border-accent"
      />

      <div class="flex gap-3">
        <button
          type="submit"
          class="flex-1 p-2.5 rounded-[10px] bg-accent text-primary"
        >
          Calculate
        </button>

        <button
          type="reset"
          class="flex-1 p-2.5 rounded-[10px] border border-bg"
        >
          Reset
        </button>
      </div>

      <div
        id="result"
        class="min-h-20 flex  items-center justify-center border border-bg bg-bg rounded-[10px] p-4 mt-5 divide-x divide-accent"
      ></div>
    </form>
  `;
}
