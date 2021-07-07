const Layout = ({ children }) => {
  return (
    <div>
      <main className="mx-auto max-w-screen-2xl min-w-360 pt-12 pb-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
