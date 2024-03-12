#! /usr/bin/env node

"use strict";

const fs = require("fs");

function content(name) {
  return `import type { Meta, StoryObj } from '@storybook/react';

import ${name} from "./index";

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
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

type Story = StoryObj<typeof ${name}>;

export const Primary: Story = {
  args: {
    label: 'Generated label',
  },
};
`;
}
module.exports = {
  generate(name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
