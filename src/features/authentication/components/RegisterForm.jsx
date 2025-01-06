import Label from '../../../components/ui/Label';
import InputField from '../../../components/ui/InputField';
import Button from '../../../components/ui/Button';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        register({ formData: data, navigate });
    };

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
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="text"
                                placeholder="First name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name:
                    </Label>
                    <Controller
                        name="lastname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="text"
                                placeholder="Last name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Email:
                    </Label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        Password:
                    </Label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        )}
                    />
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

export default RegisterForm;
