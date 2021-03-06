import GoalDetail from '../../components/GoalDetail';

const goal = ({ goal }) => {
  return <GoalDetail goal={goal} />;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false',
  );
  const goals = await res.json();
  const paths = goals
    .map((goal) => goal.code)
    .map((code) => ({
      params: {
        code,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  const res = await fetch(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${code}/Target/List?includechildren=true`,
  );
  const goal = await res.json();

  return {
    props: {
      goal,
    },
  };
};

export default goal;
