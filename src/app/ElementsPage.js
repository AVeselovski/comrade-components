import React from "react";
import propTypes from "prop-types";
// components
import Button from "../components/elements/Button";
import Link from "../components/elements/Link";
import IconButton, { ActionButton } from "../components/elements/IconButton";
import Icon from "../components/elements/Icon";
import Page from "../components/elements/Page";
import Container from "../components/elements/Container";
import Box from "../components/elements/Box";
import Card from "../components/patterns/Card";

const ElementsPage = ({ isMobile = false }) => {
  return (
    <Page>
      <Container full>
        <div className="grid">
          <div className="col-12 col-md-6">
            <Box bg={!isMobile && "surface"} card={!isMobile}>
              <h2>Basic elements</h2>
              <h3>Links</h3>
              <p>Basic links. Can be button alternatives (duh).</p>
              <Box card mb={3}>
                <Link mr={2} href="#">
                  Default link
                </Link>
                <Link isActive mr={2} href="#">
                  Default (active)
                </Link>
                <Link color="dangerText" mr={2} href="#">
                  <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                </Link>
                <Link color="successText" mr={2} href="#">
                  <i className="fas fa-check-circle mr-1"></i>Success
                </Link>
                <Link color="warningText" href="#">
                  <i className="fas fa-exclamation-circle mr-1"></i>Warning
                </Link>
              </Box>
              <p>
                Color <code>light</code> and <code>dark</code> for dark and light background / theme
                respectively. Mostly for navigation (or button alternatives).
              </p>
              <Box bg="white" card mb={3}>
                <Link color="dark" href="#">
                  Light BG link
                </Link>
              </Box>
              <Box bg="black" card mb={4}>
                <Link color="light" href="#">
                  Dark BG link
                </Link>
              </Box>

              <h3>Buttons</h3>
              <p>
                Color scheme tied to theme's <code>colorScheme</code>.
              </p>
              <Box card mb={4}>
                <div className="mb-2">
                  <Button mr={1}>Unstyled</Button>
                  <Button>Default (light BG)</Button>
                </div>
                <div className="mb-2">
                  <Button mb={1} mr={1} size="lg" type="primary">
                    Primary LG
                  </Button>
                  <Button inverted mb={1} mr={1} type="primary">
                    Primary inverted MD
                  </Button>
                  <Button mb={1} size="sm" type="secondary">
                    Secondary SM
                  </Button>
                </div>
                <div className="mb-2">
                  <Button mb={1} mr={1} type="info">
                    Info LG
                  </Button>
                  <Button inverted mb={1} mr={1} type="info">
                    <i className="fas fa-info-circle mr-1"></i>Info LG
                  </Button>
                  <Button mb={1} mr={1} type="danger">
                    Danger
                  </Button>
                  <Button inverted mb={1} type="danger">
                    <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                  </Button>
                </div>
                <div className="mb-2">
                  <Button mb={1} mr={1} type="success">
                    <i className="fas fa-check-circle mr-1"></i>Success
                  </Button>
                  <Button inverted mb={1} mr={1} type="success">
                    Success
                  </Button>
                  <Button mb={1} mr={1} type="warning">
                    <i className="fas fa-exclamation-circle mr-1"></i>Warning
                  </Button>
                  <Button inverted mb={1} type="warning">
                    Warning
                  </Button>
                </div>
                <div className="mb-3">
                  <Button disabled mb={1} mr={1} type="primary">
                    Primary (disabled)
                  </Button>
                  <Button disabled inverted mb={1} mr={1} type="danger">
                    Danger (disabled)
                  </Button>
                  <Button disabled mb={1} mr={1} type="secondary">
                    Secondary (disabled)
                  </Button>
                </div>
                <div>
                  <Button fullWidth mb={2} type="secondary">
                    Full width secondary
                  </Button>
                  <Button fullWidth size="lg" type="primary">
                    Full width primary LG
                  </Button>
                </div>
              </Box>

              <h3>SVG Icons</h3>
              <Box card mb={4}>
                <div className="mb-2 mr-3">
                  <Icon name="chevron-down" />
                  <Icon name="chevron-left" />
                  <Icon name="chevron-right" />
                  <Icon name="chevron-up" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="chevron-down-small" />
                  <Icon name="chevron-left-small" />
                  <Icon name="chevron-right-small" />
                  <Icon name="chevron-up-small" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="close" />
                  <Icon name="close-small" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="plus" />
                  <Icon name="plus-small" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="menu" />
                  <Icon name="menu-small" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="options" />
                </div>
                <div className="mb-2 mr-3">
                  <Icon name="delete" />
                  <Icon name="edit" />
                </div>
              </Box>

              <h3>Icon buttons</h3>
              <h6>SVG</h6>
              <Box card mb={3}>
                <IconButton btnSize="lg" mb={2} mr={2}>
                  <Icon name="plus" />
                </IconButton>
                <IconButton btnSize="lg" mb={2} mr={2}>
                  <Icon name="menu" />
                </IconButton>
                <IconButton btnSize="md" mb={2} mr={2}>
                  <Icon name="menu-small" />
                </IconButton>
                <IconButton btnSize="md" mb={2} mr={2}>
                  <Icon name="options" />
                </IconButton>
                <IconButton mb={2} mr={2}>
                  <Icon name="close-small" />
                </IconButton>
                <IconButton btnSize="sm" btnStyle="info" mb={2} mr={2}>
                  <Icon name="edit" />
                </IconButton>
                <IconButton btnSize="sm" btnStyle="danger" mb={2} mr={2}>
                  <Icon name="delete" />
                </IconButton>
                <IconButton btnSize="sm" btnStyle="success" mb={2} mr={2}>
                  <Icon name="plus-small" />
                </IconButton>
                <IconButton btnSize="sm" btnStyle="warning" mb={2} mr={2}>
                  <Icon name="close-small" />
                </IconButton>
              </Box>

              <h6>Font Awesome</h6>
              <Box card mb={3}>
                <IconButton btnSize="lg" mb={2} mr={2}>
                  <i className="fas fa-search"></i>
                </IconButton>
                <IconButton btnSize="lg" mb={2} mr={2}>
                  <i className="fas fa-bars"></i>
                </IconButton>
                <IconButton btnSize="md" mb={2} mr={2}>
                  <i className="fas fa-bars"></i>
                </IconButton>
                <IconButton btnStyle="info" mb={2} mr={2}>
                  <i className="far fa-question-circle"></i>
                </IconButton>
                <IconButton btnStyle="danger" mb={2} mr={2}>
                  <i className="far fa-times-circle"></i>
                </IconButton>
                <IconButton btnStyle="success" mb={2} mr={2}>
                  <i className="fas fa-plus-circle"></i>
                </IconButton>
                <IconButton btnStyle="warning" mb={2} mr={2}>
                  <i className="far fa-bell"></i>
                </IconButton>
              </Box>

              <h6>Action Buttons</h6>
              <Box card mb={4}>
                <Box mb={2}>
                  <ActionButton btnSize="lg" btnStyle="primary" mb={2} mr={2}>
                    <Icon name="plus-small" />
                  </ActionButton>
                  <ActionButton btnSize="md" btnStyle="primary" inverted mb={2} mr={2}>
                    <Icon name="options" />
                  </ActionButton>
                  <ActionButton btnSize="sm" mb={2} mr={2}>
                    <i className="fas fa-search"></i>
                  </ActionButton>
                  <ActionButton btnSize="sm" mb={2} mr={2}>
                    <i className="fas fa-bars"></i>
                  </ActionButton>
                  <ActionButton btnSize="sm" mb={2} mr={2}>
                    <Icon name="menu-small" />
                  </ActionButton>
                  <ActionButton btnSize="sm" mb={2} mr={2}>
                    <Icon name="close-small" />
                  </ActionButton>
                </Box>
                <ActionButton btnStyle="info" mb={2} mr={2}>
                  <Icon name="edit" />
                </ActionButton>
                <ActionButton btnStyle="info" inverted mb={2} mr={2}>
                  <Icon name="edit" />
                </ActionButton>
                <ActionButton btnStyle="danger" mb={2} mr={2}>
                  <Icon name="delete" />
                </ActionButton>
                <ActionButton btnStyle="danger" inverted mb={2} mr={2}>
                  <Icon name="delete" />
                </ActionButton>
                <ActionButton btnStyle="success" mb={2} mr={2}>
                  <Icon name="plus-small" />
                </ActionButton>
                <ActionButton btnStyle="success" inverted mb={2} mr={2}>
                  <Icon name="plus-small" />
                </ActionButton>
                <ActionButton btnStyle="warning" mb={2} mr={2}>
                  <Icon name="close-small" />
                </ActionButton>
                <ActionButton btnStyle="warning" inverted mb={2}>
                  <Icon name="close-small" />
                </ActionButton>
              </Box>

              <h3>Card / Box</h3>
              <p>
                Card and Box can be somewhat interchangeable. Box can be displayed as a simple Card, without
                Card inner structure, useful for basic "well" like elements. Both exist for convenience,
                semantic and otherwise.
              </p>
              <Box card mb={3}>
                <strong>Box as Card.</strong> Intelligentsia plaid brooklyn chartreuse typewriter
                asymmetrical. Single-origin coffee keytar yuccie chartreuse.
              </Box>
              <Card card mb={3}>
                <Card.Body>
                  <strong>Card.</strong> Intelligentsia plaid brooklyn chartreuse typewriter asymmetrical.
                  Single-origin coffee keytar yuccie chartreuse.
                </Card.Body>
              </Card>
              <Box bg="success" card color="white" mb={3}>
                <strong>"Success" colored Box / Card.</strong> Coloring book gentrify swag, gastropub portland
                pork belly selfies seitan poke ramps. Glossier man bun la croix, fam williamsburg small batch
                mixtape pok pok schlitz vice sustainable intelligentsia vaporware letterpress.
              </Box>
              <Box bg="white" card color="black" mb={3}>
                <h4>Simple Box (or Card)</h4>
                <strong>Light colored box / card.</strong> PBR&B la croix truffaut put a bird on it, neutra
                readymade vinyl banjo. Distillery 3 wolf moon woke bitters tousled typewriter viral kitsch,
                listicle raclette dreamcatcher palo santo succulents. Austin activated charcoal edison bulb
                helvetica hexagon.
              </Box>
            </Box>
          </div>

          <div className="col-12 col-md-6">
            <Box bg={!isMobile && "surface"} card={!isMobile}>
              <h2>Form elements</h2>
              <h3>Text input</h3>
              <p>Just to demonstrate some of the basic input usage...</p>
              <Box card mb={3}>
                <input id="text-input_1-1" placeholder="Simple input" type="text" />
                <input className="error" id="text-input_1-2" placeholder="Input with error" type="text" />
                <input disabled id="text-input_1-3" placeholder="Disabled input" type="text" />
              </Box>

              <Box card mb={3}>
                <input id="text-input_2-1" placeholder="Search..." type="search" />
                <div className="input-container">
                  <label htmlFor="text-input_2-2">Date</label>
                  <input id="text-input_2-2" type="date" />
                </div>
                <div className="input-container">
                  <label htmlFor="text-input_2-3">Password</label>
                  <input id="text-input_2-3" type="password" />
                </div>
              </Box>

              <Box card mb={3}>
                <div className="input-container info">
                  <label htmlFor="text-input_3-4">Label</label>
                  <input id="text-input_3-4" type="text" />
                  <span>Input with info state!</span>
                </div>

                <div className="input-container error">
                  <label htmlFor="text-input_3-1">Label</label>
                  <input id="text-input_3-1" type="text" />
                  <span>Input with error state!</span>
                </div>

                <div className="input-container success">
                  <label htmlFor="text-input_3-3">Label</label>
                  <input id="text-input_3-3" type="text" />
                  <span>Input with success state!</span>
                </div>

                {/* 
                  label, input and span classes should be unnecessary, if using these appropriate elements.
                  They exist to be useful when dealing with different elements and / or nested ones. 
                */}

                <div className="input-container warning">
                  <label className="input-legend" htmlFor="text-input_3-2">
                    Label
                  </label>
                  <input className="input" id="text-input_3-2" type="text" />
                  <span className="input-text">Input with warning state!</span>
                </div>
              </Box>

              <Box card mb={3}>
                <div className="input-container input-dark">
                  <label htmlFor="text-input_3-4">Label</label>
                  <input id="text-input_3-4" placeholder="Simple input" type="text" />
                </div>

                <div className="input-container input-dark info">
                  <label htmlFor="text-input_3-4">Label</label>
                  <input id="text-input_3-4" type="text" />
                  <span>Input with info state!</span>
                </div>

                <div className="input-container input-dark error">
                  <label htmlFor="text-input_3-1">Label</label>
                  <input id="text-input_3-1" type="text" />
                  <span>Input with error state!</span>
                </div>

                <div className="input-container input-dark success">
                  <label htmlFor="text-input_3-3">Label</label>
                  <input id="text-input_3-3" type="text" />
                  <span>Input with success state!</span>
                </div>

                <div className="input-container input-dark warning">
                  <label htmlFor="text-input_3-2">Label</label>
                  <input id="text-input_3-2" type="text" />
                  <span>Input with warning state!</span>
                </div>
              </Box>

              <Box card mb={4}>
                <div className="input-container">
                  <label>Textarea</label>
                  <textarea></textarea>
                </div>
                <div className="input-container error">
                  <label>Textarea</label>
                  <textarea></textarea>
                  <span>Textarea with error state!</span>
                </div>
              </Box>

              <h3>Select</h3>
              <Box card mb={4}>
                <div className="input-container">
                  <label>Select</label>
                  <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="input-container error">
                  <label>Select</label>
                  <select defaultValue="">
                    <option disabled value="">
                      -- Select an option
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <span>Select with error state!</span>
                </div>
              </Box>

              <h3>Checkbox and radio</h3>
              <Box card mb={3}>
                <div className="mb-3">
                  <div className="check-container">
                    <input id="check_1" type="checkbox" />
                    <label htmlFor="check_1">Checkbox 1</label>
                  </div>
                  <div className="check-container">
                    <input disabled id="check_2" type="checkbox" />
                    <label htmlFor="check_2">Checkbox 2</label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="check-container check-lg">
                    <input id="check_3" type="checkbox" />
                    <label htmlFor="check_3">Checkbox 3</label>
                  </div>
                  <div className="check-container check-lg">
                    <input disabled id="check_4" type="checkbox" />
                    <label htmlFor="check_4">Checkbox 4</label>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="check-container-inline">
                    <input id="check_5" type="checkbox" />
                    <label htmlFor="check_5">Normal</label>
                  </div>
                  <div className="check-container-inline error">
                    <input id="check_6" type="checkbox" />
                    <label htmlFor="check_6">Danger</label>
                  </div>
                  <div className="check-container-inline success">
                    <input id="check_8" type="checkbox" />
                    <label htmlFor="check_8">Safe</label>
                  </div>
                  <div className="check-container-inline warning">
                    <input id="check_7" type="checkbox" />
                    <label htmlFor="check_7">Warning</label>
                  </div>
                </div>

                <input className="mr-2" id="check_9" type="checkbox" />
                <input className="mr-2 error" id="check_10" type="checkbox" />
                <input disabled className="mr-2" id="check_10" type="checkbox" />
              </Box>

              <Box card mb={3}>
                <div className="mb-3">
                  <div className="radio-container">
                    <input type="radio" id="radio-1-1" name="radio-1-set" value="Male" />
                    <label htmlFor="radio-1-1">Male</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="radio-1-2" name="radio-1-set" value="Female" />
                    <label htmlFor="radio-1-2">Female</label>
                  </div>
                  <div className="radio-container">
                    <input disabled type="radio" id="radio-1-3" name="radio-1-set" value="Other" />
                    <label htmlFor="radio-1-3">Other</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="radio-1-4" name="radio-1-set" value="Xenomorph" />
                    <label htmlFor="radio-1-4">Xenomorph</label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="radio-container radio-lg error">
                    <input type="radio" id="radio-2-2" name="radio-2-set" />
                    <label htmlFor="radio-2-2">Big & dangerous</label>
                  </div>
                  <div className="radio-container radio-lg success">
                    <input type="radio" id="radio-2-1" name="radio-2-set" />
                    <label htmlFor="radio-2-1">Big & safe</label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="radio-container-inline">
                    <input type="radio" id="radio-3-1" name="radio-3-set" />
                    <label htmlFor="radio-3-1">Normal</label>
                  </div>
                  <div className="radio-container-inline error">
                    <input type="radio" id="radio-3-2" name="radio-3-set" />
                    <label htmlFor="radio-3-2">Danger</label>
                  </div>
                  <div className="radio-container-inline success">
                    <input type="radio" id="radio-3-4" name="radio-3-set" />
                    <label htmlFor="radio-3-4">Safe</label>
                  </div>
                  <div className="radio-container-inline warning">
                    <input type="radio" id="radio-3-3" name="radio-3-set" />
                    <label htmlFor="radio-3-3">Warning</label>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </Page>
  );
};

ElementsPage.propTypes = {
  isMobile: propTypes.bool
};

export default ElementsPage;
