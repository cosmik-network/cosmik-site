"use client";

import { ActionIcon, Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "gray",
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
