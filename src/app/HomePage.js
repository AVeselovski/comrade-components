import React from "react";
// components
import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Box from "../components/elements/Box";
import Heading from "../components/elements/Heading";
import Text from "../components/elements/Text";

const HomePage = () => {
  return (
    <Page>
      <Container>
        <Box as="article">
          <Heading>Comrade Styles & Components</Heading>
          <Heading as="h2">What is?</Heading>
          <Text fontWeight={1} size="md">
            React components and CSS library. Strongly influenced by Bootstarp 4, somewhat by Material UI.{" "}
            <strong>WIP</strong>.
          </Text>
          <Text>
            This guide / showcase contains both React components (comrade-components-react) and vanilla CSS
            (comrade-styles) complimenting each other. Whole UI is build with these, no "custom" styles
            applies. The switch between "Vanilla" and "React" loads vanilla CSS (comrade-styles) or React
            components (comrade-components-react) UI respectively. This page is React, so UI functionality
            (like switching theme, vanilla to React, etc.) is done with React. Vanilla CSS (comrade-styles)
            does not include JS, as it's meant to be adaptable to any framework. Docs (built with React
            Styleguidist) contain more usage examples and code "playgrounds" for React components and code
            snippets for vanilla CSS.
          </Text>
          <Heading as="h2">Why is?</Heading>
          <Text>
            While the goal is to eventually have a solid library, with which to build UI's fast, the truth is
            simply that it's just fun to have my own custom tailored CSS-library (and stupid-complicated React
            components) at my disposal.
          </Text>
          <h2>Todo (React):</h2>
          <ul>
            <li>
              <strike>Buttons</strike>
            </li>
            <li>
              <strike>Icon Buttons</strike>
            </li>
            <li>Tags</li>
            <li>Tabs</li>
            <li>Modals</li>
            <li>Dropdown</li>
            <li>
              <strike>Card</strike>
            </li>
          </ul>
        </Box>
      </Container>
    </Page>
  );
};

export default HomePage;
