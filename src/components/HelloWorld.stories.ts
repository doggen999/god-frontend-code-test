import type { Meta, StoryObj } from '@storybook/react';

import { HelloWorld } from './HelloWorld';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HelloWorld> = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof HelloWorld>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'HelloWorld',
  },
};

export const Secondary: Story = {
  args: {
    label: 'HelloWorld',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'HelloWorld',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'HelloWorld',
  },
};
