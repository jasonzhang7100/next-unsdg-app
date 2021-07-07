import Image from 'next/image';

import GoalLIst from '../components/GoalLIst';
import bgImg from '../public/background.jpeg';

export default function Home({ goals }) {
  return (
    <>
      <div className="relevant min-w-360 -z-10">
        <Image src={bgImg} alt="bg" />
      </div>
      <h1 className="w-2/5 mt-16 ml-6 text-gray-200 font-extralight text-3xl">
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
