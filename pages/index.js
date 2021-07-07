export default function Home({ goals }) {
  return (
    <div>
      <h1>hello next</h1>
      {goals.map((goal) => (
        <h2 key={goal.code}>{goal.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false',
  );
  const goals = await res.json();
  console.log(goals);
  return {
    props: {
      goals,
    },
  };
};
