import { Button, Center, Container, Stack, Title } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <Container>                  
      <Center h={"65svh"}>
        <Stack align="center">
          <Title order={1}>Page not found</Title>
          <Button
            component="a"
            href="/"
            variant="light"
            rightSection={<FaArrowRight />}
          >
            Go to home page
          </Button>
        </Stack>
      </Center>
    </Container>
  );
}
