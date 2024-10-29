const { default: Navbar } = require("./navbar");
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/Dashboard");
  const data = await response.json();
  return data;
};

function clientSideDF() {
  const { data, err } = useSWR("Dashbord", fetcher);

  if (err) return "An error has occured :-( ";
  if (!data) return "Loading ";

  return (
    <>
      <Navbar />
      <div className="p-5">
        <div className="text-2xl font-serif text-violet-800">
          Dashboard Data :-)
        </div>
        <div className="p-3">
          Posts - {data.posts} <br />
          Following - {data.Following} <br />
          Followers - {data.Followers} <br />
          Likes - {data.Likes} <br />
        </div>
      </div>
    </>
  );
}

export default clientSideDF;
