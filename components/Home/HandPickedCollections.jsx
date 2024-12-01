import Image from 'next/image';
import Link from 'next/link';
import recipes from '@/data/recipes.json';

function HandPickedCollections() {
  function getRandomObjects(array, count = 2) {
    const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, Math.min(count, array.length)); // Ensure count doesn't exceed the array length
  }

  // Get two random objects (ensure recipeData has enough elements)
  const randomObjects = getRandomObjects(recipes);

  return (
    <section id='handpick' className='mb-16'>
      <h2 className='text-3xl font-bold mb-8 animate-fade-in-down'>
        Hand-Picked Collections
      </h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {randomObjects.map((recipe, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer'
          >
            <Link href={`/category/${recipe.category_id}/${recipe.title}`}>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                width={600}
                height={400}
                className='w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110'
              />
            </Link>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0'>
              <h3 className='text-xl font-semibold mb-2'>{recipe.title}</h3>
              <Link
                href={`/category/${recipe.category_id}/${recipe.title}`}
                className='text-orange-300 hover:underline'
              >
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HandPickedCollections;
