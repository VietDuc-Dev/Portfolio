import { logger } from "../logger";

const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  if (!response.ok) {
    logger.error({
      message: response.statusText,
      error: response.statusText,
    });

    return null;
  }

  return await response.json();
};

const AuthAPI = { signUp };

export default AuthAPI;
