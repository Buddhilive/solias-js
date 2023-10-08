export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    disable: { control: 'boolean' },
    styleType: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
    },
    styleClass: { control: 'text' },
    iconName:  { control: 'text' },
  },
};
const Template = (args) => {
  return `<solias-button label="${args.label}" style-class="${args.styleClass}" style-type="${args.styleType}" disable="${args.disable}" icon-name="${args.iconName}" onclick="${args.onClick}"></solias-button>`;
};

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  label: 'Button',
  disable: false,
  iconName: '',
  styleType: 'filled'
};
