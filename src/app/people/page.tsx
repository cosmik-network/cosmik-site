import { getContents } from "@/lib/utils/markdown";
import {
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Avatar,
} from "@mantine/core";

export default function Page() {
  const contents = getContents("people");
  const description = contents.filter((item) => item.slug === "description")[0]
    .content;
  const bios = contents.filter(
    (item) =>
      item.slug === "pouria" ||
      item.slug === "ronen" ||
      item.slug === "shahar" ||
      item.slug === "wesley"
  );

  return (
    <Container>
      <Stack gap={100} align="center">
        <Stack gap={0} align="center" ta={"center"}>
          <Title order={1} fz={"3rem"}>
            People
          </Title>
          <Title order={2} fw={500} maw={600}>
            {description}
          </Title>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, xs: 2, sm: 4 }}
          spacing={{ base: "xl", sm: "xs" }}
        >
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/ronen.png"} size={"xl"} alt="Ronen Tamari" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Ronen Tamari</Text>
              <Text c={"gray"}>
                {bios.filter((item) => item.slug === "ronen")[0].content}
              </Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/shahar.png"} size={"xl"} alt="Shahar Oriel" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Shahar Oriel</Text>
              <Text c={"gray"}>
                {bios.filter((item) => item.slug === "shahar")[0].content}
              </Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/wesley.png"} size={"xl"} alt="Wesley Finck" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Wesley Finck</Text>
              <Text c={"gray"}>
                {bios.filter((item) => item.slug === "wesley")[0].content}
              </Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar size={"xl"} alt="Pouria Delfanazari">
              PD
            </Avatar>
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Pouria Delfanazari</Text>
              <Text c={"gray"}>
                {bios.filter((item) => item.slug === "pouria")[0].content}
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
