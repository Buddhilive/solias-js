import { Story, Meta } from '@storybook/angular/types-6-0';
import { LabelComponent } from '../projects/components/src/lib/label/label.component';

export default {
    title: 'Atoms/Label',
    component: LabelComponent,

    argTypes: {
        text: {
            name: 'Label Text',
            description: 'Label text',
            table: {
                type: {
                    summary: 'Label text',
                    detail: 'text'
                },
            },
            control: 'text'
        }
    }
} as Meta;

const Template: Story<LabelComponent> = (args: LabelComponent) => ({
  props: args,
});

export const Standard = Template.bind({});

Standard.args = {
  text: 'Form label'
};