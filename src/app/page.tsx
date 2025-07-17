import ProjectCard from "@/components/contentDisplay/projectCard/ProjectCard";
import {
  Avatar,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Page() {
  return (
    <Container>
      <Stack gap={100}>
        <Stack>
          <Title order={2} ta={"center"}>
            Projects
          </Title>
          <Group justify="center" align="stretch">
            <ProjectCard
              name="Annos"
              description="Social bookmarking for intentional browsing."
              logo="/images/annos-logo.png"
              year={2025}
              status="ongoing"
              githubLink=""
            />
            <ProjectCard
              name="Hyperfeed"
              description="Next-Generation Research Discovery."
              logo="/images/hyperfeed-logo.png"
              year={2024}
              status="archived"
              githubLink=""
            />
          </Group>
        </Stack>
        <Stack>
          <Title order={2} ta={"center"}>
            Team
          </Title>
          <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing={{ base: "xl", sm: "xs"  }}>
            <Stack align="center" gap={"xs"}>
              <Avatar
                src={"/images/ronen.png"}
                size={"xl"}
                alt="Ronen Tamari"
              />
              <Stack align="center" gap={0} ta={"center"}>
                <Text fw={600}>Ronen Tamari</Text>
                <Text c={"gray"}>A short bio that provides context</Text>
              </Stack>
            </Stack>
            <Stack align="center" gap={"xs"}>
              <Avatar
                src={"/images/shahar.png"}
                size={"xl"}
                alt="Shahar Oriel"
              />
              <Stack align="center" gap={0} ta={"center"}>
                <Text fw={600}>Shahar Oriel</Text>
                <Text c={"gray"}>A short bio that provides context</Text>
              </Stack>
            </Stack>
            <Stack align="center" gap={"xs"}>
              <Avatar
                src={"/images/wesley.png"}
                size={"xl"}
                alt="Wesley Finck"
              />
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
      </Stack>
    </Container>
  );
}
