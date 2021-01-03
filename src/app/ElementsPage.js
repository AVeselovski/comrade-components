import React from "react";
// components
import Box from "../components/elements/Box";
import IconButton from "../components/elements/IconButton";
import Icon from "../components/elements/Icon";
import Page from "../components/elements/Page";
import Container from "../components/elements/Container";

const ElementsPage = () => {
  return (
    <Page>
      <Container full>
        <div className="grid">
          <div className="col-12 col-md-6">
            <div className="box">
              <h2>Basic elements</h2>
              <h3>Links</h3>
              <div className="box bg-white is-flex mb-3">
                <a className="mr-2" href="#">
                  Default link
                </a>
                <a className="is-active mr-2" href="#">
                  Default (active)
                </a>
                <a className="link-danger mr-2" href="#">
                  Danger
                </a>
                <a className="link-success mr-2" href="#">
                  Success
                </a>
                <a className="link-warning" href="#">
                  Warning
                </a>
              </div>
              <p>
                Class <code>link-light</code> and <code>link-dark</code> for dark and light background/theme
                respectively. For navigation or "secondary" button alternatives.
              </p>
              <div className="box is-flex bg-white mb-3">
                <a className="link-dark" href="#">
                  Light BG link
                </a>
              </div>
              <div className="box is-flex bg-black mb-4">
                <a className="link-light mr-2" href="#">
                  Dark BG link
                </a>
              </div>

              <h3>Buttons</h3>
              <p>
                Append <code>-dark</code> to button class names for dark background and / or theme - version
                (for example dark bg header). Classes <code>btn-default btn-ghost btn-secondary</code> are all
                the same button, all of those apply for now.{" "}
                <i>
                  This will very likely change in later versions. <code>btn-default</code> will remain as is.
                </i>
              </p>
              <div className="box bg-white mb-3">
                <div className="is-flex mb-2">
                  <button className="mr-1">Unstyled</button>
                  <button className="btn btn-default mr-1">Default (light BG)</button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-primary btn-lg mb-1 mr-1">Primary LG</button>
                  <button className="btn btn-inverted-primary mb-1 mr-1">Primary inverted MD</button>
                  <button className="btn btn-secondary btn-sm mb-1">Secondary SM</button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-info btn-lg mb-1 mr-1">Info LG</button>
                  <button className="btn btn-inverted-info btn-lg mb-1 mr-1">
                    <i className="fas fa-info-circle mr-1"></i>Info LG
                  </button>
                  <button className="btn btn-danger mb-1 mr-1">Danger</button>
                  <button className="btn btn-inverted-danger mb-1 mr-1">
                    <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                  </button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-success mb-1 mr-1">
                    <i className="fas fa-check-circle mr-1"></i>Success
                  </button>
                  <button className="btn btn-inverted-success mb-1 mr-1">Success</button>
                  <button className="btn btn-warning mb-1 mr-1">
                    <i className="fas fa-exclamation-circle mr-1"></i>Warning
                  </button>
                  <button className="btn btn-inverted-warning mb-1 mr-1">Warning</button>
                </div>
                <div className="is-flex mb-3">
                  <button className="btn btn-primary mb-1 mr-1" disabled>
                    Primary (disabled)
                  </button>
                  <button className="btn btn-inverted-danger mb-1 mr-1" disabled>
                    Danger (disabled)
                  </button>
                  <button className="btn btn-secondary mb-1 mr-1" disabled>
                    Danger (disabled)
                  </button>
                </div>
                <div>
                  <button className="btn btn-secondary btn-full mb-2">Full width secondary</button>
                  <button className="btn btn-primary btn-lg btn-full">Full width primary LG</button>
                </div>
              </div>

              <div className="box bg-black mb-4">
                <div className="is-flex mb-3">
                  <button className="btn btn-ghost-dark">Default (dark BG)</button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-primary-dark btn-lg mb-1 mr-1">Primary LG</button>
                  <button className="btn btn-inverted-primary-dark mb-1 mr-1">Primary inverted MD</button>
                  <button className="btn btn-secondary-dark btn-sm mb-1">Secondary SM</button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-info-dark btn-lg mb-1 mr-1">Info LG</button>
                  <button className="btn btn-inverted-info-dark btn-lg mb-1 mr-1">
                    <i className="fas fa-info-circle mr-1"></i>Info LG
                  </button>
                  <button className="btn btn-danger-dark mb-1 mr-1">Danger</button>
                  <button className="btn btn-inverted-danger-dark mb-1 mr-1">
                    <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                  </button>
                </div>
                <div className="is-flex mb-2">
                  <button className="btn btn-success-dark mb-1 mr-1">
                    <i className="fas fa-check-circle mr-1"></i>Success
                  </button>
                  <button className="btn btn-inverted-success-dark mb-1 mr-1">Success</button>
                  <button className="btn btn-warning-dark mb-1 mr-1">
                    <i className="fas fa-exclamation-circle mr-1"></i>Warning
                  </button>
                  <button className="btn btn-inverted-warning-dark mb-1 mr-1">Warning</button>
                </div>
                <div className="is-flex mb-3">
                  <button className="btn btn-primary-dark mb-1 mr-1" disabled>
                    Primary (disabled)
                  </button>
                  <button className="btn btn-inverted-danger-dark mb-1 mr-1" disabled>
                    Danger (disabled)
                  </button>
                  <button className="btn btn-secondary-dark mb-1 mr-1" disabled>
                    Danger (disabled)
                  </button>
                </div>
                <div>
                  <button className="btn btn-secondary-dark btn-full mb-2">Full width secondary</button>
                  <button className="btn btn-primary-dark btn-lg btn-full">Full width primary LG</button>
                </div>
              </div>

              <h4>Cross styles</h4>
              <div className="box bg-white mb-4">
                <button className="link-danger btn-m">Link styled button</button>
                <a className="btn btn-success m-1" href="#">
                  Button link
                </a>
              </div>

              <h3>SVG Icons</h3>
              <div className="box is-flex mb-4">
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
              </div>

              <h3>Icon buttons</h3>
              <div className="box mb-4">
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

              <h3>Card / Box</h3>
              <p>
                Card and box can be somewhat interchangeable. Box is just a card with padding, without child
                elements. Both exist for semantic convenience.
              </p>
              <div className="box mb-3">
                <strong>Basic box / card.</strong> Intelligentsia plaid brooklyn chartreuse typewriter
                asymmetrical. Single-origin coffee keytar yuccie chartreuse.
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <h4>Card title</h4>
                </div>
                <div className="card-body">
                  I'm baby try-hard YOLO pok pok snackwave, chambray af cardigan knausgaard flannel ethical
                  adaptogen plaid 90's artisan unicorn. Mumblecore hot chicken tacos butcher deep v yr.
                  Jianbing pork belly cardigan organic kombucha.
                  <div className="card-item mt-3">Item 1</div>
                  <div className="card-item">item 2</div>
                  <div className="card-item">item 3</div>
                </div>
              </div>

              <div className="box bg-success text-white mb-3">
                <strong>"Success" colored box / card.</strong> Coloring book gentrify swag, gastropub portland
                pork belly selfies seitan poke ramps. Glossier man bun la croix, fam williamsburg small batch
                mixtape pok pok schlitz vice sustainable intelligentsia vaporware letterpress.
              </div>

              <div className="box bg-white text-black mb-3">
                <h4>Simple box (or card)</h4>
                <strong>Light colored box / card.</strong> PBR&B la croix truffaut put a bird on it, neutra
                readymade vinyl banjo. Distillery 3 wolf moon woke bitters tousled typewriter viral kitsch,
                listicle raclette dreamcatcher palo santo succulents. Austin activated charcoal edison bulb
                helvetica hexagon.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="box">
              <h2>Form elements</h2>
              <h3>Text input</h3>
              <p>Just to demonstrate some of the basic input usage...</p>
              <div className="box bg-white mb-3">
                <input id="text-input_1-1" placeholder="Simple input" type="text" />
                <input className="is-error" id="text-input_1-2" placeholder="Input with error" type="text" />
                <input disabled id="text-input_1-3" placeholder="Disabled input" type="text" />
              </div>

              <div className="box bg-white mb-3">
                <input id="text-input_2-1" placeholder="Search..." type="search" />
                <div className="input-container">
                  <label htmlFor="text-input_2-2">Date</label>
                  <input id="text-input_2-2" type="date" />
                </div>
                <div className="input-container">
                  <label htmlFor="text-input_2-3">Password</label>
                  <input id="text-input_2-3" type="password" />
                </div>
              </div>

              <div className="box bg-white mb-3">
                <div className="input-container is-info">
                  <label htmlFor="text-input_3-4">Label</label>
                  <input id="text-input_3-4" type="text" />
                  <span>Input with info state!</span>
                </div>

                <div className="input-container is-error">
                  <label htmlFor="text-input_3-1">Label</label>
                  <input id="text-input_3-1" type="text" />
                  <span>Input with error state!</span>
                </div>

                <div className="input-container is-success">
                  <label htmlFor="text-input_3-3">Label</label>
                  <input id="text-input_3-3" type="text" />
                  <span>Input with success state!</span>
                </div>

                {/* 
                  label, input and span classes should be unnecessary, if using these appropriate elements.
                  They exist to be useful when dealing with different elements and / or nested ones. 
                */}

                <div className="input-container is-warning">
                  <label className="input-legend" htmlFor="text-input_3-2">
                    Label
                  </label>
                  <input className="input" id="text-input_3-2" type="text" />
                  <span className="input-text">Input with warning state!</span>
                </div>
              </div>

              <div className="box bg-white mb-4">
                <div className="input-container">
                  <label>Textarea</label>
                  <textarea></textarea>
                </div>
                <div className="input-container is-error">
                  <label>Textarea</label>
                  <textarea></textarea>
                  <span>Textarea with error state!</span>
                </div>
              </div>

              <h3>Select</h3>
              <div className="box bg-white mb-4">
                <div className="input-container">
                  <label>Select</label>
                  <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="input-container is-error">
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
              </div>

              <h3>Checkbox and radio</h3>
              <div className="box bg-white mb-3">
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
                  <div className="check-container-inline is-error">
                    <input id="check_6" type="checkbox" />
                    <label htmlFor="check_6">Danger</label>
                  </div>
                  <div className="check-container-inline is-success">
                    <input id="check_8" type="checkbox" />
                    <label htmlFor="check_8">Safe</label>
                  </div>
                  <div className="check-container-inline is-warning">
                    <input id="check_7" type="checkbox" />
                    <label htmlFor="check_7">Warning</label>
                  </div>
                </div>

                <input className="mr-2" id="check_9" type="checkbox" />
                <input className="mr-2 is-error" id="check_10" type="checkbox" />
                <input disabled className="mr-2" id="check_10" type="checkbox" />
              </div>

              <div className="box bg-white mb-3">
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
                  <div className="radio-container radio-lg is-error">
                    <input type="radio" id="radio-2-2" name="radio-2-set" />
                    <label htmlFor="radio-2-2">Big & dangerous</label>
                  </div>
                  <div className="radio-container radio-lg is-success">
                    <input type="radio" id="radio-2-1" name="radio-2-set" />
                    <label htmlFor="radio-2-1">Big & safe</label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="radio-container-inline">
                    <input type="radio" id="radio-3-1" name="radio-3-set" />
                    <label htmlFor="radio-3-1">Normal</label>
                  </div>
                  <div className="radio-container-inline is-error">
                    <input type="radio" id="radio-3-2" name="radio-3-set" />
                    <label htmlFor="radio-3-2">Danger</label>
                  </div>
                  <div className="radio-container-inline is-success">
                    <input type="radio" id="radio-3-4" name="radio-3-set" />
                    <label htmlFor="radio-3-4">Safe</label>
                  </div>
                  <div className="radio-container-inline is-warning">
                    <input type="radio" id="radio-3-3" name="radio-3-set" />
                    <label htmlFor="radio-3-3">Warning</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default ElementsPage;
