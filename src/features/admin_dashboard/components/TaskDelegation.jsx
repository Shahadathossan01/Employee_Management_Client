import AllTasks from "./AllTasks";
import TaskDelegateAcion from "./TaskDelegateAcion";

const TaskDelegation = () => {
    return (
        <div className="mt-10">
            <TaskDelegateAcion></TaskDelegateAcion>
            <AllTasks></AllTasks>
        </div>
    );
};

export default TaskDelegation;