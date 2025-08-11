"use client";

import { ActionIcon, Anchor, Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily:
    "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "IBM Plex Mono, Monaco, Courier, monospace",
  defaultRadius: "xs",
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        c: "#00B0FB",
      },
    }),
  },
});
