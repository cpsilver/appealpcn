const now = new Date();

export const currentMonthYear = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
  month: 'long',
  year: 'numeric',
}).format(now);
