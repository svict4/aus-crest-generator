import React from 'react';
import { action } from '@storybook/addon-actions';
import Crest from "../Crest";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'DFAT',
  component: Crest,
  decorators: [withKnobs],
};

export const AustralianHighCommission = () => <Crest title="Australian High Commission" />;

export const SingleAgency = () => (
  <Crest />
);