import '../styles/output.css';
import HandPickedCollections from '@/components/Home/HandPickedCollections';
import HeroSection from '@/components/Home/HeroSection';
import LatestRecipes from '@/components/Home/LatestRecipes';

import SuperDeliciousSection from '@/components/Home/SuperDeliciousSection';
import PopularCategoriesSection from '@/components/Home/PopularCategoriesSection';

export default function Home() {
  return (
    <main className='container mx-auto mt-0  px-4 '>
      <HeroSection />
      <SuperDeliciousSection />
      <PopularCategoriesSection />
      <HandPickedCollections />
      <LatestRecipes />
    </main>
  );
}
