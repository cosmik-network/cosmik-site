"use client";

import ProjectCard from "@/components/contentDisplay/projectCard/ProjectCard";
import { Group, Stack, Tabs, Text } from "@mantine/core";

export default function ProjectsContainer() {
  return (
    <Stack align="center">
      <Tabs variant="pills" radius="xl" defaultValue="ongoing">
        <Tabs.List justify="center">
          <Tabs.Tab value="ongoing">
            <Text fz={"sm"} fw={600}>
              Ongoing
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="archived">
            <Text fz={"sm"} fw={600}>
              Archived
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Group justify="center" align="stretch" mt={"lg"}>
          <Tabs.Panel value="ongoing">
            <ProjectCard
              name="Semble"
              description="Social bookmarking for intentional browsing."
              logo="/images/semble-logo.png"
              year={2025}
              status="ongoing"
              githubLink="https://github.com/cosmik-network/semble"
            />
          </Tabs.Panel>
          <Tabs.Panel value="archived">
            <ProjectCard
              name="Hyperfeed"
              description="Next-Generation Research Discovery."
              logo="/images/hyperfeed-logo.png"
              year={2024}
              status="archived"
              githubLink="https://github.com/Common-SenseMakers/sensemakers"
            />
          </Tabs.Panel>
        </Group>
      </Tabs>
    </Stack>
  );
}
