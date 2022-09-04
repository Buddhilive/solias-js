import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from '../projects/components/src/lib/checkbox/checkbox.component';

export default {
    title: 'Components/Checkbox',
    component: CheckboxComponent,

    argTypes: {
        label: {
            name: 'Checkbox Label',
            description: 'Checkbox Label',
            table: {
                type: {
                    summary: 'Checkbox Label',
                    detail: 'text'
                },
            },
            control: 'text'
        },
        id: {
            name: 'Checkbox ID',
            description: 'Checkbox ID',
            table: {
                type: {
                    summary: 'Checkbox ID',
                    detail: 'text'
                },
            },
            control: 'text'
        },
        isDisabled: {
            name: 'Disabled',
            description: 'Disable',
            defaultValue: false,
            tabel: {
                summary: 'Disabled',
                description: 'boolean',
            },
            control: 'boolean'
        }
    }
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Standard = Template.bind({});

Standard.args = {
  label: 'Checkbox',
  id: 'checkbox-1'
}