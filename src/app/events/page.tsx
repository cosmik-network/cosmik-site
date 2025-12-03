import { Container, Stack, Title, Text } from "@mantine/core";
import Events from "@/app/content/home/events.mdx";

export default function Page() {
  return (
    <Container size={"sm"}>
      <Stack gap={"lg"} align="center">
        <Stack gap={0} align="center" ta={"center"}>
          <Title order={1} fz={"3rem"}>
            Events
          </Title>
        </Stack>

        <Events />
      </Stack>
    </Container>
  );
}
