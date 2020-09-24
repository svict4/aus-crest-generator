import React from "react";
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "DFAT",
  component: Crest,
  decorators: [withKnobs],
};

export const AustralianHighCommission = () => (
  <Crest
    title={text("Title", "Australian High Commission")}
    agency={text("Agency", "United Kingdom")}
  />
);

export const AustralianEmbassy = () => (
  <Crest
    title={text("Title", "Australian Embassy")}
    agency={text("Agency", "Thailand")}
  />
);

export const AustralianConsulate = () => (
  <Crest
    title={text("Title", "Australian Consulate-General")}
    agency={text("Agency", "Ho Chi Minh City, Vietnam")}
  />
);