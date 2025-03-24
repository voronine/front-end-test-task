import { useAppDispatch } from "../store/store";
import { loginFailure, loginStart, loginSuccess } from "../store/slices/authSlice";
import { simulateLogin } from "../services/authService";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const login = async (email: string, password: string) => {
    dispatch(loginStart());
    try {
      const user = await simulateLogin(email, password);
      dispatch(loginSuccess(user));
    } catch (err: any) {
      dispatch(loginFailure(err.message));
    }
  };

  return { login };
};
