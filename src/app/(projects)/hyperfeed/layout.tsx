import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperfeed",
  description: "An AI-enhanced, cross platform research feed",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
