const { default: Navbar } = require("../components/navbar");

function Products() {
  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Products Page :)
      </header>
    </>
  );
}

export default Products;
