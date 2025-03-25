import { useCallback } from "react";
import { useAppDispatch } from "../store/store";
import { loginFailure, loginStart, loginSuccess } from "../store/slices/authSlice";
import { simulateLogin } from "../services/authService";

export const useLogin = (): {
  login: (email: string, password: string) => Promise<void>;
} => {
  const dispatch = useAppDispatch();

  const login = useCallback(
    async (email: string, password: string): Promise<void> => {
      dispatch(loginStart());
      try {
        const user = await simulateLogin(email, password);
        dispatch(loginSuccess(user));
      } catch (err: unknown) {
        if (err instanceof Error) {
          dispatch(loginFailure(err.message));
        } else {
          dispatch(loginFailure("Unknown error"));
        }
      }
    },
    [dispatch]
  );

  return { login };
};
