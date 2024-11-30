import { promises as fs } from 'fs';
import path from 'path';

async function readJsonFile(fileName) {
  const filePath = path.join(process.cwd(), 'data', fileName);
  const file = await fs.readFile(filePath, 'utf8');
  return JSON.parse(file);
}

async function loadData() {
  const recipes = await readJsonFile('recipes.json');
  const categories = await readJsonFile('categories.json');
  return { recipes, categories };
}
export default loadData;
