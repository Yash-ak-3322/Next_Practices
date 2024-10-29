const { default: Navbar } = require("@/pages/components/navbar");

function employee({ employee }) {
  return (
    <>
      {" "}
      <Navbar />
      <div className="p-5">
        <div className="p-2 text-2xl text-blue-800 border border-green-400 rounded-xl">
          {employee.id}. {employee.first_name} {employee.last_name}
        </div>
        <hr />
        <div className="p-3">
          {" "}
          Employee Info -) <br />
          email : {employee.email} <br />
          IP : {employee.ip_address} <br />
        </div>
      </div>
    </>
  );
}

export default employee;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/Employees/${params.employeeID}`
  );
  const data = await response.json();

  return { props: { employee: data } };
}
