import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className="mx-auto max-w-screen-2xl min-w-360 pt-12 pb-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
