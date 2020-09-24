import React from 'react';
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


export default {
  title: 'Inline',
  component: Crest,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Just_the_Crest = () => <Crest title="" />;

export const AustralianGovernment = () => <span>TODO</span>;

export const SingleAgency = () => (
  <span>TODO</span>
);

export const MultipleAgencies = () => (
  <span>TODO</span>
);

export const AnAustralianGovernmentInitiative = () => (
  <span>TODO</span>
);

export const SingleAgencyWithHierarchy = () => (
  <span>TODO</span>
);

export const SingleAgencyWithDistinctBranding = () => (
  <span>TODO</span>
);

export const SingleAgencyWithCoBranding = () => (
  <span>TODO</span>
);