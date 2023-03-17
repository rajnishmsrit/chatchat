//Libs
import * as React from 'react';

import Divider from './index';

// Types
export default {
  title: "01-Atoms/Divider",
  component: Divider,
  args: {
    color: "light",
    style: "thin"
  }
};

const Template = (args) => <Divider {...args} />;

export const lightThin = Template.bind({});
lightThin.args = {
  color: "light",
  style: "thin"
};

export const darkThin = Template.bind({});
darkThin.args = {
  color: "dark",
  style: "thin"
};

export const lightThick = Template.bind({});
lightThick.args = {
  color: "light",
  style: "thick"
};

export const darkThick = Template.bind({});
darkThick.args = {
  color: "dark",
  style: "thick"
};