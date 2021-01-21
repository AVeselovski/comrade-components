import React from "react";
// components
import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Card from "../components/patterns/Card";
import Button from "../components/elements/Button";
import IconButton, { ActionButton } from "../components/elements/IconButton";
import Icon from "../components/elements/Icon";

const PatternsPage = () => {
  return (
    <Page>
      <Container>
        <div className="grid">
          <div className="col-12 col-md-6 col-lg-4">
            <Card bg="surface">
              <Card.Header>
                <h4>Card title</h4>
                <ActionButton btnSize="sm">
                  <Icon name="options" style={{ transform: "rotate(90deg)" }} />
                </ActionButton>
              </Card.Header>
              <Card.Body>
                <strong>This is a card with Header, Body and Item(s). Match and build as necessary.</strong>{" "}
                Mumblecore hot chicken tacos butcher deep v yr. Jianbing pork belly cardigan organic kombucha.
                <Card.Item mt={3}>
                  Item 1
                  <IconButton btnSize="sm">
                    <Icon name="chevron-down-small" />
                  </IconButton>
                </Card.Item>
                <Card.Item>
                  item 2
                  <IconButton btnSize="sm">
                    <Icon name="chevron-down-small" />
                  </IconButton>
                </Card.Item>
                <Card.Item>
                  item 3
                  <IconButton btnSize="sm">
                    <Icon name="chevron-down-small" />
                  </IconButton>
                </Card.Item>
                <Button fullWidth mt={2}>
                  <i className="fas fa-plus mr-2"></i>Add something
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default PatternsPage;
