import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header.tsx';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const SidebarHeader: Story = {
    args: {
    },
};