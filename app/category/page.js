import AllCategories from '@/components/AllCategories';
import loadData from '@/util/getRecipeData';

export default async function Categories() {
  const { recipes, categories } = await loadData();

  return <AllCategories recipes={recipes} categories={categories} />;
}
