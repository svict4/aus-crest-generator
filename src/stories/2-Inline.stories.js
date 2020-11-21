import React from "react";
import Crest from "../Crest";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "TODO/Inline",
  component: Crest,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Just_the_Crest = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
  // <Crest title="" svgHeight={number("SVG Height")} style="inline" />
);

export const AustralianGovernment = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
  // <Crest svgHeight={number("SVG Height")} style="inline" />
);

export const SingleAgency = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
  // <Crest
  //   agency="Department of Social Services"
  //   svgHeight={number("SVG Height")}
  //   style="inline"
  // />
);

export const MultipleAgencies = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
  // <Crest
  //   agency={text(
  //     "Agency",
  //     "Department of Health; Department of Foreign Affairs and Trade; Attorney-General's Department"
  //   )}
  //   svgHeight={number("SVG Height")}
  //   style="inline"
  // />
);

export const AnAustralianGovernmentInitiative = () => <span style={{marginLeft: '150px'}}>TODO</span>;

export const SingleAgencyWithHierarchy = () => <span style={{marginLeft: '150px'}}>TODO</span>;

export const SingleAgencyWithDistinctBranding = () => <span style={{marginLeft: '150px'}}>TODO</span>;

export const SingleAgencyWithCoBranding = () => <span style={{marginLeft: '150px'}}>TODO</span>;
