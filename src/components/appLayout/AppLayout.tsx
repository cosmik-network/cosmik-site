"use client";

import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Button,
  Group,
  Image,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  FaBluesky,
  FaMastodon,
  FaSquareXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout(props: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "xs",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header withBorder={false}>
        <Group justify="space-between" px={"md"} py={"xs"}>
          <Anchor href="/">
            <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
          </Anchor>
          <Group justify="spce-between" visibleFrom="xs">
            <Button
              component="a"
              href="/vision"
              variant="transparent"
              size="md"
              px={0}
            >
              Our Vision
            </Button>
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
          </Group>
          <Button
            component="a"
            href="https://tally.so/r/nGd4Ap"
            target="_blank"
            visibleFrom="xs"
          >
            Join our waitlist
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="xs"
            size="sm"
            color="gray"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Group justify="space-between" px={"md"} py={"xs"}>
          <Group justify="spce-between">
            <Button
              component="a"
              href="/vision"
              variant="transparent"
              size="md"
              px={0}
            >
              Our Vision
            </Button>
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
      <AppShell.Footer withBorder={false} px={"md"} py={"xs"}>
        <Group justify="space-between">
          <Text c={"gray.6"} fw={600}>
            © Cosmik {new Date().getFullYear()}
          </Text>
          <Button
            component="a"
            href="mailto:hello@cosmik.network"
            variant="light"
            leftSection={<FaEnvelope />}
            size="md"
          >
            hello@cosmik.network
          </Button>
          <Group justify="space-between" gap="0">
            <ActionIcon
              component="a"
              href="https://bsky.app/profile/cosmik.network"
              target="_blank"
              variant="subtle"
              size={"xl"}
              m={0}
            >
              <FaBluesky size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://mastodon.social/@cosmik_network"
              target="_blank"
              variant="subtle"
              size={"xl"}
            >
              <FaMastodon size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://x.com/CosmikNetwork"
              target="_blank"
              variant="subtle"
              size={"xl"}
            >
              <FaSquareXTwitter size={24} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
