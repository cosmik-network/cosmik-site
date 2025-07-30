import { Anchor, Stack, Text } from "@mantine/core";

export default function IntroContainer() {
  return (
    <Stack>
      <Text>
        Information abundance is far outpacing our capacity to make sense of it.
        While artificial intelligence excels at processing data, it can&apos;t
        determine who to trust, which insights matter, or what they mean for
        solving real-world problems. For these we need collective sensemaking -
        the synthesis of knowledge distributed among many individuals - to
        transform information overload into collective understanding.
      </Text>
      <Text>
        Cosmik is helping create the research networks to support this future:
        open, collaborative, and built for rapid feedback and iteration.
        We&apos;re designing for{" "}
        <Anchor href="#projects" fw={600}>AI-augmented social knowledge networks</Anchor> that are
        machine-readable and delightful to use.
      </Text>
      <Text>
        Beyond technology, we are also co-creating the ecosystem necessary for
        systems change - building a network of organizations and catalyzing the
        movements that will transform how research is shared, recognized, and
        who can participate in it.
      </Text>
    </Stack>
  );
}
