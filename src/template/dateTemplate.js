export function dateTemplate() {
  return `
    <form id="date-form" class="space-y-4">

      <div class="space-y-4">

        <div class="flex  items-center justify-between  gap-1">
          <label
            for="date"
            class="text-sm font-medium text-alt"
          >
             from
          </label>

          <input
            id="date"
            type="date"
            class="w-full rounded-md max-w-2/3 bg-primary p-2 text-text  focus:outline-none"
          />
        </div>

        <div class="flex items-center justify-between  gap-1 ">
          <label
            for="target-date"
            class="text-sm font-medium text-alt"
          >
             to
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
        class="flex items-center gap-2  w-full"
      >

        <div class="rounded-[10px] bg-bg  text-center divide-y divide-operator flex-1">
          <p  class="text-xs uppercase tracking-wide text-alt p-1 ">
            Difference
          </p>
          <div id="date-value" class=" text-xl font-bold p-2 flex justify-between items-center">
           
          </div>
          
        </div>

        

        

      </div>

    </form>
  `;
}
