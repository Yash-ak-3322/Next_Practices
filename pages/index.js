import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="flex justify-center text-blue-900 text-2xl font-thin p-2">
        Home Page :)
      </header>
      <div className="text-red-600 flex border-spacing-3 p-3 mx-2 justify-center font-mono">
        <Link
          href="/profile"
          className="mx-2 transition-transform transform hover:text-green-400"
        >
          {" "}
          Profile{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="/about"
          className="mx-2 transition-transform transform hover:text-green-400"
        >
          {" "}
          About{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="/blog"
          className="mx-2 transition-transform transform hover:text-green-400"
        >
          {" "}
          Blogs{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="/product"
          className="mx-2 transition-transform transform hover:text-green-400"
        >
          {" "}
          Products{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="/docs"
          className="mx-2 transition-transform transform hover:text-green-400"
        >
          {" "}
          Docs{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="/preRenderingSSG"
          className="mx-2 transition-transform transform text-blue-900 hover:text-orange-600"
        >
          {" "}
          Pre-rendering SSG Concepts{" "}
        </Link>
        |{" "}
        <Link
          href="/preRenderingSSR"
          className="mx-2 transition-transform transform text-blue-900 hover:text-orange-600"
        >
          {" "}
          Pre-rendering SSR Concepts{" "}
        </Link>
      </div>
    </>
  );
}
