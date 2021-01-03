import React from "react";

const ArticlePage = () => {
  return (
    <div className="page">
      <div className="container">
        <article className="my-5">
          <h1>
            Post / Article basics <small>Heading 1</small>
          </h1>
          <p className="text-lead">
            <strong>
              This showcases basic styling (and overrides) inside article element. For text content such as
              articles and posts.
            </strong>{" "}
            I'm baby snackwave la croix aesthetic vinyl locavore echo park VHS mumblecore cliche banjo you
            probably haven't heard of them letterpress man braid enamel pin. Tilde portland echo park,
            humblebrag brooklyn sartorial kitsch scenester truffaut. Etsy austin neutra pour-over raw{" "}
            <a href="#">denim biodiesel</a>.
          </p>
          <p>
            I'm baby health goth kickstarter fanny pack lumbersexual, cliche seitan beard slow-carb gentrify
            biodiesel air plant hoodie dreamcatcher.
            <strong>
              Cray truffaut kinfolk, chambray hot chicken authentic poutine craft beer selvage meditation
              tumblr irony paleo schlitz.
            </strong>
            Tilde gastropub typewriter hella pug green juice, godard heirloom wayfarers taiyaki health goth la
            croix you probably haven't heard of them. Letterpress vinyl brunch, hoodie williamsburg tattooed
            mumblecore art party knausgaard portland.
            <i>PBR&B kombucha skateboard coloring book subway tile raclette unicorn.</i>
          </p>
          <h2>Heading 2</h2>
          <p className="text-default">
            Af kale chips leggings, put a bird on it hexagon sustainable pug. XOXO cronut distillery sriracha
            single-origin coffee banh mi iPhone fashion axe schlitz pitchfork marfa keffiyeh kale chips.
            Chartreuse umami selvage gentrify slow-carb twee.
          </p>
          <p className="text-secondary">
            Secondary text. Waistcoat fixie seitan cronut salvia meditation taiyaki. Health goth stumptown
            pabst irony shoreditch poke. VHS aesthetic four dollar toast chartreuse, dreamcatcher meh lyft
            kickstarter. Mlkshk bushwick pinterest readymade post-ironic keytar locavore.
          </p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li className="text-secondary">Secondary text list item</li>
            <li>List item 3</li>
            <li className="text-muted">Muted list item</li>
          </ul>
          <ol>
            <li>Ordered item</li>
            <li>Ordered item</li>
            <li>
              <a href="#">Ordered link item</a>
            </li>
          </ol>
          <h3>Heading 3</h3>
          <p>
            Offal austin tilde hella direct trade palo santo messenger bag intelligentsia shabby chic you
            probably haven't heard of them street art. Pour-over whatever sartorial taiyaki, organic wayfarers
            taxidermy humblebrag flannel.
          </p>
          <p>
            Swag kickstarter biodiesel man braid iPhone farm-to-table, small batch YOLO cronut beard taxidermy
            umami vice stumptown hexagon. Austin vegan whatever, lumbersexual locavore fam meditation
            chillwave occupy paleo iPhone polaroid pok pok knausgaard forage. Blue bottle locavore gentrify, 3
            wolf moon disrupt hell of butcher beard hoodie.
          </p>
          <h4>
            Heading 4 <small>Subheading</small>
          </h4>
          <p>
            Cornhole affogato vegan ennui etsy +1 live-edge stumptown, wolf twee bespoke fanny pack copper
            mug. Wayfarers bitters lyft palo santo distillery four loko dreamcatcher. Readymade air plant tbh
            meggings scenester. Vinyl 3 wolf moon slow-carb meggings kogi, letterpress hoodie pok pok celiac
            kale chips. Selvage poutine affogato art party polaroid. Edison bulb viral sriracha ethical shabby
            chic. Selvage williamsburg yuccie, irony YOLO chia direct trade thundercats kale chips live-edge
            pickled skateboard pop-up.
          </p>
          <h5>Heading 5</h5>
          <p>
            Blue bottle chillwave man braid, synth cold-pressed flexitarian put a bird on it migas sartorial
            ugh pork belly. Fam semiotics schlitz chicharrones hoodie. Affogato leggings pour-over food truck
            hell of small batch. Neutra craft beer williamsburg hoodie keytar helvetica seitan flexitarian man
            braid biodiesel. Gluten-free williamsburg salvia, bushwick mixtape messenger bag jean shorts
            snackwave. Seitan microdosing bespoke sartorial, master cleanse mustache asymmetrical butcher
            taxidermy YOLO.
          </p>
          <h6>Heading 6</h6>
          <p>
            Neutra pug offal portland etsy vape mustache hashtag synth mumblecore kale chips try-hard four
            loko 90's. Next level salvia craft beer chicharrones offal bitters. Craft beer helvetica
            flexitarian kitsch squid glossier, pop-up master cleanse shoreditch kogi keffiyeh snackwave.
            Lumbersexual meh four dollar toast forage.
          </p>
          <h1>
            Heading 1 <small>Subheading</small>
          </h1>
          <h2>
            Heading 2 <small>Subheading</small>
          </h2>
          <h3>
            Heading 3 <small>Subheading</small>
          </h3>
          <h4>
            Heading 4 <small>Subheading</small>
          </h4>
          <h5>
            Heading 5 <small>Subheading</small>
          </h5>
          <h6>
            Heading 6 <small>Subheading</small>
          </h6>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
