import { existsSync } from 'fs'

export default async() => {
  const filePath = new URL('../data/satzarten.json', import.meta.url).pathname
  const fallbackPath = `${filePath.slice(0, -5)}.original${filePath.slice(-5)}`
  const {default: satzarten} =  existsSync(filePath) ? await import(filePath, { assert: {type: "json"}}) : await import(fallbackPath, { assert: {type: "json"}})
  return satzarten;
}
