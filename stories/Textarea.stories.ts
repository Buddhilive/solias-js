import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextareaComponent } from '../projects/components/src/lib/textarea/textarea.component';

export default {
    title: 'Components/Textarea',
    component: TextareaComponent,

    argTypes: {
        name: {
            name: 'Textarea Name',
            description: 'Textarea Name',
            table: {
                type: {
                    summary: 'Textarea Name',
                    detail: 'text'
                },
            },
            control: 'text'
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
        },
        cols: {
            name: 'Columns',
            description: 'Number of Columns',
            defaultValue: 30,
            tabel: {
                summary: 'Columns',
                description: 'Number of Columns',
            },
            control: 'number'
        },
        rows: {
            name: 'Rows',
            description: 'Number of Rows',
            defaultValue: 10,
            tabel: {
                summary: 'Rows',
                description: 'Number of Rows',
            },
            control: 'number'
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
        isReadOnly: {
            name: 'Read Only',
            description: 'Read only',
            defaultValue: 10,
            tabel: {
                summary: 'Read Only',
                description: 'boolean',
            },
            control: 'boolean'
        }
    }
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
    props: args,
});

export const Standard = Template.bind({});

Standard.args = {
    placeholder: 'Write something...'
};