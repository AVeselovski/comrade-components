import React from "react";

import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Heading from "../components/elements/Heading";
import Box from "../components/elements/Box";
import Colors, { MainColors, MainColorsDark } from "../components/foundation/Colors";

const ColorsPage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}>
        <Heading as="h2" mb={4} size="xxl">
          Base colors
        </Heading>
        <Box mb={5}>
          <Colors />
        </Box>
        <Heading as="h2" mb={4} size="xxl">
          Main Colors
        </Heading>
        <Box mb={5}>
          <MainColors />
        </Box>
        <Heading as="h2" mb={4} size="xxl">
          Main Colors (dark theme)
        </Heading>
        <Box>
          <MainColorsDark />
        </Box>
      </Container>
    </Page>
  );
};

export default ColorsPage;
