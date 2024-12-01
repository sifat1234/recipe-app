import Image from 'next/image';
import Link from 'next/link';
import categories from '@/data/categories.json';
import recipes from '@/data/recipes.json';

function AllCategories() {
  // Function to get recipes per category
  function recipesPerCategory(recipes, categories) {
    const categoryCounts = {};

    categories.forEach((category) => {
      categoryCounts[category.id] = {
        id: category.id,
        name: category.name,
        count: 0,
        image: category.image,
      };
    });

    // Count recipes per category
    recipes.forEach((recipe) => {
      if (categoryCounts[recipe.category_id]) {
        categoryCounts[recipe.category_id].count += 1;
      }
    });

    // Convert categoryCounts object to an array and sort by count in descending order
    const sortedCategoryCounts = Object.values(categoryCounts).sort(
      (a, b) => b.count - a.count
    );

    return sortedCategoryCounts;
  }

  // Sample output
  const data = recipesPerCategory(recipes, categories);

  return (
    <main className='container mx-auto px-4 py-8 mt-0'>
      <h1 className='text-5xl font-bold mb-12'>Categories</h1>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {/* Loop through categories */}
        {data.map((category, index) => (
          <Link key={index} href={`/category/${category.id}`}>
            <div className='text-center cursor-pointer'>
              <div className='overflow-hidden rounded-full mb-4 relative'>
                <Image
                  src={category.image || '/default-category-image.jpg'} // Default image if not available
                  alt={category.name}
                  className='w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110'
                  width={400}
                  height={400}
                />
              </div>
              <h2 className='text-xl font-semibold'>{category.name}</h2>
              <p className='text-sm text-gray-500'>
                {category.count} recipes
              </p>{' '}
              {/* Display recipe count */}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default AllCategories;
