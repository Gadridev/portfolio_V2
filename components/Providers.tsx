"use client";

import { Toaster } from "react-hot-toast";
import { ResumeProvider } from "@/context/ResumeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ResumeProvider>
      {children}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </ResumeProvider>
  );
}
