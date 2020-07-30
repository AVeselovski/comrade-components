import React from "react";

import Container from "../components/elements/Container";
import Heading from "../components/elements/Heading";
import Page from "../components/elements/Page";

const VanillaCSSPage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}>
        <Heading as="h2" mb={4} size="xxl">
          Vanilla way (default light theme only)
        </Heading>
        <div className="mb-4">
          <h1 className="heading-1 mb-1">Heading 1</h1>
          <h2 className="heading-2 mb-1">Heading 2</h2>
          <h3 className="heading-3 mb-1">Heading 3</h3>
          <h4 className="heading-4 mb-1">Heading 4</h4>
          <br />
          <h5 className="text-info mb-1">Info heading 5</h5>
          <h5 className="heading-5 text-success mb-1">Success heading 5</h5>
          <h6 className="text-warning mb-1">Warning heading 6</h6>
          <h6 className="heading-6 text-danger mb-1">Danger heading 6</h6>
        </div>
        <div className="mb-4">
          <p className="text-base mb-2">
            Basic text... I'm baby poke waistcoat craft beer aesthetic leggings everyday carry pinterest
            knausgaard thundercats bespoke yuccie. Asymmetrical heirloom art party, food truck meh trust fund
            leggings celiac 3 wolf moon tofu vegan chia organic.
          </p>
          <p className="text-base secondary mb-2">
            Secondary. Kale chips subway tile wolf lomo +1 fashion axe.
          </p>
          <p className="text-m secondary mb-2">
            Medium size, secondary. Kale chips subway tile wolf lomo +1 fashion axe.
          </p>
          <span className="text-s text-danger">
            Small, error (danger) text. Woke before they sold out bushwick bicycle rights small batch.
          </span>
          <p className="text-info mb-1 mt-4">
            Info text... Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-success mb-1">
            Success text... Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-warning mb-1">
            Warning text... Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-danger mb-1">
            Danger text... Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <ul>
            <li>List item</li>
            <li className="text-info">Colored list item</li>
            <li className="muted">Muted list item</li>
          </ul>
        </div>
      </Container>
    </Page>
  );
};

export default VanillaCSSPage;
