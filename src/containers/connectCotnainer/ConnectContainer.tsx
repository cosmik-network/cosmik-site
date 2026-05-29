import {
  Anchor,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

const PUBLICATION_ID =
  "at://did:plc:b2p6rujcgpenbtcjposmjuc3/site.standard.publication/3m3axfv5hms24";

export default function ConnectContainer() {
  return (
    <Stack align="center">
      <Text>
        If you want to get involved in the project, we&apos;d love to connect!
      </Text>
      <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 1 }}
        spacing={{ base: "xs" }}
        mt={"lg"}
      >
        <Card withBorder bg={"gray.1"}>
          <Stack gap={"0"} my={"auto"}>
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

        <Card withBorder bg={"gray.1"}>
          {" "}
          <Stack gap={"0"} my={"auto"}>
            <Text fw={600} fz={"lg"}>
              Get involved
            </Text>
            <Text my={"auto"}>
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

        <Card withBorder bg={"gray.1"}>
          <Stack gap={"0"} my={"auto"}>
            <Text fw={600} fz={"lg"}>
              General inquiry
            </Text>

            <Text my={"auto"}>
              Drop us an email at{" "}
              <Anchor href="mailto:hello@cosmik.network" fw={600}>
                hello@cosmik.network
              </Anchor>
            </Text>
          </Stack>
        </Card>
      </SimpleGrid>

      <Stack mt={"xl"}>
        <Text>Subscribe to our blog to get the latest updates</Text>

        <Card
          p={"8"}
          withBorder
          w={{ base: "fit-content", sm: "auto" }}
          mx={{ base: "auto", sm: 0 }}
        >
          <form action="https://leaflet.pub/api/subscribe_email" method="post">
            <Group gap={"xs"} justify="space-between">
              <input type="hidden" name="publication" value={PUBLICATION_ID} />
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
              <Button type="submit" size="xs">
                Get updates
              </Button>
            </Group>
          </form>
        </Card>
      </Stack>
    </Stack>
  );
}
