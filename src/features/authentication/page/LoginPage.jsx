import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Now</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
