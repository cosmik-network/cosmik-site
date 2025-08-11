import { Container, Stack, Title, Text, Image } from "@mantine/core";
import Hyperfeed from "@/app/content/hyperfeed/hyperfeed.mdx";
import HyperfeedHeaderImage from "@/assets/images/hyperfeed-header.webp";

export default function Page() {
  return (
    <Stack gap={"xl"}>
      <Container>
        <Text fw={600} fz={"h2"} ta={"center"} c={"gray"} tt={"capitalize"}>
          Project
        </Text>
        <Title order={1} fz={"3rem"} ta={"center"}>
          Hyperfeed: an AI-enhanced, cross platform research feed
        </Title>
      </Container>
      <Image
        src={HyperfeedHeaderImage.src}
        alt={
          "Screenshot of Hyperfeed, showing the timeline, as well as a card view"
        }
        maw={1000}
        fit="contain"
        mx={"auto"}
        px={"md"}
      />
      <Container size={"sm"}>
        <Stack gap={"lg"}>
          <Hyperfeed />
        </Stack>
      </Container>
    </Stack>
  );
}
