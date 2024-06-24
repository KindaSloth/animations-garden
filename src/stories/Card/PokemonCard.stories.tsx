import type { Meta, StoryObj } from '@storybook/react';

import { PokemonCard } from './PokemonCard';

const meta: Meta<typeof PokemonCard> = {
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

export const Pokemon: Story = {
    args: {
    },
};