import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioComponent } from '../projects/components/src/lib/radio/radio.component';

export default {
    title: 'Components/Radio',
    component: RadioComponent,

    argTypes: {
        label: {
            name: 'Radio Label',
            description: 'Radio Label',
            table: {
                type: {
                    summary: 'Radio Label',
                    detail: 'text'
                },
            },
            control: 'text'
        },
        id: {
            name: 'Radio ID',
            description: 'Radio ID',
            table: {
                type: {
                    summary: 'Radio ID',
                    detail: 'text'
                },
            },
            control: 'text'
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
        }
    }
} as Meta;

const Template: Story<RadioComponent> = (args: RadioComponent) => ({
  props: args,
});

export const Standard = Template.bind({});

Standard.args = {
  label: 'Radio',
  id: 'Radio-1'
}