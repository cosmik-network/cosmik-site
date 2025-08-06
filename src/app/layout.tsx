import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import AppLayout from "@/components/navigation/appLayout/AppLayout";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Cosmik",
  description:
    "Cosmik builds tools that help you understand and organize research discussions across social media, powered by collective intelligence and semantic AI.",
};

const archivo = Archivo({
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.className} ${ibmPlexSans.className}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
        <script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
