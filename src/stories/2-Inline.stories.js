import React from 'react';
import { action } from '@storybook/addon-actions';
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Inline',
  component: Crest,
  decorators: [withKnobs],
};

export const AustralianGovernment = () => <Crest />;

export const SingleAgency = () => (
  <Crest />
);

export const MultipleAgencies = () => (
  <Crest />
);

export const AnAustralianGovernmentInitiative = () => (
  <Crest />
);

export const SingleAgencyWithHierarchy = () => (
  <Crest />
);

export const SingleAgencyWithDistinctBranding = () => (
  <Crest />
);

export const SingleAgencyWithCoBranding = () => (
  <Crest />
);