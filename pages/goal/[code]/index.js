import GoalDetail from '../../../components/GoalDetail';

const goal = ({ goal }) => {
  return <GoalDetail goal={goal} />;
};

export const getServerSideProps = async (context) => {
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
