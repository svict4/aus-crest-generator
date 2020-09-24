import React from "react";
import Crest from "../Crest";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "Stacked",
  component: Crest,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Just_the_Crest = () => (
  <Crest title="" svgHeight={number("SVG Height")} style="stacked" />
);

export const AustralianGovernment = () => (
  <Crest svgHeight={number("SVG Height")} style="stacked" />
);

export const SingleAgency = () => (
  <Crest
    agency={text("Agency", "Department of Social Services")}
    svgHeight={number("SVG Height")}
    style="stacked"
  />
);

export const MultipleAgencies = () => (
  <Crest
    agency={text(
      "Agency",
      "Department of Health; Department of Foreign Affairs and Trade; Attorney-General's Department"
    )}
    svgHeight={number("SVG Height")}
    style="stacked"
  />
);

export const AnAustralianGovernmentInitiative = () => (
  <Crest
    title={text("Agency", "An Australian Government Initiative")}
    svgHeight={number("SVG Height")}
    style="stacked"
  />
);

export const SingleAgencyWithHierarchy = () => <span>TODO</span>;

export const SingleAgencyWithDistinctBranding = () => <span>TODO</span>;

export const SingleAgencyWithCoBranding = () => <span>TODO</span>;
