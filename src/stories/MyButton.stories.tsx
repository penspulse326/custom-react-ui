import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';
import Button, { ButtonProps } from '../components/Button';

const meta: Meta = {
  title: '輸入元件/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    themeColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'error']
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text']
      }
    },
    startIcon: {
      control: 'text'
    },
    endIcon: {
      control: 'text'
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;

// 创建模板
const Template: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args} />
  </ThemeProvider>
);

// 定义故事
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'contained',
  isDisabled: false,
  isLoading: false,
  themeColor: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: <span>🚀</span>
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Default.args,
  endIcon: <span>🎉</span>
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  variant: 'outlined'
};

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  variant: 'text'
};
