import Image from 'next/image';
import Link from 'next/link';

function PopularCategoriesSection({ categories, recipeData }) {
  function countRecipesPerCategory(recipes, categories) {
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

  const data = countRecipesPerCategory(recipeData, categories);
  const firstSixData = data.slice(0, 6);

  return (
    <section className='mb-16'>
      <div className='flex justify-between items-top'>
        <h2 className='text-3xl font-bold mb-8'>Popular Categories</h2>
        <Link href='./category' className='text-orange-500'>
          View All
        </Link>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
        {firstSixData?.map((item, index) => (
          <Link
            href={`/category/${item.id}`}
            key={index}
            className='cursor-pointer text-center group'
          >
            <div className='overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto'>
              <Image
                src={item.image} // Assuming `item.image` holds the URL
                alt={item.name} // You can use the key as the alt text or customize it
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                width={80}
                height={80}
              />
            </div>
            <p className='transition-transform duration-300 group-hover:scale-105'>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularCategoriesSection;
