import { Meta, StoryObj } from '@storybook/react';

import Component from './order';

const meta = {
  title: 'dashboard/Order',
  component: Component,
  args: {
    data: [
      {
        id: 1,
        date: '16 Mar, 2019',
        name: 'Elvis Presley',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
      },
      {
        id: 2,
        date: '23 Mar, 2019',
        name: 'Paul McCartney',
        shipTo: 'London, UK',
        paymentMethod: 'VISA ⠀•••• 2574',
        amount: 866.99,
      },
      {
        id: 3,
        date: '03 Apr, 2019',
        name: 'Tom Scholz',
        shipTo: 'Boston, MA',
        paymentMethod: 'MC ⠀•••• 1253',
        amount: 100.81,
      },
      {
        id: 4,
        date: '04 Apr, 2019',
        name: 'Michael Jackson',
        shipTo: 'Gary, IN',
        paymentMethod: 'AMEX ⠀•••• 2000',
        amount: 654.39,
      },
      {
        id: 5,
        date: '05 Apr, 2019',
        name: 'Bruce Springsteen',
        shipTo: 'Long Branch, NJ',
        paymentMethod: 'VISA ⠀•••• 5919',
        amount: 212.79,
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Order: StoryObj<typeof meta> = {};
