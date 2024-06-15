import type { Meta, StoryObj } from '@storybook/react';

import { SvgMorph } from './SvgMorph';

const meta: Meta<typeof SvgMorph> = {
  component: () => {
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <SvgMorph />
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof SvgMorph>;

export const Default: Story = {
    args: {
    },
};