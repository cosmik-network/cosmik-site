import { Anchor, Group, Image, Stack, Text } from "@mantine/core";

export default function SupportersContainer() {
  return (
    <Stack align="center">
      <Group justify="center" gap={"xl"}>
        <Anchor href="http://astera.org/" target="_blank">
          <Image
            src={"/images/astera.svg"}
            alt={"Astera logo"}
            h={37}
            w={132}
          />
        </Anchor>
        <Anchor href="https://coefficientgiving.org/" target="_blank">
          <Image
            src={"/images/coefficient-giving.svg"}
            alt={"Coefficient Giving logo"}
            h={37}
            w={132}
          />
        </Anchor>
      </Group>
      <Text>
        Cosmik is fiscally sponsored by{" "}
        <Anchor href="https://www.homeworld.bio/" target="_blank" fw={600}>
          Homeworld Collective
        </Anchor>
      </Text>
    </Stack>
  );
}
