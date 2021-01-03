import React from "react";
// components
import Colors, { MainColors, MainColorsDark } from "../components/foundation/Colors";
import Page from "../components/elements/Page";

const ColorsPage = () => {
  return (
    <Page>
      <div className="container">
        <section className="my-5">
          <h2>Base colors</h2>
          <div className="mb-5">
            <Colors />
          </div>
          <h2>Main Colors</h2>
          <div className="mb-5">
            <MainColors />
          </div>
          <h2>Main Colors (dark theme)</h2>
          <div className="mb-5">
            <MainColorsDark />
          </div>
        </section>
      </div>
    </Page>
  );
};

export default ColorsPage;
