import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Register Now</h1>
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
