import Navbar from "@/pages/components/navbar";
import { useRouter } from "next/router";

function Post(props) {
  const router = useRouter();
  //   console.log(props);
  const { post } = props;

  if (router.isFallback) {
    return <div className="font-mono text-3xl p-8">Loading .....:-)))) </div>;
  } else {
    return (
      <>
        <Navbar />

        <div className="p-5 font-serif text-xl border m-5 rounded-2xl border-blue-800">
          <p className="font-bold text-3xl">
            {post.id} : {post.title}
          </p>
          <br />
          <p>{post.body}</p>
        </div>
      </>
    );
  }
}

export default Post;

export async function getStaticPaths() {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  //   const data = await response.json();

  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postID: `${post.id}`,
  //       },
  //     };
  //   });

  return {
    // paths,
    paths: [
      {
        params: {
          postID: "1",
        },
      },
      {
        params: {
          postID: "2",
        },
      },
      {
        params: {
          postID: "3",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  //   console.log(params);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );

  const data = await response.json();
  //   console.log(data);

  return {
    props: { post: data },
  };
}
