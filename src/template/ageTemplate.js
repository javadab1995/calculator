export function ageTemplate() {
  return `
    <form id="age-form" class="space-y-4">

      <div class="space-y-4">

        <div class="flex  items-center justify-between  gap-1">
          <label
            for="birthdate"
            class="text-sm font-medium text-alt"
          >
             Birthdate
          </label>

          <input
            id="birthdate"
            type="date"
            class="w-full rounded-md max-w-2/3 bg-primary p-2 text-text  focus:outline-none"
          />
        </div>

        <div class="flex items-center justify-between  gap-1 ">
          <label
            for="target-date"
            class="text-sm font-medium text-alt"
          >
            Age On
          </label>

          <input
            id="target-date"
            type="date"
            class="w-full  max-w-2/3 bg-primary p-2 text-text rounded-md focus:outline-none"
          />
        </div>

      </div>

      <div class="flex gap-2">

        <button
          type="submit"
          class="flex-1 rounded-lg bg-accent py-2 font-semibold text-primary transition hover:opacity-90"
        >
          Calculate
        </button>

        <button
          type="reset"
          class="flex-1 rounded-lg border border-bg py-2 font-semibold text-text-inverce transition hover:bg-bg"
        >
          Reset
        </button>

      </div>

      <p
  id="error"
  class="hidden border border-red-500 bg-red-100 rounded-[10px] p-2  text-sm text-red-600"
></p>

      <div
        id="result"
        class="grid grid-cols-2 gap-2 "
      >

        <div class="rounded-[10px] bg-bg p-1 text-center">
          <p  class="text-xs uppercase tracking-wide text-alt">
            Age
          </p>
          <p id="age-value" class="mt-2 text-4xl font-bold">
            --
          </p>
        </div>

        <div class="rounded-lg bg-bg p-1 text-center">
          <p class="text-xs uppercase tracking-wide text-alt">
            Next birthday
          </p>
          <div id="next" class="mt-2 text-sm font-bold flex justify-center gap-2">
            --
          </div>
        </div>

        

      </div>

    </form>
  `;
}
