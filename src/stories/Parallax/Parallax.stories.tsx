import type { Meta, StoryObj } from '@storybook/react';

import { Parallax } from './Parallax';

const meta: Meta<typeof Parallax> = {
  component: () => {
    return (
      <Parallax />
    );
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Parallax>;

export const Default: Story = {
    args: {
    },
};