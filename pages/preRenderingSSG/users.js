import User from "../components/user";

const { default: Navbar } = require("../components/navbar");

function Users({ users }) {
  return (
    <>
      <Navbar />

      <div className="p-5 mx-5">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
