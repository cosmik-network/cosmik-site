import { BackgroundImage } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision",
  description: "Tools and networks for collective sensemaking",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <BackgroundImage
        src={"/images/vision-bg.webp"}
        pos={"fixed"}     
        opacity={0.7}   
        inset={0}
        style={{ zIndex: -1 }}
      />
      {children}
    </>
  );
}
