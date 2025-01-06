const filterTasks=({tasks,filterValue})=>{
    const [key,value]=Object.entries(filterValue)[0]
    const filterTasks=tasks.filter((task=>task[key]===value))
    return filterTasks
}

const calculateTaskTotals = (tasks) => {
    if(!tasks) return
    return tasks.reduce(
      (totals, task) => {
        if (task.new_task) totals.newTasks++;
        if (task.completed) totals.completed++;
        if (task.failed) totals.failed++;
        if (task.status === "In Progress") totals.inProgress++;
  
        return totals;
      },
      { newTasks: 0, completed: 0, failed: 0, inProgress: 0 }
    );
  };


  

export {filterTasks,calculateTaskTotals}