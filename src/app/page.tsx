import {
  Avatar,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Page() {
  return (
    <Container>
      <Stack>
        <Title order={2} ta={"center"}>
          Our Team
        </Title>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing={"xl"}>
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/ronen.png"} size={"xl"} alt="Ronen Tamari" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Ronen Tamari</Text>
              <Text c={"gray"}>A short bio that provides context</Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/shahar.png"} size={"xl"} alt="Shahar Oriel" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Shahar Oriel</Text>
              <Text c={"gray"}>A short bio that provides context</Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar src={"/images/wesley.png"} size={"xl"} alt="Wesley Finck" />
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Wesley Finck</Text>
              <Text c={"gray"}>A short bio that provides context</Text>
            </Stack>
          </Stack>
          <Stack align="center" gap={"xs"}>
            <Avatar size={"xl"} alt="Pouria Delfanazari">
              PD
            </Avatar>
            <Stack align="center" gap={0} ta={"center"}>
              <Text fw={600}>Pouria Delfanazari</Text>
              <Text c={"gray"}>A short bio that provides context</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
