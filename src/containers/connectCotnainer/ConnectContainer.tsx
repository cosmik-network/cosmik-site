"use client";

import { Anchor, Card, SimpleGrid, Stack, Text } from "@mantine/core";
import dynamic from "next/dynamic";

const NoSSR = dynamic(
  () => import("../../components/forms/waitlistForm/WaitlistForm"),
  { ssr: false }
);

export default function ConnectContainer() {
  return (
    <Stack align="center">
      <Text>
        If you want to get involved in the project, we&apos;d love to connect!
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} spacing={{ base: "sm" }}>
        <Card withBorder ta={"center"}>
          <Stack gap={"xs"}>
            <Text fw={600} fz={"lg"}>
              Contribute
            </Text>
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
        <Card withBorder ta={"center"}>
          <Stack>
            <Text fw={600} fz={"lg"}>
              Get involved
            </Text>
            <Text ta={"center"} my={"auto"}>
              Schedule a 1:1 with us and share more about yourself and your
              interests{" "}
              <Anchor
                href="https://forms.cosmik.network/get-involved"
                target="_blank"
                fw={600}
              >
                here
              </Anchor>
            </Text>
          </Stack>
        </Card>
        <Card withBorder ta={"center"}>
          <Stack gap={"xs"}>
            <Text fw={600} fz={"lg"}>
              General inquiry
            </Text>

            <Text ta={"center"} my={"auto"}>
              Drop us an email at{" "}
              <Anchor href="mailto:hello@cosmik.network" fw={600}>
                hello@cosmik.network
              </Anchor>
            </Text>
          </Stack>
        </Card>
      </SimpleGrid>
      <NoSSR />
    </Stack>
  );
}
