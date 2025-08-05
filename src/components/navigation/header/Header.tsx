import { Group, Anchor, Image, Menu, Button, Text, Stack, Burger } from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  isOpened: boolean;
  onToggle: () => void;
}

export default function Header(props: Props) {
  return (
    <Group justify="space-between" px={"md"} py={"xs"}>
      <Anchor href="/">
        <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
      </Anchor>
      <Group justify="spce-between" gap={"xs"} visibleFrom="sm">
        <Menu withArrow shadow="md">
          <Menu.Target>
            <Button variant="subtle" size="md" leftSection={<IoChevronDown />}>
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
            <Button variant="subtle" size="md" leftSection={<IoChevronDown />}>
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
          variant="subtle"
          size="md"
        >
          Blog
        </Button>
        <Button
          component="a"
          href="/contact"
          target="_blank"
          variant="subtle"
          size="md"

        >
          Contact
        </Button>
      </Group>
      <Button
        component="a"
        href="#connect"        
        visibleFrom="sm"
      >
        Connect with us
      </Button>
      <Burger
        opened={props.isOpened}
        onClick={props.onToggle}
        hiddenFrom="sm"
        size="sm"
        color="gray"
      />
    </Group>
  )
}
