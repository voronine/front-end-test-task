/// <reference types="@testing-library/jest-dom" />
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

describe("LoginForm", () => {
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  test("renders email and password inputs and submit button", () => {
    render(
      <LoginForm onSubmit={onSubmitMock} error={null} loading={false} />
    );

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });

  test("calls onSubmit with correct values", async () => {
    render(
      <LoginForm onSubmit={onSubmitMock} error={null} loading={false} />
    );

    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    await userEvent.type(emailInput, "test@test.test");
    await userEvent.type(passwordInput, "password");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "test@test.test",
          password: "password",
        }),
        expect.any(Object)
      );
    });
  });

  test("displays error message if error prop is provided", () => {
    const errorMessage = "User not found";
    render(
      <LoginForm onSubmit={onSubmitMock} error={errorMessage} loading={false} />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test("disables submit button when loading", () => {
    render(
      <LoginForm onSubmit={onSubmitMock} error={null} loading={true} />
    );

    const submitButton = screen.getByRole("button", { name: /sign in/i });
    expect(submitButton).toBeDisabled();
  });
});
