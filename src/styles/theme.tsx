"use client";

import { ActionIcon, Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "gray",
  fontFamily:
    "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "IBM Plex Mono, Monaco, Courier, monospace",
  defaultRadius: "md",
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
  },
});
