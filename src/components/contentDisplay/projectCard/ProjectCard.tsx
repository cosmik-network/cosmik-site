import {
  ActionIcon,
  Badge,  
  Card,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { FaGithub, FaCircle } from "react-icons/fa6";

interface Props {
  name: string;
  description: string;
  logo?: string;
  year: number;
  status: "archived" | "ongoing";
  githubLink: string;
}

export default function ProjectCard(props: Props) {
  return (
    <Card withBorder bg={"gray.0.5"} w={300}>
      <Stack>
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
        <Text c={"gray"} fw={500} maw={200}>
          {props.description}
        </Text>
        <Group justify="space-between" mt={100}>
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
          <ActionIcon
            component="a"
            href={props.githubLink}
            target="_blank"
            size="lg"
            color={"gray.5"}
          >
            <FaGithub />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
}
