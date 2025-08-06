"use client";

import {
  Anchor,
  Card,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import dynamic from "next/dynamic";

const NoSSR = dynamic(
  () => import("../../components/forms/waitlistForm/WaitlistForm"),
  { ssr: false }
);

export default function ConnectContainer() {
  return (
    <Stack align="center">
      <NoSSR />
      <Text>
        If you want to get involved in the project, we&apos;d love to connect!
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing={{ base: "sm" }}>
        <Card withBorder bg={"gray.1"} ta={"center"}>
          <Stack gap={"xs"}>
            <Text fw={600}>Waitlist</Text>
            <Text my={"auto"}>
              Join the{" "}
              <UnstyledButton
                component="span"
                data-tally-open="31a9Ng"
                data-tally-hide-title="1"
                data-tally-emoji-animation="none"
                c={"gray"}
                fw={600}
              >
                waiting list
              </UnstyledButton>{" "}
              for early access and major updates
            </Text>
          </Stack>
        </Card>
        <Card withBorder bg={"gray.1"} ta={"center"}>
          <Stack gap={"xs"}>
            <Text fw={600}>Contribute</Text>
            <Text>
              Join the{" "}
              <Anchor
                href="https://discord.gg/SHvvysb73e"
                target="_blank"
                c={"#5865f2"}
                fw={600}
              >
                Cosmik Discord
              </Anchor>{" "}
              or check out our{" "}
              <Anchor
                href="https://github.com/cosmik-network"
                target="_blank"
                c={"#25292F"}
                fw={600}
              >
                Github
              </Anchor>
            </Text>
          </Stack>
        </Card>
        <Card withBorder bg={"gray.1"} ta={"center"}>
          <Stack>
            <Text fw={600}>Get involved</Text>
            <Text ta={"center"} my={"auto"}>
              Schedule a 1:1 with us and share more about yourself and your
              interests{" "}
              <Anchor href="" fw={600}>
                here
              </Anchor>
            </Text>
          </Stack>
        </Card>
        <Card withBorder bg={"gray.1"} ta={"center"}>
          <Stack gap={"xs"}>
            <Text fw={600}>General inquiry</Text>

            <Text ta={"center"} my={"auto"}>
              Drop us an email at{" "}
              <Anchor href="mailto:hello@cosmik.network" fw={600}>
                hello@cosmik.network
              </Anchor>
            </Text>
          </Stack>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
