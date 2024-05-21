import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';
import Icon from './assets/Icon';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Button',
    isDisabled: false,
    isLoading: false,
    themeColor: 'primary',
    onClick: fn()
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text']
    },
    themeColor: {
      control: 'color'
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
    },
    onClick: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};

export const Text: Story = {
  args: {
    variant: 'text'
  }
};

export const Custom: Story = {
  args: {
    variant: 'contained',
    style: {
      background: 'linear-gradient(0deg, #16309b 30%, #16a8e2 90%)',
      borderRadius: 50
    }
  }
};
