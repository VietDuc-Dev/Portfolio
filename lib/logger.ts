export const logger = {
  error: ({ message, error }: { message: string; error?: unknown }) => {
    console.error(message);
    if (error) {
      console.error(error);
    }
    // Add more datadogs to track issue if need
  },
  info: ({ message, info }: { message: string; info?: unknown }) => {
    console.info(message, info);
  },
};
