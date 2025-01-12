import { Controller, useForm } from "react-hook-form";
import Label from "../../../components/ui/Label";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../hooks/useAuth";

const AddUserForm = () => {
    const {register}=useAuth()
    const {control,handleSubmit,formState:{errors},reset}=useForm()
    const onSubmit=(data)=>{
        register({formData:data})
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name:
                    </Label>
                    <Controller
                        name="firstname"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Firstname is required" }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="text"
                                placeholder="First name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                    {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name:
                    </Label>
                    <Controller
                        name="lastname"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Lastname is required" }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="text"
                                placeholder="Last name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                    {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Email:
                    </Label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Email is required" }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Password:
                    </Label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                <div>
        <Label>Role: </Label>
        <Controller
          name="role"
          control={control}
          defaultValue="employee"
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          )}
        />
        {errors.assignedTo && <p className="text-red-500 text-sm">{errors.assignedTo.message}</p>}
      </div>
                <Button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-0 px-4 rounded-md hover:bg-sky-600 transition-colors"
                >
                    Register
                </Button>
            </form>
        </div>
    );
};

export default AddUserForm;