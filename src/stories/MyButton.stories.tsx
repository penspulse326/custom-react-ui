import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';
import Icon from './assets/Icon';

const meta = {
  title: '輸入元件/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    themeColor: {
      control: 'color',
      options: ['primary', 'warning', 'disable']
    },
    startIcon: {
      control: {
        type: 'boolean'
      },
      mapping: {
        true: <Icon />,
        false: null
      }
    },
    endIcon: {
      control: {
        type: 'boolean'
      },
      mapping: {
        true: <Icon />,
        false: null
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    isDisabled: false,
    isLoading: false,
    themeColor: 'primary'
  }
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    isDisabled: false,
    isLoading: false,
    themeColor: 'primary'
  }
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    isDisabled: false,
    isLoading: false,
    themeColor: 'primary'
  }
};
