import { Meta, StoryObj } from '@storybook/react';

import EmployeeList from './employeelist';

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
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
