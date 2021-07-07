import Link from 'next/link';

const GoalDetail = ({ goal }) => {
  return (
    <>
      <Link href="/">
        <a className="inline-block ml-4 mt-4 h-8 w-8 rounded-full bg-blue-500 text-white text-xl text-center">
          {'<'}
        </a>
      </Link>
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
