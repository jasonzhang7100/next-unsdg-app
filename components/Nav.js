import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="fixed flex items-center justify-end w-screen min-w-360 bg-blue-500 bg-top h-12 text-white">
      <Link href="/">
        <a className="mr-4">Home</a>
      </Link>
      <Link href="/about">
        <a data-cy="nav-link-about" className="mr-8">
          About Us
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
