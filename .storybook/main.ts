const path = require('path');

module.exports = {
  stories: ['../docs/stories/index.stories.mdx', '../docs/**/*.stories.@(mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
