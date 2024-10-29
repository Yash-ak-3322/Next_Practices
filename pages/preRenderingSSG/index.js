import Link from "next/link";
import Navbar from "../components/navbar";

function Pre_rendering() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start">
        Static Generation :-)
      </div>
      <div className="p-5 text-blue-700">
        <Link href="preRenderingSSG/users">
          {" "}
          Users with Data Fetching using Static Gerenration{" "}
        </Link>
      </div>
      <div className="p-5 text-blue-700">
        <Link href="preRenderingSSG/posts">
          {" "}
          Post feteching using Dynamic Parameter in SSG
        </Link>
      </div>
    </>
  );
}

export default Pre_rendering;
