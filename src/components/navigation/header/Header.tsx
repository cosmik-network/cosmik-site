import {
  Group,
  Anchor,
  Image,
  Menu,
  Button,
  Text,
  Stack,
  Burger,
  Box,
  Overlay,
  Badge,
} from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import { track } from "@vercel/analytics";
import { FaCircle } from "react-icons/fa6";

interface Props {
  isOpened: boolean;
  onToggle: () => void;
}

export default function Header(props: Props) {
  const handleWaitlistClick = () => {
    track("Waitlist Signup");
  };

  return (
    <Box>
      <Group justify="space-between" px={"md"} py={"xs"}>
        <Anchor href="/">
          <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
        </Anchor>
        <Group justify="spce-between" gap={"xs"} visibleFrom="sm">
          <Menu withArrow shadow="md">
            <Menu.Target>
              <Button
                variant="subtle"
                size="md"
                leftSection={<IoChevronDown />}
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
                leftSection={<IoChevronDown />}
              >
                Projects
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a" href="https://semble.so/" target="_blank">
                <Badge
                  variant="transparent"
                  leftSection={<FaCircle size={8} />}
                  c={"green"}
                  px={0}
                >
                  <Text ff={"monospace"} fz={"sm"} fw={600}>
                    Ongoing
                  </Text>
                </Badge>
                <Group gap={"xs"} mt={"xs"}>
                  <Image
                    src={"/images/hyperfeed-logo.png"}
                    alt="Semble logo"
                    w={40}
                    h={40}
                  />
                  <Stack gap={0}>
                    <Group justify="space-between">
                      <Text fw={500}>Semble</Text>
                    </Group>
                    <Text c={"gray"} fz={"sm"}>
                      A social knowledge tool for researchers
                    </Text>
                  </Stack>
                </Group>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item>
                <Badge
                  variant="transparent"
                  leftSection={<FaCircle size={8} />}
                  c={"red"}
                  px={0}
                >
                  <Text ff={"monospace"} fz={"sm"} fw={600}>
                    Archived
                  </Text>
                </Badge>
                <Group gap={"xs"} mt={"xs"}>
                  <Image
                    src={"/images/hyperfeed-logo.png"}
                    alt="Hyperfeed logo"
                    w={40}
                    h={40}
                  />
                  <Stack gap={0}>
                    <Text fw={500}>Hyperfeed</Text>
                    <Text c={"gray"} fz={"sm"}>
                      Next-Generation Research Discovery
                    </Text>
                  </Stack>
                </Group>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Button
            component="a"
            href="https://blog.cosmik.network"
            target="_blank"
            variant="subtle"
            size="md"
          >
            Blog
          </Button>
        </Group>
        <Button
          visibleFrom="sm"
          data-tally-open="31a9Ng"
          data-tally-hide-title="1"
          data-tally-emoji-animation="none"
          onClick={handleWaitlistClick}
        >
          Join waitlist
        </Button>
        <Burger
          opened={props.isOpened}
          onClick={props.onToggle}
          hiddenFrom="sm"
          size="sm"
        />
      </Group>
      <Overlay
        color="#ffffff"
        backgroundOpacity={0}
        blur={4}
        style={{ zIndex: -1 }}
      />
    </Box>
  );
}
