import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
  Text,
} from "@mantine/core";

export default function ValuesContainer() {
  return (
    <Accordion variant="contained">
      <AccordionItem value="1" bg="white">
        <AccordionControl py={"xs"}>
          <Text fz={"lg"} fw={500}>
            Enabling a permaculture of modular research
          </Text>
        </AccordionControl>
        <AccordionPanel>
          <Text>
            We’re working towards{" "}
            <Anchor
              href="https://www.shishyko.com/essays/public-systems-of-science.html"
              fw={600}
            >
              unpacking the research process
            </Anchor>{" "}
            into smaller, composable and connected units that enable large-scale
            open collaboration. These include hypotheses, observations,
            connections, and reviews that all merit recognition. Like open
            source software that thrives on modular contributions, we&apos;re
            creating infrastructure where every insight, from any contributor,
            can find its place in the collective knowledge graph.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="2" bg="white">
        <AccordionControl py={"xs"}>
          <Text fz={"lg"} fw={500}>
            Networks that elicit and reward knowledge sharing
          </Text>
        </AccordionControl>
        <AccordionPanel bg="white">
          <Text>
            New formats for publishing knowledge aren&apos;t enough - to make
            them worthwhile for researchers, we must <i>bring them to life</i>{" "}
            with delightful interfaces and meaningful social experiences.
            We&apos;re creating virtuous cycles where knowledge sharing creates
            immediate value - greater recognition, serendipitous discoveries,
            and new collaborations.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="3" bg="white">
        <AccordionControl py={"xs"}>
          <Text fz={"lg"} fw={500}>
            Built to stay open and interoperable
          </Text>
        </AccordionControl>
        <AccordionPanel bg="white">
          <Text>
            Small insights can become powerful building blocks when they&apos;re
            structured for discovery, interoperability and reuse. We leverage AI
            and decentralized publishing protocols like ATProto to ensure that
            knowledge isn&apos;t locked up in platforms or fragmented formats.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="4" bg="white">
        <AccordionControl py={"xs"}>
          <Text fz={"lg"} fw={500}>
            Networks by researchers, for researchers
          </Text>
        </AccordionControl>
        <AccordionPanel bg="white">
          <Text>
            Aggregated at scale, modular research contributions translate into
            value far greater than the sum of their parts. We leverage
            decentralized networks like ATProto to maintain data accessibility
            while keeping ownership in researchers&apos; hands. We&apos;re
            creating a co-op model so researchers can help shape, guide, and
            benefit from the ecosystem their contributions sustain.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
