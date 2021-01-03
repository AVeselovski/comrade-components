import React from "react";

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <article>
          <h1>Comrade Styles & Components</h1>
          <h2>What is?</h2>
          <p className="text-lead">
            React components and CSS library. Strongly influenced by Bootstarp 4, somewhat by Material UI.{" "}
            <strong>WIP</strong>.
          </p>
          <p>
            This guide / showcase contains both React components (comrade-components-react) and vanilla CSS
            (comrade-styles) complimenting each other. Whole UI is build with these, no "custom" styles
            applies. The switch between "Vanilla" and "React" loads vanilla CSS (comrade-styles) or React
            components (comrade-components-react) UI respectively. This page is React, so UI functionality
            (like switching theme, vanilla to React, etc.) is done with React. Vanilla CSS (comrade-styles)
            does not include JS, as it's meant to be adaptable to any framework. Docs (built with React
            Styleguidist) contain more usage examples and code "playgrounds" for React components and code
            snippets for vanilla CSS.
          </p>
          <h2>Why is?</h2>
          <p>
            While the goal is to eventually have a solid library, with which to build UI's fast, the truth is
            simply that it's just fun to have my own custom tailored CSS-library (and stupid-complicated React
            components) at my disposal.
          </p>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
