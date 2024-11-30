import SingleRecipeDisplay from '@/components/SingleRecipeDisplay';
import YouMightAlsoLike from '@/components/YouMightAlsoLike';
const SingleRecipePage = ({ params: { recipeName } }) => {
  return (
    <main className='container mx-auto px-4 py-8'>
      <SingleRecipeDisplay recipeName={recipeName} />
      <YouMightAlsoLike recipeName={recipeName} />
    </main>
  );
};

export default SingleRecipePage;
