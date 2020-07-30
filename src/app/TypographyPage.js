import React from "react";

import Box from "../components/elements/Box";
import Container from "../components/elements/Container";
import Heading from "../components/elements/Heading";
import Page from "../components/elements/Page";
import Text from "../components/elements/Text";

const TypographyPage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}>
        <Box mb={4}>
          <Heading as="h1" mb={1} size="xxxl">
            Heading 1
          </Heading>
          <Heading as="h2" mb={1} size="xxl">
            Heading 2
          </Heading>
          <Heading as="h3" mb={1} size="xl">
            Heading 3
          </Heading>
          <Heading as="h4" mb={1} size="l">
            Heading 4
          </Heading>
          <br />
          <Heading as="h5" color="textInfo" mb={1} size="m">
            Info heading 5
          </Heading>
          <Heading as="h5" color="textSuccess" mb={1} size="m">
            Success heading 5
          </Heading>
          <Heading as="h6" color="textWarning" mb={1} size="m">
            Warning heading 6
          </Heading>
          <Heading as="h6" color="textDanger" mb={1} size="m">
            Danger heading 6
          </Heading>
        </Box>
        <Box mb={4}>
          <Text mb={2}>
            Basic text... I'm baby poke waistcoat craft beer aesthetic leggings everyday carry pinterest
            knausgaard thundercats bespoke yuccie. Asymmetrical heirloom art party, food truck meh trust fund
            leggings celiac 3 wolf moon tofu vegan chia organic.
          </Text>
          <Text color="secondary" mb={2}>
            Secondary. Kale chips subway tile wolf lomo +1 fashion axe.
          </Text>
          <Text color="secondary" mb={2} size="m">
            Medium size, secondary. Kale chips subway tile wolf lomo +1 fashion axe.
          </Text>
          <Text as="span" color="textDanger" size="s">
            Small, error (danger) text. Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <br />
          <Text color="textInfo" mb={1} mt={4}>
            Info text... Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textSuccess" mb={1}>
            Success text... Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textWarning" mb={1}>
            Warning text... Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textDanger" mb={1}>
            Danger text... Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <ul>
            <Text as="li">List item</Text>
            <Text as="li" color="textInfo">
              Colored list item
            </Text>
            <Text as="li" color="muted">
              Muted list item
            </Text>
          </ul>
        </Box>
      </Container>
    </Page>
  );
};

export default TypographyPage;
