const { useRouter } = require("next/router");
const { default: Navbar } = require("../components/navbar");

function DocsParam() {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(params); // Array of Params

  let p1, p2, p3;

  if (Array.isArray(params)) {
    if (params.length === 1) {
      p1 = params[0];
    } else if (params.length === 2) {
      p1 = params[0];
      p2 = params[1];
    } else if (params.length === 3) {
      p1 = params[0];
      p2 = params[1];
      p3 = params[2];
    } else {
      p1 = params.join(" - ");
    }
  }

  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Docs Page :) {p1 || " "} {p2 || " "} {p3 || " "}
      </header>
    </>
  );
}

export default DocsParam;
