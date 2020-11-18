import React from "react";
import Crest from "../Crest";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "Social",
  component: Crest,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const FaceboookOptimised = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
);

export const TwitterOptimised = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
);

export const LinkedInOptimised = () => (
  <span style={{marginLeft: '150px'}}>TODO</span>
);