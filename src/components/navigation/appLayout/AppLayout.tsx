"use client";

import {
  ActionIcon,
  Anchor,
  AppShell,
  Button,
  Grid,
  GridCol,
  Group,
  Image,
  Overlay,
  Text,
} from "@mantine/core";
import {
  FaBluesky,
  FaMastodon,
  FaSquareXTwitter,
  FaEnvelope,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";
import Header from "../header/Header";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout(props: Props) {
  return (
    <AppShell>
      <AppShell.Header withBorder={false} bg={"transparent"} pos={"static"}>
        <Header />
      </AppShell.Header>

      <AppShell.Main my={{ base: 60, sm: 80 }}>{props.children}</AppShell.Main>
      <AppShell.Footer
        withBorder={false}
        px={"md"}
        py={"xs"}
        mt={"xl"}
        pos={"relative"}
        bg={"transparent"}
      >
        <Grid justify="space-between" align="center" gutter={"md"}>
          <GridCol span={{ base: "content", sm: "auto" }} mx={"auto"}>
            <Anchor
              href="https://www.homeworld.bio/"
              target="_blank"
              underline="never"
            >
              <Group gap={"xs"}>
                <Image
                  src={"/homeworld-logo-full.svg"}
                  alt="Homeworld Collective logo"
                  w={100}
                />
                <Text fw={600} fz={"sm"} c={"dimmed"}>
                  © {new Date().getFullYear()}
                </Text>
              </Group>
            </Anchor>
          </GridCol>
          <GridCol span={{ base: "content", sm: "auto" }} mx={"auto"}>
            <Button
              component="a"
              href="mailto:hello@cosmik.network"
              leftSection={<FaEnvelope />}
            >
              hello@cosmik.network
            </Button>
          </GridCol>
          <GridCol span={{ base: "content", sm: "content" }} mx={"auto"}>
            <Group justify="space-between" gap="0">
              <ActionIcon
                component="a"
                href="https://bsky.app/profile/cosmik.network"
                target="_blank"
                variant="subtle"
                color="dark"
                size={"xl"}
                m={0}
              >
                <FaBluesky size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://mastodon.social/@cosmik_network"
                target="_blank"
                variant="subtle"
                color="dark"
                size={"xl"}
              >
                <FaMastodon size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://x.com/CosmikNetwork"
                target="_blank"
                variant="subtle"
                color="dark"
                size={"xl"}
              >
                <FaSquareXTwitter size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://github.com/cosmik-network"
                target="_blank"
                variant="subtle"
                color="grdarkay"
                size={"xl"}
              >
                <FaGithub size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://discord.gg/SHvvysb73e"
                target="_blank"
                variant="subtle"
                color="dark"
                size={"xl"}
              >
                <FaDiscord size={22} />
              </ActionIcon>
            </Group>
          </GridCol>
        </Grid>
        <Overlay
          color="#ffffff"
          backgroundOpacity={0}
          blur={4}
          style={{ zIndex: -1 }}
        />
      </AppShell.Footer>
    </AppShell>
  );
}
