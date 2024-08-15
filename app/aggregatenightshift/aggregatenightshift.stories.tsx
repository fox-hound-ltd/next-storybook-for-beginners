import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AggregateNightShift from './aggregatenightshift';
import { AggregateNightShiftData } from './types';

const aggregatenightshifts: AggregateNightShiftData = {
  data: [
    {
      name: '作業者名1',
      count: 10,
    },
  ],
};

const meta: Meta<typeof AggregateNightShift> = {
  title: 'aggregatenightshift/AggregateNightShift',
  component: AggregateNightShift,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1500px]">
        <Story />
      </div>
    ),
  ],
  args: {
    aggregatenightshifts,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
