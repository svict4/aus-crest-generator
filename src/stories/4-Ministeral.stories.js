import React from "react";
import Crest from "../Crest";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "Ministerial",
  component: Crest,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const PrimeMinister = () => (
  <Crest
    title={text("Title", "PRIME MINISTER")}
  />
);

export const OfficeOfPM = () => (
  <>
    <Crest
      svgHeight={number("SVG Height", 350)}
      title={text("Title", "OFFICE OF THE PRIME MINISTER")}
    />
  </>
);

export const MultipleMinistersOrOffices = () => (
  <>
    <Crest
      svgHeight={number("SVG Height", 350)}
      title={text("Title", "OFFICE OF THE PRIME MINISTER\nCHIEF OF STAFF")}
    />
  </>
);

export const Senator = () => (
  <Crest
    svgHeight={number("SVG Height", 350)}
    title={text("Title", "SENATOR GEORGE PEARCE")}
  />
);

export const PastMinisters = () => (
  <>
    <Crest
      svgHeight={number("SVG Height", 350)}
      title={text("Title", "THE HONOURABLE KEVIN RUDD AC\n26th Prime Minister of Australia")}
    />
  </>
);