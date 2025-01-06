import Label from '../../../components/ui/Label';
import InputField from '../../../components/ui/InputField';
import Button from '../../../components/ui/Button';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login ,googleLogin} = useAuth();
    const { control, handleSubmit, reset,formState:{errors}} = useForm();

    const onSubmit = (data) => {
        login({ email: data.email, password: data.password, navigate });
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email:
                    </Label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{required:'Please provide a valid email.'}}
                        render={({ field }) => (
                            <InputField
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                {...field}
                            />
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.email?errors.email.message:''}</p>
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password:
                    </Label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{required:'Please provide a valid password.'}}
                        render={({ field }) => (
                            <InputField
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                {...field}
                            />
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.password?errors.password.message:''}</p>
                </div>
                <Button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-0 px-4 rounded-md hover:bg-sky-600 transition-colors"
                >
                    Log In
                </Button>
            </form>
                <button onClick={()=>googleLogin({navigate})} type='button' className="w-full bg-rose-900 text-white my-4 py-0 px-4 rounded-md hover:bg-rose-600 transition-colors">Continue with google</button>
        </div>
    );
};

export default LoginForm;
