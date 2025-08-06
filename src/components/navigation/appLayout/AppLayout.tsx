"use client";

import {
  ActionIcon,
  AppShell,
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Space,
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
      <AppShell.Header withBorder={false}>
        <Header isOpened={opened} onToggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar onToggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main mt={"xl"}>{props.children}</AppShell.Main>
      <AppShell.Footer
        withBorder={false}
        px={"md"}
        py={"xs"}
        mt={"xl"}
        pos={"relative"}
      >
        <Divider />
        <Space h={"xs"} />
        <Grid justify="space-between" align="center" gutter={"md"}>
          <GridCol span={{ base: "content", sm: "auto" }} mx={"auto"}>
            <Group gap={"xs"}>
              <Image src={"/logo.svg"} alt="Cosmik logo" w={28} />
              <Text c={"gray.6"} fw={600}>
                © Cosmik {new Date().getFullYear()}
              </Text>
            </Group>
          </GridCol>
          <GridCol span={{ base: "content", sm: "auto" }} mx={"auto"}>
            <Button
              component="a"
              href="mailto:hello@cosmik.network"
              variant="light"
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
                size={"xl"}
              >
                <FaMastodon size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://x.com/CosmikNetwork"
                target="_blank"
                variant="subtle"
                size={"xl"}
              >
                <FaSquareXTwitter size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://github.com/cosmik-network"
                target="_blank"
                variant="subtle"
                size={"xl"}
              >
                <FaGithub size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href=""
                target="_blank"
                variant="subtle"
                size={"xl"}
              >
                <FaDiscord size={22} />
              </ActionIcon>
            </Group>
          </GridCol>
        </Grid>
      </AppShell.Footer>
    </AppShell>
  );
}
