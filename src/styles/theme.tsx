"use client";

import { Anchor, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily:
    "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "Chivo Mono, Monaco, Courier, monospace",
  defaultRadius: "xs",
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        c: "#109EDA",
      },
    }),
  },
});
