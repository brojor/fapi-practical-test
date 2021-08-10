function parseNumbers(label, value) {
  switch (label) {
    case 'exchangeRate':
      return Number(value.replace(',', '.'));
    case 'quantity':
      return Number(value);
    default:
      return value;
  }
}

export default function parseData(data) {
  const rows = data.split('\n').slice(2);
  rows.pop();
  const labels = ['country', 'currency', 'quantity', 'code', 'exchangeRate'];
  return rows.map((row) => row.split('|').reduce((obj, item, index) => {
    const label = labels[index];
    const value = parseNumbers(label, item);
    obj[label] = value;
    return obj;
  }, {}));
}
