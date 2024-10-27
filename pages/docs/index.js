const { default: Navbar } = require("../components/navbar");

function Docs() {
  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Docs Page :)
      </header>
    </>
  );
}

export default Docs;
