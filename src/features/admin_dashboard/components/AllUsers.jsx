import { useAuth } from "../../../hooks/useAuth";
import UserTable from "./UserTable";

const AllUsers = () => {
    return (
        <div>
            <h1 className="font-bold text-center"> 
                Users   
            </h1>
            <UserTable></UserTable>
        </div>
    );
};

export default AllUsers;