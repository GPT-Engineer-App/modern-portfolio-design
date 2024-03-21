import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white">
      {/* Navigation */}
      <Box as="nav" position="sticky" top={0} bg="white" zIndex={10} boxShadow="sm">
        <Container maxW="container.lg" py={4}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" color="blue.600">
              My Portfolio
            </Heading>
            <Flex align="center">
              <Link mx={4} color="gray.600" _hover={{ color: "blue.600" }}>
                Services
              </Link>
              <Link mx={4} color="gray.600" _hover={{ color: "blue.600" }}>
                Portfolio
              </Link>
              <Link mx={4} color="gray.600" _hover={{ color: "blue.600" }}>
                Testimonials
              </Link>
              <Link mx={4} color="gray.600" _hover={{ color: "blue.600" }}>
                Blog
              </Link>
              <Button colorScheme="blue" size="lg" ml={4}>
                Connect
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.50" pt={24} pb={48} position="relative">
        <Container maxW="container.lg">
          <VStack spacing={6} align="start" maxW="xl">
            <Heading as="h2" size="2xl" color="blue.800">
              I Build Custom Website Solutions That Help Your Business Grow
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Elevate your online presence with a professional, high-performing website tailored to your business needs.
            </Text>
            <Flex>
              <Button colorScheme="blue" size="lg" rightIcon={<FaArrowRight />}>
                Start a project
              </Button>
              <Button variant="outline" colorScheme="blue" size="lg" ml={4}>
                See my work
              </Button>
            </Flex>
          </VStack>
        </Container>
        <Box position="absolute" bottom={-12} left="50%" transform="translateX(-50%)">
          <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzbWlsaW5nJTIwaGVhZHNob3R8ZW58MHx8fHwxNzExMDQ3OTU0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Headshot" borderRadius="full" boxSize={48} objectFit="cover" boxShadow="lg" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bgImage="url('data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d8e3f3' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" bgSize="auto" bgRepeat="repeat" opacity={0.2}></Box>
      </Box>

      {/* More sections: Services, Portfolio, Testimonials, Blog, Contact... */}
    </Box>
  );
};

export default Index;
