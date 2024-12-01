import Link from 'next/link';
import Image from 'next/image';
import categories from '@/data/categories.json';
import recipes from '@/data/recipes.json';

export default function YouMightAlsoLike({ recipeName }) {
  const decodedParam = decodeURIComponent(recipeName);

  //get the category id of the recipe
  const findRecipeCategoryId = recipes.find(
    (recipe) => recipe.title.toLowerCase() === decodedParam.toLowerCase()
  ).category_id;

  //get all recipes according to category id and sorted by average rating
  const findRecipes = recipes
    .filter((recipe) => recipe.category_id === findRecipeCategoryId)
    .sort((a, b) => b.rating.average_rating - a.rating.average_rating);

  //dont include me in top 4
  const filteredRecipes = findRecipes.filter(
    (recipe) => recipe.title.toLowerCase() !== decodedParam.toLowerCase()
  );
  const topFour = filteredRecipes.slice(0, 4);

  return (
    <section className='my-12'>
      <h2 className='text-3xl font-bold mb-8'>You might also like</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {topFour?.map((recipe, index) => (
          <div key={index} className='relative'>
            <Link href={`/category/${findRecipeCategoryId}/${recipe.title}`}>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                width={300}
                height={240}
                className='w-full h-60 object-cover rounded-lg mb-2'
              />
            </Link>
            <h3 className='font-semibold'>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
