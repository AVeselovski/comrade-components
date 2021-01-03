import React from "react";
// components
import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Box from "../components/elements/Box";
import Heading from "../components/elements/Heading";
import Text from "../components/elements/Text";

const TypographyPage = () => {
  return (
    <Page>
      <Container>
        <Box as="section" my={5}>
          <Heading as="h1">
            Typography <small>Heading 1</small>
          </Heading>
          <Heading as="h2">
            Heading 2 <small>Subheading</small>
          </Heading>
          <Heading as="h3">
            Heading 3 <small>Subheading</small>
          </Heading>
          <Heading as="h4">
            Heading 4 <small>Subheading</small>
          </Heading>
          <Heading as="h5" color="textInfo">Info heading 5</Heading>
          <Heading as="h5" color="textDanger" size="md">Danger heading 5</Heading>
          <Heading as="h6" color="textSuccess">Success heading 6</Heading>
          <Heading as="h6" color="textWarning" size="md">Warning heading 6</Heading>
          <Text>
            Basic text, with a link. I'm baby poke <strong>waistcoat craft beer aesthetic</strong> leggings everyday carry pinterest
            knausgaard thundercats bespoke yuccie. Asymmetrical heirloom art party, food truck meh trust fund
            leggings celiac 3 wolf moon tofu vegan <a href="#">chia organic</a>. Vexillologist plaid chartreuse godard tumblr
            bespoke try-hard keffiyeh cray gochujang. <i>Jianbing slow-carb vexillologist prism air plant migas
            roof party typewriter vice DIY paleo.</i>
          </Text>
          <Text color="secondary">Secondary text. Kale chips subway tile wolf lomo +1 fashion axe.</Text>
          <Text color="secondary" size="md">
            Medium size, secondary text. Kale chips subway tile wolf lomo +1 fashion axe.
          </Text>
          <Text as="span" color="textDanger" display="block" mb={3} size="sm">
            Small, error (danger) text. Kale chips subway tile wolf lomo +1 fashion axe.
          </Text>
          <Text color="textInfo">
            Info text. Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textDanger">
            Danger text. Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textSuccess">
            Success text. Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Text color="textWarning">
            Warning text. Woke before they sold out bushwick bicycle rights small batch.
          </Text>
          <Box as="ul">
            <Text as="li">List item 1</Text>
            <Text as="li">List item 2</Text>
            <Text as="li" color="textInfo">Info colored list item</Text>
            <Text as="li" color="textMuted">Muted list item</Text>
          </Box>
          <Box as="ol">
            <Text as="li" color="textDanger">Danger colored ordered item</Text>
            <Text as="li" color="textSuccess">Success colored ordered item</Text>
            <Text as="li">Ordered item</Text>
            <Text as="li">Ordered item</Text>
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default TypographyPage;
