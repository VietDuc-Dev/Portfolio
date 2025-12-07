import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSignIn } from "@clerk/nextjs";
import SignInForm from "@/components/common/forms/authForms/SignInForm";

jest.mock("@clerk/nextjs");

describe("SignInForm", () => {
  const mockAttempt = jest.fn();

  beforeEach(() => {
    (useSignIn as jest.Mock).mockReturnValue({
      isLoaded: true,
      signIn: {
        attemptFirstFactor: mockAttempt,
      },
    });
  });

  it("renders inputs & button", () => {
    render(<SignInForm />);

    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("login-btn")).toBeInTheDocument();
  });

  it("login success -> redirect", async () => {
    mockAttempt.mockResolvedValueOnce({ status: "complete" });

    render(<SignInForm />);

    await userEvent.type(
      screen.getByTestId("email-input"),
      "levietduc4566@gmail.com"
    );
    await userEvent.type(screen.getByTestId("password-input"), "Levietduc@1");
    await userEvent.click(screen.getByTestId("login-btn"));

    expect(mockAttempt).toHaveBeenCalledWith({
      strategy: "password",
      identifier: "levietduc4566@gmail.com",
      password: "Levietduc@1",
    });
  });

  it("login fail -> show error", async () => {
    mockAttempt.mockRejectedValueOnce({
      errors: [{ message: "Invalid login" }],
    });

    render(<SignInForm />);

    await userEvent.type(screen.getByTestId("email-input"), "fail@test.com");
    await userEvent.type(screen.getByTestId("password-input"), "123");
    await userEvent.click(screen.getByTestId("login-btn"));

    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Invalid login"
    );
  });
});
