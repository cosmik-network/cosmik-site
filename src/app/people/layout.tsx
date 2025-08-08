import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People",
  description: "Tools and networks for collective sensemaking",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
