export function calculateAge(birth, target) {
  let age = target.getFullYear() - birth.getFullYear();

  const monthDiff = target.getMonth() - birth.getMonth();
  const dayDiff = target.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

export function getNextBirthdayDiff(birth, target) {
  let nextBirthday = new Date(
    target.getFullYear(),
    birth.getMonth(),
    birth.getDate(),
  );

  if (nextBirthday < target) {
    nextBirthday.setFullYear(target.getFullYear() + 1);
  }

  let diffMs = nextBirthday - target;

  const daysTotal = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const years = Math.floor(daysTotal / 365);
  const months = Math.floor((daysTotal % 365) / 30);
  const days = daysTotal % 30;

  return { years, months, days, totalDays: daysTotal };
}