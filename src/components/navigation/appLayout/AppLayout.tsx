"use client";

import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Menu,
  Space,
  Stack,
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
      <AppShell.Header withBorder={false} pos={"relative"}>
        <Group justify="space-between" px={"md"} py={"xs"}>
          <Anchor href="/">
            <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
          </Anchor>
          <Group justify="spce-between" visibleFrom="sm">
            <Menu withArrow shadow="md">
              <Menu.Target>
                <Button variant="transparent" size="md" px={0}>
                  About
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Text fw={500}>Team</Text>
                </Menu.Item>
                <Menu.Item>
                  <Text fw={500}>Vision</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu withArrow shadow="md">
              <Menu.Target>
                <Button variant="transparent" size="md" px={0}>
                  Projects
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Group gap={"xs"}>
                    <Image
                      src={"/images/hyperfeed-logo.png"}
                      alt="Hyperfeed logo"
                      w={40}
                      h={40}
                    />
                    <Stack gap={0}>
                      <Group justify="space-between">
                        <Text fw={500}>Hyperfeed</Text>
                      </Group>
                      <Text c={"gray"} fz={"sm"}>
                        Next-Generation Research Discovery.
                      </Text>
                    </Stack>
                  </Group>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Button
              component="a"
              href="https://paragraph.com/@sense-nets"
              target="_blank"
              variant="transparent"
              size="md"
              px={0}
            >
              Blog
            </Button>
            <Button
              component="a"
              href="/contact"
              target="_blank"
              variant="transparent"
              size="md"
              px={0}
            >
              Contact
            </Button>
          </Group>
          <Button
            component="a"
            href="https://tally.so/r/nGd4Ap"
            target="_blank"
            visibleFrom="sm"
          >
            Join our waitlist
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="gray"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Group justify="space-between" px={"md"} py={"xs"}>
          <Group justify="spce-between">
            <Menu withArrow shadow="md">
              <Menu.Target>
                <Button variant="transparent" size="md" px={0}>
                  About
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Text fw={500}>Team</Text>
                </Menu.Item>
                <Menu.Item>
                  <Text fw={500}>Vision</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu withArrow shadow="md">
              <Menu.Target>
                <Button variant="transparent" size="md" px={0}>
                  Projects
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Group gap={"xs"}>
                    <Image
                      src={"/images/hyperfeed-logo.png"}
                      alt="Hyperfeed logo"
                      w={40}
                      h={40}
                    />
                    <Stack gap={0}>
                      <Text fw={500}>Hyperfeed</Text>
                      <Text c={"gray"} fz={"sm"}>
                        Next-Generation Research Discovery.
                      </Text>
                    </Stack>
                  </Group>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Button
              component="a"
              href="https://paragraph.com/@sense-nets"
              target="_blank"
              variant="transparent"
              size="md"
              px={0}
            >
              Blog
            </Button>
            <Button
              component="a"
              href="/contact"
              target="_blank"
              variant="transparent"
              size="md"
              px={0}
            >
              Contact
            </Button>
          </Group>
          <Button
            component="a"
            href="https://tally.so/r/nGd4Ap"
            target="_blank"
          >
            Join our waitlist
          </Button>
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
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
