import type { Meta, StoryObj } from '@storybook/react';

import { TextGenerating } from './TextGenerating';

const meta: Meta<typeof TextGenerating> = {
  component: () => {
    return (
      <div className='bg-black w-screen h-screen flex items-center justify-center'>
        <TextGenerating />
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof TextGenerating>;

export const Default: Story = {
    args: {
    },
};