import { Button, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH={"100vh"}>
      <Text>Page not found</Text>
      <Button>Go back</Button>
    </VStack>
  );
}
