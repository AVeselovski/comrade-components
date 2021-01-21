import React from "react";
import propTypes from "prop-types";

const ElementsPage = ({ isMobile = false }) => {
  return (
    <div className="page">
      <div className="container-full grid">
        <div className="col-12 col-md-6">
          <div className={!isMobile ? "box" : ""}>
            <h2>Basic elements</h2>
            <h3>Links</h3>
            <p>Basic links. Can be button alternatives (duh).</p>
            <div className="box bg-bg flex mb-3">
              <a className="mr-2" href="#">
                Default link
              </a>
              <a className="active mr-2" href="#">
                Default (active)
              </a>
              <a className="link-danger mr-2" href="#">
                <i className="fas fa-exclamation-triangle mr-1"></i>Danger
              </a>
              <a className="link-success mr-2" href="#">
                <i className="fas fa-check-circle mr-1"></i>Success
              </a>
              <a className="link-warning" href="#">
                <i className="fas fa-exclamation-circle mr-1"></i>Warning
              </a>
            </div>
            <p>
              Class <code>link-light</code> and <code>link-dark</code> for dark and light background
              respectively. For navigation or "secondary" button alternatives.
            </p>
            <div className="box flex bg-white mb-3">
              <a className="link-dark" href="#">
                Light BG link
              </a>
            </div>
            <div className="box flex bg-black mb-4">
              <a className="link-light mr-2" href="#">
                Dark BG link
              </a>
            </div>

            <h3>Buttons</h3>
            <p>
              Classes <code>btn-default btn-secondary btn-ghost</code> are the same default button (for now).
            </p>
            <div className="box bg-bg mb-3">
              <div className="flex mb-2">
                <button className="mr-1">Unstyled</button>
                <button className="btn btn-default mr-1">Default (light BG)</button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-primary btn-lg mb-1 mr-1">Primary LG</button>
                <button className="btn btn-inverted-primary mb-1 mr-1">Primary inverted MD</button>
                <button className="btn btn-secondary btn-sm mb-1">Secondary SM</button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-info mb-1 mr-1">Info LG</button>
                <button className="btn btn-inverted-info mb-1 mr-1">
                  <i className="fas fa-info-circle mr-1"></i>Info LG
                </button>
                <button className="btn btn-danger mb-1 mr-1">Danger</button>
                <button className="btn btn-inverted-danger mb-1 mr-1">
                  <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                </button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-success mb-1 mr-1">
                  <i className="fas fa-check-circle mr-1"></i>Success
                </button>
                <button className="btn btn-inverted-success mb-1 mr-1">Success</button>
                <button className="btn btn-warning mb-1 mr-1">
                  <i className="fas fa-exclamation-circle mr-1"></i>Warning
                </button>
                <button className="btn btn-inverted-warning mb-1 mr-1">Warning</button>
              </div>
              <div className="flex mb-3">
                <button className="btn btn-primary mb-1 mr-1" disabled>
                  Primary (disabled)
                </button>
                <button className="btn btn-inverted-danger mb-1 mr-1" disabled>
                  Danger (disabled)
                </button>
                <button className="btn btn-secondary mb-1 mr-1" disabled>
                  Secondary (disabled)
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-full mb-2">Full width secondary</button>
                <button className="btn btn-primary btn-lg btn-full">Full width primary LG</button>
              </div>
            </div>

            <p>
              Append <code>-dark</code> to button class names for dark background - version (for example dark
              bg header).
            </p>
            <p>
              <i>
                TODO: Adjust colors and button color scheme to be more universal, to work both on light and
                dark backgrounds.
              </i>
            </p>
            <div className="box bg-black mb-4">
              <div className="flex mb-3">
                <button className="btn btn-dark btn-secondary">Default (dark BG)</button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-dark btn-primary btn-lg mb-1 mr-1">Primary LG</button>
                <button className="btn btn-dark btn-inverted-primary mb-1 mr-1">Primary inverted MD</button>
                <button className="btn btn-dark btn-secondary btn-sm mb-1">Secondary SM</button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-dark btn-info mb-1 mr-1">Info LG</button>
                <button className="btn btn-dark btn-inverted-info mb-1 mr-1">
                  <i className="fas fa-info-circle mr-1"></i>Info LG
                </button>
                <button className="btn btn-dark btn-danger mb-1 mr-1">Danger</button>
                <button className="btn btn-dark btn-inverted-danger mb-1 mr-1">
                  <i className="fas fa-exclamation-triangle mr-1"></i>Danger
                </button>
              </div>
              <div className="flex mb-2">
                <button className="btn btn-dark btn-success mb-1 mr-1">
                  <i className="fas fa-check-circle mr-1"></i>Success
                </button>
                <button className="btn btn-dark btn-inverted-success mb-1 mr-1">Success</button>
                <button className="btn btn-dark btn-warning mb-1 mr-1">
                  <i className="fas fa-exclamation-circle mr-1"></i>Warning
                </button>
                <button className="btn btn-dark btn-inverted-warning mb-1 mr-1">Warning</button>
              </div>
              <div className="flex mb-3">
                <button className="btn btn-dark btn-primary mb-1 mr-1" disabled>
                  Primary (disabled)
                </button>
                <button className="btn btn-dark btn-inverted-danger mb-1 mr-1" disabled>
                  Danger (disabled)
                </button>
                <button className="btn btn-dark btn-secondary mb-1 mr-1" disabled>
                  Secondary (disabled)
                </button>
              </div>
              <div>
                <button className="btn btn-dark btn-secondary btn-full mb-2">Full width secondary</button>
                <button className="btn btn-dark btn-primary btn-lg btn-full">Full width primary LG</button>
              </div>
            </div>

            <h3>Icon Buttons</h3>
            <p>
              Small variant <code>.btn-sm</code> is not meant to be used (although it exists). Links can and
              are meant to be used for text-sized button alternatives. For very small buttons{" "}
              <code>.btn-icon-highlight .btn-sm</code> is adviced instead.
            </p>
            <div className="box mb-3">
              <button className="btn-icon-simple btn-lg mr-2">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn-icon-simple btn-md mr-2">
                <i className="fas fa-bars"></i>
              </button>
              <button className="btn-icon-simple btn-info mr-2">
                <i className="far fa-question-circle"></i>
              </button>
              <button className="btn-icon-simple btn-danger mr-2">
                <i className="far fa-times-circle"></i>
              </button>
              <button className="btn-icon-simple btn-success mr-2">
                <i className="fas fa-plus-circle"></i>
              </button>
              <button className="btn-icon-simple btn-warning mr-2">
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div className="box bg-dark mb-3">
              <button className="btn-icon-simple btn-lg btn-dark mr-2">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn-icon-simple btn-dark mr-2">
                <i className="fas fa-bars"></i>
              </button>
              <button className="btn-icon-simple btn-info btn-dark mr-2">
                <i className="far fa-question-circle"></i>
              </button>
              <button className="btn-icon-simple btn-danger btn-dark mr-2">
                <i className="far fa-times-circle"></i>
              </button>
              <button className="btn-icon-simple btn-success btn-dark mr-2">
                <i className="fas fa-plus-circle"></i>
              </button>
              <button className="btn-icon-simple btn-warning btn-dark mr-2">
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div className="box mb-3">
              <div className="mb-2">
                <button className="btn-icon btn-primary btn-lg mr-2 mb-2">
                  <i className="fas fa-plus"></i>
                </button>
                <button className="btn-icon btn-inverted-primary btn-md mr-2 mb-2">
                  <i className="far fa-clone"></i>
                </button>
                <button className="btn-icon btn-sm mr-2 mb-2">
                  <i className="fas fa-bars"></i>
                </button>
                <button className="btn-icon btn-sm mr-2 mb-2">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="btn-icon btn-info mr-2 mb-2">
                <i className="fas fa-pen"></i>
              </button>
              <button className="btn-icon btn-inverted-info mr-2 mb-2">
                <i className="fas fa-pen"></i>
              </button>
              <button className="btn-icon btn-danger mr-2 mb-2">
                <i className="fas fa-times"></i>
              </button>
              <button className="btn-icon btn-inverted-danger mr-2 mb-2">
                <i className="fas fa-times"></i>
              </button>
              <button className="btn-icon btn-success mr-2 mb-2">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn-icon btn-inverted-success mr-2 mb-2">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn-icon btn-warning mr-2 mb-2">
                <i className="far fa-bell"></i>
              </button>
              <button className="btn-icon btn-inverted-warning mb-2">
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div className="box bg-dark mb-4">
              <div className="mb-2">
                <button className="btn-icon btn-dark btn-primary btn-lg mr-2 mb-2">
                  <i className="fas fa-plus"></i>
                </button>
                <button className="btn-icon btn-dark btn-inverted-primary btn-md mr-2 mb-2">
                  <i className="far fa-clone"></i>
                </button>
                <button className="btn-icon btn-dark btn-sm mr-2 mb-2">
                  <i className="fas fa-bars"></i>
                </button>
                <button className="btn-icon btn-dark btn-sm mr-2 mb-2">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="btn-icon btn-dark btn-info mr-2 mb-2">
                <i className="fas fa-pen"></i>
              </button>
              <button className="btn-icon btn-dark btn-inverted-info mr-2 mb-2">
                <i className="fas fa-pen"></i>
              </button>
              <button className="btn-icon btn-dark btn-danger mr-2 mb-2">
                <i className="fas fa-times"></i>
              </button>
              <button className="btn-icon btn-dark btn-inverted-danger mr-2 mb-2">
                <i className="fas fa-times"></i>
              </button>
              <button className="btn-icon btn-dark btn-success mr-2 mb-2">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn-icon btn-dark btn-inverted-success mr-2 mb-2">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn-icon btn-dark btn-warning mr-2 mb-2">
                <i className="far fa-bell"></i>
              </button>
              <button className="btn-icon btn-dark btn-inverted-warning mb-2">
                <i className="far fa-bell"></i>
              </button>
            </div>

            <h3>Card / Box</h3>
            <p>
              Card and Box can be somewhat interchangeable. <code>.box</code> is just a <code>.card</code>{" "}
              with padding, without card structure. Both exist for semantic convenience.
            </p>
            <div className="box mb-3">
              <strong>Basic box.</strong> Intelligentsia plaid brooklyn chartreuse typewriter asymmetrical.
              Single-origin coffee keytar yuccie chartreuse.
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <strong>Basic card.</strong> Intelligentsia plaid brooklyn chartreuse typewriter asymmetrical.
                Single-origin coffee keytar yuccie chartreuse.
              </div>
            </div>
            <div className="box bg-success text-white mb-3">
              <strong>"Success" colored box / card.</strong> Coloring book gentrify swag, gastropub portland
              pork belly selfies seitan poke ramps. Glossier man bun la croix, fam williamsburg small batch
              mixtape pok pok schlitz vice sustainable intelligentsia vaporware letterpress.
            </div>
            <div className="box bg-bg text-black mb-3">
              <h4>Simple box (or card)</h4>
              <strong>Light colored box / card.</strong> PBR&B la croix truffaut put a bird on it, neutra
              readymade vinyl banjo. Distillery 3 wolf moon woke bitters tousled typewriter viral kitsch,
              listicle raclette dreamcatcher palo santo succulents. Austin activated charcoal edison bulb
              helvetica hexagon.
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className={!isMobile ? "box" : ""}>
            <h2>Form elements</h2>
            <h3>Text input</h3>
            <p>Just to demonstrate some of the basic input usage...</p>
            <div className="box bg-bg mb-3">
              <input id="text-input_1-1" placeholder="Simple input" type="text" />
              <input className="error" id="text-input_1-2" placeholder="Input with error" type="text" />
              <input disabled id="text-input_1-3" placeholder="Disabled input" type="text" />
            </div>

            <div className="box bg-bg mb-3">
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

            <div className="box bg-bg mb-3">
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
            </div>

            <div className="box bg-bg mb-4">
              <div className="input-container">
                <label>Textarea</label>
                <textarea></textarea>
              </div>
              <div className="input-container error">
                <label>Textarea</label>
                <textarea></textarea>
                <span>Textarea with error state!</span>
              </div>
            </div>

            <h3>Select</h3>
            <div className="box bg-bg mb-4">
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
            </div>

            <h3>Checkbox and radio</h3>
            <div className="box bg-bg mb-3">
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
            </div>

            <div className="box bg-bg mb-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ElementsPage.propTypes = {
  isMobile: propTypes.bool
};

export default ElementsPage;
