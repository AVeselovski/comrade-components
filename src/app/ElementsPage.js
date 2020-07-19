import React from "react";

import Box from "../components/elements/Box";
import Container from "../components/elements/Container";
import Heading from "../components/elements/Heading";
import IconButton from "../components/elements/IconButton";
import Icon from "../components/elements/Icon";
import Page from "../components/elements/Page";

const ElementsPage = () => {
  return (
    <Page bg="bg" py={5} pt={120}>
      <Container px={[3, 4]}>
        <Heading as="h2" mb={4} size="xxl">
          Links
        </Heading>
        <div className="mb-5">
          <a className="mx-2" href="#">
            Default link
          </a>
          <a className="link-success mx-2" href="#">
            Success link
          </a>
          <a className="link-success active mx-2" href="#">
            Success (active)
          </a>
          <a className="link-danger mx-2" href="#">
            Danger
          </a>
          <a className="link-warning mx-2" href="#">
            Warning
          </a>
          <a className="link-dark mx-2" href="#">
            Dark link
          </a>
          <a className="link-light mx-2" href="#">
            Light link
          </a>
          <a className="link-info mx-2" href="#">
            Info link (why not...)
          </a>
        </div>
        <Heading as="h2" mb={4} size="xxl">
          Buttons
        </Heading>
        <div className="mb-2">
          <button className="btn btn-primary btn-l m-1">Primary large</button>
          <button className="btn btn-inverted-primary btn-m m-1">Primary inverted medium</button>
          <button className="btn btn-secondary btn-s m-1">Secondary small</button>
          <button className="btn btn-ghost btn-s m-1">Default (ghost) light</button>
          <button className="btn btn-ghost-dark btn-s m-1">Default (ghost) dark</button>
        </div>
        <div className="mb-4">
          <button className="btn btn-success m-1">Success</button>
          <button className="btn btn-inverted-success m-1">Success</button>
          <button className="btn btn-warning m-1">Warning</button>
          <button className="btn btn-inverted-warning m-1">Warning</button>
          <button className="btn btn-danger m-1">Danger</button>
          <button className="btn btn-inverted-danger m-1">Danger</button>
          <button className="btn btn-primary m-1" disabled>
            Disabled
          </button>
          <button className="btn btn-inverted-secondary m-1" disabled>
            Disabled
          </button>
          <div className="flex mt-3">
            <button className="btn btn-inverted-secondary btn-full mx-1">Full width</button>
            <button className="btn btn-info btn-full mx-1">Full width</button>
          </div>
        </div>
        <Heading as="h3" color="secondary" mb={3} size="l">
          Cross styles
        </Heading>
        <div className="mb-5">
          <button className="link-danger btn-m">Link styled button</button>
          <a className="btn btn-success m-1" href="#">
            Button link
          </a>
        </div>
        <Heading as="h2" mb={4} size="xxl">
          Icons
        </Heading>
        <div className="mb-5">
          <Icon name="chevron-down" />
          <Icon name="chevron-left" />
          <Icon name="chevron-right" />
          <Icon name="chevron-up" />
          <Box display="inline-block" p={2} />
          <Icon name="chevron-down-small" />
          <Icon name="chevron-left-small" />
          <Icon name="chevron-right-small" />
          <Icon name="chevron-up-small" />
          <Box display="inline-block" p={2} />
          <Icon name="close" />
          <Icon name="close-small" />
          <Box display="inline-block" p={2} />
          <Icon name="plus" />
          <Icon name="plus-small" />
          <Box display="inline-block" p={2} />
          <Icon name="menu" />
          <Icon name="menu-small" />
          <Box display="inline-block" p={2} />
          <Icon name="options" />
          <Box display="inline-block" p={2} />
          <Icon name="delete" />
          <Icon name="edit" />
        </div>
        <Heading as="h2" mb={4} size="xxl">
          Icon Buttons
        </Heading>
        <div>
          <IconButton mx={1} p={2}>
            <Icon name="close-small" />
          </IconButton>
          <IconButton mx={1} p={2} type="highlight">
            <Icon name="close-small" />
          </IconButton>
          <IconButton lighten mx={1} p={2} type="highlight-dark">
            <Icon name="close-small" />
          </IconButton>
          <IconButton color="primary" lighten mx={2} p={2} type="button">
            <Icon name="edit" />
          </IconButton>
          <IconButton color="primary" mx={2} p={3} type="inverted-button">
            <Icon name="plus" />
          </IconButton>
        </div>
      </Container>
    </Page>
  );
};

export default ElementsPage;
