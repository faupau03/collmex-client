import loadSatzarten from './load-satzarten.js';

export default (data) => {
  const satzarten = loadSatzarten();
  return data.map(row => {
    const satz = satzarten[row[0]];
    return Object.fromEntries(Object.keys(satz).map((key, index) => [key, row[index] || '']));
  });
}
