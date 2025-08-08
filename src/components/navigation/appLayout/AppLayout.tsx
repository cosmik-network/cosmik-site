"use client";

import {
  ActionIcon,
  AppShell,
  Button,  
  Grid,
  GridCol,
  Group,
  Image,
  Overlay,  
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  FaBluesky,
  FaMastodon,
  FaSquareXTwitter,
  FaEnvelope,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";
import Navbar from "../navBar/Navbar";
import Header from "../header/Header";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout(props: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60 } }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header withBorder={false} bg={"transparent"}>
        <Header isOpened={opened} onToggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar bg={"transparent"}>
        <Navbar />
        <Overlay
          color="#ffffff"
          backgroundOpacity={0}
          blur={4}
          style={{ zIndex: -1 }}
        />
      </AppShell.Navbar>

      <AppShell.Main my={{ base: 60, sm: 100 }}>{props.children}</AppShell.Main>
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
            <Group gap={"xs"}>
              <Image src={"/logo.svg"} alt="Cosmik logo" w={28} />
              <Text fw={600}>© Cosmik {new Date().getFullYear()}</Text>
            </Group>
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
