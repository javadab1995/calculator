export function calculateDate(date, target) {
     let years = target.getFullYear() - date.getFullYear();

     const months = target.getMonth() - date.getMonth();
    const days = target.getDate() - date.getDate();
    
    return {years, months, days}
}