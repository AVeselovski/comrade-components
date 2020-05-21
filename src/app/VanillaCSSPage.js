import React from "react";

import Page from "../components/elements/Page";
import Container from "../components/elements/Container";

const VanillaCSSPage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}></Container>
    </Page>
  );
};

export default VanillaCSSPage;
