"use client";

import { createContext, ReactNode, useState } from "react";

export type NotificationStatus = "success" | "error" | "warning" | null;

type NotificationContextType = {
  status: NotificationStatus;
  title: string;
  message?: string;
  action: {
    openNotification: (status: NotificationStatus, message: string) => void;
    clearNotification: () => void;
  };
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<NotificationStatus | null>(null);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string | undefined>("");

  const openNotification = (
    status: NotificationStatus,
    title: string,
    message?: string
  ) => {
    setStatus(status);
    setTitle(title);
    setMessage(message);
  };

  const clearNotification = () => {
    setStatus(null);
    setTitle("");
    setMessage("");
  };
  return (
    <NotificationContext.Provider
      value={{
        status,
        title,
        message,
        action: {
          openNotification,
          clearNotification,
        },
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
