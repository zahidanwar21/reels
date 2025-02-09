// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// type NotificationType = "success" | "error" | "warning" | "info";

// interface NotificationContextType {
//   showNotification: (message: string, type: NotificationType) => void;
// }

// const NotificationContext = createContext<NotificationContextType | undefined>(
//   undefined
// );

// export function NotificationProvider({ children }: { children: ReactNode }) {
//   const [notification, setNotification] = useState<{
//     message: string;
//     type: NotificationType;
//     id: number;
//   } | null>(null);

//   const showNotification = (message: string, type: NotificationType) => {
//     const id = Date.now();
//     setNotification({ message, type, id });
//     setTimeout(() => {
//       setNotification((current) => (current?.id === id ? null : current));
//     }, 3000);
//   };

//   return (
//     <NotificationContext.Provider value={{ showNotification }}>
//       {children}
//       {notification && (
//         <div className="toast toast-bottom toast-end z-[100]">
//           <div className={`alert ${getAlertClass(notification.type)}`}>
//             <span>{notification.message}</span>
//           </div>
//         </div>
//       )}
//     </NotificationContext.Provider>
//   );
// }

// function getAlertClass(type: NotificationType): string {
//   switch (type) {
//     case "success":
//       return "alert-success";
//     case "error":
//       return "alert-error";
//     case "warning":
//       return "alert-warning";
//     case "info":
//       return "alert-info";
//     default:
//       return "alert-info";
//   }
// }

// export function useNotification() {
//   const context = useContext(NotificationContext);
//   if (context === undefined) {
//     throw new Error(
//       "useNotification must be used within a NotificationProvider"
//     );
//   }
//   return context;
// }

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationContextType {
  showNotification: (message: string, type: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationType;
    id: number;
  } | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    const id = Date.now();
    setNotification({ message, type, id });
    setTimeout(() => {
      setNotification((current) => (current?.id === id ? null : current));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50">
          <div
            className={`p-4 rounded-lg shadow-lg text-white backdrop-blur-md transition duration-300 ${getNotificationClasses(
              notification.type
            )}`}
          >
            {notification.message}
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}

function getNotificationClasses(type: NotificationType): string {
  switch (type) {
    case "success":
      return "bg-green-600";
    case "error":
      return "bg-red-600";
    case "warning":
      return "bg-yellow-600";
    case "info":
      return "bg-blue-600";
    default:
      return "bg-blue-600";
  }
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
}
