import { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';

import HelloComponent from './hello';

const meta = {
  title: 'Example/Hello',
  component: HelloComponent,
  args: {
    onSubmit: fn(),
    message: '',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HelloComponent>;
export default meta;

export const Hello: StoryObj<typeof meta> = {};

export const Message: StoryObj<typeof meta> = {
  args: {
    message: 'message',
  },
};
