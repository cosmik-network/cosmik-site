import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People",
  description:
    "Cosmik is a product-driven R&D lab working at the intersection of social networking protocols, AI and next-generation collaborative research tools.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
