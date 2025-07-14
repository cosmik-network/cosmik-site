import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import AppLayout from "@/components/appLayout/AppLayout";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Cosmik",
  description:
    "Cosmik builds tools that help you understand and organize research discussions across social media, powered by collective intelligence and semantic AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
