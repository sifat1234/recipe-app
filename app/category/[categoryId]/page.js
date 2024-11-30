import SingleCategoryRecipeDisplay from '@/components/SingleCategoryRecipeDisplay';
const SingleCaetogyPage = ({ params: { categoryId } }) => {
  return (
    <>
      <SingleCategoryRecipeDisplay id={categoryId} />
    </>
  );
};

export default SingleCaetogyPage;
