import {
  Group,
  Anchor,
  Image,
  Menu,
  Button,
  Text,
  Stack,
  Box,
  Badge,
  Grid,
} from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import { track } from "@vercel/analytics";
import { FaCircle } from "react-icons/fa6";

export default function Header() {
  const handleWaitlistClick = () => {
    track("Waitlist Signup");
  };

  return (
    <Box>
      <Grid justify="space-between" align="center" px={"md"} py={"xs"}>
        <Grid.Col span="content">
          <Anchor href="/">
            <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
          </Anchor>
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, sm: "content" }}
          order={{ base: 2, sm: 1 }}
          mx={"auto"}
        >
          <Group justify="center" gap={"xs"}>
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
                <Menu.Item
                  component="a"
                  href="https://semble.so/"
                  target="_blank"
                >
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
                <Menu.Item component="a" href="/hyperfeed">
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
        </Grid.Col>

        <Grid.Col span="content" order={{ base: 1, sm: 2 }}>
          <Button
            data-tally-open="31a9Ng"
            data-tally-hide-title="1"
            data-tally-emoji-animation="none"
            onClick={handleWaitlistClick}
          >
            Join waitlist
          </Button>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
