import React from 'react';
import { action } from '@storybook/addon-actions';
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


export default {
  title: 'Stacked',
  component: Crest,
  decorators: [withKnobs],
};

export const Just_the_Crest = () => <Crest title="" />;

export const AustralianGovernment = () => <Crest />;

export const SingleAgency = () => (
  <Crest agency={text('Agency', "Department of Social Services")} />
);

export const MultipleAgencies = () => (
  <Crest />
);

export const AnAustralianGovernmentInitiative = () => (
  <Crest title={text('Agency', "An Australian Government Initiative")} />
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