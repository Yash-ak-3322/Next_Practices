import Link from "next/link";
import Navbar from "../components/navbar";

function Pre_rendering() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start">
        Server Side Rendering :-)
      </div>
      <div className="p-5 text-blue-700">
        <Link href="preRenderingSSR/employees"> Employees Data using SSR </Link>
      </div>
    </>
  );
}

export default Pre_rendering;
