import GoalLIst from '../components/GoalLIst';

export default function Home({ goals }) {
  return (
    <div>
      <h1>hello next</h1>
      <GoalLIst goals={goals} />
    </div>
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
