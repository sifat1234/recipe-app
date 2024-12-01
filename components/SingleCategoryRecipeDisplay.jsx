import Image from 'next/image';
import Link from 'next/link';
import categories from '@/data/categories.json';
import recipes from '@/data/recipes.json';
import { getImageSrc } from '@/util/imageUtils.js';

export default function SingleCategoryRecipeDisplay({ id }) {
  // Filter recipes based on category id
  const filterRecipes = recipes.filter((recipe) => recipe.category_id === id);

  // Filter category name based on the provided id
  const filtercategoryname = categories.find((category) => category.id === id);

  return (
    <main className='container mx-auto px-4 py-8 mt-0'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-4xl font-bold mb-2'>
            {filtercategoryname.name}{' '}
            <span className='text-gray-500 text-2xl font-normal'>
              ({filterRecipes.length} Recipes)
            </span>
          </h1>
          <p className='text-gray-600'>
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Loop through filterRecipes to display each recipe */}
        {filterRecipes.map((recipe, index) => (
          <div
            key={index}
            href={`/category/${recipe.category_id}/${recipe.title}`} // Link to the recipe page
            className='bg-white rounded-lg overflow-hidden shadow-md' // Apply styles directly to Link
          >
            {/* Use next/image for optimized image rendering */}
            <Link href={`/category/${recipe.category_id}/${recipe.title}`}>
              <Image
                src={getImageSrc(recipe.thumbnail)} // Reference from the `public` directory
                alt={recipe.title}
                width={1170}
                height={1180}
                className='w-full h-48 object-cover'
              />
            </Link>
            <div className='p-4'>
              <h2 className='font-semibold text-lg mb-2'>{recipe.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
