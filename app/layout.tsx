import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Landsteiner",
  description: "Laboratorio Clinico IPS S.A.S.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
