import Image from 'next/image';

import GoalLIst from '../components/GoalLIst';
import bgImg from '../public/background.jpeg';

export default function Home({ goals }) {
  return (
    <>
      <Image
        src={bgImg}
        alt="bg"
        layout="responsive"
        className="min-w-360 -z-10"
      />
      <h1 className="w-2/5 mt-16 ml-6 lg:ml-10 text-gray-200 font-extralight text-3xl md:text-7xl xl:text-8xl">
        17 GOALS TO TRANSFORM OUR WORLD
      </h1>
      <GoalLIst goals={goals} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false',
  );
  const goals = await res.json();
  return {
    props: {
      goals,
    },
  };
};
