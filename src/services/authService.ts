export const simulateLogin = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (email === "test@test.test" && password === "password") {
      return {
        email,
        name: email.split("@")[0],
        id: Math.random(),
        role: "user",
      };
    } else {
      throw new Error("User not found");
    }
  };
  