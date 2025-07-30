import ProjectCard from "@/components/contentDisplay/projectCard/ProjectCard";
import { Group } from "@mantine/core";

export default function ProjectsContainer() {
  return (
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
  );
}
