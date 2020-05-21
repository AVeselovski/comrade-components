import React from "react";

import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Heading from "../components/elements/Heading";
import Text from "../components/elements/Text";

const HomePage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}>
        <Heading as="h1" mb={4} size="xxxl">
          Comrade Styles & Components
        </Heading>
        <Heading as="h2" mb={4} size="xl">
          What is?
        </Heading>
        <Text mb={2}>
          CSS and React components library. Somewhat influenced by Bootstarp 4, somewhat by Material UI.{" "}
          <strong>WIP</strong>.
        </Text>
        <Text mb={4}>
          This guide/showcase contains both React-components (comrade-components-react) and vanilla CSS
          (comrade-styles) complimenting each other. All the UI is build with these, page UI is
          `comrade-components` and pages content `comrade-styles`. No "custom" styles applied. Docs (built
          with React Styleguidist) contain usage examples for both React components and vanilla CSS.
        </Text>
        <Heading as="h2" mb={4} size="xl">
          Why is?
        </Heading>
        <Text mb={2}>
          While the goal is to eventually have a solid library, with which to build UI's fast, the main
          motivation is that it's just fun to have your own custom tailored CSS-library (and over-complicated
          React components) at your disposal.
        </Text>
      </Container>
    </Page>
  );
};

export default HomePage;
