// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import React from 'react';

import { ComponentStory } from '@storybook/react';

import App from './App';

export default {
    title: 'App',
    component: App,
}

//template of how args map to rendering
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

//this story uses the template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#7ba4ee', label: 'App' };