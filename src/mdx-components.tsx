import { Title, Text, List, ListItem } from "@mantine/core";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <Title fz={"3rem"}>{children}</Title>,
  h2: ({ children }) => (
    <Title order={2} fw={500} maw={400}>
      {children}
    </Title>
  ),
  h3: ({ children }) => <Title order={3} fw={600}>{children}</Title>,
  p: ({ children }) => <Text fw={500}>{children}</Text>,
  ul: ({ children }) => (
    <List maw={"96%"} type="unordered">
      {children}
    </List>
  ),
  ol: ({ children }) => (
    <List maw={"96%"} type="ordered">
      {children}
    </List>
  ),
  li: ({ children }) => <ListItem fw={500}>{children}</ListItem>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
