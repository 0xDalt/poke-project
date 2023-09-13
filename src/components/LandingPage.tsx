import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, VStack, Heading, Button } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      h="60vh"
      pl="4" // Adjust the left padding as needed
    >
      <VStack spacing="4">
        <Heading as="h5" size="lg" mb="4">
          Welcome to PokeWars
        </Heading>
        <Button colorScheme="" id="btn" size="lg">
          <ConnectButton />
        </Button>
      </VStack>
    </Box>
  );
}

export default LandingPage;
