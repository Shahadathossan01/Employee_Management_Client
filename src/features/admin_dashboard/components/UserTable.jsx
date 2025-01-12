import { useEffect } from "react";
import { useAdminTask } from "../hooks/useAdminTask";
import TableBodyItems from "./TableBodyItems";
import TableHeaderItems from "./TableHeaderItems";
import { useAuth } from "../../../hooks/useAuth";

const UserTable = () => {
  const { getAllUsers, state } = useAdminTask();
  const {registerData}=useAuth()

  useEffect(() => {
    getAllUsers();
  }, [state.deleteUser,registerData]);

  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <TableHeaderItems />
        </thead>
        <tbody>
          {state.loading ? (
            <tr>
              <td colSpan="100%" className="text-center py-4">
                <h1>Loading...</h1>
              </td>
            </tr>
          ) : (
            state?.users.length==0?
            <tr>
              <td colSpan="100%" className="text-center py-4">
                <h1>There is no user found</h1>
              </td>
            </tr>
            :
            state?.users.map((item,index) => (
              <TableBodyItems key={item._id} item={item} index={index}></TableBodyItems>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
