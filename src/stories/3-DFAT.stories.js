import React from 'react';
import { action } from '@storybook/addon-actions';
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'DFAT',
  component: Crest,
  decorators: [withKnobs],
};

export const AustralianGovernment = () => <Crest />;

export const SingleAgency = () => (
  <Crest />
);