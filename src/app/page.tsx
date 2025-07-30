import ConnectContainer from "@/containers/connectCotnainer/ConnectContainer";
import IntroContainer from "@/containers/introContainer/InroContainer";
import ProjectsContainer from "@/containers/projectsContainer/ProjectsContainer";
import SupportersContainer from "@/containers/supportersContainer/SupportersContainer";
import TeamContainer from "@/containers/teamContainer/TeamContainer";
import ValuesContainer from "@/containers/valuesContainer/ValuesContainer";
import { getContents } from "@/lib/utils/markdown";
import { Container, Stack, Title } from "@mantine/core";

export default function Page() {
  const contents = getContents("home");
  const tagline = contents.filter((item) => item.slug === "tagline")[0].content;

  return (
    <Container>
      <Stack gap={100}>
        <Stack>
          <Title order={1} ta={"center"}>
            {tagline}
          </Title>
          <Container size={"xs"}>
            <IntroContainer />
            <ValuesContainer />
          </Container>
        </Stack>

        <Stack id="projects" align="center">
          <Title order={2}>Projects</Title>
          <ProjectsContainer />
        </Stack>

        <Stack align="center">
          <Title order={2}>Team</Title>
          <Container size={"sm"}>
            <TeamContainer />
          </Container>
        </Stack>

        <Stack align="center">
          <Title order={2}>Supporters</Title>
          <SupportersContainer />
        </Stack>

        <Stack align="center">
          <Title order={2}>Connect</Title>
          <ConnectContainer />
        </Stack>
      </Stack>
    </Container>
  );
}
