import path from 'path';
import { existsSync } from 'fs';

export default () => {
  const filePath = path.join(__dirname, '..', 'data', 'satzarten.json');
  const fallbackPath = `${filePath.slice(0, -5)}.original${filePath.slice(-5)}`;
  return existsSync(filePath) ? import(filePath) : import(fallbackPath);
};
