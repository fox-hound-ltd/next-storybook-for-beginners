import { Meta, StoryObj } from '@storybook/react';

import Dashboard from './dashboard';
import { ChartData, DepositData, OrderData } from './types';

const meta = {
  title: 'Dashboard',
  component: Dashboard,
  args: {
    chart: {
      data: [
        { time: '00:00', amount: 0 },
        { time: '03:00', amount: 200 },
        { time: '06:00', amount: 600 },
        { time: '09:00', amount: 800 },
        { time: '12:00', amount: 1500 },
        { time: '15:00', amount: 2000 },
        { time: '18:00', amount: 2400 },
        { time: '21:00', amount: 2400 },
        { time: '24:00', amount: 2500 },
      ],
    } as ChartData,
    deposit: {
      data: {
        amount: 3024,
        date: '15 March, 2019',
      },
    } as DepositData,
    order: {
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
    } as OrderData,
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-full w-full p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dashboard>;
export default meta;

export const DashboardPage: StoryObj<typeof meta> = {};
