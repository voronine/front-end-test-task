import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../validation/loginValidation";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  error: string | null;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, loading }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="
                py-3 px-4 
                block w-full 
                border border-gray-200 
                rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500
              "
            />
            <div className="h-5 mt-1 text-xs text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="
                py-3 px-4 
                block w-full 
                border border-gray-200 
                rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500
              "
            />
            <div className="h-5 mt-1 text-xs text-red-500">
              <ErrorMessage name="password" />
            </div>

            {error && (
              <p className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-2 text-red-500 text-xs">
                {error}
              </p>
            )}
            {loading && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-2 flex justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="
              w-full py-3 px-4 
              inline-flex justify-center items-center 
              gap-x-2 text-sm font-semibold 
              rounded-lg border border-transparent 
              bg-blue-600 text-white 
              hover:bg-blue-700 
              disabled:opacity-50 disabled:pointer-events-none
            "
          >
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
