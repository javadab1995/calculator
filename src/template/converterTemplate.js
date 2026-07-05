export function converterTemplate({
  title,
  inputPlaceholder,
  buttonText = "Convert",
}) {
  return `
    <form id="converter-form" class="space-y-4">
        <label class="text-sm text-alt">Value</label>
      <input
        id="converter-value"
        type="text"
        inputmode="decimal"
        placeholder="${inputPlaceholder}"
        class="w-full border rounded-xl p-2"
      />

      <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">

        <div class="relative">
        <label class="mb-2 block text-sm text-alt">
            From
          </label>
          <button id="from-select" type="button" class="flex w-full items-center justify-between rounded-xl border border-bg bg-transparent p-1">
            <span id="from-value"></span>
          </button>

          <div id="from-dropdown" class="dropdown-menu   -mt-2 -translate-y-2 invisible pointer-events-none absolute left-0 top-1/2 z-50 text-xs lg:text-base  max-h-60 w-full overflow-y-auto rounded-xl border border-bg bg-operator/75 transition-all duration-300 ease-in-out backdrop-blur-sm shadow-xl"></div>
        </div>

        <button id="swap-btn" type="button " class="mt-6">⇄</button>

        <div class="relative">
        <label class="mb-2 block text-sm text-alt">
            To
          </label>
          <button id="to-select" type="button" class="flex w-full items-center justify-between rounded-xl border border-bg bg-transparent p-1">
            <span id="to-value"></span>
          </button>

          <div id="to-dropdown" class="dropdown-menu  opacity-0 -mt-2 -translate-y-2 invisible pointer-events-none text-xs lg:text-base absolute left-0 top-1/2 z-50   max-h-60 w-full overflow-y-auto rounded-xl border border-bg bg-operator/75 transition-all duration-300 ease-in-out backdrop-blur-sm shadow-xl"></div>
        </div>

      </div>

      <button type="submit"  class="w-full rounded-xl bg-accent p-3 font-semibold text-primary">${buttonText}</button>

      <div id="result-value" class="rounded-xl border border-bg p-5 text-center text-alt font-extrabold text-2xl" ></div>

    </form>
  `;
}
