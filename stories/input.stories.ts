import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from '../projects/components/src/lib/input/input.component';

export default {
    title: 'Atoms/Inputs',
    component: InputComponent,

    argTypes: {
        type: {
            name: 'Input Type',
            description: 'Input type',
            defaultValue: 'text',
            type: 'string',
            table: {
                type: {
                    summary: 'Input Type',
                    detail: `'email' | 'number' |'password' | 'tel' | 'text'`
                },
            },
            control: 'select',
            options: ['email', 'number', 'password', 'tel', 'text']
        },
        placeholder: {
            name: 'Placeholder',
            description: 'Placeholder',
            table: {
                type: {
                    summary: 'Placeholder',
                    detail: `A short hint that describes the expected value of the input`
                },
            },
            control: 'text',
        }
    }
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
    props: args,
});

export const Standard = Template.bind({});

Standard.args = {
    type: 'text',
    placeholder: 'First name'
};