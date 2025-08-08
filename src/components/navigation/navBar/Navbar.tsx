import { Button, Menu, Stack, Text, Image, Group } from "@mantine/core";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  onToggle: () => void;
}

export default function Navbar(props: Props) {
  return (
    <Stack justify="space-between" align="center" px={"md"} py={"xs"}>
      <Stack align="center" gap={"xs"}>
        <Menu withArrow shadow="md">
          <Menu.Target>
            <Button
              variant="subtle"
              size="md"
              leftSection={<IoMdArrowDropdown />}
            >
              About
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="/people">
              <Text fw={500}>People</Text>
            </Menu.Item>
            <Menu.Item component="a" href="/vision">
              <Text fw={500}>Vision</Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu withArrow shadow="md">
          <Menu.Target>
            <Button
              variant="subtle"
              size="md"
              leftSection={<IoMdArrowDropdown />}
            >
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
      </Stack>
      <Button
        size="md"
        data-tally-open="31a9Ng"
        data-tally-hide-title="1"
        data-tally-emoji-animation="none"
      >
        Join waitlist
      </Button>
    </Stack>
  );
}
