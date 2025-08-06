import { Title, Text, List, ListItem } from "@mantine/core";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <Title fz={"3rem"}>{children}</Title>,
  h2: ({ children }) => (
    <Title order={2} fw={500} maw={400}>
      {children}
    </Title>
  ),
  p: ({ children }) => <Text>{children}</Text>,
  ul: ({ children }) => <List type="unordered">{children}</List>,
  ol: ({ children }) => <List type="unordered">{children}</List>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
