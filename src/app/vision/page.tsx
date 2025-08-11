import { Container, Stack, Title } from "@mantine/core";
import Vision from "@/app/content/vision/vision.mdx";

export default function Page() {
  return (
    <Container size={"sm"}>
      <Stack gap={"lg"}>
        <Title order={1} fz={"3rem"}>
          Vision
        </Title>
        <Vision />
      </Stack>
    </Container>
  );
}
