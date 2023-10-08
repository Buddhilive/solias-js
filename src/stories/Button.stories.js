export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};
const Template = (args) => {
  return `<solias-button label="${args.label}"></solias-button>`;
};

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  label: 'Button',
};
