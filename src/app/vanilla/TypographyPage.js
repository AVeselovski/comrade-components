import React from "react";

const TypographyPage = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="my-5">
          <h1 className="heading-1">
            Typography <small>Heading 1</small>
          </h1>
          <h2 className="heading-2">
            Heading 2 <small>Subheading</small>
          </h2>
          <h3 className="heading-3">
            Heading 3 <small>Subheading</small>
          </h3>
          <h4 className="heading-4">
            Heading 4 <small>Subheading</small>
          </h4>
          <h5 className="heading-5 text-info">Info heading 5</h5>
          <h5 className="text-danger">Danger heading 5</h5>
          <h6 className="heading-6 text-success">Success heading 6</h6>
          <h6 className="text-warning">Warning heading 6</h6>
          <p className="text-base">
            Basic text, with a link. I'm baby poke <strong>waistcoat craft beer aesthetic</strong> leggings everyday carry pinterest
            knausgaard thundercats bespoke yuccie. Asymmetrical heirloom art party, food truck meh trust fund
            leggings celiac 3 wolf moon tofu vegan <a href="#">chia organic</a>. Vexillologist plaid chartreuse godard tumblr
            bespoke try-hard keffiyeh cray gochujang. <i>Jianbing slow-carb vexillologist prism air plant migas
            roof party typewriter vice DIY paleo.</i>
          </p>
          <p className="text-secondary">Secondary text. Kale chips subway tile wolf lomo +1 fashion axe.</p>
          <p className="text-md text-secondary">
            Medium size, secondary text. Kale chips subway tile wolf lomo +1 fashion axe.
          </p>
          <span className="text-sm text-danger is-block mb-3">
            Small, error (danger) text. Kale chips subway tile wolf lomo +1 fashion axe.
          </span>
          <p className="text-info">
            Info text. Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-danger">
            Danger text. Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-success">
            Success text. Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <p className="text-warning">
            Warning text. Woke before they sold out bushwick bicycle rights small batch.
          </p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li className="text-info">Info colored list item</li>
            <li className="text-muted">Muted list item</li>
          </ul>
          <ol>
            <li className="text-danger">Danger colored ordered item</li>
            <li className="text-success">Success colored ordered item</li>
            <li>Ordered item</li>
            <li>Ordered item</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default TypographyPage;
