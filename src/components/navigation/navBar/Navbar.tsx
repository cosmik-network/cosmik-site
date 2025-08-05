import { Button, Menu, Stack, Text, Image, Group } from "@mantine/core";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <Stack justify="space-between" align="center" px={"md"} py={"xs"}>
      <Stack align="center" gap={"xs"}>
        <Menu withArrow shadow="md">
          <Menu.Target>
            <Button variant="subtle" size="md" leftSection={<IoMdArrowDropdown />}>
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
            <Button variant="subtle" size="md" leftSection={<IoMdArrowDropdown />}>
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
      </Stack>
      <Button
        component="a"
        href="#connect"
        target="_blank"
        size="md"
      >
        Connect with us
      </Button>
    </Stack>
  )
}
