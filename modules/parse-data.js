import loadSatzarten from './load-satzarten.js'

export default async(data) => {
  const satzarten = await loadSatzarten()
  return data.map(row => {
    const satz = satzarten[row[0]]
    return Object.fromEntries(Object.keys(satz).map((key, index) => [key, row[index] || '']))
  })
}
