import { Container, Stack, Title, Image } from "@mantine/core";
import Hyperfeed from "@/app/content/hyperfeed/hyperfeed.mdx";
import HyperfeedHeaderImage from "@/assets/images/hyperfeed-header.webp";

export default function Page() {
  return (
    <Stack gap={"xl"}>
      <Image
        src={HyperfeedHeaderImage.src}
        alt={
          "Screenshot of Hyperfeed, showing the timeline, as well as a card view"
        }
        h={500}
        w={1000}
        mx={"auto"}
      />
      <Container size={"sm"}>
        <Stack gap={"lg"}>
          <Title order={1} fz={"3rem"}>
            Hyperfeed: an AI-enhanced, cross platform research feed
          </Title>
          <Hyperfeed />
        </Stack>
      </Container>
    </Stack>
  );
}
