"use client";

import { ActionIcon, Anchor, Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily:
    "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "IBM Plex Mono, Monaco, Courier, monospace",
  defaultRadius: "lg",
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: "#00B0FB",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
  },
});
