const { default: Navbar } = require("@/pages/components/navbar");
const { useRouter } = require("next/router");

function Review() {
  const router = useRouter();

  const productID = router.query.productID;

  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Product (#{productID}) Review Page :)
      </header>
    </>
  );
}

export default Review;
