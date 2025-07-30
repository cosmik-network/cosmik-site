import { Anchor, Card, SimpleGrid, Stack, Text } from "@mantine/core";

export default function ConnectContainer() {
  return (
    <Stack align="center">
      <Text>
        If you want to get involved in the project, we&apos;d love to connect!
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing={{ base: "sm" }}>
        <Card withBorder bg={"gray.1"}>
          <Text ta={"center"} my={"auto"}>
            Join the{" "}
            <Anchor href="" c={"gray"} fw={600}>
              waiting list
            </Anchor>{" "}
            for early access and major updates
          </Text>
        </Card>
        <Card withBorder bg={"gray.1"}>
          <Text ta={"center"} my={"auto"}>
            Join the{" "}
            <Anchor href="" c={"#5865f2"} fw={600}>
              Cosmik Discord
            </Anchor>{" "}
            or check out our{" "}
            <Anchor href="" c={"#25292F"} fw={600}>
              Github
            </Anchor>
          </Text>
        </Card>
        <Card withBorder bg={"gray.1"}>
          <Text ta={"center"} my={"auto"}>
            Schedule a 1:1 with us and share more about yourself and your
            interests{" "}
            <Anchor href="" fw={600}>
              here
            </Anchor>
          </Text>
        </Card>
        <Card withBorder bg={"gray.1"}>
          <Text ta={"center"} my={"auto"}>
            Drop us an email at{" "}
            <Anchor href="mailto:hello@cosmik.network" fw={600}>
              hello@cosmik.network
            </Anchor>
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
