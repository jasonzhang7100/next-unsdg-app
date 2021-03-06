import GoalItem from './GoalItem';

const GoalLIst = ({ goals }) => {
  return (
    <div
      data-cy="goal-list"
      className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mx-4 mt-6 md:mt-12 lg:mt-24 xl:mt-96"
    >
      {goals.map((goal) => (
        <GoalItem key={goal.code} goal={goal} />
      ))}
    </div>
  );
};

export default GoalLIst;
