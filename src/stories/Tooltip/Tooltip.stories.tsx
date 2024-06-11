import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: () => {
      return (
          <Tooltip>
              <div className="w-24 h-24 bg-white border border-black rounded-full flex items-center justify-center">
                  <p>Hover me</p>
              </div>
          </Tooltip>
      );
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Slider: Story = {
    args: {
    },
};