import Image from 'next/image';
import Link from 'next/link';
import categories from '@/data/categories.json';
import recipes from '@/data/recipes.json';

export default function HeroSection() {
  function getRandomObject(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Get a random recipe
  const randomRecipe = getRandomObject(recipes);

  return (
    <section className='mb-16 	 bg-orange-50'>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <Image
            src={`/thumbs/${randomRecipe.thumbnail}`} // Reference from the `public` directory
            alt='Mighty Super Cheesecake'
            width={735}
            height={450}
            className='w-full h-[450px] object-cover rounded-lg'
          />
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-4'>{randomRecipe.title}</h1>
          <p className='text-gray-600 mb-4'>{randomRecipe.description}</p>

          <Link
            href={`/category/${randomRecipe.category_id}/${randomRecipe.title}`}
            className='bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600'
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
