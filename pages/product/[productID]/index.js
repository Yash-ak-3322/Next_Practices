import Navbar from "@/pages/components/navbar";
const { useRouter } = require("next/router");

function ProductDetails() {
  const router = useRouter();

  console.log("Router :-)" + JSON.stringify(router, null, 2));
  console.log("Router query :-)" + JSON.stringify(router.query, null, 2));

  const productID = router.query.productID;

  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Product (#{productID}) Deatils Page :)
      </header>
    </>
  );
}

export default ProductDetails;
