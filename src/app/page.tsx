import ConnectContainer from "@/containers/connectCotnainer/ConnectContainer";
import IntroContainer from "@/containers/introContainer/InroContainer";
import ProjectsContainer from "@/containers/projectsContainer/ProjectsContainer";
import SupportersContainer from "@/containers/supportersContainer/SupportersContainer";
import ValuesContainer from "@/containers/valuesContainer/ValuesContainer";
import { getContents } from "@/lib/utils/markdown";
import { Container, Image, Stack, Title } from "@mantine/core";
import Events from "@/app/content/home/events.mdx";

export default function Page() {
  const contents = getContents("home");
  const tagline = contents.filter((item) => item.slug === "tagline")[0].content;

  return (
    <Container style={{ zIndex: 100 }}>
      <Stack gap={100}>
        <Stack>
          <Stack gap={0} align="center" ta={"center"}>
            <Title order={1} fz={"3rem"}>
              Cosmik
            </Title>
            <Title order={2} fw={500} maw={400}>
              {tagline}
            </Title>
          </Stack>
          <Container size={"xs"} px={0}>
            <Stack gap={"xl"}>
              <IntroContainer />
              <ValuesContainer />
            </Stack>
          </Container>
        </Stack>

        <Stack id="projects" align="center">
          <Title order={2}>Projects</Title>
          <ProjectsContainer />
        </Stack>

        <Stack id="events" align="center">
          <Title order={2}>Events</Title>
          <Container size={"xs"}>
            <Events />
          </Container>
        </Stack>

        <Stack align="center">
          <Title order={2}>Supporters</Title>
          <SupportersContainer />
        </Stack>

        <Stack align="center" id="connect">
          <Title order={2}>Connect</Title>
          <ConnectContainer />
        </Stack>
      </Stack>
      <Image
        src={"/images/landing-bg.webp"}
        alt="A dreamy illustration of networks"
        pos={"absolute"}
        inset={0}
        style={{ zIndex: -1 }}
      />
    </Container>
  );
}
