"use client";

import ProjectCard from "@/components/contentDisplay/projectCard/ProjectCard";
import { Stack, Tabs, Text } from "@mantine/core";
import SembleScreenshot from "@/assets/images/semble-screenshot.webp";
import HyperfeedScreenshot from "@/assets/images/hyperfeed-screenshot.webp";

export default function ProjectsContainer() {
  return (
    <Stack align="center">
      <Tabs variant="pills" radius="xs" defaultValue="ongoing">
        <Tabs.List justify="center" mb={"lg"}>
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

        <Tabs.Panel value="ongoing">
          <ProjectCard
            name="Semble"
            description="A social knowledge network for researchers"
            logo="/images/semble-logo.webp"
            year={2025}
            status="ongoing"
            githubLink="https://github.com/cosmik-network/semble"
            backgroundImage={SembleScreenshot.src}
            projectLink="https://semble.so/"
          />
        </Tabs.Panel>
        <Tabs.Panel value="archived">
          <ProjectCard
            name="Hyperfeed"
            description="Next-Generation Research Discovery"
            logo="/images/hyperfeed-logo.webp"
            year={2024}
            status="archived"
            githubLink="https://github.com/Common-SenseMakers/sensemakers"
            backgroundImage={HyperfeedScreenshot.src}
            projectLink="/hyperfeed"
          />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
