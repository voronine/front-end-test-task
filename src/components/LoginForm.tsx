import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../validation/loginValidation";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  error: string | null;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = React.memo(
  ({ onSubmit, error, loading }) => {
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
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
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
                <p className="text-red-500 text-xs">{error}</p>
              )}
              {loading && (
                <div className="animate-spin h-5 w-5 text-blue-500" />
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || loading}
              className="
                w-full py-3 px-4 
                rounded-lg border 
                bg-blue-600 text-white 
                hover:bg-blue-700 
                disabled:opacity-50 disabled:pointer-events-none
                transition duration-300
              "
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    );
  }
);

export default LoginForm;
