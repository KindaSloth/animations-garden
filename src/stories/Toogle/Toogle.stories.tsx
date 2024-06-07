import type { Meta, StoryObj } from '@storybook/react';

import { Toogle } from './Toogle';

const meta: Meta<typeof Toogle> = {
  component: Toogle,
};

export default meta;
type Story = StoryObj<typeof Toogle>;

export const Slider: Story = {
    args: {
    },
};