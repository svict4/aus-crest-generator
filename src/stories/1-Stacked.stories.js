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
  <Crest title="" svgHeight={number("SVG Height", 350)} style="stacked" />
);

export const AustralianGovernment = () => (
  <Crest svgHeight={number("SVG Height", 350)} style="stacked" />
);

export const SingleAgency = () => (
  <Crest
    agency={text("Agency", "Department of Social Services")}
    svgHeight={number("SVG Height", 350)}
    style="stacked"
  />
);

export const MultipleAgencies = () => (
  <Crest
    agency={text(
      "Agency",
      "Department of Health; Department of Foreign Affairs and Trade; Attorney-General's Department"
    )}
    svgHeight={number("SVG Height", 350)}
    style="stacked"
  />
);

export const AnAustralianGovernmentInitiative = () => (
  <Crest
    title={text("Agency", "An Australian Government Initiative")}
    svgHeight={number("SVG Height", 350)}
    style="stacked"
  />
);

export const SingleAgencyWithHierarchy = () => (
  <Crest
    agency={text("Agency", "Department of Industry and Science")}
    division={text("Division", "Office of the Chief Economist")}
  />
);

export const SingleAgencyWithDistinctBranding = () => (
  <Crest
    agency={text("Agency", "Australian Quarantine and Inspection Service")}
  />
);

export const SingleAgencyWithCoBranding = () => (
  <span style={{ marginLeft: "150px" }}>TODO</span>
);
