import Image from 'next/image';
import Link from 'next/link';

function LatestRecipes({ recipeData }) {
  // Function to get the latest 4 recipes
  const getLatestRecipes = (recipeData) => {
    return recipeData
      .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
      .slice(0, 4);
  };

  // Fetch the latest recipes
  const latestRecipes = getLatestRecipes(recipeData);

  return (
    <section id='latest-recipes' className='mb-16'>
      <h2 className='text-3xl font-bold mb-8'>Latest Recipes</h2>
      <div className='grid md:grid-cols-4 gap-8'>
        {latestRecipes?.map((recipe, index) => (
          <Link
            href={`/category/${recipe.category_id}/${recipe.title}`}
            key={index}
          >
            <div className='cursor-pointer'>
              <Image
                src={`/thumbs/${recipe.thumbnail}`} // Reference from the `public` directory
                alt={recipe.title}
                width={300}
                height={300}
                className='w-full h-[300px] object-cover rounded-lg mb-4'
              />
              <h3 className='text-lg font-semibold mb-2'>{recipe.title}</h3>
              <p className='text-gray-600'>{recipe.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LatestRecipes;
