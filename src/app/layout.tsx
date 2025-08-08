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
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Cosmik",
  description: "Tools and networks for collective sensemaking",
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
        <Analytics />
      </body>
    </html>
  );
}
