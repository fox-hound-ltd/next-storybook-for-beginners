import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import SettingHolidayList from './settingholidaylist';
import { SettingHolidayListData } from './types';

const settingholidaylist: SettingHolidayListData = {
  data: [
    {
      id: 'c0b9b3a1-4a8b-3c8f-8d0e-0e6e8f3e2f4f',
      date: '2024-08-09',
      name: 'リフレッシュ休暇',
      isNationalHoliday: false,
    },
    {
      id: '8f7f09b9-603e-30e6-8d1f-ba30f9606175',
      date: '2024-01-01',
      name: '元日',
      isNationalHoliday: true,
    },
  ],
};

const meta: Meta<typeof SettingHolidayList> = {
  title: 'settingholidaylist/SettingHolidayList',
  component: SettingHolidayList,
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
    settingholidaylist,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
