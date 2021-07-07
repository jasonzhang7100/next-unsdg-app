import GoalItem from './GoalItem';

const GoalLIst = ({ goals }) => {
  return (
    <>
      {goals.map((goal) => (
        <GoalItem key={goal.code} goal={goal} />
      ))}
    </>
  );
};

export default GoalLIst;
