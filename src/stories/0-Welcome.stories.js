import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

export const ToStorybook = () => (
  <article
    style={{
      padding: 15,
      lineHeight: 1.4,
      fontFamily:
        '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      backgroundColor: "#fff",
      color: "#000",
    }}
  >
    <h1>Australian Government Crest Branding SVG generator</h1>
    <p>
      This storybook generates logos using the Coat of Arms that follow the
      guidelines.
    </p>
    <p>
      If you want rasterised images instead, check out{" "}
      <a href="https://github.com/apigovau/crest-branding">
        apigovau/crest-branding
      </a>{" "}
      which was the inspiration for this project.
    </p>
    <p>
      While you can poke around and export the <code>{"<Crest>"}</code>{" "}
      component for use in your own React project, it's not great code and not
      optimized.
      <br />
      You're better off using it to generate images and then serve them
      yourself.
    </p>
  </article>
);

ToStorybook.story = {
  name: "to Storybook",
};
