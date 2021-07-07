const GoalDetail = ({ goal }) => {
  return (
    <>
      <h1 className="mt-4 text-xl text-center">
        Unstyled Details of the Specific Goal
      </h1>
      {goal[0].targets.map((target) => (
        <div key={target.code} className="p-4">
          {JSON.stringify(target, null, '\t')}
        </div>
      ))}
    </>
  );
};

export default GoalDetail;
