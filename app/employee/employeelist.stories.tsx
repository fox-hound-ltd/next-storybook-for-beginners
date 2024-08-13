import { Meta, StoryObj } from '@storybook/react';

import EmployeeList from './employeelist';
import { Employee, Partner } from './types';

const employees: Employee = {
  data: [
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f081',
      name: 'サンプル',
      email: 'test99@example.com',
      phone: '080-1234-1234',
      initial: 'S',
      hiredDate: '2021-01-01',
      color: '#FF0000',
      isCalendarVisible: true,
      role: '管理者',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f082',
      name: '八尋 祐輝',
      email: 'aoi15@gmail.com',
      phone: '080-1234-1234',
      initial: 'Y',
      hiredDate: '2021-01-01',
      color: '#FF0000',
      isCalendarVisible: true,
      role: '管理者',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f083',
      name: '北島 蓮也',
      email: 'aoi14@gmail.com',
      phone: '080-1234-1234',
      initial: 'H',
      hiredDate: '2021-01-01',
      color: '#FF0000',
      isCalendarVisible: true,
      role: '管理者',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f084',
      name: '千々岩 友惟',
      email: 'aoi12@gmail.com',
      phone: '080-1234-1234',
      initial: 'C',
      hiredDate: '2021-01-01',
      color: '#FF0000',
      isCalendarVisible: true,
      role: '管理者',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f082',
      name: '吉单 禮秀一',
      email: 'aoi11@gmail.com',
      phone: '080-1234-1234',
      initial: 'Y',
      hiredDate: '2021-01-01',
      color: '#FF0000',
      isCalendarVisible: true,
      role: '管理者',
    },
  ],
};

const partners: Partner = {
  data: [
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      name: '赤星設備',
      initial: 'A',
      phone: '080-1234-1234',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f09',
      name: '吉川空調設備',
      initial: 'Y',
      phone: '080-1234-1234',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f10',
      name: '田中空調設備',
      initial: 'T',
      phone: '080-1234-1234',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f11',
      name: '阪口さん',
      initial: 'S',
      phone: '080-1234-1234',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f12',
      name: '岩森',
      initial: 'I',
      phone: '080-1234-1234',
    },
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f13',
      name: 'YMD',
      initial: 'Y',
      phone: '080-1234-1234',
    },
  ],
};

const meta: Meta<typeof EmployeeList> = {
  title: 'employee/EmployeeList',
  component: EmployeeList,
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
    employees,
    partners,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
