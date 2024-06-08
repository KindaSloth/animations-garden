import type { Meta, StoryObj } from '@storybook/react';

import { Notifications } from './Notifications';

const meta: Meta<typeof Notifications> = {
  component: Notifications,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Notifications>;

export const Default: Story = {
    args: {
    },
};