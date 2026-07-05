export function modalTemplate(act, renderContent) {
    return `
      <div class="w-full h-full flex flex-col p-2 modal-content text-lg font-semibold text-text-inverce">
        <div class="flex justify-between items-center mb-4">
             <h3 class="act-title">${act.toUpperCase()}</h3>
             <button class="close_modal-content text-xl font-bold  opacity-50 hover:opacity-100 w-5 h-5 text-alt">X</button>
        </div>
        <div class="flex-1 mt-2 ">
            ${renderContent.html}
            
            
        </div>
      </div>
    `;
}