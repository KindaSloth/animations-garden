import type { Meta, StoryObj } from '@storybook/react';

import { ScrollReveal } from './ScrollReveal';

const meta: Meta<typeof ScrollReveal> = {
  component: () => {
    return (
      <div className='bg-black w-screen h-screen flex items-center justify-center'>
        <ScrollReveal />
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const Default: Story = {
    args: {
    },
};