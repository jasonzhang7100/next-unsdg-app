import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a data-cy="nav-link-about">About</a>
      </Link>
    </nav>
  );
};

export default Nav;
