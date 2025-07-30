import { Anchor, Group, Image, Stack, Text } from "@mantine/core";

export default function SupportersContainer() {
  return (
    <Stack align="center">
      <Group justify="center">
        <Image src={"/images/astera.svg"} alt={"Astera logo"} h={37} w={132} />
        <Image
          src={"/images/open-philanthropy.svg"}
          alt={"Open Philanthropy logo"}
          h={37}
          w={132}
        />
      </Group>
      <Text>
        Cosmik is fiscally sponsored by{" "}
        <Anchor href="https://www.homeworld.bio/" fw={600}>
          Homeworld Collective
        </Anchor>
      </Text>
    </Stack>
  );
}
