// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/components/src/lib/button/button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    label: {
      name: 'Label',
      description: 'Button label',
      table: {
        type: {
          summary: 'Button label',
          detail: 'text'
        },
      },
      control: 'text'
    },
    type: {
      name: 'Button Type',
      description: 'Button type',
      table: {
        type: {
          summary: 'Type of the button',
          detail: `'primary', 'secondary', 'danger'`
        },
      },
      control: 'select',
      options: ['primary', 'secondary', 'danger']
    },
    isDisabled: {
      name: 'Disabled',
      description: 'Disable',
      defaultValue: 10,
      tabel: {
        summary: 'Disabled',
        description: 'boolean',
      },
      control: 'boolean'
    },
    onClick: {
      description: 'Click Event',
      action: 'clicked',
      table: {
        category: 'Events'
      }
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'Button'
} as Partial<ButtonComponent>;
