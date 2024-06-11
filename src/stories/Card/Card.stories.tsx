import type { Meta, StoryObj } from '@storybook/react';

import { PokemonCard as Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Pokemon: Story = {
    args: {
    },
};