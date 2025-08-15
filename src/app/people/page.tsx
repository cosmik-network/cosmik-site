import { getContents } from "@/lib/utils/markdown";
import {
  Container,
  Stack,
  Title,
  Text,
  Grid,
  Avatar,
  Anchor,
  GridCol,
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

        <Stack align="center" gap={"xl"}>
          <Title order={3} fz={"h1"}>
            Team
          </Title>
          <Grid gutter={"xl"}>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/ronen.webp"}
                  size={"160"}
                  alt="Ronen Tamari"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://ronentk.github.io/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Ronen Tamari
                  </Anchor>
                  <Text c={"gray"} fw={500} maw={160}>
                    {bios.filter((item) => item.slug === "ronen")[0].content}
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/shahar.webp"}
                  size={"160"}
                  alt="Shahar Oriel"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://www.linkedin.com/in/shahar-oriel/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Shahar Oriel
                  </Anchor>
                  <Text c={"gray"} fw={500} maw={160}>
                    {bios.filter((item) => item.slug === "shahar")[0].content}
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/wesley.webp"}
                  size={"160"}
                  alt="Wesley Finck"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://wesleyfinck.org/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Wesley Finck
                  </Anchor>
                  <Text c={"gray"} fw={500} maw={160}>
                    {bios.filter((item) => item.slug === "wesley")[0].content}
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar src={"/images/pouria.webp"} size={"160"} alt="Pouria Delfanazari">
                  PD
                </Avatar>
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://pouriade.com/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Pouria Delfanazari
                  </Anchor>
                  <Text c={"gray"} fw={500} maw={160}>
                    {bios.filter((item) => item.slug === "pouria")[0].content}
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>

        <Stack align="center" gap={"xl"}>
          <Title order={3} fz={"h1"}>
            Advisory Circle
          </Title>
          <Grid gutter={"xl"}>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/maria.webp"}
                  size={"160"}
                  alt="Maria Antoniak"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://maria-antoniak.github.io/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Maria Antoniak
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>

            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/laure.webp"}
                  size={"160"}
                  alt="Laure Haak"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://www.mightyredbarn.com/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Laure Haak
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/boris.webp"}
                  size={"160"}
                  alt="Boris Mann"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://bmannconsulting.com/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Boris Mann
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Stack align="center" gap={"xs"}>
                <Avatar
                  src={"/images/robin.webp"}
                  size={"160"}
                  alt="Robin Berjon"
                />
                <Stack align="center" gap={0} ta={"center"}>
                  <Anchor
                    href="https://berjon.com/"
                    target="_blank"
                    fw={600}
                    fz={"lg"}
                  >
                    Robin Berjon
                  </Anchor>
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
