import authReducer, {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    updateUserInfo,
  } from "../authSlice";
  
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
    data: {},
    status: "idle",
    userInfo: {
      email: "",
      name: "",
      id: null,
      role: "",
    },
  };
  
  describe("authSlice", () => {
    it("should handle loginStart", () => {
      const state = authReducer(initialState, loginStart());
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
      expect(state.status).toBe("loading");
      expect(state.data).toEqual({});
    });
  
    it("should handle loginSuccess", () => {
      const payload = {
        email: "test@test.test",
        name: "test",
        id: 1,
        role: "user",
      };
      const state = authReducer(initialState, loginSuccess(payload));
      expect(state.isAuthenticated).toBe(true);
      expect(state.user).toEqual(payload);
      expect(state.loading).toBe(false);
      expect(state.error).toBeNull();
      expect(state.status).toBe("succeeded");
      expect(state.userInfo).toMatchObject({
        email: "test@test.test",
        name: "test",
        id: 1,
        role: "user",
      });
    });
  
    it("should handle loginFailure", () => {
      const errorMessage = "User not found";
      const state = authReducer(initialState, loginFailure(errorMessage));
      expect(state.loading).toBe(false);
      expect(state.error).toBe(errorMessage);
      expect(state.status).toBe("failed");
      expect(state.data).toEqual({});
      expect(state.user).toBeNull();
    });
  
    it("should handle logout", () => {
      const loggedState = {
        ...initialState,
        isAuthenticated: true,
        user: { email: "test@test.test", name: "test", id: 1, role: "user" },
        loading: false,
        status: "succeeded",
        userInfo: { email: "test@test.test", name: "test", id: 1, role: "user" },
      };
      const state = authReducer(loggedState, logout());
      expect(state).toEqual(initialState);
    });
  
    it("should handle updateUserInfo", () => {
      const stateBefore = {
        ...initialState,
        userInfo: { email: "old@test.test", name: "old", id: null, role: "" },
      };
      const payload = { email: "new@test.test", name: "new" };
      const state = authReducer(stateBefore, updateUserInfo(payload));
      expect(state.userInfo.email).toBe("new@test.test");
      expect(state.userInfo.name).toBe("new");
      expect(state.userInfo.id).toBeNull();
      expect(state.userInfo.role).toBe("");
    });
  });
  