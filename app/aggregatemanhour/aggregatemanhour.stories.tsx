import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AggregateManHour from './aggregatemanhour';
import { AggregateManHourData } from './types';

const aggregatemanours: AggregateManHourData = {
  data: [
    {
      name: '現場１',
      startAt: '2019-08-24',
      endAt: '2019-08-24',
      manHour: 1,
      totalManHour: 1,
    },
  ],
};

const meta: Meta<typeof AggregateManHour> = {
  title: 'aggregatemanour/AggregateManHour',
  component: AggregateManHour,
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
    aggregatemanhours: aggregatemanours,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
