import type { Meta, StoryObj } from '@storybook/react';

import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  component: Cards,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const HoverCards: Story = {
    args: {
    },
};