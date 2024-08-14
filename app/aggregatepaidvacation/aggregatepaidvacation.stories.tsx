import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AggregatePaidVacation from './aggregatepaidvacation';
import { AggregatePaidVacationData } from './types';

const aggregatepaidvacations: AggregatePaidVacationData = {
  data: [
    {
      name: '社員１',
      count: 1,
      aggregationPeriod: '2022/04/30',
    },
  ],
};

const meta: Meta<typeof AggregatePaidVacation> = {
  title: 'aggregatemanour/AggregatePaidVacation',
  component: AggregatePaidVacation,
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
    aggregatepaidvacations,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
