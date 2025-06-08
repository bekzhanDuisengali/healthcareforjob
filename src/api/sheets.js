const SHEET_URL = 'https://api.sheetbest.com/sheets/42fae238-d812-486e-bbaa-b9b18ee17121';

export async function submitDailyData(data) {
  return fetch(SHEET_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}