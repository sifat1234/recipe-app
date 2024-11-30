import '../styles/output.css';
import HandPickedCollections from '@/components/Home/HandPickedCollections';
import HeroSection from '@/components/Home/HeroSection';
import LatestRecipes from '@/components/Home/LatestRecipes';

import SuperDeliciousSection from '@/components/Home/SuperDeliciousSection';
import PopularCategoriesSection from '@/components/Home/PopularCategoriesSection';
import loadData from '@/util/getRecipeData';

export default async function Home() {
  const { recipes, categories } = await loadData();

  return (
    <main className='container mx-auto mt-0  px-4 '>
      <HeroSection recipeData={recipes} />
      <SuperDeliciousSection recipeData={recipes} />
      <PopularCategoriesSection categories={categories} recipeData={recipes} />
      <HandPickedCollections recipeData={recipes} />
      <LatestRecipes recipeData={recipes} />
    </main>
  );
}
