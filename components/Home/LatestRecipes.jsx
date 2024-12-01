import Image from 'next/image';
import Link from 'next/link';
import categories from '@/data/categories.json';
import recipes from '@/data/recipes.json';
import { getImageSrc } from '@/util/imageUtils.js';

function LatestRecipes() {
  // Function to get the latest 4 recipes
  const getLatestRecipes = (recipeData) => {
    return recipeData
      .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
      .slice(0, 4);
  };

  const latestRecipes = getLatestRecipes(recipes);

  function getLatestRecipesWithCategoruname(recipes, categories) {
    return recipes.map((recipe) => {
      const category = categories.find((cat) => cat.id === recipe.category_id);
      return {
        ...recipe,
        category_name: category ? category.name : null, // Add category name or null if not found
      };
    });
  }

  const latestRecipesWithCategoryname = getLatestRecipesWithCategoruname(
    latestRecipes,
    categories
  );

  return (
    <section id='latest-recipes' className='mb-16'>
      <h2 className='text-3xl font-bold mb-8'>Latest Recipes</h2>
      <div className='grid md:grid-cols-4 gap-8'>
        {latestRecipesWithCategoryname?.map((recipe, index) => (
          <div key={index}>
            <div className='cursor-pointer'>
              <Link href={`/category/${recipe.category_id}/${recipe.title}`}>
                <Image
                  src={getImageSrc(recipe.thumbnail)} // Reference from the `public` directory
                  alt={recipe.title}
                  width={300}
                  height={300}
                  className='w-full h-[300px] object-cover rounded-lg mb-4'
                />
              </Link>
              <h3 className='text-lg font-semibold mb-2'>{recipe.title}</h3>
              <p className='text-gray-600'>{recipe.category_name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestRecipes;
