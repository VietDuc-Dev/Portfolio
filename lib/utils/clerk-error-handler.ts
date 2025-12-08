import { toast } from "sonner";

interface ClerkErrorItem {
  message: string;
}

function hasErrorsProperty(err: object): err is { errors: unknown } {
  return "errors" in err;
}

function isClerkError(err: unknown): err is { errors: ClerkErrorItem[] } {
  if (typeof err !== "object" || err === null) return false;

  if (!hasErrorsProperty(err)) return false;

  const { errors } = err;

  return (
    Array.isArray(errors) &&
    errors.length > 0 &&
    typeof errors[0] === "object" &&
    errors[0] !== null &&
    "message" in errors[0] &&
    typeof (errors[0] as { message?: unknown }).message === "string"
  );
}

function hasMessage(err: object): err is { message: string } {
  return "message" in err;
}

export const handleClerkError = (err: unknown): string => {
  let errorMessage = "Something went wrong. Please try again.";

  if (typeof err === "object" && err !== null) {
    if (isClerkError(err)) {
      errorMessage = err.errors[0].message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else if (hasMessage(err)) {
      if (typeof err.message === "string") {
        errorMessage = err.message;
      }
    }
  } else if (typeof err === "string") {
    errorMessage = err;
  }

  toast.error(errorMessage);
  console.error("Clerk Error Details:", err);

  return errorMessage;
};
