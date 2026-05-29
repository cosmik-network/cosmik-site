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
  Card,
  TextInput,
} from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import { track } from "@vercel/analytics";
import { FaCircle } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";

const PUBLICATION_ID =
  "at://did:plc:b2p6rujcgpenbtcjposmjuc3/site.standard.publication/3m3axfv5hms24";

export default function Header() {
  const handleWaitlistClick = () => {
    track("Waitlist Signup");
  };

  return (
    <Box>
      <Grid
        justify="space-between"
        align="center"
        px={"md"}
        py={"xs"}
        gutter={"xs"}
      >
        <Grid.Col span="content">
          <Anchor href="/">
            <Image src={"/logo-full.svg"} alt="Cosmik logo" w={144} h={46} />
          </Anchor>
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, sm: "content" }}
          order={{ base: 1, sm: 1 }}
          mx={{ base: "auto", sm: 0 }}
          px={0}
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
                <Menu.Item component={Link} href="/people">
                  <Text fw={500}>People</Text>
                </Menu.Item>
                <Menu.Item component={Link} href="/vision">
                  <Text fw={500}>Vision</Text>
                </Menu.Item>
                <Menu.Item component={Link} href="/events">
                  <Text fw={500}>Events</Text>
                </Menu.Item>
                <Menu.Item component={Link} href="https://docs.cosmik.network/">
                  <Text fw={500}>Docs</Text>
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
                      src={"/images/semble-logo.webp"}
                      alt="Semble logo"
                      w={"auto"}
                      h={40}
                    />
                    <Stack gap={0}>
                      <Group justify="space-between">
                        <Text fw={500}>Semble</Text>
                      </Group>
                      <Text c={"gray"} fz={"sm"}>
                        A social knowledge network for researchers
                      </Text>
                    </Stack>
                  </Group>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item component={Link} href="/hyperfeed">
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
                      src={"/images/hyperfeed-logo.webp"}
                      alt="Hyperfeed logo"
                      w={"auto"}
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
              leftSection={<RiArrowRightUpLine />}
            >
              Blog
            </Button>
          </Group>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: "content" }} order={{ base: 2, sm: 2 }}>
          <Card
            p={"8"}
            withBorder
            w={{ base: "fit-content", sm: "auto" }}
            mx={{ base: "auto", sm: 0 }}
          >
            <form
              action="https://leaflet.pub/api/subscribe_email"
              method="post"
            >
              <Group gap={"xs"}>
                <input
                  type="hidden"
                  name="publication"
                  value={PUBLICATION_ID}
                />
                <TextInput
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  size="xs"
                  radius={"xl"}
                  variant="unstyled"
                  mx={"5"}
                />
                <Button type="submit" size="xs" onClick={handleWaitlistClick}>
                  Get updates
                </Button>
              </Group>
            </form>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
