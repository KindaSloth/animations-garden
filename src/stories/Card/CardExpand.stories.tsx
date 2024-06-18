import type { Meta, StoryObj } from '@storybook/react';

import { CardExpand } from './CardExpand';

const meta: Meta<typeof CardExpand> = {
  component: CardExpand,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof CardExpand>;

export const Default: Story = {
    args: {
    },
};