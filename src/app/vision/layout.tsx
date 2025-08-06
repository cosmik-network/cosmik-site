import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision",
  description: "Sensemaking for researchers",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
