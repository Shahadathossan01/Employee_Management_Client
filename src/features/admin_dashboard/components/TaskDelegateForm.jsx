import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../../components/ui/InputField";
import Label from "../../../components/ui/Label";
import { useAdminTask } from "../hooks/useAdminTask";
import { format } from "date-fns";

const TaskDelegateForm = ({isTask,handleAction,id}) => {
  const { state } = useAdminTask();
  const { control, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = ({title,description,publishDate,deadlineDate,assignedTo}) => {

    handleAction({title,description,publishDate:format(new Date(publishDate),"yyyy-MM-dd'T'HH:mm:ss"),deadlineDate:format(new Date(deadlineDate), "yyyy-MM-dd'T'HH:mm:ss"),assignedTo,id})
    reset()
  };

  const employee=state?.users.filter(item=>item.role=="employee")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Title: </Label>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field }) => (
            <InputField
              placeholder="Enter title"
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>
      
      <div>
        <Label>Publish Date: </Label>
        <Controller
          name="publishDate"
          control={control}
          rules={{ required: "Publish date is required" }}
          defaultValue=""
          render={({ field }) => (
            <InputField
              type="date"
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors.publishDate && <p className="text-red-500 text-sm">{errors.publishDate.message}</p>}
      </div>

      <div>
        <Label>Deadline Date: </Label>
        <Controller
          name="deadlineDate"
          control={control}
          defaultValue=""
          rules={{ required: "Deadline date is required" }}
          render={({ field }) => (
            <InputField
              type="date"
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors.deadlineDate && <p className="text-red-500 text-sm">{errors.deadlineDate.message}</p>}
      </div>

      <div>
        <Label>Assigned To: </Label>
        <Controller
          name="assignedTo"
          control={control}
          rules={{ required: "Assigned user is required" }}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select User</option>
              {employee?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item?.username?.firstname || ""} {item?.username?.lastname || ""}
                </option>
              ))}
            </select>
          )}
        />
        {errors.assignedTo && <p className="text-red-500 text-sm">{errors.assignedTo.message}</p>}
      </div>

      <div>
        <Label>Description:</Label>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Enter description"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isTask?"Update":"Confirm Delegate"}
      </button>
    </form>
  );
};

export default TaskDelegateForm;
