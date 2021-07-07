import Image from 'next/image';

import GoalLIst from '../components/GoalLIst';
import bgImg from '../public/background.jpeg';

export default function Home({ goals }) {
  return (
    <>
      <div className="absolute min-w-360 -z-10">
        <Image src={bgImg} alt="bg" />
      </div>
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
