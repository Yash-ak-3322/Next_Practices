import Navbar from "@/pages/components/navbar";
import Link from "next/link";

function Posts({ posts }) {
  return (
    <>
      <Navbar />
      <div className="p-5 font-semibold">
        {posts.map((post) => {
          return (
            <div key={post.key}>
              <Link href={`posts/${post.id}`}>
                <p>
                  {" "}
                  {post.id}: {post.title}{" "}
                </p>
              </Link>
              {/* <p>
                {" "}
                {post.id}: {post.title}{" "}
              </p> */}
              <hr />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log("Posts Data Fetched :-)");

  return {
    props: { posts: data }, //slice(0, 3)
  };
}
