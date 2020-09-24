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
  <Crest
    title={text("Title", "OFFICE OF THE PRIME MINISTER")}
  />
);

export const Senator = () => (
  <Crest
    title={text("Title", "SENATOR George Pearce")}
  />
);

export const PastMinisters = () => (
  <Crest
    title={text("Title", "THE HONOURABLE KEVIN RUDD AC\n26th Prime Minister of Australia")}
  />
);