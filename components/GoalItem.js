import Link from 'next/link';

const GoalItem = ({ goal }) => {
  return (
    <Link href="/goal/[code]" as={`/goal/${goal.code}`}>
      <a className="p-4 rounded-lg bg-blue-400 text-white">
        <h2 className="text-sm lg:text-lg xl:text-xl">{goal.title}</h2>
      </a>
    </Link>
  );
};

export default GoalItem;
