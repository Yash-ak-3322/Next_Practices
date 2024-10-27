const { default: Navbar } = require("../components/navbar");

function FirstBlog() {
  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        First Blog Page :)
      </header>
    </>
  );
}

export default FirstBlog;
