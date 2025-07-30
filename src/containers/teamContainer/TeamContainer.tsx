import { getContents } from "@/lib/utils/markdown";
import { Avatar, SimpleGrid, Stack, Text } from "@mantine/core";

export default function TeamContainer() {
  const contents = getContents("home");
  const bios = contents.filter(
    (item) =>
      item.slug === "pouria" ||
      item.slug === "ronen" ||
      item.slug === "shahar" ||
      item.slug === "wesley"
  );

  return (
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
  );
}
