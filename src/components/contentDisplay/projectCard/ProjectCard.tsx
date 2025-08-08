import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { FaGithub, FaCircle } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  description: string;
  logo?: string;
  year: number;
  status: "archived" | "ongoing";
  githubLink: string;
  projectLink: string;
  backgroundImage: string;
}

export default function ProjectCard(props: Props) {
  const router = useRouter();

  return (
    <Card px={"md"} py={"xs"}>
      <Group justify="space-between" gap={0}>
        <Group gap={"xs"}>
          {props.logo && (
            <Image
              src={props.logo}
              alt={`${props.name} logo`}
              h={45}
              w={"auto"}
            />
          )}
          <Text fz={"lg"} fw={600}>
            {props.name}
          </Text>
        </Group>
        <Text c={"gray"} fw={500}>
          {props.description}
        </Text>
      </Group>

      <Anchor href={props.projectLink} target="_blank">
        <Image
          src={props.backgroundImage}
          radius={"md"}
          fit="contain"
          maw={700}
          my={"5"}
        />
      </Anchor>

      <Group justify="space-between">
        <Stack gap={0}>
          <Text c={"gray"} fz={"sm"} fw={500}>
            {props.year}
          </Text>
          <Group>
            <Badge
              variant="transparent"
              leftSection={<FaCircle size={8} />}
              c={props.status === "archived" ? "red" : "green"}
              px={0}
            >
              <Text ff={"monospace"} fz={"xs"} fw={600}>
                {props.status}
              </Text>
            </Badge>
          </Group>
        </Stack>
        <Button
          component="a"
          href={props.githubLink}
          target="_blank"
          variant="light"
          color="gray"
          leftSection={<FaGithub />}
        >
          GitHub
        </Button>
      </Group>
    </Card>
  );
}
