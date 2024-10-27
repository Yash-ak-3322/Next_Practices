const { default: Navbar } = require("@/pages/components/navbar");
const { useRouter } = require("next/router");

function Comments() {
  const router = useRouter();
  const { productID, reviewID } = router.query;
  //   const reviewID = router.query.reviewID;

  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Product (#{productID}) Review (#{reviewID}) Comments Page :)
      </header>
    </>
  );
}

export default Comments;
