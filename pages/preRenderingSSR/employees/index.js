import Link from "next/link";
import { useRouter } from "next/router";

const { default: Navbar } = require("@/pages/components/navbar");

function Employees({ employees }) {
  const router = useRouter();
  const employeeID = router.query.employeeID;
  return (
    <>
      <Navbar />
      <div className="px-2">
        {employees.map((employee) => {
          return (
            <div className="p-3 m-5 border border-blue-800">
              <Link href={`employees/${employee.id}`}>
                <div className="p-2 text-2xl text-blue-800 border border-green-400 rounded-xl">
                  {employee.id}. {employee.first_name} {employee.last_name}
                </div>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/Employees");

  const data = await response.json();
  console.log("data :" + data);

  return {
    props: { employees: data },
  };
}

export default Employees;
