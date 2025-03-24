import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../store/store";
import { useLogin } from "../hooks/useLogin";
import LoginForm from "../components/LoginForm";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useAppSelector((state) => state.auth);
  const { login } = useLogin();

  React.useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (values: { email: string; password: string }) => {
    await login(values.email, values.password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign In
          </h1>
          <LoginForm onSubmit={handleSubmit} error={error} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
