import { Container, Stack, Title } from "@mantine/core";
import Hyperfeed from "@/app/content/hyperfeed/hyperfeed.mdx";

export default function Page() {
  return (
    <Container size={"sm"}>      
      <Stack gap={"lg"}>
        <Title order={1} fz={"3rem"}>
          Hyperfeed: an AI-enhanced, cross platform research feed
        </Title>
        <Hyperfeed />
      </Stack>
    </Container>
  );
}
