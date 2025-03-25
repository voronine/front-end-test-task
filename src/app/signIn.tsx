import React, { FC, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../store/store";
import { useLogin } from "../hooks/useLogin";
import LoginForm from "../components/LoginForm";

const SignInPage: FC = React.memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useAppSelector(
    (state) => state.auth
  );
  const { login } = useLogin();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      await login(values.email, values.password);
    },
    [login]
  );

  return (
    <div className="min-h-screen w-full dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 transition-opacity duration-300">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
            Sign In
          </h1>

          <LoginForm
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
});

export default SignInPage;
