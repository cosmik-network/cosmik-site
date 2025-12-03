import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Events",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
