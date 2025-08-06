import ProjectCard from "@/components/contentDisplay/projectCard/ProjectCard";
import { Group } from "@mantine/core";

export default function ProjectsContainer() {
  return (
    <Group justify="center" align="stretch">
      <ProjectCard
        name="Semble"
        description="Social bookmarking for intentional browsing."
        logo="/images/semble-logo.png"
        year={2025}
        status="ongoing"
        githubLink="https://github.com/cosmik-network/semble"
      />
      <ProjectCard
        name="Hyperfeed"
        description="Next-Generation Research Discovery."
        logo="/images/hyperfeed-logo.png"
        year={2024}
        status="archived"
        githubLink="https://github.com/Common-SenseMakers/sensemakers"
      />
    </Group>
  );
}
