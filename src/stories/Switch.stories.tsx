import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Switch from '../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    isChecked: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    },
    unCheckedLabel: {
      control: 'text'
    },
    checkedLabel: {
      control: 'text'
    },
    themeColor: {
      control: 'color'
    },
    size: {
      control: 'number',
      defaultValue: 14
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const SwitchWithHook = (props: React.ComponentProps<typeof Switch>) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const handleChange = () => {
    setIsChecked(!isChecked);
    props.onChange && props.onChange();
  };

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

  return <Switch {...props} isChecked={isChecked} onChange={handleChange} />;
};

export const Default: Story = {
  render: (args) => <SwitchWithHook {...args} />
};
